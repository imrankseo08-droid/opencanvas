import { EMAIL_RE, clientIp, env, json, postWebhook, rateLimited, sendMail, smtpConfigured, str } from '@/lib/forms';

const ALLOWED = ['AI automation', 'Marketing automation', 'SEO', 'Social media', 'Graphic design', 'Motion graphics', 'Web design'];

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400);
  }

  // Honeypot: bots fill the hidden field. Pretend success, do nothing.
  if (str(data.company_fax, 200)) return json({ ok: true });
  if (rateLimited(clientIp(req))) return json({ ok: false, error: 'Too many requests. Please try again in a few minutes.' }, 429);

  const name = str(data.name, 120);
  const email = str(data.email, 200);
  const website = str(data.website, 300);
  const notes = str(data.notes, 3000);
  const services = Array.isArray(data.services) ? data.services.filter((s): s is string => ALLOWED.includes(s as string)) : [];

  if (!name) return json({ ok: false, error: 'Please add your name.' }, 400);
  if (!EMAIL_RE.test(email)) return json({ ok: false, error: 'Please add a valid email address.' }, 400);

  const lead = { type: 'audit_request', name, email, website, services, notes, submittedAt: new Date().toISOString(), page: req.headers.get('referer') || '' };
  const webhook = env('AUDIT_WEBHOOK_URL') || env('FORMS_WEBHOOK_URL');

  if (!smtpConfigured() && !webhook) {
    console.warn('[audit] No SMTP or webhook configured. Submission:', lead);
    if (process.env.NODE_ENV === 'production') {
      return json({ ok: false, error: 'Our form is not connected yet. Please email us directly.' }, 503);
    }
    return json({ ok: true, dev: true });
  }

  try {
    const jobs: Promise<unknown>[] = [];
    if (smtpConfigured()) {
      jobs.push(
        sendMail({
          to: env('CONTACT_TO_EMAIL'),
          replyTo: email,
          subject: `New audit request: ${name}${website ? ` (${website})` : ''}`,
          text: `Name: ${name}\nEmail: ${email}\nWebsite: ${website || '-'}\nInterested in: ${services.join(', ') || '-'}\n\nNotes:\n${notes || '-'}\n\nSent from ${lead.page}`,
        }),
      );
      if (env('AUTO_REPLY') !== 'false') {
        jobs.push(
          sendMail({
            to: email,
            subject: 'We got your audit request',
            text: `Hi ${name.split(' ')[0]},\n\nThanks for booking a free audit with Open Canvas Marketing. We'll email you within one working day with a few times for the call.\n\nBefore we speak, we review your website, socials and lead flow, so the call is useful from the first minute.\n\nImran Khan\nFounder, Open Canvas Marketing`,
          }),
        );
      }
    }
    if (webhook) jobs.push(postWebhook(webhook, lead));
    await Promise.all(jobs);
    return json({ ok: true });
  } catch (err) {
    console.error('[audit] delivery failed', err);
    return json({ ok: false, error: 'We could not send your request. Please try again or email us directly.' }, 502);
  }
}

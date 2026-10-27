import { EMAIL_RE, clientIp, env, json, postWebhook, rateLimited, sendMail, smtpConfigured, str } from '@/lib/forms';

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return json({ ok: false, error: 'Invalid request.' }, 400);
  }
  if (str(data.company_fax, 200)) return json({ ok: true });
  if (rateLimited(clientIp(req))) return json({ ok: false, error: 'Too many requests. Please try again in a few minutes.' }, 429);

  const email = str(data.email, 200);
  const source = data.source === 'checklist' ? 'checklist' : 'newsletter';
  if (!EMAIL_RE.test(email)) return json({ ok: false, error: 'Please add a valid email address.' }, 400);

  const payload = { type: 'subscribe', source, email, submittedAt: new Date().toISOString() };
  const webhook = env('SUBSCRIBE_WEBHOOK_URL') || env('FORMS_WEBHOOK_URL');

  if (!smtpConfigured() && !webhook) {
    console.warn('[subscribe] No SMTP or webhook configured. Submission:', payload);
    if (process.env.NODE_ENV === 'production') {
      return json({ ok: false, error: 'Sign-up is not connected yet. Please try again soon.' }, 503);
    }
    return json({ ok: true, dev: true });
  }

  try {
    const jobs: Promise<unknown>[] = [];
    if (webhook) jobs.push(postWebhook(webhook, payload));
    if (smtpConfigured()) {
      jobs.push(sendMail({ to: env('CONTACT_TO_EMAIL'), subject: `New ${source} sign-up: ${email}`, text: `${email} signed up (${source}).` }));
      const pdf = env('CHECKLIST_URL');
      if (source === 'checklist' && pdf) {
        jobs.push(
          sendMail({
            to: email,
            subject: 'Your automation checklist',
            text: `Thanks for signing up.\n\nHere is your 10-point marketing automation checklist:\n${pdf}\n\nTen yes-or-no questions, in order of impact. Start with the first "no".\n\nImran Khan\nOpen Canvas Marketing`,
          }),
        );
      }
    }
    await Promise.all(jobs);
    return json({ ok: true });
  } catch (err) {
    console.error('[subscribe] delivery failed', err);
    return json({ ok: false, error: 'We could not sign you up. Please try again.' }, 502);
  }
}

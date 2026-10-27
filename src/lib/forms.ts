import nodemailer from 'nodemailer';

/* Server-only helpers for the audit and subscribe forms. Configure in .env (see .env.example). */

const env = (k: string) => (process.env[k] || '').trim();

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function smtpConfigured() {
  return !!(env('SMTP_HOST') && env('SMTP_USER') && env('SMTP_PASS') && env('CONTACT_TO_EMAIL'));
}

let transporter: nodemailer.Transporter | null = null;
function mailer() {
  if (!transporter) {
    const port = Number(env('SMTP_PORT') || 465);
    transporter = nodemailer.createTransport({
      host: env('SMTP_HOST'),
      port,
      secure: env('SMTP_SECURE') ? env('SMTP_SECURE') === 'true' : port === 465,
      auth: { user: env('SMTP_USER'), pass: env('SMTP_PASS') },
    });
  }
  return transporter;
}

export async function sendMail(opts: { to: string; subject: string; text: string; replyTo?: string }) {
  const from = env('SMTP_FROM') || `Open Canvas Marketing <${env('SMTP_USER')}>`;
  await mailer().sendMail({ from, ...opts });
}

/** Forward a submission to Zapier, Make, n8n, a CRM webhook, etc. */
export async function postWebhook(url: string, payload: Record<string, unknown>) {
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  if (!res.ok) throw new Error('Webhook responded ' + res.status);
}

/* Tiny in-memory rate limiter: max N submissions per IP per window. */
const hits = new Map<string, number[]>();
export function rateLimited(ip: string, max = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > max;
}

export function clientIp(req: Request) {
  return (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || req.headers.get('x-real-ip') || 'unknown';
}

export const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });

export { env };

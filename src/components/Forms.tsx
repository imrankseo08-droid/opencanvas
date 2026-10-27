'use client';

import { useId, useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Icon } from './ds';

function Field({
  label, name, type = 'text', hint, required, autoComplete, placeholder, multiline, rows = 4,
}: {
  label: string; name: string; type?: string; hint?: string; required?: boolean; autoComplete?: string; placeholder?: string; multiline?: boolean; rows?: number;
}) {
  const id = useId();
  const common = {
    id, name, required, placeholder, autoComplete, className: 'oc-input-field',
    'aria-describedby': hint ? id + '-hint' : undefined,
  };
  return (
    <div className="oc-input">
      <label htmlFor={id} className="oc-input-label">{label}</label>
      {multiline ? <textarea {...common} rows={rows} /> : <input {...common} type={type} />}
      {hint ? <p id={id + '-hint'} className="oc-input-msg">{hint}</p> : null}
    </div>
  );
}

/** Hidden field bots fill in and people never see. */
function Honeypot() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', left: -10000, width: 1, height: 1, overflow: 'hidden' }}>
      <label>
        Leave this empty
        <input type="text" name="company_fax" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

async function post(url: string, data: Record<string, unknown>) {
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || !body.ok) throw new Error(body.error || 'Something went wrong. Please try again or email us.');
}

const SERVICES = ['AI automation', 'Marketing automation', 'SEO', 'Social media', 'Graphic design', 'Motion graphics', 'Web design'];

export function AuditForm() {
  const router = useRouter();
  const [picked, setPicked] = useState<Record<string, boolean>>({ 'AI automation': true });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setBusy(true);
    const fd = new FormData(e.currentTarget);
    try {
      await post('/api/audit', {
        name: fd.get('name'), email: fd.get('email'), website: fd.get('website'), notes: fd.get('notes'),
        services: SERVICES.filter((s) => picked[s]), company_fax: fd.get('company_fax'),
      });
      router.push('/thank-you/audit');
    } catch (err) {
      setError((err as Error).message);
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 24, position: 'relative' }} noValidate={false}>
      <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 28, lineHeight: '34px', fontWeight: 500 }}>Book your audit</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
        <Field label="Your name" name="name" autoComplete="name" required />
        <Field label="Work email" name="email" type="email" autoComplete="email" required />
      </div>
      <Field label="Company website" name="website" type="url" placeholder="https://" hint="No website yet? Leave it blank." />
      <fieldset style={{ border: 0, margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <legend style={{ padding: 0, marginBottom: 12, fontWeight: 600, fontSize: 15, lineHeight: '20px' }}>What would you like help with?</legend>
        <p style={{ margin: '-4px 0 4px', fontSize: 13, lineHeight: '20px', color: 'var(--muted)' }}>
          <span style={{ color: 'var(--systems-text)', fontWeight: 600 }}>Systems</span> · AI, automation, SEO &nbsp;&nbsp;{' '}
          <span style={{ color: 'var(--studio-text)', fontWeight: 600 }}>Studio</span> · social, design, motion, web
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {SERVICES.map((n, i) => {
            const on = !!picked[n];
            const sys = i < 3;
            return (
              <label key={n} className="pick" style={{ position: 'relative', display: 'inline-flex' }}>
                <input type="checkbox" checked={on} onChange={() => setPicked((p) => ({ ...p, [n]: !p[n] }))} />
                <span
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8, minHeight: 44, boxSizing: 'border-box', padding: '0 16px',
                    borderRadius: 'var(--radius-full)', fontSize: 14, fontWeight: 500, cursor: 'pointer',
                    border: `1.5px solid ${on ? (sys ? 'var(--systems)' : 'var(--studio)') : 'var(--border)'}`,
                    background: on ? (sys ? 'var(--systems)' : 'var(--studio)') : 'var(--paper)',
                    color: on ? (sys ? 'var(--on-systems)' : 'var(--on-studio)') : 'var(--ink)',
                  }}
                >
                  {n}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>
      <Field label="Anything we should know?" name="notes" multiline hint="Goals, deadlines, what has or hasn't worked. A sentence or two is plenty." />
      <Honeypot />
      {error ? <p role="alert" style={{ margin: 0, color: 'var(--danger)', fontSize: 15 }}>{error}</p> : null}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
        <Button variant="gold" size="lg" type="submit" icon="arrow-right" disabled={busy}>
          {busy ? 'Sending…' : 'Request my audit'}
        </Button>
        <span style={{ fontSize: 14, lineHeight: '22px', color: 'var(--muted)' }}>We reply within one working day.</span>
      </div>
    </form>
  );
}

export function SubscribeForm({ source, variant }: { source: 'checklist' | 'newsletter'; variant: 'checklist' | 'newsletter' }) {
  const router = useRouter();
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setBusy(true);
    const fd = new FormData(e.currentTarget);
    try {
      await post('/api/subscribe', { email: fd.get('email'), source, company_fax: fd.get('company_fax') });
      if (source === 'checklist') router.push('/thank-you/checklist');
      else setDone(true);
    } catch (err) {
      setError((err as Error).message);
    }
    setBusy(false);
  }

  if (done) {
    return (
      <p role="status" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 12, fontSize: 17, fontWeight: 500 }}>
        <span style={{ width: 36, height: 36, borderRadius: 999, background: 'var(--paper)', color: 'var(--gold-text)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="check" size={20} />
        </span>
        You’re in. The next issue arrives early next month.
      </p>
    );
  }
  return (
    <form onSubmit={submit} style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'flex-end', position: 'relative' }}>
      <div style={{ flex: '1 1 240px', minWidth: 0 }}>
        <Field label="Work email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
      </div>
      <Honeypot />
      <Button variant="primary" size="lg" type="submit" icon="arrow-right" disabled={busy}>
        {variant === 'checklist' ? 'Send me the checklist' : 'Subscribe'}
      </Button>
      {error ? <p role="alert" style={{ margin: 0, flexBasis: '100%', color: 'var(--danger)', fontSize: 15 }}>{error}</p> : null}
    </form>
  );
}

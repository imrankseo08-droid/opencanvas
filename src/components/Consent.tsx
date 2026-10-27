'use client';

import Script from 'next/script';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const KEY = 'oc-consent';
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
type Choice = 'granted' | 'denied' | null;

function read(): Choice {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

/**
 * Cookie banner + Google Analytics 4.
 * GA only loads after the visitor accepts, and only if NEXT_PUBLIC_GA_ID is set.
 * If no analytics ID is set, no banner is shown at all (the site sets no optional cookies).
 */
export function ConsentManager() {
  const [choice, setChoice] = useState<Choice>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const c = read();
    setChoice(c);
    if (GA_ID && c === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener('oc:cookie-settings', reopen);
    return () => window.removeEventListener('oc:cookie-settings', reopen);
  }, []);

  const decide = (c: 'granted' | 'denied') => {
    try {
      localStorage.setItem(KEY, c);
    } catch {}
    setChoice(c);
    setOpen(false);
    if (c === 'denied' && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', { analytics_storage: 'denied' });
    }
  };

  return (
    <>
      {GA_ID && choice === 'granted' ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted'});
gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      ) : null}
      {open && GA_ID ? (
        <div role="dialog" aria-live="polite" aria-label="Cookie preferences" className="consent">
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55 }}>
            We use analytics cookies to understand how the site is used, only if you agree.{' '}
            <Link href="/privacy" style={{ textDecorationColor: 'rgba(212,175,55,.8)' }}>
              Privacy policy
            </Link>
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button type="button" className="oc-btn oc-btn-outline oc-btn-md" onClick={() => decide('denied')}>
              <span>Decline</span>
            </button>
            <button type="button" className="oc-btn oc-btn-gold oc-btn-md" onClick={() => decide('granted')}>
              <span>Accept analytics</span>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function CookieSettingsLink() {
  if (!GA_ID) return null;
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('oc:cookie-settings'))}
      style={{ background: 'none', border: 0, padding: 0, font: 'inherit', color: 'var(--on-systems)', cursor: 'pointer' }}
    >
      Cookie settings
    </button>
  );
}

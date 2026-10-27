import Link from 'next/link';
import { site, filled } from '@/lib/site';
import { services } from '@/lib/routes';
import { Logo } from './Logo';
import { Button, Icon } from './ds';
import { CookieSettingsLink } from './Consent';

const MARK = 'M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124';

const company = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

function Social({ label, href }: { label: string; href: string }) {
  const ok = filled(href);
  return (
    <a
      href={ok ? href : '#'}
      {...(ok ? { target: '_blank', rel: 'noopener me' } : {})}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}
    >
      {label} <Icon name="arrow-up-right" size={14} />
    </a>
  );
}

export function Footer() {
  const col = { display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15 } as const;
  const dot = (bg: string) => (
    <span style={{ width: 8, height: 8, borderRadius: 999, background: bg }} />
  );
  return (
    <footer
      className="oc-night oc-systems foot"
      style={{ position: 'relative', overflow: 'hidden', marginTop: 'clamp(72px, 8vw, 112px)', background: 'var(--systems)', color: 'var(--on-systems)', borderRadius: '32px 32px 0 0' }}
    >
      <svg className="wm-mark" viewBox="28 28 200 200" aria-hidden="true" style={{ right: -160, top: -140, width: 560, height: 560, color: 'rgba(244, 241, 234, 0.045)' }}>
        <path d={MARK} />
      </svg>
      <div className="wrap" style={{ position: 'relative', paddingTop: 'clamp(72px, 8vw, 112px)', paddingBottom: 32, display: 'flex', flexDirection: 'column', gap: 'clamp(56px, 7vw, 96px)' }}>
        <div className="foot-grid">
          <div className="sv" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 24, minWidth: 0 }}>
            <Logo variant="light" style={{ height: 48 }} />
            <p style={{ margin: 0, maxWidth: '22em', fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 2.4vw, 32px)', lineHeight: 1.2, fontWeight: 400, letterSpacing: '-0.015em' }}>
              Creative craft. <span style={{ color: 'var(--gold)' }}>Intelligent growth.</span>
            </p>
            <p style={{ margin: 0, maxWidth: '30em', fontSize: 15, lineHeight: 1.6, color: 'var(--on-systems-muted)' }}>
              A digital marketing studio for brand, content, motion and the automation that makes it pay.
            </p>
            <Button variant="gold" icon="arrow-right" href="/contact">Book a free audit</Button>
          </div>
          <nav className="sv" aria-label="Systems services" style={col}>
            <p className="eyebrow-n" style={{ margin: '0 0 6px', display: 'flex', alignItems: 'center', gap: 8 }}>{dot('var(--gold)')}SYSTEMS</p>
            {services.filter((s) => s.pillar === 'Systems').map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} style={{ alignSelf: 'flex-start' }}>{s.name}</Link>
            ))}
          </nav>
          <nav className="sv" aria-label="Studio services" style={col}>
            <p className="eyebrow-n" style={{ margin: '0 0 6px', display: 'flex', alignItems: 'center', gap: 8 }}>{dot('var(--studio-tint)')}STUDIO</p>
            {services.filter((s) => s.pillar === 'Studio').map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} style={{ alignSelf: 'flex-start' }}>{s.name}</Link>
            ))}
          </nav>
          <nav className="sv" aria-label="Company" style={col}>
            <p className="eyebrow-n" style={{ margin: '0 0 6px' }}>COMPANY</p>
            {company.map((c) => (
              <Link key={c.href} href={c.href} style={{ alignSelf: 'flex-start' }}>{c.label}</Link>
            ))}
          </nav>
          <div className="sv2" style={col}>
            <p className="eyebrow-n" style={{ margin: '0 0 6px' }}>SAY HELLO</p>
            {filled(site.email) ? (
              <a href={`mailto:${site.email}`} style={{ alignSelf: 'flex-start' }}>{site.email}</a>
            ) : (
              <Link href="/contact" style={{ alignSelf: 'flex-start' }}>{site.email}</Link>
            )}
            {filled(site.phoneE164) ? (
              <a href={`https://wa.me/${site.phoneE164.replace(/\D/g, '')}`} style={{ alignSelf: 'flex-start' }}>{site.whatsappDisplay}</a>
            ) : (
              <span>{site.whatsappDisplay}</span>
            )}
            <span style={{ color: 'var(--on-systems-muted)' }}>{site.location}</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', marginTop: 10 }}>
              <Social label="Instagram" href={site.socials.instagram} />
              <Social label="LinkedIn" href={site.socials.linkedin} />
              <Social label="Behance" href={site.socials.behance} />
            </div>
          </div>
        </div>
        <svg className="foot-word-svg sv" viewBox="0 0 1200 190" aria-hidden="true">
          <text x={0} y={156} textLength={1090} lengthAdjust="spacingAndGlyphs">open canvas</text>
          <circle cx={1166} cy={140} r={22} style={{ fill: 'var(--gold)' }} />
        </svg>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px 24px', paddingTop: 24, borderTop: '1px solid rgba(244, 241, 234, 0.16)', fontSize: 14, color: 'var(--on-systems-muted)' }}>
          <span>© {new Date().getFullYear()} {site.name}. Founded by {site.founder.name}.</span>
          <span style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <CookieSettingsLink />
          </span>
          <a href="#top" className="to-top" aria-label="Back to top">
            <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 18, height: 18 }}>
              <path d="M12 19V5M6 11l6-6 6 6" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }} />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

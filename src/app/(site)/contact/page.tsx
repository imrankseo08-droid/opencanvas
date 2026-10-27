import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, pageMeta, webPageLd } from '@/lib/seo';
import { AuditForm } from '@/components/Forms';

export const metadata: Metadata = pageMeta("/contact");

export default function Page() {
  return (
    <>
      <JsonLd data={[webPageLd("/contact"), breadcrumbLd("/contact")]} />
      <section className="wrap" style={{ paddingTop: "clamp(40px, 6vw, 88px)", paddingBottom: "clamp(24px, 3vw, 40px)", display: "flex", flexWrap: "wrap", gap: "56px", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px" }}>
          <nav aria-label="Breadcrumb">
            <p className="crumbs">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Book a free audit</span>
            </p>
          </nav>
          <p className="eyebrow-n" style={{ margin: "0" }}>FREE AUDIT</p>
          <h1 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "500", fontSize: "clamp(44px, 5.4vw, 76px)", lineHeight: "1", letterSpacing: "-0.035em" }}>
            Let's look at your marketing together
          </h1>
          <p style={{ margin: "0", maxWidth: "32em", fontSize: "20px", lineHeight: "32px", color: "var(--ink-soft)" }}>
            Thirty minutes on a call. We review your brand, website and how leads reach you, then send a written list of quick wins within two working days.
          </p>
          <ol style={{ listStyle: "none", margin: "8px 0 0", padding: "0", display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}>
            <li style={{ display: "flex", gap: "20px", alignItems: "flex-start", paddingTop: "20px", borderTop: "1px solid var(--line)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "26px", color: "var(--gold-text)" }}>01</span>
              <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <strong style={{ fontFamily: "var(--font-display)", fontSize: "20px", lineHeight: "28px", fontWeight: "500" }}>
                  Tell us a little
                </strong>
                <span style={{ fontSize: "15px", lineHeight: "24px", color: "var(--ink-soft)" }}>
                  Fill in the form. It takes two minutes.
                </span>
              </span>
            </li>
            <li style={{ display: "flex", gap: "20px", alignItems: "flex-start", paddingTop: "20px", borderTop: "1px solid var(--line)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "26px", color: "var(--gold-text)" }}>02</span>
              <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <strong style={{ fontFamily: "var(--font-display)", fontSize: "20px", lineHeight: "28px", fontWeight: "500" }}>
                  We look before we talk
                </strong>
                <span style={{ fontSize: "15px", lineHeight: "24px", color: "var(--ink-soft)" }}>
                  We review your site, socials and lead flow ahead of the call.
                </span>
              </span>
            </li>
            <li style={{ display: "flex", gap: "20px", alignItems: "flex-start", paddingTop: "20px", borderTop: "1px solid var(--line)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "26px", color: "var(--gold-text)" }}>03</span>
              <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <strong style={{ fontFamily: "var(--font-display)", fontSize: "20px", lineHeight: "28px", fontWeight: "500" }}>
                  You get the list
                </strong>
                <span style={{ fontSize: "15px", lineHeight: "24px", color: "var(--ink-soft)" }}>
                  A short written list of quick wins, yours to keep.
                </span>
              </span>
            </li>
          </ol>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", color: "var(--ink-soft)" }}>
            <a href={`mailto:${site.email}`} style={{ display: "flex", gap: "10px", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <path d="M4 7.5l8 6 8-6" />
              </svg>
              {site.email}
            </a>
            <a href={`https://wa.me/${site.phoneE164.replace(/\D/g, '')}`} target="_blank" rel="noopener" style={{ display: "flex", gap: "10px", alignItems: "center", color: "inherit", textDecoration: "none" }}>
              <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M6 4h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7l-5 4v-4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" />
                <path d="M8 10.5h8" />
              </svg>
              WhatsApp {site.whatsappDisplay}
            </a>
          </div>
        </div>
        <div style={{ flex: "1 1 520px", minWidth: "0", background: "var(--paper)", border: "1px solid var(--line)", borderRadius: "var(--radius-xl)", padding: "clamp(24px, 4vw, 48px)", boxShadow: "var(--shadow-sm)" }}>
          <AuditForm />
        </div>
      </section>
    </>
  );
}

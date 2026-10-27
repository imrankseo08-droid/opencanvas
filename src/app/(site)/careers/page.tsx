import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, pageMeta, webPageLd } from '@/lib/seo';

export const metadata: Metadata = pageMeta("/careers");

export default function Page() {
  return (
    <>
      <JsonLd data={[webPageLd("/careers"), breadcrumbLd("/careers")]} />
      <section className="s01" style={{ position: "relative", overflow: "clip" }}>
        <svg className="wm-mark wm-soft" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-220px", top: "-60px", width: "640px", height: "640px", color: "rgba(13, 13, 13, 0.035)" }}>
          <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
        </svg>
        <div className="wrap" style={{ position: "relative", paddingTop: "clamp(56px, 7vw, 104px)", paddingBottom: "clamp(24px, 3vw, 40px)" }}>
          <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px", minWidth: "0" }}>
            <nav aria-label="Breadcrumb">
              <p className="crumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Careers</span></p>
            </nav>
            <p className="rise d1 eyebrow-n" style={{ margin: "8px 0 0" }}>CAREERS</p>
            <h1 className="rise d2 h1" style={{ maxWidth: "12em" }}>Small team. High standards. Real work.</h1>
            <p className="rise d3 lede">
              We are a young studio that designs brands and builds the systems behind them. When we grow, we look for people who care about both the craft and whether it works.
            </p>
          </div>
        </div>
      </section>
      <section className="wrap sec" aria-label="How we work">
        <div className="sv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px 48px", marginBottom: "clamp(40px, 5vw, 64px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>HOW WE WORK</p>
            <h2 className="h2">What working here is like.</h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: "20px" }}>
          <div className="sv card" style={{ padding: "clamp(24px, 3vw, 32px)", display: "flex", flexDirection: "column", gap: "32px" }}>
            <span style={{ display: "inline-flex", width: "48px", height: "48px", alignItems: "center", justifyContent: "center", borderRadius: "14px", background: "var(--gold-tint)", color: "var(--gold-text)" }}>
              <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M8 3h8l3 8-7 10-7-10z" />
                <path d="M12 21v-7" />
                <circle cx="12" cy="11.5" r="1.75" />
              </svg>
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <h3 className="h3" style={{ fontSize: "24px" }}>One brief, both studios</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Designers and automation builders plan together from day one.
              </p>
            </div>
          </div>
          <div className="sv card" style={{ padding: "clamp(24px, 3vw, 32px)", display: "flex", flexDirection: "column", gap: "32px" }}>
            <span style={{ display: "inline-flex", width: "48px", height: "48px", alignItems: "center", justifyContent: "center", borderRadius: "14px", background: "var(--gold-tint)", color: "var(--gold-text)" }}>
              <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M5 12.5 10 17.5 19 7" />
              </svg>
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <h3 className="h3" style={{ fontSize: "24px" }}>You own your work</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Your name on the brief, your call on the details, your work in the portfolio.
              </p>
            </div>
          </div>
          <div className="sv card" style={{ padding: "clamp(24px, 3vw, 32px)", display: "flex", flexDirection: "column", gap: "32px" }}>
            <span style={{ display: "inline-flex", width: "48px", height: "48px", alignItems: "center", justifyContent: "center", borderRadius: "14px", background: "var(--gold-tint)", color: "var(--gold-text)" }}>
              <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M6 4h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7l-5 4v-4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" />
                <path d="M8 10.5h8" />
              </svg>
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <h3 className="h3" style={{ fontSize: "24px" }}>Direct, kind feedback</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                We say what we think, early, and we say it respectfully.
              </p>
            </div>
          </div>
          <div className="sv card" style={{ padding: "clamp(24px, 3vw, 32px)", display: "flex", flexDirection: "column", gap: "32px" }}>
            <span style={{ display: "inline-flex", width: "48px", height: "48px", alignItems: "center", justifyContent: "center", borderRadius: "14px", background: "var(--gold-tint)", color: "var(--gold-text)" }}>
              <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <rect x="5" y="5" width="14" height="14" rx="3" />
                <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <h3 className="h3" style={{ fontSize: "24px" }}>Good tools, paid for</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                The software, courses and equipment you need to do great work.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap sec" aria-label="Open roles">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))", gap: "24px" }}>
          <div className="sv card" style={{ padding: "clamp(28px, 4vw, 48px)", display: "flex", flexDirection: "column", gap: "20px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>OPEN ROLES</p>
            <h2 className="h2" style={{ fontSize: "clamp(30px, 3vw, 42px)" }}>No open roles right now.</h2>
            <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
              When we hire, roles are listed here first. Leave your details and we will write to you when something fits.
            </p>
            <div style={{ marginTop: "auto" }}>
              <Link href="/contact" className="oc-btn oc-btn-primary oc-btn-md">
                <span>Send us your details</span>
                <svg className="oc-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="sv2 oc-night oc-studio" style={{ position: "relative", overflow: "hidden", padding: "clamp(28px, 4vw, 48px)", borderRadius: "var(--radius-xl)", background: "var(--studio)", color: "var(--on-studio)", display: "flex", flexDirection: "column", gap: "20px" }}>
            <svg className="wm-mark " viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-60px", bottom: "-80px", width: "300px", height: "300px", color: "rgba(255, 243, 236, 0.10)" }}>
              <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
            </svg>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "20px" }}>
              <p className="eyebrow-n" style={{ margin: "0" }}>FREELANCE NETWORK</p>
              <h2 className="h2" style={{ fontSize: "clamp(30px, 3vw, 42px)" }}>Freelancers, say hello.</h2>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6" }}>
                We work with a small network of specialists on bigger projects. Send your portfolio to [careers@yourdomain.com].
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", color: "var(--ink)" }}>
                <span className="tchip"><i aria-hidden="true" />Brand designers</span>
                <span className="tchip"><i aria-hidden="true" />Motion designers</span>
                <span className="tchip"><i aria-hidden="true" />Automation builders</span>
                <span className="tchip"><i aria-hidden="true" />SEO writers</span>
                <span className="tchip"><i aria-hidden="true" />Web developers</span>
                <span className="tchip"><i aria-hidden="true" />Video editors</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap sec" aria-label="Hiring process">
        <div className="sv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px 48px", marginBottom: "clamp(40px, 5vw, 64px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>HOW HIRING WORKS</p>
            <h2 className="h2">Three steps, all of them respectful of your time.</h2>
          </div>
        </div>
        <ol style={{ listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "32px" }}>
          <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "24px", borderTop: "2px solid #d4af37" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)" }}>01</span>
            <h3 className="h3">Portfolio</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
              Send your work and a few lines about what you enjoy making.
            </p>
          </li>
          <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "24px", borderTop: "2px solid var(--line)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)" }}>02</span>
            <h3 className="h3">Conversation</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
              A relaxed call about your work and ours.
            </p>
          </li>
          <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "24px", borderTop: "2px solid var(--line)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)" }}>03</span>
            <h3 className="h3">Paid trial</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
              A small, paid project so we both see how it feels.
            </p>
          </li>
        </ol>
      </section>
    </>
  );
}

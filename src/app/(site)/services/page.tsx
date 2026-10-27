import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, faqLd, itemListLd, pageMeta, webPageLd } from '@/lib/seo';

export const metadata: Metadata = pageMeta("/services");

export default function Page() {
  return (
    <>
      <JsonLd data={[webPageLd("/services"), breadcrumbLd("/services"), faqLd([{"q": "Do I need both Systems and Studio?", "a": "No. Many clients start with one. We plan with both in mind so the pieces fit together when you add more."}, {"q": "Which tools do you work with?", "a": "Where we can, the ones you already pay for: your CRM, email platform, ad accounts and website. If you have nothing yet, we recommend a simple stack and set it up."}, {"q": "Will AI replace my team?", "a": "No. It takes the repetitive work: first replies, sorting, drafts. A person on your team or ours approves anything that matters."}, {"q": "How is pricing structured?", "a": "Fixed-price projects and monthly retainers. Every engagement starts with the free audit and a written scope."}]), itemListLd("/services", [{"name": "AI automation", "url": "/services/ai-automation"}, {"name": "Marketing automation", "url": "/services/marketing-automation"}, {"name": "SEO", "url": "/services/seo"}, {"name": "Social media management", "url": "/services/social-media"}, {"name": "Graphic design and branding", "url": "/services/graphic-design"}, {"name": "Motion graphics", "url": "/services/motion-graphics"}, {"name": "Web design and development", "url": "/services/web-design"}])]} />
      <section className="s01" style={{ position: "relative", overflow: "clip" }}>
        <svg className="wm-mark wm-soft" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-220px", top: "-60px", width: "640px", height: "640px", color: "rgba(13, 13, 13, 0.035)" }}>
          <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
        </svg>
        <div className="wrap" style={{ position: "relative", paddingTop: "clamp(56px, 7vw, 104px)", paddingBottom: "clamp(24px, 3vw, 40px)" }}>
          <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px", minWidth: "0" }}>
            <nav aria-label="Breadcrumb">
              <p className="crumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Services</span></p>
            </nav>
            <p className="rise d1 eyebrow-n" style={{ margin: "8px 0 0" }}>SERVICES</p>
            <h1 className="rise d2 h1" style={{ maxWidth: "12em" }}>Seven services, built to work together.</h1>
            <p className="rise d3 lede">
              Hire us for one, or let us run the whole picture. Either way, the creative and the systems are planned by the same team.
            </p>
            <div className="rise d4" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 24px" }}>
              <a href="#systems" style={{ textDecoration: "none" }}><span className="oc-tag oc-tag-systems">Systems · 01–03</span></a>
              <a href="#studio" style={{ textDecoration: "none" }}><span className="oc-tag oc-tag-studio">Studio · 04–07</span></a>
            </div>
          </div>
        </div>
      </section>
      <section id="systems" style={{ padding: "clamp(40px, 5vw, 64px) clamp(8px, 2vw, 32px) 0" }}>
        <div className="oc-night oc-systems band" style={{ background: "var(--systems)", color: "var(--on-systems)", padding: "clamp(48px, 6vw, 96px) 0" }}>
          <svg className="wm-mark para" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-120px", bottom: "-160px", width: "520px", height: "520px", color: "rgba(244, 241, 234, 0.05)" }}>
            <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
          </svg>
          <div className="wrap" style={{ position: "relative" }}>
            <div className="sv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px 48px", marginBottom: "40px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "640px" }}>
                <p className="eyebrow-n" style={{ margin: "0" }}>SYSTEMS · 01–03</p>
                <h2 className="h2">Marketing that keeps running without you.</h2>
              </div>
              <p style={{ margin: "0", maxWidth: "26em", fontSize: "18px", lineHeight: "1.6", opacity: "0.85" }}>
                Automation and search work that captures, follows up and reports on its own, so your team spends its time on customers.
              </p>
            </div>
            <div className="sv2">
              <Link href="/services/ai-automation" className="svc-row" style={{ gridTemplateColumns: "56px 56px minmax(0, 1fr) auto", paddingTop: "28px", paddingBottom: "28px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold)" }}>01</span>
                <span style={{ display: "inline-flex", width: "44px", height: "44px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "rgba(255, 255, 255, 0.10)", color: "var(--gold)" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <rect x="5" y="5" width="14" height="14" rx="3" />
                    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 2.4vw, 32px)", lineHeight: "1.15", fontWeight: "500" }}>
                    AI automation
                  </span>
                  <span style={{ fontSize: "15px", lineHeight: "1.5", opacity: "0.8" }}>
                    Assistants and workflows, with a person in the loop
                  </span>
                </span>
                <span className="arr" style={{ color: "var(--gold)", display: "inline-flex" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </span>
              </Link>
              <Link href="/services/marketing-automation" className="svc-row" style={{ gridTemplateColumns: "56px 56px minmax(0, 1fr) auto", paddingTop: "28px", paddingBottom: "28px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold)" }}>02</span>
                <span style={{ display: "inline-flex", width: "44px", height: "44px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "rgba(255, 255, 255, 0.10)", color: "var(--gold)" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <rect x="3" y="3" width="7" height="7" rx="2" />
                    <rect x="14" y="14" width="7" height="7" rx="2" />
                    <path d="M10 6.5h4.5a3 3 0 0 1 3 3V14" />
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 2.4vw, 32px)", lineHeight: "1.15", fontWeight: "500" }}>
                    Marketing automation
                  </span>
                  <span style={{ fontSize: "15px", lineHeight: "1.5", opacity: "0.8" }}>
                    CRM, email and WhatsApp journeys that run themselves
                  </span>
                </span>
                <span className="arr" style={{ color: "var(--gold)", display: "inline-flex" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </span>
              </Link>
              <Link href="/services/seo" className="svc-row" style={{ gridTemplateColumns: "56px 56px minmax(0, 1fr) auto", paddingTop: "28px", paddingBottom: "28px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold)" }}>03</span>
                <span style={{ display: "inline-flex", width: "44px", height: "44px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "rgba(255, 255, 255, 0.10)", color: "var(--gold)" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <circle cx="10.5" cy="10.5" r="6.5" />
                    <path d="M15.5 15.5 21 21" />
                    <path d="M7.5 12.5 9.5 10.5 11.5 11.5 13.5 8.5" />
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 2.4vw, 32px)", lineHeight: "1.15", fontWeight: "500" }}>
                    SEO
                  </span>
                  <span style={{ fontSize: "15px", lineHeight: "1.5", opacity: "0.8" }}>Be found without paying for every click</span>
                </span>
                <span className="arr" style={{ color: "var(--gold)", display: "inline-flex" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="studio" style={{ padding: "24px clamp(8px, 2vw, 32px) 0" }}>
        <div className="oc-night oc-studio band" style={{ background: "var(--studio)", color: "var(--on-studio)", padding: "clamp(48px, 6vw, 96px) 0" }}>
          <svg className="wm-mark para" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-120px", bottom: "-160px", width: "520px", height: "520px", color: "rgba(255, 243, 236, 0.10)" }}>
            <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
          </svg>
          <div className="wrap" style={{ position: "relative" }}>
            <div className="sv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px 48px", marginBottom: "40px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "640px" }}>
                <p className="eyebrow-n" style={{ margin: "0" }}>STUDIO · 04–07</p>
                <h2 className="h2">A brand that looks like one hand made it.</h2>
              </div>
              <p style={{ margin: "0", maxWidth: "26em", fontSize: "18px", lineHeight: "1.6", opacity: "0.85" }}>
                Design, content and motion with one point of view, delivered as files and templates your team can keep using.
              </p>
            </div>
            <div className="sv2">
              <Link href="/services/social-media" className="svc-row" style={{ gridTemplateColumns: "56px 56px minmax(0, 1fr) auto", paddingTop: "28px", paddingBottom: "28px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--on-studio)" }}>04</span>
                <span style={{ display: "inline-flex", width: "44px", height: "44px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "rgba(255, 255, 255, 0.10)", color: "var(--on-studio)" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M6 4h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7l-5 4v-4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" />
                    <path d="M8 10.5h8" />
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 2.4vw, 32px)", lineHeight: "1.15", fontWeight: "500" }}>
                    Social media
                  </span>
                  <span style={{ fontSize: "15px", lineHeight: "1.5", opacity: "0.8" }}>Content and community that sound like you</span>
                </span>
                <span className="arr" style={{ color: "var(--on-studio)", display: "inline-flex" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </span>
              </Link>
              <Link href="/services/graphic-design" className="svc-row" style={{ gridTemplateColumns: "56px 56px minmax(0, 1fr) auto", paddingTop: "28px", paddingBottom: "28px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--on-studio)" }}>05</span>
                <span style={{ display: "inline-flex", width: "44px", height: "44px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "rgba(255, 255, 255, 0.10)", color: "var(--on-studio)" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M8 3h8l3 8-7 10-7-10z" />
                    <path d="M12 21v-7" />
                    <circle cx="12" cy="11.5" r="1.75" />
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 2.4vw, 32px)", lineHeight: "1.15", fontWeight: "500" }}>
                    Graphic design
                  </span>
                  <span style={{ fontSize: "15px", lineHeight: "1.5", opacity: "0.8" }}>Identity, campaigns and templates</span>
                </span>
                <span className="arr" style={{ color: "var(--on-studio)", display: "inline-flex" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </span>
              </Link>
              <Link href="/services/motion-graphics" className="svc-row" style={{ gridTemplateColumns: "56px 56px minmax(0, 1fr) auto", paddingTop: "28px", paddingBottom: "28px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--on-studio)" }}>06</span>
                <span style={{ display: "inline-flex", width: "44px", height: "44px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "rgba(255, 255, 255, 0.10)", color: "var(--on-studio)" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <path d="M10 9.5v5l4.5-2.5z" />
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 2.4vw, 32px)", lineHeight: "1.15", fontWeight: "500" }}>
                    Motion graphics
                  </span>
                  <span style={{ fontSize: "15px", lineHeight: "1.5", opacity: "0.8" }}>Stings, explainers and reels</span>
                </span>
                <span className="arr" style={{ color: "var(--on-studio)", display: "inline-flex" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </span>
              </Link>
              <Link href="/services/web-design" className="svc-row" style={{ gridTemplateColumns: "56px 56px minmax(0, 1fr) auto", paddingTop: "28px", paddingBottom: "28px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--on-studio)" }}>07</span>
                <span style={{ display: "inline-flex", width: "44px", height: "44px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "rgba(255, 255, 255, 0.10)", color: "var(--on-studio)" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <rect x="3" y="4" width="18" height="16" rx="3" />
                    <path d="M3 9h18" />
                    <path d="M8 14h5" />
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 2.4vw, 32px)", lineHeight: "1.15", fontWeight: "500" }}>
                    Web design
                  </span>
                  <span style={{ fontSize: "15px", lineHeight: "1.5", opacity: "0.8" }}>Fast sites wired to your CRM</span>
                </span>
                <span className="arr" style={{ color: "var(--on-studio)", display: "inline-flex" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap sec s06" aria-label="How we work">
        <div className="sv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px 48px", marginBottom: "clamp(40px, 5vw, 64px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>HOW EVERY ENGAGEMENT RUNS</p>
            <h2 className="h2">From open canvas to a system that runs.</h2>
          </div>
          <Link href="/pricing" className="oc-btn oc-btn-outline oc-btn-md">
            <span>See pricing</span>
            <svg className="oc-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
        <div style={{ position: "relative" }}>
          <div aria-hidden="true" style={{ position: "absolute", left: "0", right: "0", top: "7px", height: "2px", background: "var(--line)" }}>
            <div className="thread" style={{ height: "2px", background: "#d4af37" }} />
          </div>
          <ol style={{ position: "relative", listStyle: "none", margin: "0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "40px 32px" }}>
            <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "16px", height: "16px", borderRadius: "999px", background: "var(--canvas)", boxShadow: "inset 0 0 0 2px #d4af37" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)", marginTop: "12px" }}>01</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "28px", lineHeight: "1.15", fontWeight: "500" }}>
                Audit
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                We study your brand, site and lead flow, and show you where time and money leak.
              </p>
            </li>
            <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "16px", height: "16px", borderRadius: "999px", background: "var(--canvas)", boxShadow: "inset 0 0 0 2px #d4af37" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)", marginTop: "12px" }}>02</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "28px", lineHeight: "1.15", fontWeight: "500" }}>
                Plan
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                One roadmap for creative and systems: what ships first, and what it should change.
              </p>
            </li>
            <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "16px", height: "16px", borderRadius: "999px", background: "var(--canvas)", boxShadow: "inset 0 0 0 2px #d4af37" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)", marginTop: "12px" }}>03</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "28px", lineHeight: "1.15", fontWeight: "500" }}>
                Build
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Design, content and automation made together, tested on your real data.
              </p>
            </li>
            <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "16px", height: "16px", borderRadius: "999px", background: "var(--canvas)", boxShadow: "inset 0 0 0 2px #d4af37" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)", marginTop: "12px" }}>04</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "28px", lineHeight: "1.15", fontWeight: "500" }}>
                Run
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                We keep it running, improve it monthly and report in plain language.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section className="wrap sec">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "40px 96px", alignItems: "start" }}>
          <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>QUESTIONS</p>
            <h2 className="h2">Before you ask.</h2>
            <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
              Something else on your mind? Ask it on the audit call.
            </p>
          </div>
          <div className="faq sv2 span2">
            <details>
              <summary>
                <span>Do I need both Systems and Studio?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>No. Many clients start with one. We plan with both in mind so the pieces fit together when you add more.</p>
            </details>
            <details>
              <summary>
                <span>Which tools do you work with?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>
                Where we can, the ones you already pay for: your CRM, email platform, ad accounts and website. If you have nothing yet, we recommend a simple stack and set it up.
              </p>
            </details>
            <details>
              <summary>
                <span>Will AI replace my team?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>
                No. It takes the repetitive work: first replies, sorting, drafts. A person on your team or ours approves anything that matters.
              </p>
            </details>
            <details>
              <summary>
                <span>How is pricing structured?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>Fixed-price projects and monthly retainers. Every engagement starts with the free audit and a written scope.</p>
            </details>
          </div>
        </div>
      </section>
      <section aria-label="Start" style={{ padding: "clamp(96px, 11vw, 160px) clamp(8px, 2vw, 32px) 0" }}>
        <div className="oc-night band" style={{ background: "var(--night)", color: "var(--on-night)", padding: "clamp(64px, 8vw, 128px) clamp(24px, 6vw, 96px)" }}>
          <svg className="wm-mark para" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-40px", top: "50%", marginTop: "-300px", width: "600px", height: "600px", color: "rgba(244, 241, 234, 0.06)" }}>
            <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
          </svg>
          <div className="sv" style={{ position: "relative", maxWidth: "720px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>NOT SURE WHERE TO START?</p>
            <h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "500", fontSize: "clamp(40px, 5.4vw, 80px)", lineHeight: "1", letterSpacing: "-0.035em" }}>
              {"Start with a "}
              <span style={{ color: "var(--gold)" }}>free audit.</span>
            </h2>
            <p style={{ margin: "0", maxWidth: "30em", fontSize: "19px", lineHeight: "1.6", color: "var(--on-night-muted)" }}>
              A free 30-minute audit of your brand, website and lead flow. You leave with a written list of quick wins, whether you hire us or not.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px 28px" }}>
              <Link href="/contact" className="oc-btn oc-btn-gold oc-btn-lg">
                <span>Book a free audit</span>
                <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </Link>
              <span style={{ fontSize: "15px", color: "var(--on-night-muted)" }}>{"or write to "}{site.email}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

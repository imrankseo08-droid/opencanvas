import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, faqLd, pageMeta, webPageLd } from '@/lib/seo';

export const metadata: Metadata = pageMeta("/pricing");

export default function Page() {
  return (
    <>
      <JsonLd data={[webPageLd("/pricing"), breadcrumbLd("/pricing"), faqLd([{"q": "What if the scope changes?", "a": "We pause, write the change down and price it before doing it. Nothing is added to your invoice without your written OK."}, {"q": "Can you work with a small budget?", "a": "Often, yes. The audit’s quick wins list is free, and many items on it can be done by your own team."}])]} />
      <section className="s01" style={{ position: "relative", overflow: "clip" }}>
        <svg className="wm-mark wm-soft" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-220px", top: "-60px", width: "640px", height: "640px", color: "rgba(13, 13, 13, 0.035)" }}>
          <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
        </svg>
        <div className="wrap" style={{ position: "relative", paddingTop: "clamp(56px, 7vw, 104px)", paddingBottom: "clamp(24px, 3vw, 40px)" }}>
          <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px", minWidth: "0" }}>
            <nav aria-label="Breadcrumb">
              <p className="crumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Pricing</span></p>
            </nav>
            <p className="rise d1 eyebrow-n" style={{ margin: "8px 0 0" }}>PRICING</p>
            <h1 className="rise d2 h1" style={{ maxWidth: "12em" }}>Clear scope. Fixed prices. No surprises.</h1>
            <p className="rise d3 lede">
              Every engagement starts with a free audit and a written scope. You see the price before any work begins, and it doesn’t move unless you change the brief.
            </p>
          </div>
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: "clamp(48px, 5vw, 72px)" }} aria-label="Ways to work with us">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "20px", alignItems: "stretch" }}>
          <div className="tier sv card" style={{ background: "var(--paper)", color: "var(--ink)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
              <p className="eyebrow-n" style={{ margin: "0" }}>FREE AUDIT</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span className="price">Free<span style={{ fontSize: "18px", letterSpacing: "0", color: "var(--muted)" }} /></span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "var(--muted)" }}>30 minutes on a call, no obligation.</span>
            </div>
            <ul className="chk" style={{ flex: "1", paddingTop: "24px", borderTop: "1px solid var(--line)" }}>
              <li>
                <span>
                  <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M5 12.5 10 17.5 19 7" />
                  </svg>
                </span>
                <span>Review of your brand, website and lead flow</span>
              </li>
              <li>
                <span>
                  <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M5 12.5 10 17.5 19 7" />
                  </svg>
                </span>
                <span>Written list of quick wins within two working days</span>
              </li>
              <li>
                <span>
                  <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M5 12.5 10 17.5 19 7" />
                  </svg>
                </span>
                <span>A recommended plan, if you want one</span>
              </li>
              <li>
                <span>
                  <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M5 12.5 10 17.5 19 7" />
                  </svg>
                </span>
                <span>Yours to keep, whether you hire us or not</span>
              </li>
            </ul>
            <Link href="/contact" className="oc-btn oc-btn-gold oc-btn-md">
              <span>Book a free audit</span>
              <svg className="oc-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="tier sv oc-night oc-systems" style={{ background: "var(--systems)", color: "var(--on-systems)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
              <p className="eyebrow-n" style={{ margin: "0" }}>PROJECT</p>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: ".06em", padding: "5px 10px", borderRadius: "999px", background: "rgba(212,175,55,.18)", color: "var(--gold)" }}>
                FIXED PRICE
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span className="price">
                From [price]
                <span style={{ fontSize: "18px", letterSpacing: "0", color: "var(--on-systems-muted)" }} />
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "var(--on-systems-muted)" }}>
                One fixed price, agreed in writing before we start.
              </span>
            </div>
            <ul className="chk" style={{ flex: "1", paddingTop: "24px", borderTop: "1px solid rgba(244, 241, 234, 0.18)" }}>
              <li>
                <span>
                  <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M5 12.5 10 17.5 19 7" />
                  </svg>
                </span>
                <span>Website or landing pages</span>
              </li>
              <li>
                <span>
                  <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M5 12.5 10 17.5 19 7" />
                  </svg>
                </span>
                <span>Brand identity and guidelines</span>
              </li>
              <li>
                <span>
                  <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M5 12.5 10 17.5 19 7" />
                  </svg>
                </span>
                <span>Automation, AI assistant or CRM setup</span>
              </li>
              <li>
                <span>
                  <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M5 12.5 10 17.5 19 7" />
                  </svg>
                </span>
                <span>Explainer, sting or launch campaign</span>
              </li>
              <li>
                <span>
                  <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M5 12.5 10 17.5 19 7" />
                  </svg>
                </span>
                <span>[Payment terms, e.g. 50% to start, 50% on delivery]</span>
              </li>
            </ul>
            <Link href="/contact" className="oc-btn oc-btn-gold oc-btn-md">
              <span>Start with the audit</span>
              <svg className="oc-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="tier sv oc-night oc-studio" style={{ background: "var(--studio)", color: "var(--on-studio)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
              <p className="eyebrow-n" style={{ margin: "0" }}>MONTHLY</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span className="price">
                From [price]
                <span style={{ fontSize: "18px", letterSpacing: "0", color: "var(--on-studio)" }}>{" / month"}</span>
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "var(--on-studio)" }}>
                Ongoing work with a monthly plan and report.
              </span>
            </div>
            <ul className="chk" style={{ flex: "1", paddingTop: "24px", borderTop: "1px solid rgba(244, 241, 234, 0.18)" }}>
              <li>
                <span>
                  <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M5 12.5 10 17.5 19 7" />
                  </svg>
                </span>
                <span>Social media content and community</span>
              </li>
              <li>
                <span>
                  <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M5 12.5 10 17.5 19 7" />
                  </svg>
                </span>
                <span>SEO, content and monthly reporting</span>
              </li>
              <li>
                <span>
                  <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M5 12.5 10 17.5 19 7" />
                  </svg>
                </span>
                <span>Automation care and improvements</span>
              </li>
              <li>
                <span>
                  <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M5 12.5 10 17.5 19 7" />
                  </svg>
                </span>
                <span>Set design and motion hours each month</span>
              </li>
              <li>
                <span>
                  <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M5 12.5 10 17.5 19 7" />
                  </svg>
                </span>
                <span>[Notice period, e.g. cancel with 30 days’ notice]</span>
              </li>
            </ul>
            <Link href="/contact" className="oc-btn oc-btn-primary oc-btn-md">
              <span>Start with the audit</span>
              <svg className="oc-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
        <p className="sv" style={{ margin: "20px 0 0", fontSize: "14px", color: "var(--muted)" }}>
          Prices exclude [tax / VAT]. Third-party costs such as ad spend and software subscriptions are billed by those providers directly to you.
        </p>
      </section>
      <section className="oc-systems-tint" style={{ marginTop: "clamp(96px, 11vw, 160px)", background: "var(--systems-tint)", padding: "clamp(88px, 10vw, 136px) 0" }}>
        <div className="wrap grid2" style={{ alignItems: "start" }}>
          <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>ALWAYS INCLUDED</p>
            <h2 className="h2">Included in every engagement.</h2>
          </div>
          <ul className="chk" style={{ gap: "22px" }}>
            <li className="sv" style={{ fontSize: "18px" }}>
              <span>
                <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <span>One point of contact: Imran, from first call to launch</span>
            </li>
            <li className="sv" style={{ fontSize: "18px" }}>
              <span>
                <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <span>A written scope and fixed price before any work starts</span>
            </li>
            <li className="sv" style={{ fontSize: "18px" }}>
              <span>
                <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <span>A plain-language report every month on ongoing work</span>
            </li>
            <li className="sv" style={{ fontSize: "18px" }}>
              <span>
                <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <span>You own every file, account and automation we build</span>
            </li>
            <li className="sv" style={{ fontSize: "18px" }}>
              <span>
                <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <span>Documentation, so nothing depends on us</span>
            </li>
            <li className="sv" style={{ fontSize: "18px" }}>
              <span>
                <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <span>Honest advice, including when not to spend</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="wrap sec" aria-label="Project or monthly">
        <div className="sv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px 48px", marginBottom: "clamp(40px, 5vw, 64px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>PROJECT OR MONTHLY?</p>
            <h2 className="h2">Which one fits you.</h2>
          </div>
        </div>
        <div className="sv scroll-x card" style={{ padding: "8px 16px" }}>
          <table className="ctable" style={{ minWidth: "640px" }}>
            <thead><tr><th scope="col" /><th scope="col">PROJECT</th><th scope="col">MONTHLY</th></tr></thead>
            <tbody>
              <tr>
                <th scope="row">Best for</th>
                <td>A clear piece of work with a finish line</td>
                <td>Marketing that needs to keep running</td>
              </tr>
              <tr><th scope="row">How it is priced</th><td>One fixed price per scope</td><td>A fixed monthly fee</td></tr>
              <tr><th scope="row">Typical length</th><td>[2 to 10 weeks]</td><td>[Minimum 3 months], then month to month</td></tr>
              <tr>
                <th scope="row">What you get at the end</th>
                <td>Files, accounts and documentation, handed over</td>
                <td>Monthly work, a report and a plan for next month</td>
              </tr>
              <tr>
                <th scope="row">If the scope changes</th>
                <td>We write the change down and price it first</td>
                <td>We move hours between tasks, or adjust the plan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="wrap sec">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "40px 96px", alignItems: "start" }}>
          <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>PRICING QUESTIONS</p>
            <h2 className="h2">About money.</h2>
            <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
              Ask anything else on the audit call. We would rather explain than surprise you.
            </p>
          </div>
          <div className="faq sv2 span2">
            <details>
              <summary>
                <span>Why don’t you list exact prices?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>
                Because two websites or two automation setups can differ tenfold in effort. The free audit lets us quote a fixed price for what you actually need. [Or replace this with your starting prices.]
              </p>
            </details>
            <details>
              <summary>
                <span>Is there a minimum contract?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>[Your minimum term, e.g. three months for monthly work]. Projects have no minimum beyond the agreed scope.</p>
            </details>
            <details>
              <summary>
                <span>What if the scope changes?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>We pause, write the change down and price it before doing it. Nothing is added to your invoice without your written OK.</p>
            </details>
            <details>
              <summary>
                <span>Can you work with a small budget?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>Often, yes. The audit’s quick wins list is free, and many items on it can be done by your own team.</p>
            </details>
            <details>
              <summary>
                <span>How do we pay?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>[Your billing currency and payment methods, e.g. bank transfer or card, invoiced monthly].</p>
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
            <p className="eyebrow-n" style={{ margin: "0" }}>START HERE</p>
            <h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "500", fontSize: "clamp(40px, 5.4vw, 80px)", lineHeight: "1", letterSpacing: "-0.035em" }}>
              {"Let's fill your "}
              <span style={{ color: "var(--gold)" }}>canvas.</span>
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

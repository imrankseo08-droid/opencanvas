import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, pageMeta, webPageLd } from '@/lib/seo';

export const metadata: Metadata = pageMeta("/thank-you/audit");

export default function Page() {
  return (
    <>
      <JsonLd data={[webPageLd("/thank-you/audit"), breadcrumbLd("/thank-you/audit")]} />
      <section style={{ padding: "12px clamp(8px, 2vw, 32px) 0" }}>
        <div className="oc-night oc-systems band" style={{ background: "var(--systems)", color: "var(--on-systems)" }}>
          <svg className="wm-mark hero-wm" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-140px", top: "-40px", width: "680px", height: "680px", color: "rgba(244, 241, 234, 0.06)" }}>
            <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
          </svg>
          <div className="wrap grid2" style={{ position: "relative", alignItems: "start", paddingTop: "clamp(56px, 7vw, 112px)", paddingBottom: "clamp(56px, 7vw, 104px)" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px" }}>
              <span className="rise d1" style={{ display: "inline-flex", width: "72px", height: "72px", alignItems: "center", justifyContent: "center", borderRadius: "999px", background: "#d4af37", color: "#0d0d0d" }}>
                <svg className="oc-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <p className="rise d2 eyebrow-n" style={{ margin: "0" }}>REQUEST RECEIVED</p>
              <h1 className="rise d2 h1" style={{ maxWidth: "10em" }}>You’re booked in.</h1>
              <p className="rise d3 lede">
                Thanks for reaching out. Imran will email you within one working day with a few times for the call.
              </p>
            </div>
            <div className="rise d4">
              <p className="eyebrow-n" style={{ margin: "0 0 8px" }}>WHAT HAPPENS NEXT</p>
              <ol style={{ listStyle: "none", margin: "0", padding: "0" }}>
                <li className="sv" style={{ display: "grid", gridTemplateColumns: "56px minmax(0, 1fr)", gap: "12px", padding: "24px 0", borderTop: "1px solid rgba(244, 241, 234, 0.16)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "30px", color: "var(--gold)" }}>01</span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.25", fontWeight: "500" }}>
                      Check your inbox
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--on-systems-muted)" }}>
                      {"A confirmation from "}{site.email}{" with a link to pick a time."}
                    </span>
                  </span>
                </li>
                <li className="sv" style={{ display: "grid", gridTemplateColumns: "56px minmax(0, 1fr)", gap: "12px", padding: "24px 0", borderTop: "1px solid rgba(244, 241, 234, 0.16)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "30px", color: "var(--gold)" }}>02</span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.25", fontWeight: "500" }}>
                      We do our homework
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--on-systems-muted)" }}>
                      We review your website, socials and lead flow before we speak.
                    </span>
                  </span>
                </li>
                <li className="sv" style={{ display: "grid", gridTemplateColumns: "56px minmax(0, 1fr)", gap: "12px", padding: "24px 0", borderTop: "1px solid rgba(244, 241, 234, 0.16)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "30px", color: "var(--gold)" }}>03</span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.25", fontWeight: "500" }}>
                      The 30-minute call
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--on-systems-muted)" }}>
                      We talk through what we found and what matters most to you.
                    </span>
                  </span>
                </li>
                <li className="sv" style={{ display: "grid", gridTemplateColumns: "56px minmax(0, 1fr)", gap: "12px", padding: "24px 0", borderTop: "1px solid rgba(244, 241, 234, 0.16)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "30px", color: "var(--gold)" }}>04</span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.25", fontWeight: "500" }}>
                      Your quick wins list
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--on-systems-muted)" }}>
                      In writing within two working days, yours to keep.
                    </span>
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap sec" aria-label="Prepare">
        <div className="grid2" style={{ alignItems: "start" }}>
          <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>BEFORE THE CALL</p>
            <h2 className="h2">Three things that make the call more useful.</h2>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
              None of them are required. Bring what you have.
            </p>
          </div>
          <ul className="chk sv2" style={{ gap: "20px" }}>
            <li style={{ fontSize: "18px" }}>
              <span>
                <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <span>
                <b style={{ fontWeight: "600" }}>Your top goal for the next six months.</b>
                {" More enquiries, better ones, or less time spent chasing them."}
              </span>
            </li>
            <li style={{ fontSize: "18px" }}>
              <span>
                <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <span>
                <b style={{ fontWeight: "600" }}>Links to your website and main social accounts.</b>
                {" We look at them before the call."}
              </span>
            </li>
            <li style={{ fontSize: "18px" }}>
              <span>
                <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <span>
                <b style={{ fontWeight: "600" }}>Viewer access to analytics, if you have it.</b>
                {" Optional, but it makes the quick wins sharper."}
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className="wrap sec" aria-label="While you wait">
        <div className="sv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px 48px", marginBottom: "clamp(40px, 5vw, 64px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>WHILE YOU WAIT</p>
            <h2 className="h2">A little reading, if you like.</h2>
          </div>
          <Link href="/insights" className="oc-btn oc-btn-outline oc-btn-md">
            <span>All articles</span>
            <svg className="oc-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "56px 32px" }}>
          <Link href="/insights/what-to-automate-first" className="case sv" style={{ display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "var(--ink)" }}>
            <div className="ph" style={{ aspectRatio: "16 / 10", borderRadius: "var(--radius-lg)", background: "var(--systems)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ position: "absolute", right: "-14%", bottom: "-30%", width: "70%", height: "auto", overflow: "visible", color: "rgba(255, 255, 255, 0.08)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "40" }} />
              </svg>
              <span style={{ position: "relative", display: "inline-flex", width: "72px", height: "72px", alignItems: "center", justifyContent: "center", borderRadius: "20px", background: "rgba(255, 255, 255, 0.12)", color: "var(--gold)" }}>
                <svg className="oc-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <rect x="5" y="5" width="14" height="14" rx="3" />
                  <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
                </svg>
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span className="oc-tag oc-tag-systems">AI automation</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--muted)" }}>6 min read</span>
            </div>
            <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.25", fontWeight: "500", letterSpacing: "-0.01em" }}>
              How to write rules for an AI assistant so it never embarrasses you
            </h3>
            <span className="more">
              {"Read "}
              <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
          <Link href="/insights/what-to-automate-first" className="case sv" style={{ display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "var(--ink)" }}>
            <div className="ph" style={{ aspectRatio: "16 / 10", borderRadius: "var(--radius-lg)", background: "var(--systems)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ position: "absolute", right: "-14%", bottom: "-30%", width: "70%", height: "auto", overflow: "visible", color: "rgba(255, 255, 255, 0.08)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "40" }} />
              </svg>
              <span style={{ position: "relative", display: "inline-flex", width: "72px", height: "72px", alignItems: "center", justifyContent: "center", borderRadius: "20px", background: "rgba(255, 255, 255, 0.12)", color: "var(--gold)" }}>
                <svg className="oc-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path d="M15.5 15.5 21 21" />
                  <path d="M7.5 12.5 9.5 10.5 11.5 11.5 13.5 8.5" />
                </svg>
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span className="oc-tag oc-tag-systems">SEO</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--muted)" }}>8 min read</span>
            </div>
            <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.25", fontWeight: "500", letterSpacing: "-0.01em" }}>
              Local SEO in an afternoon: the Google Business Profile checklist
            </h3>
            <span className="more">
              {"Read "}
              <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
          <Link href="/insights/what-to-automate-first" className="case sv" style={{ display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "var(--ink)" }}>
            <div className="ph" style={{ aspectRatio: "16 / 10", borderRadius: "var(--radius-lg)", background: "var(--studio)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ position: "absolute", right: "-14%", bottom: "-30%", width: "70%", height: "auto", overflow: "visible", color: "rgba(255, 255, 255, 0.08)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "40" }} />
              </svg>
              <span style={{ position: "relative", display: "inline-flex", width: "72px", height: "72px", alignItems: "center", justifyContent: "center", borderRadius: "20px", background: "rgba(255, 255, 255, 0.12)", color: "var(--on-studio)" }}>
                <svg className="oc-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M6 4h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7l-5 4v-4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" />
                  <path d="M8 10.5h8" />
                </svg>
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span className="oc-tag oc-tag-studio">Social media</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--muted)" }}>5 min read</span>
            </div>
            <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.25", fontWeight: "500", letterSpacing: "-0.01em" }}>
              Content pillars: plan a month of posts in one sitting
            </h3>
            <span className="more">
              {"Read "}
              <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}

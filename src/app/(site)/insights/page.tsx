import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, itemListLd, pageMeta, webPageLd } from '@/lib/seo';
import { InsightsFilter } from '@/components/Filters';
import { SubscribeForm } from '@/components/Forms';

export const metadata: Metadata = pageMeta("/insights");

export default function Page() {
  return (
    <>
      <JsonLd data={[webPageLd("/insights"), breadcrumbLd("/insights"), itemListLd("/insights", [{"name": "What to automate first: five follow-ups every small business should run", "url": "/insights/what-to-automate-first"}, {"name": "How to write rules for an AI assistant so it never embarrasses you", "url": "/insights/what-to-automate-first"}, {"name": "Local SEO in an afternoon: the Google Business Profile checklist", "url": "/insights/what-to-automate-first"}, {"name": "Content pillars: plan a month of posts in one sitting", "url": "/insights/what-to-automate-first"}, {"name": "Brand guidelines your team will actually open", "url": "/insights/what-to-automate-first"}, {"name": "The first three seconds: what makes a reel stop the scroll", "url": "/insights/what-to-automate-first"}, {"name": "Every form on your website should do these four things", "url": "/insights/what-to-automate-first"}])]} />
      <section className="s01" style={{ position: "relative", overflow: "clip" }}>
        <svg className="wm-mark wm-soft" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-220px", top: "-60px", width: "640px", height: "640px", color: "rgba(13, 13, 13, 0.035)" }}>
          <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
        </svg>
        <div className="wrap" style={{ position: "relative", paddingTop: "clamp(56px, 7vw, 104px)", paddingBottom: "clamp(24px, 3vw, 40px)" }}>
          <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px", minWidth: "0" }}>
            <nav aria-label="Breadcrumb">
              <p className="crumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Insights</span></p>
            </nav>
            <p className="rise d1 eyebrow-n" style={{ margin: "8px 0 0" }}>INSIGHTS</p>
            <h1 className="rise d2 h1" style={{ maxWidth: "12em" }}>Notes on brand, automation and growth.</h1>
            <p className="rise d3 lede">Practical guides from the studio. What to do, why it works, and how to tell if it worked.</p>
          </div>
        </div>
      </section>
      <InsightsFilter />
      <section className="wrap" style={{ paddingTop: "56px" }} aria-label="Featured" id="insights-list">
        <Link href="/insights/what-to-automate-first" className="case sv" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "24px 56px", alignItems: "center", textDecoration: "none", color: "var(--ink)", marginBottom: "80px" }} data-topic="Marketing automation">
          <div className="motif" style={{ containerType: "inline-size", aspectRatio: "16 / 11", background: "var(--systems)", color: "#f4f1ea", borderRadius: "var(--radius-xl)" }}>
            <div style={{ position: "absolute", inset: "10% 8%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 4px 10px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "rgba(244,241,234,.6)" }}>follow-up.flow</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-mono)", fontSize: "12px", color: "#d4af37" }}>
                  <span className="live" style={{ width: "7px", height: "7px", borderRadius: "999px", background: "#d4af37" }} />
                  running
                </span>
              </div>
              <div className="flow-step flow-01" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "12px", background: "rgba(244,241,234,.04)", boxShadow: "inset 0 0 0 1px rgba(244,241,234,.10)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#d4af37", width: "92px", flex: "none" }}>
                  01 · trigger
                </span>
                <span style={{ fontSize: "14px", color: "#f4f1ea" }}>New enquiry arrives</span>
              </div>
              <div className="flow-step flow-02" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "12px", background: "rgba(244,241,234,.04)", boxShadow: "inset 0 0 0 1px rgba(244,241,234,.10)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#d4af37", width: "92px", flex: "none" }}>
                  02 · crm
                </span>
                <span style={{ fontSize: "14px", color: "#f4f1ea" }}>Added to the pipeline</span>
              </div>
              <div className="flow-step flow-03" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "12px", background: "rgba(244,241,234,.04)", boxShadow: "inset 0 0 0 1px rgba(244,241,234,.10)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#d4af37", width: "92px", flex: "none" }}>
                  03 · email
                </span>
                <span style={{ fontSize: "14px", color: "#f4f1ea" }}>Welcome sent in 1 minute</span>
              </div>
              <div className="flow-step flow-04" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "12px", background: "rgba(244,241,234,.04)", boxShadow: "inset 0 0 0 1px rgba(244,241,234,.10)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#d4af37", width: "92px", flex: "none" }}>
                  04 · follow-up
                </span>
                <span style={{ fontSize: "14px", color: "#f4f1ea" }}>Reminder after 3 days</span>
              </div>
              <div className="flow-step flow-04" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "12px", background: "rgba(244,241,234,.04)", boxShadow: "inset 0 0 0 1px rgba(244,241,234,.10)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#d4af37", width: "92px", flex: "none" }}>
                  05 · report
                </span>
                <span style={{ fontSize: "14px", color: "#f4f1ea" }}>Counted in the monthly report</span>
              </div>
            </div>
            <span className="ph-notch" style={{ background: "var(--canvas)" }} />
            <span className="ph-dot" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span className="oc-tag oc-tag-systems">Marketing automation</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--muted)" }}>7 min read</span>
            </div>
            <h2 className="h2" style={{ fontSize: "clamp(32px, 3.4vw, 48px)" }}>
              What to automate first: five follow-ups every small business should run
            </h2>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
              Most leads aren’t lost to competitors. They’re lost to silence. Here are the five follow-ups we set up first, in order.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Image src="/images/imran-khan-founder.jpg" alt="" width={80} height={80} style={{ width: "40px", height: "40px", borderRadius: "999px", objectFit: "cover" }} />
              <span style={{ fontSize: "15px" }}><b style={{ fontWeight: "600" }}>Imran Khan</b>{" · Founder"}</span>
            </div>
          </div>
        </Link>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "64px 32px" }}>
          <Link href="/insights/what-to-automate-first" className="case sv" style={{ display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "var(--ink)" }} data-topic="AI automation">
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
          <Link href="/insights/what-to-automate-first" className="case sv" style={{ display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "var(--ink)" }} data-topic="SEO">
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
          <Link href="/insights/what-to-automate-first" className="case sv" style={{ display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "var(--ink)" }} data-topic="Social media">
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
          <Link href="/insights/what-to-automate-first" className="case sv" style={{ display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "var(--ink)" }} data-topic="Graphic design">
            <div className="ph" style={{ aspectRatio: "16 / 10", borderRadius: "var(--radius-lg)", background: "var(--studio)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ position: "absolute", right: "-14%", bottom: "-30%", width: "70%", height: "auto", overflow: "visible", color: "rgba(255, 255, 255, 0.08)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "40" }} />
              </svg>
              <span style={{ position: "relative", display: "inline-flex", width: "72px", height: "72px", alignItems: "center", justifyContent: "center", borderRadius: "20px", background: "rgba(255, 255, 255, 0.12)", color: "var(--on-studio)" }}>
                <svg className="oc-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M8 3h8l3 8-7 10-7-10z" />
                  <path d="M12 21v-7" />
                  <circle cx="12" cy="11.5" r="1.75" />
                </svg>
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span className="oc-tag oc-tag-studio">Graphic design</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--muted)" }}>6 min read</span>
            </div>
            <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.25", fontWeight: "500", letterSpacing: "-0.01em" }}>
              Brand guidelines your team will actually open
            </h3>
            <span className="more">
              {"Read "}
              <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
          <Link href="/insights/what-to-automate-first" className="case sv" style={{ display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "var(--ink)" }} data-topic="Motion graphics">
            <div className="ph" style={{ aspectRatio: "16 / 10", borderRadius: "var(--radius-lg)", background: "var(--studio)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ position: "absolute", right: "-14%", bottom: "-30%", width: "70%", height: "auto", overflow: "visible", color: "rgba(255, 255, 255, 0.08)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "40" }} />
              </svg>
              <span style={{ position: "relative", display: "inline-flex", width: "72px", height: "72px", alignItems: "center", justifyContent: "center", borderRadius: "20px", background: "rgba(255, 255, 255, 0.12)", color: "var(--on-studio)" }}>
                <svg className="oc-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <rect x="3" y="5" width="18" height="14" rx="3" />
                  <path d="M10 9.5v5l4.5-2.5z" />
                </svg>
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span className="oc-tag oc-tag-studio">Motion graphics</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--muted)" }}>4 min read</span>
            </div>
            <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.25", fontWeight: "500", letterSpacing: "-0.01em" }}>
              The first three seconds: what makes a reel stop the scroll
            </h3>
            <span className="more">
              {"Read "}
              <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
          <Link href="/insights/what-to-automate-first" className="case sv" style={{ display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "var(--ink)" }} data-topic="Web design">
            <div className="ph" style={{ aspectRatio: "16 / 10", borderRadius: "var(--radius-lg)", background: "var(--studio)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ position: "absolute", right: "-14%", bottom: "-30%", width: "70%", height: "auto", overflow: "visible", color: "rgba(255, 255, 255, 0.08)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "40" }} />
              </svg>
              <span style={{ position: "relative", display: "inline-flex", width: "72px", height: "72px", alignItems: "center", justifyContent: "center", borderRadius: "20px", background: "rgba(255, 255, 255, 0.12)", color: "var(--on-studio)" }}>
                <svg className="oc-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <rect x="3" y="4" width="18" height="16" rx="3" />
                  <path d="M3 9h18" />
                  <path d="M8 14h5" />
                </svg>
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span className="oc-tag oc-tag-studio">Web design</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--muted)" }}>5 min read</span>
            </div>
            <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.25", fontWeight: "500", letterSpacing: "-0.01em" }}>
              Every form on your website should do these four things
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
      <section className="wrap sec" aria-label="Newsletter">
        <div className="sv" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "32px 64px", alignItems: "center", padding: "clamp(28px, 4vw, 56px)", borderRadius: "var(--radius-xl)", background: "var(--sage)", color: "var(--on-sage)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <p className="eyebrow-n" style={{ margin: "0", color: "var(--on-sage)" }}>ONE EMAIL A MONTH</p>
            <h2 className="h2" style={{ fontSize: "clamp(30px, 3vw, 42px)" }}>The best of Insights, in your inbox.</h2>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6" }}>
              New guides and one thing worth trying this month. No spam, unsubscribe any time.
            </p>
          </div>
          <SubscribeForm source="newsletter" variant="newsletter" />
        </div>
      </section>
    </>
  );
}

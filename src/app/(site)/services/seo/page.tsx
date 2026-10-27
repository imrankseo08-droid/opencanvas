import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, faqLd, pageMeta, serviceLd, webPageLd } from '@/lib/seo';

export const metadata: Metadata = pageMeta("/services/seo");

export default function Page() {
  return (
    <>
      <JsonLd data={[webPageLd("/services/seo"), breadcrumbLd("/services/seo"), faqLd([{"q": "How long until SEO works?", "a": "Technical fixes can help within weeks. Content and authority build over months. We set honest milestones and report on them monthly."}, {"q": "Do you guarantee first place on Google?", "a": "No one honestly can. We commit to the work and to clear reporting on what it changes."}, {"q": "Do you build backlinks?", "a": "Only earned ones: listings, partnerships and content worth linking to. No paid link schemes."}]), serviceLd("/services/seo", "SEO", "Search engine optimization", ["Technical audit", "On-page fixes", "Keyword and content plan", "Local SEO", "Content production", "Monthly report"])]} />
      <section className="s01" style={{ padding: "12px clamp(8px, 2vw, 32px) 0" }}>
        <div className="oc-night oc-systems band" style={{ background: "var(--systems)", color: "var(--on-systems)" }}>
          <svg className="wm-mark hero-wm" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-140px", top: "-40px", width: "680px", height: "680px", color: "rgba(244, 241, 234, 0.06)" }}>
            <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
          </svg>
          <div className="wrap" style={{ position: "relative", paddingTop: "clamp(56px, 7vw, 112px)", paddingBottom: "clamp(56px, 7vw, 104px)" }}>
            <div className="grid2" style={{ alignItems: "center" }}>
              <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px", minWidth: "0" }}>
                <nav aria-label="Breadcrumb">
                  <p className="crumbs">
                    <Link href="/">Home</Link>
                    <span aria-hidden="true">/</span>
                    <Link href="/services">Services</Link>
                    <span aria-hidden="true">/</span>
                    <span aria-current="page">SEO</span>
                  </p>
                </nav>
                <p className="rise d1 eyebrow-n" style={{ margin: "8px 0 0" }}>03 — SYSTEMS</p>
                <h1 className="rise d2 h1 h1-s" style={{ maxWidth: "12em" }}>Be found by people already looking for you.</h1>
                <p className="rise d3 lede">
                  Search work that compounds. We fix what holds your site back, then publish what your customers are actually searching for, locally and beyond.
                </p>
                <div className="rise d4" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 24px" }}>
                  <Link href="/contact" className="oc-btn oc-btn-gold oc-btn-lg">
                    <span>Book a free audit</span>
                    <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                  <a href="#included" style={{ fontWeight: "500", fontSize: "16px", textDecoration: "underline", textDecorationColor: "rgba(212, 175, 55, 0.7)", textUnderlineOffset: "6px" }}>
                    What’s included
                  </a>
                </div>
              </div>
              <div className="rise d4" style={{ position: "relative", minWidth: "0" }}>
                <div style={{ maxWidth: "480px", marginLeft: "auto" }}>
                  <div className="motif" style={{ containerType: "inline-size", aspectRatio: "4 / 5", background: "var(--systems-tint)", color: "var(--ink)", borderRadius: "var(--radius-xl)" }}>
                    <div style={{ position: "absolute", inset: "11% 9% 9%", display: "flex", flexDirection: "column", gap: "14px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", height: "52px", padding: "0 18px", borderRadius: "999px", background: "var(--paper)", boxShadow: "0 8px 24px rgba(18, 66, 74, .10)" }}>
                        <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: "18px", height: "18px", flex: "none" }}>
                          <circle cx="10.5" cy="10.5" r="6.5" style={{ fill: "none", stroke: "var(--systems)", strokeWidth: "2" }} />
                          <path d="M15.5 15.5 21 21" style={{ stroke: "var(--systems)", strokeWidth: "2", strokeLinecap: "round" }} />
                        </svg>
                        <span style={{ fontSize: "15px", color: "var(--ink)" }}>
                          plumber near me
                          <span className="blink" style={{ color: "var(--gold-text)" }}>|</span>
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "4px 6px", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: ".06em", color: "var(--systems-text)" }}>
                        <span style={{ width: "8px", height: "8px", borderRadius: "999px", background: "#d4af37" }} />
                        YOUR BUSINESS · POSITION 1
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "16px 18px", borderRadius: "14px", background: "var(--paper)", boxShadow: "inset 0 0 0 2px #d4af37, 0 18px 40px rgba(18, 66, 74, .14)" }}>
                        <span style={{ display: "block", height: "8px", width: "34%", borderRadius: "4px", background: "var(--systems)" }} />
                        <span style={{ display: "block", height: "12px", width: "62%", borderRadius: "4px", background: "var(--ink)" }} />
                        <span style={{ display: "block", height: "7px", width: "92%", borderRadius: "4px", background: "var(--line)" }} />
                        <span style={{ display: "block", height: "7px", width: "70%", borderRadius: "4px", background: "var(--line)" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "16px 18px", borderRadius: "14px", background: "rgba(255,255,255,.55)" }}>
                        <span style={{ display: "block", height: "8px", width: "28%", borderRadius: "4px", background: "var(--border)" }} />
                        <span style={{ display: "block", height: "12px", width: "54%", borderRadius: "4px", background: "var(--border)" }} />
                        <span style={{ display: "block", height: "7px", width: "92%", borderRadius: "4px", background: "var(--line)" }} />
                        <span style={{ display: "block", height: "7px", width: "70%", borderRadius: "4px", background: "var(--line)" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "16px 18px", borderRadius: "14px", background: "rgba(255,255,255,.55)" }}>
                        <span style={{ display: "block", height: "8px", width: "30%", borderRadius: "4px", background: "var(--border)" }} />
                        <span style={{ display: "block", height: "12px", width: "48%", borderRadius: "4px", background: "var(--border)" }} />
                        <span style={{ display: "block", height: "7px", width: "92%", borderRadius: "4px", background: "var(--line)" }} />
                        <span style={{ display: "block", height: "7px", width: "70%", borderRadius: "4px", background: "var(--line)" }} />
                      </div>
                    </div>
                    <span className="ph-notch" style={{ background: "var(--systems)" }} />
                    <span className="ph-dot" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap sec" aria-label="Problems we fix">
        <div className="sv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px 48px", marginBottom: "clamp(40px, 5vw, 64px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>SOUND FAMILIAR?</p>
            <h2 className="h2">What usually stands in the way.</h2>
          </div>
        </div>
        <div className="grid3">
          <div className="sv card" style={{ padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: "28px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--systems-text)" }}>01</span>
            <p style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2vw, 27px)", lineHeight: "1.3", fontWeight: "400", letterSpacing: "-0.01em" }}>
              Your site is invisible for the searches that matter.
            </p>
          </div>
          <div className="sv card" style={{ padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: "28px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--systems-text)" }}>02</span>
            <p style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2vw, 27px)", lineHeight: "1.3", fontWeight: "400", letterSpacing: "-0.01em" }}>
              Competitors show up on the map. You don’t.
            </p>
          </div>
          <div className="sv card" style={{ padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: "28px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--systems-text)" }}>03</span>
            <p style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2vw, 27px)", lineHeight: "1.3", fontWeight: "400", letterSpacing: "-0.01em" }}>
              You publish content, but none of it ranks.
            </p>
          </div>
        </div>
      </section>
      <section id="included" className="oc-systems-tint" style={{ marginTop: "clamp(96px, 11vw, 160px)", background: "var(--systems-tint)", padding: "clamp(88px, 10vw, 136px) 0", position: "relative", overflow: "clip" }}>
        <svg className="wm-mark para wm-soft" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-160px", bottom: "-200px", width: "520px", height: "520px", color: "rgba(18, 66, 74, 0.06)" }}>
          <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
        </svg>
        <div className="wrap" style={{ position: "relative" }}>
          <div className="sv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px 48px", marginBottom: "clamp(40px, 5vw, 64px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
              <p className="eyebrow-n" style={{ margin: "0" }}>WHAT'S INCLUDED</p>
              <h2 className="h2">Everything it takes to do it properly.</h2>
              <p style={{ margin: "0", maxWidth: "34em", fontSize: "18px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Pick the whole set or start with the pieces you need most. The scope is written down and priced before we start.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "0 40px" }}>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(18, 66, 74, 0.18)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--systems)", color: "var(--on-systems)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Technical audit</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Speed, indexing, structure and schema, checked and fixed.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(18, 66, 74, 0.18)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--systems)", color: "var(--on-systems)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>On-page fixes</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Titles, headings, internal links and copy for the pages that sell.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(18, 66, 74, 0.18)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--systems)", color: "var(--on-systems)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Keyword and content plan</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Topics mapped to what your customers type, in priority order.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(18, 66, 74, 0.18)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--systems)", color: "var(--on-systems)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Local SEO</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Google Business Profile, listings and a steady flow of reviews.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(18, 66, 74, 0.18)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--systems)", color: "var(--on-systems)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Content production</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Service pages and articles written and designed by us.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(18, 66, 74, 0.18)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--systems)", color: "var(--on-systems)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Monthly report</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Rankings, traffic and the enquiries that came from search.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap sec s06" aria-label="How it works">
        <div className="sv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px 48px", marginBottom: "clamp(40px, 5vw, 64px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>HOW IT WORKS</p>
            <h2 className="h2">Four steps, no surprises.</h2>
          </div>
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
                We find what blocks your site and where the easy wins are.
              </p>
            </li>
            <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "16px", height: "16px", borderRadius: "999px", background: "var(--canvas)", boxShadow: "inset 0 0 0 2px #d4af37" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)", marginTop: "12px" }}>02</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "28px", lineHeight: "1.15", fontWeight: "500" }}>
                Fix
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Technical and on-page fixes first, because they pay back fastest.
              </p>
            </li>
            <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "16px", height: "16px", borderRadius: "999px", background: "var(--canvas)", boxShadow: "inset 0 0 0 2px #d4af37" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)", marginTop: "12px" }}>03</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "28px", lineHeight: "1.15", fontWeight: "500" }}>
                Publish
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Pages and articles built around real searches.
              </p>
            </li>
            <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "16px", height: "16px", borderRadius: "999px", background: "var(--canvas)", boxShadow: "inset 0 0 0 2px #d4af37" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)", marginTop: "12px" }}>04</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "28px", lineHeight: "1.15", fontWeight: "500" }}>
                Measure
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Monthly reporting on rankings, traffic and enquiries, not vanity metrics.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section className="wrap sec" aria-label="Example build">
        <Link href="/work" className="case" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "32px clamp(40px, 6vw, 96px)", alignItems: "center", textDecoration: "none", color: "var(--ink)" }}>
          <div className="sv">
            <div className="motif" style={{ containerType: "inline-size", aspectRatio: "1 / 1", background: "var(--systems-tint)", color: "var(--ink)", borderRadius: "var(--radius-xl)" }}>
              <div style={{ position: "absolute", inset: "11% 9% 9%", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", height: "52px", padding: "0 18px", borderRadius: "999px", background: "var(--paper)", boxShadow: "0 8px 24px rgba(18, 66, 74, .10)" }}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: "18px", height: "18px", flex: "none" }}>
                    <circle cx="10.5" cy="10.5" r="6.5" style={{ fill: "none", stroke: "var(--systems)", strokeWidth: "2" }} />
                    <path d="M15.5 15.5 21 21" style={{ stroke: "var(--systems)", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                  <span style={{ fontSize: "15px", color: "var(--ink)" }}>
                    plumber near me
                    <span className="blink" style={{ color: "var(--gold-text)" }}>|</span>
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "4px 6px", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: ".06em", color: "var(--systems-text)" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "999px", background: "#d4af37" }} />
                  YOUR BUSINESS · POSITION 1
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "16px 18px", borderRadius: "14px", background: "var(--paper)", boxShadow: "inset 0 0 0 2px #d4af37, 0 18px 40px rgba(18, 66, 74, .14)" }}>
                  <span style={{ display: "block", height: "8px", width: "34%", borderRadius: "4px", background: "var(--systems)" }} />
                  <span style={{ display: "block", height: "12px", width: "62%", borderRadius: "4px", background: "var(--ink)" }} />
                  <span style={{ display: "block", height: "7px", width: "92%", borderRadius: "4px", background: "var(--line)" }} />
                  <span style={{ display: "block", height: "7px", width: "70%", borderRadius: "4px", background: "var(--line)" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "16px 18px", borderRadius: "14px", background: "rgba(255,255,255,.55)" }}>
                  <span style={{ display: "block", height: "8px", width: "28%", borderRadius: "4px", background: "var(--border)" }} />
                  <span style={{ display: "block", height: "12px", width: "54%", borderRadius: "4px", background: "var(--border)" }} />
                  <span style={{ display: "block", height: "7px", width: "92%", borderRadius: "4px", background: "var(--line)" }} />
                  <span style={{ display: "block", height: "7px", width: "70%", borderRadius: "4px", background: "var(--line)" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "16px 18px", borderRadius: "14px", background: "rgba(255,255,255,.55)" }}>
                  <span style={{ display: "block", height: "8px", width: "30%", borderRadius: "4px", background: "var(--border)" }} />
                  <span style={{ display: "block", height: "12px", width: "48%", borderRadius: "4px", background: "var(--border)" }} />
                  <span style={{ display: "block", height: "7px", width: "92%", borderRadius: "4px", background: "var(--line)" }} />
                  <span style={{ display: "block", height: "7px", width: "70%", borderRadius: "4px", background: "var(--line)" }} />
                </div>
              </div>
              <span className="ph-notch" style={{ background: "var(--canvas)" }} />
              <span className="ph-dot" />
            </div>
          </div>
          <div className="sv2" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>WHAT WE BUILD</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <span className="oc-tag oc-tag-systems">SEO</span>
              <span className="oc-tag oc-tag-outline">Example build</span>
            </div>
            <h2 className="h2" style={{ fontSize: "clamp(32px, 3.4vw, 48px)" }}>Service pages built for local search</h2>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
              One page per service and area, with clear answers, schema and reviews, so the business shows up where nearby customers search.
            </p>
            <span className="more">
              {"See how it works "}
              <span style={{ color: "var(--systems-text)", display: "inline-flex" }}>
                <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </span>
            </span>
          </div>
        </Link>
      </section>
      <section className="wrap" style={{ paddingTop: "clamp(72px, 8vw, 112px)" }} aria-label="Tools">
        <div className="sv" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px 48px", padding: "clamp(28px, 3vw, 40px)", borderRadius: "var(--radius-xl)", boxShadow: "inset 0 0 0 1px var(--line)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "360px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>WORKS WITH</p>
            <p style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.25" }}>
              Built on tools you may already pay for.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <span className="tchip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path className="tl-mono" d="M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z" />
              </svg>
              Google Analytics
            </span>
            <span className="tchip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path className="tl-mono" d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" />
              </svg>
              WordPress
            </span>
            <span className="tchip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path className="tl-mono" d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z" />
              </svg>
              Shopify
            </span>
          </div>
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
                <span>How long until SEO works?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>
                Technical fixes can help within weeks. Content and authority build over months. We set honest milestones and report on them monthly.
              </p>
            </details>
            <details>
              <summary>
                <span>Do you guarantee first place on Google?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>No one honestly can. We commit to the work and to clear reporting on what it changes.</p>
            </details>
            <details>
              <summary>
                <span>Do you build backlinks?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>Only earned ones: listings, partnerships and content worth linking to. No paid link schemes.</p>
            </details>
          </div>
        </div>
      </section>
      <section className="wrap sec" aria-label="Related services">
        <div className="sv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px 48px", marginBottom: "clamp(40px, 5vw, 64px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>PAIRS WELL WITH</p>
            <h2 className="h2">Better together.</h2>
          </div>
          <Link href="/services" className="oc-btn oc-btn-outline oc-btn-md">
            <span>All seven services</span>
            <svg className="oc-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "24px" }}>
          <Link href="/services/web-design" className="sv oc-night oc-studio lift" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: "40px", padding: "clamp(28px, 3vw, 40px)", borderRadius: "var(--radius-xl)", background: "var(--studio)", color: "var(--on-studio)", textDecoration: "none" }}>
            <svg className="wm-mark " viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-50px", bottom: "-70px", width: "240px", height: "240px", color: "rgba(255, 255, 255, 0.07)" }}>
              <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
            </svg>
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ display: "inline-flex", width: "48px", height: "48px", alignItems: "center", justifyContent: "center", borderRadius: "14px", background: "rgba(255, 255, 255, 0.12)", color: "var(--on-studio)" }}>
                <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <rect x="3" y="4" width="18" height="16" rx="3" />
                  <path d="M3 9h18" />
                  <path d="M8 14h5" />
                </svg>
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px" }}>07 · STUDIO</span>
            </div>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "32px", lineHeight: "1.1", fontWeight: "500" }}>Web design</span>
              <span style={{ fontSize: "16px", lineHeight: "1.5", opacity: "0.85" }}>Fast sites wired to your CRM</span>
            </div>
            <span className="more" style={{ position: "relative" }}>
              {"Explore "}
              <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
          <Link href="/services/marketing-automation" className="sv oc-night oc-systems lift" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: "40px", padding: "clamp(28px, 3vw, 40px)", borderRadius: "var(--radius-xl)", background: "var(--systems)", color: "var(--on-systems)", textDecoration: "none" }}>
            <svg className="wm-mark " viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-50px", bottom: "-70px", width: "240px", height: "240px", color: "rgba(255, 255, 255, 0.07)" }}>
              <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
            </svg>
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ display: "inline-flex", width: "48px", height: "48px", alignItems: "center", justifyContent: "center", borderRadius: "14px", background: "rgba(255, 255, 255, 0.12)", color: "var(--gold)" }}>
                <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <rect x="3" y="3" width="7" height="7" rx="2" />
                  <rect x="14" y="14" width="7" height="7" rx="2" />
                  <path d="M10 6.5h4.5a3 3 0 0 1 3 3V14" />
                </svg>
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px" }}>02 · SYSTEMS</span>
            </div>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "32px", lineHeight: "1.1", fontWeight: "500" }}>
                Marketing automation
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.5", opacity: "0.85" }}>
                CRM, email and WhatsApp journeys that run themselves
              </span>
            </div>
            <span className="more" style={{ position: "relative" }}>
              {"Explore "}
              <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
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

import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, faqLd, pageMeta, serviceLd, webPageLd } from '@/lib/seo';

export const metadata: Metadata = pageMeta("/services/graphic-design");

export default function Page() {
  return (
    <>
      <JsonLd data={[webPageLd("/services/graphic-design"), breadcrumbLd("/services/graphic-design"), faqLd([{"q": "Can you refresh our logo instead of replacing it?", "a": "Often that is the better choice. We will tell you honestly after the audit."}, {"q": "Which files will we get?", "a": "Master files plus SVG, PNG and PDF exports, and editable templates in Figma or Canva."}]), serviceLd("/services/graphic-design", "Graphic design and branding", "Graphic design", ["Logo and identity", "Brand guidelines", "Campaign and ad creative", "Editable templates", "Print and packaging", "Presentation design"])]} />
      <section className="s01" style={{ padding: "12px clamp(8px, 2vw, 32px) 0" }}>
        <div className="oc-night oc-studio band" style={{ background: "var(--studio)", color: "var(--on-studio)" }}>
          <svg className="wm-mark hero-wm" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-140px", top: "-40px", width: "680px", height: "680px", color: "rgba(255, 243, 236, 0.10)" }}>
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
                    <span aria-current="page">Graphic design</span>
                  </p>
                </nav>
                <p className="rise d1 eyebrow-n" style={{ margin: "8px 0 0" }}>05 — STUDIO</p>
                <h1 className="rise d2 h1 h1-s" style={{ maxWidth: "12em" }}>Identity and campaigns with the system built in.</h1>
                <p className="rise d3 lede">
                  Logos, brand guidelines, campaign creative and templates designed as one system, so every new piece is faster than the last and still unmistakably yours.
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
                  <div className="motif" style={{ containerType: "inline-size", aspectRatio: "4 / 5", background: "var(--gold-tint)", color: "var(--ink)", borderRadius: "var(--radius-xl)" }}>
                    <div style={{ position: "absolute", inset: "9%", display: "grid", gridTemplateRows: "1.5fr 1fr .45fr", gap: "12px" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "12px" }}>
                        <div style={{ borderRadius: "18px", background: "var(--paper)", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "18px", boxShadow: "0 14px 30px rgba(13,13,13,.06)" }}>
                          <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: ".06em", color: "var(--muted)" }}>
                            DISPLAY · JOST
                          </span>
                          <span style={{ fontFamily: "var(--font-display)", fontWeight: "500", fontSize: "22cqw", lineHeight: ".9", letterSpacing: "-.04em" }}>
                            Aa
                          </span>
                        </div>
                        <div style={{ borderRadius: "18px", background: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <svg className="mk-s" viewBox="28 28 200 200" aria-hidden="true" style={{ width: "46%", height: "46%", overflow: "visible", color: "#f4f1ea" }}>
                            <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
                            <circle cx="160" cy="96" r="24" />
                          </svg>
                        </div>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "12px" }}>
                        <div style={{ borderRadius: "18px", background: "var(--studio)", display: "flex", alignItems: "flex-end", padding: "16px", color: "#fff3ec", fontFamily: "var(--font-display)", fontSize: "4.4cqw", lineHeight: "1.15" }}>
                          Campaign
                          <br />
                          template
                        </div>
                        <div style={{ borderRadius: "18px", background: "var(--paper)", padding: "16px", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "center" }}>
                          <span style={{ display: "block", height: "10px", width: "70%", borderRadius: "5px", background: "var(--ink)" }} />
                          <span style={{ display: "block", height: "7px", width: "92%", borderRadius: "4px", background: "var(--line)" }} />
                          <span style={{ display: "block", height: "7px", width: "80%", borderRadius: "4px", background: "var(--line)" }} />
                          <span style={{ display: "inline-flex", marginTop: "6px", width: "46%", height: "22px", borderRadius: "6px", background: "#d4af37" }} />
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <span style={{ flex: "1", borderRadius: "12px", background: "var(--systems)", boxShadow: "inset 0 0 0 1px rgba(13,13,13,.06)" }} />
                        <span style={{ flex: "1", borderRadius: "12px", background: "var(--studio)", boxShadow: "inset 0 0 0 1px rgba(13,13,13,.06)" }} />
                        <span style={{ flex: "1", borderRadius: "12px", background: "#d4af37", boxShadow: "inset 0 0 0 1px rgba(13,13,13,.06)" }} />
                        <span style={{ flex: "1", borderRadius: "12px", background: "var(--sage)", boxShadow: "inset 0 0 0 1px rgba(13,13,13,.06)" }} />
                        <span style={{ flex: "1", borderRadius: "12px", background: "var(--ink)", boxShadow: "inset 0 0 0 1px rgba(13,13,13,.06)" }} />
                      </div>
                    </div>
                    <span className="ph-notch" style={{ background: "var(--studio)" }} />
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
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--studio-text)" }}>01</span>
            <p style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2vw, 27px)", lineHeight: "1.3", fontWeight: "400", letterSpacing: "-0.01em" }}>
              Your logo works on the sign but not on a phone screen.
            </p>
          </div>
          <div className="sv card" style={{ padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: "28px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--studio-text)" }}>02</span>
            <p style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2vw, 27px)", lineHeight: "1.3", fontWeight: "400", letterSpacing: "-0.01em" }}>
              Every designer you hire starts from scratch.
            </p>
          </div>
          <div className="sv card" style={{ padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: "28px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--studio-text)" }}>03</span>
            <p style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2vw, 27px)", lineHeight: "1.3", fontWeight: "400", letterSpacing: "-0.01em" }}>
              Templates break the moment someone edits them.
            </p>
          </div>
        </div>
      </section>
      <section id="included" className="oc-studio-tint" style={{ marginTop: "clamp(96px, 11vw, 160px)", background: "var(--studio-tint)", padding: "clamp(88px, 10vw, 136px) 0", position: "relative", overflow: "clip" }}>
        <svg className="wm-mark para wm-soft" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-160px", bottom: "-200px", width: "520px", height: "520px", color: "rgba(184, 77, 49, 0.08)" }}>
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
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(156, 63, 38, 0.2)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--studio)", color: "var(--on-studio)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Logo and identity</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                A mark, colours and type that work from a favicon to a billboard.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(156, 63, 38, 0.2)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--studio)", color: "var(--on-studio)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Brand guidelines</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                A clear, short guide your whole team will actually use.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(156, 63, 38, 0.2)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--studio)", color: "var(--on-studio)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Campaign and ad creative</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                One idea carried across every format and platform.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(156, 63, 38, 0.2)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--studio)", color: "var(--on-studio)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Editable templates</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Posts, slides and documents in Figma or Canva, locked where it matters.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(156, 63, 38, 0.2)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--studio)", color: "var(--on-studio)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Print and packaging</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Print-ready files and supplier specs.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(156, 63, 38, 0.2)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--studio)", color: "var(--on-studio)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Presentation design</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Sales decks and proposals that look as good as the work.
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
                Brief
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                We agree the goal, the audience and what must not change.
              </p>
            </li>
            <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "16px", height: "16px", borderRadius: "999px", background: "var(--canvas)", boxShadow: "inset 0 0 0 2px #d4af37" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)", marginTop: "12px" }}>02</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "28px", lineHeight: "1.15", fontWeight: "500" }}>
                Explore
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Two or three directions, shown on real applications.
              </p>
            </li>
            <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "16px", height: "16px", borderRadius: "999px", background: "var(--canvas)", boxShadow: "inset 0 0 0 2px #d4af37" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)", marginTop: "12px" }}>03</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "28px", lineHeight: "1.15", fontWeight: "500" }}>
                Refine
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                One direction, developed into a full system.
              </p>
            </li>
            <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "16px", height: "16px", borderRadius: "999px", background: "var(--canvas)", boxShadow: "inset 0 0 0 2px #d4af37" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)", marginTop: "12px" }}>04</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "28px", lineHeight: "1.15", fontWeight: "500" }}>
                Hand over
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Master files, guidelines and templates your team can keep using.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section className="wrap sec" aria-label="Example build">
        <Link href="/work" className="case" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "32px clamp(40px, 6vw, 96px)", alignItems: "center", textDecoration: "none", color: "var(--ink)" }}>
          <div className="sv">
            <div className="motif" style={{ containerType: "inline-size", aspectRatio: "1 / 1", background: "var(--gold-tint)", color: "var(--ink)", borderRadius: "var(--radius-xl)" }}>
              <div style={{ position: "absolute", inset: "9%", display: "grid", gridTemplateRows: "1.5fr 1fr .45fr", gap: "12px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "12px" }}>
                  <div style={{ borderRadius: "18px", background: "var(--paper)", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "18px", boxShadow: "0 14px 30px rgba(13,13,13,.06)" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: ".06em", color: "var(--muted)" }}>
                      DISPLAY · JOST
                    </span>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: "500", fontSize: "22cqw", lineHeight: ".9", letterSpacing: "-.04em" }}>
                      Aa
                    </span>
                  </div>
                  <div style={{ borderRadius: "18px", background: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg className="mk-s" viewBox="28 28 200 200" aria-hidden="true" style={{ width: "46%", height: "46%", overflow: "visible", color: "#f4f1ea" }}>
                      <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
                      <circle cx="160" cy="96" r="24" />
                    </svg>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "12px" }}>
                  <div style={{ borderRadius: "18px", background: "var(--studio)", display: "flex", alignItems: "flex-end", padding: "16px", color: "#fff3ec", fontFamily: "var(--font-display)", fontSize: "4.4cqw", lineHeight: "1.15" }}>
                    Campaign
                    <br />
                    template
                  </div>
                  <div style={{ borderRadius: "18px", background: "var(--paper)", padding: "16px", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "center" }}>
                    <span style={{ display: "block", height: "10px", width: "70%", borderRadius: "5px", background: "var(--ink)" }} />
                    <span style={{ display: "block", height: "7px", width: "92%", borderRadius: "4px", background: "var(--line)" }} />
                    <span style={{ display: "block", height: "7px", width: "80%", borderRadius: "4px", background: "var(--line)" }} />
                    <span style={{ display: "inline-flex", marginTop: "6px", width: "46%", height: "22px", borderRadius: "6px", background: "#d4af37" }} />
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <span style={{ flex: "1", borderRadius: "12px", background: "var(--systems)", boxShadow: "inset 0 0 0 1px rgba(13,13,13,.06)" }} />
                  <span style={{ flex: "1", borderRadius: "12px", background: "var(--studio)", boxShadow: "inset 0 0 0 1px rgba(13,13,13,.06)" }} />
                  <span style={{ flex: "1", borderRadius: "12px", background: "#d4af37", boxShadow: "inset 0 0 0 1px rgba(13,13,13,.06)" }} />
                  <span style={{ flex: "1", borderRadius: "12px", background: "var(--sage)", boxShadow: "inset 0 0 0 1px rgba(13,13,13,.06)" }} />
                  <span style={{ flex: "1", borderRadius: "12px", background: "var(--ink)", boxShadow: "inset 0 0 0 1px rgba(13,13,13,.06)" }} />
                </div>
              </div>
              <span className="ph-notch" style={{ background: "var(--canvas)" }} />
              <span className="ph-dot" />
            </div>
          </div>
          <div className="sv2" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>WHAT WE BUILD</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <span className="oc-tag oc-tag-studio">Graphic design</span>
              <span className="oc-tag oc-tag-outline">Example build</span>
            </div>
            <h2 className="h2" style={{ fontSize: "clamp(32px, 3.4vw, 48px)" }}>A brand kit a team can actually use</h2>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
              Logo, colours, type and twenty editable templates, delivered with a one-page guide so anyone on the team can make on-brand work.
            </p>
            <span className="more">
              {"See how it works "}
              <span style={{ color: "var(--studio-text)", display: "inline-flex" }}>
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
                <path className="tl-mono" d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
              </svg>
              Figma
            </span>
            <span className="tchip"><i aria-hidden="true" />Canva</span>
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
                <span>Can you refresh our logo instead of replacing it?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>Often that is the better choice. We will tell you honestly after the audit.</p>
            </details>
            <details>
              <summary>
                <span>Which files will we get?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>Master files plus SVG, PNG and PDF exports, and editable templates in Figma or Canva.</p>
            </details>
            <details>
              <summary>
                <span>How many rounds of changes?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>[Your revision policy, e.g. two rounds at each stage].</p>
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
          <Link href="/services/social-media" className="sv oc-night oc-studio lift" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: "40px", padding: "clamp(28px, 3vw, 40px)", borderRadius: "var(--radius-xl)", background: "var(--studio)", color: "var(--on-studio)", textDecoration: "none" }}>
            <svg className="wm-mark " viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-50px", bottom: "-70px", width: "240px", height: "240px", color: "rgba(255, 255, 255, 0.07)" }}>
              <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
            </svg>
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ display: "inline-flex", width: "48px", height: "48px", alignItems: "center", justifyContent: "center", borderRadius: "14px", background: "rgba(255, 255, 255, 0.12)", color: "var(--on-studio)" }}>
                <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M6 4h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7l-5 4v-4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" />
                  <path d="M8 10.5h8" />
                </svg>
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px" }}>04 · STUDIO</span>
            </div>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "32px", lineHeight: "1.1", fontWeight: "500" }}>
                Social media
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.5", opacity: "0.85" }}>Content and community that sound like you</span>
            </div>
            <span className="more" style={{ position: "relative" }}>
              {"Explore "}
              <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
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

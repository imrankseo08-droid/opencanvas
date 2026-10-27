import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, faqLd, pageMeta, serviceLd, webPageLd } from '@/lib/seo';

export const metadata: Metadata = pageMeta("/services/motion-graphics");

export default function Page() {
  return (
    <>
      <JsonLd data={[webPageLd("/services/motion-graphics"), breadcrumbLd("/services/motion-graphics"), faqLd([{"q": "How long is a typical explainer?", "a": "60 to 90 seconds. Shorter cuts for social come from the same animation."}, {"q": "Which formats do we get?", "a": "16:9, 1:1, 4:5 and 9:16 MP4 files, plus project files on request."}]), serviceLd("/services/motion-graphics", "Motion graphics", "Motion graphics and animation", ["Logo animation and stings", "Explainer videos", "Reels and short-form", "Animated ads", "Motion toolkit", "Sound and captions"])]} />
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
                    <span aria-current="page">Motion graphics</span>
                  </p>
                </nav>
                <p className="rise d1 eyebrow-n" style={{ margin: "8px 0 0" }}>06 — STUDIO</p>
                <h1 className="rise d2 h1 h1-s" style={{ maxWidth: "12em" }}>
                  Movement that earns attention and explains what a still can’t.
                </h1>
                <p className="rise d3 lede">
                  Logo stings, explainers, reels and animated ads, all cut from one idea and sized for every platform.
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
                  <div className="motif" style={{ containerType: "inline-size", aspectRatio: "4 / 5", background: "var(--studio)", color: "#fff3ec", borderRadius: "var(--radius-xl)" }}>
                    <div style={{ position: "absolute", inset: "10% 8% auto", aspectRatio: "16 / 10", borderRadius: "16px", background: "#000", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 24px 50px rgba(13,13,13,.35)" }}>
                      <svg className="mk loop" viewBox="28 28 200 200" aria-hidden="true" style={{ width: "30%", height: "30%", overflow: "visible", color: "#f4f1ea" }}>
                        <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
                        <circle cx="160" cy="96" r="24" />
                      </svg>
                      <span style={{ position: "absolute", right: "14px", top: "12px", fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(244,241,234,.6)" }}>
                        REC 00:05
                      </span>
                    </div>
                    <div style={{ position: "absolute", left: "8%", right: "8%", bottom: "9%", display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(255,243,236,.7)" }}>
                        <span>00:00</span>
                        <span>00:05</span>
                      </div>
                      <div style={{ position: "relative", height: "34px", borderRadius: "8px", background: "rgba(255,243,236,.12)" }}>
                        <span style={{ position: "absolute", left: "12%", top: "50%", width: "9px", height: "9px", margin: "-4.5px 0 0 -4.5px", transform: "rotate(45deg)", background: "#d4af37" }} />
                        <span style={{ position: "absolute", left: "34%", top: "50%", width: "9px", height: "9px", margin: "-4.5px 0 0 -4.5px", transform: "rotate(45deg)", background: "#f4f1ea" }} />
                        <span style={{ position: "absolute", left: "58%", top: "50%", width: "9px", height: "9px", margin: "-4.5px 0 0 -4.5px", transform: "rotate(45deg)", background: "#d4af37" }} />
                        <span style={{ position: "absolute", left: "80%", top: "50%", width: "9px", height: "9px", margin: "-4.5px 0 0 -4.5px", transform: "rotate(45deg)", background: "#f4f1ea" }} />
                        <span className="reel-bar" style={{ height: "100%", background: "rgba(212,175,55,.28)", borderRadius: "8px" }} />
                      </div>
                      <div style={{ display: "flex", gap: "6px" }}>
                        <span style={{ flex: "2", height: "18px", borderRadius: "5px", background: "rgba(255,243,236,.26)" }} />
                        <span style={{ flex: "1", height: "18px", borderRadius: "5px", background: "#d4af37" }} />
                        <span style={{ flex: "3", height: "18px", borderRadius: "5px", background: "rgba(255,243,236,.18)" }} />
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
              Static posts get scrolled straight past.
            </p>
          </div>
          <div className="sv card" style={{ padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: "28px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--studio-text)" }}>02</span>
            <p style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2vw, 27px)", lineHeight: "1.3", fontWeight: "400", letterSpacing: "-0.01em" }}>
              Your product takes too long to explain.
            </p>
          </div>
          <div className="sv card" style={{ padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: "28px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--studio-text)" }}>03</span>
            <p style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2vw, 27px)", lineHeight: "1.3", fontWeight: "400", letterSpacing: "-0.01em" }}>
              Video feels expensive and slow to make.
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
              <h3 className="h3" style={{ fontSize: "23px" }}>Logo animation and stings</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                A five-second signature for videos, reels and presentations.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(156, 63, 38, 0.2)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--studio)", color: "var(--on-studio)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Explainer videos</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Your offer in 60 to 90 seconds, scripted and animated.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(156, 63, 38, 0.2)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--studio)", color: "var(--on-studio)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Reels and short-form</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Edits made for the feed, captioned for sound-off viewing.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(156, 63, 38, 0.2)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--studio)", color: "var(--on-studio)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Animated ads</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Every platform size from one master animation.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(156, 63, 38, 0.2)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--studio)", color: "var(--on-studio)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Motion toolkit</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Titles, lower thirds and transitions your editor can reuse.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(156, 63, 38, 0.2)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--studio)", color: "var(--on-studio)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Sound and captions</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Music, sound design and captions, cleared for use.
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
                Script
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                One clear message, written for the first three seconds.
              </p>
            </li>
            <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "16px", height: "16px", borderRadius: "999px", background: "var(--canvas)", boxShadow: "inset 0 0 0 2px #d4af37" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)", marginTop: "12px" }}>02</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "28px", lineHeight: "1.15", fontWeight: "500" }}>
                Storyboard
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Frames you approve before anything moves.
              </p>
            </li>
            <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "16px", height: "16px", borderRadius: "999px", background: "var(--canvas)", boxShadow: "inset 0 0 0 2px #d4af37" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)", marginTop: "12px" }}>03</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "28px", lineHeight: "1.15", fontWeight: "500" }}>
                Animate
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Motion built on your brand system.
              </p>
            </li>
            <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "16px", height: "16px", borderRadius: "999px", background: "var(--canvas)", boxShadow: "inset 0 0 0 2px #d4af37" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)", marginTop: "12px" }}>04</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "28px", lineHeight: "1.15", fontWeight: "500" }}>
                Deliver
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Every size and format, ready to post or run as ads.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section className="wrap sec" aria-label="Example build">
        <Link href="/work" className="case" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "32px clamp(40px, 6vw, 96px)", alignItems: "center", textDecoration: "none", color: "var(--ink)" }}>
          <div className="sv">
            <div className="motif" style={{ containerType: "inline-size", aspectRatio: "1 / 1", background: "var(--studio)", color: "#fff3ec", borderRadius: "var(--radius-xl)" }}>
              <div style={{ position: "absolute", inset: "10% 8% auto", aspectRatio: "16 / 10", borderRadius: "16px", background: "#000", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 24px 50px rgba(13,13,13,.35)" }}>
                <svg className="mk loop" viewBox="28 28 200 200" aria-hidden="true" style={{ width: "30%", height: "30%", overflow: "visible", color: "#f4f1ea" }}>
                  <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
                  <circle cx="160" cy="96" r="24" />
                </svg>
                <span style={{ position: "absolute", right: "14px", top: "12px", fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(244,241,234,.6)" }}>
                  REC 00:05
                </span>
              </div>
              <div style={{ position: "absolute", left: "8%", right: "8%", bottom: "9%", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(255,243,236,.7)" }}>
                  <span>00:00</span>
                  <span>00:05</span>
                </div>
                <div style={{ position: "relative", height: "34px", borderRadius: "8px", background: "rgba(255,243,236,.12)" }}>
                  <span style={{ position: "absolute", left: "12%", top: "50%", width: "9px", height: "9px", margin: "-4.5px 0 0 -4.5px", transform: "rotate(45deg)", background: "#d4af37" }} />
                  <span style={{ position: "absolute", left: "34%", top: "50%", width: "9px", height: "9px", margin: "-4.5px 0 0 -4.5px", transform: "rotate(45deg)", background: "#f4f1ea" }} />
                  <span style={{ position: "absolute", left: "58%", top: "50%", width: "9px", height: "9px", margin: "-4.5px 0 0 -4.5px", transform: "rotate(45deg)", background: "#d4af37" }} />
                  <span style={{ position: "absolute", left: "80%", top: "50%", width: "9px", height: "9px", margin: "-4.5px 0 0 -4.5px", transform: "rotate(45deg)", background: "#f4f1ea" }} />
                  <span className="reel-bar" style={{ height: "100%", background: "rgba(212,175,55,.28)", borderRadius: "8px" }} />
                </div>
                <div style={{ display: "flex", gap: "6px" }}>
                  <span style={{ flex: "2", height: "18px", borderRadius: "5px", background: "rgba(255,243,236,.26)" }} />
                  <span style={{ flex: "1", height: "18px", borderRadius: "5px", background: "#d4af37" }} />
                  <span style={{ flex: "3", height: "18px", borderRadius: "5px", background: "rgba(255,243,236,.18)" }} />
                </div>
              </div>
              <span className="ph-notch" style={{ background: "var(--canvas)" }} />
              <span className="ph-dot" />
            </div>
          </div>
          <div className="sv2" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>WHAT WE BUILD</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <span className="oc-tag oc-tag-studio">Motion graphics</span>
              <span className="oc-tag oc-tag-outline">Example build</span>
            </div>
            <h2 className="h2" style={{ fontSize: "clamp(32px, 3.4vw, 48px)" }}>A launch campaign in motion</h2>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
              A logo sting, three reels and animated ads, all cut from one idea and sized for every platform.
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
            <span className="tchip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path className="tl-mono" d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
              </svg>
              Meta Ads
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
                <span>How long is a typical explainer?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>60 to 90 seconds. Shorter cuts for social come from the same animation.</p>
            </details>
            <details>
              <summary>
                <span>Do you film live action?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>[Yes / with partners / no: your answer].</p>
            </details>
            <details>
              <summary>
                <span>Which formats do we get?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>16:9, 1:1, 4:5 and 9:16 MP4 files, plus project files on request.</p>
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
          <Link href="/services/graphic-design" className="sv oc-night oc-studio lift" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: "40px", padding: "clamp(28px, 3vw, 40px)", borderRadius: "var(--radius-xl)", background: "var(--studio)", color: "var(--on-studio)", textDecoration: "none" }}>
            <svg className="wm-mark " viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-50px", bottom: "-70px", width: "240px", height: "240px", color: "rgba(255, 255, 255, 0.07)" }}>
              <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
            </svg>
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ display: "inline-flex", width: "48px", height: "48px", alignItems: "center", justifyContent: "center", borderRadius: "14px", background: "rgba(255, 255, 255, 0.12)", color: "var(--on-studio)" }}>
                <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M8 3h8l3 8-7 10-7-10z" />
                  <path d="M12 21v-7" />
                  <circle cx="12" cy="11.5" r="1.75" />
                </svg>
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px" }}>05 · STUDIO</span>
            </div>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "32px", lineHeight: "1.1", fontWeight: "500" }}>
                Graphic design
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.5", opacity: "0.85" }}>Identity, campaigns and templates</span>
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

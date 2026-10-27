import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, pageMeta, personLd, webPageLd } from '@/lib/seo';

export const metadata: Metadata = pageMeta("/about");

export default function Page() {
  return (
    <>
      <JsonLd data={[webPageLd("/about"), breadcrumbLd("/about"), personLd()]} />
      <section className="s01" style={{ position: "relative", overflow: "clip" }}>
        <svg className="wm-mark wm-soft" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-220px", top: "-60px", width: "640px", height: "640px", color: "rgba(13, 13, 13, 0.035)" }}>
          <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
        </svg>
        <div className="wrap" style={{ position: "relative", paddingTop: "clamp(56px, 7vw, 104px)", paddingBottom: "clamp(24px, 3vw, 40px)" }}>
          <div className="grid2" style={{ alignItems: "center" }}>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px", minWidth: "0" }}>
              <nav aria-label="Breadcrumb">
                <p className="crumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">About</span></p>
              </nav>
              <p className="rise d1 eyebrow-n" style={{ margin: "8px 0 0" }}>ABOUT US</p>
              <h1 className="rise d2 h1" style={{ maxWidth: "12em" }}>One studio for the brand and the system behind it.</h1>
              <p className="rise d3 lede">
                Open Canvas is a digital marketing studio founded by Imran Khan. We design how your brand looks and build how your marketing runs, as one team with one plan.
              </p>
              <div className="rise d4" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px 24px" }}>
                <Link href="/contact" className="oc-btn oc-btn-gold oc-btn-lg">
                  <span>Book a free audit</span>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <Link href="/services" className="oc-btn oc-btn-outline oc-btn-lg"><span>See our services</span></Link>
              </div>
            </div>
            <div className="rise d4" style={{ position: "relative", minWidth: "0" }}>
              <div style={{ maxWidth: "500px", marginLeft: "auto" }}>
                <div className="ph" style={{ aspectRatio: "4 / 5" }}>
                  <Image src="/images/night-office.jpg" alt="An empty office at night, rain on the window, a laptop and phone lighting up with new messages" fill sizes="(max-width: 900px) 100vw, 600px" style={{ objectFit: "cover" }} priority />
                  <span className="ph-notch" style={{ background: "var(--canvas)" }} />
                  <span className="ph-dot" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap sec" aria-label="The name">
        <div className="grid2">
          <div className="sv">
            <div className="motif oc-night" style={{ aspectRatio: "1", background: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg className="mk loop" viewBox="28 28 200 200" aria-hidden="true" style={{ width: "46%", height: "46%", overflow: "visible", color: "#f4f1ea" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
                <circle cx="160" cy="96" r="24" />
              </svg>
              <span style={{ position: "absolute", left: "8%", bottom: "10%", display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: ".06em", color: "rgba(244,241,234,.7)" }}>
                <span style={{ width: "18px", height: "1px", background: "rgba(244,241,234,.4)" }} />
                THE FRAME · STRUCTURE
              </span>
              <span style={{ position: "absolute", right: "8%", top: "9%", display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: ".06em", color: "rgba(244,241,234,.7)" }}>
                <span style={{ width: "18px", height: "1px", background: "rgba(244,241,234,.4)" }} />
                THE GAP · ROOM TO THINK
              </span>
              <span style={{ position: "absolute", right: "8%", top: "46%", display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: ".06em", color: "rgba(244,241,234,.7)" }}>
                <span style={{ width: "18px", height: "1px", background: "rgba(244,241,234,.4)" }} />
                THE DOT · THE IDEA
              </span>
            </div>
          </div>
          <div className="sv2" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>THE NAME</p>
            <h2 className="h2">Why “open canvas”?</h2>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.65", color: "var(--ink-soft)" }}>
              An open canvas is a beginning: nothing decided yet, everything possible. Our logo says it literally, a frame left open with one idea dropping into the gap.
            </p>
            <ol style={{ listStyle: "none", margin: "8px 0 0", padding: "0" }}>
              <li className="step-on" style={{ display: "grid", gridTemplateColumns: "56px minmax(0, 1fr)", gap: "12px", padding: "22px 0", borderTop: "1px solid var(--line)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "30px", color: "var(--gold-text)" }}>01</span>
                <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.25", fontWeight: "500" }}>
                    The frame
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                    Structure: the systems, data and process that keep marketing running.
                  </span>
                </span>
              </li>
              <li className="step-on" style={{ display: "grid", gridTemplateColumns: "56px minmax(0, 1fr)", gap: "12px", padding: "22px 0", borderTop: "1px solid var(--line)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "30px", color: "var(--gold-text)" }}>02</span>
                <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.25", fontWeight: "500" }}>
                    The gap
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                    Room to listen before we design. Every project starts with your business, not a template.
                  </span>
                </span>
              </li>
              <li className="step-on" style={{ display: "grid", gridTemplateColumns: "56px minmax(0, 1fr)", gap: "12px", padding: "22px 0", borderTop: "1px solid var(--line)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "30px", color: "var(--gold-text)" }}>03</span>
                <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.25", fontWeight: "500" }}>
                    The dot
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                    The one clear idea that drops into place and makes the rest make sense.
                  </span>
                </span>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section id="founder" className="oc-studio-tint" style={{ marginTop: "clamp(96px, 11vw, 160px)", background: "var(--studio-tint)", padding: "clamp(88px, 10vw, 136px) 0", position: "relative", overflow: "clip" }}>
        <svg className="wm-mark para wm-soft" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-140px", top: "-80px", width: "520px", height: "520px", color: "rgba(184, 77, 49, 0.08)" }}>
          <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
        </svg>
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "clamp(40px, 6vw, 96px)", alignItems: "center" }}>
            <div className="sv" style={{ maxWidth: "480px", width: "100%" }}>
              <div className="ph" style={{ aspectRatio: "4 / 5" }}>
                <Image src="/images/imran-khan-portrait.jpg" alt="Portrait of Imran Khan, founder of Open Canvas Marketing" fill sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 600px" style={{ objectFit: "cover" }} />
                <span className="ph-notch" style={{ background: "var(--studio-tint)" }} />
                <span className="ph-dot" />
              </div>
            </div>
            <div className="sv2" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p className="eyebrow-n" style={{ margin: "0" }}>THE FOUNDER</p>
              <h2 className="h2">Imran Khan</h2>
              <p style={{ margin: "-8px 0 0", fontSize: "16px", color: "var(--studio-text)" }}>Founder, Open Canvas Marketing</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "18px", lineHeight: "1.65" }}>
                <p style={{ margin: "0" }}>
                  [Your background in two or three sentences: years in marketing, the industries you know best, and what you did before Open Canvas.]
                </p>
                <p style={{ margin: "0" }}>
                  I started Open Canvas because I kept seeing the same gap: beautiful brands with no system behind them, and clever automations wrapped in a brand nobody remembered. So we do both, as one team, and you work with me directly from the first call.
                </p>
              </div>
              <dl className="kv" style={{ margin: "8px 0 0" }}>
                <div style={{ borderTopColor: "rgba(156, 63, 38, 0.22)" }}><dt>BASED IN</dt><dd>{site.location}</dd></div>
                <div style={{ borderTopColor: "rgba(156, 63, 38, 0.22)" }}><dt>WORKS WITH</dt><dd>Clients worldwide, remotely</dd></div>
                <div style={{ borderTopColor: "rgba(156, 63, 38, 0.22)" }}><dt>LANGUAGES</dt><dd>[English, Urdu, …]</dd></div>
              </dl>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 20px", alignItems: "center" }}>
                <Link href="/contact" className="oc-btn oc-btn-primary oc-btn-md">
                  <span>Book a call with Imran</span>
                  <svg className="oc-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <a href="#" className="more">
                  {"LinkedIn "}
                  <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap sec" aria-label="Principles">
        <div className="sv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px 48px", marginBottom: "clamp(40px, 5vw, 64px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>WHAT WE STAND FOR</p>
            <h2 className="h2">Four promises we hold ourselves to.</h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "20px" }}>
          <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "48px", padding: "clamp(28px, 3vw, 40px)", borderRadius: "var(--radius-xl)", background: "var(--studio-tint)" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "64px", lineHeight: "0.9", fontWeight: "300", letterSpacing: "-0.04em", color: "var(--studio-text)" }}>
              01
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 className="h3">Craft you can see</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Consistent, considered design on every touchpoint, from a reel to a receipt email.
              </p>
            </div>
          </div>
          <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "48px", padding: "clamp(28px, 3vw, 40px)", borderRadius: "var(--radius-xl)", background: "var(--systems-tint)" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "64px", lineHeight: "0.9", fontWeight: "300", letterSpacing: "-0.04em", color: "var(--systems-text)" }}>
              02
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 className="h3">Systems that keep running</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Automations that capture, follow up and report on their own, documented so nothing depends on one person.
              </p>
            </div>
          </div>
          <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "48px", padding: "clamp(28px, 3vw, 40px)", borderRadius: "var(--radius-xl)", background: "var(--gold-tint)" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "64px", lineHeight: "0.9", fontWeight: "300", letterSpacing: "-0.04em", color: "var(--gold-text)" }}>
              03
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 className="h3">Results you can read</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                One plain-language report a month. What changed, what it was worth, and what we do next.
              </p>
            </div>
          </div>
          <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "48px", padding: "clamp(28px, 3vw, 40px)", borderRadius: "var(--radius-xl)", background: "var(--sunken)" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "64px", lineHeight: "0.9", fontWeight: "300", letterSpacing: "-0.04em", color: "var(--ink-soft)" }}>
              04
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 className="h3">Honest by default</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                No fake reviews, no vanity metrics, no promises of first place on Google. You own every file and account.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap sec" aria-label="Two studios">
        <div className="sv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px 48px", marginBottom: "clamp(40px, 5vw, 64px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>HOW WE ARE BUILT</p>
            <h2 className="h2">Two studios. One team.</h2>
            <p style={{ margin: "0", maxWidth: "34em", fontSize: "18px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
              Systems keeps your marketing running. Studio makes it worth looking at. One plan, one point of contact.
            </p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: "24px" }}>
          <div className="oc-night oc-systems sv" style={{ position: "relative", overflow: "hidden", background: "var(--systems)", color: "var(--on-systems)", borderRadius: "var(--radius-xl)", padding: "clamp(28px, 4vw, 48px)" }}>
            <svg className="wm-mark " viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-60px", bottom: "-60px", width: "300px", height: "300px", color: "rgba(244, 241, 234, 0.05)" }}>
              <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
            </svg>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
              <p className="eyebrow-n" style={{ margin: "0" }}>SYSTEMS · 01–03</p>
              <p style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "26px", lineHeight: "1.25" }}>
                Marketing that keeps running without you.
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <Link href="/services/ai-automation" className="svc-row">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold)" }}>01</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.2", fontWeight: "500" }}>
                  AI automation
                </span>
                <span className="arr" style={{ color: "var(--gold)", display: "inline-flex" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </span>
              </Link>
              <Link href="/services/marketing-automation" className="svc-row">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold)" }}>02</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.2", fontWeight: "500" }}>
                  Marketing automation
                </span>
                <span className="arr" style={{ color: "var(--gold)", display: "inline-flex" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </span>
              </Link>
              <Link href="/services/seo" className="svc-row">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold)" }}>03</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.2", fontWeight: "500" }}>SEO</span>
                <span className="arr" style={{ color: "var(--gold)", display: "inline-flex" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="oc-night oc-studio sv" style={{ position: "relative", overflow: "hidden", background: "var(--studio)", color: "var(--on-studio)", borderRadius: "var(--radius-xl)", padding: "clamp(28px, 4vw, 48px)" }}>
            <svg className="wm-mark " viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-60px", bottom: "-60px", width: "300px", height: "300px", color: "rgba(255, 243, 236, 0.10)" }}>
              <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
            </svg>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
              <p className="eyebrow-n" style={{ margin: "0" }}>STUDIO · 04–07</p>
              <p style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "26px", lineHeight: "1.25" }}>
                A brand that looks like one hand made it.
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <Link href="/services/social-media" className="svc-row">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--on-studio)" }}>04</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.2", fontWeight: "500" }}>
                  Social media
                </span>
                <span className="arr" style={{ color: "var(--on-studio)", display: "inline-flex" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </span>
              </Link>
              <Link href="/services/graphic-design" className="svc-row">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--on-studio)" }}>05</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.2", fontWeight: "500" }}>
                  Graphic design
                </span>
                <span className="arr" style={{ color: "var(--on-studio)", display: "inline-flex" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </span>
              </Link>
              <Link href="/services/motion-graphics" className="svc-row">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--on-studio)" }}>06</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.2", fontWeight: "500" }}>
                  Motion graphics
                </span>
                <span className="arr" style={{ color: "var(--on-studio)", display: "inline-flex" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </span>
              </Link>
              <Link href="/services/web-design" className="svc-row">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--on-studio)" }}>07</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.2", fontWeight: "500" }}>
                  Web design
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

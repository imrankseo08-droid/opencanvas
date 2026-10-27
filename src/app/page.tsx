import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/components/Logo';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { faqLd, pageMeta, webPageLd } from '@/lib/seo';
import { SubscribeForm } from '@/components/Forms';

export const metadata: Metadata = pageMeta("/");

export default function Page() {
  return (
    <>
      <JsonLd data={[webPageLd("/"), faqLd([{"q": "Do I need both Systems and Studio?", "a": "No. Many clients start with one. We plan with both in mind, so the pieces fit together when you add the other."}, {"q": "Will AI replace my team?", "a": "No. It takes the repetitive work: first replies, sorting, drafts. A person on your team or ours approves anything that matters."}, {"q": "How quickly will we see results?", "a": "Automations usually start working within weeks of launch; SEO and brand work compound over months. We agree what success looks like in the first call and report against it monthly."}, {"q": "What does it cost?", "a": "It depends on what you need, so we never quote blind. Every engagement starts with the free audit, then a written scope with a fixed price before any work begins. Ongoing work runs on a simple monthly retainer."}, {"q": "Which tools do you work with?", "a": "Where we can, the ones you already pay for: your CRM, email platform, ad accounts and website. If you have nothing yet, we recommend a simple stack and set it up."}])]} />
      <main id="main">
      <div className="progress" aria-hidden="true" />
      <div className="stick">
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", paddingTop: "12px", paddingBottom: "12px" }}>
          <a href="#intro" aria-label="Open Canvas Marketing — back to top" style={{ display: "flex" }}>
            <Logo variant="dark" style={{ height: "36px", width: "auto" }} />
          </a>
          <nav className="stick-nav" aria-label="Main (compact)" style={{ display: "flex", alignItems: "center", gap: "28px", fontSize: "14px", fontWeight: "500" }}>
            <Link href="/services">Services</Link>
            <Link href="/work">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/insights">Insights</Link>
          </nav>
          <Link href="/contact" className="oc-btn oc-btn-gold oc-btn-md">
            <span>Book a free audit</span>
            <svg className="oc-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
      <nav className="secnav" aria-label="Sections">
        <a href="#intro" className="n01" aria-label="Intro"><span className="lbl">01 · Intro</span><span className="pip" /></a>
        <a href="#approach" className="n02" aria-label="Approach"><span className="lbl">02 · Approach</span><span className="pip" /></a>
        <a href="#in-action" className="n03" aria-label="In action"><span className="lbl">03 · In action</span><span className="pip" /></a>
        <a href="#services" className="n04" aria-label="Services"><span className="lbl">04 · Services</span><span className="pip" /></a>
        <a href="#always-on" className="n05" aria-label="Always on"><span className="lbl">05 · Always on</span><span className="pip" /></a>
        <a href="#process" className="n06" aria-label="Process"><span className="lbl">06 · Process</span><span className="pip" /></a>
        <a href="#work" className="n07" aria-label="Work"><span className="lbl">07 · Work</span><span className="pip" /></a>
        <a href="#motion" className="n08" aria-label="Motion"><span className="lbl">08 · Motion</span><span className="pip" /></a>
        <a href="#founder" className="n09" aria-label="Founder"><span className="lbl">09 · Founder</span><span className="pip" /></a>
        <a href="#faq" className="n10" aria-label="FAQ"><span className="lbl">10 · FAQ</span><span className="pip" /></a>
        <a href="#start" className="n11" aria-label="Start"><span className="lbl">11 · Start</span><span className="pip" /></a>
      </nav>
      <section id="intro" className="oc-night oc-systems s01" style={{ position: "relative", background: "var(--systems)", color: "var(--on-night)", overflow: "clip", borderRadius: "0 0 var(--radius-xl) var(--radius-xl)" }}>
        <svg className="wm-mark hero-wm" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-120px", top: "40px", width: "760px", height: "760px", color: "rgba(244, 241, 234, 0.06)" }}>
          <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
          <circle cx="160" cy="96" r="24" />
        </svg>
        <header className="wrap" style={{ position: "relative", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px 32px", paddingTop: "28px", paddingBottom: "28px" }}>
          <Link href="/" aria-label="Open Canvas Marketing — home" className="logo-in" style={{ position: "relative", display: "block", width: "182px", height: "44px", color: "#f4f1ea" }}>
            <Logo variant="light" decorative className="wmk" style={{ position: "absolute", inset: "0", width: "182px", height: "44px" }} />
            <svg className="mk" viewBox="0 0 1060 256" aria-hidden="true" style={{ position: "absolute", inset: "0", width: "182px", height: "44px", overflow: "visible" }}>
              <g transform="translate(20,34) scale(0.74)">
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
                <circle cx="160" cy="96" r="24" />
              </g>
            </svg>
          </Link>
          <nav aria-label="Main" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 32px", fontSize: "15px", fontWeight: "500" }}>
            <Link href="/services" style={{ textDecoration: "none" }}>Services</Link>
            <Link href="/work" style={{ textDecoration: "none" }}>Work</Link>
            <Link href="/about" style={{ textDecoration: "none" }}>About</Link>
            <Link href="/pricing" style={{ textDecoration: "none" }}>Pricing</Link>
            <Link href="/insights" style={{ textDecoration: "none" }}>Insights</Link>
            <Link href="/contact" className="oc-btn oc-btn-outline oc-btn-md"><span>Book a free audit</span></Link>
          </nav>
        </header>
        <div className="wrap" style={{ position: "relative", paddingTop: "clamp(72px, 10vw, 152px)", paddingBottom: "clamp(88px, 10vw, 136px)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "36px" }}>
          <p className="rise d1 eyebrow-n" style={{ margin: "0" }}>01 — DIGITAL MARKETING STUDIO</p>
          <h1 className="rise d2" style={{ margin: "0", maxWidth: "11.5em", fontFamily: "var(--font-display)", fontWeight: "500", fontSize: "clamp(50px, 7.4vw, 108px)", lineHeight: "0.98", letterSpacing: "-0.035em" }}>
            Creative craft.
            <br />
            <span style={{ color: "var(--gold)" }}>Intelligent</span>
            {" growth."}
          </h1>
          <p className="rise d3" style={{ margin: "0", maxWidth: "30em", fontSize: "clamp(18px, 1.6vw, 21px)", lineHeight: "1.6", color: "var(--on-systems-muted)" }}>
            We design your brand and build the systems behind it, so your marketing keeps working long after launch.
          </p>
          <div className="rise d4" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px 28px" }}>
            <Link href="/contact" className="oc-btn oc-btn-gold oc-btn-lg">
              <span>Book a free audit</span>
              <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </Link>
            <a href="#approach" style={{ fontWeight: "500", fontSize: "16px", textDecoration: "underline", textDecorationColor: "rgba(212, 175, 55, 0.6)", textUnderlineOffset: "6px" }}>
              See how we work
            </a>
          </div>
          <ul className="rise d5" aria-label="Open Canvas at a glance" style={{ listStyle: "none", margin: "8px 0 0", padding: "0", display: "flex", flexWrap: "wrap", gap: "12px 36px" }}>
            <li style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "36px", lineHeight: "1", fontWeight: "400", letterSpacing: "-0.03em", color: "var(--gold)" }}>
                07
              </span>
              <span style={{ fontSize: "15px", color: "var(--on-systems-muted)" }}>services</span>
            </li>
            <li style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "36px", lineHeight: "1", fontWeight: "400", letterSpacing: "-0.03em", color: "var(--gold)" }}>
                02
              </span>
              <span style={{ fontSize: "15px", color: "var(--on-systems-muted)" }}>studios</span>
            </li>
            <li style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "36px", lineHeight: "1", fontWeight: "400", letterSpacing: "-0.03em", color: "var(--gold)" }}>
                01
              </span>
              <span style={{ fontSize: "15px", color: "var(--on-systems-muted)" }}>team</span>
            </li>
          </ul>
          <a href="#approach" className="rise d5" aria-label="Scroll to the next section" style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "clamp(32px, 6vw, 72px)", textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.08em", color: "var(--on-systems-muted)" }}>
            <span style={{ position: "relative", width: "1px", height: "56px", background: "rgba(244, 241, 234, 0.18)" }}>
              <span className="cue-line" style={{ position: "absolute", inset: "0", background: "#d4af37" }} />
            </span>
            {"SCROLL "}
          </a>
        </div>
      </section>
      <section aria-label="Who we work with" style={{ paddingTop: "clamp(56px, 6vw, 88px)" }}>
        <div className="wrap sv" style={{ marginBottom: "28px" }}>
          <p className="eyebrow-n" style={{ margin: "0" }}>BUILT FOR GROWING TEAMS IN</p>
        </div>
        <div className="fade-edges" style={{ overflow: "hidden" }}>
          <div className="marquee-slow">
            <span className="logo-slot" style={{ color: "var(--ink-soft)" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ width: "18px", height: "18px", overflow: "visible", color: "var(--studio)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "28" }} />
              </svg>
              E-commerce
            </span>
            <span className="logo-slot" style={{ color: "var(--ink-soft)" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ width: "18px", height: "18px", overflow: "visible", color: "var(--systems)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "28" }} />
              </svg>
              Clinics and healthcare
            </span>
            <span className="logo-slot" style={{ color: "var(--ink-soft)" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ width: "18px", height: "18px", overflow: "visible", color: "var(--studio)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "28" }} />
              </svg>
              Real estate
            </span>
            <span className="logo-slot" style={{ color: "var(--ink-soft)" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ width: "18px", height: "18px", overflow: "visible", color: "var(--systems)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "28" }} />
              </svg>
              Education
            </span>
            <span className="logo-slot" style={{ color: "var(--ink-soft)" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ width: "18px", height: "18px", overflow: "visible", color: "var(--studio)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "28" }} />
              </svg>
              Consultancies
            </span>
            <span className="logo-slot" style={{ color: "var(--ink-soft)" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ width: "18px", height: "18px", overflow: "visible", color: "var(--systems)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "28" }} />
              </svg>
              Restaurants and cafés
            </span>
            <span className="logo-slot" style={{ color: "var(--ink-soft)" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ width: "18px", height: "18px", overflow: "visible", color: "var(--studio)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "28" }} />
              </svg>
              Local services
            </span>
            <span className="logo-slot" style={{ color: "var(--ink-soft)" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ width: "18px", height: "18px", overflow: "visible", color: "var(--systems)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "28" }} />
              </svg>
              Startups
            </span>
            <span className="logo-slot" style={{ color: "var(--ink-soft)" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ width: "18px", height: "18px", overflow: "visible", color: "var(--studio)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "28" }} />
              </svg>
              E-commerce
            </span>
            <span className="logo-slot" style={{ color: "var(--ink-soft)" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ width: "18px", height: "18px", overflow: "visible", color: "var(--systems)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "28" }} />
              </svg>
              Clinics and healthcare
            </span>
            <span className="logo-slot" style={{ color: "var(--ink-soft)" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ width: "18px", height: "18px", overflow: "visible", color: "var(--studio)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "28" }} />
              </svg>
              Real estate
            </span>
            <span className="logo-slot" style={{ color: "var(--ink-soft)" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ width: "18px", height: "18px", overflow: "visible", color: "var(--systems)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "28" }} />
              </svg>
              Education
            </span>
            <span className="logo-slot" style={{ color: "var(--ink-soft)" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ width: "18px", height: "18px", overflow: "visible", color: "var(--studio)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "28" }} />
              </svg>
              Consultancies
            </span>
            <span className="logo-slot" style={{ color: "var(--ink-soft)" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ width: "18px", height: "18px", overflow: "visible", color: "var(--systems)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "28" }} />
              </svg>
              Restaurants and cafés
            </span>
            <span className="logo-slot" style={{ color: "var(--ink-soft)" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ width: "18px", height: "18px", overflow: "visible", color: "var(--studio)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "28" }} />
              </svg>
              Local services
            </span>
            <span className="logo-slot" style={{ color: "var(--ink-soft)" }}>
              <svg viewBox="28 28 200 200" aria-hidden="true" style={{ width: "18px", height: "18px", overflow: "visible", color: "var(--systems)" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "28" }} />
              </svg>
              Startups
            </span>
          </div>
        </div>
      </section>
      <section id="approach" className="s02" style={{ position: "relative", overflow: "clip" }}>
        <svg className="wm-mark para wm-soft" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-200px", bottom: "-260px", width: "620px", height: "620px", color: "rgba(13, 13, 13, 0.035)" }}>
          <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
          <circle cx="160" cy="96" r="24" />
        </svg>
        <div className="wrap" style={{ position: "relative", paddingTop: "clamp(120px, 14vw, 200px)", paddingBottom: "clamp(120px, 14vw, 200px)" }}>
          <p className="eyebrow-n sv" style={{ margin: "0 0 40px" }}>02 — OUR APPROACH</p>
          <p style={{ margin: "0", maxWidth: "20em", fontFamily: "var(--font-display)", fontWeight: "400", fontSize: "clamp(32px, 4.4vw, 60px)", lineHeight: "1.18", letterSpacing: "-0.02em" }}>
            <span className="word" style={{ color: "inherit" }}>{"Most "}</span>
            <span className="word" style={{ color: "inherit" }}>{"agencies "}</span>
            <span className="word" style={{ color: "inherit" }}>{"make "}</span>
            <span className="word" style={{ color: "inherit" }}>{"it "}</span>
            <span className="word" style={{ color: "inherit" }}>{"look "}</span>
            <span className="word" style={{ color: "inherit" }}>{"good, "}</span>
            <span className="word" style={{ color: "inherit" }}>{"or "}</span>
            <span className="word" style={{ color: "inherit" }}>{"make "}</span>
            <span className="word" style={{ color: "inherit" }}>{"it "}</span>
            <span className="word" style={{ color: "inherit" }}>{"work. "}</span>
            <span className="word" style={{ color: "inherit" }}>{"We "}</span>
            <span className="word" style={{ color: "inherit" }}>{"do "}</span>
            <span className="word" style={{ color: "var(--gold-text)" }}>{"both. "}</span>
            <span className="word" style={{ color: "inherit" }}>{"One "}</span>
            <span className="word" style={{ color: "inherit" }}>{"team "}</span>
            <span className="word" style={{ color: "inherit" }}>{"designs "}</span>
            <span className="word" style={{ color: "inherit" }}>{"the "}</span>
            <span className="word" style={{ color: "var(--studio-text)" }}>{"brand "}</span>
            <span className="word" style={{ color: "inherit" }}>{"and "}</span>
            <span className="word" style={{ color: "inherit" }}>{"builds "}</span>
            <span className="word" style={{ color: "inherit" }}>{"the "}</span>
            <span className="word" style={{ color: "var(--systems-text)" }}>{"systems "}</span>
            <span className="word" style={{ color: "inherit" }}>{"behind "}</span>
            <span className="word" style={{ color: "inherit" }}>{"it, "}</span>
            <span className="word" style={{ color: "inherit" }}>{"so "}</span>
            <span className="word" style={{ color: "inherit" }}>{"nothing "}</span>
            <span className="word" style={{ color: "inherit" }}>{"gets "}</span>
            <span className="word" style={{ color: "inherit" }}>{"lost "}</span>
            <span className="word" style={{ color: "inherit" }}>{"in "}</span>
            <span className="word" style={{ color: "inherit" }}>{"the "}</span>
            <span className="word" style={{ color: "inherit" }}>{"handover. "}</span>
          </p>
        </div>
      </section>
      <section id="in-action" className="s03" style={{ padding: "0 clamp(8px, 2vw, 32px)" }}>
        <div className="reveal-media oc-night" style={{ position: "relative", maxWidth: "1376px", margin: "0 auto", height: "clamp(520px, 52vw, 760px)", borderRadius: "32px", overflow: "hidden", background: "var(--night)", color: "var(--on-night)" }}>
          <Image src="/images/studio-dusk.jpg" alt="Two strategists reviewing a workflow dashboard at a studio table at dusk, design boards in petrol and terracotta spread out beside them" fill sizes="(max-width: 1440px) 100vw, 1376px" style={{ objectFit: "cover" }} />
          <span aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg, rgba(13, 13, 13, 0.82) 0%, rgba(13, 13, 13, 0.35) 45%, rgba(13, 13, 13, 0) 70%)" }} />
          <span className="ph-notch" style={{ width: "12%", background: "var(--canvas)" }} />
          <span className="ph-dot" style={{ width: "3%", top: "4%", right: "4.6%" }} />
          <div className="rm-content" style={{ position: "absolute", left: "clamp(24px, 5vw, 72px)", bottom: "clamp(24px, 5vw, 72px)", right: "clamp(24px, 5vw, 72px)", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "32px" }}>
            <div className="float-in" style={{ maxWidth: "460px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <p className="eyebrow-n" style={{ margin: "0" }}>03 — SYSTEMS IN ACTION</p>
              <h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "500", fontSize: "clamp(32px, 3.6vw, 52px)", lineHeight: "1.05", letterSpacing: "-0.02em" }}>
                Your next lead, handled before morning.
              </h2>
            </div>
            <div className="float-in" style={{ width: "300px", maxWidth: "100%", boxSizing: "border-box", padding: "14px", borderRadius: "var(--radius-lg)", background: "rgba(13, 13, 13, 0.78)", backdropFilter: "blur(12px)", boxShadow: "0 0 0 1px rgba(244, 241, 234, 0.14)", display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--on-night-muted)" }}>new-lead.flow</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--gold)" }}>
                  <span className="live" style={{ width: "7px", height: "7px", borderRadius: "999px", background: "var(--gold)" }} />
                  running
                </span>
              </div>
              <div className="flow-step flow-01" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 10px", borderRadius: "var(--radius-md)", background: "rgba(244, 241, 234, 0.04)", boxShadow: "inset 0 0 0 1px rgba(244, 241, 234, 0.10)" }}>
                <span style={{ display: "inline-flex", width: "30px", height: "30px", flex: "none", alignItems: "center", justifyContent: "center", borderRadius: "8px", background: "rgba(212, 175, 55, 0.16)", color: "var(--gold)" }}>
                  <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M6 4h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7l-5 4v-4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" />
                    <path d="M8 10.5h8" />
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", lineHeight: "16px", color: "var(--gold)" }}>
                    01 · trigger
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "20px" }}>Enquiry arrives from Instagram</span>
                </span>
              </div>
              <div className="flow-step flow-02" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 10px", borderRadius: "var(--radius-md)", background: "rgba(244, 241, 234, 0.04)", boxShadow: "inset 0 0 0 1px rgba(244, 241, 234, 0.10)" }}>
                <span style={{ display: "inline-flex", width: "30px", height: "30px", flex: "none", alignItems: "center", justifyContent: "center", borderRadius: "8px", background: "rgba(212, 175, 55, 0.16)", color: "var(--gold)" }}>
                  <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <rect x="5" y="5" width="14" height="14" rx="3" />
                    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", lineHeight: "16px", color: "var(--gold)" }}>
                    02 · ai
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "20px" }}>Assistant replies and qualifies</span>
                </span>
              </div>
              <div className="flow-step flow-03" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 10px", borderRadius: "var(--radius-md)", background: "rgba(244, 241, 234, 0.04)", boxShadow: "inset 0 0 0 1px rgba(244, 241, 234, 0.10)" }}>
                <span style={{ display: "inline-flex", width: "30px", height: "30px", flex: "none", alignItems: "center", justifyContent: "center", borderRadius: "8px", background: "rgba(212, 175, 55, 0.16)", color: "var(--gold)" }}>
                  <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <rect x="3" y="3" width="7" height="7" rx="2" />
                    <rect x="14" y="14" width="7" height="7" rx="2" />
                    <path d="M10 6.5h4.5a3 3 0 0 1 3 3V14" />
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", lineHeight: "16px", color: "var(--gold)" }}>
                    03 · crm
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "20px" }}>Lead scored, added to pipeline</span>
                </span>
              </div>
              <div className="flow-step flow-04" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 10px", borderRadius: "var(--radius-md)", background: "rgba(244, 241, 234, 0.04)", boxShadow: "inset 0 0 0 1px rgba(244, 241, 234, 0.10)" }}>
                <span style={{ display: "inline-flex", width: "30px", height: "30px", flex: "none", alignItems: "center", justifyContent: "center", borderRadius: "8px", background: "rgba(212, 175, 55, 0.16)", color: "var(--gold)" }}>
                  <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <rect x="3" y="5" width="18" height="16" rx="3" />
                    <path d="M3 10h18M8 3v4M16 3v4" />
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", lineHeight: "16px", color: "var(--gold)" }}>
                    04 · follow-up
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "20px" }}>Call booked, team notified</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="s04 wrap" style={{ paddingTop: "clamp(120px, 13vw, 184px)" }}>
        <div className="sv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px 48px", marginBottom: "64px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "620px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>04 — WHAT WE DO</p>
            <h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "500", fontSize: "clamp(38px, 4.6vw, 64px)", lineHeight: "1.02", letterSpacing: "-0.025em" }}>
              Two studios.
              <br />
              One team.
            </h2>
          </div>
          <p style={{ margin: "0", maxWidth: "26em", fontSize: "18px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
            Systems keeps your marketing running. Studio makes it worth looking at. Most clients start with one and stay for both.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: "24px" }}>
          <div className="oc-night oc-systems sv" style={{ position: "relative", overflow: "hidden", background: "var(--systems)", color: "var(--on-night)", borderRadius: "var(--radius-xl)", padding: "clamp(28px, 4vw, 48px)" }}>
            <svg className="wm-mark" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-60px", bottom: "-60px", width: "300px", height: "300px", color: "rgba(244, 241, 234, 0.05)" }}>
              <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
            </svg>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
              <p className="oc-eyebrow"><span className="oc-dot" aria-hidden="true" /><span>Systems</span></p>
              <p style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "26px", lineHeight: "1.25", fontWeight: "400" }}>
                Marketing that keeps running without you.
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <Link href="/services/ai-automation" className="svc-row">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold)" }}>01</span>
                <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.2", fontWeight: "500" }}>
                    AI automation
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "1.5", color: "var(--on-systems-muted)" }}>
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
              <Link href="/services/marketing-automation" className="svc-row">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold)" }}>02</span>
                <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.2", fontWeight: "500" }}>
                    Marketing automation
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "1.5", color: "var(--on-systems-muted)" }}>
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
              <Link href="/services/seo" className="svc-row">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold)" }}>03</span>
                <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.2", fontWeight: "500" }}>SEO</span>
                  <span style={{ fontSize: "14px", lineHeight: "1.5", color: "var(--on-systems-muted)" }}>
                    Be found without paying for every click
                  </span>
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
          <div className="oc-studio sv2" style={{ position: "relative", overflow: "hidden", background: "var(--studio)", color: "var(--on-studio)", borderRadius: "var(--radius-xl)", padding: "clamp(28px, 4vw, 48px)" }}>
            <svg className="wm-mark" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-60px", bottom: "-60px", width: "300px", height: "300px", color: "rgba(255, 243, 236, 0.10)" }}>
              <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
            </svg>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
              <p className="oc-eyebrow"><span className="oc-dot" aria-hidden="true" /><span>Studio</span></p>
              <p style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "26px", lineHeight: "1.25", fontWeight: "400" }}>
                A brand that looks like one hand made it.
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <Link href="/services/social-media" className="svc-row">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--on-studio)" }}>04</span>
                <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.2", fontWeight: "500" }}>
                    Social media
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "1.5", color: "var(--on-studio)" }}>
                    Content and community that sound like you
                  </span>
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
                <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.2", fontWeight: "500" }}>
                    Graphic design
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "1.5", color: "var(--on-studio)" }}>Identity, campaigns and templates</span>
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
                <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.2", fontWeight: "500" }}>
                    Motion graphics
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "1.5", color: "var(--on-studio)" }}>Stings, explainers and reels</span>
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
                <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.2", fontWeight: "500" }}>
                    Web design
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "1.5", color: "var(--on-studio)" }}>Fast sites wired to your CRM</span>
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
      <div className="ticker-wrap" aria-hidden="true" style={{ overflow: "hidden", paddingTop: "clamp(100px, 11vw, 160px)" }}>
        <div className="ticker">
          <span style={{ display: "inline-flex", alignItems: "center", gap: "48px", paddingRight: "48px", whiteSpace: "nowrap", fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 88px)", lineHeight: "1.1", fontWeight: "300", letterSpacing: "-0.02em", color: "transparent", WebkitTextStroke: "1.2px var(--studio)" }}>
            Creative craft
            <span style={{ width: "14px", height: "14px", borderRadius: "999px", background: "var(--gold)" }} />
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "48px", paddingRight: "48px", whiteSpace: "nowrap", fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 88px)", lineHeight: "1.1", fontWeight: "300", letterSpacing: "-0.02em", color: "transparent", WebkitTextStroke: "1.2px var(--systems)" }}>
            Intelligent growth
            <span style={{ width: "14px", height: "14px", borderRadius: "999px", background: "var(--gold)" }} />
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "48px", paddingRight: "48px", whiteSpace: "nowrap", fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 88px)", lineHeight: "1.1", fontWeight: "300", letterSpacing: "-0.02em", color: "transparent", WebkitTextStroke: "1.2px var(--studio)" }}>
            Creative craft
            <span style={{ width: "14px", height: "14px", borderRadius: "999px", background: "var(--gold)" }} />
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "48px", paddingRight: "48px", whiteSpace: "nowrap", fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 88px)", lineHeight: "1.1", fontWeight: "300", letterSpacing: "-0.02em", color: "transparent", WebkitTextStroke: "1.2px var(--systems)" }}>
            Intelligent growth
            <span style={{ width: "14px", height: "14px", borderRadius: "999px", background: "var(--gold)" }} />
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "48px", paddingRight: "48px", whiteSpace: "nowrap", fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 88px)", lineHeight: "1.1", fontWeight: "300", letterSpacing: "-0.02em", color: "transparent", WebkitTextStroke: "1.2px var(--studio)" }}>
            Creative craft
            <span style={{ width: "14px", height: "14px", borderRadius: "999px", background: "var(--gold)" }} />
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "48px", paddingRight: "48px", whiteSpace: "nowrap", fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 88px)", lineHeight: "1.1", fontWeight: "300", letterSpacing: "-0.02em", color: "transparent", WebkitTextStroke: "1.2px var(--systems)" }}>
            Intelligent growth
            <span style={{ width: "14px", height: "14px", borderRadius: "999px", background: "var(--gold)" }} />
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "48px", paddingRight: "48px", whiteSpace: "nowrap", fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 88px)", lineHeight: "1.1", fontWeight: "300", letterSpacing: "-0.02em", color: "transparent", WebkitTextStroke: "1.2px var(--studio)" }}>
            Creative craft
            <span style={{ width: "14px", height: "14px", borderRadius: "999px", background: "var(--gold)" }} />
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "48px", paddingRight: "48px", whiteSpace: "nowrap", fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 88px)", lineHeight: "1.1", fontWeight: "300", letterSpacing: "-0.02em", color: "transparent", WebkitTextStroke: "1.2px var(--systems)" }}>
            Intelligent growth
            <span style={{ width: "14px", height: "14px", borderRadius: "999px", background: "var(--gold)" }} />
          </span>
        </div>
      </div>
      <section id="always-on" className="s05 oc-systems-tint" style={{ marginTop: "clamp(100px, 11vw, 160px)", background: "var(--systems-tint)", padding: "clamp(96px, 10vw, 144px) 0" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))", gap: "clamp(40px, 6vw, 96px)", alignItems: "center" }}>
            <div className="sv">
              <div className="ph" style={{ aspectRatio: "4 / 5" }}>
                <Image src="/images/night-office.jpg" alt="An empty office at night, rain on the window, a laptop and phone lighting up with new messages on the desk" fill sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 600px" style={{ objectFit: "cover" }} />
                <span className="ph-notch" style={{ background: "var(--systems-tint)" }} />
                <span className="ph-dot" />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <p className="eyebrow-n" style={{ margin: "0" }}>05 — ALWAYS ON</p>
                <h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "500", fontSize: "clamp(36px, 4vw, 56px)", lineHeight: "1.04", letterSpacing: "-0.025em" }}>
                  Marketing that runs while you sleep.
                </h2>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                  Leads arrive at 11pm and on Sundays. Our automations answer, qualify and book them, then hand over to a person when it matters.
                </p>
              </div>
              <ol style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column" }}>
                <li className="step-on" style={{ display: "grid", gridTemplateColumns: "64px minmax(0, 1fr)", gap: "12px", padding: "20px 0", borderTop: "1px solid rgba(18, 66, 74, 0.18)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "28px", color: "var(--systems-text)" }}>
                    01
                  </span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "22px", lineHeight: "1.3" }}>
                    Every enquiry gets a reply, day or night.
                  </span>
                </li>
                <li className="step-on" style={{ display: "grid", gridTemplateColumns: "64px minmax(0, 1fr)", gap: "12px", padding: "20px 0", borderTop: "1px solid rgba(18, 66, 74, 0.18)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "28px", color: "var(--systems-text)" }}>
                    02
                  </span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "22px", lineHeight: "1.3" }}>
                    The right questions, asked before anyone calls.
                  </span>
                </li>
                <li className="step-on" style={{ display: "grid", gridTemplateColumns: "64px minmax(0, 1fr)", gap: "12px", padding: "20px 0", borderTop: "1px solid rgba(18, 66, 74, 0.18)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "28px", color: "var(--systems-text)" }}>
                    03
                  </span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "22px", lineHeight: "1.3" }}>
                    A person steps in for anything that matters.
                  </span>
                </li>
                <li className="step-on" style={{ display: "grid", gridTemplateColumns: "64px minmax(0, 1fr)", gap: "12px", padding: "20px 0", borderTop: "1px solid rgba(18, 66, 74, 0.18)" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "28px", color: "var(--systems-text)" }}>
                    04
                  </span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "22px", lineHeight: "1.3" }}>
                    One clear report a month, in plain language.
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section aria-label="Integrations" style={{ paddingTop: "clamp(96px, 10vw, 144px)" }}>
        <div className="wrap sv" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px 48px", marginBottom: "36px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "640px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>WORKS WITH YOUR STACK</p>
            <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "500", fontSize: "clamp(28px, 2.8vw, 40px)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              We build on the tools you already pay for.
            </h3>
          </div>
          <p style={{ margin: "0", maxWidth: "26em", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
            CRM, ads, messaging, AI and design, connected into one system instead of six tabs.
          </p>
        </div>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 150px), 1fr))", gap: "12px" }}>
          <div className="tool-tile sv">
            <svg className="tool-logo" viewBox="0 0 24 24" aria-hidden="true">
              <path className="tl-mono" d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z" />
              <path className="tl-brand" d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z" fill="#FF7A59" />
            </svg>
            <span className="tool-name">HubSpot</span>
            <span className="tool-cat">CRM</span>
          </div>
          <div className="tool-tile sv">
            <svg className="tool-logo" viewBox="0 0 24 24" aria-hidden="true">
              <path className="tl-mono" d="M8.66 6.897a1.299 1.299 0 0 0-1.205.765l-.642 1.44-.062-.385A1.291 1.291 0 0 0 5.27 7.648l-4.185.678A1.291 1.291 0 0 0 .016 9.807l.678 4.18a1.293 1.293 0 0 0 1.27 1.087c.074 0 .143-.01.216-.017l4.18-.678c.436-.07.784-.351.96-.723l2.933 1.307a1.304 1.304 0 0 0 .988.026c.321-.12.575-.365.716-.678l.28-.629.038.276a1.297 1.297 0 0 0 1.455 1.103l3.712-.501a1.29 1.29 0 0 0 1.03.514h4.236c.713 0 1.29-.58 1.291-1.291V9.545c0-.712-.58-1.291-1.291-1.291h-4.236c-.079 0-.155.008-.23.022a1.309 1.309 0 0 0-.275-.288c-.275-.21-.614-.3-.958-.253l-4.197.571c-.155.021-.3.07-.432.14L9.159 7.01a1.27 1.27 0 0 0-.499-.113zm-.025.705c.077 0 .159.013.24.052l2.971 1.324c-.128.238-.18.508-.142.782l.357 2.596h.002l-.745 1.672a.59.59 0 0 1-.777.296l-3.107-1.385-.004-.041-.41-2.526L8.1 7.95a.589.589 0 0 1 .536-.348zm-3.159.733c.125 0 .245.039.343.112.13.09.21.227.237.382l.234 1.446-.56 1.259a1.27 1.27 0 0 0-.026.987c.12.322.364.575.678.717l.295.131a.585.585 0 0 1-.428.314l-4.185.678a.59.59 0 0 1-.674-.485l-.678-4.18a.588.588 0 0 1 .485-.674l4.185-.678c.03-.004.064-.01.094-.01zm11.705.09a.59.59 0 0 1 .415.173 1.287 1.287 0 0 0-.416.947v4.237c0 .033.003.065.005.097l-3.55.482a.586.586 0 0 1-.66-.502l-.191-1.403.899-2.017a1.29 1.29 0 0 0-.333-1.5l3.754-.51c.026-.004.051-.004.077-.004zm1.3.532h4.227c.326 0 .588.266.588.588v4.237a.589.589 0 0 1-.588.588h-4.237a.564.564 0 0 1-.12-.013c.47-.246.758-.765.684-1.318zm-5.988.309.254.113c.296.133.43.48.296.777l-.432.97-.207-1.465a.58.58 0 0 1 .09-.395zm5.39.538.453 3.325a.583.583 0 0 1-.453.65zM6.496 11.545l.17 1.052a.588.588 0 0 1-.293-.776zm3.985 4.344a.588.588 0 0 0-.612.603c0 .358.244.61.601.61a.582.582 0 0 0 .607-.608c0-.35-.242-.605-.596-.605zm5.545 0a.588.588 0 0 0-.612.603c0 .358.245.61.602.61a.582.582 0 0 0 .606-.608c0-.35-.24-.605-.596-.605zm-8.537.018a.047.047 0 0 0-.048.047v.085c0 .026.021.047.048.047h.52l-.623.9a.052.052 0 0 0-.009.027v.027c0 .026.021.047.048.047h.815a.047.047 0 0 0 .047-.047v-.085a.047.047 0 0 0-.047-.047h-.55l.606-.9a.05.05 0 0 0 .008-.026v-.028a.047.047 0 0 0-.047-.047zm5.303 0a.047.047 0 0 0-.047.047v1.086c0 .026.02.047.047.047h.135a.047.047 0 0 0 .047-.047v-.454h.545v.454c0 .026.02.047.047.047h.134a.047.047 0 0 0 .047-.047v-1.086a.047.047 0 0 0-.047-.047h-.134a.047.047 0 0 0-.047.047v.453h-.545v-.453a.047.047 0 0 0-.047-.047zm-2.324.164c.25 0 .372.194.372.425 0 .219-.109.425-.358.426-.242 0-.375-.197-.375-.419 0-.235.108-.432.36-.432zm5.545 0c.25 0 .372.194.372.425 0 .219-.108.425-.358.426-.242 0-.374-.197-.374-.419 0-.235.108-.432.36-.432z" />
              <path className="tl-brand" d="M8.66 6.897a1.299 1.299 0 0 0-1.205.765l-.642 1.44-.062-.385A1.291 1.291 0 0 0 5.27 7.648l-4.185.678A1.291 1.291 0 0 0 .016 9.807l.678 4.18a1.293 1.293 0 0 0 1.27 1.087c.074 0 .143-.01.216-.017l4.18-.678c.436-.07.784-.351.96-.723l2.933 1.307a1.304 1.304 0 0 0 .988.026c.321-.12.575-.365.716-.678l.28-.629.038.276a1.297 1.297 0 0 0 1.455 1.103l3.712-.501a1.29 1.29 0 0 0 1.03.514h4.236c.713 0 1.29-.58 1.291-1.291V9.545c0-.712-.58-1.291-1.291-1.291h-4.236c-.079 0-.155.008-.23.022a1.309 1.309 0 0 0-.275-.288c-.275-.21-.614-.3-.958-.253l-4.197.571c-.155.021-.3.07-.432.14L9.159 7.01a1.27 1.27 0 0 0-.499-.113zm-.025.705c.077 0 .159.013.24.052l2.971 1.324c-.128.238-.18.508-.142.782l.357 2.596h.002l-.745 1.672a.59.59 0 0 1-.777.296l-3.107-1.385-.004-.041-.41-2.526L8.1 7.95a.589.589 0 0 1 .536-.348zm-3.159.733c.125 0 .245.039.343.112.13.09.21.227.237.382l.234 1.446-.56 1.259a1.27 1.27 0 0 0-.026.987c.12.322.364.575.678.717l.295.131a.585.585 0 0 1-.428.314l-4.185.678a.59.59 0 0 1-.674-.485l-.678-4.18a.588.588 0 0 1 .485-.674l4.185-.678c.03-.004.064-.01.094-.01zm11.705.09a.59.59 0 0 1 .415.173 1.287 1.287 0 0 0-.416.947v4.237c0 .033.003.065.005.097l-3.55.482a.586.586 0 0 1-.66-.502l-.191-1.403.899-2.017a1.29 1.29 0 0 0-.333-1.5l3.754-.51c.026-.004.051-.004.077-.004zm1.3.532h4.227c.326 0 .588.266.588.588v4.237a.589.589 0 0 1-.588.588h-4.237a.564.564 0 0 1-.12-.013c.47-.246.758-.765.684-1.318zm-5.988.309.254.113c.296.133.43.48.296.777l-.432.97-.207-1.465a.58.58 0 0 1 .09-.395zm5.39.538.453 3.325a.583.583 0 0 1-.453.65zM6.496 11.545l.17 1.052a.588.588 0 0 1-.293-.776zm3.985 4.344a.588.588 0 0 0-.612.603c0 .358.244.61.601.61a.582.582 0 0 0 .607-.608c0-.35-.242-.605-.596-.605zm5.545 0a.588.588 0 0 0-.612.603c0 .358.245.61.602.61a.582.582 0 0 0 .606-.608c0-.35-.24-.605-.596-.605zm-8.537.018a.047.047 0 0 0-.048.047v.085c0 .026.021.047.048.047h.52l-.623.9a.052.052 0 0 0-.009.027v.027c0 .026.021.047.048.047h.815a.047.047 0 0 0 .047-.047v-.085a.047.047 0 0 0-.047-.047h-.55l.606-.9a.05.05 0 0 0 .008-.026v-.028a.047.047 0 0 0-.047-.047zm5.303 0a.047.047 0 0 0-.047.047v1.086c0 .026.02.047.047.047h.135a.047.047 0 0 0 .047-.047v-.454h.545v.454c0 .026.02.047.047.047h.134a.047.047 0 0 0 .047-.047v-1.086a.047.047 0 0 0-.047-.047h-.134a.047.047 0 0 0-.047.047v.453h-.545v-.453a.047.047 0 0 0-.047-.047zm-2.324.164c.25 0 .372.194.372.425 0 .219-.109.425-.358.426-.242 0-.375-.197-.375-.419 0-.235.108-.432.36-.432zm5.545 0c.25 0 .372.194.372.425 0 .219-.108.425-.358.426-.242 0-.374-.197-.374-.419 0-.235.108-.432.36-.432z" fill="#E42527" />
            </svg>
            <span className="tool-name">Zoho CRM</span>
            <span className="tool-cat">CRM</span>
          </div>
          <div className="tool-tile sv">
            <svg className="tool-logo" viewBox="0 0 24 24" aria-hidden="true">
              <path className="tl-mono" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              <path className="tl-brand" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="#25D366" />
            </svg>
            <span className="tool-name">WhatsApp Business</span>
            <span className="tool-cat">MESSAGING</span>
          </div>
          <div className="tool-tile sv">
            <svg className="tool-logo" viewBox="0 0 24 24" aria-hidden="true">
              <path className="tl-mono" d="M11.267 0C6.791-.015-1.82 10.246 1.397 12.964l.79.669a3.88 3.88 0 0 0-.22 1.792c.084.84.518 1.644 1.22 2.266.666.59 1.542.964 2.392.964 1.406 3.24 4.62 5.228 8.386 5.34 4.04.12 7.433-1.776 8.854-5.182.093-.24.488-1.316.488-2.267 0-.956-.54-1.352-.885-1.352-.01-.037-.078-.286-.172-.586-.093-.3-.19-.51-.19-.51.375-.563.382-1.065.332-1.35-.053-.353-.2-.653-.496-.964-.296-.311-.902-.63-1.753-.868l-.446-.124c-.002-.019-.024-1.053-.043-1.497-.014-.32-.042-.822-.197-1.315-.186-.668-.508-1.253-.911-1.627 1.112-1.152 1.806-2.422 1.804-3.511-.003-2.095-2.576-2.729-5.746-1.416l-.672.285A678.22 678.22 0 0 0 12.7.504C12.304.159 11.817.002 11.267 0zm.073.873c.166 0 .322.019.465.058.297.084 1.28 1.224 1.28 1.224s-1.826 1.013-3.52 2.426c-2.28 1.757-4.005 4.311-5.037 7.082-.811.158-1.526.618-1.963 1.253-.261-.218-.748-.64-.834-.804-.698-1.326.761-3.902 1.781-5.357C5.834 3.44 9.37.867 11.34.873zm3.286 3.273c.04-.002.06.05.028.074-.143.11-.299.26-.413.414a.04.04 0 0 0 .031.064c.659.004 1.587.235 2.192.574.041.023.012.103-.034.092-.915-.21-2.414-.369-3.97.01-1.39.34-2.45.863-3.224 1.426-.04.028-.086-.023-.055-.06.896-1.035 1.999-1.935 2.987-2.44.034-.018.07.019.052.052-.079.143-.23.447-.278.678-.007.035.032.063.062.042.615-.42 1.684-.868 2.622-.926zm3.023 3.205l.056.001a.896.896 0 0 1 .456.146c.534.355.61 1.216.638 1.845.015.36.059 1.229.074 1.478.034.571.184.651.487.751.17.057.33.098.563.164.706.198 1.125.4 1.39.658.157.162.23.333.253.497.083.608-.472 1.36-1.942 2.041-1.607.746-3.557.935-4.904.785l-.471-.053c-1.078-.145-1.693 1.247-1.046 2.201.417.615 1.552 1.015 2.688 1.015 2.604 0 4.605-1.111 5.35-2.072a.987.987 0 0 0 .06-.085c.036-.055.006-.085-.04-.054-.608.416-3.31 2.069-6.2 1.571 0 0-.351-.057-.672-.182-.255-.1-.788-.344-.853-.891 2.333.72 3.801.039 3.801.039a.072.072 0 0 0 .042-.072.067.067 0 0 0-.074-.06s-1.911.283-3.718-.378c.197-.64.72-.408 1.51-.345a11.045 11.045 0 0 0 3.647-.394c.818-.234 1.892-.697 2.727-1.356.281.618.38 1.299.38 1.299s.219-.04.4.073c.173.106.299.326.213.895-.176 1.063-.628 1.926-1.387 2.72a5.714 5.714 0 0 1-1.666 1.244c-.34.18-.704.334-1.087.46-2.863.935-5.794-.093-6.739-2.3a3.545 3.545 0 0 1-.189-.522c-.403-1.455-.06-3.2 1.008-4.299.065-.07.132-.153.132-.256 0-.087-.055-.179-.102-.243-.374-.543-1.669-1.466-1.409-3.254.187-1.284 1.31-2.189 2.357-2.135.089.004.177.01.266.015.453.027.85.085 1.223.1.625.028 1.187-.063 1.853-.618.225-.187.405-.35.71-.401.028-.005.092-.028.215-.028zm.022 2.18a.42.42 0 0 0-.06.005c-.335.054-.347.468-.228 1.04.068.32.187.595.32.765.175-.02.343-.022.498 0 .089-.205.104-.557.024-.942-.112-.535-.261-.872-.554-.868zm-3.66 1.546a1.724 1.724 0 0 0-1.016.326c-.16.117-.311.28-.29.378.008.032.031.056.088.063.131.015.592-.217 1.122-.25.374-.023.684.094.923.2.239.104.386.173.443.113.037-.038.026-.11-.031-.204-.118-.192-.36-.387-.618-.497a1.601 1.601 0 0 0-.621-.129zm4.082.81c-.171-.003-.313.186-.317.42-.004.236.131.43.303.432.172.003.314-.185.318-.42.004-.236-.132-.429-.304-.432zm-3.58.172c-.05 0-.102.002-.155.008-.311.05-.483.152-.593.247-.094.082-.152.173-.152.237a.075.075 0 0 0 .075.076c.07 0 .228-.063.228-.063a1.98 1.98 0 0 1 1.001-.104c.157.018.23.027.265-.026.01-.016.022-.049-.01-.1-.063-.103-.311-.269-.66-.275zm2.26.4c-.127 0-.235.051-.283.148-.075.154.035.363.246.466.21.104.443.063.52-.09.075-.155-.035-.364-.246-.467a.542.542 0 0 0-.237-.058zm-11.635.024c.048 0 .098 0 .149.003.73.04 1.806.6 2.052 2.19.217 1.41-.128 2.843-1.449 3.069-.123.02-.248.029-.374.026-1.22-.033-2.539-1.132-2.67-2.435-.145-1.44.591-2.548 1.894-2.811.117-.024.252-.04.398-.042zm-.07.927a1.144 1.144 0 0 0-.847.364c-.38.418-.439.988-.366 1.19.027.073.07.094.1.098.064.008.16-.039.22-.2a1.2 1.2 0 0 0 .017-.052 1.58 1.58 0 0 1 .157-.37.689.689 0 0 1 .955-.199c.266.174.369.5.255.81-.058.161-.154.469-.133.721.043.511.357.717.64.738.274.01.466-.143.515-.256.029-.067.005-.107-.011-.125-.043-.053-.113-.037-.18-.021a.638.638 0 0 1-.16.022.347.347 0 0 1-.294-.148c-.078-.12-.073-.3.013-.504.011-.028.025-.058.04-.092.138-.308.368-.825.11-1.317-.195-.37-.513-.602-.894-.65a1.135 1.135 0 0 0-.138-.01z" />
              <path className="tl-brand" d="M11.267 0C6.791-.015-1.82 10.246 1.397 12.964l.79.669a3.88 3.88 0 0 0-.22 1.792c.084.84.518 1.644 1.22 2.266.666.59 1.542.964 2.392.964 1.406 3.24 4.62 5.228 8.386 5.34 4.04.12 7.433-1.776 8.854-5.182.093-.24.488-1.316.488-2.267 0-.956-.54-1.352-.885-1.352-.01-.037-.078-.286-.172-.586-.093-.3-.19-.51-.19-.51.375-.563.382-1.065.332-1.35-.053-.353-.2-.653-.496-.964-.296-.311-.902-.63-1.753-.868l-.446-.124c-.002-.019-.024-1.053-.043-1.497-.014-.32-.042-.822-.197-1.315-.186-.668-.508-1.253-.911-1.627 1.112-1.152 1.806-2.422 1.804-3.511-.003-2.095-2.576-2.729-5.746-1.416l-.672.285A678.22 678.22 0 0 0 12.7.504C12.304.159 11.817.002 11.267 0zm.073.873c.166 0 .322.019.465.058.297.084 1.28 1.224 1.28 1.224s-1.826 1.013-3.52 2.426c-2.28 1.757-4.005 4.311-5.037 7.082-.811.158-1.526.618-1.963 1.253-.261-.218-.748-.64-.834-.804-.698-1.326.761-3.902 1.781-5.357C5.834 3.44 9.37.867 11.34.873zm3.286 3.273c.04-.002.06.05.028.074-.143.11-.299.26-.413.414a.04.04 0 0 0 .031.064c.659.004 1.587.235 2.192.574.041.023.012.103-.034.092-.915-.21-2.414-.369-3.97.01-1.39.34-2.45.863-3.224 1.426-.04.028-.086-.023-.055-.06.896-1.035 1.999-1.935 2.987-2.44.034-.018.07.019.052.052-.079.143-.23.447-.278.678-.007.035.032.063.062.042.615-.42 1.684-.868 2.622-.926zm3.023 3.205l.056.001a.896.896 0 0 1 .456.146c.534.355.61 1.216.638 1.845.015.36.059 1.229.074 1.478.034.571.184.651.487.751.17.057.33.098.563.164.706.198 1.125.4 1.39.658.157.162.23.333.253.497.083.608-.472 1.36-1.942 2.041-1.607.746-3.557.935-4.904.785l-.471-.053c-1.078-.145-1.693 1.247-1.046 2.201.417.615 1.552 1.015 2.688 1.015 2.604 0 4.605-1.111 5.35-2.072a.987.987 0 0 0 .06-.085c.036-.055.006-.085-.04-.054-.608.416-3.31 2.069-6.2 1.571 0 0-.351-.057-.672-.182-.255-.1-.788-.344-.853-.891 2.333.72 3.801.039 3.801.039a.072.072 0 0 0 .042-.072.067.067 0 0 0-.074-.06s-1.911.283-3.718-.378c.197-.64.72-.408 1.51-.345a11.045 11.045 0 0 0 3.647-.394c.818-.234 1.892-.697 2.727-1.356.281.618.38 1.299.38 1.299s.219-.04.4.073c.173.106.299.326.213.895-.176 1.063-.628 1.926-1.387 2.72a5.714 5.714 0 0 1-1.666 1.244c-.34.18-.704.334-1.087.46-2.863.935-5.794-.093-6.739-2.3a3.545 3.545 0 0 1-.189-.522c-.403-1.455-.06-3.2 1.008-4.299.065-.07.132-.153.132-.256 0-.087-.055-.179-.102-.243-.374-.543-1.669-1.466-1.409-3.254.187-1.284 1.31-2.189 2.357-2.135.089.004.177.01.266.015.453.027.85.085 1.223.1.625.028 1.187-.063 1.853-.618.225-.187.405-.35.71-.401.028-.005.092-.028.215-.028zm.022 2.18a.42.42 0 0 0-.06.005c-.335.054-.347.468-.228 1.04.068.32.187.595.32.765.175-.02.343-.022.498 0 .089-.205.104-.557.024-.942-.112-.535-.261-.872-.554-.868zm-3.66 1.546a1.724 1.724 0 0 0-1.016.326c-.16.117-.311.28-.29.378.008.032.031.056.088.063.131.015.592-.217 1.122-.25.374-.023.684.094.923.2.239.104.386.173.443.113.037-.038.026-.11-.031-.204-.118-.192-.36-.387-.618-.497a1.601 1.601 0 0 0-.621-.129zm4.082.81c-.171-.003-.313.186-.317.42-.004.236.131.43.303.432.172.003.314-.185.318-.42.004-.236-.132-.429-.304-.432zm-3.58.172c-.05 0-.102.002-.155.008-.311.05-.483.152-.593.247-.094.082-.152.173-.152.237a.075.075 0 0 0 .075.076c.07 0 .228-.063.228-.063a1.98 1.98 0 0 1 1.001-.104c.157.018.23.027.265-.026.01-.016.022-.049-.01-.1-.063-.103-.311-.269-.66-.275zm2.26.4c-.127 0-.235.051-.283.148-.075.154.035.363.246.466.21.104.443.063.52-.09.075-.155-.035-.364-.246-.467a.542.542 0 0 0-.237-.058zm-11.635.024c.048 0 .098 0 .149.003.73.04 1.806.6 2.052 2.19.217 1.41-.128 2.843-1.449 3.069-.123.02-.248.029-.374.026-1.22-.033-2.539-1.132-2.67-2.435-.145-1.44.591-2.548 1.894-2.811.117-.024.252-.04.398-.042zm-.07.927a1.144 1.144 0 0 0-.847.364c-.38.418-.439.988-.366 1.19.027.073.07.094.1.098.064.008.16-.039.22-.2a1.2 1.2 0 0 0 .017-.052 1.58 1.58 0 0 1 .157-.37.689.689 0 0 1 .955-.199c.266.174.369.5.255.81-.058.161-.154.469-.133.721.043.511.357.717.64.738.274.01.466-.143.515-.256.029-.067.005-.107-.011-.125-.043-.053-.113-.037-.18-.021a.638.638 0 0 1-.16.022.347.347 0 0 1-.294-.148c-.078-.12-.073-.3.013-.504.011-.028.025-.058.04-.092.138-.308.368-.825.11-1.317-.195-.37-.513-.602-.894-.65a1.135 1.135 0 0 0-.138-.01z" fill="#241C15" />
            </svg>
            <span className="tool-name">Mailchimp</span>
            <span className="tool-cat">EMAIL</span>
          </div>
          <div className="tool-tile sv"><span className="tool-name">Klaviyo</span><span className="tool-cat">EMAIL</span></div>
          <div className="tool-tile sv">
            <svg className="tool-logo" viewBox="0 0 24 24" aria-hidden="true">
              <path className="tl-mono" d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
              <path className="tl-brand" d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" fill="#0467DF" />
            </svg>
            <span className="tool-name">Meta Ads</span>
            <span className="tool-cat">ADS</span>
          </div>
          <div className="tool-tile sv">
            <svg className="tool-logo" viewBox="0 0 24 24" aria-hidden="true">
              <path className="tl-mono" d="M3.9998 22.9291C1.7908 22.9291 0 21.1383 0 18.9293s1.7908-3.9998 3.9998-3.9998 3.9998 1.7908 3.9998 3.9998-1.7908 3.9998-3.9998 3.9998zm19.4643-6.0004L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644zM7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z" />
              <path className="tl-brand" d="M3.9998 22.9291C1.7908 22.9291 0 21.1383 0 18.9293s1.7908-3.9998 3.9998-3.9998 3.9998 1.7908 3.9998 3.9998-1.7908 3.9998-3.9998 3.9998zm19.4643-6.0004L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644zM7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z" fill="#4285F4" />
            </svg>
            <span className="tool-name">Google Ads</span>
            <span className="tool-cat">ADS</span>
          </div>
          <div className="tool-tile sv">
            <svg className="tool-logo" viewBox="0 0 24 24" aria-hidden="true">
              <path className="tl-mono" d="M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z" />
              <path className="tl-brand" d="M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.014.1201.0208.241.0202.3619zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-.0171 0-.0342 0-.0513.0003-1.6495.0904-2.9293 1.474-2.891 3.1256v7.9846c0 2.167.9535 3.4825 2.3505 3.763 1.6118.3266 3.1832-.7152 3.5098-2.327.04-.1974.06-.3983.0593-.5998v-8.9585c.003-1.6474-1.33-2.9852-2.9773-2.9882z" fill="#E37400" />
            </svg>
            <span className="tool-name">Google Analytics</span>
            <span className="tool-cat">ANALYTICS</span>
          </div>
          <div className="tool-tile sv">
            <svg className="tool-logo" viewBox="0 0 24 24" aria-hidden="true">
              <path className="tl-mono" d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z" />
              <path className="tl-brand" d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z" fill="#7AB55C" />
            </svg>
            <span className="tool-name">Shopify</span>
            <span className="tool-cat">COMMERCE</span>
          </div>
          <div className="tool-tile sv">
            <svg className="tool-logo" viewBox="0 0 24 24" aria-hidden="true">
              <path className="tl-mono" d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" />
              <path className="tl-brand" d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" fill="#21759B" />
            </svg>
            <span className="tool-name">WordPress</span>
            <span className="tool-cat">WEBSITES</span>
          </div>
          <div className="tool-tile sv"><span className="tool-name">OpenAI</span><span className="tool-cat">AI</span></div>
          <div className="tool-tile sv">
            <svg className="tool-logo" viewBox="0 0 24 24" aria-hidden="true">
              <path className="tl-mono" d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
              <path className="tl-brand" d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" fill="#D97757" />
            </svg>
            <span className="tool-name">Claude</span>
            <span className="tool-cat">AI</span>
          </div>
          <div className="tool-tile sv">
            <svg className="tool-logo" viewBox="0 0 24 24" aria-hidden="true">
              <path className="tl-mono" d="M4.157 0A4.151 4.151 0 0 0 0 4.161v15.678A4.151 4.151 0 0 0 4.157 24h15.682A4.152 4.152 0 0 0 24 19.839V4.161A4.152 4.152 0 0 0 19.839 0H4.157Zm10.61 8.761h.03a.577.577 0 0 1 .23.038.585.585 0 0 1 .201.124.63.63 0 0 1 .162.431.612.612 0 0 1-.162.435.58.58 0 0 1-.201.128.58.58 0 0 1-.23.042.529.529 0 0 1-.235-.042.585.585 0 0 1-.332-.328.559.559 0 0 1-.038-.235.613.613 0 0 1 .17-.431.59.59 0 0 1 .405-.162Zm2.853 1.572c.03.004.061.004.095.004.325-.011.646.064.937.219.238.144.431.355.552.609.128.279.189.582.185.888v.193a2 2 0 0 1 0 .219h-2.498c.003.227.075.45.204.642a.78.78 0 0 0 .646.265.714.714 0 0 0 .484-.136.642.642 0 0 0 .23-.318l.915.257a1.398 1.398 0 0 1-.28.537c-.14.159-.321.284-.521.355a2.234 2.234 0 0 1-.836.136 1.923 1.923 0 0 1-1.001-.245 1.618 1.618 0 0 1-.665-.703 2.221 2.221 0 0 1-.227-1.036 1.95 1.95 0 0 1 .48-1.398 1.9 1.9 0 0 1 1.3-.488Zm-9.607.023c.162.004.325.026.48.079.207.065.4.174.563.314.26.302.393.692.366 1.088v2.276H8.53l-.109-.711h-.065c-.064.163-.155.31-.272.439a1.122 1.122 0 0 1-.374.264 1.023 1.023 0 0 1-.453.083 1.334 1.334 0 0 1-.866-.264.965.965 0 0 1-.329-.801.993.993 0 0 1 .076-.431 1.02 1.02 0 0 1 .242-.363 1.478 1.478 0 0 1 1.043-.303h.952v-.181a.696.696 0 0 0-.136-.454.553.553 0 0 0-.438-.154.695.695 0 0 0-.378.086.48.48 0 0 0-.193.254l-.99-.144a1.26 1.26 0 0 1 .257-.563c.14-.174.321-.302.533-.378.261-.091.54-.136.82-.129.053-.003.106-.007.163-.007Zm4.384.007c.174 0 .347.038.506.114.182.083.34.211.458.374.257.423.377.911.351 1.406a2.53 2.53 0 0 1-.355 1.448 1.148 1.148 0 0 1-1.009.517c-.204 0-.401-.045-.582-.136a1.052 1.052 0 0 1-.48-.457 1.298 1.298 0 0 1-.114-.234h-.045l.004 1.784h-1.059v-4.713h.904l.117.805h.057c.068-.208.177-.401.328-.56a1.129 1.129 0 0 1 .843-.344h.076v-.004Zm7.559.084h.903l.113.805h.053a1.37 1.37 0 0 1 .235-.484.813.813 0 0 1 .313-.242.82.82 0 0 1 .39-.076h.234v1.051h-.401a.662.662 0 0 0-.313.008.623.623 0 0 0-.272.155.663.663 0 0 0-.174.26.683.683 0 0 0-.027.314v1.875h-1.054v-3.666Zm-17.515.003h3.262v.896L3.73 13.104l.034.113h1.973l.042.9H2.4v-.9l1.931-1.754-.045-.117H2.441v-.896Zm11.815 0h1.055v3.659h-1.055V10.45Zm3.443.684.019.016a.69.69 0 0 0-.351.045.756.756 0 0 0-.287.204c-.11.155-.174.336-.189.522h1.545c-.034-.526-.257-.787-.74-.787h.003Zm-5.718.163c-.026 0-.057 0-.083.004a.78.78 0 0 0-.31.053.746.746 0 0 0-.257.189 1.016 1.016 0 0 0-.204.695v.064c-.015.257.057.507.204.711a.634.634 0 0 0 .253.196.638.638 0 0 0 .314.061.644.644 0 0 0 .578-.265c.14-.223.204-.48.189-.74a1.216 1.216 0 0 0-.181-.711.677.677 0 0 0-.503-.257Zm-4.509 1.266a.464.464 0 0 0-.268.102.373.373 0 0 0-.114.276c0 .053.008.106.027.155a.375.375 0 0 0 .087.132.576.576 0 0 0 .397.11v.004a.863.863 0 0 0 .563-.182.573.573 0 0 0 .211-.457v-.14h-.903Z" />
              <path className="tl-brand" d="M4.157 0A4.151 4.151 0 0 0 0 4.161v15.678A4.151 4.151 0 0 0 4.157 24h15.682A4.152 4.152 0 0 0 24 19.839V4.161A4.152 4.152 0 0 0 19.839 0H4.157Zm10.61 8.761h.03a.577.577 0 0 1 .23.038.585.585 0 0 1 .201.124.63.63 0 0 1 .162.431.612.612 0 0 1-.162.435.58.58 0 0 1-.201.128.58.58 0 0 1-.23.042.529.529 0 0 1-.235-.042.585.585 0 0 1-.332-.328.559.559 0 0 1-.038-.235.613.613 0 0 1 .17-.431.59.59 0 0 1 .405-.162Zm2.853 1.572c.03.004.061.004.095.004.325-.011.646.064.937.219.238.144.431.355.552.609.128.279.189.582.185.888v.193a2 2 0 0 1 0 .219h-2.498c.003.227.075.45.204.642a.78.78 0 0 0 .646.265.714.714 0 0 0 .484-.136.642.642 0 0 0 .23-.318l.915.257a1.398 1.398 0 0 1-.28.537c-.14.159-.321.284-.521.355a2.234 2.234 0 0 1-.836.136 1.923 1.923 0 0 1-1.001-.245 1.618 1.618 0 0 1-.665-.703 2.221 2.221 0 0 1-.227-1.036 1.95 1.95 0 0 1 .48-1.398 1.9 1.9 0 0 1 1.3-.488Zm-9.607.023c.162.004.325.026.48.079.207.065.4.174.563.314.26.302.393.692.366 1.088v2.276H8.53l-.109-.711h-.065c-.064.163-.155.31-.272.439a1.122 1.122 0 0 1-.374.264 1.023 1.023 0 0 1-.453.083 1.334 1.334 0 0 1-.866-.264.965.965 0 0 1-.329-.801.993.993 0 0 1 .076-.431 1.02 1.02 0 0 1 .242-.363 1.478 1.478 0 0 1 1.043-.303h.952v-.181a.696.696 0 0 0-.136-.454.553.553 0 0 0-.438-.154.695.695 0 0 0-.378.086.48.48 0 0 0-.193.254l-.99-.144a1.26 1.26 0 0 1 .257-.563c.14-.174.321-.302.533-.378.261-.091.54-.136.82-.129.053-.003.106-.007.163-.007Zm4.384.007c.174 0 .347.038.506.114.182.083.34.211.458.374.257.423.377.911.351 1.406a2.53 2.53 0 0 1-.355 1.448 1.148 1.148 0 0 1-1.009.517c-.204 0-.401-.045-.582-.136a1.052 1.052 0 0 1-.48-.457 1.298 1.298 0 0 1-.114-.234h-.045l.004 1.784h-1.059v-4.713h.904l.117.805h.057c.068-.208.177-.401.328-.56a1.129 1.129 0 0 1 .843-.344h.076v-.004Zm7.559.084h.903l.113.805h.053a1.37 1.37 0 0 1 .235-.484.813.813 0 0 1 .313-.242.82.82 0 0 1 .39-.076h.234v1.051h-.401a.662.662 0 0 0-.313.008.623.623 0 0 0-.272.155.663.663 0 0 0-.174.26.683.683 0 0 0-.027.314v1.875h-1.054v-3.666Zm-17.515.003h3.262v.896L3.73 13.104l.034.113h1.973l.042.9H2.4v-.9l1.931-1.754-.045-.117H2.441v-.896Zm11.815 0h1.055v3.659h-1.055V10.45Zm3.443.684.019.016a.69.69 0 0 0-.351.045.756.756 0 0 0-.287.204c-.11.155-.174.336-.189.522h1.545c-.034-.526-.257-.787-.74-.787h.003Zm-5.718.163c-.026 0-.057 0-.083.004a.78.78 0 0 0-.31.053.746.746 0 0 0-.257.189 1.016 1.016 0 0 0-.204.695v.064c-.015.257.057.507.204.711a.634.634 0 0 0 .253.196.638.638 0 0 0 .314.061.644.644 0 0 0 .578-.265c.14-.223.204-.48.189-.74a1.216 1.216 0 0 0-.181-.711.677.677 0 0 0-.503-.257Zm-4.509 1.266a.464.464 0 0 0-.268.102.373.373 0 0 0-.114.276c0 .053.008.106.027.155a.375.375 0 0 0 .087.132.576.576 0 0 0 .397.11v.004a.863.863 0 0 0 .563-.182.573.573 0 0 0 .211-.457v-.14h-.903Z" fill="#FF4F00" />
            </svg>
            <span className="tool-name">Zapier</span>
            <span className="tool-cat">AUTOMATION</span>
          </div>
          <div className="tool-tile sv">
            <svg className="tool-logo" viewBox="0 0 24 24" aria-hidden="true">
              <path className="tl-mono" d="M13.38 3.498c-.27 0-.511.19-.566.465L9.85 18.986a.578.578 0 0 0 .453.678l4.095.826a.58.58 0 0 0 .682-.455l2.963-15.021a.578.578 0 0 0-.453-.678l-4.096-.826a.589.589 0 0 0-.113-.012zm-5.876.098a.576.576 0 0 0-.516.318L.062 17.697a.575.575 0 0 0 .256.774l3.733 1.877a.578.578 0 0 0 .775-.258l6.926-13.781a.577.577 0 0 0-.256-.776L7.762 3.658a.571.571 0 0 0-.258-.062zm11.74.115a.576.576 0 0 0-.576.576v15.426c0 .318.258.578.576.578h4.178a.58.58 0 0 0 .578-.578V4.287a.578.578 0 0 0-.578-.576Z" />
              <path className="tl-brand" d="M13.38 3.498c-.27 0-.511.19-.566.465L9.85 18.986a.578.578 0 0 0 .453.678l4.095.826a.58.58 0 0 0 .682-.455l2.963-15.021a.578.578 0 0 0-.453-.678l-4.096-.826a.589.589 0 0 0-.113-.012zm-5.876.098a.576.576 0 0 0-.516.318L.062 17.697a.575.575 0 0 0 .256.774l3.733 1.877a.578.578 0 0 0 .775-.258l6.926-13.781a.577.577 0 0 0-.256-.776L7.762 3.658a.571.571 0 0 0-.258-.062zm11.74.115a.576.576 0 0 0-.576.576v15.426c0 .318.258.578.576.578h4.178a.58.58 0 0 0 .578-.578V4.287a.578.578 0 0 0-.578-.576Z" fill="#6D00CC" />
            </svg>
            <span className="tool-name">Make</span>
            <span className="tool-cat">AUTOMATION</span>
          </div>
          <div className="tool-tile sv"><span className="tool-name">Canva</span><span className="tool-cat">DESIGN</span></div>
          <div className="tool-tile sv">
            <svg className="tool-logo" viewBox="0 0 24 24" aria-hidden="true">
              <path className="tl-mono" d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
              <path className="tl-brand" d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" fill="#F24E1E" />
            </svg>
            <span className="tool-name">Figma</span>
            <span className="tool-cat">DESIGN</span>
          </div>
        </div>
      </section>
      <section id="process" className="s06 wrap" style={{ paddingTop: "clamp(120px, 13vw, 184px)" }}>
        <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "720px", marginBottom: "64px" }}>
          <p className="eyebrow-n" style={{ margin: "0" }}>06 — HOW WE WORK</p>
          <h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "500", fontSize: "clamp(36px, 4vw, 56px)", lineHeight: "1.04", letterSpacing: "-0.025em" }}>
            From open canvas to a system that runs.
          </h2>
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
      <section id="work" className="s07 wrap" style={{ paddingTop: "clamp(120px, 13vw, 184px)" }}>
        <div className="sv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "56px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "640px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>07 — WHAT WE BUILD</p>
            <h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "500", fontSize: "clamp(36px, 4vw, 56px)", lineHeight: "1.04", letterSpacing: "-0.025em" }}>
              Work that keeps working.
            </h2>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
              Three example builds that show how Systems and Studio fit together.
            </p>
          </div>
          <Link href="/work" className="oc-btn oc-btn-outline oc-btn-md">
            <span>See all work</span>
            <svg className="oc-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "72px" }}>
          <Link href="/work/lead-assistant" className="case sv" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "24px 48px", alignItems: "end", textDecoration: "none", color: "var(--ink)" }}>
            <div className="ph" style={{ aspectRatio: "16 / 10" }}>
              <Image src="/images/lead-assistant.jpg" alt="Hands typing on a laptop beside a phone showing a customer chat, a petrol mug and a terracotta notebook with a gold pen" fill sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 600px" style={{ objectFit: "cover" }} />
              <span className="ph-notch" style={{ background: "var(--canvas)" }} />
              <span className="ph-dot" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingBottom: "8px" }}>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <span className="oc-tag oc-tag-systems">AI automation</span>
                <span className="oc-tag oc-tag-outline">Example build</span>
              </div>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "clamp(28px, 2.8vw, 40px)", lineHeight: "1.1", fontWeight: "500", letterSpacing: "-0.015em" }}>
                A lead assistant that never clocks off
              </h3>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Answers enquiries from Instagram, WhatsApp and your website, asks the right questions and books the call. A person takes over whenever it matters.
              </p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: "600", fontSize: "15px" }}>
                {"How it works "}
                <span style={{ color: "var(--systems-text)", display: "inline-flex" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </span>
              </span>
            </div>
          </Link>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "56px 32px" }}>
            <Link href="/services/marketing-automation" className="case sv" style={{ display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "var(--ink)" }}>
              <div className="ph" style={{ aspectRatio: "4 / 3", borderRadius: "var(--radius-lg)" }}>
                <Image src="/images/packing-studio.jpg" alt="An online store founder in a terracotta apron packing an order next to a tablet showing an order dashboard" fill sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 600px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <span className="oc-tag oc-tag-systems">Marketing automation</span>
                <span className="oc-tag oc-tag-outline">Example build</span>
              </div>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "26px", lineHeight: "1.2", fontWeight: "500" }}>
                Reorder and review flows for an online store
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Timed reminders bring customers back, and happy ones are asked for a review at the right moment.
              </p>
            </Link>
            <Link href="/services/motion-graphics" className="case sv2" style={{ display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "var(--ink)" }}>
              <div className="ph oc-night oc-studio" style={{ aspectRatio: "4 / 3", borderRadius: "var(--radius-lg)", background: "var(--studio)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg className="mk loop" viewBox="28 28 200 200" role="img" aria-label="Animated brand mark from a launch reel" style={{ width: "30%", height: "auto", overflow: "visible", color: "#f4f1ea" }}>
                  <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
                  <circle cx="160" cy="96" r="24" />
                </svg>
                <span style={{ position: "absolute", left: "16px", bottom: "14px", fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--on-studio)" }}>
                  brand sting · 0:05
                </span>
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <span className="oc-tag oc-tag-studio">Motion graphics</span>
                <span className="oc-tag oc-tag-outline">Example build</span>
              </div>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "26px", lineHeight: "1.2", fontWeight: "500" }}>
                A launch campaign in motion
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                A logo sting, three reels and animated ads, all cut from one idea and sized for every platform.
              </p>
            </Link>
          </div>
        </div>
      </section>
      <section aria-label="Results" style={{ padding: "clamp(96px, 10vw, 144px) clamp(8px, 2vw, 32px) 0" }}>
        <div className="oc-night oc-systems sv" style={{ position: "relative", overflow: "hidden", maxWidth: "1376px", margin: "0 auto", background: "var(--systems)", color: "var(--on-night)", borderRadius: "32px", padding: "clamp(40px, 6vw, 88px) clamp(24px, 6vw, 96px)", boxSizing: "border-box" }}>
          <svg className="wm-mark para wm-soft" viewBox="28 28 200 200" aria-hidden="true" style={{ left: "-120px", bottom: "-200px", width: "420px", height: "420px", color: "rgba(244, 241, 234, 0.05)" }}>
            <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
          </svg>
          <div style={{ position: "relative", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px 48px", marginBottom: "48px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>OUR PROMISES, IN NUMBERS</p>
          </div>
          <div className="stat-grid" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "40px 32px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div className="stat-line"><span /></div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(56px, 6vw, 88px)", lineHeight: "1", fontWeight: "400", letterSpacing: "-0.04em" }}>
                24
                <span style={{ color: "var(--gold)" }}>/7</span>
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.5", color: "var(--on-systems-muted)", maxWidth: "22em" }}>
                Every enquiry answered, day or night, once your automations are live.
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div className="stat-line"><span /></div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(56px, 6vw, 88px)", lineHeight: "1", fontWeight: "400", letterSpacing: "-0.04em" }}>
                30
                <span style={{ color: "var(--gold)" }}>{" min"}</span>
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.5", color: "var(--on-systems-muted)", maxWidth: "22em" }}>
                A free audit of your brand, website and lead flow.
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div className="stat-line"><span /></div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(56px, 6vw, 88px)", lineHeight: "1", fontWeight: "400", letterSpacing: "-0.04em" }}>
                2
                <span style={{ color: "var(--gold)" }}>{" days"}</span>
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.5", color: "var(--on-systems-muted)", maxWidth: "22em" }}>
                From your audit call to a written list of quick wins.
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div className="stat-line"><span /></div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(56px, 6vw, 88px)", lineHeight: "1", fontWeight: "400", letterSpacing: "-0.04em" }}>
                7
                <span style={{ color: "var(--gold)" }}>{" in 1"}</span>
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.5", color: "var(--on-systems-muted)", maxWidth: "22em" }}>
                Services under one roof, from AI automation to motion.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="motion" className="s08" style={{ padding: "clamp(120px, 13vw, 184px) clamp(8px, 2vw, 32px) 0" }}>
        <div className="oc-night oc-studio sv" style={{ position: "relative", overflow: "hidden", maxWidth: "1376px", margin: "0 auto", background: "var(--studio)", color: "var(--on-night)", borderRadius: "32px", padding: "clamp(40px, 6vw, 96px) clamp(24px, 6vw, 96px)", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "48px" }}>
          <div style={{ position: "relative", flex: "1 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>08 — MOTION</p>
            <p style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2vw, 28px)", lineHeight: "1.2", color: "var(--on-studio)" }}>
              We make
            </p>
            <div style={{ height: "1.15em", overflow: "hidden", fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5.4vw, 80px)", lineHeight: "1.15em", fontWeight: "500", letterSpacing: "-0.03em", color: "var(--on-studio)" }}>
              <div className="cycle">
                <div style={{ height: "1.15em", whiteSpace: "nowrap" }}>logo stings</div>
                <div style={{ height: "1.15em", whiteSpace: "nowrap" }}>explainer videos</div>
                <div style={{ height: "1.15em", whiteSpace: "nowrap" }}>reels that stop the scroll</div>
                <div style={{ height: "1.15em", whiteSpace: "nowrap" }}>animated ads</div>
                <div style={{ height: "1.15em", whiteSpace: "nowrap" }}>product launches</div>
                <div style={{ height: "1.15em", whiteSpace: "nowrap" }}>brand intros</div>
                <div style={{ height: "1.15em", whiteSpace: "nowrap" }}>social stories</div>
                <div style={{ height: "1.15em", whiteSpace: "nowrap" }}>logo stings</div>
              </div>
            </div>
            <p style={{ margin: "0", maxWidth: "30em", fontSize: "17px", lineHeight: "1.6", color: "var(--on-studio)" }}>
              Everything that moves on this page was made by the studio.
            </p>
          </div>
          <a href="#motion" className="reel" aria-label="Play the Open Canvas brand sting" style={{ position: "relative", flex: "1 1 520px", minWidth: "0", aspectRatio: "16 / 9", borderRadius: "var(--radius-lg)", overflow: "hidden", background: "#000", boxShadow: "0 0 0 1px rgba(244, 241, 234, 0.12)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
            <svg className="mk loop" viewBox="28 28 200 200" aria-hidden="true" style={{ width: "26%", height: "auto", overflow: "visible", color: "#f4f1ea" }}>
              <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
              <circle cx="160" cy="96" r="24" />
            </svg>
            <span className="play" style={{ position: "absolute", left: "20px", bottom: "20px", display: "inline-flex", alignItems: "center", gap: "12px", padding: "10px 18px 10px 10px", borderRadius: "999px", background: "rgba(244, 241, 234, 0.12)", WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)", color: "var(--on-night)", fontSize: "14px", fontWeight: "500" }}>
              <span style={{ width: "36px", height: "36px", borderRadius: "999px", background: "#d4af37", color: "#0d0d0d", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: "14px", height: "14px", marginLeft: "2px" }}>
                  <path d="M7 4.5v15l12-7.5z" style={{ fill: "currentColor" }} />
                </svg>
              </span>
              Watch our brand sting
            </span>
            <span style={{ position: "absolute", right: "20px", top: "18px", fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--on-night-muted)" }}>
              brand sting · 0:05
            </span>
            <span className="reel-bar" aria-hidden="true" />
          </a>
        </div>
      </section>
      <section id="founder" className="s09 oc-studio-tint" style={{ marginTop: "clamp(120px, 13vw, 184px)", background: "var(--studio-tint)", padding: "clamp(96px, 10vw, 144px) 0", position: "relative", overflow: "clip" }}>
        <svg className="wm-mark para wm-soft" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-140px", top: "-80px", width: "520px", height: "520px", color: "rgba(184, 77, 49, 0.08)" }}>
          <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
        </svg>
        <div className="wrap" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "clamp(40px, 6vw, 96px)", alignItems: "center" }}>
            <div className="sv" style={{ maxWidth: "480px", width: "100%" }}>
              <div className="ph founder-photo" style={{ aspectRatio: "4 / 5", background: "var(--systems)" }}>
                <Image src="/images/imran-khan-portrait.jpg" alt="Portrait of Imran Khan, founder of Open Canvas Marketing" fill sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 600px" style={{ objectFit: "cover" }} />
                <span className="ph-notch" style={{ background: "var(--studio-tint)" }} />
                <span className="ph-dot" />
              </div>
            </div>
            <div className="sv2" style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <p className="eyebrow-n" style={{ margin: "0" }}>09 — FROM THE FOUNDER</p>
              <h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "400", fontSize: "clamp(32px, 3.6vw, 52px)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
                “Every brand starts as an open canvas. We fill it with work that keeps working.”
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "18px", lineHeight: "1.65", color: "var(--ink)" }}>
                <p style={{ margin: "0" }}>
                  I started Open Canvas because I kept seeing the same gap: beautiful brands with no system behind them, and clever automations wrapped in a brand nobody remembered.
                </p>
                <p style={{ margin: "0" }}>
                  So we do both, as one team. You'll work with me directly from the first audit call, and everything we make, whether a post, a page or a workflow, is planned to keep working after we hand it over.
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px 32px", paddingTop: "24px", borderTop: "1px solid rgba(156, 63, 38, 0.22)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "28px", lineHeight: "1.1", fontWeight: "500", letterSpacing: "-0.01em" }}>
                    Imran Khan
                  </span>
                  <span style={{ fontSize: "15px", color: "var(--studio-text)" }}>Founder, Open Canvas Marketing</span>
                </div>
                <Link href="/contact" className="oc-btn oc-btn-primary oc-btn-md">
                  <span>Book a call with Imran</span>
                  <svg className="oc-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="s10 wrap" style={{ paddingTop: "clamp(120px, 13vw, 184px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "40px 96px", alignItems: "start" }}>
          <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>10 — QUESTIONS</p>
            <h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "500", fontSize: "clamp(36px, 4vw, 56px)", lineHeight: "1.04", letterSpacing: "-0.025em" }}>
              Before you ask.
            </h2>
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
              <p>No. Many clients start with one. We plan with both in mind, so the pieces fit together when you add the other.</p>
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
                <span>How quickly will we see results?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>
                Automations usually start working within weeks of launch; SEO and brand work compound over months. We agree what success looks like in the first call and report against it monthly.
              </p>
            </details>
            <details>
              <summary>
                <span>What does it cost?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>
                It depends on what you need, so we never quote blind. Every engagement starts with the free audit, then a written scope with a fixed price before any work begins. Ongoing work runs on a simple monthly retainer.
              </p>
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
          </div>
        </div>
      </section>
      <section id="start" className="s11" style={{ padding: "clamp(120px, 13vw, 184px) clamp(8px, 2vw, 32px) clamp(8px, 2vw, 32px)" }}>
        <div className="oc-night" style={{ position: "relative", overflow: "hidden", maxWidth: "1376px", margin: "0 auto", background: "var(--night)", color: "var(--on-night)", borderRadius: "32px", padding: "clamp(64px, 9vw, 144px) clamp(24px, 6vw, 96px)", boxSizing: "border-box" }}>
          <svg className="wm-mark para" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-40px", top: "50%", marginTop: "-320px", width: "640px", height: "640px", color: "rgba(244, 241, 234, 0.06)" }}>
            <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
            <circle cx="160" cy="96" r="24" />
          </svg>
          <div className="sv" style={{ position: "relative", maxWidth: "720px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "32px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>11 — START HERE</p>
            <h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "500", fontSize: "clamp(44px, 6vw, 88px)", lineHeight: "1", letterSpacing: "-0.035em" }}>
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
      <section aria-label="Free checklist" className="wrap" style={{ paddingTop: "clamp(72px, 8vw, 112px)" }} id="checklist">
        <div className="sv" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "32px 64px", alignItems: "center", padding: "clamp(28px, 4vw, 48px)", borderRadius: "var(--radius-xl)", background: "var(--sage)", color: "var(--on-sage)" }}>
          <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
            <span aria-hidden="true" style={{ flex: "none", width: "72px", height: "92px", borderRadius: "10px", background: "var(--paper)", boxShadow: "0 8px 24px rgba(13, 13, 13, 0.08), inset 0 0 0 1px var(--line)", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "10px", boxSizing: "border-box" }}>
              <svg viewBox="28 28 200 200" style={{ width: "22px", height: "22px", overflow: "visible", color: "#0d0d0d" }}>
                <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "36" }} />
                <circle cx="160" cy="96" r="24" style={{ fill: "#d4af37" }} />
              </svg>
              <span style={{ display: "block", height: "3px", borderRadius: "2px", background: "var(--line)" }} />
              <span style={{ display: "block", height: "3px", width: "70%", borderRadius: "2px", background: "var(--line)" }} />
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p className="eyebrow-n" style={{ margin: "0", color: "var(--on-sage)" }}>FREE · PDF</p>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "clamp(24px, 2.2vw, 30px)", lineHeight: "1.2", fontWeight: "500" }}>
                The 10-point marketing automation checklist
              </h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "var(--on-sage)" }}>
                Find the leads your business is losing after hours. One email a month after that, no spam.
              </p>
            </div>
          </div>
          <SubscribeForm source="checklist" variant="checklist" />
        </div>
      </section>
      </main>
    </>
  );
}

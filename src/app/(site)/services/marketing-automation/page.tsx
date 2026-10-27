import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, faqLd, pageMeta, serviceLd, webPageLd } from '@/lib/seo';

export const metadata: Metadata = pageMeta("/services/marketing-automation");

export default function Page() {
  return (
    <>
      <JsonLd data={[webPageLd("/services/marketing-automation"), breadcrumbLd("/services/marketing-automation"), faqLd([{"q": "Do I need a new CRM?", "a": "Not usually. We start with what you have and recommend a change only if it is holding you back."}, {"q": "Can you write the emails too?", "a": "Yes. The Studio writes and designs every message, so it sounds and looks like your brand."}, {"q": "Who owns the accounts?", "a": "You do. Every tool is set up in your name, and we work inside it with our own login."}]), serviceLd("/services/marketing-automation", "Marketing automation", "Marketing automation and CRM", ["CRM setup", "Lead capture", "Email and WhatsApp journeys", "E-commerce flows", "Reporting dashboard", "Monthly care"])]} />
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
                    <span aria-current="page">Marketing automation</span>
                  </p>
                </nav>
                <p className="rise d1 eyebrow-n" style={{ margin: "8px 0 0" }}>02 — SYSTEMS</p>
                <h1 className="rise d2 h1 h1-s" style={{ maxWidth: "12em" }}>
                  The follow-ups you meant to send, sent on time, every time.
                </h1>
                <p className="rise d3 lede">
                  We connect your forms, ads, CRM, email and WhatsApp into one pipeline, then build the journeys that turn enquiries into customers and customers into regulars.
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
                  <div className="motif" style={{ containerType: "inline-size", aspectRatio: "4 / 5", background: "var(--systems)", color: "#f4f1ea", borderRadius: "var(--radius-xl)" }}>
                    <div style={{ position: "absolute", inset: "10% 8%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "8px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 4px 10px" }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "rgba(244,241,234,.6)" }}>
                          follow-up.flow
                        </span>
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
              Leads sit in an inbox or a spreadsheet until someone remembers them.
            </p>
          </div>
          <div className="sv card" style={{ padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: "28px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--systems-text)" }}>02</span>
            <p style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2vw, 27px)", lineHeight: "1.3", fontWeight: "400", letterSpacing: "-0.01em" }}>
              Nobody follows up after the first message.
            </p>
          </div>
          <div className="sv card" style={{ padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: "28px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--systems-text)" }}>03</span>
            <p style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2vw, 27px)", lineHeight: "1.3", fontWeight: "400", letterSpacing: "-0.01em" }}>
              You can’t tell which campaign actually brought in the sales.
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
              <h3 className="h3" style={{ fontSize: "23px" }}>CRM setup</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Pipeline stages, fields and a clean import of the contacts you already have.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(18, 66, 74, 0.18)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--systems)", color: "var(--on-systems)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Lead capture</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Forms, ads and chats all feeding one place, tagged by source.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(18, 66, 74, 0.18)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--systems)", color: "var(--on-systems)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Email and WhatsApp journeys</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Welcome, nurture, follow-up and re-engagement, written by the Studio.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(18, 66, 74, 0.18)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--systems)", color: "var(--on-systems)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>E-commerce flows</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Abandoned cart, reorder reminders and review requests at the right moment.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(18, 66, 74, 0.18)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--systems)", color: "var(--on-systems)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Reporting dashboard</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Where leads come from, how many convert and what they are worth.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(18, 66, 74, 0.18)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--systems)", color: "var(--on-systems)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Monthly care</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Fixes, improvements and a plain-language report every month.
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
                We trace where every lead comes from and where it currently goes.
              </p>
            </li>
            <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "16px", height: "16px", borderRadius: "999px", background: "var(--canvas)", boxShadow: "inset 0 0 0 2px #d4af37" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)", marginTop: "12px" }}>02</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "28px", lineHeight: "1.15", fontWeight: "500" }}>
                Design
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                We draw the journeys and write every message before building anything.
              </p>
            </li>
            <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "16px", height: "16px", borderRadius: "999px", background: "var(--canvas)", boxShadow: "inset 0 0 0 2px #d4af37" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)", marginTop: "12px" }}>03</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "28px", lineHeight: "1.15", fontWeight: "500" }}>
                Build
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                We connect your tools, design the messages and test with real data.
              </p>
            </li>
            <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "16px", height: "16px", borderRadius: "999px", background: "var(--canvas)", boxShadow: "inset 0 0 0 2px #d4af37" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)", marginTop: "12px" }}>04</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "28px", lineHeight: "1.15", fontWeight: "500" }}>
                Run
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                We watch the numbers, improve monthly and report in plain language.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section className="wrap sec" aria-label="Example build">
        <Link href="/work" className="case" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "32px clamp(40px, 6vw, 96px)", alignItems: "center", textDecoration: "none", color: "var(--ink)" }}>
          <div className="sv">
            <div className="ph" style={{ aspectRatio: "16 / 11" }}>
              <Image src="/images/packing-studio.jpg" alt="An online store founder in a terracotta apron packing an order next to a tablet showing an order dashboard" fill sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 600px" style={{ objectFit: "cover" }} priority />
              <span className="ph-notch" style={{ background: "var(--canvas)" }} />
              <span className="ph-dot" />
            </div>
          </div>
          <div className="sv2" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>WHAT WE BUILD</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <span className="oc-tag oc-tag-systems">Marketing automation</span>
              <span className="oc-tag oc-tag-outline">Example build</span>
            </div>
            <h2 className="h2" style={{ fontSize: "clamp(32px, 3.4vw, 48px)" }}>Reorder and review flows for an online store</h2>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
              Timed reminders bring customers back, and happy ones are asked for a review at the right moment.
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
                <path className="tl-mono" d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z" />
              </svg>
              HubSpot
            </span>
            <span className="tchip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path className="tl-mono" d="M8.66 6.897a1.299 1.299 0 0 0-1.205.765l-.642 1.44-.062-.385A1.291 1.291 0 0 0 5.27 7.648l-4.185.678A1.291 1.291 0 0 0 .016 9.807l.678 4.18a1.293 1.293 0 0 0 1.27 1.087c.074 0 .143-.01.216-.017l4.18-.678c.436-.07.784-.351.96-.723l2.933 1.307a1.304 1.304 0 0 0 .988.026c.321-.12.575-.365.716-.678l.28-.629.038.276a1.297 1.297 0 0 0 1.455 1.103l3.712-.501a1.29 1.29 0 0 0 1.03.514h4.236c.713 0 1.29-.58 1.291-1.291V9.545c0-.712-.58-1.291-1.291-1.291h-4.236c-.079 0-.155.008-.23.022a1.309 1.309 0 0 0-.275-.288c-.275-.21-.614-.3-.958-.253l-4.197.571c-.155.021-.3.07-.432.14L9.159 7.01a1.27 1.27 0 0 0-.499-.113zm-.025.705c.077 0 .159.013.24.052l2.971 1.324c-.128.238-.18.508-.142.782l.357 2.596h.002l-.745 1.672a.59.59 0 0 1-.777.296l-3.107-1.385-.004-.041-.41-2.526L8.1 7.95a.589.589 0 0 1 .536-.348zm-3.159.733c.125 0 .245.039.343.112.13.09.21.227.237.382l.234 1.446-.56 1.259a1.27 1.27 0 0 0-.026.987c.12.322.364.575.678.717l.295.131a.585.585 0 0 1-.428.314l-4.185.678a.59.59 0 0 1-.674-.485l-.678-4.18a.588.588 0 0 1 .485-.674l4.185-.678c.03-.004.064-.01.094-.01zm11.705.09a.59.59 0 0 1 .415.173 1.287 1.287 0 0 0-.416.947v4.237c0 .033.003.065.005.097l-3.55.482a.586.586 0 0 1-.66-.502l-.191-1.403.899-2.017a1.29 1.29 0 0 0-.333-1.5l3.754-.51c.026-.004.051-.004.077-.004zm1.3.532h4.227c.326 0 .588.266.588.588v4.237a.589.589 0 0 1-.588.588h-4.237a.564.564 0 0 1-.12-.013c.47-.246.758-.765.684-1.318zm-5.988.309.254.113c.296.133.43.48.296.777l-.432.97-.207-1.465a.58.58 0 0 1 .09-.395zm5.39.538.453 3.325a.583.583 0 0 1-.453.65zM6.496 11.545l.17 1.052a.588.588 0 0 1-.293-.776zm3.985 4.344a.588.588 0 0 0-.612.603c0 .358.244.61.601.61a.582.582 0 0 0 .607-.608c0-.35-.242-.605-.596-.605zm5.545 0a.588.588 0 0 0-.612.603c0 .358.245.61.602.61a.582.582 0 0 0 .606-.608c0-.35-.24-.605-.596-.605zm-8.537.018a.047.047 0 0 0-.048.047v.085c0 .026.021.047.048.047h.52l-.623.9a.052.052 0 0 0-.009.027v.027c0 .026.021.047.048.047h.815a.047.047 0 0 0 .047-.047v-.085a.047.047 0 0 0-.047-.047h-.55l.606-.9a.05.05 0 0 0 .008-.026v-.028a.047.047 0 0 0-.047-.047zm5.303 0a.047.047 0 0 0-.047.047v1.086c0 .026.02.047.047.047h.135a.047.047 0 0 0 .047-.047v-.454h.545v.454c0 .026.02.047.047.047h.134a.047.047 0 0 0 .047-.047v-1.086a.047.047 0 0 0-.047-.047h-.134a.047.047 0 0 0-.047.047v.453h-.545v-.453a.047.047 0 0 0-.047-.047zm-2.324.164c.25 0 .372.194.372.425 0 .219-.109.425-.358.426-.242 0-.375-.197-.375-.419 0-.235.108-.432.36-.432zm5.545 0c.25 0 .372.194.372.425 0 .219-.108.425-.358.426-.242 0-.374-.197-.374-.419 0-.235.108-.432.36-.432z" />
              </svg>
              Zoho CRM
            </span>
            <span className="tchip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path className="tl-mono" d="M11.267 0C6.791-.015-1.82 10.246 1.397 12.964l.79.669a3.88 3.88 0 0 0-.22 1.792c.084.84.518 1.644 1.22 2.266.666.59 1.542.964 2.392.964 1.406 3.24 4.62 5.228 8.386 5.34 4.04.12 7.433-1.776 8.854-5.182.093-.24.488-1.316.488-2.267 0-.956-.54-1.352-.885-1.352-.01-.037-.078-.286-.172-.586-.093-.3-.19-.51-.19-.51.375-.563.382-1.065.332-1.35-.053-.353-.2-.653-.496-.964-.296-.311-.902-.63-1.753-.868l-.446-.124c-.002-.019-.024-1.053-.043-1.497-.014-.32-.042-.822-.197-1.315-.186-.668-.508-1.253-.911-1.627 1.112-1.152 1.806-2.422 1.804-3.511-.003-2.095-2.576-2.729-5.746-1.416l-.672.285A678.22 678.22 0 0 0 12.7.504C12.304.159 11.817.002 11.267 0zm.073.873c.166 0 .322.019.465.058.297.084 1.28 1.224 1.28 1.224s-1.826 1.013-3.52 2.426c-2.28 1.757-4.005 4.311-5.037 7.082-.811.158-1.526.618-1.963 1.253-.261-.218-.748-.64-.834-.804-.698-1.326.761-3.902 1.781-5.357C5.834 3.44 9.37.867 11.34.873zm3.286 3.273c.04-.002.06.05.028.074-.143.11-.299.26-.413.414a.04.04 0 0 0 .031.064c.659.004 1.587.235 2.192.574.041.023.012.103-.034.092-.915-.21-2.414-.369-3.97.01-1.39.34-2.45.863-3.224 1.426-.04.028-.086-.023-.055-.06.896-1.035 1.999-1.935 2.987-2.44.034-.018.07.019.052.052-.079.143-.23.447-.278.678-.007.035.032.063.062.042.615-.42 1.684-.868 2.622-.926zm3.023 3.205l.056.001a.896.896 0 0 1 .456.146c.534.355.61 1.216.638 1.845.015.36.059 1.229.074 1.478.034.571.184.651.487.751.17.057.33.098.563.164.706.198 1.125.4 1.39.658.157.162.23.333.253.497.083.608-.472 1.36-1.942 2.041-1.607.746-3.557.935-4.904.785l-.471-.053c-1.078-.145-1.693 1.247-1.046 2.201.417.615 1.552 1.015 2.688 1.015 2.604 0 4.605-1.111 5.35-2.072a.987.987 0 0 0 .06-.085c.036-.055.006-.085-.04-.054-.608.416-3.31 2.069-6.2 1.571 0 0-.351-.057-.672-.182-.255-.1-.788-.344-.853-.891 2.333.72 3.801.039 3.801.039a.072.072 0 0 0 .042-.072.067.067 0 0 0-.074-.06s-1.911.283-3.718-.378c.197-.64.72-.408 1.51-.345a11.045 11.045 0 0 0 3.647-.394c.818-.234 1.892-.697 2.727-1.356.281.618.38 1.299.38 1.299s.219-.04.4.073c.173.106.299.326.213.895-.176 1.063-.628 1.926-1.387 2.72a5.714 5.714 0 0 1-1.666 1.244c-.34.18-.704.334-1.087.46-2.863.935-5.794-.093-6.739-2.3a3.545 3.545 0 0 1-.189-.522c-.403-1.455-.06-3.2 1.008-4.299.065-.07.132-.153.132-.256 0-.087-.055-.179-.102-.243-.374-.543-1.669-1.466-1.409-3.254.187-1.284 1.31-2.189 2.357-2.135.089.004.177.01.266.015.453.027.85.085 1.223.1.625.028 1.187-.063 1.853-.618.225-.187.405-.35.71-.401.028-.005.092-.028.215-.028zm.022 2.18a.42.42 0 0 0-.06.005c-.335.054-.347.468-.228 1.04.068.32.187.595.32.765.175-.02.343-.022.498 0 .089-.205.104-.557.024-.942-.112-.535-.261-.872-.554-.868zm-3.66 1.546a1.724 1.724 0 0 0-1.016.326c-.16.117-.311.28-.29.378.008.032.031.056.088.063.131.015.592-.217 1.122-.25.374-.023.684.094.923.2.239.104.386.173.443.113.037-.038.026-.11-.031-.204-.118-.192-.36-.387-.618-.497a1.601 1.601 0 0 0-.621-.129zm4.082.81c-.171-.003-.313.186-.317.42-.004.236.131.43.303.432.172.003.314-.185.318-.42.004-.236-.132-.429-.304-.432zm-3.58.172c-.05 0-.102.002-.155.008-.311.05-.483.152-.593.247-.094.082-.152.173-.152.237a.075.075 0 0 0 .075.076c.07 0 .228-.063.228-.063a1.98 1.98 0 0 1 1.001-.104c.157.018.23.027.265-.026.01-.016.022-.049-.01-.1-.063-.103-.311-.269-.66-.275zm2.26.4c-.127 0-.235.051-.283.148-.075.154.035.363.246.466.21.104.443.063.52-.09.075-.155-.035-.364-.246-.467a.542.542 0 0 0-.237-.058zm-11.635.024c.048 0 .098 0 .149.003.73.04 1.806.6 2.052 2.19.217 1.41-.128 2.843-1.449 3.069-.123.02-.248.029-.374.026-1.22-.033-2.539-1.132-2.67-2.435-.145-1.44.591-2.548 1.894-2.811.117-.024.252-.04.398-.042zm-.07.927a1.144 1.144 0 0 0-.847.364c-.38.418-.439.988-.366 1.19.027.073.07.094.1.098.064.008.16-.039.22-.2a1.2 1.2 0 0 0 .017-.052 1.58 1.58 0 0 1 .157-.37.689.689 0 0 1 .955-.199c.266.174.369.5.255.81-.058.161-.154.469-.133.721.043.511.357.717.64.738.274.01.466-.143.515-.256.029-.067.005-.107-.011-.125-.043-.053-.113-.037-.18-.021a.638.638 0 0 1-.16.022.347.347 0 0 1-.294-.148c-.078-.12-.073-.3.013-.504.011-.028.025-.058.04-.092.138-.308.368-.825.11-1.317-.195-.37-.513-.602-.894-.65a1.135 1.135 0 0 0-.138-.01z" />
              </svg>
              Mailchimp
            </span>
            <span className="tchip"><i aria-hidden="true" />Klaviyo</span>
            <span className="tchip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path className="tl-mono" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Business
            </span>
            <span className="tchip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path className="tl-mono" d="M4.157 0A4.151 4.151 0 0 0 0 4.161v15.678A4.151 4.151 0 0 0 4.157 24h15.682A4.152 4.152 0 0 0 24 19.839V4.161A4.152 4.152 0 0 0 19.839 0H4.157Zm10.61 8.761h.03a.577.577 0 0 1 .23.038.585.585 0 0 1 .201.124.63.63 0 0 1 .162.431.612.612 0 0 1-.162.435.58.58 0 0 1-.201.128.58.58 0 0 1-.23.042.529.529 0 0 1-.235-.042.585.585 0 0 1-.332-.328.559.559 0 0 1-.038-.235.613.613 0 0 1 .17-.431.59.59 0 0 1 .405-.162Zm2.853 1.572c.03.004.061.004.095.004.325-.011.646.064.937.219.238.144.431.355.552.609.128.279.189.582.185.888v.193a2 2 0 0 1 0 .219h-2.498c.003.227.075.45.204.642a.78.78 0 0 0 .646.265.714.714 0 0 0 .484-.136.642.642 0 0 0 .23-.318l.915.257a1.398 1.398 0 0 1-.28.537c-.14.159-.321.284-.521.355a2.234 2.234 0 0 1-.836.136 1.923 1.923 0 0 1-1.001-.245 1.618 1.618 0 0 1-.665-.703 2.221 2.221 0 0 1-.227-1.036 1.95 1.95 0 0 1 .48-1.398 1.9 1.9 0 0 1 1.3-.488Zm-9.607.023c.162.004.325.026.48.079.207.065.4.174.563.314.26.302.393.692.366 1.088v2.276H8.53l-.109-.711h-.065c-.064.163-.155.31-.272.439a1.122 1.122 0 0 1-.374.264 1.023 1.023 0 0 1-.453.083 1.334 1.334 0 0 1-.866-.264.965.965 0 0 1-.329-.801.993.993 0 0 1 .076-.431 1.02 1.02 0 0 1 .242-.363 1.478 1.478 0 0 1 1.043-.303h.952v-.181a.696.696 0 0 0-.136-.454.553.553 0 0 0-.438-.154.695.695 0 0 0-.378.086.48.48 0 0 0-.193.254l-.99-.144a1.26 1.26 0 0 1 .257-.563c.14-.174.321-.302.533-.378.261-.091.54-.136.82-.129.053-.003.106-.007.163-.007Zm4.384.007c.174 0 .347.038.506.114.182.083.34.211.458.374.257.423.377.911.351 1.406a2.53 2.53 0 0 1-.355 1.448 1.148 1.148 0 0 1-1.009.517c-.204 0-.401-.045-.582-.136a1.052 1.052 0 0 1-.48-.457 1.298 1.298 0 0 1-.114-.234h-.045l.004 1.784h-1.059v-4.713h.904l.117.805h.057c.068-.208.177-.401.328-.56a1.129 1.129 0 0 1 .843-.344h.076v-.004Zm7.559.084h.903l.113.805h.053a1.37 1.37 0 0 1 .235-.484.813.813 0 0 1 .313-.242.82.82 0 0 1 .39-.076h.234v1.051h-.401a.662.662 0 0 0-.313.008.623.623 0 0 0-.272.155.663.663 0 0 0-.174.26.683.683 0 0 0-.027.314v1.875h-1.054v-3.666Zm-17.515.003h3.262v.896L3.73 13.104l.034.113h1.973l.042.9H2.4v-.9l1.931-1.754-.045-.117H2.441v-.896Zm11.815 0h1.055v3.659h-1.055V10.45Zm3.443.684.019.016a.69.69 0 0 0-.351.045.756.756 0 0 0-.287.204c-.11.155-.174.336-.189.522h1.545c-.034-.526-.257-.787-.74-.787h.003Zm-5.718.163c-.026 0-.057 0-.083.004a.78.78 0 0 0-.31.053.746.746 0 0 0-.257.189 1.016 1.016 0 0 0-.204.695v.064c-.015.257.057.507.204.711a.634.634 0 0 0 .253.196.638.638 0 0 0 .314.061.644.644 0 0 0 .578-.265c.14-.223.204-.48.189-.74a1.216 1.216 0 0 0-.181-.711.677.677 0 0 0-.503-.257Zm-4.509 1.266a.464.464 0 0 0-.268.102.373.373 0 0 0-.114.276c0 .053.008.106.027.155a.375.375 0 0 0 .087.132.576.576 0 0 0 .397.11v.004a.863.863 0 0 0 .563-.182.573.573 0 0 0 .211-.457v-.14h-.903Z" />
              </svg>
              Zapier
            </span>
            <span className="tchip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path className="tl-mono" d="M13.38 3.498c-.27 0-.511.19-.566.465L9.85 18.986a.578.578 0 0 0 .453.678l4.095.826a.58.58 0 0 0 .682-.455l2.963-15.021a.578.578 0 0 0-.453-.678l-4.096-.826a.589.589 0 0 0-.113-.012zm-5.876.098a.576.576 0 0 0-.516.318L.062 17.697a.575.575 0 0 0 .256.774l3.733 1.877a.578.578 0 0 0 .775-.258l6.926-13.781a.577.577 0 0 0-.256-.776L7.762 3.658a.571.571 0 0 0-.258-.062zm11.74.115a.576.576 0 0 0-.576.576v15.426c0 .318.258.578.576.578h4.178a.58.58 0 0 0 .578-.578V4.287a.578.578 0 0 0-.578-.576Z" />
              </svg>
              Make
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
                <span>Do I need a new CRM?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>Not usually. We start with what you have and recommend a change only if it is holding you back.</p>
            </details>
            <details>
              <summary>
                <span>How long does setup take?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>[Typical timeline, e.g. 3 to 6 weeks], depending on how many tools we connect.</p>
            </details>
            <details>
              <summary>
                <span>Can you write the emails too?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>Yes. The Studio writes and designs every message, so it sounds and looks like your brand.</p>
            </details>
            <details>
              <summary>
                <span>Who owns the accounts?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>You do. Every tool is set up in your name, and we work inside it with our own login.</p>
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
          <Link href="/services/ai-automation" className="sv oc-night oc-systems lift" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: "40px", padding: "clamp(28px, 3vw, 40px)", borderRadius: "var(--radius-xl)", background: "var(--systems)", color: "var(--on-systems)", textDecoration: "none" }}>
            <svg className="wm-mark " viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-50px", bottom: "-70px", width: "240px", height: "240px", color: "rgba(255, 255, 255, 0.07)" }}>
              <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
            </svg>
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ display: "inline-flex", width: "48px", height: "48px", alignItems: "center", justifyContent: "center", borderRadius: "14px", background: "rgba(255, 255, 255, 0.12)", color: "var(--gold)" }}>
                <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <rect x="5" y="5" width="14" height="14" rx="3" />
                  <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px" }}>01 · SYSTEMS</span>
            </div>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "32px", lineHeight: "1.1", fontWeight: "500" }}>
                AI automation
              </span>
              <span style={{ fontSize: "16px", lineHeight: "1.5", opacity: "0.85" }}>
                Assistants and workflows, with a person in the loop
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
          <Link href="/services/seo" className="sv oc-night oc-systems lift" style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: "40px", padding: "clamp(28px, 3vw, 40px)", borderRadius: "var(--radius-xl)", background: "var(--systems)", color: "var(--on-systems)", textDecoration: "none" }}>
            <svg className="wm-mark " viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-50px", bottom: "-70px", width: "240px", height: "240px", color: "rgba(255, 255, 255, 0.07)" }}>
              <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
            </svg>
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ display: "inline-flex", width: "48px", height: "48px", alignItems: "center", justifyContent: "center", borderRadius: "14px", background: "rgba(255, 255, 255, 0.12)", color: "var(--gold)" }}>
                <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path d="M15.5 15.5 21 21" />
                  <path d="M7.5 12.5 9.5 10.5 11.5 11.5 13.5 8.5" />
                </svg>
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px" }}>03 · SYSTEMS</span>
            </div>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "32px", lineHeight: "1.1", fontWeight: "500" }}>SEO</span>
              <span style={{ fontSize: "16px", lineHeight: "1.5", opacity: "0.85" }}>Be found without paying for every click</span>
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

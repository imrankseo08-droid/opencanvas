import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, itemListLd, pageMeta, webPageLd } from '@/lib/seo';
import { WorkFilter } from '@/components/Filters';

export const metadata: Metadata = pageMeta("/work");

export default function Page() {
  return (
    <>
      <JsonLd data={[webPageLd("/work"), breadcrumbLd("/work"), itemListLd("/work", [{"name": "A lead assistant that never clocks off", "url": "/work/lead-assistant"}, {"name": "Reorder and review flows for an online store", "url": "/services/marketing-automation"}, {"name": "Service pages built for local search", "url": "/services/seo"}, {"name": "A launch campaign in motion", "url": "/services/motion-graphics"}, {"name": "A brand kit a team can actually use", "url": "/services/graphic-design"}, {"name": "A month of content from one shoot", "url": "/services/social-media"}, {"name": "A website that books its own calls", "url": "/services/web-design"}])]} />
      <section className="s01" style={{ position: "relative", overflow: "clip" }}>
        <svg className="wm-mark wm-soft" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-220px", top: "-60px", width: "640px", height: "640px", color: "rgba(13, 13, 13, 0.035)" }}>
          <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
        </svg>
        <div className="wrap" style={{ position: "relative", paddingTop: "clamp(56px, 7vw, 104px)", paddingBottom: "clamp(24px, 3vw, 40px)" }}>
          <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px", minWidth: "0" }}>
            <nav aria-label="Breadcrumb">
              <p className="crumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Work</span></p>
            </nav>
            <p className="rise d1 eyebrow-n" style={{ margin: "8px 0 0" }}>WORK</p>
            <h1 className="rise d2 h1" style={{ maxWidth: "12em" }}>Work that keeps working.</h1>
            <p className="rise d3 lede">
              Example builds that show how Systems and Studio fit together. Each one is something we make for clients, end to end.
            </p>
          </div>
        </div>
      </section>
      <WorkFilter />
      <section className="wrap" style={{ paddingTop: "56px" }} aria-label="Example builds" id="work-list">
        <Link href="/work/lead-assistant" className="case sv" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "24px 48px", alignItems: "end", textDecoration: "none", color: "var(--ink)", marginBottom: "72px" }} data-pillar="systems">
          <div className="ph" style={{ aspectRatio: "16 / 10" }}>
            <Image src="/images/lead-assistant.jpg" alt="Hands typing on a laptop beside a phone showing a customer chat, a petrol mug and a terracotta notebook" fill sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 600px" style={{ objectFit: "cover" }} priority />
            <span className="ph-notch" style={{ background: "var(--canvas)" }} />
            <span className="ph-dot" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingBottom: "8px" }}>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <span className="oc-tag oc-tag-systems">AI automation</span>
              <span className="oc-tag oc-tag-systems">Marketing automation</span>
              <span className="oc-tag oc-tag-outline">Example build</span>
            </div>
            <h2 className="h2" style={{ fontSize: "clamp(30px, 3vw, 44px)" }}>A lead assistant that never clocks off</h2>
            <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
              Answers enquiries from Instagram, WhatsApp and your website, asks the right questions and books the call. A person takes over whenever it matters.
            </p>
            <span className="more">
              {"Read the full build "}
              <span style={{ color: "var(--systems-text)", display: "inline-flex" }}>
                <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </span>
            </span>
          </div>
        </Link>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "64px 32px" }}>
          <Link href="/services/marketing-automation" className="case sv" style={{ display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "var(--ink)" }} data-pillar="systems">
            <div className="ph" style={{ aspectRatio: "4 / 5", borderRadius: "var(--radius-lg)" }}>
              <Image src="/images/packing-studio.jpg" alt="An online store founder in a terracotta apron packing an order next to a tablet showing an order dashboard" fill sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 600px" style={{ objectFit: "cover" }} />
              <span className="ph-notch" style={{ background: "var(--canvas)" }} />
              <span className="ph-dot" />
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
          <Link href="/services/seo" className="case sv2" style={{ display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "var(--ink)" }} data-pillar="systems">
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
              <span className="ph-notch" style={{ background: "var(--canvas)" }} />
              <span className="ph-dot" />
            </div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <span className="oc-tag oc-tag-systems">SEO</span>
              <span className="oc-tag oc-tag-outline">Example build</span>
            </div>
            <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "26px", lineHeight: "1.2", fontWeight: "500" }}>
              Service pages built for local search
            </h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
              One page per service and area, with clear answers, schema and reviews, so nearby customers find the business first.
            </p>
          </Link>
          <Link href="/services/motion-graphics" className="case sv" style={{ display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "var(--ink)" }} data-pillar="studio">
            <div className="motif" style={{ containerType: "inline-size", aspectRatio: "4 / 5", background: "var(--studio)", color: "#fff3ec", borderRadius: "var(--radius-xl)" }}>
              <div style={{ position: "absolute", inset: "10% 8% auto", aspectRatio: "16 / 10", borderRadius: "16px", background: "#000", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 24px 50px rgba(13,13,13,.35)" }}>
                <svg className="mk loop" viewBox="28 28 200 200" aria-hidden="true" style={{ width: "30%", height: "30%", overflow: "visible", color: "#f4f1ea" }}>
                  <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
                  <circle cx="160" cy="96" r="24" />
                </svg>
                <span style={{ position: "absolute", left: "14px", top: "12px", fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(244,241,234,.6)" }}>
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
          <Link href="/services/graphic-design" className="case sv2" style={{ display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "var(--ink)" }} data-pillar="studio">
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
              <span className="ph-notch" style={{ background: "var(--canvas)" }} />
              <span className="ph-dot" />
            </div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <span className="oc-tag oc-tag-studio">Graphic design</span>
              <span className="oc-tag oc-tag-outline">Example build</span>
            </div>
            <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "26px", lineHeight: "1.2", fontWeight: "500" }}>
              A brand kit a team can actually use
            </h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
              Logo, colours, type and twenty editable templates, with a one-page guide anyone on the team can follow.
            </p>
          </Link>
          <Link href="/services/social-media" className="case sv" style={{ display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "var(--ink)" }} data-pillar="studio">
            <div className="motif" style={{ containerType: "inline-size", aspectRatio: "4 / 5", background: "var(--studio-tint)", color: "var(--ink)", borderRadius: "var(--radius-xl)" }}>
              <div style={{ position: "absolute", left: "50%", top: "50%", width: "64%", transform: "translate(-50%, -50%) rotate(-4deg)", padding: "14px", borderRadius: "28px", background: "var(--paper)", boxShadow: "0 30px 60px rgba(156, 63, 38, .22)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "2px 4px 12px" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "999px", background: "var(--studio)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg className="mk-s" viewBox="28 28 200 200" aria-hidden="true" style={{ width: "16px", height: "16px", overflow: "visible", color: "#fff3ec" }}>
                      <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
                      <circle cx="160" cy="96" r="24" />
                    </svg>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ display: "block", width: "72px", height: "7px", borderRadius: "4px", background: "var(--ink)" }} />
                    <span style={{ display: "block", width: "48px", height: "6px", borderRadius: "4px", background: "var(--border)" }} />
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }}>
                  <div style={{ aspectRatio: "1", borderRadius: "12px", background: "var(--studio)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 0 1px rgba(13,13,13,.05)" }}>
                    <svg className="mk-s" viewBox="28 28 200 200" aria-hidden="true" style={{ width: "42%", height: "42%", overflow: "visible", color: "#fff3ec" }}>
                      <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
                      <circle cx="160" cy="96" r="24" />
                    </svg>
                  </div>
                  <div style={{ aspectRatio: "1", borderRadius: "12px", background: "var(--studio-tint)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 0 1px rgba(13,13,13,.05)" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "9cqw", lineHeight: "1", color: "var(--studio-text)" }}>
                      “
                    </span>
                  </div>
                  <div style={{ aspectRatio: "1", borderRadius: "12px", background: "var(--systems)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 0 1px rgba(13,13,13,.05)" }}>
                    <span style={{ width: "34%", aspectRatio: "1", borderRadius: "999px", background: "rgba(255,255,255,.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: "40%", height: "40%", marginLeft: "6%" }}>
                        <path d="M7 4.5v15l12-7.5z" style={{ fill: "#fff" }} />
                      </svg>
                    </span>
                  </div>
                  <div style={{ aspectRatio: "1", borderRadius: "12px", background: "var(--gold-tint)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 0 1px rgba(13,13,13,.05)" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: "500", fontSize: "5.4cqw", color: "var(--gold-text)" }}>
                      Aa
                    </span>
                  </div>
                  <div style={{ aspectRatio: "1", borderRadius: "12px", background: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 0 1px rgba(13,13,13,.05)" }}>
                    <svg className="mk-s" viewBox="28 28 200 200" aria-hidden="true" style={{ width: "42%", height: "42%", overflow: "visible", color: "#f4f1ea" }}>
                      <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
                      <circle cx="160" cy="96" r="24" />
                    </svg>
                  </div>
                  <div style={{ aspectRatio: "1", borderRadius: "12px", background: "var(--studio-tint)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 0 1px rgba(13,13,13,.05)" }} />
                  <div style={{ aspectRatio: "1", borderRadius: "12px", background: "var(--sage)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 0 1px rgba(13,13,13,.05)" }}>
                    <span style={{ width: "34%", aspectRatio: "1", borderRadius: "999px", background: "rgba(255,255,255,.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: "40%", height: "40%", marginLeft: "6%" }}>
                        <path d="M7 4.5v15l12-7.5z" style={{ fill: "#fff" }} />
                      </svg>
                    </span>
                  </div>
                  <div style={{ aspectRatio: "1", borderRadius: "12px", background: "var(--studio)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 0 1px rgba(13,13,13,.05)" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: "500", fontSize: "3.4cqw", lineHeight: "1.1", color: "#fff3ec", textAlign: "center" }}>
                      New
                      <br />
                      drop
                    </span>
                  </div>
                  <div style={{ aspectRatio: "1", borderRadius: "12px", background: "var(--paper)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 0 1px rgba(13,13,13,.05)" }}>
                    <svg className="mk-s" viewBox="28 28 200 200" aria-hidden="true" style={{ width: "42%", height: "42%", overflow: "visible", color: "var(--ink)" }}>
                      <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
                      <circle cx="160" cy="96" r="24" />
                    </svg>
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", right: "8%", bottom: "9%", display: "flex", alignItems: "center", gap: "10px", padding: "10px 16px", borderRadius: "999px", background: "var(--ink)", color: "#f4f1ea", fontSize: "13px", fontWeight: "500", boxShadow: "0 12px 30px rgba(13,13,13,.18)" }}>
                <span className="kf" style={{ width: "8px", height: "8px", borderRadius: "999px", background: "#d4af37" }} />
                30 posts planned
              </div>
              <span className="ph-notch" style={{ background: "var(--canvas)" }} />
              <span className="ph-dot" />
            </div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <span className="oc-tag oc-tag-studio">Social media</span>
              <span className="oc-tag oc-tag-outline">Example build</span>
            </div>
            <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "26px", lineHeight: "1.2", fontWeight: "500" }}>
              A month of content from one shoot
            </h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
              One half-day shoot turned into a month of posts, reels and stories, planned around three content pillars.
            </p>
          </Link>
          <Link href="/services/web-design" className="case sv2" style={{ display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "var(--ink)" }} data-pillar="studio">
            <div className="motif" style={{ containerType: "inline-size", aspectRatio: "4 / 5", background: "var(--studio-tint)", color: "var(--ink)", borderRadius: "var(--radius-xl)" }}>
              <div style={{ position: "absolute", inset: "10% 8% 16%", borderRadius: "16px", background: "var(--paper)", overflow: "hidden", boxShadow: "0 24px 50px rgba(18,66,74,.16)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "12px 14px", borderBottom: "1px solid var(--line)" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "999px", background: "var(--studio)" }} />
                  <span style={{ width: "9px", height: "9px", borderRadius: "999px", background: "#d4af37" }} />
                  <span style={{ width: "9px", height: "9px", borderRadius: "999px", background: "var(--sage)" }} />
                  <span style={{ marginLeft: "10px", flex: "1", height: "18px", borderRadius: "999px", background: "var(--sunken)" }} />
                </div>
                <div style={{ padding: "18px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ height: "96px", borderRadius: "12px", background: "var(--systems)", display: "flex", alignItems: "flex-end", padding: "14px", gap: "10px" }}>
                    <span style={{ display: "block", width: "54%", height: "12px", borderRadius: "6px", background: "#f4f1ea" }} />
                    <span style={{ marginLeft: "auto", display: "block", width: "22%", height: "22px", borderRadius: "6px", background: "#d4af37" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                    <span style={{ height: "48px", borderRadius: "10px", background: "var(--studio-tint)" }} />
                    <span style={{ height: "48px", borderRadius: "10px", background: "var(--systems-tint)" }} />
                    <span style={{ height: "48px", borderRadius: "10px", background: "var(--gold-tint)" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "12px", borderRadius: "10px", boxShadow: "inset 0 0 0 1px var(--line)" }}>
                    <span style={{ display: "block", height: "8px", width: "30%", borderRadius: "4px", background: "var(--ink)" }} />
                    <span style={{ display: "block", height: "26px", borderRadius: "6px", boxShadow: "inset 0 0 0 1px var(--border)" }} />
                    <span style={{ display: "block", height: "26px", width: "40%", borderRadius: "6px", background: "var(--ink)" }} />
                  </div>
                </div>
              </div>
              <div style={{ position: "absolute", right: "5%", bottom: "7%", display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px 12px 12px", borderRadius: "16px", background: "var(--ink)", color: "#f4f1ea", boxShadow: "0 16px 36px rgba(13,13,13,.24)" }}>
                <span style={{ width: "32px", height: "32px", borderRadius: "10px", background: "rgba(212,175,55,.18)", color: "#d4af37", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: "16px", height: "16px" }}>
                    <path d="M5 12.5 10 17.5 19 7" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }} />
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#d4af37" }}>CRM · just now</span>
                  <span style={{ fontSize: "14px" }}>New lead from the website</span>
                </span>
              </div>
              <span className="ph-notch" style={{ background: "var(--canvas)" }} />
              <span className="ph-dot" />
            </div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <span className="oc-tag oc-tag-studio">Web design</span>
              <span className="oc-tag oc-tag-systems">Marketing automation</span>
              <span className="oc-tag oc-tag-outline">Example build</span>
            </div>
            <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "26px", lineHeight: "1.2", fontWeight: "500" }}>
              A website that books its own calls
            </h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
              Service pages, a booking form wired to the CRM and an instant WhatsApp follow-up, so a midnight visitor becomes a morning meeting.
            </p>
          </Link>
        </div>
        <div className="sv note" style={{ marginTop: "72px" }}>
          <span style={{ color: "var(--gold-text)", display: "inline-flex", paddingTop: "2px" }}>
            <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M5 12.5 10 17.5 19 7" />
            </svg>
          </span>
          <span>
            <b>About these examples.</b>
            {" They show the kind of work we build, not named client results. Client case studies are added here once each client has approved the story and the numbers."}
          </span>
        </div>
      </section>
      <section aria-label="Start" style={{ padding: "clamp(96px, 11vw, 160px) clamp(8px, 2vw, 32px) 0" }}>
        <div className="oc-night band" style={{ background: "var(--night)", color: "var(--on-night)", padding: "clamp(64px, 8vw, 128px) clamp(24px, 6vw, 96px)" }}>
          <svg className="wm-mark para" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-40px", top: "50%", marginTop: "-300px", width: "600px", height: "600px", color: "rgba(244, 241, 234, 0.06)" }}>
            <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
          </svg>
          <div className="sv" style={{ position: "relative", maxWidth: "720px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>YOUR TURN</p>
            <h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "500", fontSize: "clamp(40px, 5.4vw, 80px)", lineHeight: "1", letterSpacing: "-0.035em" }}>
              {"What should we build "}
              <span style={{ color: "var(--gold)" }}>for you?</span>
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

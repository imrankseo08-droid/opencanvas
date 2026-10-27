import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, pageMeta, webPageLd } from '@/lib/seo';

export const metadata: Metadata = pageMeta("/work/lead-assistant");

export default function Page() {
  return (
    <>
      <JsonLd data={[webPageLd("/work/lead-assistant"), breadcrumbLd("/work/lead-assistant")]} />
      <section className="s01" style={{ padding: "12px clamp(8px, 2vw, 32px) 0" }}>
        <div className="oc-night oc-systems band" style={{ background: "var(--systems)", color: "var(--on-systems)" }}>
          <svg className="wm-mark hero-wm" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-140px", top: "-40px", width: "680px", height: "680px", color: "rgba(244, 241, 234, 0.06)" }}>
            <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
          </svg>
          <div className="wrap" style={{ position: "relative", paddingTop: "clamp(56px, 7vw, 112px)", paddingBottom: "clamp(56px, 7vw, 104px)" }}>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px", minWidth: "0" }}>
              <nav aria-label="Breadcrumb">
                <p className="crumbs">
                  <Link href="/">Home</Link>
                  <span aria-hidden="true">/</span>
                  <Link href="/work">Work</Link>
                  <span aria-hidden="true">/</span>
                  <span aria-current="page">Lead assistant</span>
                </p>
              </nav>
              <p className="rise d1 eyebrow-n" style={{ margin: "8px 0 0" }}>EXAMPLE BUILD · AI AUTOMATION</p>
              <h1 className="rise d2 h1 h1-s" style={{ maxWidth: "12em" }}>A lead assistant that never clocks off.</h1>
              <p className="rise d3 lede">
                An assistant that answers enquiries from Instagram, WhatsApp and the website, asks the right questions, books the call and hands over to a person whenever it matters.
              </p>
            </div>
            <dl className="kv rise d4" style={{ margin: "clamp(40px, 5vw, 64px) 0 0" }}>
              <div><dt>CLIENT</dt><dd>[Client name, with permission]</dd></div>
              <div><dt>INDUSTRY</dt><dd>[Industry]</dd></div>
              <div><dt>SERVICES</dt><dd>AI automation · Marketing automation</dd></div>
              <div><dt>CHANNELS</dt><dd>Instagram · WhatsApp · Website</dd></div>
              <div><dt>TIMELINE</dt><dd>[Number] weeks</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <section className="s03" style={{ padding: "clamp(24px, 3vw, 40px) clamp(8px, 2vw, 32px) 0" }}>
        <div className="reveal-media" style={{ position: "relative", maxWidth: "1376px", margin: "0 auto", height: "clamp(360px, 46vw, 680px)", borderRadius: "32px", overflow: "hidden" }}>
          <Image src="/images/lead-assistant.jpg" alt="Hands typing on a laptop beside a phone showing a customer chat, a petrol mug and a terracotta notebook" fill sizes="(max-width: 1440px) 100vw, 1376px" style={{ objectFit: "cover" }} priority />
          <span className="ph-notch" style={{ width: "10%", background: "var(--canvas)" }} />
          <span className="ph-dot" style={{ width: "2.4%", top: "3.4%", right: "3.8%" }} />
        </div>
      </section>
      <section className="wrap sec" style={{ paddingTop: "clamp(72px, 8vw, 120px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "48px clamp(40px, 6vw, 96px)", alignItems: "start" }}>
          <aside className="sv" style={{ alignSelf: "stretch" }}>
            <nav className="toc" aria-label="On this page">
              <p className="eyebrow-n" style={{ margin: "0 0 12px 12px" }}>ON THIS PAGE</p>
              <a href="#challenge">The challenge</a>
              <a href="#built">What we built</a>
              <a href="#how">How it works</a>
              <a href="#results">Results</a>
            </nav>
          </aside>
          <div className="span2" style={{ display: "flex", flexDirection: "column", gap: "clamp(64px, 7vw, 96px)", minWidth: "0" }}>
            <div id="challenge" className="sv prose" style={{ scrollMarginTop: "96px" }}>
              <p className="eyebrow-n">01 — THE CHALLENGE</p>
              <h2 style={{ marginTop: ".4em" }}>Leads arrived at night. Replies arrived the next afternoon.</h2>
              <p>
                Most enquiries came in through Instagram and WhatsApp after working hours. By the time someone replied, many of those people had already booked with a competitor that answered first.
              </p>
              <p>[Add the client’s own situation here: volume of enquiries, team size, what they had tried before.]</p>
            </div>
            <div id="built" className="sv prose" style={{ scrollMarginTop: "96px" }}>
              <p className="eyebrow-n">02 — WHAT WE BUILT</p>
              <h2 style={{ marginTop: ".4em" }}>One assistant, three channels, one pipeline.</h2>
              <ul>
                <li>
                  <strong>An assistant</strong>
                  {" trained only on the business’s approved answers: services, prices, areas covered and policies."}
                </li>
                <li>
                  <strong>Three qualifying questions</strong>
                  {" asked naturally in the conversation, so the team knows who to call first."}
                </li>
                <li><strong>A CRM pipeline</strong>{" where every conversation lands with its source, answers and a score."}</li>
                <li><strong>A booking step</strong>{" that offers real calendar slots, plus reminders before the call."}</li>
                <li>
                  <strong>Clear handover rules:</strong>
                  {" complaints, pricing exceptions and anything unusual go straight to a person."}
                </li>
              </ul>
            </div>
            <div id="how" className="sv" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "32px", alignItems: "center", scrollMarginTop: "96px" }}>
              <div className="prose">
                <p className="eyebrow-n">03 — HOW IT WORKS</p>
                <h2 style={{ marginTop: ".4em" }}>A person is always one step away.</h2>
                <p>
                  The assistant handles the first reply and the routine questions. The moment a conversation needs judgement, it says so and passes it to the team with the full history attached.
                </p>
              </div>
              <div className="motif" style={{ containerType: "inline-size", aspectRatio: "1 / 1", background: "var(--systems)", color: "#f4f1ea", borderRadius: "var(--radius-xl)" }}>
                <div style={{ position: "absolute", inset: "10% 8%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 4px 10px" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "rgba(244,241,234,.6)" }}>new-lead.flow</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-mono)", fontSize: "12px", color: "#d4af37" }}>
                      <span className="live" style={{ width: "7px", height: "7px", borderRadius: "999px", background: "#d4af37" }} />
                      running
                    </span>
                  </div>
                  <div className="flow-step flow-01" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "12px", background: "rgba(244,241,234,.04)", boxShadow: "inset 0 0 0 1px rgba(244,241,234,.10)" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#d4af37", width: "92px", flex: "none" }}>
                      01 · trigger
                    </span>
                    <span style={{ fontSize: "14px", color: "#f4f1ea" }}>Enquiry arrives on Instagram</span>
                  </div>
                  <div className="flow-step flow-02" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "12px", background: "rgba(244,241,234,.04)", boxShadow: "inset 0 0 0 1px rgba(244,241,234,.10)" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#d4af37", width: "92px", flex: "none" }}>
                      02 · ai
                    </span>
                    <span style={{ fontSize: "14px", color: "#f4f1ea" }}>Assistant replies in seconds</span>
                  </div>
                  <div className="flow-step flow-03" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "12px", background: "rgba(244,241,234,.04)", boxShadow: "inset 0 0 0 1px rgba(244,241,234,.10)" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#d4af37", width: "92px", flex: "none" }}>
                      03 · qualify
                    </span>
                    <span style={{ fontSize: "14px", color: "#f4f1ea" }}>Asks budget, timing, location</span>
                  </div>
                  <div className="flow-step flow-04" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "12px", background: "rgba(244,241,234,.04)", boxShadow: "inset 0 0 0 1px rgba(244,241,234,.10)" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#d4af37", width: "92px", flex: "none" }}>
                      04 · crm
                    </span>
                    <span style={{ fontSize: "14px", color: "#f4f1ea" }}>Lead scored and added to CRM</span>
                  </div>
                  <div className="flow-step flow-04" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "12px", background: "rgba(244,241,234,.04)", boxShadow: "inset 0 0 0 1px rgba(244,241,234,.10)" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#d4af37", width: "92px", flex: "none" }}>
                      05 · handover
                    </span>
                    <span style={{ fontSize: "14px", color: "#f4f1ea" }}>Call booked, team notified</span>
                  </div>
                </div>
                <span className="ph-notch" style={{ background: "var(--canvas)" }} />
                <span className="ph-dot" />
              </div>
            </div>
            <div id="results" className="sv" style={{ scrollMarginTop: "96px", display: "flex", flexDirection: "column", gap: "28px" }}>
              <div className="prose"><p className="eyebrow-n">04 — RESULTS</p><h2 style={{ marginTop: ".4em" }}>What changed.</h2></div>
              <div className="oc-night oc-systems" style={{ position: "relative", overflow: "hidden", borderRadius: "var(--radius-xl)", background: "var(--systems)", color: "var(--on-systems)", padding: "clamp(28px, 4vw, 48px)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 130px), 1fr))", gap: "32px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div className="stat-line"><span /></div>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 4vw, 56px)", lineHeight: "1", letterSpacing: "-0.03em" }}>
                      [—]
                    </span>
                    <span style={{ fontSize: "15px", lineHeight: "1.5", color: "var(--on-systems-muted)" }}>
                      Time to first reply, before and after
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div className="stat-line"><span /></div>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 4vw, 56px)", lineHeight: "1", letterSpacing: "-0.03em" }}>
                      [—]
                    </span>
                    <span style={{ fontSize: "15px", lineHeight: "1.5", color: "var(--on-systems-muted)" }}>
                      Enquiries answered outside working hours
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div className="stat-line"><span /></div>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 4vw, 56px)", lineHeight: "1", letterSpacing: "-0.03em" }}>
                      [—]
                    </span>
                    <span style={{ fontSize: "15px", lineHeight: "1.5", color: "var(--on-systems-muted)" }}>Calls booked per month</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div className="stat-line"><span /></div>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 4vw, 56px)", lineHeight: "1", letterSpacing: "-0.03em" }}>
                      [—]
                    </span>
                    <span style={{ fontSize: "15px", lineHeight: "1.5", color: "var(--on-systems-muted)" }}>Team hours saved per week</span>
                  </div>
                </div>
              </div>
              <div className="note">
                <span style={{ color: "var(--gold-text)", display: "inline-flex", paddingTop: "2px" }}>
                  <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M5 12.5 10 17.5 19 7" />
                  </svg>
                </span>
                <span>
                  <b>Add real numbers only.</b>
                  {" Replace the brackets with figures the client has approved in writing, measured over the same period before and after launch."}
                </span>
              </div>
            </div>
            <figure className="sv oc-studio-tint" style={{ margin: "0", padding: "clamp(28px, 4vw, 48px)", borderRadius: "var(--radius-xl)", background: "var(--studio-tint)", display: "flex", flexDirection: "column", gap: "24px" }}>
              <span aria-hidden="true" style={{ fontFamily: "var(--font-display)", fontSize: "72px", lineHeight: ".6", color: "var(--studio-text)" }}>
                “
              </span>
              <blockquote style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "clamp(24px, 2.4vw, 32px)", lineHeight: "1.3", letterSpacing: "-0.01em" }}>
                [Client quote about the result, used with their written permission.]
              </blockquote>
              <figcaption style={{ fontSize: "15px", color: "var(--studio-text)" }}>[Name], [Role], [Company]</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="wrap sec" aria-label="Next example">
        <Link href="/work" className="case sv oc-night" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "24px 48px", alignItems: "center", padding: "clamp(20px, 3vw, 32px)", borderRadius: "var(--radius-xl)", background: "var(--ink)", color: "var(--on-night)", textDecoration: "none" }}>
          <div className="ph" style={{ aspectRatio: "16 / 9", borderRadius: "var(--radius-lg)" }}>
            <Image src="/images/packing-studio.jpg" alt="An online store founder in a terracotta apron packing an order next to a tablet showing an order dashboard" fill sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 600px" style={{ objectFit: "cover" }} />
            <span className="ph-notch" style={{ background: "var(--ink)" }} />
            <span className="ph-dot" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>NEXT EXAMPLE</p>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 40px)", lineHeight: "1.1", fontWeight: "500" }}>
              Reorder and review flows for an online store
            </span>
            <span className="more" style={{ color: "var(--gold)" }}>
              {"Next build "}
              <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        </Link>
      </section>
      <section aria-label="Start" style={{ padding: "clamp(96px, 11vw, 160px) clamp(8px, 2vw, 32px) 0" }}>
        <div className="oc-night band" style={{ background: "var(--night)", color: "var(--on-night)", padding: "clamp(64px, 8vw, 128px) clamp(24px, 6vw, 96px)" }}>
          <svg className="wm-mark para" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-40px", top: "50%", marginTop: "-300px", width: "600px", height: "600px", color: "rgba(244, 241, 234, 0.06)" }}>
            <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
          </svg>
          <div className="sv" style={{ position: "relative", maxWidth: "720px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>WANT ONE?</p>
            <h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "500", fontSize: "clamp(40px, 5.4vw, 80px)", lineHeight: "1", letterSpacing: "-0.035em" }}>
              {"Your own assistant, "}
              <span style={{ color: "var(--gold)" }}>live in weeks.</span>
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

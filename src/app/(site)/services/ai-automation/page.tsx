import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, faqLd, pageMeta, serviceLd, webPageLd } from '@/lib/seo';

export const metadata: Metadata = pageMeta("/services/ai-automation");

export default function Page() {
  return (
    <>
      <JsonLd data={[webPageLd("/services/ai-automation"), breadcrumbLd("/services/ai-automation"), faqLd([{"q": "Will it say something wrong?", "a": "It only answers from information you approve, and it hands over to a person when it is unsure or when a topic is on the off-limits list."}, {"q": "Will customers know they are talking to AI?", "a": "Yes. We recommend it says so up front. It builds trust, and in many places it is required."}, {"q": "What happens to our data?", "a": "We set up business accounts, keep data to what the assistant needs, and document where it is stored and who can see it."}, {"q": "Do we need a developer?", "a": "No. We build, connect and maintain it. Your team gets a short guide for updating answers."}]), serviceLd("/services/ai-automation", "AI automation", "AI chatbot and workflow automation", ["Chat assistant", "Lead qualification", "Drafting workflows", "Your knowledge base", "Guardrails", "Monthly review"])]} />
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
                    <span aria-current="page">AI automation</span>
                  </p>
                </nav>
                <p className="rise d1 eyebrow-n" style={{ margin: "8px 0 0" }}>01 — SYSTEMS</p>
                <h1 className="rise d2 h1 h1-s" style={{ maxWidth: "12em" }}>
                  AI that answers, sorts and drafts, with a person in the loop.
                </h1>
                <p className="rise d3 lede">
                  Assistants and workflows trained on your own business information. First replies, lead sorting and routine drafts happen on their own, and your team handles what needs a human.
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
                  <div className="ph" style={{ aspectRatio: "4 / 5" }}>
                    <Image src="/images/lead-assistant.jpg" alt="Hands typing on a laptop beside a phone showing a customer chat, a petrol mug and a terracotta notebook" fill sizes="(max-width: 900px) 100vw, 600px" style={{ objectFit: "cover" }} priority />
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
              Enquiries wait hours for a first reply, and the lead goes cold.
            </p>
          </div>
          <div className="sv card" style={{ padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: "28px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--systems-text)" }}>02</span>
            <p style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2vw, 27px)", lineHeight: "1.3", fontWeight: "400", letterSpacing: "-0.01em" }}>
              Your team answers the same ten questions every single day.
            </p>
          </div>
          <div className="sv card" style={{ padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: "28px" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--systems-text)" }}>03</span>
            <p style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2vw, 27px)", lineHeight: "1.3", fontWeight: "400", letterSpacing: "-0.01em" }}>
              AI tools get bought, tried once and quietly forgotten.
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
              <h3 className="h3" style={{ fontSize: "23px" }}>Chat assistant</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                On your website, Instagram and WhatsApp. Answers questions and captures contact details.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(18, 66, 74, 0.18)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--systems)", color: "var(--on-systems)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Lead qualification</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Asks the right questions, scores each lead and routes it to the right person.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(18, 66, 74, 0.18)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--systems)", color: "var(--on-systems)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Drafting workflows</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Posts, emails and replies drafted for a person to approve, in your voice.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(18, 66, 74, 0.18)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--systems)", color: "var(--on-systems)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Your knowledge base</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Trained on your services, prices and policies, and nothing you have not approved.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(18, 66, 74, 0.18)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--systems)", color: "var(--on-systems)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Guardrails</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Clear rules on what it will not say, and when it hands over to a person.
              </p>
            </div>
            <div className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 0", borderTop: "1px solid rgba(18, 66, 74, 0.18)" }}>
              <span style={{ display: "inline-flex", width: "40px", height: "40px", alignItems: "center", justifyContent: "center", borderRadius: "12px", background: "var(--systems)", color: "var(--on-systems)" }}>
                <svg className="oc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12.5 10 17.5 19 7" />
                </svg>
              </span>
              <h3 className="h3" style={{ fontSize: "23px" }}>Monthly review</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                We read real conversations, fix weak answers and report what changed.
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
                Map
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                We list the questions, decisions and hand-offs that eat your team’s day.
              </p>
            </li>
            <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "16px", height: "16px", borderRadius: "999px", background: "var(--canvas)", boxShadow: "inset 0 0 0 2px #d4af37" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)", marginTop: "12px" }}>02</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "28px", lineHeight: "1.15", fontWeight: "500" }}>
                Train
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                We build on your own documents, prices and tone of voice.
              </p>
            </li>
            <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "16px", height: "16px", borderRadius: "999px", background: "var(--canvas)", boxShadow: "inset 0 0 0 2px #d4af37" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)", marginTop: "12px" }}>03</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "28px", lineHeight: "1.15", fontWeight: "500" }}>
                Test
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                It runs against real past enquiries before a customer ever sees it.
              </p>
            </li>
            <li className="sv" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ width: "16px", height: "16px", borderRadius: "999px", background: "var(--canvas)", boxShadow: "inset 0 0 0 2px #d4af37" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--gold-text)", marginTop: "12px" }}>04</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "28px", lineHeight: "1.15", fontWeight: "500" }}>
                Run
              </h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                Launch, monitor and improve monthly, with a person always in the loop.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section className="wrap sec" aria-label="Example build">
        <Link href="/work/lead-assistant" className="case" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "32px clamp(40px, 6vw, 96px)", alignItems: "center", textDecoration: "none", color: "var(--ink)" }}>
          <div className="sv">
            <div className="ph" style={{ aspectRatio: "16 / 11" }}>
              <Image src="/images/lead-assistant.jpg" alt="Hands typing on a laptop beside a phone showing a customer chat, a petrol mug and a terracotta notebook" fill sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 600px" style={{ objectFit: "cover" }} />
              <span className="ph-notch" style={{ background: "var(--canvas)" }} />
              <span className="ph-dot" />
            </div>
          </div>
          <div className="sv2" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "20px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>WHAT WE BUILD</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <span className="oc-tag oc-tag-systems">AI automation</span>
              <span className="oc-tag oc-tag-outline">Example build</span>
            </div>
            <h2 className="h2" style={{ fontSize: "clamp(32px, 3.4vw, 48px)" }}>A lead assistant that never clocks off</h2>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
              Answers enquiries from Instagram, WhatsApp and your website, asks the right questions and books the call. A person takes over whenever it matters.
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
            <span className="tchip"><i aria-hidden="true" />OpenAI</span>
            <span className="tchip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path className="tl-mono" d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
              </svg>
              Claude
            </span>
            <span className="tchip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path className="tl-mono" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Business
            </span>
            <span className="tchip">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path className="tl-mono" d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z" />
              </svg>
              HubSpot
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
                <span>Will it say something wrong?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>
                It only answers from information you approve, and it hands over to a person when it is unsure or when a topic is on the off-limits list.
              </p>
            </details>
            <details>
              <summary>
                <span>Will customers know they are talking to AI?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>Yes. We recommend it says so up front. It builds trust, and in many places it is required.</p>
            </details>
            <details>
              <summary>
                <span>What happens to our data?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>We set up business accounts, keep data to what the assistant needs, and document where it is stored and who can see it.</p>
            </details>
            <details>
              <summary>
                <span>Do we need a developer?</span>
                <span className="pm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" style={{ width: "18px", height: "18px" }}>
                    <path d="M12 5v14M5 12h14" style={{ fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }} />
                  </svg>
                </span>
              </summary>
              <p>No. We build, connect and maintain it. Your team gets a short guide for updating answers.</p>
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

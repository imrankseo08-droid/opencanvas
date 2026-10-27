import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { articleLd, breadcrumbLd, ogImage, pageMeta, webPageLd } from '@/lib/seo';
import { routeByPath } from '@/lib/routes';

export const metadata: Metadata = pageMeta("/insights/what-to-automate-first");

export default function Page() {
  return (
    <>
      <JsonLd data={[webPageLd("/insights/what-to-automate-first"), breadcrumbLd("/insights/what-to-automate-first"), articleLd("/insights/what-to-automate-first", "What to automate first: five follow-ups every small business should run.", ogImage(routeByPath["/insights/what-to-automate-first"]))]} />
      <section className="s01" style={{ position: "relative", overflow: "clip" }}>
        <svg className="wm-mark wm-soft" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-220px", top: "-60px", width: "640px", height: "640px", color: "rgba(13, 13, 13, 0.035)" }}>
          <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
        </svg>
        <div className="wrap" style={{ position: "relative", paddingTop: "clamp(56px, 7vw, 104px)", paddingBottom: "clamp(24px, 3vw, 40px)" }}>
          <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px", minWidth: "0" }}>
            <nav aria-label="Breadcrumb">
              <p className="crumbs">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <Link href="/insights">Insights</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Marketing automation</span>
              </p>
            </nav>
            <p className="rise d1 eyebrow-n" style={{ margin: "8px 0 0" }}>MARKETING AUTOMATION</p>
            <h1 className="rise d2 h1 h1-s" style={{ maxWidth: "12em" }}>
              What to automate first: five follow-ups every small business should run.
            </h1>
            <p className="rise d3 lede">
              Most leads aren’t lost to competitors. They’re lost to silence. Here are the five follow-ups we set up first, in order.
            </p>
          </div>
        </div>
      </section>
      <div className="wrap" style={{ paddingBottom: "8px" }}>
        <div className="rise d4" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 24px", fontSize: "15px", color: "var(--ink-soft)" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}>
            <Image src="/images/imran-khan-founder.jpg" alt="" width={88} height={88} style={{ width: "44px", height: "44px", borderRadius: "999px", objectFit: "cover" }} />
            <span><b style={{ fontWeight: "600", color: "var(--ink)" }}>Imran Khan</b><br />Founder, Open Canvas</span>
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: ".06em" }}>7 MIN READ · [PUBLISH DATE]</span>
        </div>
      </div>
      <section style={{ padding: "clamp(32px, 4vw, 48px) clamp(8px, 2vw, 32px) 0" }}>
        <div className="reveal-media" style={{ maxWidth: "1376px", margin: "0 auto" }}>
          <div className="motif" style={{ containerType: "inline-size", aspectRatio: "21 / 8", background: "var(--systems)", color: "#f4f1ea", borderRadius: "var(--radius-xl)" }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", width: "min(84%, 600px)", transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 4px 10px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "rgba(244,241,234,.6)" }}>first-five.flow</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-mono)", fontSize: "12px", color: "#d4af37" }}>
                  <span className="live" style={{ width: "7px", height: "7px", borderRadius: "999px", background: "#d4af37" }} />
                  running
                </span>
              </div>
              <div className="flow-step flow-01" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "12px", background: "rgba(244,241,234,.04)", boxShadow: "inset 0 0 0 1px rgba(244,241,234,.10)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#d4af37", width: "92px", flex: "none" }}>
                  01 · reply
                </span>
                <span style={{ fontSize: "14px", color: "#f4f1ea" }}>Instant reply to every enquiry</span>
              </div>
              <div className="flow-step flow-02" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "12px", background: "rgba(244,241,234,.04)", boxShadow: "inset 0 0 0 1px rgba(244,241,234,.10)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#d4af37", width: "92px", flex: "none" }}>
                  02 · remind
                </span>
                <span style={{ fontSize: "14px", color: "#f4f1ea" }}>Reminder before every booking</span>
              </div>
              <div className="flow-step flow-03" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "12px", background: "rgba(244,241,234,.04)", boxShadow: "inset 0 0 0 1px rgba(244,241,234,.10)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#d4af37", width: "92px", flex: "none" }}>
                  03 · chase
                </span>
                <span style={{ fontSize: "14px", color: "#f4f1ea" }}>Quote follow-up after 3 days</span>
              </div>
              <div className="flow-step flow-04" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "12px", background: "rgba(244,241,234,.04)", boxShadow: "inset 0 0 0 1px rgba(244,241,234,.10)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#d4af37", width: "92px", flex: "none" }}>
                  04 · review
                </span>
                <span style={{ fontSize: "14px", color: "#f4f1ea" }}>Review request after delivery</span>
              </div>
              <div className="flow-step flow-04" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 12px", borderRadius: "12px", background: "rgba(244,241,234,.04)", boxShadow: "inset 0 0 0 1px rgba(244,241,234,.10)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#d4af37", width: "92px", flex: "none" }}>
                  05 · win-back
                </span>
                <span style={{ fontSize: "14px", color: "#f4f1ea" }}>Check-in after 90 quiet days</span>
              </div>
            </div>
            <span className="ph-notch" style={{ background: "var(--canvas)", width: "9%" }} />
            <span className="ph-dot" style={{ width: "2.2%", top: "3.6%", right: "3.6%" }} />
          </div>
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: "clamp(56px, 6vw, 96px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 220px) minmax(0, 720px)", justifyContent: "space-between", gap: "48px" }} className="art-grid">
          <aside style={{ alignSelf: "stretch" }}>
            <div className="toc" style={{ gap: "8px" }}>
              <p className="eyebrow-n" style={{ margin: "0" }}>SHARE</p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <a href="#" style={{ paddingLeft: "0" }}>Share on LinkedIn</a>
                <a href="#" style={{ paddingLeft: "0" }}>Send on WhatsApp</a>
                <a href="#" style={{ paddingLeft: "0" }}>Copy link</a>
              </div>
            </div>
          </aside>
          <article style={{ minWidth: "0" }}>
            <div className="prose">
              <p style={{ fontSize: "21px", lineHeight: "1.65" }}>
                Most small businesses don’t lose leads to competitors. They lose them to silence: the reply that comes a day late, the quote nobody chases, the happy customer nobody asks for a review. These are follow-ups, and follow-ups are the easiest part of marketing to automate.
              </p>
              <p>Here are the five we set up first for almost every client, in the order we set them up.</p>
              <h2>1. The instant reply</h2>
              <p>
                When someone enquires, they are often contacting two or three businesses at once. The first useful reply usually wins. Set up a reply that goes out within a minute, on the channel they used, that:
              </p>
              <ul>
                <li>confirms you received the message,</li>
                <li>says when a person will be in touch, and</li>
                <li>asks one question that helps you prepare.</li>
              </ul>
              <p>Sign it with a real name. It is still a person’s business, even when the first message is automatic.</p>
              <h2>2. The booking reminder</h2>
              <p>
                No-shows cost more than they look: the slot, the preparation and the follow-up to rebook. Send one reminder a day before and another two hours before, each with a one-tap way to reschedule. Making it easy to move a booking is what stops people from simply not turning up.
              </p>
              <h2>3. The quote chaser</h2>
              <p>
                Most quotes aren’t rejected. They are forgotten. Three days after sending a quote, send a short check-in that offers to answer questions. A week later, send a final note with a real reason to decide, such as limited availability. Stop the moment they reply.
              </p>
              <figure style={{ margin: "2em 0", padding: "8px 0 8px 28px", borderLeft: "3px solid #d4af37" }}>
                <blockquote style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "clamp(26px, 2.6vw, 34px)", lineHeight: "1.25", letterSpacing: "-0.015em" }}>
                  Most leads aren’t lost to competitors. They’re lost to silence.
                </blockquote>
              </figure>
              <h2>4. The review request</h2>
              <p>
                Ask when the customer is happiest: right after delivery or a good result, not a month later. Send everyone the same simple request with one link. Don’t offer rewards for reviews, which most review platforms forbid. If someone replies with a problem, make sure a person follows up the same day.
              </p>
              <h2>5. The win-back</h2>
              <p>
                Customers who bought once and went quiet are the cheapest to bring back. After [90] days without contact, send something useful: a reminder that it’s time to reorder, a seasonal tip, or a new service that fits what they bought. Save discounts for when they are genuinely needed.
              </p>
              <h2>What not to automate</h2>
              <p>
                Complaints, refunds, price negotiations and anything emotional. Automation should get a person to the conversation faster, never stand in for them.
              </p>
              <h2>How to tell it’s working</h2>
              <p>
                {"Track three numbers once a month: "}
                <strong>time to first reply</strong>
                {", "}
                <strong>quotes that turn into sales</strong>
                {", and "}
                <strong>new reviews</strong>
                . If all three move in the right direction, your follow-ups are doing their job.
              </p>
            </div>
            <div className="sv" style={{ marginTop: "48px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "20px 32px", alignItems: "center", padding: "clamp(24px, 3vw, 36px)", borderRadius: "var(--radius-xl)", background: "var(--sage)", color: "var(--on-sage)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <p className="eyebrow-n" style={{ margin: "0", color: "var(--on-sage)" }}>FREE · PDF</p>
                <p style={{ margin: "0", fontFamily: "var(--font-display)", fontSize: "24px", lineHeight: "1.25" }}>
                  Get the full 10-point marketing automation checklist.
                </p>
              </div>
              <div>
                <Link href="/#checklist" className="oc-btn oc-btn-primary oc-btn-md">
                  <span>Send me the checklist</span>
                  <svg className="oc-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="sv" style={{ marginTop: "48px", display: "flex", gap: "20px", alignItems: "flex-start", paddingTop: "32px", borderTop: "1px solid var(--line)" }}>
              <Image src="/images/imran-khan-founder.jpg" alt="Imran Khan" width={144} height={144} style={{ width: "72px", height: "72px", borderRadius: "999px", objectFit: "cover", flex: "none" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: "500" }}>Imran Khan</span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--ink-soft)" }}>
                  Founder of Open Canvas Marketing. Designs brands and builds the systems behind them. [One more line about your expertise.]
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="wrap sec" aria-label="Keep reading">
        <div className="sv" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px 48px", marginBottom: "clamp(40px, 5vw, 64px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "680px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>KEEP READING</p>
            <h2 className="h2">More from Insights.</h2>
          </div>
          <Link href="/insights" className="oc-btn oc-btn-outline oc-btn-md">
            <span>All articles</span>
            <svg className="oc-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "56px 32px" }}>
          <Link href="/insights/what-to-automate-first" className="case sv" style={{ display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "var(--ink)" }}>
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
          <Link href="/insights/what-to-automate-first" className="case sv" style={{ display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "var(--ink)" }}>
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
          <Link href="/insights/what-to-automate-first" className="case sv" style={{ display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "var(--ink)" }}>
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
      <section aria-label="Start" style={{ padding: "clamp(96px, 11vw, 160px) clamp(8px, 2vw, 32px) 0" }}>
        <div className="oc-night band" style={{ background: "var(--night)", color: "var(--on-night)", padding: "clamp(64px, 8vw, 128px) clamp(24px, 6vw, 96px)" }}>
          <svg className="wm-mark para" viewBox="28 28 200 200" aria-hidden="true" style={{ right: "-40px", top: "50%", marginTop: "-300px", width: "600px", height: "600px", color: "rgba(244, 241, 234, 0.06)" }}>
            <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" />
          </svg>
          <div className="sv" style={{ position: "relative", maxWidth: "720px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px" }}>
            <p className="eyebrow-n" style={{ margin: "0" }}>SKIP THE DIY?</p>
            <h2 style={{ margin: "0", fontFamily: "var(--font-display)", fontWeight: "500", fontSize: "clamp(40px, 5.4vw, 80px)", lineHeight: "1", letterSpacing: "-0.035em" }}>
              {"We’ll set these up "}
              <span style={{ color: "var(--gold)" }}>for you.</span>
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

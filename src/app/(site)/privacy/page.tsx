import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, pageMeta, webPageLd } from '@/lib/seo';

export const metadata: Metadata = pageMeta("/privacy");

export default function Page() {
  return (
    <>
      <JsonLd data={[webPageLd("/privacy"), breadcrumbLd("/privacy")]} />
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
                <span aria-current="page">Privacy policy</span>
              </p>
            </nav>
            <p className="rise d1 eyebrow-n" style={{ margin: "8px 0 0" }}>LEGAL · LAST UPDATED [DATE]</p>
            <h1 className="rise d2 h1" style={{ maxWidth: "12em" }}>Privacy policy</h1>
            <p className="rise d3 lede">
              What we collect, why we collect it, and the choices you have. Written to be read, not skimmed past.
            </p>
          </div>
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: "clamp(32px, 4vw, 56px)" }}>
        <div className="note sv" style={{ marginBottom: "56px" }}>
          <span style={{ color: "var(--gold-text)", display: "inline-flex", paddingTop: "2px" }}>
            <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M5 12.5 10 17.5 19 7" />
            </svg>
          </span>
          <span>
            <b>Draft for review.</b>
            {" This page is a plain-language starting point, not legal advice. Have a qualified lawyer in Pakistan review it before the site goes live, and replace everything in brackets."}
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 260px) minmax(0, 720px)", justifyContent: "space-between", gap: "48px" }} className="art-grid">
          <aside style={{ alignSelf: "stretch" }}>
            <nav className="toc" aria-label="Sections">
              <p className="eyebrow-n" style={{ margin: "0 0 12px 12px" }}>ON THIS PAGE</p>
              <a href="#s1">1. Who we are</a>
              <a href="#s2">2. What we collect</a>
              <a href="#s3">3. How we use it</a>
              <a href="#s4">4. Legal basis</a>
              <a href="#s5">5. Who we share it with</a>
              <a href="#s6">6. How long we keep it</a>
              <a href="#s7">7. Your rights</a>
              <a href="#s8">8. Cookies</a>
              <a href="#s9">9. Changes and contact</a>
            </nav>
          </aside>
          <article className="prose legal" style={{ minWidth: "0" }}>
            <h2 id="s1">1. Who we are</h2>
            <p>
              {"Open Canvas Marketing (“we”, “us”) is a digital marketing studio based in "}{site.location}{". We are responsible for the personal information collected through this website. Contact: "}{site.email}.
            </p>
            <h2 id="s2">2. What we collect</h2>
            <ul>
              <li>
                <strong>Information you give us:</strong>
                {" your name, email, company website and message when you book an audit, request the checklist or subscribe."}
              </li>
              <li>
                <strong>Usage information:</strong>
                {" pages visited, device and browser type, and approximate location, collected through analytics if you agree to it."}
              </li>
              <li><strong>Messages:</strong>{" anything you send us by email, WhatsApp or social media."}</li>
            </ul>
            <h2 id="s3">3. How we use it</h2>
            <ul>
              <li>To reply to you and run the audit you asked for.</li>
              <li>To send the checklist and, if you subscribed, our monthly email.</li>
              <li>To understand how the site is used and improve it.</li>
              <li>To keep records we are required to keep by law.</li>
            </ul>
            <p>We do not sell your personal information.</p>
            <h2 id="s4">4. Legal basis</h2>
            <p>
              [Describe the legal bases that apply in your country, for example consent for marketing emails and analytics, and legitimate interest or contract for replying to enquiries and delivering work.]
            </p>
            <h2 id="s5">5. Who we share it with</h2>
            <p>
              Only with service providers who help us run the business, such as our email platform, CRM, analytics and hosting providers: [list them]. They process information on our instructions and must keep it secure.
            </p>
            <h2 id="s6">6. How long we keep it</h2>
            <p>
              Enquiries we don’t turn into work: [12] months. Client records: as long as the law requires, usually [number] years. Newsletter subscribers: until you unsubscribe.
            </p>
            <h2 id="s7">7. Your rights</h2>
            <p>
              {"You can ask to see, correct or delete the information we hold about you, or object to how we use it. Write to "}{site.email}{" and we will reply within [30] days. You can unsubscribe from emails at any time using the link in every email."}
            </p>
            <h2 id="s8">8. Cookies</h2>
            <p>
              We use essential cookies to make the site work and, only with your consent, analytics cookies to understand how it is used. You can change your choice at any time from the cookie settings link in the footer.
            </p>
            <h2 id="s9">9. Changes and contact</h2>
            <p>{"We will update this page if anything changes and show the date at the top. Questions? Email "}{site.email}.</p>
          </article>
        </div>
      </section>
    </>
  );
}

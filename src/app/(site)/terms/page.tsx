import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbLd, pageMeta, webPageLd } from '@/lib/seo';

export const metadata: Metadata = pageMeta("/terms");

export default function Page() {
  return (
    <>
      <JsonLd data={[webPageLd("/terms"), breadcrumbLd("/terms")]} />
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
                <span aria-current="page">Terms of service</span>
              </p>
            </nav>
            <p className="rise d1 eyebrow-n" style={{ margin: "8px 0 0" }}>LEGAL · LAST UPDATED [DATE]</p>
            <h1 className="rise d2 h1" style={{ maxWidth: "12em" }}>Terms of service</h1>
            <p className="rise d3 lede">
              How we work together, in plain language: scope, payment, ownership and what happens if plans change.
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
              <a href="#s1">1. About these terms</a>
              <a href="#s2">2. Our services</a>
              <a href="#s3">3. Scope and changes</a>
              <a href="#s4">4. Payments</a>
              <a href="#s5">5. Your materials</a>
              <a href="#s6">6. Ownership of the work</a>
              <a href="#s7">7. Portfolio</a>
              <a href="#s8">8. Confidentiality</a>
              <a href="#s9">9. Results and liability</a>
              <a href="#s10">10. Ending an engagement</a>
              <a href="#s11">11. Governing law and contact</a>
            </nav>
          </aside>
          <article className="prose legal" style={{ minWidth: "0" }}>
            <h2 id="s1">1. About these terms</h2>
            <p>
              These terms apply when you use this website or hire Open Canvas Marketing. Each project also has its own written scope, which takes priority if anything differs.
            </p>
            <h2 id="s2">2. Our services</h2>
            <p>
              We provide AI automation, marketing automation, SEO, social media, graphic design, motion graphics and web design. What we deliver for you is described in your written scope.
            </p>
            <h2 id="s3">3. Scope and changes</h2>
            <p>
              Work starts once you approve a written scope and price. If you want to change something, we write the change down and price it before doing the work.
            </p>
            <h2 id="s4">4. Payments</h2>
            <p>
              [Your payment terms: deposit, milestones, monthly billing date, accepted methods and what happens with late payments.] Third-party costs such as ad spend and software subscriptions are paid by you directly to those providers.
            </p>
            <h2 id="s5">5. Your materials</h2>
            <p>
              You confirm you have the right to use anything you give us, such as logos, photos and text, and you let us use it to deliver the work.
            </p>
            <h2 id="s6">6. Ownership of the work</h2>
            <p>
              Once paid in full, you own the final deliverables we create for you. We keep ownership of our general methods, templates and tools. Accounts and automations are set up in your name.
            </p>
            <h2 id="s7">7. Portfolio</h2>
            <p>
              We may show finished work in our portfolio unless you ask us not to. We will never publish your results, numbers or quotes without your written permission.
            </p>
            <h2 id="s8">8. Confidentiality</h2>
            <p>We keep your business information confidential and only share it with the people and tools needed to do the work.</p>
            <h2 id="s9">9. Results and liability</h2>
            <p>
              We commit to doing the work carefully and reporting honestly. We cannot guarantee specific results such as rankings, sales or reach, because they depend on factors outside our control. [Your limitation of liability clause, reviewed by a lawyer.]
            </p>
            <h2 id="s10">10. Ending an engagement</h2>
            <p>
              Monthly work can be ended with [30] days’ written notice. You pay for work done up to that point, and we hand over files and access.
            </p>
            <h2 id="s11">11. Governing law and contact</h2>
            <p>{"These terms are governed by the laws of Pakistan. Questions? Email "}{site.email}.</p>
          </article>
        </div>
      </section>
    </>
  );
}

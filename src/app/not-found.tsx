import Link from 'next/link';
import { Header } from '@/components/Header';

export const metadata = { title: 'Page not found', robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main">
      <section style={{ position: "relative", overflow: "clip", padding: "clamp(64px, 9vw, 140px) 0 clamp(40px, 5vw, 80px)" }}>
        <div className="wrap grid2" style={{ alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "28px" }}>
            <p className="rise d1 eyebrow-n" style={{ margin: "0" }}>ERROR 404</p>
            <h1 className="rise d2 h1">This canvas is still blank.</h1>
            <p className="rise d3 lede">
              The page you were looking for has moved, or it was never painted. Here are a few good places to start instead.
            </p>
            <div className="rise d4" style={{ display: "flex", flexWrap: "wrap", gap: "12px 16px" }}>
              <Link href="/" className="oc-btn oc-btn-primary oc-btn-lg">
                <span>Back to home</span>
                <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link href="/contact" className="oc-btn oc-btn-gold oc-btn-lg">
                <span>Book a free audit</span>
                <svg className="oc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
            <nav className="rise d5" aria-label="Popular pages" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
              <Link href="/services" className="chip">Services</Link>
              <Link href="/work" className="chip">Work</Link>
              <Link href="/about" className="chip">About</Link>
              <Link href="/pricing" className="chip">Pricing</Link>
              <Link href="/insights" className="chip">Insights</Link>
            </nav>
          </div>
          <div className="rise d3" style={{ position: "relative", aspectRatio: "1", maxWidth: "520px", width: "100%", marginLeft: "auto" }}>
            <div style={{ position: "absolute", inset: "0", borderRadius: "var(--radius-xl)", background: "var(--paper)", boxShadow: "inset 0 0 0 1px var(--line)" }} />
            <svg viewBox="28 28 200 200" aria-hidden="true" style={{ position: "absolute", inset: "14%", width: "72%", height: "72%", overflow: "visible", color: "var(--ink)" }}>
              <path d="M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124" style={{ fill: "none", stroke: "currentColor", strokeWidth: "6", strokeDasharray: "14 12" }} />
            </svg>
            <span className="float-dot" style={{ position: "absolute", left: "66%", top: "2%", width: "13%", aspectRatio: "1", borderRadius: "999px", background: "#d4af37" }} />
            <span style={{ position: "absolute", left: "50%", bottom: "8%", transform: "translateX(-50%)", fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: ".08em", color: "var(--muted)", whiteSpace: "nowrap" }}>
              THE DOT IS STILL LOOKING FOR ITS PLACE
            </span>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}

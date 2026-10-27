import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

/**
 * Branded social share image (1200×630) for every page:
 *   /og?title=...&eyebrow=...
 * Used automatically in each page's Open Graph and Twitter tags.
 */
const MARK = 'M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124';

let fonts: Promise<{ name: string; data: Buffer; weight: 400 | 500; style: 'normal' }[]> | null = null;
function loadFonts() {
  if (!fonts) {
    const dir = path.join(process.cwd(), 'src/assets/og');
    fonts = Promise.all([
      readFile(path.join(dir, 'Jost-Medium.ttf')).then((data) => ({ name: 'Jost', data, weight: 500 as const, style: 'normal' as const })),
      readFile(path.join(dir, 'Jost-Regular.ttf')).then((data) => ({ name: 'Jost', data, weight: 400 as const, style: 'normal' as const })),
      readFile(path.join(dir, 'JetBrainsMono-Medium.ttf')).then((data) => ({ name: 'Mono', data, weight: 500 as const, style: 'normal' as const })),
    ]);
  }
  return fonts;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get('title') || 'Creative craft. Intelligent growth.').slice(0, 120);
  const eyebrow = (searchParams.get('eyebrow') || 'DIGITAL MARKETING STUDIO').slice(0, 60);
  const size = title.length > 70 ? 60 : title.length > 40 ? 72 : 84;

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', background: '#12424a', color: '#f4f1ea', fontFamily: 'Jost', padding: '72px 80px' }}>
        <svg width="620" height="620" viewBox="28 28 200 200" style={{ position: 'absolute', right: -150, top: -90 }}>
          <path d={MARK} fill="none" stroke="rgba(244,241,234,0.07)" strokeWidth="40" />
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <svg width="56" height="56" viewBox="28 28 200 200">
              <path d={MARK} fill="none" stroke="#f4f1ea" strokeWidth="40" />
              <circle cx="160" cy="96" r="24" fill="#d4af37" />
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 30, fontWeight: 500, letterSpacing: 1 }}>OPEN CANVAS</span>
              <span style={{ fontSize: 13, letterSpacing: 6, color: '#d4af37' }}>MARKETING</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 940 }}>
            <span style={{ fontFamily: 'Mono', fontSize: 22, letterSpacing: 2, color: '#d4af37' }}>{eyebrow}</span>
            <span style={{ fontSize: size, lineHeight: 1.05, fontWeight: 500, letterSpacing: -2 }}>{title}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 24, color: '#b8d3cf' }}>
            <span>AI automation · Marketing automation · SEO · Design · Motion · Web</span>
            <span style={{ width: 22, height: 22, borderRadius: 999, background: '#d4af37' }} />
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: await loadFonts(),
      headers: { 'Cache-Control': 'public, max-age=86400, s-maxage=31536000, stale-while-revalidate=86400' },
    },
  );
}

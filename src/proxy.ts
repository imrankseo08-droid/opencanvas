import { NextResponse, type NextRequest } from 'next/server';

/**
 * One canonical domain: sends www ↔ non-www (and any other alias domain) to the
 * address in NEXT_PUBLIC_SITE_URL with a permanent 301 redirect, so Google sees one site.
 *
 * Turned on with CANONICAL_REDIRECT=1. Leave it off if your host already does this
 * (Vercel, Cloudflare and most cPanel hosts can), or if your server passes an internal
 * host name to Node, which would cause a redirect loop.
 */
const canonical = (() => {
  try {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL || '').host;
  } catch {
    return '';
  }
})();

export function proxy(req: NextRequest) {
  const host = (req.headers.get('x-forwarded-host') || req.headers.get('host') || '').toLowerCase();
  if (process.env.CANONICAL_REDIRECT !== '1' || !canonical || !host || host === canonical || host.startsWith('localhost') || host.startsWith('127.0.0.1') || host.endsWith('.vercel.app')) {
    return NextResponse.next();
  }
  const url = new URL(req.nextUrl.pathname + req.nextUrl.search, process.env.NEXT_PUBLIC_SITE_URL);
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|api/).*)'],
};

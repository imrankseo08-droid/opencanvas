import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Lets an update keep the same build ID, so only changed files need re-uploading.
  ...(process.env.BUILD_ID_OVERRIDE ? { generateBuildId: async () => process.env.BUILD_ID_OVERRIDE as string } : {}),
  poweredByHeader: false,
  // Smaller, faster images (AVIF/WebP) generated automatically from /public/images.
  // On shared hosting (e.g. Namecheap) the image optimiser's native library may not load,
  // so IMAGES_UNOPTIMIZED=1 serves the already-compressed originals instead.
  images: { formats: ['image/avif', 'image/webp'], unoptimized: process.env.IMAGES_UNOPTIMIZED === '1' },
  // Produces .next/standalone for simple VPS / cPanel / Docker hosting (see README).
  output: process.env.STANDALONE === '1' ? 'standalone' : undefined,
  async headers() {
    return [
      { source: '/(.*)', headers: securityHeaders },
      // Photos keep their file names, so cache them for a week (not forever). To force an instant change, use a new file name.
      { source: '/images/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' }] },
      { source: '/brand/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=604800' }] },
    ];
  },
  async redirects() {
    // Common old/guessable URLs → the real pages (301, keeps any SEO value).
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/audit', destination: '/contact', permanent: true },
      { source: '/blog', destination: '/insights', permanent: true },
      { source: '/blog/:slug', destination: '/insights/:slug', permanent: true },
      { source: '/portfolio', destination: '/work', permanent: true },
      { source: '/case-studies', destination: '/work', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/terms-of-service', destination: '/terms', permanent: true },
      { source: '/terms-and-conditions', destination: '/terms', permanent: true },
      { source: '/services/ai', destination: '/services/ai-automation', permanent: true },
      { source: '/services/web-development', destination: '/services/web-design', permanent: true },
      { source: '/services/branding', destination: '/services/graphic-design', permanent: true },
      { source: '/services/social-media-marketing', destination: '/services/social-media', permanent: true },
    ];
  },
};

export default nextConfig;

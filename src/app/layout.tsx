import type { Metadata, Viewport } from 'next';
import './globals.css';
import { jost, dmSans, jetbrains } from './fonts';
import { site } from '@/lib/site';
import { Footer } from '@/components/Footer';
import { ConsentManager } from '@/components/Consent';
import { JsonLd } from '@/components/JsonLd';
import { organizationLd, websiteLd } from '@/lib/seo';

const noindex = process.env.NEXT_PUBLIC_NOINDEX === '1';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.founder.name, url: '/about' }],
  creator: site.name,
  publisher: site.name,
  category: 'marketing',
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: { siteName: site.name, locale: site.locale, type: 'website' },
  twitter: { card: 'summary_large_image' },
  robots: noindex
    ? { index: false, follow: false }
    : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.language} className={`${jost.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <JsonLd data={[organizationLd(), websiteLd()]} />
        <div
          id="top"
          className="page"
          style={{ background: 'var(--canvas)', color: 'var(--ink)', fontFamily: 'var(--font-sans)', minWidth: 0, overflowX: 'clip' }}
        >
          {children}
          <Footer />
        </div>
        <ConsentManager />
      </body>
    </html>
  );
}

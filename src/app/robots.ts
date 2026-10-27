import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';

/**
 * Set NEXT_PUBLIC_NOINDEX=1 on a staging copy to keep it out of search engines.
 * On the live site everything public is crawlable, including AI search crawlers.
 */
export default function robots(): MetadataRoute.Robots {
  if (process.env.NEXT_PUBLIC_NOINDEX === '1') {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: absoluteUrl('/sitemap.xml'),
  };
}

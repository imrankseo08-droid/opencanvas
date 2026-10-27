import type { MetadataRoute } from 'next';
import { routes, articleDates } from '@/lib/routes';
import { absoluteUrl } from '@/lib/site';

// Update this when you make site-wide content changes; article pages use their own dates.
const SITE_UPDATED = '2026-10-27';

const IMAGES: Record<string, string[]> = {
  '/': ['/images/studio-dusk.jpg', '/images/night-office.jpg', '/images/imran-khan-portrait.jpg'],
  '/about': ['/images/imran-khan-portrait.jpg', '/images/night-office.jpg'],
  '/services/ai-automation': ['/images/lead-assistant.jpg'],
  '/work': ['/images/lead-assistant.jpg', '/images/packing-studio.jpg'],
  '/work/lead-assistant': ['/images/lead-assistant.jpg'],
};

export default function sitemap(): MetadataRoute.Sitemap {
  return routes
    .filter((r) => !r.noindex)
    .map((r) => ({
      url: absoluteUrl(r.path === '/' ? '' : r.path),
      lastModified: articleDates[r.path]?.modified ?? SITE_UPDATED,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
      ...(IMAGES[r.path] ? { images: IMAGES[r.path].map((i) => absoluteUrl(i)) } : {}),
    }));
}

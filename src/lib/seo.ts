import type { Metadata } from 'next';
import { routeByPath, articleDates, type RouteInfo } from './routes';
import { site, filled, absoluteUrl, sameAs } from './site';

const ORG_ID = () => absoluteUrl('/#organization');
const SITE_ID = () => absoluteUrl('/#website');

export function ogImage(r: Pick<RouteInfo, 'ogTitle' | 'eyebrow'>) {
  return `/og?title=${encodeURIComponent(r.ogTitle)}&eyebrow=${encodeURIComponent(r.eyebrow)}`;
}

/** Full <head> metadata for a route: title, description, canonical, Open Graph, Twitter, robots. */
export function pageMeta(path: string): Metadata {
  const r = routeByPath[path];
  if (!r) throw new Error('No SEO route entry for ' + path);
  const fullTitle = r.absoluteTitle ?? `${r.title} | ${site.name}`;
  const image = { url: ogImage(r), width: 1200, height: 630, alt: r.ogTitle };
  const dates = articleDates[path];
  return {
    title: r.absoluteTitle ? { absolute: r.absoluteTitle } : r.title,
    description: r.description,
    alternates: { canonical: path },
    openGraph: {
      type: r.kind === 'article' ? 'article' : 'website',
      url: path,
      siteName: site.name,
      locale: site.locale,
      title: fullTitle,
      description: r.description,
      images: [image],
      ...(r.kind === 'article' && dates
        ? { publishedTime: dates.published, modifiedTime: dates.modified, authors: [site.founder.name] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: r.description,
      images: [image.url],
      ...(filled(site.twitterHandle) ? { site: site.twitterHandle, creator: site.twitterHandle } : {}),
    },
    robots: r.noindex ? { index: false, follow: true } : undefined,
  };
}

/* ---------------------------------------------------------------- JSON-LD */

const clean = <T extends Record<string, unknown>>(o: T): T => {
  for (const k of Object.keys(o)) {
    const v = o[k];
    if (v === undefined || v === '' || (typeof v === 'string' && !filled(v)) || (Array.isArray(v) && !v.length)) delete o[k];
  }
  return o;
};

export function organizationLd() {
  const a = site.address;
  const hasAddress = filled(a.addressLocality) && filled(a.addressCountry);
  return clean({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORG_ID(),
    name: site.name,
    alternateName: site.shortName,
    slogan: site.tagline,
    description: site.description,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/brand/icon-512.png'),
    image: absoluteUrl('/og?title=' + encodeURIComponent(site.tagline) + '&eyebrow=DIGITAL%20MARKETING%20STUDIO'),
    email: filled(site.email) ? site.email : undefined,
    telephone: filled(site.phoneE164) ? site.phoneE164 : undefined,
    areaServed: site.areaServed,
    openingHours: site.openingHours,
    founder: { '@type': 'Person', name: site.founder.name, jobTitle: site.founder.jobTitle },
    address: hasAddress
      ? clean({ '@type': 'PostalAddress', ...a })
      : undefined,
    sameAs,
    knowsAbout: [
      'AI automation', 'Marketing automation', 'Search engine optimization', 'Social media marketing',
      'Graphic design', 'Branding', 'Motion graphics', 'Web design',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital marketing services',
      itemListElement: [
        ['AI automation', '/services/ai-automation'], ['Marketing automation', '/services/marketing-automation'],
        ['SEO', '/services/seo'], ['Social media', '/services/social-media'], ['Graphic design', '/services/graphic-design'],
        ['Motion graphics', '/services/motion-graphics'], ['Web design', '/services/web-design'],
      ].map(([name, p]) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name, url: absoluteUrl(p) } })),
    },
  });
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': SITE_ID(),
    url: absoluteUrl('/'),
    name: site.name,
    description: site.description,
    inLanguage: site.language,
    publisher: { '@id': ORG_ID() },
  };
}

export function breadcrumbLd(path: string) {
  const r = routeByPath[path];
  if (!r?.crumbs) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: r.crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: absoluteUrl(c.path) })),
  };
}

export function webPageLd(path: string) {
  const r = routeByPath[path];
  const type =
    r.kind === 'about' ? 'AboutPage' : r.kind === 'contact' ? 'ContactPage' : r.kind === 'collection' ? 'CollectionPage' : 'WebPage';
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': absoluteUrl(path) + '#webpage',
    url: absoluteUrl(path),
    name: r.absoluteTitle ?? `${r.title} | ${site.name}`,
    description: r.description,
    inLanguage: site.language,
    isPartOf: { '@id': SITE_ID() },
    about: { '@id': ORG_ID() },
    primaryImageOfPage: { '@type': 'ImageObject', url: absoluteUrl(ogImage(r)) },
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function serviceLd(path: string, name: string, serviceType: string, offers: string[]) {
  const r = routeByPath[path];
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': absoluteUrl(path) + '#service',
    name,
    serviceType,
    description: r.description,
    url: absoluteUrl(path),
    provider: { '@id': ORG_ID() },
    areaServed: site.areaServed,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${name}: what's included`,
      itemListElement: offers.map((o) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: o } })),
    },
  };
}

export function articleLd(path: string, headline: string, image: string) {
  const r = routeByPath[path];
  const d = articleDates[path];
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': absoluteUrl(path) + '#article',
    mainEntityOfPage: absoluteUrl(path),
    headline,
    description: r.description,
    image: [absoluteUrl(image)],
    datePublished: d?.published,
    dateModified: d?.modified,
    inLanguage: site.language,
    author: clean({ '@type': 'Person', name: site.founder.name, jobTitle: site.founder.jobTitle, url: absoluteUrl('/about'), sameAs: filled(site.founder.linkedin) ? [site.founder.linkedin] : [] }),
    publisher: { '@id': ORG_ID() },
  };
}

export function personLd() {
  return clean({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': absoluteUrl('/about#imran-khan'),
    name: site.founder.name,
    jobTitle: site.founder.jobTitle,
    image: absoluteUrl(site.founder.image),
    worksFor: { '@id': ORG_ID() },
    url: absoluteUrl('/about'),
    sameAs: filled(site.founder.linkedin) ? [site.founder.linkedin] : [],
  });
}

export function itemListLd(path: string, items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': absoluteUrl(path) + '#list',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: absoluteUrl(it.url) })),
  };
}

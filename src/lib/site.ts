/**
 * ONE PLACE TO EDIT YOUR BUSINESS DETAILS.
 *
 * Replace every value in [brackets]. Anything still in brackets or left empty is
 * automatically left out of Google's structured data, so it never publishes a placeholder.
 * The live domain comes from NEXT_PUBLIC_SITE_URL in your .env file (see .env.example).
 */
export const site = {
  name: 'Open Canvas Marketing',
  shortName: 'Open Canvas',
  legalName: 'Open Canvas Marketing',
  tagline: 'Creative craft. Intelligent growth.',
  description:
    'Open Canvas is a digital marketing studio that designs your brand and builds the systems behind it: AI automation, marketing automation, SEO, social media, graphic design, motion graphics and web design.',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, ''),
  locale: 'en_US',
  language: 'en',

  // Contact details (shown on the site and used in structured data)
  email: 'hello@opencmarketing.com',
  whatsappDisplay: '+92 300 7288417',
  phoneE164: '+923007288417', // used for WhatsApp links and structured data
  location: 'Lahore, Pakistan',
  address: {
    streetAddress: '',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    postalCode: '',
    addressCountry: 'PK',
  },
  areaServed: 'Worldwide',
  openingHours: 'Mo-Fr 09:00-18:00',

  founder: {
    name: 'Imran Khan',
    jobTitle: 'Founder',
    image: '/images/imran-khan-founder.jpg',
    linkedin: '',
  },

  socials: {
    instagram: '',
    linkedin: '',
    behance: '',
    facebook: '',
    youtube: '',
    x: '', // e.g. https://x.com/yourhandle
  },
  twitterHandle: '', // e.g. @opencanvas

  themeColor: '#12424a',
  backgroundColor: '#f7f5f0',
};

/** True when a value has been filled in (not empty and not a [placeholder]). */
export function filled(v?: string | null): v is string {
  return !!v && !/^\[.*\]$/.test(v.trim());
}

export function absoluteUrl(path = '/') {
  return site.url + (path.startsWith('/') ? path : '/' + path);
}

export const sameAs = Object.values(site.socials).filter(filled);

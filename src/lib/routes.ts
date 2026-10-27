export type RouteInfo = {
  path: string;
  /** <title> (the " | Open Canvas Marketing" suffix is added automatically) */
  title: string;
  absoluteTitle?: string;
  description: string;
  /** Short label shown on the social share image */
  eyebrow: string;
  /** Large text on the social share image */
  ogTitle: string;
  crumbs?: { name: string; path: string }[];
  priority: number;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  noindex?: boolean;
  kind?: 'service' | 'article' | 'about' | 'contact' | 'collection' | 'page';
};

const S = (slug: string) => `/services/${slug}`;

export const services = [
  { slug: 'ai-automation', name: 'AI automation', n: '01', pillar: 'Systems' },
  { slug: 'marketing-automation', name: 'Marketing automation', n: '02', pillar: 'Systems' },
  { slug: 'seo', name: 'SEO', n: '03', pillar: 'Systems' },
  { slug: 'social-media', name: 'Social media', n: '04', pillar: 'Studio' },
  { slug: 'graphic-design', name: 'Graphic design', n: '05', pillar: 'Studio' },
  { slug: 'motion-graphics', name: 'Motion graphics', n: '06', pillar: 'Studio' },
  { slug: 'web-design', name: 'Web design', n: '07', pillar: 'Studio' },
] as const;

const home = { name: 'Home', path: '/' };
const svc = { name: 'Services', path: '/services' };

export const routes: RouteInfo[] = [
  {
    path: '/',
    title: 'Digital Marketing & AI Automation Studio',
    absoluteTitle: 'Open Canvas Marketing | AI Automation & Digital Marketing',
    description:
      'A digital marketing studio that designs your brand and builds the systems behind it: AI and marketing automation, SEO, social, design, motion and web.',
    eyebrow: 'DIGITAL MARKETING STUDIO',
    ogTitle: 'Creative craft. Intelligent growth.',
    priority: 1,
    changeFrequency: 'weekly',
  },
  {
    path: '/about',
    title: 'About Us & Founder Imran Khan',
    description:
      'One studio for the brand and the system behind it. Meet founder Imran Khan and see how Open Canvas combines creative craft with marketing automation.',
    eyebrow: 'ABOUT',
    ogTitle: 'One studio for the brand and the system behind it.',
    crumbs: [home, { name: 'About', path: '/about' }],
    priority: 0.8,
    changeFrequency: 'monthly',
    kind: 'about',
  },
  {
    path: '/services',
    title: 'Digital Marketing Services',
    description:
      'Seven services built to work together: AI automation, marketing automation, SEO, social media, graphic design, motion graphics and web design.',
    eyebrow: 'SERVICES',
    ogTitle: 'Seven services, built to work together.',
    crumbs: [home, svc],
    priority: 0.9,
    changeFrequency: 'monthly',
    kind: 'collection',
  },
  {
    path: S('ai-automation'),
    title: 'AI Automation Services',
    description:
      'AI assistants trained on your business: instant replies on WhatsApp, Instagram and your website, lead qualification and drafting, with a person in the loop.',
    eyebrow: '01 · SYSTEMS · AI AUTOMATION',
    ogTitle: 'AI that answers, sorts and drafts, with a person in the loop.',
    crumbs: [home, svc, { name: 'AI automation', path: S('ai-automation') }],
    priority: 0.9,
    changeFrequency: 'monthly',
    kind: 'service',
  },
  {
    path: S('marketing-automation'),
    title: 'Marketing Automation Services',
    description:
      'We connect your forms, ads, CRM, email and WhatsApp into one pipeline, then build follow-ups that turn enquiries into customers and customers into regulars.',
    eyebrow: '02 · SYSTEMS · MARKETING AUTOMATION',
    ogTitle: 'The follow-ups you meant to send, sent on time, every time.',
    crumbs: [home, svc, { name: 'Marketing automation', path: S('marketing-automation') }],
    priority: 0.9,
    changeFrequency: 'monthly',
    kind: 'service',
  },
  {
    path: S('seo'),
    title: 'Technical & Local SEO Services',
    description:
      'Technical fixes, local SEO and content built around what your customers actually search for, with honest monthly reporting on rankings, traffic and enquiries.',
    eyebrow: '03 · SYSTEMS · SEO',
    ogTitle: 'Be found by people already looking for you.',
    crumbs: [home, svc, { name: 'SEO', path: S('seo') }],
    priority: 0.9,
    changeFrequency: 'monthly',
    kind: 'service',
  },
  {
    path: S('social-media'),
    title: 'Social Media Management & Content',
    description:
      'Content pillars, a monthly calendar, on-brand design, reels, community management and paid social, all in a voice that sounds like you.',
    eyebrow: '04 · STUDIO · SOCIAL MEDIA',
    ogTitle: 'A feed that sounds like you, even when you’re not posting.',
    crumbs: [home, svc, { name: 'Social media', path: S('social-media') }],
    priority: 0.9,
    changeFrequency: 'monthly',
    kind: 'service',
  },
  {
    path: S('graphic-design'),
    title: 'Graphic Design & Branding',
    description:
      'Logo and identity, brand guidelines, campaign creative and editable templates designed as one system your team can keep using.',
    eyebrow: '05 · STUDIO · GRAPHIC DESIGN',
    ogTitle: 'Identity and campaigns with the system built in.',
    crumbs: [home, svc, { name: 'Graphic design', path: S('graphic-design') }],
    priority: 0.9,
    changeFrequency: 'monthly',
    kind: 'service',
  },
  {
    path: S('motion-graphics'),
    title: 'Motion Graphics & Animation',
    description:
      'Logo animations, explainer videos, reels and animated ads, all cut from one idea and delivered in every platform size.',
    eyebrow: '06 · STUDIO · MOTION GRAPHICS',
    ogTitle: 'Movement that earns attention.',
    crumbs: [home, svc, { name: 'Motion graphics', path: S('motion-graphics') }],
    priority: 0.9,
    changeFrequency: 'monthly',
    kind: 'service',
  },
  {
    path: S('web-design'),
    title: 'Web Design & Development',
    description:
      'Fast, SEO-ready, mobile-first websites designed by our Studio and wired up by Systems, so every enquiry lands in your CRM and gets a reply.',
    eyebrow: '07 · STUDIO · WEB DESIGN',
    ogTitle: 'Websites designed by the Studio and wired up by Systems.',
    crumbs: [home, svc, { name: 'Web design', path: S('web-design') }],
    priority: 0.9,
    changeFrequency: 'monthly',
    kind: 'service',
  },
  {
    path: '/pricing',
    title: 'Pricing: Projects & Monthly Plans',
    description:
      'Clear scope and fixed prices. Start with a free 30-minute audit, then choose a fixed-price project or a monthly plan. No surprises.',
    eyebrow: 'PRICING',
    ogTitle: 'Clear scope. Fixed prices. No surprises.',
    crumbs: [home, { name: 'Pricing', path: '/pricing' }],
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    path: '/work',
    title: 'Work & Example Builds',
    description:
      'Example builds showing how automation, SEO, design, motion and web fit together: lead assistants, review flows, brand kits, launch campaigns and websites.',
    eyebrow: 'WORK',
    ogTitle: 'Work that keeps working.',
    crumbs: [home, { name: 'Work', path: '/work' }],
    priority: 0.8,
    changeFrequency: 'monthly',
    kind: 'collection',
  },
  {
    path: '/work/lead-assistant',
    title: 'Example Build: An AI Lead Assistant',
    description:
      'How we build an AI assistant that answers Instagram, WhatsApp and website enquiries, qualifies leads, books calls and hands over to a person when it matters.',
    eyebrow: 'EXAMPLE BUILD · AI AUTOMATION',
    ogTitle: 'A lead assistant that never clocks off.',
    crumbs: [home, { name: 'Work', path: '/work' }, { name: 'Lead assistant', path: '/work/lead-assistant' }],
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    path: '/insights',
    title: 'Marketing Guides & Insights',
    description:
      'Practical guides from the Open Canvas studio on marketing automation, AI, SEO, social media, design, motion and web.',
    eyebrow: 'INSIGHTS',
    ogTitle: 'Notes on brand, automation and growth.',
    crumbs: [home, { name: 'Insights', path: '/insights' }],
    priority: 0.7,
    changeFrequency: 'weekly',
    kind: 'collection',
  },
  {
    path: '/insights/what-to-automate-first',
    title: 'What to Automate First: 5 Follow-Ups',
    absoluteTitle: 'What to Automate First: 5 Follow-Ups Every Small Business Needs',
    description:
      'Most leads aren’t lost to competitors, they’re lost to silence. The five follow-ups to automate first, from the instant reply to the win-back.',
    eyebrow: 'INSIGHTS · MARKETING AUTOMATION',
    ogTitle: 'What to automate first: five follow-ups every small business should run.',
    crumbs: [
      home,
      { name: 'Insights', path: '/insights' },
      { name: 'What to automate first', path: '/insights/what-to-automate-first' },
    ],
    priority: 0.7,
    changeFrequency: 'monthly',
    kind: 'article',
  },
  {
    path: '/careers',
    title: 'Careers',
    description:
      'Small team, high standards, real work. Freelance designers, motion artists, automation builders and SEO writers: send us your portfolio.',
    eyebrow: 'CAREERS',
    ogTitle: 'Small team. High standards. Real work.',
    crumbs: [home, { name: 'Careers', path: '/careers' }],
    priority: 0.4,
    changeFrequency: 'monthly',
  },
  {
    path: '/contact',
    title: 'Book a Free Marketing Audit',
    description:
      'Book a free 30-minute audit of your brand, website and lead flow. You get a written list of quick wins within two working days, whether you hire us or not.',
    eyebrow: 'FREE AUDIT',
    ogTitle: 'Let’s look at your marketing together.',
    crumbs: [home, { name: 'Book a free audit', path: '/contact' }],
    priority: 0.9,
    changeFrequency: 'monthly',
    kind: 'contact',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy',
    description: 'What Open Canvas Marketing collects, why we collect it, and the choices you have.',
    eyebrow: 'LEGAL',
    ogTitle: 'Privacy policy',
    crumbs: [home, { name: 'Privacy policy', path: '/privacy' }],
    priority: 0.2,
    changeFrequency: 'yearly',
  },
  {
    path: '/terms',
    title: 'Terms of Service',
    description: 'How we work together: scope, payment, ownership and what happens if plans change.',
    eyebrow: 'LEGAL',
    ogTitle: 'Terms of service',
    crumbs: [home, { name: 'Terms of service', path: '/terms' }],
    priority: 0.2,
    changeFrequency: 'yearly',
  },
  {
    path: '/thank-you/audit',
    title: 'Audit Booked',
    description: 'Thanks for booking your free audit with Open Canvas Marketing.',
    eyebrow: 'THANK YOU',
    ogTitle: 'You’re booked in.',
    priority: 0,
    changeFrequency: 'yearly',
    noindex: true,
  },
  {
    path: '/thank-you/checklist',
    title: 'Checklist On Its Way',
    description: 'Your marketing automation checklist is on its way.',
    eyebrow: 'THANK YOU',
    ogTitle: 'Check your inbox.',
    priority: 0,
    changeFrequency: 'yearly',
    noindex: true,
  },
];

export const routeByPath: Record<string, RouteInfo> = Object.fromEntries(routes.map((r) => [r.path, r]));

/** Article dates for structured data and the sitemap. Update when you publish or edit. */
export const articleDates: Record<string, { published: string; modified: string }> = {
  '/insights/what-to-automate-first': { published: '2026-10-23', modified: '2026-10-23' },
};

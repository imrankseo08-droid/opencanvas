import { routes } from '@/lib/routes';
import { site, absoluteUrl } from '@/lib/site';

/** /llms.txt: a plain-text guide to the site for AI assistants and AI search engines. */
export const dynamic = 'force-static';

export function GET() {
  const live = routes.filter((r) => !r.noindex);
  const section = (title: string, test: (p: string) => boolean) =>
    `## ${title}\n\n` + live.filter((r) => test(r.path)).map((r) => `- [${r.title}](${absoluteUrl(r.path)}): ${r.description}`).join('\n');
  const body = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `Founded by ${site.founder.name}. Two studios, one team: Systems (AI automation, marketing automation, SEO) and Studio (social media, graphic design, motion graphics, web design). Every engagement starts with a free 30-minute audit.`,
    '',
    section('Services', (p) => p.startsWith('/services')),
    '',
    section('Company', (p) => ['/', '/about', '/pricing', '/work', '/careers', '/contact'].includes(p) || p.startsWith('/work/')),
    '',
    section('Insights', (p) => p.startsWith('/insights')),
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

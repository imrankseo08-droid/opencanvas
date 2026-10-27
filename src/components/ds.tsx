import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';

/* Open Canvas design-system components (React port of the locked design system bundle). */

const ICONS: Record<string, string> = {
  "ai": "<rect x=\"5\" y=\"5\" width=\"14\" height=\"14\" rx=\"3\"/><path d=\"M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3\"/><circle cx=\"12\" cy=\"12\" r=\"2\" fill=\"currentColor\" stroke=\"none\"/>",
  "automation": "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"2\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"2\"/><path d=\"M10 6.5h4.5a3 3 0 0 1 3 3V14\"/>",
  "seo": "<circle cx=\"10.5\" cy=\"10.5\" r=\"6.5\"/><path d=\"M15.5 15.5 21 21\"/><path d=\"M7.5 12.5 9.5 10.5 11.5 11.5 13.5 8.5\"/>",
  "social": "<path d=\"M6 4h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7l-5 4v-4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z\"/><path d=\"M8 10.5h8\"/>",
  "design": "<path d=\"M8 3h8l3 8-7 10-7-10z\"/><path d=\"M12 21v-7\"/><circle cx=\"12\" cy=\"11.5\" r=\"1.75\"/>",
  "motion": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"3\"/><path d=\"M10 9.5v5l4.5-2.5z\"/>",
  "web": "<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"3\"/><path d=\"M3 9h18\"/><path d=\"M8 14h5\"/>",
  "growth": "<path d=\"M4 20h16\"/><path d=\"M5 15.5 10 10.5 13 13.5 19 7.5\"/><path d=\"M15 7.5h4v4\"/>",
  "arrow-right": "<path d=\"M5 12h14\"/><path d=\"M13 6l6 6-6 6\"/>",
  "arrow-up-right": "<path d=\"M7 17 17 7\"/><path d=\"M9 7h8v8\"/>",
  "check": "<path d=\"M5 12.5 10 17.5 19 7\"/>",
  "mail": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"3\"/><path d=\"M4 7.5l8 6 8-6\"/>",
  "calendar": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"3\"/><path d=\"M3 10h18M8 3v4M16 3v4\"/>",
  "plus": "<path d=\"M12 5v14M5 12h14\"/>",
  "menu": "<path d=\"M4 7h16M4 12h16M4 17h10\"/>",
  "close": "<path d=\"M6 6l12 12M18 6 6 18\"/>"
};

export type IconName = keyof typeof ICONS;

export function Icon({ name, size = 24, label, className }: { name: string; size?: number; label?: string; className?: string }) {
  return (
    <svg
      className={['oc-icon', className].filter(Boolean).join(' ')}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
      dangerouslySetInnerHTML={{ __html: ICONS[name] || '' }}
    />
  );
}

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'gold' | 'outline' | 'ghost';
  size?: 'md' | 'lg';
  icon?: string;
  href?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
};

export function Button({ children, variant = 'primary', size = 'md', icon, href, type = 'button', className, ...rest }: ButtonProps) {
  const cls = ['oc-btn', 'oc-btn-' + variant, 'oc-btn-' + size, className].filter(Boolean).join(' ');
  const kids = (
    <>
      <span>{children}</span>
      {icon ? <Icon name={icon} size={size === 'lg' ? 20 : 18} /> : null}
    </>
  );
  if (href) {
    const internal = href.startsWith('/') || href.startsWith('#');
    return internal ? (
      <Link href={href} className={cls} style={rest.style}>{kids}</Link>
    ) : (
      <a href={href} className={cls} style={rest.style}>{kids}</a>
    );
  }
  return (
    <button type={type} className={cls} {...rest}>
      {kids}
    </button>
  );
}

export function Tag({ children, tone = 'neutral' }: { children: ReactNode; tone?: string }) {
  return <span className={'oc-tag oc-tag-' + tone}>{children}</span>;
}

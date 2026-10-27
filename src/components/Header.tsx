'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { Button, Icon } from './ds';

export const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Insights', href: '/insights' },
];

export function Header() {
  const pathname = usePathname() || '/';
  const menu = useRef<HTMLDetailsElement>(null);

  // Close the mobile menu after navigating
  useEffect(() => {
    if (menu.current) menu.current.open = false;
  }, [pathname]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link href="/" aria-label="Open Canvas Marketing, home" style={{ display: 'flex', flex: 'none' }}>
          <Logo style={{ height: 40 }} />
        </Link>
        <nav className="hnav" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={isCurrent(n.href) ? 'page' : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hdr-end">
          <span className="hdr-cta">
            <Button variant="gold" icon="arrow-right" href="/contact">
              Book a free audit
            </Button>
          </span>
          <details className="mnav" ref={menu}>
            <summary aria-label="Open menu">
              <Icon name="menu" size={16} />
              Menu
            </summary>
            <nav className="mnav-panel" aria-label="Main (mobile)">
              {[...NAV, { label: 'Contact', href: '/contact' }].map((n) => (
                <Link key={n.href} href={n.href} aria-current={isCurrent(n.href) ? 'page' : undefined}>
                  {n.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

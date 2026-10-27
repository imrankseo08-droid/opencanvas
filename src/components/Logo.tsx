import type { CSSProperties } from 'react';

const MARK = 'M132 48 H88 A40 40 0 0 0 48 88 V168 A40 40 0 0 0 88 208 H168 A40 40 0 0 0 208 168 V124';

/**
 * Open Canvas lockup as inline SVG. The wordmark uses the brand display font (Jost),
 * so it renders identically on every device. Replace with the outlined master
 * logo when it is ready (see README → Brand assets).
 */
export function Logo({
  variant = 'dark',
  className,
  style,
  title = 'Open Canvas Marketing',
  decorative = false,
}: {
  variant?: 'dark' | 'light';
  decorative?: boolean;
  className?: string;
  style?: CSSProperties;
  title?: string;
}) {
  const ink = variant === 'dark' ? '#0d0d0d' : '#f4f1ea';
  return (
    <svg
      viewBox="0 0 1060 256"
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : title}
      aria-hidden={decorative ? true : undefined}
      className={className}
      style={{ display: 'block', height: 44, width: 'auto', ...style }}
    >
      <g transform="translate(20,34) scale(0.74)">
        <path fill="none" stroke={ink} strokeWidth={40} d={MARK} />
        <circle fill="#d4af37" cx={160} cy={96} r={24} />
      </g>
      <text style={{ fontFamily: 'var(--font-display)' }}>
        <tspan x={250} y={140} textLength={720} lengthAdjust="spacingAndGlyphs" style={{ fontWeight: 600, fontSize: 96, letterSpacing: 2 }} fill={ink}>
          OPEN CANVAS
        </tspan>{' '}
        <tspan x={254} y={200} textLength={330} lengthAdjust="spacingAndGlyphs" style={{ fontWeight: 500, fontSize: 34, letterSpacing: 14 }} fill="#d4af37">
          MARKETING
        </tspan>
      </text>
    </svg>
  );
}

export function Mark({ size = 24, color = 'currentColor', className, style }: { size?: number | string; color?: string; className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="28 28 200 200" aria-hidden="true" className={className} style={{ width: size, height: size, overflow: 'visible', color, ...style }}>
      <path d={MARK} style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 40 }} />
      <circle cx={160} cy={96} r={24} style={{ fill: '#d4af37' }} />
    </svg>
  );
}

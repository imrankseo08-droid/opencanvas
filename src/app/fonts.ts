import localFont from 'next/font/local';

// Brand fonts, self-hosted (no requests to Google Fonts: faster and privacy-friendly).
export const jost = localFont({
  src: '../../node_modules/@fontsource-variable/jost/files/jost-latin-wght-normal.woff2',
  weight: '100 900',
  variable: '--font-jost',
  display: 'swap',
  fallback: ['Avenir Next', 'Futura', 'Helvetica Neue', 'Arial', 'sans-serif'],
});

export const dmSans = localFont({
  src: '../../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2',
  weight: '100 1000',
  variable: '--font-dm-sans',
  display: 'swap',
  fallback: ['Helvetica Neue', 'Arial', 'sans-serif'],
});

export const jetbrains = localFont({
  src: '../../node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2',
  weight: '100 800',
  variable: '--font-jetbrains',
  display: 'swap',
  preload: false,
  fallback: ['ui-monospace', 'Menlo', 'monospace'],
});

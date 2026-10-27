import { Header } from '@/components/Header';

/** Shared shell for every page except the homepage (which has its own hero header). */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
    </>
  );
}

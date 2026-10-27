/** Renders one or more schema.org objects as a JSON-LD script tag (server-rendered, read by Google). */
export function JsonLd({ data }: { data: unknown | unknown[] }) {
  const list = (Array.isArray(data) ? data : [data]).filter(Boolean);
  if (!list.length) return null;
  const json = JSON.stringify(list.length === 1 ? list[0] : list).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

'use client';

import { useEffect, useState } from 'react';

/** Filter chips for /work. Cards carry data-pillar="systems|studio"; the list has id="work-list". */
export function WorkFilter() {
  const [f, setF] = useState<'all' | 'systems' | 'studio'>('all');
  const [count, setCount] = useState('7 EXAMPLE BUILDS');

  useEffect(() => {
    const list = document.getElementById('work-list');
    if (!list) return;
    const cards = Array.from(list.querySelectorAll<HTMLElement>('a[data-pillar]'));
    let n = 0;
    cards.forEach((c) => {
      const show = f === 'all' || c.dataset.pillar === f;
      c.classList.toggle('is-hidden', !show);
      if (show) n++;
    });
    setCount(`${n} ${f === 'all' ? 'EXAMPLE' : f.toUpperCase()} BUILDS`);
  }, [f]);

  const chips: [typeof f, string][] = [
    ['all', 'All work'],
    ['systems', 'Systems'],
    ['studio', 'Studio'],
  ];
  return (
    <section className="wrap" style={{ paddingTop: 8 }} aria-label="Filter">
      <div className="sv" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, paddingBottom: 24, borderBottom: '1px solid var(--line)' }}>
        <div role="group" aria-label="Filter work" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {chips.map(([k, label]) => (
            <button key={k} type="button" className="chip" aria-pressed={f === k} onClick={() => setF(k)}>
              {label}
            </button>
          ))}
        </div>
        <span aria-live="polite" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.06em', color: 'var(--muted)' }}>
          {count}
        </span>
      </div>
    </section>
  );
}

const TOPICS = ['All', 'AI automation', 'Marketing automation', 'SEO', 'Social media', 'Graphic design', 'Motion graphics', 'Web design'];

/** Topic chips for /insights. Cards carry data-topic; the list has id="insights-list". */
export function InsightsFilter() {
  const [t, setT] = useState('All');
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    const list = document.getElementById('insights-list');
    if (!list) return;
    let n = 0;
    list.querySelectorAll<HTMLElement>('a[data-topic]').forEach((c) => {
      const show = t === 'All' || c.dataset.topic === t;
      c.classList.toggle('is-hidden', !show);
      if (show) n++;
    });
    setEmpty(n === 0);
  }, [t]);

  return (
    <section className="wrap" style={{ paddingTop: 8 }} aria-label="Topics">
      <div className="sv" role="group" aria-label="Filter by topic" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingBottom: 24, borderBottom: '1px solid var(--line)' }}>
        {TOPICS.map((n) => (
          <button key={n} type="button" className="chip" aria-pressed={t === n} onClick={() => setT(n)}>
            {n}
          </button>
        ))}
      </div>
      {empty ? (
        <p role="status" style={{ margin: 0, padding: '48px 0 0', fontSize: 18, color: 'var(--ink-soft)' }}>
          Nothing on this topic yet. New guides are on the way.
        </p>
      ) : null}
    </section>
  );
}

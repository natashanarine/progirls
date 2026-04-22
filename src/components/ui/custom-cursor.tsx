'use client';

import { useEffect, useRef } from 'react';

const DOT_COUNT = 20;

export default function CustomCursor() {
  const dotsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const positions = useRef(
    Array.from({ length: DOT_COUNT }, () => ({ x: -100, y: -100 }))
  );
  const mouse = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>();

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    document.documentElement.style.cursor = 'none';

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    document.addEventListener('mousemove', onMouseMove);

    const tick = () => {
      positions.current[0].x += (mouse.current.x - positions.current[0].x) * 0.35;
      positions.current[0].y += (mouse.current.y - positions.current[0].y) * 0.35;

      for (let i = 1; i < DOT_COUNT; i++) {
        positions.current[i].x += (positions.current[i - 1].x - positions.current[i].x) * 0.35;
        positions.current[i].y += (positions.current[i - 1].y - positions.current[i].y) * 0.35;
      }

      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        const scale = Math.max(0.15, 1 - 0.05 * i);
        dot.style.transform = `translate(${positions.current[i].x - 13}px, ${positions.current[i].y - 13}px) scale(${scale})`;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.documentElement.style.cursor = '';
    };
  }, []);

  return (
    <>
      <svg
        aria-hidden
        style={{ position: 'fixed', width: 0, height: 0, top: 0, left: 0, zIndex: 9999 }}
      >
        <defs>
          <filter id="goo-cursor">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div
        aria-hidden
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          filter: 'url(#goo-cursor)',
          mixBlendMode: 'difference',
        }}
      >
        {Array.from({ length: DOT_COUNT }, (_, i) => (
          <span
            key={i}
            ref={(el) => { dotsRef.current[i] = el; }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: 26,
              height: 26,
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              display: 'block',
              willChange: 'transform',
            }}
          />
        ))}
      </div>
    </>
  );
}

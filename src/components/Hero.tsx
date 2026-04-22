'use client';

import Nav from '@/components/Nav';
import IntroAnimation from '@/components/ui/scroll-morph-hero';

export default function Hero() {
  return (
    <section className="relative h-screen">
      {/* Full-bleed animation */}
      <div className="absolute inset-0">
        <IntroAnimation />
      </div>

      {/* Nav sits above the animation */}
      <Nav />
    </section>
  );
}

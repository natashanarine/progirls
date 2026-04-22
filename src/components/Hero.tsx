'use client';

import { motion } from 'framer-motion';
import ShaderBackground from '@/components/ui/shader-background';
import Nav from '@/components/Nav';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <ShaderBackground />

      {/* Dark overlay so text is readable */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'rgba(0,0,0,0.45)' }}
      />

      <Nav />

      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#f0ece3] text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.08] max-w-4xl"
          style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontStyle: 'italic',
          }}
        >
          progirls. same mission. different energy
        </motion.h1>

        <motion.a
          href="#join"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 inline-block px-9 py-3 rounded-full border border-[#ff3cac] text-[#ff3cac] text-xs tracking-[0.2em] uppercase hover:bg-[#ff3cac] hover:text-white transition-all duration-300"
          style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif' }}
        >
          join the mission
        </motion.a>
      </div>
    </section>
  );
}

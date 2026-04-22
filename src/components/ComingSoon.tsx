'use client';

import { motion } from 'framer-motion';

export default function ComingSoon() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] backdrop-blur-xl overflow-hidden">
      {/* Soft pink radial glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-[700px] h-[350px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255,60,172,0.18) 0%, transparent 70%)',
          }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative z-10 text-[#f0ece3] text-6xl md:text-8xl lg:text-[7rem] leading-none"
        style={{
          fontFamily: 'var(--font-playfair), Georgia, serif',
          fontStyle: 'italic',
          fontWeight: 400,
          textShadow: '0 0 100px rgba(255,60,172,0.35)',
        }}
      >
        coming soon
      </motion.p>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const helvetica = '"Helvetica Neue", Helvetica, Arial, sans-serif';

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0a0a0a] flex flex-col justify-center px-10 md:px-20 py-20"
    >
      <div className="flex flex-col gap-5 max-w-6xl">
        {/* Label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: helvetica,
            fontWeight: 400,
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            color: '#f0ece3',
          }}
        >
          About
        </motion.p>

        {/* Big headline */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: helvetica,
            fontWeight: 900,
            textTransform: 'uppercase',
            fontSize: 'clamp(2.4rem, 5vw, 5rem)',
            lineHeight: 0.92,
            letterSpacing: '-0.02em',
            color: '#f0ece3',
          }}
        >
          Same mission.<br />Different energy.
        </motion.h2>

        {/* Body copy */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
          style={{
            fontFamily: helvetica,
            fontWeight: 700,
            fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
            lineHeight: 1.65,
            color: '#f0ece3',
          }}
        >
          <a
            href="https://www.progsu.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            progsu
          </a>{' '}
          has a track record of opening doors and creating real opportunities for our members.
          progirls carries that legacy forward, creating a space where women in tech are not
          just included, but invested in. Community without compromise. Excellence without exclusion.
        </motion.p>
      </div>
    </section>
  );
}

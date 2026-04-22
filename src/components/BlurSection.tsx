'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BlurSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // 0 = section entering from below, 0.5 = centred, 1 = exiting above
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0, 1, 1, 0]);
  const blur    = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [16, 0, 0, 16]);
  const filter  = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.div ref={ref} style={{ filter, opacity }}>
      {children}
    </motion.div>
  );
}

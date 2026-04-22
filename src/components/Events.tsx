'use client';

import { motion } from 'framer-motion';
import { events, type Event } from '@/data/events';
import { GlowCard } from '@/components/ui/spotlight-card';

const helvetica = '"Helvetica Neue", Helvetica, Arial, sans-serif';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

function EventCard({ event, index }: { event: Event; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <GlowCard customSize glowColor="pink" className="w-full">
        <div className="flex flex-row gap-10 items-start">
          {/* Left — date, title, location */}
          <div className="flex flex-col gap-3 min-w-[220px]">
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: helvetica, color: '#ff3cac' }}
              >
                {event.date}
              </span>
              {event.time && (
                <>
                  <span style={{ color: 'rgba(240,236,227,0.2)' }}>·</span>
                  <span
                    className="text-xs tracking-widest"
                    style={{ fontFamily: helvetica, color: 'rgba(240,236,227,0.45)' }}
                  >
                    {event.time}
                  </span>
                </>
              )}
            </div>

            <h3
              className="text-2xl font-bold leading-tight"
              style={{ fontFamily: helvetica, color: '#f0ece3' }}
            >
              {event.title}
            </h3>

            {event.location && (
              <p
                className="text-sm"
                style={{ fontFamily: helvetica, color: 'rgba(240,236,227,0.5)' }}
              >
                {event.location}
              </p>
            )}
          </div>

          {/* Divider */}
          <div className="self-stretch w-px bg-white/10 shrink-0" />

          {/* Right — description + RSVP */}
          <div className="flex flex-col gap-4 flex-1">
            {event.description && (
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: helvetica, color: 'rgba(240,236,227,0.65)' }}
              >
                {event.description}
              </p>
            )}

            <a
              href={event.lumaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#ff3cac] hover:underline underline-offset-4 transition-all mt-auto"
              style={{ fontFamily: helvetica }}
            >
              RSVP on Luma <span>↗</span>
            </a>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}

export default function Events() {
  return (
    <section
      id="events"
      className="bg-[#0a0a0a] flex flex-col justify-center px-10 md:px-20 py-20"
    >
      <div className="flex flex-col gap-8 max-w-5xl w-full">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: helvetica, fontSize: '0.85rem', color: '#f0ece3' }}
          >
            Events
          </motion.p>

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
            What&apos;s<br />coming up.
          </motion.h2>
        </div>

        {/* Cards */}
        {events.length > 0 ? (
          <div className="flex flex-col gap-5">
            {events.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>
        ) : (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: helvetica,
              color: 'rgba(240,236,227,0.35)',
              fontSize: '1rem',
              letterSpacing: '0.05em',
            }}
          >
            No events yet. Check back soon.
          </motion.p>
        )}
      </div>
    </section>
  );
}

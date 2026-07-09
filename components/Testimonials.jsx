"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/config";

// Duplicate the list so the CSS marquee (translateX -50%) loops seamlessly.
const LOOPED = [...TESTIMONIALS, ...TESTIMONIALS];

function TestimonialCard({ t }) {
  return (
    <figure className="glass flex w-[360px] shrink-0 flex-col rounded-3xl p-8">
      <blockquote className="flex-1 font-serif text-xl leading-snug text-black/85">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#14110f] text-xs font-medium text-[#faf8f5]">
          {t.name
            .split(" ")
            .map((w) => w[0])
            .join("")}
        </span>
        <span className="text-sm text-black/50">
          <span className="font-medium text-black/70">{t.name}</span> - {t.role}
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-2xl px-6 text-center"
      >
        <h2 className="font-serif text-4xl tracking-tightest md:text-5xl">
          What clients say
        </h2>
      </motion.div>

      <div
        className="relative mt-14 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max gap-6 px-6">
          {LOOPED.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

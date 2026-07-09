"use client";

import { motion } from "framer-motion";
import { PRICING } from "@/lib/config";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Pricing() {
  return (
    <section id="pricing" className="w-full px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-serif text-4xl tracking-tightest md:text-5xl">
            Simple to start, scoped when it matters
          </h2>
          <p className="mt-4 text-lg text-black/60">
            One clear starting price. Everything bigger gets a real
            conversation, not a guess.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-16 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2"
        >
          {/* Base price card */}
          <motion.div
            variants={reveal}
            className="glass flex h-full flex-col rounded-3xl p-10"
          >
            <span className="text-sm font-medium uppercase tracking-wide text-black/50">
              Standard site
            </span>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-serif text-5xl">
                {PRICING.currency}
                {PRICING.basePrice}
              </span>
              <span className="text-black/50">{PRICING.basePriceNote}</span>
            </div>
            <ul className="mt-8 flex-1 space-y-3 text-black/70">
              {PRICING.baseIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c17f3e]" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#14110f] px-6 py-3 text-center text-sm font-medium text-[#faf8f5] transition-transform hover:scale-105"
            >
              Contact us
            </a>
          </motion.div>

          {/* Custom quote card */}
          <motion.div
            variants={reveal}
            className="glass-dark flex h-full flex-col rounded-3xl p-10 text-[#faf8f5]"
          >
            <span className="text-sm font-medium uppercase tracking-wide text-[#faf8f5]/55">
              Custom project
            </span>
            <div className="mt-4">
              <span className="font-serif text-5xl">Let&apos;s talk</span>
            </div>
            <p className="mt-4 text-[#faf8f5]/65">{PRICING.customNote}</p>
            <ul className="mt-8 flex-1 space-y-3 text-[#faf8f5]/75">
              {PRICING.customIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c17f3e]" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#f0e4d4] border border-[#faf8f5]/30 px-6 py-3 text-center text-sm font-medium text-black transition-colors hover:bg-[#f0e4d4]/80"
            >
              Contact us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

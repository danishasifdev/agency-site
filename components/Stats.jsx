"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/config";
import Counter from "./Counter";

export default function Stats() {
  return (
    <section className="relative w-full px-6 pb-20 pt-4 lg:hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass mx-auto grid max-w-5xl grid-cols-2 gap-8 rounded-3xl px-8 py-10 sm:grid-cols-4"
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-serif text-3xl tracking-tightest text-[#14110f] md:text-4xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-1 text-sm text-black/55">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

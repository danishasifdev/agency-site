"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/config";
import ServiceCard from "./ServiceCard";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Services() {
  return (
    <section id="services" className="w-full px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-serif text-4xl tracking-tightest md:text-5xl">
            What we build
          </h2>
          <p className="mt-4 text-lg text-black/60">
            Four things, done properly, instead of everything, done in a rush.
          </p>
        </motion.div>
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
              style={{ perspective: 1000 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

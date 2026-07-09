"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroVideoBackground from "./HeroVideoBackground";
import Link from "next/link";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden px-6"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <HeroVideoBackground />
      </motion.div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="glass-pill mb-6 inline-block rounded-full px-5 py-2 text-sm font-medium text-white"
        >
          Websites · Web Apps · SEO · AI
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl leading-[1.05] tracking-tightest text-white md:text-7xl"
        >
          Built well.
          <br />
          <span className="text-[#e7ad6f]">Shipped fast.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-xl text-lg text-white/75 md:text-xl"
        >
          We design and build websites, web apps, and AI features for businesses
          that want something better than a template.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/projects"
            className="w-full rounded-full border border-white/40 px-7 py-3 text-center text-base font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            View projects
          </Link>
          <a
            href="#contact"
            className="w-full rounded-full bg-[#faf8f5] px-7 py-3 text-center text-base font-medium text-[#14110f] transition-transform hover:scale-105 sm:w-auto"
          >
            Contact us
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

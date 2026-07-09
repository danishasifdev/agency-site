"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import HeroVideoBackground from "./HeroVideoBackground";
import Link from "next/link";
import { STATS } from "@/lib/config";
import Counter from "./Counter";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const [beginCounting, setBeginCounting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBeginCounting(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden px-6"
    >
      {/* Background Video */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <HeroVideoBackground />
      </motion.div>
      {/* Main Copy (Centered) */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 mx-auto max-w-4xl text-center lg:pb-32" // Added pb-32 to clear space for bottom stats
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

      {/* Stats Panel: Replaced loader positioning directly */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3, ease: [0.22, 1, 0.36, 1] }}
        className="lg:absolute inset-0 z-10 lg:flex flex-col items-center justify-end pb-10 md:pb-20 pointer-events-none hidden"
      >
        <div className="grid w-full max-w-4xl grid-cols-2 md:gap-6 gap-4 px-8 pointer-events-auto sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-2xl tracking-tightest text-white md:text-4xl">
                {beginCounting ? (
                  <Counter value={stat.value} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

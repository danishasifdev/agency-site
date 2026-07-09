"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/config";

export default function Process() {
  const wrapperRef = useRef(null);
  const prevIndex = useRef(0);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(
      PROCESS_STEPS.length - 1,
      Math.max(0, Math.floor(latest * PROCESS_STEPS.length))
    );
    if (next !== prevIndex.current) {
      setDirection(next > prevIndex.current ? 1 : -1);
      prevIndex.current = next;
      setIndex(next);
    }
  });

  const step = PROCESS_STEPS[index];

  return (
    <section
      id="process"
      ref={wrapperRef}
      style={{ height: `${PROCESS_STEPS.length * 100}vh` }}
      className="relative w-full bg-[#f0e4d4]/40"
    >
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden px-6">
        {/* Heading stays put the whole time */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl tracking-tightest md:text-5xl">How it works</h2>
          <p className="mt-4 text-lg text-black/60">
            From first message to launch day, in four steps. Keep scrolling.
          </p>
        </div>

        {/* Segmented scroll progress */}
        <div className="mt-8 flex w-full max-w-xs gap-2">
          {PROCESS_STEPS.map((s, i) => (
            <span key={s.number} className="h-1 flex-1 overflow-hidden rounded-full bg-black/10">
              <span
                className="block h-full rounded-full bg-[#c17f3e] transition-all duration-300"
                style={{ width: i <= index ? "100%" : "0%" }}
              />
            </span>
          ))}
        </div>

        {/* Active step card */}
        <div className="relative mt-10 h-[280px] w-full max-w-3xl md:h-[220px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step.number}
              custom={direction}
              initial={{ opacity: 0, y: direction * 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: direction * -50 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass absolute inset-0 flex flex-col items-center gap-4 rounded-3xl p-10 text-center md:flex-row md:items-center md:gap-10 md:text-left"
            >
              <span className="font-serif text-6xl text-[#c17f3e] md:text-7xl">
                {step.number}
              </span>
              <div>
                <h3 className="font-serif text-3xl">{step.title}</h3>
                <p className="mt-3 max-w-xl text-black/60">{step.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 text-sm text-black/40">
          {String(index + 1).padStart(2, "0")} / {String(PROCESS_STEPS.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}

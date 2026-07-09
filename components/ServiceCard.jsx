"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import * as Icons from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServiceCard({ service }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [8, -8]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-8, 8]),
    springConfig,
  );
  const glowX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  const Icon = Icons[service.icon] || Icons.Sparkles;

  return (
    <motion.div
      variants={reveal}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="glass group relative flex flex-col items-center overflow-hidden rounded-3xl p-6 text-center sm:p-8"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(280px circle at ${glowX} ${glowY}, rgba(193,127,62,0.18), transparent 70%)`,
        }}
      />
      <div
        style={{ transform: "translateZ(40px)" }}
        className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-[#14110f] text-[#e7ad6f]"
      >
        <Icon size={20} />
      </div>
      <h3
        style={{ transform: "translateZ(30px)" }}
        className="relative mt-6 font-serif text-2xl"
      >
        {service.title}
      </h3>
      <p
        style={{ transform: "translateZ(20px)" }}
        className="relative mt-3 text-black/60"
      >
        {service.description}
      </p>
      <ul
        style={{ transform: "translateZ(20px)" }}
        className="relative mt-5 space-y-2 text-sm text-black/70"
      >
        {service.points.map((point) => (
          <li key={point} className="flex items-center justify-center gap-2">
            <Icons.CheckCircle className="text-[#c17f3e] w-4" />
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

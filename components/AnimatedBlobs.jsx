"use client";

import { motion } from "framer-motion";

export default function AnimatedBlobs() {
  return (
    <svg
      viewBox="0 0 800 800"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="blob-blur">
          <feGaussianBlur stdDeviation="60" />
        </filter>
      </defs>
      <rect width="800" height="800" fill="#14110f" />
      <motion.circle
        cx="220"
        cy="260"
        r="180"
        fill="#c17f3e"
        opacity="0.55"
        filter="url(#blob-blur)"
        animate={{ cx: [220, 320, 180, 220], cy: [260, 380, 220, 260] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="560"
        cy="480"
        r="220"
        fill="#6366f1"
        opacity="0.35"
        filter="url(#blob-blur)"
        animate={{ cx: [560, 460, 620, 560], cy: [480, 380, 540, 480] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="600"
        cy="180"
        r="150"
        fill="#faf8f5"
        opacity="0.12"
        filter="url(#blob-blur)"
        animate={{ cx: [600, 520, 660, 600], cy: [180, 260, 140, 180] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export default function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);
  const isDecimal = value % 1 !== 0;

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(isDecimal ? Math.round(v * 10) / 10 : Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value, isDecimal]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

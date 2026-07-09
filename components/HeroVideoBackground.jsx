"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VIDEO_SRC = "/hero.mp4";

export default function HeroVideoBackground() {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setReducedMotion(media.matches);
    handler();
    media.addEventListener("change", handler);
    const timer = new Promise((resolve) => setTimeout(resolve, 2000));
    const videoReady = new Promise((resolve) => {
      const video = videoRef.current;
      if (!video) return resolve(true);
      if (video.readyState >= 3) return resolve(true);
      video.oncanplaythrough = () => resolve(true);
    });

    Promise.all([timer, videoReady]).then(() => {
      setLoaded(true);
    });

    return () => media.removeEventListener("change", handler);
  }, [videoRef]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, #201c19 0%, #14110f 100%)`,
        }}
      />

      {/* Loading Fallback (Centered, with bottom loader) */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-24"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="h-12 w-12 rounded-full border-4 border-[#c17f3e]/20 border-t-[#c17f3e]"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-xs tracking-widest text-[#c17f3e]/50 uppercase"
            >
              Loading
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {!reducedMotion && (
        <motion.video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </motion.video>
      )}

      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/70" />
    </div>
  );
}

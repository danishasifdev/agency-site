"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBlobs from "./AnimatedBlobs";

// TODO: replace this with your own reel/footage. Keeping a real, freely-licensed
// placeholder here (Blender Foundation's "Big Buck Bunny", CC-BY) so the loading
// behavior below is genuinely functional out of the box.
const VIDEO_SRC = "/hero.mp4";

export default function HeroVideoBackground() {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  function handleProgress() {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    try {
      const buffered = video.buffered;
      if (buffered.length) {
        const end = buffered.end(buffered.length - 1);
        setProgress(Math.min(100, Math.round((end / video.duration) * 100)));
      }
    } catch {
      // ignore - buffered ranges can throw in some browsers before metadata loads
    }
  }

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#14110f]">
      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="fallback"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <AnimatedBlobs />
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
          onCanPlayThrough={() => {
            setProgress(100);
            setTimeout(() => setLoaded(true), 200);
          }}
          onProgress={handleProgress}
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src={VIDEO_SRC}
            type="video/mp4"
            className="object-center object-contain"
          />
        </motion.video>
      )}

      <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/55 to-black/35" />

      {/* Buffering progress bar */}
      <AnimatePresence>
        {!loaded && !reducedMotion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-10 left-1/2 flex w-56 -translate-x-1/2 flex-col items-center gap-2"
          >
            <div className="h-1 w-full overflow-hidden rounded-full bg-white/20">
              <motion.div
                className="h-full rounded-full bg-[#c17f3e]"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            <span className="text-xs font-medium tracking-wide text-white/60">
              Loading {progress}%
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

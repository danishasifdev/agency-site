/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AGENCY, NAV_LINKS } from "@/lib/config";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 z-50 w-[94%] max-w-5xl -translate-x-1/2"
    >
      <nav
        className={`glass flex md:h-14 h-12 items-center justify-between rounded-full md:px-5 transition-shadow duration-500 px-3 ${
          scrolled ? "shadow-[0_8px_24px_rgba(20,17,15,0.08)]" : ""
        }`}
      >
        {/* Logo - left */}
        <a
          href="/#top"
          className="flex items-center gap-2 font-serif text-base font-semibold shrink-0"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#14110f] text-xs font-sans font-bold text-[#faf8f5]">
            {AGENCY.shortName}
          </span>
          <span className="hidden sm:inline">{AGENCY.name}</span>
        </a>

        {/* Links - right */}
        <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="pill-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="pill-link md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="glass mt-2 rounded-3xl px-6 py-5 md:hidden">
          <ul className="flex flex-col gap-4 text-base">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="pill-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}

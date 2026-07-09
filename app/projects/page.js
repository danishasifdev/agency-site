"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS, AGENCY } from "@/lib/config";
import WorkThumbnail from "@/components/WorkThumbnail";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectsIndexPage() {
  return (
    <main className="w-full">
      <ScrollProgress />
      <Nav />
      <WhatsAppButton />

      <section className="px-6 pb-20 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="font-serif text-5xl tracking-tightest md:text-6xl">
            All projects
          </h1>
          <p className="mt-4 text-lg text-black/60">
            Every case study, with the actual outcome - not just a pretty
            screenshot.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mx-auto mt-16 flex max-w-4xl flex-col gap-8"
        >
          {PROJECTS.map((project, i) => (
            <motion.div key={project.id} variants={reveal}>
              <Link
                href={`/projects/${project.slug}`}
                className="group grid grid-cols-1 items-center gap-0 overflow-hidden rounded-3xl border border-black/8 bg-white transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(20,17,15,0.1)] md:grid-cols-5"
              >
                <WorkThumbnail
                  project={project}
                  className={`h-64 rounded-none border-none transition-transform duration-500 group-hover:scale-[1.02] md:col-span-2 md:h-full ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                />
                <div
                  className={`p-8 md:col-span-3 ${i % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium uppercase tracking-wide text-[#c17f3e]">
                      {project.category}
                    </span>
                    <span className="text-sm font-medium text-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                      View case study &rsaquo;
                    </span>
                  </div>
                  <h2 className="mt-2 font-serif text-3xl">{project.name}</h2>
                  <p className="mt-3 max-w-lg text-black/60">
                    {project.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-6 border-t border-black/8 pt-6">
                    {project.results.map((r) => (
                      <div key={r.label}>
                        <div className="font-serif text-xl text-[#c17f3e]">
                          {r.value}
                        </div>
                        <div className="text-xs text-black/50">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Link href="/" className="pill-link text-black/60 underline">
            ← Back to {AGENCY.name}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

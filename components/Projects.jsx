"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/config";
import WorkThumbnail from "./WorkThumbnail";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="w-full px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-serif text-4xl tracking-tightest md:text-5xl">
            Projects we&apos;ve shipped
          </h2>
          <p className="mt-4 text-lg text-black/60">
            Real problems, real results.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={reveal}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-black/8 bg-white transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(20,17,15,0.1)]"
                >
                  <WorkThumbnail
                    project={project}
                    className="rounded-none border-none transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="flex items-center justify-between p-5">
                    <div>
                      <span className="font-medium">{project.name}</span>
                      <p className="mt-0.5 text-sm text-black/50">
                        {project.category}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-[#c17f3e] opacity-0 transition-opacity group-hover:opacity-100">
                      View case study &rsaquo;
                    </span>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="inline-block rounded-full border border-black/15 px-7 py-3 text-base font-medium text-black/80 transition-colors hover:bg-black/5"
          >
            View all projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

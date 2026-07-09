"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/config";
import WorkThumbnail from "@/components/WorkThumbnail";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="flex min-h-screen w-full flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-4xl">Project not found</h1>
        <Link href="/projects" className="mt-4 pill-link text-[#c17f3e] underline">
          ← Back to all projects
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full">
      <ScrollProgress />
      <Nav />
      <WhatsAppButton />

      <section className="px-6 pb-24 pt-36">
        <div className="mx-auto max-w-4xl">
          <Link href="/projects" className="pill-link text-sm text-black/50">
            ← All projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6"
          >
            <span className="text-sm font-medium uppercase tracking-wide text-[#c17f3e]">
              {project.category}
            </span>
            <h1 className="mt-2 font-serif text-5xl tracking-tightest md:text-6xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-black/60">{project.summary}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <WorkThumbnail project={project} className="h-auto w-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3"
          >
            <div className="md:col-span-2">
              <h2 className="font-serif text-2xl">The project</h2>
              <p className="mt-3 leading-relaxed text-black/65">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="text-sm font-medium uppercase tracking-wide text-black/50">
                Results
              </h3>
              <div className="mt-4 space-y-4">
                {project.results.map((r) => (
                  <div key={r.label}>
                    <div className="font-serif text-2xl text-[#c17f3e]">{r.value}</div>
                    <div className="text-sm text-black/55">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 rounded-3xl bg-[#14110f] p-10 text-center text-[#faf8f5]"
          >
            <h3 className="font-serif text-3xl">Want something like this?</h3>
            <p className="mx-auto mt-2 max-w-md text-[#faf8f5]/65">
              Tell us what you're building and we'll figure out the shape of it together.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#faf8f5] px-6 py-3 text-sm font-medium text-[#14110f] transition-transform hover:scale-105"
            >
              Contact us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, Plus } from "lucide-react";
import { PROJECTS, type ProjectCategory } from "@/lib/config";

type Filter = "all" | ProjectCategory;

const TABS: { id: Filter; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web & Systems" },
  { id: "data", label: "Data & Analytics" },
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = PROJECTS.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6">
      <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">Projects</h2>
      <p className="mt-2 max-w-xl">Platforms and data work, from system design to deployment.</p>

      <div role="tablist" aria-label="Project categories" className="mt-6 flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={filter === t.id}
            onClick={() => setFilter(t.id)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyber-cyan ${
              filter === t.id
                ? "border-cyber-cyan/50 bg-cyber-cyan/10 text-cyber-cyan"
                : "border-cyber-border text-slate-400 hover:text-slate-200"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid auto-rows-[minmax(190px,auto)] grid-cols-1 gap-4 md:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => {
            const isSlot = !p.live && !p.github;
            const big = p.featured && filter !== "data";
            return (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -4 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-shadow ${
                  isSlot
                    ? "border-dashed border-cyber-border bg-cyber-card/30"
                    : "border-cyber-border bg-cyber-card/70 hover:shadow-glow-violet"
                } ${big ? "md:col-span-2 md:row-span-2 md:p-8" : ""}`}
              >
                {big && (
                  <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyber-violet/20 blur-3xl" />
                )}
                <div className="relative">
                  {big && (
                    <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-cyber-violet/30 bg-cyber-violet/10 px-2.5 py-1 text-xs text-cyber-violet">
                      <Sparkles size={12} aria-hidden /> Featured
                    </span>
                  )}
                  {isSlot && <Plus size={20} className="mb-3 text-slate-500" aria-hidden />}
                  <h3 className={`font-semibold text-slate-50 ${big ? "text-2xl md:text-3xl" : "text-lg"}`}>
                    {p.title}
                    {p.titleAr && (
                      <span lang="ar" dir="rtl" className="ms-2 text-cyber-cyan">
                        ({p.titleAr})
                      </span>
                    )}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed">{p.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-cyber-border bg-cyber-bg/70 px-2 py-1 font-mono text-xs text-cyber-violet"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {!isSlot && (
                  <div className="relative mt-6 flex gap-2">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-cyber-cyan/10 px-3 py-1.5 text-sm text-cyber-cyan transition-colors hover:bg-cyber-cyan/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyber-cyan"
                      >
                        <ExternalLink size={14} aria-hidden /> Live Demo
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-cyber-border px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyber-cyan"
                      >
                        <Github size={14} aria-hidden /> GitHub
                      </a>
                    )}
                  </div>
                )}
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

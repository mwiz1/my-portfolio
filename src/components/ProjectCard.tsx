import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/config";
import { Tag } from "./ui";

export default function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const p = project;
  return (
    <article
      className={`rounded-2xl border border-line bg-panel/80 backdrop-blur-md ${
        large ? "p-6 md:p-10" : "p-6 md:p-8"
      }`}
    >
      <div className={large ? "md:grid md:grid-cols-[1.1fr_1fr] md:gap-12" : ""}>
        <div>
          <p dir="ltr" className="text-right text-sm text-sand">{p.subtitle}</p>
          <h3 className={`mt-1 font-kufi font-semibold leading-snug text-fg ${large ? "text-3xl md:text-4xl" : "text-2xl"}`}>
            {p.title}
          </h3>
          <p className="mt-4 text-fg/80">{p.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          {(p.live || p.github) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-cyan/10 px-4 py-2 text-sm font-medium text-cyan hover:bg-cyan/20">
                  <ExternalLink className="h-4 w-4" aria-hidden /> افتح المشروع
                </a>
              )}
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm text-fg hover:border-cyan/60">
                  <Github className="h-4 w-4" aria-hidden /> الكود على GitHub
                </a>
              )}
            </div>
          )}
        </div>

        {p.points.length > 0 && (
          <ul className={`space-y-3 text-[15px] text-fg/75 ${large ? "mt-8 md:mt-0" : "mt-6"}`}>
            {p.points.map((pt) => (
              <li key={pt} className="flex gap-3">
                <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

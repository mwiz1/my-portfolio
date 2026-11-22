import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ExternalLink, Github, ShieldCheck } from "lucide-react";
import { Container, Tag } from "@/components/ui";
import { StatusBadge } from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/config";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = PROJECTS.find((x) => x.slug === params.slug);
  return p ? { title: `${p.title} (${p.titleEn})`, description: p.summary } : {};
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = PROJECTS.find((x) => x.slug === params.slug);
  if (!p) notFound();

  const i = PROJECTS.indexOf(p);
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  return (
    <Container className="max-w-4xl">
      <Link href="/projects" className="mt-8 inline-flex items-center gap-2 text-sm text-muted hover:text-cyan md:mt-12">
        <ArrowRight className="h-4 w-4" aria-hidden /> كل المشاريع
      </Link>

      <header className="border-b border-line pb-10 pt-8">
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={p.status} />
          <span dir="ltr" className="text-muted">{p.titleEn}</span>
        </div>
        <h1 className="mt-4 font-kufi text-5xl font-bold leading-tight text-fg md:text-7xl">{p.title}</h1>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-fg/85">{p.summary}</p>
        {p.role && (
          <p className="mt-5 text-fg/75">
            <span className="text-muted">دوري: </span>
            {p.role}
          </p>
        )}
        {(p.live || p.github) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-cyan px-5 py-3 font-semibold text-ink hover:bg-[#6BDDE9]">
                <ExternalLink className="h-4 w-4" aria-hidden /> افتح المشروع
              </a>
            )}
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-fg hover:border-cyan/60">
                <Github className="h-4 w-4" aria-hidden /> الكود على GitHub
              </a>
            )}
          </div>
        )}
      </header>

      <section className="py-10">
        <h2 className="font-kufi text-2xl font-semibold text-fg md:text-3xl">وش المشكلة؟</h2>
        <p className="mt-4 max-w-3xl text-lg leading-loose text-fg/80">{p.problem}</p>
      </section>

      <section className="py-10">
        <h2 className="font-kufi text-2xl font-semibold text-fg md:text-3xl">{p.status === "done" ? "وش سويت" : "وش يسوي"}</h2>
        <ul className="mt-5 space-y-3 text-lg text-fg/80">
          {p.did.map((d) => (
            <li key={d} className="flex gap-3">
              <span className="mt-[0.75em] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </section>

      {p.extra && (
        <section className="my-6 rounded-2xl border border-sand/30 bg-sand/[0.06] p-6 md:p-8">
          <h2 className="flex items-center gap-3 font-kufi text-2xl font-semibold text-fg">
            <ShieldCheck className="h-6 w-6 text-sand" aria-hidden />
            {p.extra.title}
          </h2>
          <ul className="mt-5 space-y-3 text-fg/80">
            {p.extra.points.map((d) => (
              <li key={d} className="flex gap-3">
                <span className="mt-[0.75em] h-1.5 w-1.5 shrink-0 rounded-full bg-sand" aria-hidden />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="py-10">
        <h2 className="mb-4 text-sm text-muted">المجالات والتقنيات</h2>
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </section>

      {next.slug !== p.slug && (
        <Link
          href={`/projects/${next.slug}`}
          className="mb-20 mt-6 flex items-center justify-between rounded-2xl border border-line bg-panel/70 p-6 transition-colors hover:border-cyan/50"
        >
          <span>
            <span className="block text-sm text-muted">المشروع التالي</span>
            <span className="font-kufi text-2xl text-fg">{next.title}</span>
          </span>
          <ArrowRight className="h-5 w-5 rotate-180 text-cyan" aria-hidden />
        </Link>
      )}
    </Container>
  );
}

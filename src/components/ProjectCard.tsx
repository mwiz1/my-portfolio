import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { STATUS_LABEL, type Project } from "@/lib/config";
import { Tag } from "./ui";

export function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
        status === "done" ? "bg-emerald-400/10 text-emerald-300" : "bg-sand/10 text-sand"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${status === "done" ? "bg-emerald-300" : "bg-sand"}`} aria-hidden />
      {STATUS_LABEL[status]}
    </span>
  );
}

export default function ProjectCard({ project: p }: { project: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-panel/80 p-6 backdrop-blur-md transition-colors hover:border-cyan/50 md:p-8"
    >
      <div className="flex items-center justify-between gap-3">
        <StatusBadge status={p.status} />
        <span dir="ltr" className="text-sm text-muted">{p.titleEn}</span>
      </div>
      <h3 className="mt-4 font-kufi text-3xl font-semibold text-fg">{p.title}</h3>
      <p className="mt-3 flex-1 text-fg/80">{p.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {p.tags.slice(0, 3).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <span className="mt-6 inline-flex items-center gap-2 font-medium text-cyan">
        تفاصيل المشروع
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}

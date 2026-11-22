import Link from "next/link";
import { Mail, Phone, MessageSquare } from "lucide-react";
import HeroIntro from "@/components/HeroIntro";
import ProjectCard from "@/components/ProjectCard";
import { Container, SectionHeading, Tag } from "@/components/ui";
import { DOMAINS, PROJECTS, EDUCATION, CERTIFICATIONS, PROFILE } from "@/lib/config";

export default function HomePage() {
  const featured = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];

  return (
    <Container>
      <HeroIntro />

      {/* مجالات العمل */}
      <section className="py-16 md:py-24">
        <SectionHeading title="ما أعمل عليه" lead="ثلاثة مجالات أجمع بينها في كل نظام أبنيه." />
        <div className="grid divide-y divide-line border-y border-line md:grid-cols-3 md:divide-x md:divide-y-0 md:divide-x-reverse">
          {DOMAINS.map((d) => (
            <div key={d.id} className="py-8 md:px-8 md:py-10 md:first:pr-0 md:last:pl-0">
              <h3 className="font-kufi text-xl font-semibold text-fg md:text-2xl">{d.title}</h3>
              <p className="mt-3 text-fg/75">{d.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {d.skills.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* المشروع الأبرز */}
      <section className="py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading title="المشروع الأبرز" />
          <Link href="/projects" className="mb-8 text-cyan hover:underline md:mb-10">
            كل المشاريع
          </Link>
        </div>
        <ProjectCard project={featured} large />
      </section>

      {/* التعليم والشهادات */}
      <section className="grid gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <SectionHeading title="التعليم" />
          {EDUCATION.map((e) => (
            <div key={e.title} className="border-r-2 border-sand pr-5">
              <p className="font-kufi text-3xl text-sand">{e.year}</p>
              <h3 className="mt-1 text-xl font-semibold text-fg">{e.title}</h3>
              <p className="text-fg/75">{e.place}</p>
              <p className="mt-1 text-sm text-muted">{e.note}</p>
            </div>
          ))}
        </div>
        <div>
          <SectionHeading title="الشهادات" />
          <ul className="space-y-4">
            {CERTIFICATIONS.map((c) => (
              <li key={c.title} className="flex items-start justify-between gap-4 border-b border-line pb-4">
                <span dir="ltr" className="text-left text-fg">{c.title}</span>
                <span className="shrink-0 rounded-md bg-sand/10 px-2 py-0.5 text-sm text-sand">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* التواصل */}
      <section className="py-16 md:py-28">
        <div className="rounded-3xl border border-line bg-panel/80 p-7 backdrop-blur-md md:p-14">
          <h2 className="font-kufi text-3xl font-semibold leading-snug text-fg md:text-5xl">نشتغل سوا؟</h2>
          <p className="mt-4 max-w-xl text-fg/75 md:text-lg">
            إذا عندك فرصة عمل أو مشروع أو حتى سؤال، تواصل معي مباشرة، أو أرسل رسالة بدون اسم من صندوق الصراحة.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan px-6 py-3.5 font-semibold text-ink hover:bg-[#6BDDE9]">
              <Mail className="h-4 w-4" aria-hidden /> راسلني على الإيميل
            </a>
            <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-line px-6 py-3.5 text-fg hover:border-cyan/60">
              <Phone className="h-4 w-4" aria-hidden /> <span dir="ltr">{PROFILE.phone}</span>
            </a>
            <Link href="/feedback" className="inline-flex items-center justify-center gap-2 rounded-xl border border-line px-6 py-3.5 text-fg hover:border-cyan/60">
              <MessageSquare className="h-4 w-4" aria-hidden /> صندوق الصراحة
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}

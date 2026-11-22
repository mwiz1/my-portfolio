import { Download, MapPin, Mail, Phone } from "lucide-react";
import { Container, SectionHeading, Tag } from "@/components/ui";
import { PROFILE, SUMMARY, SKILL_GROUPS, PROJECTS, EDUCATION, CERTIFICATIONS, LANGUAGES } from "@/lib/config";

export default function ResumePage() {
  return (
    <Container className="max-w-4xl">
      {/* رأس السيرة */}
      <header className="flex flex-col gap-8 border-b border-line pb-10 pt-10 md:flex-row md:items-end md:justify-between md:pt-20">
        <div>
          <h1 className="font-kufi text-4xl font-semibold leading-tight text-fg md:text-5xl">{PROFILE.fullName}</h1>
          <p dir="ltr" className="mt-2 text-right text-muted">{PROFILE.nameEn}</p>
          <p className="mt-3 font-kufi text-xl text-sand">{PROFILE.role}</p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg/75">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-sand" aria-hidden />{PROFILE.location}</li>
            <li><a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-cyan"><Phone className="h-4 w-4 text-sand" aria-hidden /><span dir="ltr">{PROFILE.phone}</span></a></li>
            <li><a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 hover:text-cyan"><Mail className="h-4 w-4 text-sand" aria-hidden /><span dir="ltr">{PROFILE.email}</span></a></li>
          </ul>
        </div>
        <a
          href={PROFILE.cv}
          download={PROFILE.cvFileName}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan px-6 py-3.5 font-semibold text-ink hover:bg-[#6BDDE9]"
        >
          <Download className="h-4 w-4" aria-hidden /> تحميل السيرة PDF
        </a>
      </header>

      <section className="py-12">
        <SectionHeading title="نبذة مهنية" />
        <p className="max-w-3xl text-lg leading-loose text-fg/85">{SUMMARY}</p>
      </section>

      <section className="py-12">
        <SectionHeading title="المهارات" />
        <div className="grid gap-8 sm:grid-cols-2">
          {SKILL_GROUPS.map((g) => (
            <div key={g.title}>
              <h3 className="mb-3 font-semibold text-sand">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <SectionHeading title="الخبرة العملية والمشاريع" />
        <div className="space-y-10">
          {PROJECTS.filter((p) => p.points.length > 0).map((p) => (
            <article key={p.id} className="border-r-2 border-cyan/60 pr-5">
              <h3 className="font-kufi text-2xl font-semibold text-fg">{p.title}</h3>
              <p dir="ltr" className="text-right text-sm text-muted">{p.subtitle}</p>
              <ul className="mt-4 space-y-2.5 text-fg/80">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-[0.75em] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-12 py-12 pb-20 md:grid-cols-3">
        <div>
          <SectionHeading title="التعليم" />
          {EDUCATION.map((e) => (
            <div key={e.title}>
              <p className="font-kufi text-2xl text-sand">{e.year}</p>
              <h3 className="font-semibold text-fg">{e.title}</h3>
              <p className="text-sm text-fg/75">{e.place}</p>
              <p className="mt-1 text-sm text-muted">{e.note}</p>
            </div>
          ))}
        </div>
        <div>
          <SectionHeading title="الشهادات" />
          <ul className="space-y-4">
            {CERTIFICATIONS.map((c) => (
              <li key={c.title}>
                <p dir="ltr" className="text-left text-fg">{c.title}</p>
                <p className="text-sm text-sand">{c.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading title="اللغات" />
          <ul className="space-y-3">
            {LANGUAGES.map((l) => (
              <li key={l.name} className="flex justify-between gap-4 border-b border-line pb-3">
                <span className="text-fg">{l.name}</span>
                <span className="text-sm text-muted">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Container>
  );
}

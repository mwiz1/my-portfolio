import Link from "next/link";
import { Mail, MessageSquare, Linkedin, Github, Phone } from "lucide-react";
import HeroIntro from "@/components/HeroIntro";
import ProjectCard from "@/components/ProjectCard";
import { Container, SectionHeading } from "@/components/ui";
import { ABOUT, PATH, PROJECTS, SKILLS, EXPERIENCE, EDUCATION, CERTIFICATIONS, CVS, PROFILE } from "@/lib/config";
import { publicFileExists } from "@/lib/files";

export default function HomePage() {
  const cv = CVS.find((c) => c.primary && publicFileExists(c.file)) ?? CVS.find((c) => publicFileExists(c.file));
  const photo = publicFileExists(PROFILE.photo) ? PROFILE.photo : undefined;

  return (
    <Container>
      <HeroIntro cvHref={cv?.file} photo={photo} />

      {/* من أنا */}
      <section id="about" className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr] md:gap-16 md:py-24">
        <div>
          <SectionHeading title="من أنا" />
          <div className="space-y-5 text-lg leading-loose text-fg/85">
            {ABOUT.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className="md:pt-20">
          <h3 className="mb-5 text-sm text-muted">وين أتجه</h3>
          <ol className="relative space-y-6 border-r border-line pr-6">
            {PATH.map((s) => (
              <li key={s.title} className="relative">
                <span className="absolute -right-[29px] top-2 h-2.5 w-2.5 rounded-full bg-sand ring-4 ring-ink" aria-hidden />
                <p className="text-sm text-sand">{s.step}</p>
                <p className="font-kufi text-xl text-fg">{s.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* المشاريع */}
      <section className="py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading title="مشاريعي" lead="اضغط على أي مشروع لتشوف تفاصيله." />
          <Link href="/projects" className="mb-8 text-cyan hover:underline md:mb-10">
            كل المشاريع
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* المهارات */}
      <section className="py-16 md:py-24">
        <SectionHeading title="المهارات" lead="مع شرح مختصر لكل مهارة، لو ما كنت من مجال التقنية." />
        <dl className="grid border-t border-line sm:grid-cols-2">
          {SKILLS.map((s) => (
            <div key={s.name} className="border-b border-line py-6 sm:odd:pl-8 sm:even:pr-8">
              <dt className="flex flex-wrap items-baseline gap-x-3">
                <span className="text-lg font-semibold text-fg">{s.name}</span>
                <span dir="ltr" className="text-sm text-sand">{s.en}</span>
              </dt>
              <dd className="mt-1.5 text-fg/70">{s.explain}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* الخبرة والتعليم والشهادات */}
      <section className="grid gap-14 py-16 md:grid-cols-2 md:py-24">
        <div className="space-y-14">
          <div>
            <SectionHeading title="الخبرة والأنشطة" />
            <ul className="space-y-6">
              {EXPERIENCE.map((e) => (
                <li key={e.place} className="border-r-2 border-cyan/60 pr-5">
                  <p className="text-sm text-sand">{e.date}</p>
                  <h3 className="text-lg font-semibold text-fg">{e.title}</h3>
                  <p className="text-fg/75">{e.place}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading title="التعليم" />
            {EDUCATION.map((e) => (
              <div key={e.title} className="border-r-2 border-sand pr-5">
                <p className="text-sm text-sand">{e.date}</p>
                <h3 className="text-lg font-semibold text-fg">{e.title}</h3>
                <p className="text-fg/75">{e.place}</p>
                <p className="mt-1 text-sm text-muted">{e.note}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading title="الشهادات" />
          <ul>
            {CERTIFICATIONS.map((c) => (
              <li key={c.title} className="border-b border-line py-4 first:pt-0">
                <p dir="ltr" className="text-left text-fg">{c.title}</p>
                <p className="mt-1 text-sm text-sand">{c.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* تواصل معي */}
      <section id="contact" className="scroll-mt-24 py-16 md:py-28">
        <div className="rounded-3xl border border-line bg-panel/80 p-7 backdrop-blur-md md:p-14">
          <h2 className="font-kufi text-3xl font-semibold leading-snug text-fg md:text-5xl">تواصل معي</h2>
          <p className="mt-4 max-w-xl text-fg/75 md:text-lg">
            عندك فرصة وظيفية أو سؤال؟ راسلني على الإيميل. ولو تبي تقول رأيك بدون اسم، استخدم صندوق الصراحة.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan px-6 py-3.5 font-semibold text-ink hover:bg-[#6BDDE9]">
              <Mail className="h-4 w-4" aria-hidden /> <span dir="ltr">{PROFILE.email}</span>
            </a>
            {PROFILE.phone && (
              <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-line px-6 py-3.5 text-fg hover:border-cyan/60">
                <Phone className="h-4 w-4" aria-hidden /> <span dir="ltr">{PROFILE.phone}</span>
              </a>
            )}
            {PROFILE.linkedin && (
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-line px-6 py-3.5 text-fg hover:border-cyan/60">
                <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
              </a>
            )}
            {PROFILE.github && (
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-line px-6 py-3.5 text-fg hover:border-cyan/60">
                <Github className="h-4 w-4" aria-hidden /> GitHub
              </a>
            )}
            <Link href="/feedback" className="inline-flex items-center justify-center gap-2 rounded-xl border border-line px-6 py-3.5 text-fg hover:border-cyan/60">
              <MessageSquare className="h-4 w-4" aria-hidden /> صندوق الصراحة
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}

import { Download, FileText } from "lucide-react";
import { Container, PageHeader, SectionHeading } from "@/components/ui";
import { CVS, EDUCATION, EXPERIENCE, CERTIFICATIONS, SKILLS, PROFILE } from "@/lib/config";
import { publicFileExists } from "@/lib/files";

export const metadata = { title: "السيرة الذاتية" };

export default function ResumePage() {
  const available = CVS.filter((c) => publicFileExists(c.file));

  return (
    <Container className="max-w-4xl">
      <PageHeader
        title="السيرة الذاتية"
        lead="عندي أكثر من نسخة، كل وحدة مركّزة على مجال. اختر النسخة اللي تناسب الوظيفة."
      />

      <section className="pb-12">
        {available.length > 0 ? (
          <ul className="grid gap-3 sm:grid-cols-2">
            {available.map((c) => (
              <li key={c.id}>
                <a
                  href={c.file}
                  download
                  className={`flex items-center justify-between gap-4 rounded-xl border p-5 transition-colors ${
                    c.primary ? "border-cyan/60 bg-cyan/10 hover:bg-cyan/15" : "border-line bg-panel/80 hover:border-cyan/50"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <FileText className={`h-5 w-5 ${c.primary ? "text-cyan" : "text-sand"}`} aria-hidden />
                    <span className="font-medium text-fg">{c.label}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-cyan">
                    <Download className="h-4 w-4" aria-hidden /> PDF
                  </span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">
            السيرة الذاتية غير متاحة حالياً. تقدر تطلبها على <a href={`mailto:${PROFILE.email}`} className="text-cyan" dir="ltr">{PROFILE.email}</a>
          </p>
        )}
      </section>

      <section className="border-t border-line py-12">
        <SectionHeading title="باختصار" />
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-semibold text-sand">التعليم</h3>
            {EDUCATION.map((e) => (
              <p key={e.title} className="text-fg/85">
                {e.title}، {e.place} ({e.date})، {e.note}
              </p>
            ))}
            <h3 className="mb-3 mt-8 font-semibold text-sand">الخبرة والأنشطة</h3>
            <ul className="space-y-2 text-fg/85">
              {EXPERIENCE.map((e) => (
                <li key={e.place}>
                  {e.title}، {e.place} <span className="text-sm text-muted">({e.date})</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-sand">المهارات</h3>
            <ul className="space-y-1.5 text-fg/85">
              {SKILLS.map((s) => (
                <li key={s.name}>{s.name}</li>
              ))}
            </ul>
            <h3 className="mb-3 mt-8 font-semibold text-sand">الشهادات</h3>
            <ul className="space-y-2">
              {CERTIFICATIONS.map((c) => (
                <li key={c.title}>
                  <span dir="ltr" className="block text-left text-fg/85">{c.title}</span>
                  <span className="text-sm text-muted">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
}

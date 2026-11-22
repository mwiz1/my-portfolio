import ProjectCard from "@/components/ProjectCard";
import { Container, PageHeader } from "@/components/ui";
import { PROJECTS } from "@/lib/config";

export default function AnalyticsPage() {
  const list = PROJECTS.filter((p) => p.category === "data");
  return (
    <Container>
      <PageHeader title="البيانات والتحليل" lead="نمذجة البيانات، واستعلامات SQL، وتحويل السجلات والأرقام إلى تقارير ولوحات تساعد على القرار." />
      <div className="grid gap-6 pb-20 lg:grid-cols-2">
        {list.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Container>
  );
}

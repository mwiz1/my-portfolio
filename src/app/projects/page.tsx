import ProjectCard from "@/components/ProjectCard";
import { Container, PageHeader } from "@/components/ui";
import { PROJECTS } from "@/lib/config";

export default function ProjectsPage() {
  const list = PROJECTS.filter((p) => p.category === "web");
  return (
    <Container>
      <PageHeader title="المشاريع البرمجية" lead="أنظمة ومنصات بنيتها من تحليل المتطلبات إلى قاعدة البيانات إلى الواجهة." />
      <div className="space-y-6 pb-20">
        {list.map((p, i) => (
          <ProjectCard key={p.id} project={p} large={i === 0} />
        ))}
      </div>
    </Container>
  );
}

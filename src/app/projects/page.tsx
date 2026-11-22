import ProjectCard from "@/components/ProjectCard";
import { Container, PageHeader } from "@/components/ui";
import { PROJECTS } from "@/lib/config";

export const metadata = { title: "مشاريعي" };

export default function ProjectsPage() {
  return (
    <Container>
      <PageHeader title="مشاريعي" lead="مشروع تخرجي، ومشروعين أشتغل عليهم الحين. اضغط على أي مشروع لتشوف تفاصيله." />
      <div className="grid gap-5 pb-20 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Container>
  );
}

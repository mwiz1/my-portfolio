import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen text-slate-200 px-6 py-20 max-w-5xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">المشاريع والأنظمة البرمجية</h1>
        <p className="text-slate-400 text-sm">استعراض للمنصات الرقمية وهندسة الأنظمة التي تم تطويرها.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="منصة تربي (Trippie)"
          category="سياحة رقمية وحجوزات"
          description="منصة متكاملة لتخطيط الرحلات السياحية، وتوليد المسارات الذكية، وأتمتة إجراءات الحجز مع إدارة متقدمة لقواعد البيانات."
          tags={["Node.js", "SQL Database", "Systems Analysis", "UI/UX", "APIs"]}
          isHero={true}
          demoUrl="#"
          githubUrl="#"
        />
        {/* يمكنك إضافة مشاريعك الأخرى هنا */}
      </div>
    </div>
  );
}
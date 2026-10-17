import ProjectCard from "@/components/ProjectCard";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen text-slate-200 px-6 py-20 max-w-5xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">تحليل البيانات والمؤشرات الإحصائية</h1>
        <p className="text-slate-400 text-sm">لوحات تحكم تفاعلية ودراسات بيانية لاستخلاص الرؤى والأرقام.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="لوحة مؤشرات الأداء والعمليات"
          category="Data Visualization"
          description="تحليل مجموعات بيانات ضخمة، نمذجة العلاقات، وتصميم داشبورد تفاعلي يبرز المقارنات والاتجاهات الإحصائية."
          tags={["Power BI", "SQL", "Excel Data Modeling", "Data Analysis"]}
          demoUrl="#"
          githubUrl="#"
        />
      </div>
    </div>
  );
}
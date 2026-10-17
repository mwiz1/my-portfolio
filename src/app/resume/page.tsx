import { 
  Download, 
  MapPin, 
  Mail, 
  Phone, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Languages, 
  Layers, 
  Terminal,
  ExternalLink 
} from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen text-slate-200 px-6 py-24 max-w-4xl mx-auto space-y-12">
      
      {/* هيدر السيرة الذاتية وزر التحميل */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 rounded-3xl bg-[#0c1324]/80 border border-slate-800 shadow-[0_0_30px_rgba(6,182,212,0.1)] backdrop-blur-xl">
        <div className="space-y-2 text-right">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide">
            عبد الملك علي الغامدي
          </h1>
          <p className="text-cyan-400 font-mono text-sm md:text-base font-semibold">
            Information Technology Graduate | Software Systems & IT Specialist
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> الرياض، المملكة العربية السعودية</span>
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-400" /> +966 50 051 2410</span>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-violet-400" /> itbdamlk@gmail.com</span>
          </div>
        </div>

        {/* زر تحميل الـ PDF الورقي */}
        <a
          href="/cv.pdf"
          download="Abdulmalik_Alghamdi_CV.pdf"
          className="group flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:opacity-95 transition-all duration-300 hover:scale-[1.02] cursor-pointer whitespace-nowrap self-stretch md:self-auto justify-center"
        >
          <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          <span>تحميل النسخة الورقية (PDF)</span>
        </a>
      </div>

      {/* 1. الملخص المهني Professional Summary */}
      <section className="space-y-4 text-right">
        <div className="flex items-center gap-2.5 text-cyan-400 font-mono text-sm font-bold border-b border-slate-800 pb-2">
          <Terminal className="w-4 h-4" />
          <span>PROFESSIONAL SUMMARY // الملخص المهني</span>
        </div>
        <div className="p-6 rounded-2xl bg-[#0c1324]/50 border border-slate-800/80 backdrop-blur-md">
          <p className="text-slate-300 leading-relaxed text-sm md:text-base font-normal">
            Information Technology graduate targeting software systems and IT operations roles, with hands-on backend development experience in Node.js and JavaScript. Skilled in relational database design, system integration, and data modeling, with working knowledge of networking protocols, virtualization, and information security principles. Experienced in Agile delivery and technical project tracking, and known for analyzing operational workflows to deliver reliable digital solutions.
          </p>
        </div>
      </section>

      {/* 2. المهارات التقنية Technical Skills */}
      <section className="space-y-4 text-right">
        <div className="flex items-center gap-2.5 text-cyan-400 font-mono text-sm font-bold border-b border-slate-800 pb-2">
          <Layers className="w-4 h-4" />
          <span>TECHNICAL SKILLS // المهارات والأدوات</span>
        </div>
        <div className="flex flex-wrap gap-2.5 p-6 rounded-2xl bg-[#0c1324]/50 border border-slate-800/80 backdrop-blur-md">
          {[
            "JavaScript", "Node.js", "Database Management", "SQL & Relational Databases",
            "System Architecture", "IT Infrastructure", "TCP/IP Networking", "Virtual Machines",
            "Information Security", "Cloud Fundamentals (AWS)", "Log Analysis", "Agile & Scrum",
            "Project Planning (WBS)", "Data Modeling (ERD)", "RESTful APIs", "MS Excel (Analytics)",
            "SDLC", "Systems Integration", "Technical Documentation", "VS Code"
          ].map((skill) => (
            <span
              key={skill}
              className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-slate-900/90 text-cyan-300 border border-slate-700/60 hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] transition-all duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* 3. الخبرة العملية والمشاريع Practical Experience & Projects */}
      <section className="space-y-6 text-right">
        <div className="flex items-center gap-2.5 text-cyan-400 font-mono text-sm font-bold border-b border-slate-800 pb-2">
          <Briefcase className="w-4 h-4" />
          <span>PRACTICAL EXPERIENCE & PROJECTS // المشاريع والأنظمة</span>
        </div>

        {/* Project 1 */}
        <div className="p-6 rounded-2xl bg-[#0c1324]/50 border border-slate-800/80 space-y-4 hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
            <h3 className="text-lg font-bold text-white">Tarbi Integrated Digital System Project</h3>
            <span className="text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">Full-Stack Solution</span>
          </div>
          <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside leading-relaxed marker:text-cyan-400">
            <li>Built a full-stack digital solution with Node.js and JavaScript to streamline user workflows and automate system processes.</li>
            <li>Engineered structured relational database schemas, ensuring data integrity, optimized queries, and reliable data flow.</li>
            <li>Mapped technical workflows through comprehensive systems analysis, translating functional requirements into high-efficiency software components.</li>
            <li>Implemented robust error handling, API connectivity, and log tracking to enhance backend reliability and system uptime.</li>
            <li>Tracked sprint milestones and module delivery using Agile methodologies and Work Breakdown Structures (WBS).</li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="p-6 rounded-2xl bg-[#0c1324]/50 border border-slate-800/80 space-y-4 hover:border-violet-500/40 transition-colors">
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
            <h3 className="text-lg font-bold text-white">Database Systems & IT Operations Lab</h3>
            <span className="text-xs font-mono text-violet-400 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">Data & Systems</span>
          </div>
          <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside leading-relaxed marker:text-violet-400">
            <li>Modeled complex Entity-Relationship Diagrams (ERDs) and executed structured SQL queries for enterprise data management.</li>
            <li>Configured virtual machine environments (VMs) to test system deployments and network configurations in isolated settings.</li>
            <li>Analyzed system event logs and processed operational data sets using advanced Excel techniques to produce actionable technical summaries and reporting dashboards.</li>
          </ul>
        </div>
      </section>

      {/* 4. التعليم والشهادات واللغات في شبكة جانبية */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
        {/* Education */}
        <section className="space-y-4 p-6 rounded-2xl bg-[#0c1324]/50 border border-slate-800/80">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold border-b border-slate-800 pb-2">
            <GraduationCap className="w-4 h-4" />
            <span>EDUCATION // التعليم</span>
          </div>
          <div className="space-y-1">
            <h4 className="text-white font-bold text-base">Bachelor of Information Technology</h4>
            <p className="text-slate-400 text-sm">Al Baha University (2026)</p>
            <p className="text-cyan-400 font-mono text-xs pt-1">GPA: 3.17 / 4.00</p>
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-4 p-6 rounded-2xl bg-[#0c1324]/50 border border-slate-800/80">
          <div className="flex items-center gap-2 text-violet-400 font-mono text-sm font-bold border-b border-slate-800 pb-2">
            <Award className="w-4 h-4" />
            <span>CERTIFICATIONS // الشهادات الاحترافية</span>
          </div>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-white font-medium">Technical Project Management & Agile Methodologies</p>
              <p className="text-xs text-slate-400 font-mono">IBM</p>
            </div>
            <div>
              <p className="text-white font-medium">Data Analysis & Information Processing Fundamentals</p>
              <p className="text-xs text-slate-400 font-mono">IBM</p>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="space-y-4 p-6 rounded-2xl bg-[#0c1324]/50 border border-slate-800/80 md:col-span-2">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-bold border-b border-slate-800 pb-2">
            <Languages className="w-4 h-4" />
            <span>LANGUAGES // اللغات</span>
          </div>
          <div className="flex gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">العربية:</span>
              <span className="text-slate-400 text-xs font-mono">اللغة الأم (Native)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">English:</span>
              <span className="text-slate-400 text-xs font-mono">Professional Working Proficiency</span>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}
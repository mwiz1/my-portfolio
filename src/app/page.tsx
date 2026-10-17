import { Compass, Sparkles, Target, Cpu, Calendar, Globe, Code2, Database, Layout, Terminal } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen text-slate-200 relative">
      <main className="max-w-4xl mx-auto px-6 py-28 relative z-10 space-y-40">

        {/* 1. الواجهة التعريفية الأولى (Hero Section) */}
        <section className="min-h-[75vh] flex flex-col justify-center text-right space-y-7">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/40 text-cyan-400 text-xs font-mono w-fit backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:border-cyan-400 transition-all cursor-default group">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="group-hover:text-white transition-colors">متاح للفرص والمشاريع التقنية ⚡</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 tracking-tight leading-tight drop-shadow-sm">
              عبد الملك الغامدي
            </h1>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 font-mono text-base md:text-xl font-bold">
              Information Technology Specialist // Systems Analyst & Developer
            </p>
          </div>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl">
            أخصائي تقنية معلومات متخصص في تحليل الأنظمة، هندسة وتطبيع قواعد البيانات، وبناء المنصات السحابية. أسخر التكنولوجيا لأتمتة العمليات وتحويل البيانات الضخمة إلى تجارب رقمية مستقرة وسريعة جداً.
          </p>

          <div className="flex flex-wrap gap-2.5 pt-3">
            {[
              "Systems Analysis",
              "Database Design & SQL",
              "Web Applications",
              "Workflow Digitization",
              "Data Modeling & BI",
            ].map((skill) => (
              <span
                key={skill}
                className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-[#0b1222]/80 text-cyan-300 border border-cyan-900/60 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* 2. قسم: من أنا؟ */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-cyan-500/20 pb-4">
            <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">من أنا؟</h2>
          </div>

          <div className="group p-8 md:p-10 rounded-3xl bg-[#0c1324]/60 border border-slate-800/80 hover:border-cyan-500/60 backdrop-blur-xl space-y-4 transition-all duration-500 hover:shadow-[0_0_35px_rgba(6,182,212,0.15)] hover:-translate-y-1">
            <p className="text-slate-200 leading-relaxed text-base md:text-lg">
              خريج بكالوريوس في تقنية المعلومات من كلية علوم الحاسب وتقنية المعلومات بجامعة الباحة. امتلك شغفاً حقيقياً بكيفية بناء البرمجيات المعقدة وهيكلة قواعد البيانات لتعمل بأقصى سرعة واستقرار دون انقطاع.
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              تركيزي الدائم ينصب على حل المشكلات التقنية من جذورها، وكتابة كود نظيف وقابل للتوسع المستمر، مع تصميم واجهات حديثة مريحة تأسر المستخدم.
            </p>
          </div>
        </section>

        {/* 3. قسم: ماذا أقدم؟ */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-violet-500/20 pb-4">
            <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/40 flex items-center justify-center text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">ماذا أقدم؟</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group p-7 rounded-3xl bg-[#0c1324]/60 border border-slate-800/80 hover:border-cyan-400/60 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.18)] hover:-translate-y-1 space-y-3">
              <div className="flex items-center gap-3 text-cyan-400 font-bold text-base">
                <Layout className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>تطوير تطبيقات ومنصات الويب</span>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                بناء تطبيقات الويب التفاعلية الكاملة (Full-Stack) بأداء فائق، وربطها بالواجهات البرمجية وتوفير تجربة استخدام لا تُنسى.
              </p>
            </div>

            <div className="group p-7 rounded-3xl bg-[#0c1324]/60 border border-slate-800/80 hover:border-violet-400/60 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.18)] hover:-translate-y-1 space-y-3">
              <div className="flex items-center gap-3 text-violet-400 font-bold text-base">
                <Database className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>تحليل الأنظمة وهندسة البيانات</span>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                تصميم مخططات العلاقات لقواعد البيانات، كتابة استعلامات SQL متقدمة، وأتمتة مسارات نقل وتجهيز البيانات.
              </p>
            </div>
          </div>
        </section>

        {/* 4. قسم: لماذا هذا الموقع؟ */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-emerald-500/20 pb-4">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">لماذا هذا الموقع؟</h2>
          </div>

          <div className="group p-8 md:p-10 rounded-3xl bg-[#0c1324]/60 border border-slate-800/80 hover:border-emerald-500/60 backdrop-blur-xl space-y-4 transition-all duration-500 hover:shadow-[0_0_35px_rgba(16,185,129,0.15)] hover:-translate-y-1">
            <p className="text-slate-200 leading-relaxed text-base md:text-lg">
              صُمم هذا الموقع ليكون منصة تفاعلية حية تكسر جمود السيرة الذاتية الورقية؛ حيث يستعرض مشاريعي وقدراتي التقنية في بيئة ويب متقدمة.
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              كما يوفر قناة اتصال مباشرة وسرية تتيح للزوار والزملاء ومسؤولي التوظيف مشاركة آرائهم وملاحظاتهم وطرح أسئلتهم بنقرة واحدة عبر صندوق صراحة في القائمة.
            </p>
          </div>
        </section>

        {/* 5. بطاقة المنظومة التقنية التفاعلية أسفل الصفحة */}
        <section className="pt-20 pb-16">
          <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0b1222]/90 to-[#050914] border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.12)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent animate-pulse" />
            
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
              <div className="flex items-center gap-2.5 text-cyan-400 font-mono text-sm font-bold">
                <Terminal className="w-5 h-5 text-cyan-400 animate-pulse" />
                <span>SYSTEM_SPECIFICATIONS // LIVE METRICS</span>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                Active Protocol
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 transition-colors">
                <Calendar className="w-4 h-4 text-violet-400" />
                <span>سنة الإنشاء: 2026</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-emerald-500/40 transition-colors">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>الشبكة السحابية: Vercel Edge + Supabase Cloud</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 md:col-span-2 hover:border-cyan-500/40 transition-colors">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>التقنيات: Next.js 14, TypeScript, Tailwind CSS, PostgreSQL, Real-Time Triggers</span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
"use client";

import { Terminal, Sparkles, Target, Compass, FileText, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center py-20 px-4 max-w-5xl mx-auto">
      {/* إشارة الحالة */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-8 w-fit">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>متاح لفرص العمل والتعاون التقني</span>
      </div>

      {/* العنوان والترحيب */}
      <div className="space-y-4 mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          مرحباً بك في مساحتي التقنية <span className="text-cyber-cyan font-mono">//</span>
        </h1>
        <p className="text-slate-400 text-base md:text-lg max-w-3xl leading-relaxed">
          متخصص في تقنية المعلومات وتطوير الأنظمة البرمجية وتحليل البيانات. أركز على بناء حلول رقمية تدمج بين هندسة العمليات، كفاءة قواعد البيانات، وتجربة المستخدم الحديثة.
        </p>
      </div>

      {/* بطاقات التعريف الثلاثية (من أنا / ماذا أقدم / أهداف الموقع) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {/* بطاقة 1: من أنا */}
        <div className="p-6 rounded-2xl bg-cyber-card/60 border border-cyber-border backdrop-blur-md hover:border-cyber-cyan/40 transition-all">
          <div className="w-10 h-10 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan mb-4">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="text-white font-bold text-base mb-2">من أنا؟</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            مطور شغوف ببناء المنظومات التقنية، تصميم وتطبيع قواعد البيانات، وأتمتة مسارات العمل الرقمية لتقديم حلول برمجية مستقرة وسريعة.
          </p>
        </div>

        {/* بطاقة 2: ماذا أصنع وأقدم */}
        <div className="p-6 rounded-2xl bg-cyber-card/60 border border-cyber-border backdrop-blur-md hover:border-cyber-violet/40 transition-all">
          <div className="w-10 h-10 rounded-xl bg-cyber-violet/10 border border-cyber-violet/30 flex items-center justify-center text-cyber-violet mb-4">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-white font-bold text-base mb-2">ماذا أقدم؟</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            تطوير تطبيقات الويب الكاملة (Full-Stack)، تصميم وبناء واجهات البرمجة (APIs)، وتحويل البيانات الإحصائية المعقدة إلى لوحات معلومات تفاعلية تدعم اتخاذ القرار.
          </p>
        </div>

        {/* بطاقة 3: لماذا هذا الموقع */}
        <div className="p-6 rounded-2xl bg-cyber-card/60 border border-cyber-border backdrop-blur-md hover:border-emerald-500/40 transition-all">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-white font-bold text-base mb-2">لماذا هذا الموقع؟</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            بُني هذا الموقع ليكون مركز عمليات حي يستعرض أعمالي البرمجية بشكل مباشر، وبوابة مفتوحة للتواصل المهني واستقبال الأسئلة والملاحظات الصريحة بسرية تامة.
          </p>
        </div>
      </div>

      {/* أزرار الإجراءات السريعة */}
      <div className="flex flex-wrap items-center gap-4">
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyber-cyan to-blue-600 text-white font-medium text-sm hover:opacity-95 transition-all shadow-lg shadow-cyan-950/40"
        >
          <FileText className="w-4 h-4" />
          <span>استعراض السيرة الذاتية (PDF)</span>
        </a>

        <a
          href="#projects"
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyber-card border border-cyber-border text-slate-300 hover:text-white hover:border-slate-700 text-sm transition-all"
        >
          <span>استكشاف المشاريع</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
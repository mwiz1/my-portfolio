"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Layers, BarChart3, MessageSquare, FileDown } from "lucide-react";

const navItems = [
  { label: "الرئيسية", href: "/", icon: Home },
  { label: "المشاريع البرمجية", href: "/projects", icon: Layers },
  { label: "تحليل البيانات", href: "/analytics", icon: BarChart3 },
  { label: "صراحة وتواصل", href: "/feedback", icon: MessageSquare },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3 p-3 rounded-2xl bg-[#0d1424]/80 border border-slate-700/60 backdrop-blur-xl shadow-2xl shadow-cyan-950/30">
      <nav className="flex flex-col gap-2.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.35)]"
                  : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 border border-transparent"
              }`}
            >
              <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${isActive ? "text-cyan-400" : ""}`} />

              {/* نقطة مضيئة تبيّن أنك في هذه الصفحة */}
              {isActive && (
                <span className="absolute -left-1 w-1.5 h-6 bg-cyan-400 rounded-r-full shadow-[0_0_8px_#06b6d4]" />
              )}

              {/* التلميح الجانبي */}
              <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-[#0f172a] border border-slate-700 text-xs font-medium text-slate-200 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 shadow-xl">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="w-8 h-[1px] bg-slate-700/60 my-1" />
{/* زر السيرة الذاتية التفاعلية */}
<Link
  href="/resume"
  title="السيرة الذاتية"
  className={`group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
    pathname === "/resume"
      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.35)]"
      : "bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50"
  }`}
>
  <FileDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
  <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-[#0f172a] border border-slate-700 text-xs font-medium text-cyan-400 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 shadow-xl">
    السيرة الذاتية (CV)
  </span>
</Link>
    </aside>
  );
}
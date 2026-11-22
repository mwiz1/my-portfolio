"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Layers, BarChart3, MessageSquare, FileDown } from "lucide-react";

const navItems = [
  { label: "الرئيسية", short: "الرئيسية", href: "/", icon: Home },
  { label: "المشاريع البرمجية", short: "المشاريع", href: "/projects", icon: Layers },
  { label: "تحليل البيانات", short: "البيانات", href: "/analytics", icon: BarChart3 },
  { label: "صراحة وتواصل", short: "صراحة", href: "/feedback", icon: MessageSquare },
  { label: "السيرة الذاتية (CV)", short: "السيرة", href: "/resume", icon: FileDown },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* الكمبيوتر: قائمة جانبية عمودية */}
      <aside className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-2.5 rounded-2xl border border-slate-700/60 bg-[#0d1424]/80 p-3 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl md:flex">
        {navItems.map((item, i) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <div key={item.href} className="flex flex-col items-center">
              {i === navItems.length - 1 && <div className="mb-2.5 h-px w-8 bg-slate-700/60" />}
              <Link
                href={item.href}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 ${
                  isActive
                    ? "border-cyan-400/60 bg-cyan-500/20 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.35)]"
                    : "border-transparent text-slate-400 hover:bg-slate-800/60 hover:text-slate-100"
                }`}
              >
                <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                {isActive && (
                  <span className="absolute -left-1 h-6 w-1.5 rounded-r-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
                )}
                <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg border border-slate-700 bg-[#0f172a] px-3 py-1.5 text-xs font-medium text-slate-200 opacity-0 shadow-xl transition-all duration-200 group-hover:opacity-100">
                  {item.label}
                </span>
              </Link>
            </div>
          );
        })}
      </aside>

      {/* الجوال: شريط سفلي مثل التطبيقات */}
      <nav
        aria-label="القائمة الرئيسية"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-800/80 bg-[#070b16]/90 px-2 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden"
      >
        <ul className="mx-auto grid max-w-md grid-cols-5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex min-h-[60px] flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors ${
                    isActive ? "text-cyan-400" : "text-slate-400 active:text-slate-100"
                  }`}
                >
                  <span
                    className={`flex h-8 w-12 items-center justify-center rounded-full transition-all ${
                      isActive ? "bg-cyan-500/15 shadow-[0_0_14px_rgba(6,182,212,0.3)]" : ""
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>{item.short}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

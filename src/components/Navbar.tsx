"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Code2, BarChart3, MessageSquare, FileText } from "lucide-react";
import { PROFILE } from "@/lib/config";

const navItems = [
  { label: "الرئيسية", href: "/", icon: Home },
  { label: "المشاريع", href: "/projects", icon: Code2 },
  { label: "البيانات", href: "/analytics", icon: BarChart3 },
  { label: "السيرة", href: "/resume", icon: FileText },
  { label: "صراحة", href: "/feedback", icon: MessageSquare },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* الكمبيوتر: شريط علوي */}
      <header className="sticky top-0 z-50 hidden border-b border-line/70 bg-ink/75 backdrop-blur-xl md:block">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-8">
          <Link href="/" className="font-kufi text-xl font-semibold text-fg">
            {PROFILE.name}
          </Link>
          <nav aria-label="القائمة الرئيسية">
            <ul className="flex items-center gap-1">
              {navItems.slice(1).map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative rounded-lg px-4 py-2 text-[15px] transition-colors ${
                        isActive ? "text-cyan" : "text-muted hover:text-fg"
                      }`}
                    >
                      {item.label === "السيرة" ? "السيرة الذاتية" : item.label === "صراحة" ? "صندوق الصراحة" : item.label}
                      {isActive && <span className="absolute inset-x-4 -bottom-[17px] h-0.5 rounded-full bg-cyan" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      {/* الجوال: شريط سفلي مثل التطبيقات */}
      <nav
        aria-label="القائمة الرئيسية"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-ink/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden"
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
                  className={`flex min-h-[60px] flex-col items-center justify-center gap-1 text-[11px] font-medium ${
                    isActive ? "text-cyan" : "text-muted"
                  }`}
                >
                  <span className={`flex h-8 w-12 items-center justify-center rounded-full ${isActive ? "bg-cyan/15" : ""}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

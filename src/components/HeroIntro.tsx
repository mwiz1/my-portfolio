"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Download, MapPin, Mail } from "lucide-react";
import { PROFILE } from "@/lib/config";

// اللحظة الوحيدة المتحركة في الموقع: ظهور الاسم عند فتح الصفحة
export default function HeroIntro() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] } };

  return (
    <section className="flex min-h-[calc(100svh-5.5rem)] flex-col justify-center py-16 md:min-h-[calc(100svh-4rem)]">
      {PROFILE.available && (
        <motion.p {...rise(0)} className="mb-6 flex items-center gap-2 text-sm text-muted">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          متاح للعمل والمشاريع
        </motion.p>
      )}

      <motion.h1
        {...rise(0.1)}
        className="font-kufi text-[clamp(3.25rem,13vw,9.5rem)] font-bold leading-[1.05] tracking-tight text-fg"
      >
        {PROFILE.name}
      </motion.h1>

      <motion.p {...rise(0.25)} className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="font-kufi text-2xl font-medium text-sand md:text-4xl">{PROFILE.role}</span>
        <span dir="ltr" className="text-sm text-muted md:text-base">{PROFILE.roleEn}</span>
      </motion.p>

      <motion.p {...rise(0.4)} className="mt-6 max-w-2xl text-lg leading-relaxed text-fg/80 md:text-xl">
        {PROFILE.intro}
      </motion.p>

      <motion.div {...rise(0.55)} className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/resume"
          className="inline-flex items-center justify-center rounded-xl bg-cyan px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-[#6BDDE9]"
        >
          اطّلع على سيرتي الذاتية
        </Link>
        <a
          href={PROFILE.cv}
          download={PROFILE.cvFileName}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-line px-6 py-3.5 font-medium text-fg transition-colors hover:border-cyan/60"
        >
          <Download className="h-4 w-4" aria-hidden />
          تحميل السيرة PDF
        </a>
      </motion.div>

      <motion.ul {...rise(0.7)} className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
        <li className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-sand" aria-hidden />
          {PROFILE.location}
        </li>
        <li>
          <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 hover:text-cyan">
            <Mail className="h-4 w-4 text-sand" aria-hidden />
            <span dir="ltr">{PROFILE.email}</span>
          </a>
        </li>
      </motion.ul>
    </section>
  );
}

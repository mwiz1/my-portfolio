"use client";

import { motion } from "framer-motion";
import { BarChart3, Database, LineChart } from "lucide-react";

// Sample figures for layout only. Replace with your real dashboard screenshots or metrics.
const KPIS = [
  { label: "Data sources unified", value: "12", icon: Database },
  { label: "Reports automated", value: "30+", icon: LineChart },
  { label: "Dashboards shipped", value: "8", icon: BarChart3 },
];

const BARS = [42, 68, 55, 80, 62, 91, 74];

export default function Analytics() {
  return (
    <section id="analytics" className="mx-auto max-w-5xl px-6">
      <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">Analytics</h2>
      <p className="mt-2 max-w-xl">
        Power BI, Python and SQL workflows that turn raw tables into decisions. Figures below are
        sample placeholders.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {KPIS.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-cyber-border bg-cyber-card/70 p-6 backdrop-blur-xl">
            <Icon size={20} className="text-cyber-cyan" aria-hidden />
            <p className="mt-4 text-3xl font-semibold text-slate-50">{value}</p>
            <p className="mt-1 text-sm">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-cyber-border bg-cyber-card/70 p-6 backdrop-blur-xl">
        <p className="text-sm text-slate-300">Sample monthly KPI trend</p>
        <div className="mt-6 flex h-40 items-end gap-3" role="img" aria-label="Sample bar chart of monthly KPI values">
          {BARS.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="flex-1 rounded-t-md bg-gradient-to-t from-cyber-violet/60 to-cyber-cyan"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

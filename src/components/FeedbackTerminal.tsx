"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Send, CheckCircle2, AlertTriangle } from "lucide-react";
import { supabase } from "@/lib/supabase";

const CATEGORIES = [
  { id: "general", label: "💬 سؤال أو رأي عام" },
  { id: "project", label: "⚡ ملاحظة على مشروع" },
  { id: "collab", label: "🤝 اقتراح تعاون" },
];

const MIN = 5;
const MAX = 500;

type Status = "idle" | "loading" | "success" | "error";

export default function FeedbackTerminal() {
  const [category, setCategory] = useState("general");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const trimmed = message.trim();
  const valid = trimmed.length >= MIN && trimmed.length <= MAX;

  async function handleSubmit() {
    if (!valid || status === "loading") {
      setError(`الرسالة لازم تكون بين ${MIN} و ${MAX} حرف.`);
      setStatus("error");
      return;
    }
    if (!supabase) {
      setError("الخدمة غير متصلة حالياً، حاول لاحقاً.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setError("");

    // No .select() on purpose: the table allows insert only, so reading rows back would be blocked by RLS.
    const { error: dbError } = await supabase
      .from("anonymous_messages")
      .insert({ message: trimmed, category });

    if (dbError) {
      setError("تعذّر إرسال الرسالة، حاول مرة أخرى بعد لحظات.");
      setStatus("error");
      return;
    }

    setMessage("");
    setStatus("success");
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <section id="ama" className="mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-2xl border border-cyber-border bg-[#0a1020]/90 shadow-glow-cyan backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-cyber-border bg-[#050811]/80 px-4 py-3" dir="ltr">
          <span className="h-3 w-3 rounded-full bg-slate-600" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-slate-600" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-cyber-cyan" aria-hidden />
          <h2 className="ms-3 truncate font-mono text-xs text-slate-300 sm:text-sm">
            Anonymous_Terminal // Encrypted Feedback
          </h2>
        </div>

        <div className="p-4 sm:p-6">
          <p className="text-sm text-cyber-cyan">
            &gt; أرسل رسالتك بدون اسم وبدون تسجيل دخول
            <span className="animate-blink">_</span>
          </p>

          <div className="mt-5 flex flex-wrap gap-2" role="radiogroup" aria-label="نوع الرسالة" dir="rtl">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                role="radio"
                aria-checked={category === c.id}
                onClick={() => setCategory(c.id)}
                lang="ar"
                className={`rounded-full border px-3 py-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyber-cyan ${
                  category === c.id
                    ? "border-cyber-violet/60 bg-cyber-violet/15 text-slate-100"
                    : "border-cyber-border text-slate-400 hover:text-slate-200"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <label htmlFor="msg" className="sr-only">
            رسالتك
          </label>
          <textarea
            id="msg"
            dir="auto"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value.slice(0, MAX));
              if (status === "error") setStatus("idle");
            }}
            rows={5}
            placeholder="اكتب رسالتك هنا..."
            className="mt-4 block w-full resize-none appearance-none rounded-xl border border-slate-700 bg-[#03060d] p-4 text-base leading-relaxed text-white caret-cyan-400 placeholder:text-slate-500 focus:border-cyan-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
            style={{ WebkitTextFillColor: "#ffffff" }}
          />

          <div className="mt-3 flex items-center justify-between gap-4">
            <span className={`font-mono text-xs ${message.length >= MAX ? "text-amber-400" : "text-slate-500"}`}>
              {message.length}/{MAX}
            </span>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={status === "loading" || trimmed.length < MIN}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-violet px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-cyan"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" aria-hidden /> جارٍ الإرسال
                </>
              ) : (
                <>
                  <Send size={16} aria-hidden className="-scale-x-100" /> إرسال
                </>
              )}
            </button>
          </div>

          <div aria-live="polite" className="mt-4 min-h-[1.5rem]">
            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.p
                  key="ok"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 font-mono text-sm text-emerald-400"
                >
                  <CheckCircle2 size={16} aria-hidden /> وصلت رسالتك، شكراً لك!
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  key="err"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 font-mono text-sm text-amber-400"
                >
                  <AlertTriangle size={16} aria-hidden /> {error}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

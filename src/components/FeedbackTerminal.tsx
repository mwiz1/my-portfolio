"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Send, CheckCircle2, AlertTriangle } from "lucide-react";
import { supabase } from "@/lib/supabase";

const CATEGORIES = [
  { id: "general", label: "سؤال أو رأي" },
  { id: "project", label: "ملاحظة على مشروع" },
  { id: "collab", label: "فكرة تعاون" },
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid || status === "loading") {
      setError(`اكتب ${MIN} أحرف على الأقل.`);
      setStatus("error");
      return;
    }
    if (!supabase) {
      setError("الإرسال متوقف حالياً. جرّب لاحقاً أو راسلني على الإيميل.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setError("");

    // بدون .select() عمداً: الجدول يسمح بالإضافة فقط
    const { error: dbError } = await supabase.from("anonymous_messages").insert({ message: trimmed, category });

    if (dbError) {
      setError("لم تُرسل الرسالة. تأكد من اتصالك بالإنترنت وحاول مرة ثانية.");
      setStatus("error");
      return;
    }

    setMessage("");
    setStatus("success");
    setTimeout(() => setStatus("idle"), 5000);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-panel/85 p-5 backdrop-blur-md sm:p-8">
      <fieldset>
        <legend className="mb-3 text-sm text-muted">نوع الرسالة</legend>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={category === c.id}
              onClick={() => setCategory(c.id)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                category === c.id ? "border-cyan bg-cyan/15 text-cyan" : "border-line text-fg/75 hover:text-fg"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </fieldset>

      <label htmlFor="msg" className="mt-6 block text-sm text-muted">
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
        rows={6}
        placeholder="اكتب رسالتك هنا..."
        className="mt-2 block w-full resize-none appearance-none rounded-xl border border-line bg-[#060A14] p-4 text-base leading-relaxed text-white caret-cyan placeholder:text-muted/70 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/25"
        style={{ WebkitTextFillColor: "#ffffff" }}
      />

      <div className="mt-4 flex items-center justify-between gap-4">
        <span className={`text-sm tabular-nums ${message.length >= MAX ? "text-sand" : "text-muted"}`}>
          {message.length} / {MAX}
        </span>
        <button
          type="submit"
          disabled={status === "loading" || trimmed.length < MIN}
          className="inline-flex items-center gap-2 rounded-xl bg-cyan px-6 py-3 font-semibold text-ink transition-opacity hover:bg-[#6BDDE9] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> جارٍ الإرسال
            </>
          ) : (
            <>
              <Send className="h-4 w-4 -scale-x-100" aria-hidden /> أرسل الرسالة
            </>
          )}
        </button>
      </div>

      <div aria-live="polite" className="mt-4 min-h-[1.75rem]">
        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.p key="ok" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="h-4 w-4" aria-hidden /> وصلت رسالتك، شكراً لك.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p key="err" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-sand">
              <AlertTriangle className="h-4 w-4" aria-hidden /> {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

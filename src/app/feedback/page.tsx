import FeedbackTerminal from "@/components/FeedbackTerminal";

export default function FeedbackPage() {
  return (
    <div className="min-h-screen text-slate-200 px-6 py-20 max-w-4xl mx-auto space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-white">صندوق الصراحة والتواصل</h1>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          شاركني رأيك، ملاحظاتك على المشاريع، أو اطرح أي سؤال بسرية تامة دون الكشف عن هويتك.
        </p>
      </div>

      <FeedbackTerminal />
    </div>
  );
}
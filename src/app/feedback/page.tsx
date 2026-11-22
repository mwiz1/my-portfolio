import FeedbackTerminal from "@/components/FeedbackTerminal";
import { Container, PageHeader } from "@/components/ui";

export default function FeedbackPage() {
  return (
    <Container className="max-w-3xl">
      <PageHeader
        title="صندوق الصراحة"
        lead="رأيك في مشاريعي، ملاحظة، سؤال، أو فكرة تعاون. الرسالة تصلني بدون اسمك وبدون تسجيل دخول."
      />
      <div className="pb-20">
        <FeedbackTerminal />
      </div>
    </Container>
  );
}

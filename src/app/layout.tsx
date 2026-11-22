import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SiteBackground from "@/components/SiteBackground";

export const metadata: Metadata = {
  title: "عبد الملك الغامدي // الملف المهني",
  description: "أخصائي تقنية معلومات وتطوير أنظمة",
};

// يضبط عرض الصفحة على عرض الجوال الحقيقي (أندرويد و iOS)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050811",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body className="bg-[#050811] text-slate-100 min-h-screen relative">
        <SiteBackground />

        <Navbar />

        {/* على الجوال: مسافة تحت المحتوى للشريط السفلي. على الكمبيوتر: مسافة للقائمة الجانبية */}
        <div className="relative z-10 pb-[calc(6rem+env(safe-area-inset-bottom))] md:pb-0 md:pr-24">
          {children}
        </div>
      </body>
    </html>
  );
}

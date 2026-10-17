import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SplineScene from "@/components/SplineScene";

export const metadata: Metadata = {
  title: "عبد الملك الغامدي // الملف المهني",
  description: "أخصائي تقنية معلومات وتطوير أنظمة",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body className="bg-[#050811] text-slate-100 min-h-screen relative overflow-x-hidden">
        {/* مشهد الـ 3D في الخلفية */}
        <SplineScene />

        {/* القائمة الجانبية في طبقة علوية */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* محتوى الصفحات الشفاف في طبقة متوسطة */}
        <div className="relative z-10 md:pr-24">
          {children}
        </div>
      </body>
    </html>
  );
}
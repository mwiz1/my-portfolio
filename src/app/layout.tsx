import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SiteBackground from "@/components/SiteBackground";
import { PROFILE } from "@/lib/config";

export const metadata: Metadata = {
  title: `${PROFILE.name} | ${PROFILE.role}`,
  description: PROFILE.intro,
};

// يضبط عرض الصفحة على عرض الجوال الحقيقي (أندرويد و iOS)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0B1220",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Reem+Kufi:wght@500;600;700&display=swap"
        />
      </head>
      <body className="relative min-h-screen bg-ink text-fg antialiased">
        <SiteBackground />
        <Navbar />
        {/* على الجوال: مسافة تحت المحتوى للشريط السفلي */}
        <div className="relative z-10 pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">{children}</div>
      </body>
    </html>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function CyberBackground() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. ضوء الماوس التفاعلي النيون الذي يتبع يدك */}
      <div
        className="fixed w-[450px] h-[450px] rounded-full blur-[110px] opacity-25 transition-transform duration-75 ease-out"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, #8b5cf6 50%, transparent 70%)",
          transform: `translate(${mousePosition.x - 225}px, ${mousePosition.y - 225}px)`,
        }}
      />

      {/* 2. الشبكة التقنية المتحركة */}
      <div className="absolute inset-0 cyber-grid opacity-60" />

      {/* 3. كرات هولوغرافية ضخمة متحركة تضفي حياة وألوان على الصفحة */}
      <div className="absolute top-[10%] right-[10%] w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-full blur-[130px] animate-blob-1" />
      <div className="absolute bottom-[20%] left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 rounded-full blur-[140px] animate-blob-2" />
      <div className="absolute top-[60%] right-[30%] w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[120px] animate-blob-1" />
    </div>
  );
}
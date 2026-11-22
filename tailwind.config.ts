import type { Config } from "tailwindcss";

// 🎨 ألوان وخطوط الموقع
const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220", // الخلفية
        panel: "#111A2E", // الأسطح
        line: "#22304A", // الخطوط والحدود
        fg: "#E6EDF7", // النص الأساسي
        muted: "#8A9BB8", // النص الثانوي
        cyan: { DEFAULT: "#3FD0E0", deep: "#1E9FB0" }, // كل ما يُضغط عليه
        sand: "#E0B46A", // التواريخ والإبرازات
      },
      fontFamily: {
        kufi: ['"Reem Kufi"', '"IBM Plex Sans Arabic"', "sans-serif"],
        sans: ['"IBM Plex Sans Arabic"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;

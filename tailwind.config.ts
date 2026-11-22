import type { Config } from "tailwindcss";

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
        cyber: {
          bg: "#050811",
          card: "#0c1324",
          border: "#1e293b",
          cyan: "#06b6d4",
          violet: "#8b5cf6",
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 40px rgba(6, 182, 212, 0.12)",
        "glow-violet": "0 0 30px rgba(139, 92, 246, 0.18)",
      },
      keyframes: {
        blink: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0" } },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "spin-slow": "spin 12s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        navy: "#101B33",
        cyan: "#19D3E6",
        gold: "#E0B04B",
        paper: "#F7FAFC",
        mist: "#CBD5E1",
        slate: "#64748B",
        lacquer: "#B23A22",
      },
      fontFamily: {
        display: ["General Sans", "sans-serif"],
        body: ["Satoshi", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        mm: ["var(--font-mm)", "sans-serif"],
      },
      keyframes: {
        draw: {
          from: { strokeDashoffset: "1" },
          to: { strokeDashoffset: "0" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(25,211,230,0.45)" },
          "70%": { boxShadow: "0 0 0 14px rgba(25,211,230,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(25,211,230,0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.16,1,0.3,1) both",
        pulseRing: "pulseRing 2.4s ease-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

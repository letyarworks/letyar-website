import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220", // Deep Navy — primary dark background, mark, navigation
        navy: "#101B33", // Navy — surfaces, panels, secondary backgrounds
        cyan: "#19D3E6", // Electric Cyan — primary functional accent
        gold: "#E0B04B", // Warm Gold — craft / fingerprint highlight only
        paper: "#F7FAFC", // White — primary text on dark surfaces
        mist: "#CBD5E1", // Mist — secondary text on dark surfaces
        slate: "#64748B", // Slate — muted text / metadata
        lacquer: "#B23A22", // Heritage accent — sparing, cultural context only
      },
      fontFamily: {
        // "General Sans" / "Satoshi" come from Fontshare's own @font-face
        // rules (linked in app/layout.tsx), not a next/font CSS variable.
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

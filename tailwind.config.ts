import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-inter)"]
      },
      colors: {
        background: "#030712",
        foreground: "#E2E8F0",
        accent: {
          DEFAULT: "#38BDF8",
          muted: "#1E293B"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;

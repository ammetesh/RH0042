import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090d16",
        surface: "#111827",
        card: "#111827cc",

        primary: "#4f46e5",
        secondary: "#7c3aed",

        accent: "#06b6d4",

        success: "#22c55e",
        warning: "#f59e0b",
        danger: "#ef4444",

        text: "#f8fafc",
        muted: "#94a3b8",
        border: "#1f2937",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        glass: "0 8px 40px rgba(0,0,0,.35)",
        glow: "0 0 30px rgba(79,70,229,.4)",
      },

      backdropBlur: {
        xs: "2px",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
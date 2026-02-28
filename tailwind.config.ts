import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  "#fdfaf7",
          100: "#f8f1ea",
          200: "#f0e5d8",
          300: "#e5d0be",
        },
        plum: {
          950: "#1a0f24",
          900: "#2d1b3d",
          800: "#3d2550",
          700: "#48345e",
          600: "#5e4478",
          500: "#7a5a94",
          400: "#9b7db5",
          300: "#bea3d1",
          200: "#ddc9ec",
          100: "#f0e8f9",
          50:  "#faf5ff",
        },
        rose: {
          600: "#b85c80",
          500: "#c96e92",
          400: "#d9a4c7",
          300: "#e4bcd6",
          200: "#f0d5e8",
          100: "#faeef6",
        },
        gold: {
          600: "#a8803a",
          500: "#c9a96e",
          400: "#d9bc8a",
          300: "#e8d0a8",
          100: "#fdf6e8",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        float:     "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-12px)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

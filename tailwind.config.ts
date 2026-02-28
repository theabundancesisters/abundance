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
        purple: {
          950: "#0d0717",
          900: "#1a0f24",
          850: "#22142e",
          800: "#2d1b3d",
          700: "#3d2550",
          600: "#48345e",
          500: "#5e4478",
          400: "#7a5a94",
          300: "#9b7db5",
          200: "#bea3d1",
          100: "#dfc9eb",
        },
        rose: {
          400: "#d9a4c7",
          300: "#e4bcd6",
          200: "#efd3e6",
          100: "#f8eef5",
        },
        gold: {
          500: "#c9a96e",
          400: "#d9bc8a",
          300: "#e8d0a8",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, #48345e 0px, transparent 50%), radial-gradient(at 80% 0%, #2d1b3d 0px, transparent 50%), radial-gradient(at 0% 50%, #1a0f24 0px, transparent 50%), radial-gradient(at 80% 50%, #3d2550 0px, transparent 50%), radial-gradient(at 0% 100%, #0d0717 0px, transparent 50%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          DEFAULT: "#FF6B00",
          50: "#FFF3E6",
          100: "#FFE0BF",
          200: "#FFC180",
          300: "#FFA340",
          400: "#FF8520",
          500: "#FF6B00",
          600: "#E05E00",
          700: "#B84D00",
          800: "#8F3C00",
          900: "#662B00",
        },
        green: {
          DEFAULT: "#128807",
          50: "#E8F5E6",
          100: "#C6E6C2",
          200: "#8FCC85",
          300: "#57B34A",
          400: "#349D28",
          500: "#128807",
          600: "#0F7306",
          700: "#0C5E05",
          800: "#094904",
          900: "#063403",
        },
        navy: {
          DEFAULT: "#0A0F1E",
          50: "#E8EAF0",
          100: "#C5CAD9",
          200: "#8B94B3",
          300: "#515F8D",
          400: "#2D3A66",
          500: "#0A0F1E",
          600: "#080C18",
          700: "#060912",
          800: "#04060C",
          900: "#020306",
        },
        surface: {
          DEFAULT: "#141C2E",
          light: "#1E2A42",
          lighter: "#283656",
        },
        accent: {
          purple: "#8B5CF6",
          blue: "#3B82F6",
          cyan: "#06B6D4",
        },
      },
      fontFamily: {
        sans: ["var(--font-figtree)", "system-ui", "sans-serif"],
        heading: ["var(--font-figtree)", "system-ui", "sans-serif"],
        body: ["var(--font-figtree)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-saffron": "linear-gradient(135deg, #FF6B00 0%, #FF8520 100%)",
        "gradient-hero": "linear-gradient(180deg, #0A0F1E 0%, #141C2E 100%)",
      },
    },
  },
  plugins: [],
};

export default config;

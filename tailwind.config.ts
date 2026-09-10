import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF6F0",
        dusty: "#F3E1DE",
        sand: "#E9D8C4",
        beige: "#E4C7A8",
        taupe: "#CBB9A6",
        ink: "#292623",
        muted: "#6F665D"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"]
      },
      maxWidth: {
        habitat: "1440px"
      },
      spacing: {
        "section-sm": "4.5rem",
        section: "7.5rem"
      },
      letterSpacing: {
        label: "0.12em"
      }
    }
  },
  plugins: []
};

export default config;

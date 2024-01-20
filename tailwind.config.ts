import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        cta: "url('/cta.png')",
      },
      colors: {
        "color-text-primary": "#252B42",
        "color-text-secondary": "#737373",
        primary: "#23A6F0",
        secondary: "#23856D",
        muted: "#BDBDBD",
        lightgray: "#FAFAFA",
      },
      boxShadow: {
        postCard: "0px 2px 4px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;

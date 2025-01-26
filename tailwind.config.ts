import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainBlack: "#1A1817",
        lightMain: "#666666",
        bgColor: "#ECEBE9",
        secondaryBgColor: "#CBC9BC",
        highlight: "#E1FF4D",
        titleGray: "#3C3C3C",
        reviewsBg: "#F3F2ED",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "0.1rem",
      },
    },
  },
  plugins: [],
};
export default config;

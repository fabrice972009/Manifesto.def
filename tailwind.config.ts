import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0705",       // near-black background
        blood: "#6B0F12",     // deep red glow
        ember: "#B8430E",     // accent / CTA
        parchment: "#D4B483", // aged gold scroll
        bone: "#E8DFC8",      // body text on dark
        char: "#1C1410",      // card/panel shadow brown
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "ember-glow":
          "radial-gradient(ellipse at 50% 20%, rgba(107,15,18,0.45) 0%, rgba(10,7,5,0) 60%)",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F2EEE8",
        surface: "#FFFFFF",
        "surface-warm": "#EDE9E2",
        espresso: "#5C3D2A",
        "espresso-dark": "#4A3020",
        sand: "#C9AA8F",
        "sand-light": "#E0CDB8",
        ink: "#1A1A1A",
        mist: "#7A6E65",
        sage: "#4E7A5C",
        amber: "#C98A4A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "display-2xl": [
          "clamp(3rem, 8vw, 7rem)",
          { lineHeight: "0.95", letterSpacing: "-0.04em" },
        ],
        "display-xl": [
          "clamp(2.5rem, 6vw, 5rem)",
          { lineHeight: "1.0", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "clamp(2rem, 4vw, 3.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.025em" },
        ],
        "display-md": [
          "clamp(1.5rem, 3vw, 2.5rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "apple-in": "cubic-bezier(0.2, 0.65, 0.3, 0.9)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

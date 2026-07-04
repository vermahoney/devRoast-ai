import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import {
  borderRadius,
  boxShadow,
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  spacing
} from "./src/styles/tokens";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors,
      fontFamily,
      fontSize,
      fontWeight,
      spacing,
      borderRadius,
      boxShadow
    }
  },
  plugins: [tailwindcssAnimate]
};

export default config;

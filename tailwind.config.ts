import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        card: "rgb(var(--color-card) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-foreground": "rgb(var(--color-primary-foreground) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        input: "rgb(var(--color-input) / <alpha-value>)",
        ring: "rgb(var(--color-ring) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        danger: "rgb(var(--color-danger) / <alpha-value>)",
        destructive: "rgb(var(--color-danger) / <alpha-value>)",
        "destructive-foreground": "rgb(var(--color-foreground) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        muted: {
          DEFAULT: "rgb(var(--color-muted-surface) / <alpha-value>)",
          foreground: "rgb(var(--color-muted) / <alpha-value>)"
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          foreground: "rgb(var(--color-foreground) / <alpha-value>)"
        },
        secondary: {
          DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
          foreground: "rgb(var(--color-foreground) / <alpha-value>)"
        },
        popover: {
          DEFAULT: "rgb(var(--color-card) / <alpha-value>)",
          foreground: "rgb(var(--color-foreground) / <alpha-value>)"
        }
      },
      fontFamily: {
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0" }],
        sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0" }],
        base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0" }],
        lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "0" }],
        xl: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "0" }],
        "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "0" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem", letterSpacing: "0" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "0" }],
        "5xl": ["3rem", { lineHeight: "1.08", letterSpacing: "0" }],
        "6xl": ["3.75rem", { lineHeight: "1", letterSpacing: "0" }]
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem"
      },
      boxShadow: {
        soft: "0 12px 32px rgb(0 0 0 / 0.22)",
        "soft-lg": "0 24px 64px rgb(0 0 0 / 0.28)",
        "soft-primary": "0 16px 48px rgb(var(--color-primary) / 0.18)"
      }
    }
  },
  plugins: [tailwindcssAnimate]
};

export default config;

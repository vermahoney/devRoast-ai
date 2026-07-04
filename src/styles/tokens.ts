import type { Config } from "tailwindcss";

type ThemeExtension = NonNullable<NonNullable<Config["theme"]>["extend"]>;

export const colors: ThemeExtension["colors"] = {
  background: "rgb(var(--color-background) / <alpha-value>)",
  foreground: "rgb(var(--color-foreground) / <alpha-value>)",
  card: "rgb(var(--color-card) / <alpha-value>)",
  border: "rgb(var(--color-border) / <alpha-value>)",
  input: "rgb(var(--color-input) / <alpha-value>)",
  ring: "rgb(var(--color-ring) / <alpha-value>)",
  primary: "rgb(var(--color-primary) / <alpha-value>)",
  "primary-foreground": "rgb(var(--color-primary-foreground) / <alpha-value>)",
  success: "rgb(var(--color-success) / <alpha-value>)",
  warning: "rgb(var(--color-warning) / <alpha-value>)",
  danger: "rgb(var(--color-danger) / <alpha-value>)",
  destructive: "rgb(var(--color-danger) / <alpha-value>)",
  "destructive-foreground": "rgb(var(--color-foreground) / <alpha-value>)",
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
};

export const fontFamily: ThemeExtension["fontFamily"] = {
  sans: ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"]
};

export const fontSize: ThemeExtension["fontSize"] = {
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
};

export const fontWeight: ThemeExtension["fontWeight"] = {
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700"
};

export const spacing: ThemeExtension["spacing"] = {
  0: "0",
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  56: "14rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};

export const borderRadius: ThemeExtension["borderRadius"] = {
  sm: "calc(var(--radius) - 4px)",
  md: "calc(var(--radius) - 2px)",
  lg: "var(--radius)",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
};

export const boxShadow: ThemeExtension["boxShadow"] = {
  soft: "0 12px 32px rgb(0 0 0 / 0.22)",
  "soft-lg": "0 24px 64px rgb(0 0 0 / 0.28)",
  "soft-primary": "0 16px 48px rgb(var(--color-primary) / 0.18)",
  "inner-soft": "inset 0 1px 0 rgb(255 255 255 / 0.05)"
};

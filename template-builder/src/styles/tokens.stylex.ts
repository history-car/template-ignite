import * as stylex from "@stylexjs/stylex";

// Color tokens
export const colors = stylex.defineVars({
  primary: "#1E40AF",
  secondary: "#64748B",
  background: "#FFFFFF",
  backgroundAlt: "#F9FAFB",
  text: "#1F2937",
  textMuted: "#6B7280",
  primaryLight: "#DBEAFE",
  border: "#E5E7EB",
  white: "#FFFFFF",
  black: "#000000",
});

// Typography tokens
export const typography = stylex.defineVars({
  fontHeading: '"Noto Serif KR", serif',
  fontBody: '"Pretendard", -apple-system, BlinkMacSystemFont, sans-serif',

  // Font sizes
  fontSize1: "3rem", // h1
  fontSize2: "2.25rem", // h2
  fontSize3: "1.875rem", // h3
  fontSize4: "1.125rem", // large text
  fontSizeBase: "1rem", // base
  fontSizeSmall: "0.875rem", // small

  // Font sizes (mobile)
  fontSize1Mobile: "2rem",
  fontSize2Mobile: "1.5rem",
  fontSize3Mobile: "1.25rem",

  // Line heights
  lineHeightHeading: "1.2",
  lineHeightBody: "1.6",
});

// Spacing tokens
export const spacing = stylex.defineVars({
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "0.75rem", // 12px
  lg: "1rem", // 16px
  xl: "1.5rem", // 24px
  "2xl": "2rem", // 32px
  "3xl": "2.5rem", // 40px
  "4xl": "3rem", // 48px
  "5xl": "5rem", // 80px
});

// Border radius tokens
export const radius = stylex.defineVars({
  sm: "0.375rem", // 6px
  md: "0.5rem", // 8px
  lg: "0.75rem", // 12px
  full: "9999px",
});

// Breakpoints (for reference, not used in defineVars)
export const breakpoints = {
  mobile: "768px",
  tablet: "1024px",
  desktop: "1280px",
} as const;

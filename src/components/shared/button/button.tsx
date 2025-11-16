"use client";

import { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import * as stylex from "@stylexjs/stylex";
import { colors, spacing, radius, typography } from "@/styles/tokens.stylex";

const styles = stylex.create({
  button: {
    padding: `${spacing.md} ${spacing.xl}`,
    borderRadius: radius.sm,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s",
    borderWidth: 0,
    borderStyle: "none",
    fontSize: typography.fontSizeBase,
    display: "inline-block",
    textDecoration: "none",
  },
  primary: {
    backgroundColor: colors.primary,
    color: "white",
    ":hover": {
      opacity: 0.9,
    },
  },
  secondary: {
    backgroundColor: colors.secondary,
    color: "white",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: colors.primary,
    color: colors.primary,
  },
  large: {
    padding: `${spacing.lg} ${spacing["2xl"]}`,
    fontSize: typography.fontSize4,
  },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "large";
}

export function Button({
  asChild = false,
  variant = "primary",
  size = "default",
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      {...stylex.props(
        styles.button,
        variant && styles[variant],
        size === "large" && styles.large,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

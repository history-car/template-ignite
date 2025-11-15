import { createElement, HTMLAttributes } from "react";
import * as stylex from "@stylexjs/stylex";
import { colors, typography, breakpoints } from "@/styles/tokens.stylex";

const styles = stylex.create({
  heading: {
    fontWeight: 700,
    lineHeight: typography.lineHeightHeading,
    color: colors.text,
  },
  h1: {
    fontSize: typography.fontSize1,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      fontSize: typography.fontSize1Mobile,
    },
  },
  h2: {
    fontSize: typography.fontSize2,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      fontSize: typography.fontSize2Mobile,
    },
  },
  h3: {
    fontSize: typography.fontSize3,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      fontSize: typography.fontSize3Mobile,
    },
  },
});

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
}

export function Heading({ as = "h2", children, ...props }: HeadingProps) {
  const headingStyle = as in styles ? styles[as] : null;

  return createElement(
    as,
    { ...stylex.props(styles.heading, headingStyle), ...props },
    children,
  );
}

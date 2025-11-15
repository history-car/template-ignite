import * as stylex from "@stylexjs/stylex";
import { spacing, breakpoints } from "@/styles/tokens.stylex";

const styles = stylex.create({
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: `0 ${spacing.xl}`,
    [`@media (max-width: ${breakpoints.mobile})`]: {
      padding: `0 ${spacing.lg}`,
    },
  },
});

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div {...stylex.props(styles.container)}>{children}</div>;
}

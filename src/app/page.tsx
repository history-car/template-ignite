import * as stylex from '@stylexjs/stylex';
import { colors, spacing, typography } from '@/styles/tokens.stylex';

const styles = stylex.create({
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
    backgroundColor: colors.backgroundAlt,
  },
  title: {
    fontSize: typography.fontSize1,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.md,
  },
  description: {
    fontSize: typography.fontSize4,
    color: colors.textMuted,
    textAlign: 'center',
    maxWidth: '600px',
  },
});

export default function Home() {
  return (
    <main {...stylex.props(styles.container)}>
      <h1 {...stylex.props(styles.title)}>Template Ignite</h1>
      <p {...stylex.props(styles.description)}>
        Multi-page website generation system with 19 validated section components
      </p>
    </main>
  );
}

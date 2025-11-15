export interface ThemePreset {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    accent: string;
    muted: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  spacing: {
    section: string;
    container: string;
  };
  borderRadius: string;
}

export interface ResolvedTheme extends ThemePreset {
  customColors?: Record<string, string>;
}

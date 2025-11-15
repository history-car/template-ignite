import { ThemePreset } from '@/types/theme.types';

export const professionalBlue: ThemePreset = {
  name: 'professional-blue',
  colors: {
    primary: '#1E40AF',
    secondary: '#64748B',
    background: '#FFFFFF',
    foreground: '#1F2937',
    accent: '#3B82F6',
    muted: '#6B7280',
  },
  fonts: {
    heading: '"Noto Serif KR", serif',
    body: '"Pretendard", -apple-system, sans-serif',
  },
  spacing: {
    section: '5rem',
    container: '1200px',
  },
  borderRadius: '0.375rem',
};

import { professionalBlue } from './professional-blue';
import { ThemePreset } from '@/types/theme.types';

export const themes: Record<string, ThemePreset> = {
  'professional-blue': professionalBlue,
};

export function getTheme(presetName: string): ThemePreset {
  return themes[presetName] || professionalBlue;
}

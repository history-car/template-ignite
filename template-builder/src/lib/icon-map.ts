import { LucideIcon, Scale, Clock, Shield, CheckCircle, Users, Zap } from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  Scale,
  Clock,
  Shield,
  CheckCircle,
  Users,
  Zap,
};

export type IconName = keyof typeof iconMap;

export function getIcon(name: string): LucideIcon | null {
  return iconMap[name] || null;
}

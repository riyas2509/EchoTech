import React from 'react';
import { GlassCard } from './GlassCard';

interface Props {
  value: string | number;
  label: string;
}

export const StatCard: React.FC<Props> = ({ value, label }) => (
  <GlassCard className="flex flex-col items-center py-4 px-3 flex-1 text-center">
    <span className="text-xl font-bold text-slate-900">{value}</span>
    <span className="text-xs font-medium text-slate-500 mt-1">{label}</span>
  </GlassCard>
);

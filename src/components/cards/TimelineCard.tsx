import React from 'react';
import { GlassCard } from './GlassCard';

interface Props {
  title: string;
  subtitle: string;
  date: string;
}

export const TimelineCard: React.FC<Props> = ({ title, subtitle, date }) => (
  <GlassCard className="flex flex-col p-4 w-full">
    <div className="flex justify-between items-start mb-1">
      <h3 className="font-semibold text-slate-800">{title}</h3>
      <span className="text-xs font-medium text-slate-400">{date}</span>
    </div>
    <p className="text-sm font-medium text-slate-500">{subtitle}</p>
  </GlassCard>
);

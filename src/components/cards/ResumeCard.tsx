import React from 'react';
import { GlassCard } from './GlassCard';
import { FileText, Download } from 'lucide-react';

interface Props {
  title: string;
  size: string;
  onClick?: () => void;
}

export const ResumeCard: React.FC<Props> = ({ title, size, onClick }) => (
  <button onClick={onClick} className="w-full text-left">
    <GlassCard className="flex items-center p-4 hover:bg-white/90 transition-colors">
      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-3 text-slate-600">
        <FileText size={20} />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-slate-800 text-sm">{title}</h4>
        <span className="text-xs font-medium text-slate-400">{size}</span>
      </div>
      <Download size={20} className="text-slate-400" />
    </GlassCard>
  </button>
);

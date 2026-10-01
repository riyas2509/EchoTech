import React from 'react';
import { Menu } from 'lucide-react';

export const Header: React.FC = () => (
  <header className="w-full flex items-center justify-between py-4 px-[var(--spacing-page-px)]">
    <span className="font-bold text-[length:var(--text-brand)] tracking-[var(--text-brand--tracking)] text-slate-800">
      ECHOCARD
    </span>
    <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200/50 transition-colors">
      <Menu size={20} className="text-slate-800" />
    </button>
  </header>
);

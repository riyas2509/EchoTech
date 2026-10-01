import React from 'react';

export const AvailabilityBadge: React.FC = () => (
  <div className="inline-flex items-center px-[var(--spacing-pill-px)] py-[var(--spacing-pill-py)] rounded-full bg-emerald-50/80 border border-emerald-200/50 shadow-sm backdrop-blur-sm">
    <span className="relative flex h-2 w-2 mr-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
    </span>
    <span className="text-[length:var(--text-badge)] tracking-[var(--text-badge--tracking)] font-semibold text-emerald-700">
      Available for Opportunities
    </span>
  </div>
);

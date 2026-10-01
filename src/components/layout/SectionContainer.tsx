import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const SectionContainer: React.FC<Props> = ({ title, children }) => (
  <section className="w-full flex flex-col gap-4 mt-[var(--spacing-section-gap)]">
    <h2 className="text-lg font-bold text-slate-900 px-1">{title}</h2>
    <div className="w-full flex flex-col gap-[var(--spacing-card-gap)]">
      {children}
    </div>
  </section>
);

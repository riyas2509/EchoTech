import React from 'react';
interface Props extends React.HTMLAttributes<HTMLDivElement> { children: React.ReactNode; }
export const GlassCard = React.forwardRef<HTMLDivElement, Props>(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={`bg-white/70 backdrop-blur-[var(--blur-md)] border-[length:var(--border-glass)] border-white/40 rounded-[var(--radius-card)] shadow-glass ${className}`} {...props}>
    {children}
  </div>
));
GlassCard.displayName = 'GlassCard';

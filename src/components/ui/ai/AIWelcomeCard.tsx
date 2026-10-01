import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';
import { springConfig } from '@/constants/motion';
import { Sparkles } from 'lucide-react';

export interface AIWelcomeCardProps extends HTMLMotionProps<'div'> {
  title?: string;
  description?: string;
}

export const AIWelcomeCard = React.forwardRef<HTMLDivElement, AIWelcomeCardProps>(
  ({ className, title = "Hi, I'm Echo", description = "Ask me anything about this profile.", ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={springConfig}
        className={cn(
          'relative overflow-hidden rounded-[var(--radius-card)] p-8 bg-white/60 backdrop-blur-2xl border border-white shadow-glass',
          className
        )}
        {...props}
      >
        <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none text-[var(--color-primary)]">
          <Sparkles size={120} strokeWidth={1} />
        </div>
        
        <div className="relative z-10 max-w-sm">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-accent-blue)] text-white shadow-floating mb-6">
            <Sparkles size={24} />
          </div>
          <h3 className="text-2xl font-medium text-[var(--color-text)] mb-3">{title}</h3>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">{description}</p>
        </div>
      </motion.div>
    );
  }
);

AIWelcomeCard.displayName = 'AIWelcomeCard';

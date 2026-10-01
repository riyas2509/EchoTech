import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';
import { springConfig } from '@/constants/motion';
import { Sparkles } from 'lucide-react';

export interface AISuggestionChipProps extends HTMLMotionProps<'button'> {
  label: string;
}

export const AISuggestionChip = React.forwardRef<HTMLButtonElement, AISuggestionChipProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={springConfig}
        className={cn(
          'inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 text-[var(--color-primary)] font-medium text-sm transition-colors hover:bg-[var(--color-primary)]/10',
          className
        )}
        {...props}
      >
        <Sparkles size={14} />
        {label}
      </motion.button>
    );
  }
);

AISuggestionChip.displayName = 'AISuggestionChip';

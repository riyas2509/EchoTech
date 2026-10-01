import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface Props extends Omit<HTMLMotionProps<'button'>, 'onDrag' | 'onDragStart' | 'onDragEnd'> {
  children: React.ReactNode;
}

export const GradientButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, className = '', ...props }, ref) => (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center justify-center h-14 w-full rounded-full bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 text-white font-semibold text-[length:var(--text-brand)] tracking-[var(--text-brand--tracking)] shadow-capsule ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
);
GradientButton.displayName = 'GradientButton';

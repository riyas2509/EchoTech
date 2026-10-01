import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';
import { springConfig } from '@/constants/motion';
import { Bot, User } from 'lucide-react';

export interface AIMessageProps extends HTMLMotionProps<'div'> {
  role: 'user' | 'assistant';
  content: string;
}

export const AIMessage = React.forwardRef<HTMLDivElement, AIMessageProps>(
  ({ className, role, content, ...props }, ref) => {
    const isUser = role === 'user';
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={springConfig}
        className={cn('flex w-full gap-4', isUser ? 'flex-row-reverse' : 'flex-row', className)}
        {...props}
      >
        <div className={cn(
          'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center',
          isUser ? 'bg-bg-deep' : 'bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-accent-blue)] text-white shadow-soft'
        )}>
          {isUser ? <User size={20} className="text-text-secondary" /> : <Bot size={20} />}
        </div>
        
        <div className={cn(
          'px-6 py-4 rounded-3xl max-w-[80%]',
          isUser 
            ? 'bg-bg-deep rounded-tr-sm text-[var(--color-text)]' 
            : 'bg-white/60 backdrop-blur-xl border border-white shadow-glass rounded-tl-sm text-[var(--color-text)]'
        )}>
          <p className="leading-relaxed">{content}</p>
        </div>
      </motion.div>
    );
  }
);

AIMessage.displayName = 'AIMessage';

import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';
import { AISuggestionChip } from './AISuggestionChip';
import { springConfig } from '@/constants/motion';

export interface SuggestedQuestionsProps extends Omit<HTMLMotionProps<'div'>, 'onSelect'> {
  questions: string[];
  onSelect?: (question: string) => void;
}

export const SuggestedQuestions = React.forwardRef<HTMLDivElement, SuggestedQuestionsProps>(
  ({ className, questions, onSelect, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn('flex flex-wrap gap-3', className)}
        {...props}
      >
        {questions.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, delay: i * 0.1 }}
          >
            <AISuggestionChip
              label={q}
              onClick={() => onSelect?.(q)}
            />
          </motion.div>
        ))}
      </motion.div>
    );
  }
);

SuggestedQuestions.displayName = 'SuggestedQuestions';

import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { springConfig } from '@/constants/motion';

interface MotionScaleProps extends HTMLMotionProps<'div'> {
  delay?: number;
  initialScale?: number;
}

const MotionScale: React.FC<MotionScaleProps> = ({ 
  children, 
  delay = 0, 
  initialScale = 0,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: initialScale }}
      transition={{ ...springConfig, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionScale;

import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { springConfig } from '@/constants/motion';

interface MotionFadeProps extends HTMLMotionProps<'div'> {
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

const MotionFade: React.FC<MotionFadeProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  distance = 20,
  ...props 
}) => {
  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: distance };
      case 'down': return { opacity: 0, y: -distance };
      case 'left': return { opacity: 0, x: distance };
      case 'right': return { opacity: 0, x: -distance };
      default: return { opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={getInitial()}
      transition={{ ...springConfig, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionFade;

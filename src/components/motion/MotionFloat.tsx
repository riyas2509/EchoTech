import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface MotionFloatProps extends HTMLMotionProps<'div'> {
  yOffset?: number;
  duration?: number;
}

const MotionFloat: React.FC<MotionFloatProps> = ({ 
  children, 
  yOffset = 10,
  duration = 3,
  ...props 
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionFloat;

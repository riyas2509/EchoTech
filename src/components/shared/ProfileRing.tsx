import React from 'react';
import { motion } from 'framer-motion';

export const ProfileRing: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative inline-flex items-center justify-center">
    <motion.div 
      animate={{ rotate: 360 }} 
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} 
      className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-400 via-pink-400 to-purple-400 opacity-20 blur-md z-0" 
    />
    {children}
    <div className="absolute bottom-1 right-2 w-4 h-4 bg-emerald-500 border-[length:var(--border-dot)] border-white rounded-full z-20" />
  </div>
);

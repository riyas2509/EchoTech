import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const BottomSheet: React.FC<Props> = ({ isOpen, onClose, children }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          onClick={onClose} 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-[var(--blur-sm)] z-40" 
        />
        <motion.div 
          initial={{ y: '100%' }} 
          animate={{ y: 0 }} 
          exit={{ y: '100%' }} 
          transition={{ type: 'spring', damping: 25, stiffness: 200 }} 
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-[var(--blur-xl)] border-t border-white/50 shadow-capsule rounded-t-3xl pt-2 pb-safe px-5"
        >
          <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-6" />
          {children}
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

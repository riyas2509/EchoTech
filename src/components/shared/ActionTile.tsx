import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

export const ActionTile: React.FC<Props> = ({ icon, label, onClick }) => (
  <motion.button 
    onClick={onClick} 
    whileHover={{ scale: 1.02 }} 
    whileTap={{ scale: 0.98 }} 
    className="flex flex-col items-center justify-center py-[var(--spacing-grid-py)] px-[var(--spacing-grid-px)] bg-white/70 backdrop-blur-[var(--blur-md)] border border-white/40 shadow-sm rounded-[var(--radius-card)] gap-3 transition-colors hover:bg-white/90"
  >
    <div className="text-slate-700">{icon}</div>
    <span className="text-[length:var(--text-card-label)] font-semibold text-slate-800">{label}</span>
  </motion.button>
);

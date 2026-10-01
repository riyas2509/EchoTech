import React from 'react';
import { GlassCard } from './GlassCard';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  description: string;
  imageUrl: string;
}

export const ProjectCard: React.FC<Props> = ({ title, description, imageUrl }) => (
  <motion.div whileHover={{ scale: 1.01 }}>
    <GlassCard className="flex flex-col overflow-hidden w-full cursor-pointer hover:bg-white/80 transition-colors">
      <div className="w-full h-32 bg-gradient-to-br from-cyan-100 via-pink-100 to-purple-100 relative">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover relative z-10" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-slate-800 text-sm mb-1">{title}</h3>
        <p className="text-xs font-medium text-slate-500 line-clamp-2">{description}</p>
      </div>
    </GlassCard>
  </motion.div>
);

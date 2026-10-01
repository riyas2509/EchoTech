import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Mail, Globe } from 'lucide-react';
import { springConfig } from '@/constants/motion';
import { contactData } from '@/data/contact';

export const SocialDock: React.FC = () => {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, ...springConfig }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-6 px-8 py-4 bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full"
    >
      <button onClick={() => window.open(`https://linkedin.com/in/${contactData.linkedin}`, '_blank')} className="text-[#0A66C2] hover:opacity-80 transition-opacity"><FaLinkedin size={22} /></button>
      <button onClick={() => window.open(`https://github.com/${contactData.github}`, '_blank')} className="text-[#181717] hover:opacity-80 transition-opacity"><FaGithub size={22} /></button>
      <button onClick={() => window.location.href = `mailto:${contactData.email}`} className="text-[#EA4335] hover:opacity-80 transition-opacity"><Mail size={22} /></button>
      <button onClick={() => window.open(`https://${contactData.website}`, '_blank')} className="text-violet-500 hover:opacity-80 transition-opacity">
        <Globe size={22} />
      </button>
    </motion.div>
  );
};

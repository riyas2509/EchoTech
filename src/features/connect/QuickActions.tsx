import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Menu,
  MessageSquare, 
  Briefcase, 
  FileText, 
  Calendar, 
  BarChart2,
  ChevronLeft
} from 'lucide-react';

import { springConfig } from '@/constants/motion';

const QuickActionsPage: React.FC = () => {
  const navigate = useNavigate();
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const itemFadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: springConfig }
  };

  const actions = [
    { label: 'AI Chat', icon: <MessageSquare size={24} className="text-slate-700" /> },
    { label: 'Portfolio', icon: <Briefcase size={24} className="text-slate-700" /> },
    { label: 'Resume', icon: <FileText size={24} className="text-slate-700" /> },
    { label: 'Calendar', icon: <Calendar size={24} className="text-slate-700" /> },
    { label: 'Analytics', icon: <BarChart2 size={24} className="text-slate-700" /> },
  ];

  return (
    <div className="relative min-h-[100dvh] w-full bg-slate-50 overflow-hidden flex flex-col items-center">
      {/* Background Glows (Same as Home) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-pink-200 opacity-30 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full bg-cyan-200 opacity-30 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-md min-h-[100dvh] mx-auto flex flex-col pt-safe pb-safe px-5">
        
        {/* Header (Same as Home but with Back button) */}
        <header className="w-full flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <button onClick={() => navigate(-1)} className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center hover:bg-slate-200/50 transition-colors">
              <ChevronLeft size={24} className="text-slate-800" />
            </button>
            <span className="font-bold tracking-wider text-sm text-slate-800" style={{ fontFamily: 'Manrope, sans-serif' }}>
              QUICK ACTIONS
            </span>
          </div>
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200/50 transition-colors">
            <Menu size={20} className="text-slate-800" />
          </button>
        </header>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="w-full flex flex-col items-center mt-6 flex-1 pb-32"
        >
          <div className="w-full flex flex-col gap-3">
            {actions.map((card, idx) => (
              <motion.button 
                key={idx}
                variants={itemFadeUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center p-4 bg-white/70 backdrop-blur-[var(--blur-md)] border-[length:var(--border-glass)] border-white/40 shadow-sm rounded-[var(--radius-card)] gap-4 transition-colors hover:bg-white/90 w-full text-left"
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <span className="text-[15px] font-semibold text-slate-800">{card.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>



    </div>
  );
};

export default QuickActionsPage;

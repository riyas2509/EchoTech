import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { springConfig } from '@/constants/motion';

export const UpdatesFooterSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-slate-900 pt-24 pb-12 relative z-10 flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springConfig}
          className="w-full flex flex-col items-center text-center"
        >
          <h2 className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Latest Update</h2>
          <button 
            onClick={() => { navigate('/insights'); window.scrollTo(0,0); }} 
            className="w-full max-w-2xl p-8 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-3xl flex flex-col items-center transition-all group"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-3">Company News &middot; Today</span>
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-brand-primary transition-colors">EchoTech Headquarters v2.0 goes live</h3>
            <p className="text-slate-400 font-medium">Experience the newly expanded digital hub serving as the central locus for our vision, products, and engineering.</p>
          </button>
        </motion.div>
      </div>

      <p className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em]">
        POWERED BY ECHOTECH
      </p>
    </footer>
  );
};

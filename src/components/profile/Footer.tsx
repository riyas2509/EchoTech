import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full pb-32 pt-12 px-5 relative z-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative Signature Glow */}
      <div className="absolute bottom-[-20%] left-[50%] -translate-x-1/2 w-full h-[150px] bg-gradient-to-t from-pink-200/40 via-purple-200/20 to-transparent blur-3xl pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-3 relative z-10"
      >
        <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200/60 shadow-sm backdrop-blur-sm">
          <span className="text-xs font-semibold text-slate-500">Made with ❤️</span>
        </div>
        
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-slate-500">
          Powered by EchoCard
        </p>
        
        <p className="text-[10px] font-medium text-slate-400">
          © {new Date().getFullYear()} EchoTech
        </p>
      </motion.div>
    </footer>
  );
};

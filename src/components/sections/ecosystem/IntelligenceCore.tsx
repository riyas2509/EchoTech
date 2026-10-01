import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface IntelligenceCoreProps {
  isInView: boolean;
}

export const IntelligenceCore: React.FC<IntelligenceCoreProps> = ({ isInView }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: [1, 1.03, 1] } : { opacity: 0, scale: 0.8 }}
      transition={{ 
        opacity: { duration: 1, delay: 0.8, ease: "easeOut" },
        scale: { duration: 10, repeat: Infinity, ease: [0.22, 1, 0.36, 1], delay: 0.8 }
      }}
      className="absolute z-10 flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    >
      {/* Subtle Pulse */}
      <motion.div
        animate={{ scale: [1, 1.15, 1.3], opacity: [0, 0.2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeOut", times: [0, 0.3, 1] }}
        className="absolute inset-0 rounded-full border border-[#3E82FF] shadow-[0_0_20px_rgba(62,130,255,0.2)]"
      />
      
      {/* Rotating Rings */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute w-[192px] h-[192px] rounded-full border-[1px] border-slate-300/20 border-t-[#3E82FF]/40 opacity-30" />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="absolute w-[208px] h-[208px] rounded-full border-[0.5px] border-slate-300/10 border-b-[#8ED8FF]/30 opacity-20" />

      {/* Occasional Energy Particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, Math.sin(i * 120) * 100],
            x: [0, Math.cos(i * 120) * 100],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 2.5,
            ease: "easeInOut"
          }}
          className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(62,130,255,0.8)]"
        />
      ))}

      {/* Core Capsule */}
      <div className="relative w-[160px] h-[160px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/90 via-white/80 to-slate-50/70 shadow-[0_4px_24px_rgba(0,0,0,0.04),inset_0_-1px_10px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center border border-white/60 backdrop-blur-3xl overflow-hidden pointer-events-auto">
        <motion.div animate={{ y: [-5, 5, -5], x: [-3, 3, -3], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute w-32 h-32 bg-gradient-to-br from-[#3E82FF] to-transparent rounded-full blur-2xl opacity-20 top-[-10%] left-[-10%]" />
        <motion.div animate={{ y: [5, -5, 5], x: [3, -3, 3], opacity: [0.1, 0.25, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute w-24 h-24 bg-gradient-to-tl from-[#5DA9FF] to-transparent rounded-full blur-2xl opacity-15 bottom-[-10%] right-[-10%]" />

        <div className="relative z-10 flex flex-col items-center justify-center">
          <Zap size={20} className="text-[#3E82FF] mb-1.5" strokeWidth={2.5} />
          <span className="text-[14px] font-bold text-slate-900 leading-none tracking-[0.08em] mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>ECHOTECH</span>
          <span className="text-[8px] font-semibold text-slate-500 uppercase tracking-[0.28em] leading-none text-center px-2" style={{ fontFamily: 'Manrope, sans-serif' }}>INTELLIGENCE CORE</span>
        </div>
      </div>
    </motion.div>
  );
};

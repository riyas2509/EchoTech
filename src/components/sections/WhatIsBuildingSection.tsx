import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mic, Brain, Target, PlayCircle, Database, Network } from 'lucide-react';

export const WhatIsBuildingSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Scroll triggers for lighting up stages
  const stage1 = useTransform(scrollYProgress, [0, 0.15], [0.3, 1]);
  const stage2 = useTransform(scrollYProgress, [0.15, 0.3], [0.3, 1]);
  const stage3 = useTransform(scrollYProgress, [0.3, 0.45], [0.3, 1]);
  const stage4 = useTransform(scrollYProgress, [0.45, 0.6], [0.3, 1]);
  const stage5 = useTransform(scrollYProgress, [0.6, 0.75], [0.3, 1]);
  const stage6 = useTransform(scrollYProgress, [0.75, 0.9], [0.3, 1]);

  return (
    <section ref={containerRef} className="w-full bg-slate-900 relative overflow-hidden h-[150vh]" id="intelligence-engine">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[800px] bg-slate-800/50 rounded-full blur-[150px] pointer-events-none" />

      {/* Sticky container that centers perfectly to prevent clipping */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 xl:px-16 z-10 overflow-hidden">
        
        <div className="text-center mb-10 md:mb-16 max-w-[800px]">
          <h2 className="text-[clamp(32px,4vw,56px)] font-bold text-white tracking-tight leading-[1.1] mb-4">
            The EchoTech Intelligence Engine
          </h2>
          <p className="text-[18px] md:text-[20px] text-slate-400 font-medium leading-[1.5]">
            How clarity becomes action.
          </p>
        </div>

        {/* The Massive Interactive Panel */}
        <div className="relative w-full max-w-[1100px] h-[500px] md:h-[600px] bg-slate-950/50 backdrop-blur-2xl rounded-[48px] border border-slate-800 shadow-2xl p-8 flex items-center justify-center">
          
          {/* Centerpiece Visual */}
          <div className="absolute z-30 flex flex-col items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-[32px] md:rounded-[40px] flex items-center justify-center shadow-[0_0_100px_rgba(255,255,255,0.15)] border border-slate-200/50 relative">
              <img src="/assets/echotech-icon.png" alt="EchoTech" loading="lazy" className="w-20 md:w-28 h-auto object-contain relative z-10" />
            </div>
          </div>

          {/* Connection Lines (Using relative coordinates instead of fixed path to scale better) */}
          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-50" viewBox="0 0 1000 600" preserveAspectRatio="none">
            {/* Capture (Top Left) */}
            <path d="M 250 150 Q 400 250 500 300" fill="none" stroke="url(#blue-grad)" strokeWidth="3" strokeDasharray="6 6" className="animate-pulse" />
            {/* Understand (Top Right) */}
            <path d="M 750 150 Q 600 250 500 300" fill="none" stroke="url(#purple-grad)" strokeWidth="3" strokeDasharray="6 6" className="animate-pulse" />
            {/* Think (Left) */}
            <path d="M 150 300 Q 300 300 500 300" fill="none" stroke="url(#lavender-grad)" strokeWidth="3" strokeDasharray="6 6" className="animate-pulse" />
            {/* Validate (Right) */}
            <path d="M 850 300 Q 700 300 500 300" fill="none" stroke="url(#orange-grad)" strokeWidth="3" strokeDasharray="6 6" className="animate-pulse" />
            {/* Execute (Bottom Left) */}
            <path d="M 250 450 Q 400 350 500 300" fill="none" stroke="url(#green-grad)" strokeWidth="3" strokeDasharray="6 6" className="animate-pulse" />
            {/* Remember (Bottom Right) */}
            <path d="M 750 450 Q 600 350 500 300" fill="none" stroke="url(#pink-grad)" strokeWidth="3" strokeDasharray="6 6" className="animate-pulse" />

            <defs>
              <linearGradient id="blue-grad"><stop offset="0%" stopColor="#8ED8FF"/><stop offset="100%" stopColor="#fff"/></linearGradient>
              <linearGradient id="purple-grad"><stop offset="0%" stopColor="#A874FF"/><stop offset="100%" stopColor="#fff"/></linearGradient>
              <linearGradient id="lavender-grad"><stop offset="0%" stopColor="#D8B4E2"/><stop offset="100%" stopColor="#fff"/></linearGradient>
              <linearGradient id="orange-grad"><stop offset="0%" stopColor="#FFBC5E"/><stop offset="100%" stopColor="#fff"/></linearGradient>
              <linearGradient id="green-grad"><stop offset="0%" stopColor="#34C985"/><stop offset="100%" stopColor="#fff"/></linearGradient>
              <linearGradient id="pink-grad"><stop offset="0%" stopColor="#FF8FA3"/><stop offset="100%" stopColor="#fff"/></linearGradient>
            </defs>
          </svg>

          {/* The 6 Stages */}
          
          {/* 1. Capture */}
          <motion.div style={{ opacity: stage1 }} className="absolute top-[12%] left-[15%] z-20 flex flex-col items-center gap-3 group">
             <div className="w-14 h-14 md:w-16 md:h-16 rounded-[20px] bg-slate-900 border border-sky-blue/40 flex items-center justify-center shadow-[0_0_20px_rgba(142,216,255,0.2)] transition-transform duration-300 group-hover:scale-110">
               <Mic size={24} className="text-sky-blue" />
             </div>
             <div className="text-center bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-800">
               <span className="text-[10px] font-bold text-sky-blue uppercase tracking-widest block mb-0.5">Stage 1</span>
               <span className="text-white font-bold text-[14px] md:text-[16px]">Idea</span>
             </div>
          </motion.div>

          {/* 2. Understand */}
          <motion.div style={{ opacity: stage2 }} className="absolute top-[12%] right-[15%] z-20 flex flex-col items-center gap-3 group">
             <div className="w-14 h-14 md:w-16 md:h-16 rounded-[20px] bg-slate-900 border border-violet/40 flex items-center justify-center shadow-[0_0_20px_rgba(168,116,255,0.2)] transition-transform duration-300 group-hover:scale-110">
               <Network size={24} className="text-violet" />
             </div>
             <div className="text-center bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-800">
               <span className="text-[10px] font-bold text-violet uppercase tracking-widest block mb-0.5">Stage 2</span>
               <span className="text-white font-bold text-[14px] md:text-[16px]">Understanding</span>
             </div>
          </motion.div>

          {/* 3. Think */}
          <motion.div style={{ opacity: stage3 }} className="absolute top-[40%] md:top-[42%] left-[5%] md:left-[8%] z-20 flex flex-col items-center gap-3 group">
             <div className="w-14 h-14 md:w-16 md:h-16 rounded-[20px] bg-slate-900 border border-[#D8B4E2]/40 flex items-center justify-center shadow-[0_0_20px_rgba(216,180,226,0.2)] transition-transform duration-300 group-hover:scale-110">
               <Brain size={24} className="text-[#D8B4E2]" />
             </div>
             <div className="text-center bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-800">
               <span className="text-[10px] font-bold text-[#D8B4E2] uppercase tracking-widest block mb-0.5">Stage 3</span>
               <span className="text-white font-bold text-[14px] md:text-[16px]">Thinking</span>
             </div>
          </motion.div>

          {/* 4. Validate */}
          <motion.div style={{ opacity: stage4 }} className="absolute top-[40%] md:top-[42%] right-[5%] md:right-[8%] z-20 flex flex-col items-center gap-3 group">
             <div className="w-14 h-14 md:w-16 md:h-16 rounded-[20px] bg-slate-900 border border-amber-orange/40 flex items-center justify-center shadow-[0_0_20px_rgba(255,188,94,0.2)] transition-transform duration-300 group-hover:scale-110">
               <Target size={24} className="text-amber-orange" />
             </div>
             <div className="text-center bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-800">
               <span className="text-[10px] font-bold text-amber-orange uppercase tracking-widest block mb-0.5">Stage 4</span>
               <span className="text-white font-bold text-[14px] md:text-[16px]">Validation</span>
             </div>
          </motion.div>

          {/* 5. Execute */}
          <motion.div style={{ opacity: stage5 }} className="absolute bottom-[12%] left-[15%] z-20 flex flex-col items-center gap-3 group">
             <div className="w-14 h-14 md:w-16 md:h-16 rounded-[20px] bg-slate-900 border border-mint-green/40 flex items-center justify-center shadow-[0_0_20px_rgba(104,227,183,0.2)] transition-transform duration-300 group-hover:scale-110">
               <PlayCircle size={24} className="text-mint-green" />
             </div>
             <div className="text-center bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-800">
               <span className="text-[10px] font-bold text-mint-green uppercase tracking-widest block mb-0.5">Stage 5</span>
               <span className="text-white font-bold text-[14px] md:text-[16px]">Execution</span>
             </div>
          </motion.div>

          {/* 6. Remember */}
          <motion.div style={{ opacity: stage6 }} className="absolute bottom-[12%] right-[15%] z-20 flex flex-col items-center gap-3 group">
             <div className="w-14 h-14 md:w-16 md:h-16 rounded-[20px] bg-slate-900 border border-[#FF8FA3]/40 flex items-center justify-center shadow-[0_0_20px_rgba(255,143,163,0.2)] transition-transform duration-300 group-hover:scale-110">
               <Database size={24} className="text-[#FF8FA3]" />
             </div>
             <div className="text-center bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-800">
               <span className="text-[10px] font-bold text-[#FF8FA3] uppercase tracking-widest block mb-0.5">Stage 6</span>
               <span className="text-white font-bold text-[14px] md:text-[16px]">Sustainable Growth</span>
             </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

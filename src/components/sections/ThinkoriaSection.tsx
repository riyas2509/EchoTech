import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ArrowRight, Network, SplitSquareHorizontal, Lightbulb } from 'lucide-react';

export const ThinkoriaSection: React.FC = () => {
  return (
    <section className="w-full min-h-[85vh] py-24 flex items-center bg-cotton-white relative overflow-hidden" id="thinkoria">
      
      {/* Mesh background for Thinkoria */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#A874FF08_1px,transparent_1px),linear-gradient(to_bottom,#A874FF08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Massive UI Visualization (Lavender Theme) */}
        <div className="relative w-full h-[600px] flex items-center justify-center order-2 lg:order-1">
          
          <div className="absolute inset-0 bg-lavender/40 rounded-full blur-[100px] z-0" />

          {/* Main App UI Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[650px] bg-white rounded-[40px] border border-mist-gray shadow-2xl overflow-hidden z-10 flex flex-col"
          >
            {/* Header */}
            <div className="h-20 border-b border-mist-gray flex items-center px-8 justify-between bg-cloud-gray/50">
               <div className="flex items-center gap-3">
                 <Brain size={20} className="text-violet" />
                 <span className="text-[14px] font-bold text-slate-700">Reasoning Engine Active</span>
               </div>
            </div>

            {/* Content Area - Mind Map / Decision Tree */}
            <div className="p-8 flex flex-col items-center justify-center bg-white/50 backdrop-blur-md h-[450px] relative">
              
              {/* Central Node */}
              <div className="w-40 bg-slate-900 text-white p-3 rounded-2xl text-center shadow-lg relative z-20 mb-8 border border-slate-700">
                <span className="text-[12px] font-bold block mb-1">Core Premise</span>
                <span className="text-[14px] font-medium">Pivot to Enterprise</span>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                <path d="M 325 150 Q 200 250 200 300" fill="none" stroke="#D8B4E2" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                <path d="M 325 150 Q 450 250 450 300" fill="none" stroke="#D8B4E2" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
              </svg>

              {/* Branch Cards (Pros vs Cons) */}
              <div className="flex w-full justify-between px-4 z-20 gap-8">
                
                {/* Pro Branch */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex-1 bg-white p-4 rounded-2xl border border-mist-gray shadow-sm"
                >
                  <div className="flex items-center gap-2 text-emerald-500 mb-3">
                    <SplitSquareHorizontal size={16} />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Advantage</span>
                  </div>
                  <ul className="text-[13px] text-slate-700 font-medium flex flex-col gap-2">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"/> Higher ACV potential</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"/> Lower churn rate</li>
                  </ul>
                </motion.div>

                {/* Con Branch */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex-1 bg-white p-4 rounded-2xl border border-mist-gray shadow-sm"
                >
                  <div className="flex items-center gap-2 text-amber-500 mb-3">
                    <SplitSquareHorizontal size={16} />
                    <span className="text-[11px] font-bold uppercase tracking-wider">Risk</span>
                  </div>
                  <ul className="text-[13px] text-slate-700 font-medium flex flex-col gap-2">
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"/> 12-18mo sales cycle</li>
                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"/> Complex data governance review</li>
                  </ul>
                </motion.div>

              </div>

              {/* Alternative Reasoning Generation */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mt-8 bg-lavender/30 border border-violet/20 w-[90%] rounded-2xl p-4 flex items-center justify-between z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Network size={14} className="text-deep-purple" />
                  </div>
                  <span className="text-[13px] font-bold text-deep-purple">Generating alternative perspectives...</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-deep-purple animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 rounded-full bg-deep-purple animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-2 h-2 rounded-full bg-deep-purple animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </motion.div>

            </div>
          </motion.div>
          
          {/* Floating Accents */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="absolute -left-6 top-1/3 bg-white p-4 rounded-2xl shadow-xl border border-mist-gray flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 rounded-full bg-lavender/40 flex items-center justify-center">
              <Lightbulb size={18} className="text-deep-purple" />
            </div>
            <div className="flex flex-col">
               <span className="text-[13px] font-bold text-slate-800">Blindspot Found</span>
            </div>
          </motion.div>

        </div>

        {/* Right: Product Narrative */}
        <div className="flex flex-col items-start z-10 max-w-[560px] order-1 lg:order-2">
          
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-[12px] font-bold text-violet uppercase tracking-widest">Stage 2: Think</span>
            <div className="w-14 h-14 rounded-2xl bg-lavender/30 border border-violet/20 flex items-center justify-center shadow-sm">
              <img src="/assets/echotech-icon.png" alt="Thinkoria" loading="lazy" className="h-7 w-auto object-contain" />
            </div>
          </div>
          
          <h2 className="text-[clamp(36px,4vw,56px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Thinkoria
          </h2>
          
          <p className="text-[18px] md:text-[20px] text-slate-500 font-medium leading-[1.6] mb-10">
            EchoNote captures what happened; Thinkoria explores what could happen next. As a long-term vision, we are researching a collaborative 3D reasoning game designed to expand human thinking, challenge your assumptions, and simulate alternative perspectives before you commit.
          </p>
          
          <button className="group flex items-center justify-center gap-2 px-8 h-[56px] rounded-full bg-slate-900 text-white text-[15px] font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-[1px]">
            Explore Thinkoria
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Target, ArrowRight, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';

export const ProtoLensSection: React.FC = () => {
  return (
    <section className="w-full min-h-[85vh] py-24 flex items-center bg-white relative overflow-hidden" id="protolens">
      
      {/* Background Element */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-orange/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Product Narrative */}
        <div className="flex flex-col items-start z-10 max-w-[560px]">
          
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-[12px] font-bold text-amber-orange uppercase tracking-widest">Stage 3: Validate</span>
            <div className="w-14 h-14 rounded-2xl bg-amber-orange/10 border border-amber-orange/20 flex items-center justify-center shadow-sm">
              <img src="/assets/echotech-icon.png" alt="ProtoLens" loading="lazy" className="h-7 w-auto object-contain" />
            </div>
          </div>
          
          <h2 className="text-[clamp(36px,4vw,56px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
            ProtoLens
          </h2>
          
          <p className="text-[18px] md:text-[20px] text-slate-500 font-medium leading-[1.6] mb-10">
            Thinkoria expands possibilities. ProtoLens helps you make better-informed build/no-build decisions. Stop building in the dark—we are developing ProtoLens to evaluate your ideas against market signals, competitor movements, and risk assessments before you write a single line of code.
          </p>
          
          <button className="group flex items-center justify-center gap-2 px-8 h-[56px] rounded-full bg-slate-900 text-white text-[15px] font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-[1px]">
            Explore ProtoLens
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right: Massive UI Visualization (Amber Theme) */}
        <div className="relative w-full h-[600px] flex items-center justify-center">
          
          <div className="absolute inset-0 bg-amber-orange/30 rounded-full blur-[100px] z-0" />

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
                 <Target size={20} className="text-amber-orange" />
                 <span className="text-[14px] font-bold text-slate-700">Validation Dashboard</span>
               </div>
               <div className="px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-[12px] font-bold">
                 Signal Strength: High
               </div>
            </div>

            {/* Content Area */}
            <div className="p-8 flex flex-col gap-6 bg-white/50 backdrop-blur-md h-[450px]">
              
              {/* Top Row: Score and Risk */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Opportunity Score */}
                <div className="bg-white p-5 rounded-2xl border border-mist-gray shadow-sm flex flex-col justify-between">
                  <span className="text-[12px] font-bold uppercase tracking-wide text-slate-500 mb-2">Opportunity Score</span>
                  <div className="flex items-end gap-2">
                    <span className="text-[48px] font-bold text-slate-900 leading-none">84</span>
                    <span className="text-[14px] font-bold text-emerald-500 mb-2">+12%</span>
                  </div>
                </div>

                {/* Risk Meter */}
                <div className="bg-white p-5 rounded-2xl border border-mist-gray shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[12px] font-bold uppercase tracking-wide text-slate-500">Execution Risk</span>
                    <AlertTriangle size={16} className="text-amber-orange" />
                  </div>
                  <div className="w-full h-3 bg-cloud-gray rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "45%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-amber-orange rounded-full"
                    />
                  </div>
                  <span className="text-[13px] font-medium text-slate-600 mt-2">Moderate complexity</span>
                </div>

              </div>

              {/* Trend Graph */}
              <div className="bg-white p-5 rounded-2xl border border-mist-gray shadow-sm flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp size={16} className="text-slate-400" />
                  <span className="text-[12px] font-bold uppercase tracking-wide text-slate-500">Market Demand Trend</span>
                </div>
                
                {/* SVG Graph */}
                <div className="flex-1 relative w-full flex items-end pb-4 border-b border-mist-gray">
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="amber-gradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#FFBC5E" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#FFBC5E" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M 0 100 Q 150 120 250 80 T 400 60 T 550 20 L 550 150 L 0 150 Z" fill="url(#amber-gradient)" />
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      d="M 0 100 Q 150 120 250 80 T 400 60 T 550 20" 
                      fill="none" 
                      stroke="#FFBC5E" 
                      strokeWidth="3" 
                    />
                  </svg>
                  
                  {/* Data Points */}
                  <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }} className="absolute left-[45%] top-[53%] w-3 h-3 bg-white border-2 border-amber-orange rounded-full" />
                  <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.5 }} className="absolute right-0 top-[13%] w-3 h-3 bg-amber-orange border-2 border-white rounded-full shadow-lg" />
                </div>
              </div>

            </div>
          </motion.div>

          {/* Floating Accents */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="absolute -right-6 bottom-1/3 bg-white p-4 rounded-2xl shadow-xl border border-mist-gray flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <ShieldCheck size={18} className="text-emerald-600" />
            </div>
            <div className="flex flex-col">
               <span className="text-[13px] font-bold text-slate-800">Hypothesis Validated</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Flag, ArrowRight, LineChart, Target } from 'lucide-react';

export const LifeCapitalSection: React.FC = () => {
  return (
    <section className="w-full min-h-[85vh] py-24 flex items-center bg-white relative overflow-hidden" id="lifecapital">
      
      {/* Background Element */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-lime-green/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Product Narrative */}
        <div className="flex flex-col items-start z-10 max-w-[560px]">
          
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-[12px] font-bold text-emerald-green uppercase tracking-widest">Stage 5: Sustain</span>
            <div className="w-14 h-14 rounded-2xl bg-lime-green/10 border border-lime-green/20 flex items-center justify-center shadow-sm">
              <img src="/assets/echotech-icon.png" alt="LifeCapital" loading="lazy" className="h-7 w-auto object-contain" />
            </div>
          </div>
          
          <h2 className="text-[clamp(36px,4vw,56px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
            LifeCapital
          </h2>
          
          <p className="text-[18px] md:text-[20px] text-slate-500 font-medium leading-[1.6] mb-10">
            Execution creates value. LifeCapital sustains it over time. We are building LifeCapital as an intelligent financial planning and decision support system, helping you evaluate major financial choices before you make them.
          </p>
          
          <button className="group flex items-center justify-center gap-2 px-8 h-[56px] rounded-full bg-slate-900 text-white text-[15px] font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-[1px]">
            Explore LifeCapital
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right: Massive UI Visualization (Lime Green Theme) */}
        <div className="relative w-full h-[600px] flex items-center justify-center">
          
          <div className="absolute inset-0 bg-lime-green/20 rounded-full blur-[100px] z-0" />

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
                 <Flag size={20} className="text-emerald-green" />
                 <span className="text-[14px] font-bold text-slate-700">Portfolio Overview</span>
               </div>
               <span className="text-[14px] font-bold text-slate-400">Q3 Trajectory</span>
            </div>

            {/* Content Area */}
            <div className="p-8 flex flex-col gap-6 bg-white/50 backdrop-blur-md h-[450px]">
              
              {/* Top Metrics Row */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Capital Allocation */}
                <div className="bg-white p-5 rounded-2xl border border-mist-gray shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-[4px] border-emerald-green border-r-emerald-green/20 flex items-center justify-center">
                    <span className="text-[12px] font-bold text-slate-700">72%</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Deep Work</span>
                    <span className="text-[14px] font-bold text-slate-900">Optimal Allocation</span>
                  </div>
                </div>

                {/* Trajectory */}
                <div className="bg-white p-5 rounded-2xl border border-mist-gray shadow-sm flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <LineChart size={16} className="text-emerald-green" />
                    <span className="text-[11px] font-bold uppercase tracking-wide text-slate-500">3Yr Projection</span>
                  </div>
                  <span className="text-[16px] font-bold text-slate-900">On Track <span className="text-emerald-500">+18%</span></span>
                </div>

              </div>

              {/* Goal Simulation Timeline */}
              <div className="bg-white p-6 rounded-2xl border border-mist-gray shadow-sm flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[14px] font-bold text-slate-900">Goal: Product Launch</span>
                  <span className="text-[12px] text-slate-500">Simulating...</span>
                </div>
                
                <div className="relative flex-1">
                   {/* Vertical Timeline Line */}
                   <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-100" />
                   
                   <div className="flex flex-col gap-6">
                     
                     {/* Milestone 1 */}
                     <motion.div 
                       initial={{ opacity: 0, x: -10 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       className="relative pl-12"
                     >
                       <div className="absolute left-2.5 top-1 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-emerald-green border-2 border-white shadow-sm" />
                       <span className="text-[13px] font-bold text-slate-900 block mb-1">MVP Feature Complete</span>
                       <span className="text-[11px] text-emerald-500 font-bold uppercase tracking-wide">Achieved (Week 4)</span>
                     </motion.div>

                     {/* Milestone 2 */}
                     <motion.div 
                       initial={{ opacity: 0, x: -10 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.2 }}
                       className="relative pl-12"
                     >
                       <div className="absolute left-2.5 top-1 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-emerald-green shadow-sm" />
                       <span className="text-[13px] font-bold text-slate-900 block mb-1">Beta User Onboarding</span>
                       <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wide">Projected (Week 6)</span>
                     </motion.div>
                     
                   </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Floating Accents */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="absolute -right-6 top-1/3 bg-white p-4 rounded-2xl shadow-xl border border-mist-gray flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 rounded-full bg-lime-green/20 flex items-center justify-center">
              <Target size={18} className="text-emerald-700" />
            </div>
            <div className="flex flex-col">
               <span className="text-[13px] font-bold text-slate-800">Goal Adjusted</span>
               <span className="text-[11px] text-emerald-600 font-medium">+2 weeks runway</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

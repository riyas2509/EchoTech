import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Settings, CheckCircle2, MoreHorizontal, Terminal, Activity } from 'lucide-react';

export const EchoOSSection: React.FC = () => {
  return (
    <section className="w-full min-h-[85vh] py-24 flex items-center bg-cotton-white relative overflow-hidden" id="echoos">
      
      {/* Background Dots Grid for EchoOS */}
      <div className="absolute inset-0 bg-[radial-gradient(#68E3B715_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Massive UI Visualization (Mint Green Theme) */}
        <div className="relative w-full h-[600px] flex items-center justify-center order-2 lg:order-1">
          
          <div className="absolute inset-0 bg-mint-green/20 rounded-full blur-[120px] z-0" />

          {/* Main App UI Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[650px] bg-slate-900 rounded-[40px] border border-slate-700 shadow-2xl overflow-hidden z-10 flex flex-col"
          >
            {/* Header */}
            <div className="h-20 border-b border-slate-800 flex items-center px-8 justify-between bg-slate-950/50">
               <div className="flex items-center gap-3">
                 <Terminal size={20} className="text-mint-green" />
                 <span className="text-[14px] font-bold text-white">Execution Pipeline</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-mint-green animate-pulse" />
                 <span className="text-[12px] font-bold text-mint-green uppercase tracking-wider">Running</span>
               </div>
            </div>

            {/* Content Area - Workflow Builder / Pipeline */}
            <div className="p-8 flex flex-col gap-6 bg-slate-900/50 backdrop-blur-md h-[450px] relative overflow-hidden">
              
              {/* Connecting vertical line */}
              <div className="absolute left-14 top-16 bottom-16 w-1 bg-slate-800 rounded-full" />
              
              {/* Step 1: Complete */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative z-10 flex items-center gap-6"
              >
                <div className="w-12 h-12 rounded-full bg-mint-green/20 border border-mint-green flex items-center justify-center shrink-0">
                  <CheckCircle2 size={24} className="text-mint-green" />
                </div>
                <div className="flex-1 bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[14px] font-bold text-white">Data Aggregation</span>
                    <span className="text-[12px] text-slate-400">0.2s</span>
                  </div>
                  <span className="text-[12px] text-slate-400">Pulled from 3 sources</span>
                </div>
              </motion.div>

              {/* Step 2: Running */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative z-10 flex items-center gap-6"
              >
                <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-mint-green flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(104,227,183,0.3)] relative">
                   <div className="absolute inset-0 rounded-full border border-mint-green animate-ping opacity-20" />
                   <Settings size={20} className="text-mint-green animate-spin-slow" />
                </div>
                <div className="flex-1 bg-slate-800/80 p-4 rounded-2xl border border-mint-green/30 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 h-1 bg-mint-green w-1/3 shadow-[0_0_10px_rgba(104,227,183,1)]" />
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[14px] font-bold text-white">Agent Processing</span>
                    <span className="text-[12px] text-mint-green">Running...</span>
                  </div>
                  <span className="text-[12px] text-slate-400">Synthesizing report</span>
                </div>
              </motion.div>

              {/* Step 3: Pending Approval */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="relative z-10 flex items-center gap-6 opacity-50"
              >
                <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center shrink-0">
                  <MoreHorizontal size={24} className="text-slate-500" />
                </div>
                <div className="flex-1 bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[14px] font-bold text-white">Human Approval</span>
                  </div>
                  <span className="text-[12px] text-slate-500">Awaiting processing</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Floating Accents */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="absolute -left-6 bottom-20 bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-mint-green/20">
              <Activity size={18} className="text-mint-green" />
            </div>
            <div className="flex flex-col">
               <span className="text-[13px] font-bold text-white">Automation</span>
               <span className="text-[11px] text-slate-400">24hrs saved</span>
            </div>
          </motion.div>

        </div>

        {/* Right: Product Narrative */}
        <div className="flex flex-col items-start z-10 max-w-[560px] order-1 lg:order-2">
          
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-[12px] font-bold text-mint-green uppercase tracking-widest">Stage 4: Execute</span>
            <div className="w-14 h-14 rounded-2xl bg-mint-green/10 border border-mint-green/20 flex items-center justify-center shadow-sm">
              <img src="/assets/echotech-icon.png" alt="EchoOS" loading="lazy" className="h-7 w-auto object-contain" />
            </div>
          </div>
          
          <h2 className="text-[clamp(36px,4vw,56px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
            EchoOS
          </h2>
          
          <p className="text-[18px] md:text-[20px] text-slate-500 font-medium leading-[1.6] mb-10">
            ProtoLens validates. EchoOS executes. EchoOS is designed as a marketplace and execution platform where users can create, sell, buy, and use AI agents, templates, and workflows to turn ideas into outcomes.
          </p>
          
          <button className="group flex items-center justify-center gap-2 px-8 h-[56px] rounded-full bg-slate-900 text-white text-[15px] font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-[1px]">
            Explore EchoOS
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

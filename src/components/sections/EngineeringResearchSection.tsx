import React from 'react';
import { motion } from 'framer-motion';
import { Server, Zap, Shield, Workflow } from 'lucide-react';

export const EngineeringResearchSection: React.FC = () => {
  return (
    <section className="w-full pt-[100px] pb-16 md:py-24 bg-slate-900 text-white overflow-hidden" id="engineering">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-16">
        
        <div className="text-center mb-12 max-w-[800px] mx-auto">
          <h2 className="text-[clamp(32px,3.5vw,48px)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Built for scale. Designed for speed.
          </h2>
          <p className="text-[18px] md:text-[20px] text-slate-400 font-medium leading-[1.6]">
            EchoTech's architecture is focused on thoughtful design, efficient processing, and establishing scalable foundations for intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Efficient Processing */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-sky-blue/50 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-sky-blue/10 border border-sky-blue/30 flex items-center justify-center mb-6">
              <Zap size={24} className="text-sky-blue" />
            </div>
            <h3 className="text-[20px] font-bold text-white mb-3">Efficient Processing</h3>
            <p className="text-[15px] font-medium text-slate-400 leading-relaxed mb-6">
              Everyday tasks and immediate context parsing are designed to happen locally on your device, prioritizing speed and maximizing privacy.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-slate-900 rounded-full text-[12px] font-bold text-slate-300">Local Architecture</span>
              <span className="px-3 py-1 bg-slate-900 rounded-full text-[12px] font-bold text-slate-300">Privacy First</span>
            </div>
          </motion.div>

          {/* Card 2: Modular Systems */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-violet/50 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-violet/10 border border-violet/30 flex items-center justify-center mb-6">
              <Workflow size={24} className="text-violet" />
            </div>
            <h3 className="text-[20px] font-bold text-white mb-3">Modular Systems</h3>
            <p className="text-[15px] font-medium text-slate-400 leading-relaxed mb-6">
              We don't rely on a single generic LLM. EchoTech is building intelligent routing to select the best model for logic, creativity, or speed.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-slate-900 rounded-full text-[12px] font-bold text-slate-300">Intelligent Routing</span>
              <span className="px-3 py-1 bg-slate-900 rounded-full text-[12px] font-bold text-slate-300">Flexible Base</span>
            </div>
          </motion.div>

          {/* Card 3: Scalable Foundations */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-emerald-green/50 transition-colors"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-green/10 border border-emerald-green/30 flex items-center justify-center mb-6">
              <Shield size={24} className="text-emerald-green" />
            </div>
            <h3 className="text-[20px] font-bold text-white mb-3">Scalable Foundations</h3>
            <p className="text-[15px] font-medium text-slate-400 leading-relaxed mb-6">
              Complex graph queries and heavy workflow executions are designed to scale securely, establishing a reliable product foundation.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1 bg-slate-900 rounded-full text-[12px] font-bold text-slate-300">Secure Architecture</span>
              <span className="px-3 py-1 bg-slate-900 rounded-full text-[12px] font-bold text-slate-300">Reliable</span>
            </div>
          </motion.div>

        </div>
        
        {/* Connection Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex justify-center items-center opacity-60"
        >
           <div className="h-24 w-[2px] bg-gradient-to-b from-slate-700 to-transparent relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-700" />
           </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-slate-950 p-6 md:p-8 rounded-[32px] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 max-w-[800px] mx-auto"
        >
           <div className="flex items-center gap-4">
              <Server size={24} className="text-slate-400" />
              <span className="text-[16px] font-bold text-white">EchoTech Distributed Core</span>
           </div>
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[14px] font-bold text-emerald-500 uppercase tracking-wide">Operational</span>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

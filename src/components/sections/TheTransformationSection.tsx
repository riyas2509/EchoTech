import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const TheTransformationSection: React.FC = () => {
  return (
    <section className="w-full py-24 md:py-32 bg-cotton-white relative overflow-hidden" id="transformation">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 w-full flex flex-col items-center">
        
        <div className="text-center mb-16 max-w-[800px]">
          <h2 className="text-[clamp(36px,4vw,56px)] font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
            The EchoTech Transformation
          </h2>
          <p className="text-[18px] md:text-[20px] text-slate-500 font-medium leading-[1.6]">
            Stop managing the mess. Start driving outcomes.
          </p>
        </div>

        {/* The Split Transformation Visual */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 relative z-10">
          
          {/* Connector Arrow (Desktop) */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full border-4 border-cotton-white items-center justify-center z-20 shadow-xl">
            <ArrowRight size={24} className="text-slate-400" />
          </div>

          {/* LEFT: The Old Way (Chaos) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-cloud-gray rounded-[32px] lg:rounded-r-none border border-mist-gray p-8 md:p-12 lg:pr-16 relative overflow-hidden"
          >
            {/* Visual Chaos Background */}
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
               {[...Array(15)].map((_, i) => (
                 <div key={i} className="absolute bg-slate-400 w-32 h-10 rounded-lg blur-sm transform rotate-[-15deg]" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
               ))}
            </div>

            <div className="relative z-10">
              <span className="text-[12px] font-bold text-slate-500 uppercase tracking-widest block mb-4">The Old Way</span>
              <h3 className="text-[28px] md:text-[36px] font-bold text-slate-900 leading-tight mb-8">
                Fragmented tools.<br/>Lost context.
              </h3>

              <div className="flex flex-col gap-3">
                
                {/* Chaos Items */}
                <div className="bg-white/60 border border-mist-gray p-4 rounded-xl flex items-start gap-3.5 shadow-sm">
                  <div className="mt-0.5"><AlertCircle size={18} className="text-sunset-orange" /></div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-slate-800">Scattered Information</span>
                    <span className="text-[13px] text-slate-500 font-medium mt-0.5">Notes in one app, tasks in another, strategy lost in Slack.</span>
                  </div>
                </div>

                <div className="bg-white/60 border border-mist-gray p-4 rounded-xl flex items-start gap-3.5 shadow-sm ml-4">
                  <div className="mt-0.5"><AlertCircle size={18} className="text-sunset-orange" /></div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-slate-800">Repetitive Work</span>
                    <span className="text-[13px] text-slate-500 font-medium mt-0.5">Starting from zero on every new project.</span>
                  </div>
                </div>

                <div className="bg-white/60 border border-mist-gray p-4 rounded-xl flex items-start gap-3.5 shadow-sm ml-8">
                  <div className="mt-0.5"><AlertCircle size={18} className="text-sunset-orange" /></div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-slate-800">Blind Execution</span>
                    <span className="text-[13px] text-slate-500 font-medium mt-0.5">Building without validating core assumptions.</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT: The EchoTech Way (Clarity) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full bg-white rounded-[32px] lg:rounded-l-none border border-mist-gray shadow-2xl p-8 md:p-12 lg:pl-16 relative overflow-hidden"
          >
            {/* Visual Clarity Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-ocean-blue/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[12px] font-bold text-ocean-blue uppercase tracking-widest block mb-4">The EchoTech Way</span>
              <h3 className="text-[28px] md:text-[36px] font-bold text-slate-900 leading-tight mb-8">
                Unified intelligence.<br/>Instant clarity.
              </h3>

              <div className="flex flex-col gap-3">
                
                {/* Clarity Items */}
                <div className="bg-ice-blue border border-sky-blue/20 p-4 rounded-xl flex items-start gap-3.5 shadow-sm">
                  <div className="mt-0.5"><CheckCircle2 size={18} className="text-ocean-blue" /></div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-slate-900">Unified Knowledge Graph</span>
                    <span className="text-[13px] text-slate-600 font-medium mt-0.5">Every conversation and decision connected automatically.</span>
                  </div>
                </div>

                <div className="bg-lavender/30 border border-violet/20 p-4 rounded-xl flex items-start gap-3.5 shadow-sm">
                  <div className="mt-0.5"><CheckCircle2 size={18} className="text-deep-purple" /></div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-slate-900">Compounding Memory</span>
                    <span className="text-[13px] text-slate-600 font-medium mt-0.5">Past outcomes inform your next strategy.</span>
                  </div>
                </div>

                <div className="bg-mint-green/10 border border-mint-green/30 p-4 rounded-xl flex items-start gap-3.5 shadow-sm">
                  <div className="mt-0.5"><CheckCircle2 size={18} className="text-emerald-700" /></div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-slate-900">Automated Execution</span>
                    <span className="text-[13px] text-slate-600 font-medium mt-0.5">Workflows that execute themselves based on your approval.</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section id="trust" className="w-full py-16 md:py-24 bg-slate-900 overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-[clamp(32px,3.5vw,48px)] font-bold text-white tracking-tight leading-[1.1] mb-6">
            Why EchoTech?
          </h2>
          <p className="text-[18px] md:text-[20px] text-slate-400 font-medium max-w-[600px] mx-auto leading-[1.6]">
            The cost of scattered information is not just lost time. It's lost momentum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-[900px] mx-auto">
          
          {/* Without EchoTech */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center bg-slate-800/50 p-10 rounded-[32px] border border-slate-700/50 shadow-lg relative"
          >
            <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-10 border border-red-500/20">
              <X className="text-red-400" size={24} />
            </div>
            
            <div className="flex flex-col items-center justify-center w-full min-h-[300px] relative">
              {/* Scattered layout */}
              <motion.div initial={{ x: -20, rotate: -5 }} className="w-[80%] bg-slate-800 py-3 rounded-xl text-center text-[14px] font-medium text-slate-400 border border-slate-700 mb-2">
                Information Scattered
              </motion.div>
              <motion.div initial={{ x: 20, rotate: 3 }} className="w-[70%] bg-slate-800 py-3 rounded-xl text-center text-[14px] font-medium text-slate-400 border border-slate-700 mb-4 ml-8">
                Manual Coordination
              </motion.div>
              <div className="w-[2px] h-6 bg-red-500/30 border-l border-dashed border-red-500/50 mb-2 mr-10" />
              <motion.div initial={{ x: -10, rotate: -2 }} className="w-[85%] bg-slate-800 py-3 rounded-xl text-center text-[14px] font-medium text-slate-400 border border-slate-700 mb-3 mr-4">
                Lost Context
              </motion.div>
              <motion.div initial={{ x: 30, rotate: 6 }} className="w-[60%] bg-slate-800 py-3 rounded-xl text-center text-[14px] font-medium text-slate-400 border border-slate-700 mb-2 ml-12">
                Repeated Work
              </motion.div>
              <motion.div initial={{ x: -5, rotate: -4 }} className="w-[90%] bg-slate-800 py-3 rounded-xl text-center text-[14px] font-medium text-slate-400 border border-slate-700 mt-4 opacity-50">
                Slow Execution
              </motion.div>
            </div>
          </motion.div>

          {/* With EchoTech */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center bg-slate-800/80 p-10 rounded-[32px] border border-ocean-blue/30 shadow-lg shadow-ocean-blue/5"
          >
            <div className="w-16 h-16 bg-ocean-blue/20 rounded-2xl flex items-center justify-center mb-10 border border-ocean-blue/40">
              <img src="/assets/echotech-icon.png" alt="EchoTech" loading="lazy" className="h-8 w-auto object-contain" />
            </div>
            
            <div className="flex flex-col items-center w-full min-h-[300px] relative">
               {/* Connected Flow Layout */}
               {['Capture', 'Understand', 'Decide', 'Execute', 'Remember'].map((text, i) => (
                <React.Fragment key={i}>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    viewport={{ once: true }}
                    className="w-[80%] bg-ice-blue py-3 rounded-xl text-center text-[14px] font-bold text-ocean-blue border border-sky-blue/50 shadow-sm z-10"
                  >
                    {text}
                  </motion.div>
                  {i < 4 && (
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: 24 }}
                      transition={{ delay: 0.4 + (i * 0.1), duration: 0.3 }}
                      viewport={{ once: true }}
                      className="w-[2px] bg-ocean-blue/50 my-[-2px]" 
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Mic, CheckCircle2, ArrowRight, User } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  return (
    <section id="workflow" className="w-full py-24 md:py-32 bg-white border-t border-b border-mist-gray overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
        
        <div className="text-center max-w-[800px] mx-auto mb-20">
          <h2 className="text-[32px] md:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
            From Conversation to Execution.
          </h2>
          <p className="text-[18px] text-slate-600 font-medium leading-[1.6]">
            The space between thinking and doing is where momentum is lost. Watch how EchoTech bridges that gap.
          </p>
        </div>

        {/* The Visual Workflow Journey */}
        <div className="w-full max-w-[900px] flex flex-col items-center gap-6 relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute top-[100px] bottom-[100px] left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-ocean-blue via-lavender to-emerald-green opacity-30 z-0" />

          {/* STEP 1: Conversation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="w-full max-w-[500px] bg-white border border-mist-gray rounded-2xl p-6 shadow-sm z-10 relative"
          >
            <div className="flex items-center gap-3 mb-4 text-slate-500 text-sm font-medium">
              <Mic size={16} className="text-ocean-blue" />
              <span>Team Meeting</span>
            </div>
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-cloud-gray flex items-center justify-center shrink-0">
                <User size={14} className="text-slate-500" />
              </div>
              <div className="bg-cloud-gray px-4 py-3 rounded-2xl rounded-tl-sm text-slate-700 text-[15px]">
                "Let's launch the new onboarding flow next month. Sarah, can you lead the design?"
              </div>
            </div>
          </motion.div>

          {/* STEP 2: EchoNote Extraction */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="w-full max-w-[500px] bg-ice-blue/30 border border-ice-blue rounded-2xl p-6 shadow-sm z-10 relative ml-[10%]"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/echotech-icon.png" alt="EchoNote" loading="lazy" className="h-5 w-auto object-contain" />
              <span className="text-ocean-blue text-sm font-bold uppercase tracking-wide">EchoNote Identified</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-sky-blue/30 shadow-sm flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold text-slate-400 uppercase">Decision</span>
                <span className="text-[12px] bg-lavender text-deep-purple px-2 py-0.5 rounded-full font-medium">High Priority</span>
              </div>
              <span className="text-slate-800 font-medium">Launch new onboarding flow</span>
              <div className="mt-2 text-[13px] text-slate-500 flex items-center gap-2">
                <span className="font-semibold text-slate-700">Owner:</span> Sarah
              </div>
            </div>
          </motion.div>

          {/* STEP 3: EchoOS Preparation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            className="w-full max-w-[500px] bg-mint-green/20 border border-mint-green rounded-2xl p-6 shadow-sm z-10 relative mr-[10%]"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 size={18} className="text-emerald-green" />
              <span className="text-emerald-green text-sm font-bold uppercase tracking-wide">EchoOS Prepared</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-white p-3 rounded-lg border border-mist-gray flex items-center justify-between shadow-sm">
                <span className="text-[14px] text-slate-700 font-medium">Create Project Space</span>
                <span className="text-[11px] text-emerald-green font-bold uppercase">Ready</span>
              </div>
              <div className="bg-white p-3 rounded-lg border border-mist-gray flex items-center justify-between shadow-sm">
                <span className="text-[14px] text-slate-700 font-medium">Draft Design Timeline</span>
                <span className="text-[11px] text-emerald-green font-bold uppercase">Ready</span>
              </div>
            </div>
            
            {/* Human Approval */}
            <div className="mt-5 pt-5 border-t border-emerald-green/20 flex flex-col items-center">
              <span className="text-[12px] font-bold text-slate-500 uppercase mb-3">Requires Human Approval</span>
              <button className="bg-emerald-green text-white px-8 py-2.5 rounded-full text-[14px] font-bold shadow-md hover:bg-emerald-600 transition-colors flex items-center gap-2">
                Approve & Execute <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

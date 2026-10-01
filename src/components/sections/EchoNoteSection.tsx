import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageSquare, Clock, FileText } from 'lucide-react';

export const EchoNoteSection: React.FC = () => {
  return (
    <section className="w-full min-h-[85vh] py-24 flex items-center bg-white relative overflow-hidden" id="echonote">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Product Narrative */}
        <div className="flex flex-col items-start z-10 max-w-[560px]">
          
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-[12px] font-bold text-ocean-blue uppercase tracking-widest">The Product Ecosystem &mdash; Stage 1: Capture</span>
            <div className="w-14 h-14 rounded-2xl bg-ice-blue border border-sky-blue/30 flex items-center justify-center shadow-sm">
              <img src="/assets/echotech-icon.png" alt="EchoNote" loading="lazy" className="h-7 w-auto object-contain" />
            </div>
          </div>
          
          <h2 className="text-[clamp(36px,4vw,56px)] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
            EchoNote
          </h2>
          
          <p className="text-[18px] md:text-[20px] text-slate-500 font-medium leading-[1.6] mb-10">
            Never lose the context of a conversation again. Capture meetings, and let our enterprise-first audio intelligence workspace transform your conversations into structured knowledge, actionable tasks, and a searchable timeline with built-in organizational control and data governance.
          </p>
          
          <a 
            href="https://echonote-25.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group inline-flex w-fit items-center justify-center gap-2 px-8 h-[56px] rounded-full bg-ocean-blue text-white text-[15px] font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-[1px]"
          >
            Open EchoNote
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Right: Massive UI Visualization (Ice Blue Theme) */}
        <div className="relative w-full h-[600px] flex items-center justify-center">
          
          <div className="absolute inset-0 bg-ice-blue/40 rounded-full blur-[100px] z-0" />

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
                 <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                 <span className="text-[14px] font-bold text-slate-700">Recording...</span>
               </div>
               <span className="text-[14px] font-bold text-slate-400">45:12</span>
            </div>

            {/* Content Area */}
            <div className="p-8 flex flex-col gap-8 bg-white/50 backdrop-blur-md h-[450px]">
              
              {/* Waveform Animation */}
              <div className="flex items-end justify-center gap-1 h-24 mb-4">
                {[...Array(40)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: ["20%", `${Math.random() * 80 + 20}%`, "20%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }}
                    className="w-1.5 bg-ocean-blue rounded-full opacity-80"
                  />
                ))}
              </div>

              {/* Extraction Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-mist-gray shadow-sm flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-ocean-blue">
                    <CheckCircle2 size={18} />
                    <span className="text-[12px] font-bold uppercase tracking-wide">Task Extracted</span>
                  </div>
                  <span className="text-[14px] font-bold text-slate-800">Finalize Q3 Marketing Budget</span>
                </div>
                
                <div className="bg-ice-blue p-5 rounded-2xl border border-sky-blue/30 shadow-sm flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-ocean-blue">
                    <MessageSquare size={18} />
                    <span className="text-[12px] font-bold uppercase tracking-wide">Decision</span>
                  </div>
                  <span className="text-[14px] font-bold text-slate-800">Pivot to enterprise sales.</span>
                </div>
              </div>

              {/* Timeline */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-slate-400" />
                  <div className="h-[2px] flex-1 bg-cloud-gray rounded-full relative">
                    <div className="absolute top-0 left-0 h-full w-[60%] bg-ocean-blue rounded-full" />
                    <div className="absolute top-1/2 left-[20%] -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-ocean-blue" />
                    <div className="absolute top-1/2 left-[60%] -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-ocean-blue" />
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
            transition={{ delay: 0.5 }}
            className="absolute -right-4 top-20 bg-white p-4 rounded-2xl shadow-xl border border-mist-gray flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 rounded-full bg-ice-blue flex items-center justify-center">
              <FileText size={18} className="text-ocean-blue" />
            </div>
            <div className="flex flex-col">
               <span className="text-[13px] font-bold text-slate-800">Summary Ready</span>
               <span className="text-[11px] text-slate-500">Sent to Notion</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

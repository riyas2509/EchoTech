import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {Calendar, Mail, Hash, AlignLeft, Layout, Bell } from 'lucide-react';

export const TheProblemSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1]);

  const y1 = useTransform(scrollYProgress, [0.2, 0.6], [-250, 0]);
  const x1 = useTransform(scrollYProgress, [0.2, 0.6], [-400, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.6], [-300, 0]);
  const x2 = useTransform(scrollYProgress, [0.2, 0.6], [350, 0]);
  const y3 = useTransform(scrollYProgress, [0.2, 0.6], [200, 0]);
  const x3 = useTransform(scrollYProgress, [0.2, 0.6], [-350, 0]);
  const y4 = useTransform(scrollYProgress, [0.2, 0.6], [250, 0]);
  const x4 = useTransform(scrollYProgress, [0.2, 0.6], [300, 0]);
  const y5 = useTransform(scrollYProgress, [0.2, 0.6], [80, 0]);
  const x5 = useTransform(scrollYProgress, [0.2, 0.6], [450, 0]);
  const y6 = useTransform(scrollYProgress, [0.2, 0.6], [0, 0]);
  const x6 = useTransform(scrollYProgress, [0.2, 0.6], [-500, 0]);

  return (
    <section ref={containerRef} className="w-full py-24 bg-cotton-white relative overflow-hidden min-h-[90vh] flex flex-col justify-center">
      
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-16 relative z-10 w-full">
        
        {/* Minimal Narrative */}
        <div className="text-center mb-24 max-w-[800px] mx-auto relative z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(40px,4vw,64px)] font-bold text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            The world is too noisy to think.
          </motion.h2>
        </div>

        {/* Scattered Chaos Animation */}
        <div className="relative w-full h-[600px] flex items-center justify-center mt-10">
          
          {/* Animated Connecting Lines (Visible as things converge) */}
          <motion.div 
            style={{ opacity }}
            className="absolute inset-0 pointer-events-none"
          >
            <svg className="w-full h-full absolute" style={{ strokeDasharray: "4 4" }}>
              <path d="M 300 200 Q 600 300 900 200" stroke="#CBD5E1" strokeWidth="2" fill="none" className="animate-pulse" />
              <path d="M 400 400 Q 600 300 800 400" stroke="#CBD5E1" strokeWidth="2" fill="none" className="animate-pulse" />
              <path d="M 600 100 L 600 500" stroke="#CBD5E1" strokeWidth="2" fill="none" className="animate-pulse" />
            </svg>
          </motion.div>

          {/* Slack/Teams Mock */}
          <motion.div 
            style={{ y: y1, x: x1, rotate: -10 }} 
            className="absolute z-10 w-[300px] p-5 bg-white/95 backdrop-blur-md border border-slate-200 rounded-[20px] shadow-lg flex flex-col gap-3"
          >
            <div className="flex items-center gap-2">
              <Hash size={16} className="text-slate-400" />
              <span className="text-[14px] font-bold text-slate-700"># project-launch</span>
            </div>
            <div className="bg-slate-50 rounded-xl p-3 text-[14px] text-slate-600 leading-relaxed">
              <span className="font-bold text-slate-700">@everyone</span> Are we still on track for Friday? We need the updated designs.
            </div>
          </motion.div>

          {/* Calendar Mock */}
          <motion.div 
            style={{ y: y2, x: x2, rotate: 8 }} 
            className="absolute z-10 w-[260px] p-5 bg-white/95 backdrop-blur-md border border-slate-200 rounded-[20px] shadow-lg flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 text-sunset-orange mb-1">
              <Calendar size={16} />
              <span className="text-[14px] font-bold">Overlapping Events</span>
            </div>
            <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-2.5 text-[13px] font-bold text-slate-700">
              10:00 AM - Q3 Sync
            </div>
            <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-2.5 text-[13px] font-bold text-slate-700">
              10:30 AM - Design Review (Double Booked)
            </div>
          </motion.div>

          {/* Figma/Design Mock */}
          <motion.div 
            style={{ y: y3, x: x3, rotate: -4 }} 
            className="absolute z-10 w-[250px] p-5 bg-slate-900 border border-slate-700 rounded-[20px] shadow-2xl flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 text-white mb-1">
              <Layout size={16} className="text-violet" />
              <span className="text-[14px] font-bold">New Comment</span>
            </div>
            <div className="text-[14px] text-slate-300 border-l-2 border-violet pl-3 leading-relaxed">
              "Can we make this section pop more? The client wants it bigger."
            </div>
          </motion.div>

          {/* Docs/Transcript Mock */}
          <motion.div 
            style={{ y: y4, x: x4, rotate: 6 }} 
            className="absolute z-10 w-[300px] p-5 bg-[#FFF9C4]/95 backdrop-blur-sm border border-[#FBE9E7] rounded-[20px] shadow-lg flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 text-slate-800 mb-1">
              <AlignLeft size={16} />
              <span className="text-[14px] font-bold">Meeting Transcript</span>
            </div>
            <p className="text-[14px] text-slate-700 opacity-80 line-clamp-3 leading-relaxed">
              Yeah so I think the main issue is that we don't have a clear timeline. John said next week but Sarah thinks it's going to take at least...
            </p>
          </motion.div>

          {/* Notification Chaos */}
          <motion.div 
            style={{ y: y5, x: x5, rotate: 15 }} 
            className="absolute z-10 p-4 bg-white border border-mist-gray rounded-[20px] shadow-lg flex items-center gap-3"
          >
            <div className="relative">
              <Bell size={20} className="text-slate-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-sunset-orange rounded-full border-2 border-white" />
            </div>
            <span className="text-[14px] font-bold text-slate-700">14 Unread</span>
          </motion.div>

          {/* Email Mock */}
          <motion.div 
            style={{ y: y6, x: x6, rotate: -20 }} 
            className="absolute z-10 w-[220px] p-4 bg-white border border-mist-gray rounded-[20px] shadow-lg flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-ice-blue flex items-center justify-center shrink-0">
              <Mail size={16} className="text-ocean-blue" />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-slate-800">Action Required</span>
              <span className="text-[11px] text-slate-500 truncate max-w-[150px]">FWD: FWD: Urgent update</span>
            </div>
          </motion.div>

          {/* Centerpiece: EchoTech Absorbs It All */}
          <motion.div 
            style={{ opacity, scale }}
            className="relative z-30 flex flex-col items-center justify-center bg-white/70 backdrop-blur-2xl border border-white rounded-[48px] p-16 shadow-ambient w-[90%] max-w-[560px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-ice-blue/20 via-transparent to-lavender/20 rounded-[48px] pointer-events-none" />
            
            {/* Huge EchoTech Icon Pulling Everything In */}
            <div className="relative h-20 md:h-24 px-6 md:px-8 bg-white border border-mist-gray rounded-[24px] flex items-center justify-center shadow-lg mb-10 group">
              <div className="absolute inset-0 bg-ocean-blue/10 rounded-[24px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img src="/assets/echotech-icon.png" alt="EchoTech" className="h-10 md:h-12 w-auto object-contain relative z-10" />
            </div>
            
            <h3 className="text-[36px] font-bold text-slate-900 mb-4 text-center leading-[1.1]">
              Technology should remove cognitive load.
            </h3>
            
            <p className="text-[18px] text-slate-500 text-center font-medium leading-[1.6]">
              People should spend less time on information overload and fragmented tools, and more time thinking, creating, deciding, and solving.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

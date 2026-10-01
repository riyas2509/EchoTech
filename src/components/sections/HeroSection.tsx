import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, GitPullRequest, Settings, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-[700px] flex flex-col justify-center items-center bg-cotton-white overflow-hidden">
      
      {/* Ambient Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-ice-blue/40 rounded-full blur-[120px] opacity-70" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-lavender/30 rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 xl:px-16 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center z-10 h-full pt-16">
        
        {/* Left: Typography */}
        <div className="flex flex-col items-start text-left max-w-[600px] mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="h-20 md:h-24 px-6 md:px-8 bg-white rounded-[24px] flex items-center justify-center shadow-md border border-mist-gray">
              <img src="/assets/echotech-icon.png" alt="EchoTech" className="h-10 md:h-12 w-auto object-contain" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-[clamp(40px,5vw,68px)] font-bold text-slate-900 tracking-tight leading-[1.05] mb-6"
          >
            Building software that helps people think clearly and turn ideas into outcomes.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-[18px] md:text-[20px] text-slate-500 font-medium leading-[1.6] mb-10 max-w-[480px]"
          >
            EchoTech is a connected ecosystem of human-centered intelligent software designed to reduce repetitive work and bridge the gap between thinking and doing.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link 
              to="/explore" 
              onClick={() => window.scrollTo(0,0)}
              className="group flex items-center justify-center gap-2 px-8 h-[56px] rounded-full bg-slate-900 text-white text-[15px] font-bold hover:bg-slate-800 transition-all w-full sm:w-auto shadow-md hover:shadow-lg hover:-translate-y-[1px] outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              Explore EchoTech
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/products" 
              onClick={() => window.scrollTo(0,0)}
              className="flex items-center justify-center px-8 h-[56px] rounded-full bg-white text-slate-900 text-[15px] font-bold border border-mist-gray hover:bg-cloud-gray transition-colors w-full sm:w-auto shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              Start with EchoNote
            </Link>
          </motion.div>
        </div>

        {/* Right: The Cinematic UI Visualization */}
        <div className="relative w-full h-[600px] hidden lg:flex items-center justify-center">
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="relative w-full max-w-[650px] bg-white/70 backdrop-blur-2xl rounded-[40px] p-8 shadow-ambient border border-white flex flex-col gap-6"
          >
            
            {/* Conversation Input Simulation */}
            <div className="flex gap-4 items-end mb-4">
              <div className="w-12 h-12 rounded-full bg-cloud-gray border border-mist-gray flex items-center justify-center shrink-0">
                <MessageSquare size={20} className="text-slate-400" />
              </div>
              <div className="bg-ocean-blue text-white p-5 rounded-3xl rounded-bl-sm shadow-md max-w-[80%]">
                <p className="text-[16px] font-medium leading-relaxed">
                  "Let's delay the enterprise push until Q4. We need to prioritize robust data governance first and expand mid-market."
                </p>
              </div>
            </div>

            {/* Magic Extraction */}
            <div className="flex items-center justify-center py-2">
              <div className="w-[2px] h-8 bg-gradient-to-b from-ocean-blue to-violet relative">
                <motion.div 
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(168,116,255,1)]"
                />
              </div>
            </div>

            {/* Structured Output Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="bg-white p-5 rounded-3xl border border-mist-gray shadow-sm hover:shadow-md transition-shadow group cursor-default"
              >
                <div className="w-10 h-10 rounded-2xl bg-lavender/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <GitPullRequest size={18} className="text-deep-purple" />
                </div>
                <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Decision</span>
                <span className="text-[16px] font-bold text-slate-900 leading-tight">Delay enterprise to Q4</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-white p-5 rounded-3xl border border-mist-gray shadow-sm hover:shadow-md transition-shadow group cursor-default"
              >
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Settings size={18} className="text-emerald-600" />
                </div>
                <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Action</span>
                <span className="text-[16px] font-bold text-slate-900 leading-tight">Prioritize data governance</span>
              </motion.div>
            </div>

            {/* Automation execution */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="mt-2 bg-cloud-gray rounded-3xl p-4 flex items-center justify-between border border-white shadow-inner"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                </div>
                <span className="text-[14px] font-bold text-slate-700">EchoOS workflow triggered</span>
              </div>
              <span className="text-[12px] font-bold text-slate-400">Just now</span>
            </motion.div>

          </motion.div>
          
          {/* Floating UI Accents */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="absolute -right-8 top-12 bg-white px-5 py-3 rounded-2xl shadow-lg border border-mist-gray flex items-center gap-3 z-20"
          >
            <div className="w-2 h-2 rounded-full bg-ocean-blue animate-pulse" />
            <span className="text-[13px] font-bold text-slate-700">Context Saved</span>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

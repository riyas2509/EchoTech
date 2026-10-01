import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FutureVisionSection: React.FC = () => {
  return (
    <section className="w-full min-h-[90vh] flex flex-col items-center justify-center bg-black relative overflow-hidden pt-24 pb-24" id="vision">
      
      {/* Deep Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] max-w-[1000px] bg-gradient-to-r from-ocean-blue/30 via-violet/20 to-ocean-blue/30 rounded-full blur-[120px] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_black_80%)]" />
        
        {/* Animated Particles/Stars */}
        <div className="absolute inset-0 opacity-40">
           {[...Array(30)].map((_, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: Math.random(), scale: Math.random() * 0.5 + 0.5 }}
               animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
               transition={{ duration: Math.random() * 4 + 3, repeat: Infinity, ease: "easeInOut" }}
               className="absolute w-1 h-1 bg-white rounded-full"
               style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
             />
           ))}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-16 text-center z-10 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-14 max-w-[900px] mx-auto"
        >
          <h2 className="text-[clamp(40px,5vw,72px)] font-bold text-white tracking-tight leading-[1.05] mb-8">
            The future of work is <br className="hidden md:block" /> already here.
          </h2>
          <p className="text-[20px] md:text-[24px] text-slate-400 font-medium leading-[1.6] max-w-[700px] mx-auto">
            Stop managing software. Start building your legacy. Join the ecosystem that amplifies your potential.
          </p>
        </motion.div>

        {/* The Massive Interaction Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative inline-block"
        >
          {/* Glow Behind Button */}
          <div className="absolute inset-0 bg-ocean-blue rounded-full blur-[40px] opacity-40 animate-pulse" />
          
          <Link 
            to="/contact"
            onClick={() => window.scrollTo(0,0)}
            className="group relative flex items-center justify-center gap-4 px-10 h-[64px] rounded-full bg-white text-slate-900 text-[18px] font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(255,255,255,0.2)]"
          >
            Start Building with EchoTech
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-ocean-blue group-hover:text-white transition-colors">
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex items-center justify-center gap-8 text-slate-500 font-medium text-[14px]"
        >
          <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-violet" /> Launch Date: 21 October 2026</span>
        </motion.div>

      </div>
    </section>
  );
};

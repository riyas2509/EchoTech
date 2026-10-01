import React from 'react';
import { motion } from 'framer-motion';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="w-full py-32 md:py-48 bg-white relative overflow-hidden" id="philosophy">
      
      <div className="max-w-[800px] mx-auto px-6 md:px-12 xl:px-16 flex flex-col items-center justify-center text-center">
        
        {/* Subtle top indicator */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-slate-200" />
          <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">Why We Build This Way</span>
          <div className="h-[1px] w-12 bg-slate-200" />
        </div>

        {/* The Manifesto Statement */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[clamp(36px,5vw,72px)] font-bold text-slate-900 tracking-tight leading-[1.1] mb-10 text-balance"
        >
          Technology should amplify human intent, not replace human intuition.
        </motion.h2>

        {/* Supporting Editorial Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-[18px] md:text-[24px] text-slate-500 font-medium leading-[1.6] max-w-[650px] text-balance"
        >
          We are not building artificial intelligence to automate you away. 
          We are building an intelligence layer that removes the friction between your ideas and reality. 
          <span className="text-slate-900 font-bold block mt-6">You maintain control. The machine handles the complexity.</span>
        </motion.p>

      </div>
      
    </section>
  );
};

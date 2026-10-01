import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HumanAndAISection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animation values for the two halves coming together
  // They start apart and move towards the center
  const leftX = useTransform(scrollYProgress, [0.3, 0.6], ["-50%", "0%"]);
  const rightX = useTransform(scrollYProgress, [0.3, 0.6], ["50%", "0%"]);
  
  // They fade in
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  // The center "spark" / connection point grows
  const sparkScale = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);
  const sparkOpacity = useTransform(scrollYProgress, [0.55, 0.6], [0, 1]);

  return (
    <section ref={containerRef} className="w-full h-[150vh] relative bg-slate-50 flex items-center justify-center overflow-hidden" id="human-and-ai">
      
      {/* Sticky container to hold the visual while scrolling */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        <div className="text-center z-30 absolute top-[15vh]">
          <h2 className="text-[clamp(32px,4vw,56px)] font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Two halves of a perfect whole.
          </h2>
          <p className="text-[18px] text-slate-500 font-medium max-w-[600px] mx-auto leading-[1.6]">
            <span className="block font-bold text-slate-700 mb-2">Human direction + Machine capability.</span>
            The creativity of the human mind, amplified by the execution power of the machine.
          </p>
        </div>

        {/* The Conceptual Visual */}
        <div className="relative w-full max-w-[1200px] h-[400px] flex items-center justify-center mt-10">
          
          {/* Left: Human */}
          <motion.div 
            style={{ x: leftX, opacity }}
            className="absolute left-1/2 -translate-x-[105%] flex flex-col items-end text-right"
          >
            <div className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full border border-slate-200 bg-gradient-to-l from-slate-50 to-white flex items-center justify-end pr-10 md:pr-16 relative overflow-hidden shadow-sm">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sunset-orange/5 via-transparent to-transparent opacity-80" />
              <div className="relative z-10 flex flex-col items-end">
                <span className="text-[32px] md:text-[48px] font-bold text-slate-900 leading-none mb-3 tracking-tight">Human</span>
                <ul className="flex flex-col gap-1.5 text-slate-500 font-medium text-[15px] md:text-[18px]">
                  <li>Intuition</li>
                  <li>Taste</li>
                  <li>Strategy</li>
                  <li>Empathy</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right: AI */}
          <motion.div 
            style={{ x: rightX, opacity }}
            className="absolute right-1/2 translate-x-[105%] flex flex-col items-start text-left"
          >
            <div className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full border border-slate-800 bg-gradient-to-r from-slate-900 to-black flex items-center justify-start pl-10 md:pl-16 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-ocean-blue/10 via-transparent to-transparent opacity-80" />
              <div className="relative z-10 flex flex-col items-start">
                <span className="text-[32px] md:text-[48px] font-bold text-white leading-none mb-3 tracking-tight">Machine</span>
                <ul className="flex flex-col gap-1.5 text-slate-400 font-medium text-[15px] md:text-[18px]">
                  <li>Processing</li>
                  <li>Memory</li>
                  <li>Speed</li>
                  <li>Execution</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Center Connection Point */}
          <motion.div 
            style={{ scale: sparkScale, opacity: sparkOpacity }}
            className="absolute z-20 w-32 h-32 rounded-full flex items-center justify-center bg-white shadow-[0_0_60px_rgba(255,255,255,1)]"
          >
            <div className="absolute inset-0 rounded-full border-2 border-slate-100 animate-ping opacity-50" />
            <img src="/assets/echotech-icon.png" alt="EchoTech" loading="lazy" className="w-24 md:w-28 h-auto object-contain relative z-10 drop-shadow-xl" />
          </motion.div>

        </div>
        
      </div>

    </section>
  );
};

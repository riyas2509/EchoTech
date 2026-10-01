import React from 'react';
import { motion } from 'framer-motion';
import { springConfig } from '@/constants/motion';

export const MissionSection: React.FC = () => {
  return (
    <section id="mission-section" className="w-full py-24 md:py-32 bg-white relative z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={springConfig}
        >
          <h2 className="text-[11px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-8">
            The Mission
          </h2>
          <p className="text-2xl md:text-4xl font-semibold text-slate-900 leading-tight md:leading-snug tracking-tight">
            We believe that technology should augment human intelligence, not distract from it. EchoTech exists to build tools that disappear, leaving only your focus.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

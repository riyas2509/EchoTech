import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { TimelineCard } from '@/components/cards/TimelineCard';
import { springConfig } from '@/constants/motion';
import { experienceData } from '@/data/experience';

export const ExperiencePreview: React.FC = () => {
  const sortedExperiences = [...experienceData].sort((a, b) => a.order - b.order);

  return (
    <div className="w-full px-5 py-6 bg-slate-50 relative z-20">
      <SectionContainer title="Experience">
        <div className="relative mt-2">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-slate-200/60 rounded-full" />
          
          <div className="flex flex-col gap-6 relative z-10">
            {sortedExperiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, ...springConfig }}
                className="flex gap-4 relative"
              >
                {/* Timeline Dot */}
                <div className="w-[24px] h-[24px] mt-2 rounded-full bg-slate-50 border-[3px] border-emerald-400 shadow-sm shrink-0 flex items-center justify-center z-10 relative">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
                
                {/* Timeline Card */}
                <div className="flex-1">
                  <TimelineCard 
                    title={exp.company}
                    subtitle={exp.position}
                    date={exp.duration}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full mt-8 pl-[40px]"
          >
            <button className="w-full py-3.5 rounded-[var(--radius-card)] bg-white/70 backdrop-blur-[var(--blur-md)] border-[length:var(--border-glass)] border-white/40 text-[length:var(--text-card-label)] font-semibold text-slate-700 shadow-glass transition-colors hover:bg-white/90">
              View Full Timeline
            </button>
          </motion.div>
        </div>
      </SectionContainer>
    </div>
  );
};

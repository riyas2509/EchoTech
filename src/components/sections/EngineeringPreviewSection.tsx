import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Beaker, Code2, Cpu, ArrowRight } from 'lucide-react';
import { springConfig } from '@/constants/motion';

export const EngineeringPreviewSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-24 bg-[#FAFAFA] relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
            Infrastructure
          </h2>
          <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Engineering</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 'projects', title: 'Projects', desc: 'Open source initiatives and core libraries supporting our ecosystem.', icon: <Code2 size={24} className="text-slate-700" />, route: '/engineering' },
            { id: 'research', title: 'Research', desc: 'Published papers, experiments, and AI studies from our labs.', icon: <Beaker size={24} className="text-slate-700" />, route: '/engineering' },
            { id: 'architecture', title: 'Architecture', desc: 'System design, scalability models, and underlying infrastructure.', icon: <Cpu size={24} className="text-slate-700" />, route: '/engineering' }
          ].map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springConfig, delay: idx * 0.1 }}
              onClick={() => navigate(card.route)}
              className="p-8 bg-surface-glass backdrop-blur-xl border border-border-glass shadow-ambient rounded-3xl flex flex-col group hover:bg-surface-glass-hover hover:shadow-ambient-hover transition-all cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm mb-8 group-hover:bg-slate-50 transition-colors">
                {card.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">{card.title}</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 flex-1">{card.desc}</p>
              <div className="flex items-center text-[13px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-brand-primary transition-colors">
                Explore <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

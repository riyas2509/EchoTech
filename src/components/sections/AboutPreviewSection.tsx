import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, ArrowRight } from 'lucide-react';
import { springConfig } from '@/constants/motion';

export const AboutPreviewSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-20 bg-[#FAFAFA] relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springConfig}
          className="w-full bg-surface-glass backdrop-blur-xl border border-border-glass shadow-ambient rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-ambient-hover transition-all group"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shrink-0 shadow-sm">
              <Compass className="text-slate-700" size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">Our Philosophy</h3>
              <p className="text-slate-500 font-medium max-w-lg">We believe technology should amplify human intelligence, not replace it. Explore how we build to reduce cognitive load and preserve human judgment.</p>
            </div>
          </div>
          
          <button 
            onClick={() => { navigate('/philosophy'); window.scrollTo(0,0); }}
            className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-[14px] font-semibold hover:bg-slate-800 transition-all shadow-sm"
          >
            Enter Vision Hall <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

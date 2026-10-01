import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, FileText, Activity } from 'lucide-react';
import { springConfig } from '@/constants/motion';

export const ProductsPreviewSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-24 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
              Ecosystem
            </h2>
            <h3 className="text-3xl font-bold text-slate-900 tracking-tight">Our Products</h3>
          </div>
          <button onClick={() => navigate('/products')} className="hidden md:flex items-center text-sm font-bold text-brand-primary hover:text-slate-900 transition-colors">
            View All <ArrowRight size={16} className="ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Product: EchoNote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springConfig}
            className="lg:col-span-2 p-8 md:p-12 bg-slate-50 border border-slate-100 rounded-3xl flex flex-col justify-between group hover:shadow-ambient transition-all cursor-pointer"
            onClick={() => navigate('/products')}
          >
            <div className="flex items-start justify-between mb-16">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200/50 flex items-center justify-center shadow-sm">
                <FileText className="text-brand-primary" size={32} strokeWidth={1.5} />
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[11px] font-bold uppercase tracking-wider border border-emerald-100/50">
                Featured &middot; Active
              </span>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">EchoNote</h4>
              <p className="text-slate-500 font-medium max-w-md">Capture Knowledge. Enterprise-first audio intelligence that turns conversations into structured execution plans.</p>
            </div>
          </motion.div>

          {/* Supporting Products Stack */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springConfig, delay: 0.1 }}
              className="flex-1 p-6 bg-slate-50 border border-slate-100 rounded-3xl flex flex-col justify-between group hover:shadow-ambient transition-all cursor-pointer"
              onClick={() => navigate('/products')}
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/50 flex items-center justify-center shadow-sm mb-8">
                <Layers className="text-slate-700" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1 tracking-tight">EchoOS</h4>
                <p className="text-sm text-slate-500 font-medium">Turn Ideas into Execution.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springConfig, delay: 0.2 }}
              className="flex-1 p-6 bg-slate-50 border border-slate-100 rounded-3xl flex flex-col justify-between group hover:shadow-ambient transition-all cursor-pointer"
              onClick={() => navigate('/products')}
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/50 flex items-center justify-center shadow-sm mb-8">
                <Activity className="text-slate-700" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1 tracking-tight">LifeCapital</h4>
                <p className="text-sm text-slate-500 font-medium">Intelligent Financial Planning.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const insights = [
  {
    category: "Philosophy",
    title: "The future of human-AI collaboration",
    description: "Why augmenting human intent is more powerful than replacing human intuition.",
    color: "bg-sky-blue/20 text-sky-blue",
    cardColor: "bg-ice-blue",
    borderColor: "border-sky-blue/30"
  },
  {
    category: "Design",
    title: "Why AI should reduce cognitive load",
    description: "Rethinking software interfaces to prioritize focus and clarity over features.",
    color: "bg-violet/20 text-deep-purple",
    cardColor: "bg-lavender/40",
    borderColor: "border-violet/30"
  },
  {
    category: "Workflows",
    title: "From conversations to execution",
    description: "The transition from chatting with LLMs to orchestrating autonomous agents.",
    color: "bg-mint-green/30 text-emerald-700",
    cardColor: "bg-mint-green/10",
    borderColor: "border-mint-green/40"
  },
  {
    category: "Product",
    title: "Building software around outcomes",
    description: "Why the next generation of SaaS will be judged on results rather than features.",
    color: "bg-amber-orange/20 text-amber-orange",
    cardColor: "bg-amber-orange/5",
    borderColor: "border-amber-orange/20"
  }
];

export const InsightsSection: React.FC = () => {
  return (
    <section className="w-full py-24 md:py-32 bg-cotton-white relative overflow-hidden" id="insights">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 relative z-20">
          <div className="max-w-[600px]">
            <h2 className="text-[clamp(36px,4vw,56px)] font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Insights & Thinking
            </h2>
            <p className="text-[18px] md:text-[20px] text-slate-500 font-medium leading-[1.6]">
              Perspectives on building intelligent systems that prioritize human agency and actual outcomes.
            </p>
          </div>
          
          <button className="group flex items-center justify-center gap-2 h-[56px] px-8 font-bold text-slate-900 transition-all bg-white hover:bg-slate-50 rounded-full border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md hover:-translate-y-[1px]">
            View All Essays <ArrowRight size={18} className="text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((insight, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`group flex flex-col ${insight.cardColor} border ${insight.borderColor} p-8 rounded-[32px] cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="mb-8">
                <span className={`inline-block px-3 py-1 rounded-full text-[12px] font-bold tracking-widest uppercase ${insight.color}`}>
                  {insight.category}
                </span>
              </div>
              
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-[24px] font-bold text-slate-900 leading-tight mb-4 group-hover:text-ocean-blue transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-[15px] font-medium text-slate-600 leading-relaxed">
                    {insight.description}
                  </p>
                </div>
                
                <div className="mt-8 flex items-center gap-2 text-slate-900 font-bold text-[14px]">
                  Read Essay 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, BrainCircuit, CheckCircle2, ArrowRight, Search, Target } from 'lucide-react';

const ecosystemData = [
  {
    id: 'echonote',
    stage: 'CAPTURE',
    name: 'EchoNote',
    status: 'LIVE',
    icon: Mic,
    color: 'bg-blue-50',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    description: 'Transform conversations, meetings, and voice recordings into structured knowledge. Important decisions and action items emerge automatically.',
    uiSnippet: 'Action Items Extracted',
  },
  {
    id: 'thinkoria',
    stage: 'THINK',
    name: 'Thinkoria',
    status: 'ARCHITECTURE',
    icon: BrainCircuit,
    color: 'bg-purple-50',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    description: 'A cognitive thinking platform designed to strengthen structured reasoning, alternative perspectives, and decision-making.',
    uiSnippet: 'Perspective Generation Complete',
  },
  {
    id: 'protolens',
    stage: 'VALIDATE',
    name: 'ProtoLens',
    status: 'RESEARCH',
    icon: Search,
    color: 'bg-orange-50',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-200',
    description: 'Evaluate feasibility and market relevance with evidence signals.',
    uiSnippet: 'Evidence Signal: High User Value',
  },
  {
    id: 'echoos',
    stage: 'EXECUTE',
    name: 'EchoOS',
    status: 'LIVE',
    icon: CheckCircle2,
    color: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    description: 'Deploy agents and workflows to automate the execution of approved decisions.',
    uiSnippet: 'Workflow: Onboarding Project Space',
  },
  {
    id: 'lifecapital',
    stage: 'GROW',
    name: 'LifeCapital',
    status: 'ARCHITECTURE',
    icon: Target,
    color: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    description: 'Connect daily execution to long-term timelines and financial scenarios.',
    uiSnippet: 'Timeline: Q3 Objective Alignment',
  }
];

export const EcosystemSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('echonote');

  const activeProduct = ecosystemData.find(p => p.id === activeId) || ecosystemData[0];

  return (
    <section id="ecosystem" className={`w-full py-24 md:py-32 transition-colors duration-700 ${activeProduct.color} bg-opacity-30`}>
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
            The Complete Journey.
          </h2>
          <p className="text-[18px] text-slate-600 font-medium max-w-[600px] mx-auto leading-[1.6]">
            Our products aren't standalone tools. They are connected stages in a single continuous workflow.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <div className="w-full md:w-1/3 flex flex-col gap-4 relative">
            <div className="absolute left-[24px] top-[24px] bottom-[24px] w-[2px] bg-white/50 z-0" />
            
            {ecosystemData.map((product) => {
              const isActive = activeId === product.id;
              const Icon = product.icon;
              return (
                <div 
                  key={product.id}
                  onMouseEnter={() => setActiveId(product.id)}
                  onClick={() => setActiveId(product.id)}
                  className={`relative z-10 flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 ${isActive ? 'bg-white shadow-sm' : 'hover:bg-white/50'}`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${isActive ? product.color : 'bg-white'}`}>
                    <Icon size={20} className={isActive ? product.textColor : 'text-slate-400'} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">{product.stage}</span>
                    <span className={`text-[16px] font-bold ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>{product.name}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full md:w-2/3 min-h-[400px] bg-white rounded-3xl shadow-lg border border-white p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
            
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <span className={`text-[12px] font-bold px-3 py-1 rounded-full ${activeProduct.color} ${activeProduct.textColor}`}>
                  {activeProduct.status}
                </span>
              </div>

              <h3 className="text-[28px] font-bold text-slate-900 mb-4">{activeProduct.name}</h3>
              <p className="text-[18px] text-slate-600 font-medium leading-[1.6] mb-8 max-w-[400px]">
                {activeProduct.description}
              </p>

              <div className={`mt-auto w-full p-4 rounded-xl border ${activeProduct.borderColor} bg-slate-50/50 flex items-center gap-4`}>
                <div className={`w-3 h-3 rounded-full ${activeProduct.color} ${activeProduct.textColor} animate-pulse`} />
                <span className="text-slate-700 font-medium text-[14px]">{activeProduct.uiSnippet}</span>
              </div>
              
              {activeProduct.status === 'LIVE' && (
                <button className="mt-8 self-start flex items-center gap-2 text-[14px] font-bold text-slate-900 hover:text-slate-600 transition-colors">
                  Explore {activeProduct.name} <ArrowRight size={16} />
                </button>
              )}
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Brain, Target, ArrowRight, PlayCircle, Flag, Zap, Lock, RefreshCw, Box, ExternalLink, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '@/utils/analytics';

type ProductKey = 'echonote' | 'thinkoria' | 'protolens' | 'echoos' | 'lifecapital';

interface ConsoleProduct {
  name: string;
  stage: string;
  statusLabel: string;
  isLive: boolean;
  url: string;
  description: string;
  color: string;
  glowColor: string;
  accent: string;
  icon: LucideIcon;
  imageIcon?: string;
  features: string[];
}

const products: Record<ProductKey, ConsoleProduct> = {
  echonote: {
    name: "EchoNote",
    stage: "STAGE 01 / CAPTURE",
    statusLabel: "LIVE PRODUCT",
    isLive: true,
    url: "https://echonote-25.vercel.app/",
    description: "Transforms unstructured meetings and conversations into structured knowledge, decisions, and tasks instantly.",
    color: "from-sky-blue/20 to-transparent",
    glowColor: "shadow-[0_0_80px_rgba(142,216,255,0.15)]",
    accent: "text-sky-blue",
    icon: Mic,
    imageIcon: "/assets/echonote-icon.png",
    features: ["Audio Intelligence", "Decision Extraction", "Automated Tasking"]
  },
  thinkoria: {
    name: "Thinkoria",
    stage: "STAGE 02 / THINKING",
    statusLabel: "IN ARCHITECTURE",
    isLive: false,
    url: "/products#thinkoria",
    description: "Expands single ideas into complete strategic frameworks, exploring alternatives and assumptions before you commit.",
    color: "from-violet/20 to-transparent",
    glowColor: "shadow-[0_0_80px_rgba(168,116,255,0.15)]",
    accent: "text-violet",
    icon: Brain,
    features: ["Mind Mapping", "Pros vs Cons Simulation", "Blindspot Detection"]
  },
  protolens: {
    name: "ProtoLens",
    stage: "STAGE 03 / VALIDATION",
    statusLabel: "IN RESEARCH",
    isLive: false,
    url: "/products#protolens",
    description: "Evaluates ideas against market signals, competitor movements, and technical feasibility before execution begins.",
    color: "from-amber-orange/20 to-transparent",
    glowColor: "shadow-[0_0_80px_rgba(255,188,94,0.15)]",
    accent: "text-amber-orange",
    icon: Target,
    features: ["Market Signals", "Risk Assessment", "Opportunity Scoring"]
  },
  echoos: {
    name: "EchoOS",
    stage: "STAGE 04 / EXECUTION",
    statusLabel: "LIVE PRODUCT",
    isLive: true,
    url: "https://echonote-2509.web.app/",
    description: "Automates the execution of approved workflows using intelligent agents that act as your extended team.",
    color: "from-mint-green/20 to-transparent",
    glowColor: "shadow-[0_0_80px_rgba(104,227,183,0.15)]",
    accent: "text-mint-green",
    icon: PlayCircle,
    imageIcon: "/assets/echoos-icon.png",
    features: ["Workflow Builder", "Agent Deployment", "Approval Pipelines"]
  },
  lifecapital: {
    name: "LifeCapital",
    stage: "STAGE 05 / SUSTAINABLE GROWTH",
    statusLabel: "IN ARCHITECTURE",
    isLive: false,
    url: "/products#lifecapital",
    description: "Maps your current execution reality to your long-term strategic and financial goals to optimize your energy.",
    color: "from-[#FF8FA3]/20 to-transparent",
    glowColor: "shadow-[0_0_80px_rgba(255,143,163,0.15)]",
    accent: "text-[#FF8FA3]",
    icon: Flag,
    imageIcon: "/assets/lifecapital-icon.png",
    features: ["Goal Simulation", "Time Allocation", "Growth Trajectory"]
  }
};

export const EcosystemExplorerSection: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<ProductKey>('echonote');

  return (
    <section className="w-full py-24 md:py-32 bg-slate-950 relative overflow-hidden" id="ecosystem">

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16 w-full relative z-10 flex flex-col items-center">

        <div className="text-center mb-12 max-w-[800px]">
          <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest block mb-4">How are they connected?</span>
          <h1 className="text-[clamp(36px,4vw,56px)] font-bold text-white tracking-tight leading-[1.1] mb-4">
            The EchoTech Console
          </h1>
          <p className="text-[18px] md:text-[20px] text-slate-400 font-medium leading-[1.6]">
            Command the entire intelligence pipeline from a single unified interface.
          </p>
        </div>

        {/* The Physical Console Wrapper */}
        <div className="w-full max-w-[1200px] bg-black rounded-[32px] border border-slate-800 shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col lg:flex-row relative">

          {/* Glass glare effect */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

          {/* Left: Console Navigation */}
          <div className="w-full lg:w-[320px] bg-slate-900/50 border-r border-slate-800 p-5 flex flex-col gap-2 z-10">
            <div className="px-3 py-3 mb-3 border-b border-slate-800 flex justify-between items-center">
               <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Active Modules</span>
               <div className="flex gap-1.5">
                 <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                 <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                 <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
               </div>
            </div>

            {(Object.keys(products) as ProductKey[]).map((key) => {
              const product = products[key];
              const isActive = activeProduct === key;

              return (
                <button
                  key={key}
                  onMouseEnter={() => setActiveProduct(key)}
                  onClick={() => setActiveProduct(key)}
                  className={`group relative flex items-center gap-3 p-3 rounded-xl transition-all duration-300 text-left border ${isActive ? 'bg-slate-800/80 border-slate-700' : 'bg-transparent border-transparent hover:bg-slate-800/40'}`}
                >
                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div layoutId="activeNav" className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-white`} />
                  )}

                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isActive ? 'bg-slate-700/50' : 'bg-slate-800/50 group-hover:bg-slate-700/30'}`}>
                    {product.imageIcon ? (
                      <img src={product.imageIcon} alt="" width="18" height="18" className="w-[18px] h-[18px] object-contain" />
                    ) : (
                      <product.icon size={18} className={isActive ? 'text-white' : 'text-slate-500'} />
                    )}
                  </div>
                  <div>
                    <span className={`text-[14px] font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'}`}>
                      {product.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Console Display */}
          <div className="flex-1 bg-black relative min-h-[500px] overflow-hidden flex flex-col">

            {/* Top Toolbar */}
            <div className="h-12 border-b border-slate-800 bg-slate-900/30 flex items-center px-6 gap-6 z-20">
               <div className="flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
                 <Zap size={14} />
                 <span className="text-[11px] font-bold uppercase tracking-wider">Connect</span>
               </div>
               <div className="flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
                 <Lock size={14} />
                 <span className="text-[11px] font-bold uppercase tracking-wider">Permissions</span>
               </div>
               <div className="flex items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer ml-auto">
                 <RefreshCw size={14} />
                 <span className="text-[11px] font-bold uppercase tracking-wider">Sync</span>
               </div>
            </div>

            {/* Display Area */}
            <div className="flex-1 relative p-8 md:p-10 z-10 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full flex flex-col lg:flex-row gap-10 items-center"
                >

                  {/* Info Panel */}
                  <div className="flex-1 flex flex-col items-start">
                    <span className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${products[activeProduct].accent}`}>
                      {products[activeProduct].stage}
                    </span>
                    <h3 className="text-[32px] md:text-[40px] font-bold text-white leading-none mb-4">
                      {products[activeProduct].name}
                    </h3>
                    <p className="text-[16px] text-slate-400 leading-relaxed mb-6">
                      {products[activeProduct].description}
                    </p>

                    <div className="flex flex-col gap-3 w-full mb-8">
                      {products[activeProduct].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                          <Box size={16} className={products[activeProduct].accent} />
                          <span className="text-[14px] font-medium text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {products[activeProduct].isLive ? (
                      <a
                        href={products[activeProduct].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('outbound_product_click', { product: activeProduct, source: 'console_module' })}
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 text-[14px] font-bold hover:bg-slate-200 transition-colors shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-white"
                      >
                        Launch {products[activeProduct].name} <ExternalLink size={15} />
                      </a>
                    ) : (
                      <Link
                        to={products[activeProduct].url}
                        onClick={() => trackEvent('cta_click', { cta: `console_view_${activeProduct}`, destination: products[activeProduct].url })}
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 text-white text-[14px] font-bold hover:bg-slate-700 transition-colors border border-slate-700 outline-none focus-visible:ring-2 focus-visible:ring-white"
                      >
                        Explore {products[activeProduct].name} Architecture <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>

                  {/* Visual Node */}
                  <div className="flex-1 flex justify-center items-center relative w-full aspect-square max-w-[400px]">
                    <div className={`absolute inset-0 bg-gradient-to-br ${products[activeProduct].color} rounded-full blur-[80px] opacity-50`} />
                    <div className={`relative w-48 h-48 bg-slate-900 border border-slate-700 rounded-[40px] flex items-center justify-center ${products[activeProduct].glowColor} z-10`}>
                       {products[activeProduct].imageIcon ? (
                         <img
                           src={products[activeProduct].imageIcon}
                           alt={`${products[activeProduct].name} Icon`}
                           width="80"
                           height="80"
                           className="w-20 h-20 object-contain drop-shadow-md"
                         />
                       ) : (
                         React.createElement(products[activeProduct].icon, { size: 64, className: products[activeProduct].accent })
                       )}
                    </div>
                    {/* Orbit rings */}
                    <div className="absolute inset-0 border border-slate-800 rounded-full animate-spin-slow opacity-50" style={{ width: '100%', height: '100%' }} />
                    <div className="absolute inset-4 border border-slate-800 rounded-full animate-reverse-spin opacity-30" />
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Grid Pattern overlay for the right panel */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50 z-0" />

          </div>

        </div>

      </div>
    </section>
  );
};

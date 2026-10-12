import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, BrainCircuit, Search } from 'lucide-react';
import { springConfig } from '@/constants/motion';
import { trackEvent } from '@/utils/analytics';

export const ProductsPreviewSection: React.FC = () => {
  const navigate = useNavigate();

  const ecosystemProducts = [
    {
      id: 'echonote',
      name: 'EchoNote',
      stage: 'Stage 1: Capture',
      status: 'Live Product',
      isLive: true,
      href: 'https://echonote-25.vercel.app/',
      description: 'Audio intelligence and organizational decision memory. Turns voice recordings and meetings into structured tasks, decisions, and searchable timelines.',
      icon: <img src="/assets/echonote-icon.png" alt="EchoNote Icon" className="w-8 h-8 object-contain" />,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      actionText: 'Open Live App',
      featured: true
    },
    {
      id: 'echoos',
      name: 'EchoOS',
      stage: 'Stage 4: Execute',
      status: 'Live Product',
      isLive: true,
      href: 'https://echonote-2509.web.app/',
      description: 'Execution engine and agent workflow orchestration platform to automate approved plans.',
      icon: <img src="/assets/echoos-icon.png" alt="EchoOS Icon" className="w-6 h-6 object-contain" />,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      actionText: 'View Deployment',
      featured: false
    },
    {
      id: 'thinkoria',
      name: 'Thinkoria',
      stage: 'Stage 2: Think',
      status: 'In Design / Architecture',
      isLive: false,
      href: '/products#thinkoria',
      description: 'Cognitive reasoning and strategic simulation to challenge assumptions and explore alternatives.',
      icon: <BrainCircuit className="text-violet" size={22} strokeWidth={2} />,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      actionText: 'Learn Architecture',
      featured: false
    },
    {
      id: 'protolens',
      name: 'ProtoLens',
      stage: 'Stage 3: Validate',
      status: 'In Design / Research',
      isLive: false,
      href: '/products#protolens',
      description: 'Evidence validation framework evaluating idea feasibility against market signals before building.',
      icon: <Search className="text-amber-500" size={22} strokeWidth={2} />,
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      actionText: 'Learn Research',
      featured: false
    },
    {
      id: 'lifecapital',
      name: 'LifeCapital',
      stage: 'Stage 5: Sustain',
      status: 'In Product Architecture',
      isLive: false,
      href: '/products#lifecapital',
      description: 'Long-term scenario simulation aligning daily execution reality with sustainable capital goals.',
      icon: <img src="/assets/lifecapital-icon.png" alt="LifeCapital Icon" className="w-6 h-6 object-contain" />,
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
      actionText: 'Learn Architecture',
      featured: false
    }
  ];

  return (
    <section className="w-full py-20 lg:py-28 bg-white relative z-10" id="products-preview">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-16">

        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[12px] font-bold text-ocean-blue uppercase tracking-widest block mb-2">
              The Product Ecosystem
            </span>
            <h2 className="text-[32px] md:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.1]">
              Five stages. One unified continuum.
            </h2>
          </div>
          <button
            onClick={() => {
              trackEvent('navigation_click', { route: '/products' });
              navigate('/products');
              window.scrollTo(0, 0);
            }}
            className="inline-flex items-center gap-1 text-[14px] font-bold text-slate-900 hover:text-ocean-blue transition-colors self-start md:self-end"
          >
            Explore All 5 Products <ArrowRight size={16} />
          </button>
        </div>

        {/* Featured Card (EchoNote) + Grid for others */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* EchoNote: Full Featured Card (7 cols) */}
          {ecosystemProducts.filter(p => p.featured).map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={springConfig}
              className="lg:col-span-7 p-8 md:p-10 bg-slate-50/80 border border-slate-200/80 rounded-[32px] flex flex-col justify-between hover:shadow-ambient transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    {product.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{product.stage}</span>
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${product.badgeColor}`}>
                      {product.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-[28px] md:text-[32px] font-bold text-slate-900 mb-3 tracking-tight">
                  {product.name}
                </h3>
                <p className="text-[16px] text-slate-600 font-medium leading-[1.6] max-w-xl mb-8">
                  {product.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    trackEvent('outbound_product_click', { product: product.id, destination: product.href });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-[14px] font-bold hover:bg-slate-800 transition-all shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                >
                  {product.actionText}
                  <ExternalLink size={15} />
                </a>

                <button
                  onClick={() => {
                    navigate('/products#echonote');
                    window.scrollTo(0, 0);
                  }}
                  className="text-[13px] font-bold text-slate-500 hover:text-slate-900 transition-colors"
                >
                  View Details in Ecosystem &rarr;
                </button>
              </div>
            </motion.div>
          ))}

          {/* 4 Secondary Product Cards in 2x2 grid (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {ecosystemProducts.filter(p => !p.featured).map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...springConfig, delay: idx * 0.05 }}
                className="p-5 bg-slate-50/60 border border-slate-200/70 rounded-2xl flex flex-col justify-between hover:bg-white hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shrink-0">
                        {product.icon}
                      </div>
                      <div>
                        <h4 className="text-[16px] font-bold text-slate-900 tracking-tight leading-none mb-1">
                          {product.name}
                        </h4>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          {product.stage}
                        </span>
                      </div>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${product.badgeColor}`}>
                      {product.status}
                    </span>
                  </div>
                  <p className="text-[12px] text-slate-500 leading-relaxed mb-3">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[12px] font-bold">
                  {product.isLive ? (
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('outbound_product_click', { product: product.id, destination: product.href })}
                      className="inline-flex items-center gap-1 text-slate-900 hover:text-ocean-blue transition-colors"
                    >
                      {product.actionText} <ExternalLink size={12} />
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        navigate(`/products#${product.id}`);
                        window.scrollTo(0, 0);
                      }}
                      className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      {product.actionText} <ArrowRight size={12} />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

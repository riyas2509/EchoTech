import React, { useEffect } from 'react';
import { EchoNoteSection } from '@/components/sections/EchoNoteSection';
import { SEO } from '@/components/common/SEO';
import { ThinkoriaSection } from '@/components/sections/ThinkoriaSection';
import { ProtoLensSection } from '@/components/sections/ProtoLensSection';
import { EchoOSSection } from '@/components/sections/EchoOSSection';
import { LifeCapitalSection } from '@/components/sections/LifeCapitalSection';

const ProductsPage: React.FC = () => {
  useEffect(() => {
    // If there is a hash, scroll to it, otherwise top
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-cotton-white flex flex-col overflow-x-hidden">
      <SEO
        title="Products & Ecosystem — EchoTech"
        description="Explore the five stages of the EchoTech software ecosystem: EchoNote, Thinkoria, ProtoLens, EchoOS, and LifeCapital. Clearly distinguishing live products from active architectural research."
      />

      {/* Authoritative Page Header with H1 */}
      <section className="w-full pt-16 pb-12 bg-white border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-16 text-center max-w-[840px]">
          <span className="text-[12px] font-bold text-ocean-blue uppercase tracking-widest block mb-3">
            The Product Ecosystem
          </span>
          <h1 className="text-[clamp(34px,4.5vw,56px)] font-bold text-slate-900 tracking-tight leading-[1.12] mb-6">
            Five connected stages. One continuous intelligence pipeline.
          </h1>
          <p className="text-[18px] md:text-[20px] text-slate-500 font-medium leading-[1.6] mb-8">
            EchoTech develops software that bridges the gap between thoughts, decisions, and execution. Below, discover what is available today and what is currently in active research and architecture.
          </p>

          {/* Jump Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              { id: 'echonote', label: 'EchoNote', badge: 'Live App', badgeColor: 'bg-emerald-100 text-emerald-800' },
              { id: 'thinkoria', label: 'Thinkoria', badge: 'Architecture', badgeColor: 'bg-purple-100 text-purple-800' },
              { id: 'protolens', label: 'ProtoLens', badge: 'Research', badgeColor: 'bg-amber-100 text-amber-800' },
              { id: 'echoos', label: 'EchoOS', badge: 'Live', badgeColor: 'bg-emerald-100 text-emerald-800' },
              { id: 'lifecapital', label: 'LifeCapital', badge: 'Architecture', badgeColor: 'bg-slate-200 text-slate-800' }
            ].map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-[13px] font-bold text-slate-700 transition-colors"
              >
                <span>{p.label}</span>
                <span className={`px-2 py-0.2 rounded-full text-[10px] font-bold uppercase tracking-wider ${p.badgeColor}`}>
                  {p.badge}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <EchoNoteSection />
      <ThinkoriaSection />
      <ProtoLensSection />
      <EchoOSSection />
      <LifeCapitalSection />
    </div>
  );
};

export default ProductsPage;

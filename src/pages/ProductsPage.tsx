import React, { useEffect } from 'react';
import { EchoNoteSection } from '@/components/sections/EchoNoteSection';
import { SEO } from '@/components/common/SEO';
import { ThinkoriaSection } from '@/components/sections/ThinkoriaSection';
import { ProtoLensSection } from '@/components/sections/ProtoLensSection';
import { EchoOSSection } from '@/components/sections/EchoOSSection';
import { LifeCapitalSection } from '@/components/sections/LifeCapitalSection';

const ProductsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-cotton-white flex flex-col overflow-x-hidden">
      <SEO 
        title="EchoTech Products — Intelligent Software for Thinking and Execution" 
        description="Explore the EchoTech product ecosystem including EchoNote, Thinkoria, ProtoLens, EchoOS, and LifeCapital." 
      />
      <EchoNoteSection />
      <ThinkoriaSection />
      <ProtoLensSection />
      <EchoOSSection />
      <LifeCapitalSection />
    </div>
  );
};

export default ProductsPage;

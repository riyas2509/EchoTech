import React, { useEffect } from 'react';
import { EcosystemExplorerSection } from '@/components/sections/EcosystemExplorerSection';
import { SEO } from '@/components/common/SEO';
import { AboutPreviewSection } from '@/components/sections/AboutPreviewSection';
import { EngineeringPreviewSection } from '@/components/sections/EngineeringPreviewSection';

const ExplorePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-cotton-white flex flex-col overflow-x-hidden">
      <SEO 
        title="Explore EchoTech — The Ecosystem" 
        description="Dive deep into the EchoTech ecosystem and see how our interconnected products work together to solve complex problems." 
      />
      <EcosystemExplorerSection />
      <AboutPreviewSection />
      <EngineeringPreviewSection />
    </div>
  );
};

export default ExplorePage;

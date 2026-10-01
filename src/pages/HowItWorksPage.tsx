import React, { useEffect } from 'react';
import { WhatIsBuildingSection } from '@/components/sections/WhatIsBuildingSection';
import { SEO } from '@/components/common/SEO';

const HowItWorksPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-cotton-white flex flex-col overflow-x-hidden">
      <SEO 
        title="How EchoTech Works — From Ideas to Outcomes" 
        description="Discover the EchoTech intelligence pipeline, bridging the gap from understanding and thinking to validation and sustainable execution." 
      />
      <WhatIsBuildingSection />
    </div>
  );
};

export default HowItWorksPage;

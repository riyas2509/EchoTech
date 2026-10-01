import React, { useEffect } from 'react';
import { EngineeringResearchSection } from '@/components/sections/EngineeringResearchSection';
import { SEO } from '@/components/common/SEO';

const EngineeringPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-900 flex flex-col overflow-x-hidden">
      <SEO 
        title="EchoTech Engineering — Building Intelligent Systems" 
        description="Explore the technical foundations and research behind EchoTech's intelligent software and agentic workflows." 
      />
      <EngineeringResearchSection />
    </div>
  );
};

export default EngineeringPage;

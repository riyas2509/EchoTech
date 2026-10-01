import React, { useEffect } from 'react';
import { InsightsSection } from '@/components/sections/InsightsSection';
import { SEO } from '@/components/common/SEO';

const InsightsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-cotton-white flex flex-col overflow-x-hidden">
      <SEO 
        title="EchoTech Insights — Thinking About AI, Technology & Human Capability" 
        description="Read our latest insights and thinking on human-centered AI, cognitive load, and the future of intelligent systems." 
      />
      <InsightsSection />
    </div>
  );
};

export default InsightsPage;

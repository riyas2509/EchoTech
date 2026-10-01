import React, { useEffect } from 'react';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { SEO } from '@/components/common/SEO';
import { HumanAndAISection } from '@/components/sections/HumanAndAISection';
import { TheTransformationSection } from '@/components/sections/TheTransformationSection';

const PhilosophyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-cotton-white flex flex-col overflow-x-hidden">
      <SEO 
        title="EchoTech Philosophy — Human-Centered AI" 
        description="EchoTech believes that AI should amplify human intelligence, not replace it. Explore our approach to building tools that augment human potential." 
      />
      <PhilosophySection />
      <HumanAndAISection />
      <TheTransformationSection />
    </div>
  );
};

export default PhilosophyPage;

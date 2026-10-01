import React, { useEffect } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { SEO } from '@/components/common/SEO';
import { TheProblemSection } from '@/components/sections/TheProblemSection';
import { AboutPreviewSection } from '@/components/sections/AboutPreviewSection';
import { ProductsPreviewSection } from '@/components/sections/ProductsPreviewSection';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { FutureVisionSection } from '@/components/sections/FutureVisionSection';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-cotton-white flex flex-col overflow-x-hidden">
      <SEO 
        title="EchoTech — Human-Centered Intelligent Software" 
        description="EchoTech is a connected ecosystem of intelligent software designed to reduce cognitive load and bridge the gap between thinking and doing." 
      />
      {/* Chapter 1: The New Era */}
      <HeroSection />
      
      {/* Chapter 2: The World Is Broken */}
      <TheProblemSection />
      
      {/* Chapter 3: About / Meet EchoTech Preview */}
      <AboutPreviewSection />

      {/* Chapter 4: Products Preview */}
      <ProductsPreviewSection />
      
      {/* Chapter 5: EchoTech Philosophy Preview */}
      <PhilosophySection />
      
      {/* Final Chapter: Start Building */}
      <FutureVisionSection />
    </div>
  );
};

export default Home;

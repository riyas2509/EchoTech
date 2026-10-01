import { useEffect } from 'react';
import { EcosystemSection } from '@/components/sections/EcosystemSection';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FAFAFA] selection:bg-slate-200 pt-[72px]">
      {/* Ecosystem Section now serves as the header/hero for the Products page */}
      <EcosystemSection />
      
      {/* Placeholder for future product detail sections */}
      <div className="w-full flex-1">
         {/* Future product sections go here */}
      </div>
    </div>
  );
};

export default Products;

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { type EcosystemProduct } from './ecosystemData';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: EcosystemProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <>
      {/* Node Glass Panel (Expands on Hover) */}
      <div 
        className={`
          flex items-center p-1.5 rounded-full 
          bg-white/20 backdrop-blur-3xl border border-white/20 
          shadow-[0_4px_24px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.4)]
          cursor-pointer overflow-hidden
          transition-all duration-500 ease-[0.16,1,0.3,1]
          w-[56px] group-hover:w-[240px]
          hover:bg-white/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)]
          hover:border-white/30
        `}
      >
        {/* Hover Glow inside panel */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none ${product.bgAccent}`} />

        {/* Circle Icon (Always visible) */}
        <div className={`relative z-10 shrink-0 w-[44px] h-[44px] rounded-full ${product.bgAccent} flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)]`}>
          <div className={`${product.colorClass} group-hover:scale-110 transition-transform duration-500`}>
            {product.icon}
          </div>
        </div>

        {/* Hidden Text & CTA (Fades in & slides in on hover) */}
        <div className="relative z-10 flex flex-col justify-center ml-3 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[0.16,1,0.3,1] delay-75 whitespace-nowrap overflow-hidden">
          <span className="text-[14px] font-bold text-slate-900 tracking-wide leading-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>{product.name}</span>
          <div className="flex items-center gap-1 mt-0.5">
            <span className="text-[11px] font-medium text-slate-500 leading-tight">{product.description}</span>
          </div>
        </div>
        
        {/* Enter Arrow */}
        <div className="relative z-10 ml-auto mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
            <ArrowRight size={14} className={product.colorClass} />
        </div>
      </div>

      {/* Breathing Glow (Default State) */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-1/2 left-[28px] -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full ${product.bgAccent} blur-md -z-10 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none`}
      />
    </>
  );
};

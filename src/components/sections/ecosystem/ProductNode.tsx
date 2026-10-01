import React from 'react';
import { motion } from 'framer-motion';
import { type EcosystemProduct } from './ecosystemData';
import { ProductCard } from './ProductCard';

interface ProductNodeProps {
  product: EcosystemProduct;
  x: number;
  y: number;
  idx: number;
  isInView: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

export const ProductNode: React.FC<ProductNodeProps> = ({ 
  product,
  idx, 
  isInView, 
  onHoverStart, 
  onHoverEnd 
}) => {
  // Determine anchor expansion classes based on product.anchor and product.expandDirection
  // The icon center is (x, y). The wrapper pins to that.
  let expansionClass = '';
  switch (product.expandDirection) {
    case 'right':
      expansionClass = 'top-1/2 right-1/2 translate-x-[28px] -translate-y-1/2';
      break;
    case 'left':
      expansionClass = 'top-1/2 left-1/2 -translate-x-[28px] -translate-y-1/2';
      break;
    case 'up':
      // EchoOS expands from center according to previous design, or 'up'
      expansionClass = 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
      break;
    case 'down':
      expansionClass = 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
      break;
    default:
      expansionClass = 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
  }

  // Animation values for floating (very subtle)
  // We'll generate a subtle deterministic float based on idx
  const floatY = idx % 2 === 0 ? [1.5, -1.5, 1.5] : [-2, 2, -2];
  const floatX = idx % 2 === 0 ? [1, -1, 1] : [-1, 1, -1];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.8, delay: 1.0 + (idx * 0.15), ease: [0.16, 1, 0.3, 1] }}
      className="md:absolute z-20 group w-full md:w-auto flex justify-center md:block"
      style={{ 
        // On desktop, we position absolutely. On mobile, we let it flow in a flex column.
        // We use a CSS custom property to handle this cleanly if needed, but for simplicity, 
        // we can just use inline styles that only apply in md breakpoint via a resize observer in layout,
        // or just apply top/left only when >= 768px. Since we can't easily inline media queries, 
        // we'll rely on EcosystemLayout passing x/y as 0 on mobile, OR we just use style on a wrapper in layout.
        // Let's assume layout wraps this in a positioning div on desktop.
      }}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <motion.div
        animate={{ y: floatY, x: floatX }}
        transition={{ duration: product.duration, repeat: Infinity, ease: "easeInOut", delay: 1.0 + (idx * 0.3) }}
        className="relative"
      >
        {/* On mobile, we don't want absolute positioning for the card, we want it normal flow or centered. */}
        <div className={`md:absolute ${expansionClass} z-30 pointer-events-auto flex justify-center`}>
          <ProductCard product={product} />
        </div>
      </motion.div>
    </motion.div>
  );
};

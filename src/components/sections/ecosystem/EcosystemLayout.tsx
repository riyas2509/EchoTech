import React, { useState, useEffect, useMemo } from 'react';
import { ecosystemProducts } from './ecosystemData';
import { IntelligenceCore } from './IntelligenceCore';
import { ConnectionLines, type ConnectionLineData } from './ConnectionLines';
import { ProductNode } from './ProductNode';

interface EcosystemLayoutProps {
  containerRef: React.RefObject<HTMLDivElement | null> | React.MutableRefObject<HTMLDivElement | null>;
  isInView: boolean;
}

export const EcosystemLayout: React.FC<EcosystemLayoutProps> = ({ isInView }) => {
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isLaptop, setIsLaptop] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const checkViewport = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      setIsTablet(w >= 768 && w < 1024);
      setIsLaptop(w >= 1024 && w < 1280);
      setIsDesktop(w >= 1280);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const centerX = 300;
  const centerY = 300;
  const radius = isDesktop ? 240 : isLaptop ? 216 : isTablet ? 180 : 180; 

  // Calculate coordinates mathematically for desktop
  const nodes = useMemo(() => {
    return ecosystemProducts.map((product) => {
      // angle is in degrees, 0 is right, 90 is bottom
      const angleRad = (product.angle * Math.PI) / 180;
      const x = centerX + radius * Math.cos(angleRad);
      const y = centerY + radius * Math.sin(angleRad);
      return { ...product, x, y };
    });
  }, [centerX, centerY, radius]);

  // Generate connection line data
  const lineData: ConnectionLineData[] = useMemo(() => {
    return nodes.map(node => ({
      id: node.id,
      x2: node.x,
      y2: node.y,
      isFoundation: node.isFoundation,
      duration: node.duration,
      isHovered: hoveredProductId === node.id,
      isDimmed: hoveredProductId !== null && hoveredProductId !== node.id
    }));
  }, [nodes, hoveredProductId]);

  return (
    <div className="w-full flex flex-col lg:block items-center relative z-10 mx-auto lg:w-[600px] lg:h-[600px] overflow-visible">
      
      {/* Desktop Radial Visualization */}
      {!isMobile && (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <ConnectionLines 
            lines={lineData} 
            centerX={centerX} 
            centerY={centerY} 
            isInView={isInView} 
          />
          <IntelligenceCore isInView={isInView} />
        </div>
      )}

      {/* Nodes - Positioned Absolutely on Desktop, Stacked Flex on Mobile */}
      <div className={`relative z-20 w-full ${isMobile ? 'flex flex-col gap-6 items-center' : 'w-full h-full'}`}>
        
        {/* On Mobile, show Intelligence Core at the top */}
        {isMobile && (
          <div className="relative w-full flex justify-center mb-10 mt-8 h-[200px]">
             <IntelligenceCore isInView={isInView} />
          </div>
        )}

        {nodes.map((node, idx) => (
          <div 
            key={node.id} 
            className="w-full md:w-auto"
            style={!isMobile ? { position: 'absolute', top: node.y, left: node.x, transform: 'translate(-50%, -50%)' } : {}}
          >
            <ProductNode
              product={node}
              x={node.x}
              y={node.y}
              idx={idx}
              isInView={isInView}
              onHoverStart={() => setHoveredProductId(node.id)}
              onHoverEnd={() => setHoveredProductId(null)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

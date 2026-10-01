import React, { memo } from 'react';
import { motion } from 'framer-motion';

export interface ConnectionLineData {
  id: string;
  x2: number;
  y2: number;
  isFoundation?: boolean;
  duration: number;
  isHovered?: boolean;
  isDimmed?: boolean;
}

interface ConnectionLinesProps {
  lines: ConnectionLineData[];
  centerX?: number;
  centerY?: number;
  isInView: boolean;
}

export const ConnectionLines: React.FC<ConnectionLinesProps> = memo(({ 
  lines, 
  centerX = 300, 
  centerY = 300, 
  isInView 
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block z-0">
      <svg viewBox="0 0 600 600" className="w-full h-full overflow-visible">
        {lines.map((line) => {
          // Calculate curved path
          const dx = line.x2 - centerX;
          const dy = line.y2 - centerY;
          const midX = centerX + dx / 2;
          const midY = centerY + dy / 2;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const offset = 40; // curve intensity
          const cx = midX - (dy / dist) * offset;
          const cy = midY + (dx / dist) * offset;
          
          const pathD = `M ${centerX} ${centerY} Q ${cx} ${cy} ${line.x2} ${line.y2}`;

          return (
            <g key={`path-${line.id}`}>
              {/* Base Curved Path */}
              <path
                d={pathD}
                fill="none"
                stroke={line.isFoundation ? "url(#foundationGradient)" : "url(#pathGradient)"}
                strokeWidth="1"
                className={`transition-opacity duration-500 ${line.isHovered ? 'opacity-80' : line.isDimmed ? 'opacity-10' : 'opacity-30'}`}
              />
              
              {/* Glowing Flow Pulse */}
              <motion.path
                d={pathD}
                fill="none"
                stroke="url(#pathGradientBright)"
                strokeWidth={line.isHovered ? "2.5" : "1.5"}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: [0, 1, 1], opacity: line.isHovered ? [0, 1, 0] : [0, 0.6, 0] } : {}}
                transition={{ 
                  duration: line.isHovered ? 3 : 8, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: line.duration * 0.1 
                }}
                className={`drop-shadow-[0_0_8px_rgba(62,130,255,0.5)] transition-all duration-500 ${line.isDimmed ? 'opacity-0' : 'opacity-100'}`}
              />
              
              {/* Tiny Energy Particles along the curve */}
              <motion.circle
                r={line.isHovered ? "2" : "1.5"}
                fill="#ffffff"
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={isInView ? { offsetDistance: ["0%", "100%", "100%"], opacity: line.isDimmed ? [0, 0, 0] : [0, 1, 0] } : {}}
                transition={{
                  duration: line.isHovered ? 3 : 8,
                  repeat: Infinity,
                  ease: "linear",
                  delay: line.duration * 0.2
                }}
                style={{
                  offsetPath: `path('${pathD}')`,
                  filter: line.isHovered ? 'drop-shadow(0 0 10px rgba(62,130,255,1))' : 'drop-shadow(0 0 6px rgba(62,130,255,0.6))'
                }}
              />
            </g>
          );
        })}

        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="foundationGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3E82FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3E82FF" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="pathGradientBright" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3E82FF" />
            <stop offset="100%" stopColor="#A874FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
});

ConnectionLines.displayName = 'ConnectionLines';

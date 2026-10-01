import React from 'react';
import { FileText, BrainCircuit, Layout, Box, Activity } from 'lucide-react';

export type ProductExpandDirection = 'left' | 'right' | 'up' | 'down';
export type ProductAnchor = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'bottom-center' | 'center';

export interface EcosystemProduct {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
  bgAccent: string;
  borderAccent: string;
  angle: number; // degrees (0 is right, 90 is bottom)
  duration: number; // base animation duration in seconds
  isFoundation?: boolean;
  anchor: ProductAnchor;
  expandDirection: ProductExpandDirection;
}

export const ecosystemProducts: EcosystemProduct[] = [
  {
    id: 'echonote',
    name: 'EchoNote',
    description: 'Intelligent documentation.',
    icon: <FileText size={18} strokeWidth={2.5} />,
    colorClass: 'text-[#3E82FF]',
    bgAccent: 'bg-[#D8F2FF]',
    borderAccent: 'border-[#8ED8FF]',
    angle: -90, // Top
    duration: 20,
    anchor: 'top-left',
    expandDirection: 'right', // User specified
  },
  {
    id: 'thinkoria',
    name: 'Thinkoria',
    description: 'Accelerated human learning.',
    icon: <BrainCircuit size={18} strokeWidth={2.5} />,
    colorClass: 'text-[#A874FF]',
    bgAccent: 'bg-[#EADEFF]',
    borderAccent: 'border-[#D7B6FF]',
    angle: -18, // Mid-right
    duration: 24,
    anchor: 'top-right',
    expandDirection: 'left', // User specified
  },
  {
    id: 'protolens',
    name: 'ProtoLens',
    description: 'Visionary product design.',
    icon: <Box size={18} strokeWidth={2.5} />,
    colorClass: 'text-[#34C985]',
    bgAccent: 'bg-[#DCFCEE]',
    borderAccent: 'border-[#68E3B7]',
    angle: -162, // Mid-left
    duration: 26,
    anchor: 'bottom-left',
    expandDirection: 'right', // User specified
  },
  {
    id: 'lifecapital',
    name: 'LifeCapital',
    description: 'Autonomous wealth management.',
    icon: <Activity size={18} strokeWidth={2.5} />,
    colorClass: 'text-[#FF934D]',
    bgAccent: 'bg-[#FFF0E0]',
    borderAccent: 'border-[#FFBC5E]',
    angle: 54, // Bottom-right
    duration: 18,
    anchor: 'bottom-right',
    expandDirection: 'left', // User specified
  },
  {
    id: 'echos',
    name: 'EchoOS',
    description: 'The foundation of work.',
    icon: <Layout size={18} strokeWidth={2.5} />,
    colorClass: 'text-[#3E82FF]',
    bgAccent: 'bg-[#E3EFFF]',
    borderAccent: 'border-[#8ED8FF]',
    angle: 126, // Bottom-left
    duration: 22,
    anchor: 'bottom-center',
    expandDirection: 'up', // User specified
  },
];

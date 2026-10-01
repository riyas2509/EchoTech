import React from 'react';

interface Props {
  src: string;
  fallback: string;
}

export const Avatar: React.FC<Props> = ({ src, fallback }) => (
  <div className="relative w-full h-full rounded-full overflow-hidden z-10">
    <img 
      src={src} 
      alt="Profile" 
      className="w-full h-full object-cover" 
      onError={(e) => { 
        e.currentTarget.style.display = 'none'; 
        e.currentTarget.nextElementSibling?.classList.remove('hidden'); 
      }} 
    />
    <div className="hidden w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 text-3xl font-bold">
      {fallback}
    </div>
  </div>
);

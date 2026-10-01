import { motion } from 'framer-motion';

export const TransformIllustration = () => {
  return (
    <div className="relative w-80 h-72 flex items-center justify-center drop-shadow-2xl">
      {/* Background Soft Glow */}
      <motion.div
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-48 h-48 rounded-full bg-gradient-to-tr from-[#7C5CFF]/30 to-[#FF8CC8]/30 blur-3xl"
      />

      {/* The Transforming Card */}
      <motion.div
        animate={{ 
          y: [-8, 8, -8],
          rotateY: [0, 180, 360]
        }}
        transition={{ 
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          rotateY: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }
        }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-44 h-64 rounded-3xl shadow-2xl"
      >
        {/* Front of Card (Blank/Glass) */}
        <div 
          className="absolute inset-0 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/80 shadow-inner flex items-center justify-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-white/50 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-white/50" />
          </div>
        </div>

        {/* Back of Card (Filled Profile) */}
        <div 
          className="absolute inset-0 rounded-3xl shadow-inner flex flex-col p-4 overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden', 
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(135deg, #7C5CFF 0%, #FF8CC8 100%)'
          }}
        >
           {/* Profile Picture */}
           <div className="flex items-center gap-3 mt-2">
             <div className="w-12 h-12 rounded-full bg-white/40 backdrop-blur-sm border border-white/50 shadow-sm" />
             <div className="flex flex-col gap-1.5">
               <div className="w-16 h-2 bg-white/60 rounded-full" />
               <div className="w-10 h-1.5 bg-white/40 rounded-full" />
             </div>
           </div>

           {/* Content Modules */}
           <div className="mt-6 flex flex-col gap-3">
              <div className="w-full h-10 bg-white/20 backdrop-blur-md rounded-xl border border-white/30" />
              <div className="flex gap-2">
                <div className="flex-1 h-12 bg-white/20 backdrop-blur-md rounded-xl border border-white/30" />
                <div className="flex-1 h-12 bg-white/20 backdrop-blur-md rounded-xl border border-white/30" />
              </div>
              <div className="w-3/4 h-8 bg-white/20 backdrop-blur-md rounded-xl border border-white/30" />
           </div>
        </div>
      </motion.div>

      {/* Orbiting Sparkles/Stars */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute w-72 h-72 rounded-full"
      >
        <motion.div 
          animate={{ scale: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-10 right-10 w-4 h-4"
        >
           <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#FF8CC8]">
             <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
           </svg>
        </motion.div>

        <motion.div 
          animate={{ scale: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-16 left-12 w-3 h-3"
        >
           <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#79D6FF]">
             <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
           </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

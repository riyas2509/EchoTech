
import { motion } from 'framer-motion';

export const ModulesIllustration = () => {
  return (
    <div className="relative w-80 h-72 flex items-center justify-center drop-shadow-2xl">
      {/* Glowing connecting lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 288" fill="none">
        <motion.path
          d="M 160 144 L 80 80 M 160 144 L 240 80 M 160 144 L 60 160 M 160 144 L 260 160 M 160 144 L 100 240 M 160 144 L 220 240"
          stroke="url(#glow-line)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        />
        <defs>
          <linearGradient id="glow-line" x1="0" y1="0" x2="320" y2="288" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C5CFF" stopOpacity="0.8" />
            <stop offset="1" stopColor="#79D6FF" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Central Hub */}
      <motion.div
        animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute z-20 w-16 h-16 rounded-full bg-gradient-to-tr from-[#7C5CFF] to-[#FF8CC8] shadow-[0_0_30px_rgba(124,92,255,0.4)] flex items-center justify-center"
      >
        <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md" />
      </motion.div>

      {/* Floating Modules */}
      {/* Portfolio */}
      <motion.div
        animate={{ y: [-5, 5, -5], x: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        className="absolute z-30 left-10 top-12 w-20 h-16 rounded-xl bg-white/80 backdrop-blur-lg border border-white/80 shadow-lg flex flex-col items-center justify-center gap-1"
      >
        <div className="w-6 h-6 rounded bg-[#FF8CC8]/20 border border-[#FF8CC8]/40" />
        <div className="w-10 h-1 bg-black/5 rounded-full" />
      </motion.div>

      {/* Projects */}
      <motion.div
        animate={{ y: [4, -4, 4], x: [2, -2, 2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute z-30 right-10 top-12 w-20 h-16 rounded-xl bg-white/80 backdrop-blur-lg border border-white/80 shadow-lg flex flex-col items-center justify-center gap-1"
      >
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-sm bg-[#79D6FF]/20 border border-[#79D6FF]/40" />
          <div className="w-3 h-3 rounded-sm bg-[#79D6FF]/20 border border-[#79D6FF]/40" />
        </div>
        <div className="w-8 h-1 bg-black/5 rounded-full" />
      </motion.div>

      {/* Resume */}
      <motion.div
        animate={{ y: [3, -3, 3], x: [-3, 3, -3] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute z-30 left-4 top-36 w-16 h-20 rounded-xl bg-white/80 backdrop-blur-lg border border-white/80 shadow-lg flex flex-col items-center p-2 gap-1.5"
      >
        <div className="w-full h-1 bg-black/10 rounded-full" />
        <div className="w-3/4 h-1 bg-black/10 rounded-full" />
        <div className="w-full h-1 bg-black/10 rounded-full mt-1" />
      </motion.div>

      {/* Products */}
      <motion.div
        animate={{ y: [-4, 4, -4], x: [3, -3, 3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute z-30 right-4 top-36 w-20 h-20 rounded-xl bg-white/80 backdrop-blur-lg border border-white/80 shadow-lg flex items-center justify-center p-2"
      >
        <div className="w-full h-full border border-[#6DE5C2]/40 bg-[#6DE5C2]/10 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-[#6DE5C2]/30" />
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        animate={{ y: [5, -5, 5], x: [-1, 1, -1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute z-30 left-16 bottom-8 w-20 h-16 rounded-xl bg-white/80 backdrop-blur-lg border border-white/80 shadow-lg flex items-center p-2 gap-2"
      >
        <div className="w-1.5 h-full bg-black/5 rounded-full relative flex flex-col justify-between py-1 items-center">
          <div className="w-2.5 h-2.5 rounded-full bg-[#7C5CFF]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF8CC8]" />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="w-full h-1 bg-black/10 rounded-full" />
          <div className="w-full h-1 bg-black/10 rounded-full" />
        </div>
      </motion.div>

      {/* Analytics */}
      <motion.div
        animate={{ y: [-6, 6, -6], x: [1, -1, 1] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        className="absolute z-30 right-16 bottom-8 w-20 h-16 rounded-xl bg-white/80 backdrop-blur-lg border border-white/80 shadow-lg flex items-end p-2 gap-1"
      >
        <div className="w-4 h-6 bg-[#79D6FF]/30 rounded-t-sm" />
        <div className="w-4 h-10 bg-[#7C5CFF]/30 rounded-t-sm" />
        <div className="w-4 h-4 bg-[#FF8CC8]/30 rounded-t-sm" />
      </motion.div>
    </div>
  );
};

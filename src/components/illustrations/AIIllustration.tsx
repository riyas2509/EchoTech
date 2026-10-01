
import { motion } from 'framer-motion';

export const AIIllustration = () => {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center drop-shadow-2xl">
      {/* Central AI Core Orb */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-32 h-32 rounded-full blur-2xl bg-gradient-to-tr from-[#7C5CFF] to-[#FF8CC8] opacity-60"
      />
      <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-white/60 to-white/10 backdrop-blur-md border border-white/40 shadow-inner flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#7C5CFF] to-[#79D6FF] opacity-90 blur-sm" />
      </div>

      {/* Orbiting Bubble 1 */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute w-48 h-48 rounded-full"
      >
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-4 right-4 w-12 h-12 rounded-full bg-white/40 backdrop-blur-lg border border-white/50 shadow-sm"
        />
      </motion.div>

      {/* Orbiting Bubble 2 */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute w-56 h-56 rounded-full"
      >
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-2 left-2 w-16 h-16 rounded-full bg-gradient-to-br from-white/50 to-white/20 backdrop-blur-lg border border-white/60 shadow-md flex items-center justify-center"
        >
          <div className="w-6 h-1.5 rounded-full bg-[#7C5CFF]/30" />
        </motion.div>
      </motion.div>

      {/* Orbiting Bubble 3 */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute w-64 h-64 rounded-full"
      >
        <motion.div
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 -left-4 w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm border border-white/40"
        />
      </motion.div>
    </div>
  );
};

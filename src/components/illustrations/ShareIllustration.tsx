import { motion } from 'framer-motion';

export const ShareIllustration = () => {
  return (
    <div className="relative w-72 h-64 flex items-center justify-center drop-shadow-2xl">
      {/* Phone Outline */}
      <motion.div
        animate={{ y: [-4, 4, -4], rotate: [-1, 1, -1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute z-10 w-28 h-56 rounded-[2rem] bg-white/20 backdrop-blur-md border border-white/60 shadow-lg flex flex-col items-center p-2"
      >
        <div className="w-10 h-1.5 bg-black/10 rounded-full mt-1" />
        
        {/* Abstract NFC waves on phone screen */}
        <div className="flex-1 w-full flex flex-col items-center justify-center gap-1 opacity-50">
          <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border border-black/10 flex items-center justify-center">
               <div className="w-1 h-1 bg-[#7C5CFF] rounded-full" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating QR Code Graphic */}
      <motion.div
        animate={{ y: [4, -4, 4], x: [2, -2, 2], rotate: [2, -2, 2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute z-20 -left-6 top-10 w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-lg border border-white/80 shadow-xl flex items-center justify-center p-3"
      >
        <div className="w-full h-full border-2 border-dashed border-[#7C5CFF]/60 rounded-lg flex items-center justify-center">
           <div className="w-2 h-2 bg-[#FF8CC8] rounded-sm" />
        </div>
      </motion.div>

      {/* Floating EchoCard Graphic */}
      <motion.div
        animate={{ y: [6, -6, 6], rotate: [-4, 4, -4], x: [-3, 3, -3] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute z-20 -right-8 bottom-12 w-28 h-16 rounded-xl shadow-2xl flex items-center p-2"
        style={{
          background: 'linear-gradient(135deg, #7C5CFF 0%, #FF8CC8 100%)'
        }}
      >
         <div className="w-6 h-4 bg-white/30 rounded border border-white/50" />
      </motion.div>

      {/* Orbiting NFC / Connection Link Bubbles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute w-60 h-60 rounded-full border border-black/[0.03]"
      >
        <div className="absolute top-0 right-10 w-4 h-4 bg-[#79D6FF] rounded-full shadow-lg blur-[1px]" />
        <div className="absolute bottom-10 left-0 w-3 h-3 bg-[#6DE5C2] rounded-full shadow-lg blur-[1px]" />
      </motion.div>
    </div>
  );
};

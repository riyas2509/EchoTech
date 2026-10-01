import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { resumeData } from '@/data/resume';
import { ResumeCard } from '@/components/cards/ResumeCard';

const ResumePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[100dvh] w-full bg-slate-50 overflow-hidden flex flex-col items-center">
      {/* Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-pink-200 opacity-30 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full bg-cyan-200 opacity-30 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-md min-h-[100dvh] mx-auto flex flex-col pt-safe pb-safe px-5">
        {/* Header */}
        <header className="w-full flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <button onClick={() => navigate(-1)} className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center hover:bg-slate-200/50 transition-colors">
              <ChevronLeft size={24} className="text-slate-800" />
            </button>
            <span className="font-bold tracking-wider text-sm text-slate-800 uppercase" style={{ fontFamily: 'Manrope, sans-serif' }}>
              RESUME
            </span>
          </div>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full flex flex-col items-center mt-6 flex-1 pb-32 gap-6"
        >
          <div className="w-full text-center">
            <h1 className="text-2xl font-bold text-slate-800">{resumeData.title}</h1>
            <p className="text-sm text-slate-500 mt-1">{resumeData.subtitle}</p>
          </div>

          <div className="w-full rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-white">
            <img src={resumeData.previewImage} alt="Resume Preview" className="w-full h-auto object-cover" />
          </div>

          <div className="w-full">
            <ResumeCard 
              title={resumeData.downloadLabel}
              size={`Updated ${resumeData.lastUpdated}`}
              onClick={() => window.open(resumeData.pdf, '_blank')}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage;

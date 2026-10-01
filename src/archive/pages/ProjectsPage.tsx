import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Menu} from 'lucide-react';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { projectsData } from '@/data/projects';

import { springConfig } from '@/constants/motion';

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: springConfig }
  };

  const projects = projectsData;

  return (
    <div className="relative min-h-[100dvh] w-full bg-slate-50 overflow-hidden flex flex-col items-center">
      {/* Background Glows (Same as Home) */}
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
              MY PROJECTS
            </span>
          </div>
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-200/50 transition-colors">
            <Menu size={20} className="text-slate-800" />
          </button>
        </header>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="w-full flex flex-col items-center mt-6 flex-1 pb-32"
        >
          <div className="w-full flex flex-col gap-6">
            {projects.map((project, idx) => (
              <motion.div key={idx} variants={itemFadeUp} className="w-full">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.coverImage}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>



    </div>
  );
};

export default ProjectsPage;

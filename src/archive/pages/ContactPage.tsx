import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { 
  Menu,
  Mail,
  ChevronLeft,
  Calendar,
  ChevronRight
} from 'lucide-react';
import { GlassCard } from '@/components/cards/GlassCard';
import { contactData } from '@/data/contact';

import { springConfig } from '@/constants/motion';

const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  
  const itemFadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: springConfig }
  };

  const connectLinks = [
    {
      title: 'Book Meeting',
      subtitle: 'Schedule a time',
      icon: <Calendar size={20} />,
      url: `mailto:${contactData.email}?subject=Meeting%20Request`,
      color: 'text-blue-500',
      bg: 'bg-blue-100/50'
    },
    {
      title: 'Send Email',
      subtitle: contactData.email,
      icon: <Mail size={20} />,
      url: `mailto:${contactData.email}`,
      color: 'text-rose-500',
      bg: 'bg-rose-100/50'
    },
    {
      title: 'LinkedIn',
      subtitle: 'Connect with me',
      icon: <FaLinkedin size={20} />,
      url: `https://linkedin.com/in/${contactData.linkedin}`,
      color: 'text-sky-600',
      bg: 'bg-sky-100/50'
    },
    {
      title: 'WhatsApp',
      subtitle: 'Chat directly',
      icon: <FaWhatsapp size={20} />,
      url: `https://wa.me/${contactData.whatsapp}`,
      color: 'text-emerald-500',
      bg: 'bg-emerald-100/50'
    }
  ];

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
              LET'S CONNECT
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
          <div className="w-full flex flex-col gap-3">
            {connectLinks.map((link, idx) => (
              <motion.a
                key={idx}
                variants={itemFadeUp}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full block"
              >
                <GlassCard className="flex items-center p-4 hover:bg-white/90 transition-colors cursor-pointer">
                  <div className={`w-12 h-12 rounded-full ${link.bg} flex items-center justify-center mr-4 ${link.color}`}>
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 text-[15px] leading-tight">{link.title}</h4>
                    <span className="text-xs font-medium text-slate-500">{link.subtitle}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center">
                    <ChevronRight size={18} className="text-slate-400" />
                  </div>
                </GlassCard>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>



    </div>
  );
};

export default ContactPage;

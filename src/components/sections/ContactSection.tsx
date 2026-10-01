import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Briefcase, Globe, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'riya@echotechai.in';

  const contactOptions = [
    {
      id: 'general',
      title: 'General Inquiries',
      description: 'Questions about EchoTech, our mission, or general information.',
      icon: <MessageSquare size={24} className="text-slate-700" />,
      actionText: 'Email EchoTech',
      subject: 'General Inquiry - EchoTech'
    },
    {
      id: 'product',
      title: 'Product / Enterprise',
      description: 'Discuss enterprise deployments, volume licensing, or product capabilities.',
      icon: <Briefcase size={24} className="text-slate-700" />,
      actionText: 'Start a Conversation',
      subject: 'Enterprise / Product Inquiry'
    },
    {
      id: 'partnerships',
      title: 'Partnerships',
      description: 'Explore strategic partnerships, integrations, and ecosystem alignment.',
      icon: <Globe size={24} className="text-slate-700" />,
      actionText: 'Discuss Partnerships',
      subject: 'Partnership Inquiry'
    },
    {
      id: 'collaboration',
      title: 'Collaboration',
      description: 'Connect regarding media, research, or cross-industry collaboration.',
      icon: <Mail size={24} className="text-slate-700" />,
      actionText: 'Send an Inquiry',
      subject: 'Collaboration Inquiry'
    }
  ];

  return (
    <section className="relative w-full pt-[120px] pb-24 bg-cotton-white flex justify-center px-6 overflow-hidden min-h-screen">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cloud-gray rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-mist-gray rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] w-full flex flex-col items-center">
        
        {/* Icon & Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-8"
        >
          <img 
            src="/assets/echotech-icon.png" 
            alt="EchoTech Icon" 
            className="w-12 h-12 object-contain mb-6"
            loading="eager"
          />
          <span className="text-[13px] font-bold tracking-[0.2em] text-slate-400 uppercase">
            Let's Connect
          </span>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-[40px] md:text-[56px] lg:text-[64px] font-extrabold text-slate-900 leading-[1.1] tracking-tight text-center max-w-[800px] mb-6"
        >
          We'd love to hear from you.
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-[18px] md:text-[20px] text-slate-500 font-medium leading-[1.6] text-center max-w-[600px] mb-16"
        >
          EchoTech is building intelligent, human-centered software designed to bridge the gap between thinking and doing. We welcome relevant conversations.
        </motion.p>

        {/* Contact Options Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px]">
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 + (index * 0.1) }}
              className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-start h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                {option.icon}
              </div>
              <h3 className="text-[20px] font-bold text-slate-900 mb-3">
                {option.title}
              </h3>
              <p className="text-[15px] text-slate-500 leading-[1.6] mb-8 flex-grow">
                {option.description}
              </p>
              
              <a 
                href={`mailto:${contactEmail}?subject=${encodeURIComponent(option.subject)}`}
                className="inline-flex items-center gap-2 text-[15px] font-bold text-slate-900 hover:text-slate-600 transition-colors mt-auto outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 rounded-sm"
              >
                {option.actionText}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, Mail, Hash, AlignLeft, Layout, Bell } from 'lucide-react';

export const TheProblemSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const chaosItems = [
    {
      id: 'slack',
      icon: <Hash size={16} className="text-slate-400" />,
      title: '# project-launch',
      content: '@everyone Are we still on track for Friday? We need the updated designs.',
      color: 'bg-slate-50',
      desktopPos: 'lg:-top-6 lg:-left-20 xl:-left-28',
      rotate: shouldReduceMotion ? 0 : -4
    },
    {
      id: 'calendar',
      icon: <Calendar size={16} className="text-sunset-orange" />,
      title: 'Overlapping Events',
      content: '10:00 AM Sync vs 10:30 AM Review (Double Booked)',
      color: 'bg-orange-50/60 border-orange-100',
      desktopPos: 'lg:-top-8 lg:-right-16 xl:-right-24',
      rotate: shouldReduceMotion ? 0 : 5
    },
    {
      id: 'design',
      icon: <Layout size={16} className="text-violet" />,
      title: 'New Feedback Comment',
      content: '"Can we make this section pop more? The team needs clarification."',
      color: 'bg-slate-900 text-slate-200 border-slate-700',
      desktopPos: 'lg:top-1/2 lg:-left-24 xl:-left-32 lg:-translate-y-1/2',
      rotate: shouldReduceMotion ? 0 : -3
    },
    {
      id: 'transcript',
      icon: <AlignLeft size={16} className="text-slate-700" />,
      title: 'Scattered Meeting Transcript',
      content: '"We had three different decisions made in the sync, but no one logged them..."',
      color: 'bg-[#FFF9C4]/80 border-[#FBE9E7]',
      desktopPos: 'lg:top-1/2 lg:-right-24 xl:-right-32 lg:-translate-y-1/2',
      rotate: shouldReduceMotion ? 0 : 4
    },
    {
      id: 'notifications',
      icon: <Bell size={18} className="text-slate-600" />,
      title: 'Context Switching',
      content: '14 unread pings across 4 separate workplace apps',
      color: 'bg-white',
      desktopPos: 'lg:-bottom-8 lg:-left-16 xl:-left-20',
      rotate: shouldReduceMotion ? 0 : 3
    },
    {
      id: 'email',
      icon: <Mail size={16} className="text-ocean-blue" />,
      title: 'Action Item Lost',
      content: 'FWD: Urgent update buried in long email thread',
      color: 'bg-white',
      desktopPos: 'lg:-bottom-8 lg:-right-16 xl:-right-20',
      rotate: shouldReduceMotion ? 0 : -4
    }
  ];

  return (
    <section className="w-full py-20 lg:py-28 bg-cotton-white relative overflow-hidden min-h-[85vh] flex flex-col justify-center">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800f_1px,transparent_1px),linear-gradient(to_bottom,#8080800f_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-16 relative z-10 w-full">
        {/* Section Headline */}
        <div className="text-center mb-14 lg:mb-20 max-w-[800px] mx-auto relative z-20">
          <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest block mb-3">
            The Fundamental Problem
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(36px,4vw,60px)] font-bold text-slate-900 tracking-tight leading-[1.1] mb-4"
          >
            The world is too noisy to think.
          </motion.h2>
          <p className="text-[17px] md:text-[19px] text-slate-500 font-medium leading-[1.6] max-w-[600px] mx-auto">
            Knowledge workers spend more time hunting context across fragmented tools than making decisions and executing them.
          </p>
        </div>

        {/* Responsive Spatial Composition */}
        <div className="relative w-full flex flex-col items-center justify-center">

          {/* Mobile / Tablet: Clean Chaos Grid (Hidden on lg) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 lg:hidden max-w-[700px]">
            {chaosItems.slice(0, 4).map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-4 rounded-2xl border border-slate-200/80 shadow-sm ${item.color} flex flex-col gap-2`}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-[13px] font-bold text-slate-700">{item.title}</span>
                </div>
                <p className="text-[13px] text-slate-600 leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Centerpiece: EchoTech Solution Card */}
          <div className="relative w-full max-w-[620px] z-20 flex items-center justify-center">

            {/* Desktop Floating Chaos Orbit Elements (Positioned safely outside center card, only lg+) */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              {chaosItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{ rotate: item.rotate }}
                  className={`absolute ${item.desktopPos} z-10 w-[260px] xl:w-[280px] p-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-[20px] shadow-md pointer-events-auto flex flex-col gap-2 transition-transform hover:scale-105 hover:z-30`}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-[13px] font-bold text-slate-700 truncate">{item.title}</span>
                  </div>
                  <p className="text-[12px] text-slate-600 leading-relaxed line-clamp-2">
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Core Card: Always fully visible and legible */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative z-20 flex flex-col items-center justify-center bg-white/90 backdrop-blur-xl border border-mist-gray rounded-[36px] md:rounded-[44px] p-8 md:p-14 shadow-ambient w-full text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ice-blue/20 via-transparent to-lavender/20 rounded-[36px] md:rounded-[44px] pointer-events-none" />

              {/* EchoTech Icon Anchor */}
              <div className="relative h-16 md:h-20 px-6 bg-white border border-mist-gray rounded-[20px] flex items-center justify-center shadow-sm mb-6 group">
                <div className="absolute inset-0 bg-ocean-blue/10 rounded-[20px] blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img src="/assets/echotech-icon.png" alt="EchoTech Icon" width="78" height="40" className="h-8 md:h-10 w-auto object-contain relative z-10" />
              </div>

              <h3 className="text-[28px] md:text-[36px] font-bold text-slate-900 mb-4 leading-[1.15]">
                Technology should remove cognitive load.
              </h3>

              <p className="text-[16px] md:text-[18px] text-slate-500 font-medium leading-[1.6] max-w-[480px]">
                People should spend less time on fragmented information, and more time thinking, validating, creating, and executing outcomes.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

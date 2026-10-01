import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';

export const TopNav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBlur = useTransform(scrollY, [0, 50], [0, 12]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <motion.header 
      style={{ 
        backdropFilter: `blur(${headerBlur}px)`, 
        WebkitBackdropFilter: `blur(${headerBlur}px)`, 
        backgroundColor: `rgba(255, 255, 255, ${scrolled ? 0.95 : 0.7})` 
      }}
      className={`fixed top-0 w-full z-50 h-[72px] transition-all duration-300 border-b ${scrolled ? 'border-mist-gray shadow-sm' : 'border-transparent'}`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 xl:px-16 h-full flex justify-between items-center">
        
        {/* Logo */}
        <Link 
          to="/"
          className="flex items-center gap-2.5 cursor-pointer group rounded-md outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 p-1" 
          onClick={() => window.scrollTo(0,0)}
        >
          <img 
            src="/assets/echotech-icon.png" 
            alt="EchoTech Logo" 
            className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-bold text-[18px] text-slate-900 tracking-tight">EchoTech</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: 'Products', path: '/products' },
            { label: 'How It Works', path: '/how-it-works' },
            { label: 'Philosophy', path: '/philosophy' },
            { label: 'Engineering', path: '/engineering' },
            { label: 'Insights', path: '/insights' },
            { label: 'Contact', path: '/contact' },
          ].map(link => (
            <Link 
              key={link.label} 
              to={link.path}
              onClick={() => window.scrollTo(0, 0)}
              className={`relative text-[14px] font-bold transition-colors duration-200 group rounded-md outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 px-1 ${location.pathname === link.path ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-slate-900 transition-all duration-300 ${location.pathname === link.path ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`} />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link 
            to="/explore"
            onClick={() => window.scrollTo(0, 0)}
            className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-[14px] font-bold hover:bg-slate-800 hover:shadow-md hover:-translate-y-[1px] transition-all duration-200 block outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            Explore EchoTech
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-slate-900 font-medium rounded-md px-2 py-1 outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 w-full bg-white border-b border-mist-gray shadow-md flex flex-col py-4 px-6 z-40">
          {[
            { label: 'Products', path: '/products' },
            { label: 'How It Works', path: '/how-it-works' },
            { label: 'Philosophy', path: '/philosophy' },
            { label: 'Engineering', path: '/engineering' },
            { label: 'Insights', path: '/insights' },
            { label: 'Explore EchoTech', path: '/explore' }
          ].map(link => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => {
                window.scrollTo(0, 0);
                setMobileMenuOpen(false);
              }}
              className={`py-3 text-[16px] font-bold border-b border-slate-100 last:border-0 ${location.pathname === link.path ? 'text-slate-900' : 'text-slate-500'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </motion.header>
  );
};

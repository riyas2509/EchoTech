import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-100 py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-6 gap-12 md:gap-8">
        
        {/* Brand Section */}
        <div className="col-span-2 md:col-span-2 flex flex-col items-start">
          <div className="flex flex-col items-start gap-4 mb-6">
            <img src="/assets/echotech-icon.png" alt="EchoTech" loading="lazy" className="h-10 md:h-14 w-auto object-contain" />
          </div>
          <p className="text-slate-500 text-[15px] font-medium leading-relaxed max-w-[250px]">
            Intelligent, human-centered software.<br/>Turn ideas into outcomes.
          </p>
        </div>

        {/* Links Column 1 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-slate-900 text-[14px] mb-2 tracking-wide uppercase">Products</h4>
          <Link to="/products" className="text-slate-500 hover:text-slate-900 text-[14px] transition-colors rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">EchoNote</Link>
          <Link to="/products" className="text-slate-500 hover:text-slate-900 text-[14px] transition-colors rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">Thinkoria</Link>
          <Link to="/products" className="text-slate-500 hover:text-slate-900 text-[14px] transition-colors rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">ProtoLens</Link>
          <Link to="/products" className="text-slate-500 hover:text-slate-900 text-[14px] transition-colors rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">EchoOS</Link>
          <Link to="/products" className="text-slate-500 hover:text-slate-900 text-[14px] transition-colors rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">LifeCapital</Link>
        </div>

        {/* Links Column 2 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-slate-900 text-[14px] mb-2 tracking-wide uppercase">Company</h4>
          <Link to="/explore" className="text-slate-500 hover:text-slate-900 text-[14px] transition-colors rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">Explore EchoTech</Link>
          <Link to="/how-it-works" className="text-slate-500 hover:text-slate-900 text-[14px] transition-colors rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">How It Works</Link>
          <Link to="/philosophy" className="text-slate-500 hover:text-slate-900 text-[14px] transition-colors rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">Philosophy</Link>
          <Link to="/engineering" className="text-slate-500 hover:text-slate-900 text-[14px] transition-colors rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">Engineering</Link>
          <Link to="/insights" className="text-slate-500 hover:text-slate-900 text-[14px] transition-colors rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">Insights</Link>
        </div>

        {/* Links Column 3 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-slate-900 text-[14px] mb-2 tracking-wide uppercase">Connect</h4>
          <Link to="/contact" className="text-slate-500 hover:text-slate-900 text-[14px] transition-colors rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">Contact</Link>
          {/* <span className="text-slate-400 text-[14px]">Careers</span> */}
        </div>

        {/* Links Column 4 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-slate-900 text-[14px] mb-2 tracking-wide uppercase">Legal</h4>
          <Link to="/privacy" className="text-slate-500 hover:text-slate-900 text-[14px] transition-colors rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">Privacy</Link>
          <Link to="/terms" className="text-slate-500 hover:text-slate-900 text-[14px] transition-colors rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">Terms</Link>
          <Link to="/security" className="text-slate-500 hover:text-slate-900 text-[14px] transition-colors rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">Security</Link>
        </div>

      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-[13px]">
          &copy; {new Date().getFullYear()} EchoTech. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://www.instagram.com/echotech.ai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-slate-900 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-sm">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.linkedin.com/in/riya-shah-335056290/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-slate-900 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-sm">
            <FaLinkedin size={20} />
          </a>
          <a href="https://riyas25.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Portfolio" className="text-slate-400 hover:text-slate-900 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-sm">
            <Globe size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

import React, { useEffect } from 'react';
import { ContactSection } from '@/components/sections/ContactSection';
import { SEO } from '@/components/common/SEO';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-cotton-white flex flex-col overflow-x-hidden">
      <SEO 
        title="EchoTech Contact — Get in Touch" 
        description="Connect with EchoTech for general inquiries, product conversations, partnerships, and collaborations." 
      />
      <ContactSection />
    </div>
  );
};

export default ContactPage;

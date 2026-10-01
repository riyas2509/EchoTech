import React, { useEffect } from 'react';
import { SEO } from '@/components/common/SEO';
import { Link } from 'react-router-dom';

const TermsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-cotton-white flex flex-col overflow-x-hidden pt-[72px]">
      <SEO 
        title="Terms of Service — EchoTech" 
        description="Read the terms and conditions for using EchoTech products and services." 
      />
      
      <main className="flex-1 w-full max-w-[800px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-12">Last Updated: September 11, 2026</p>

        <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
          
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing or using the website and products provided by EchoTech, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Eligibility</h2>
            <p className="leading-relaxed">
              You must be at least 18 years old or the age of majority in your jurisdiction to use our services. By using our products, you represent and warrant that you meet these eligibility requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Accounts</h2>
            <p className="leading-relaxed">
              When you create an account with us, you must provide accurate and complete information. You are responsible for safeguarding your account credentials and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Use of EchoTech Products</h2>
            <p className="leading-relaxed">
              Our products are designed to augment human capability. You agree to use them responsibly and in compliance with all applicable laws. You may not use our services for any illegal, harmful, or abusive purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. AI-Generated Content</h2>
            <p className="leading-relaxed">
              EchoTech products use artificial intelligence to generate content and insights. While we strive for high quality, we do not guarantee the absolute accuracy, reliability, or completeness of any AI-generated output. You are responsible for reviewing and verifying the outputs before relying on them. We do not provide financial, legal, or medical advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Intellectual Property</h2>
            <p className="leading-relaxed">
              The services and all original content, features, and functionality are and will remain the exclusive property of EchoTech and its licensors. You retain ownership of the data you input into our systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Third-Party Services</h2>
            <p className="leading-relaxed">
              Our services may contain links to third-party web sites or services that are not owned or controlled by EchoTech. We assume no responsibility for the content, privacy policies, or practices of any third party web sites or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Product Availability</h2>
            <p className="leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any product or service at any time without prior notice. We do not guarantee continuous or uninterrupted availability of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Disclaimers</h2>
            <p className="leading-relaxed">
              Our services are provided on an "AS IS" and "AS AVAILABLE" basis. We disclaim all warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Limitation of Liability</h2>
            <p className="leading-relaxed">
              In no event shall EchoTech, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Governing Law and Jurisdiction</h2>
            <p className="leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which EchoTech operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">13. Contact</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms, please contact us at:
              <br />
              <a href="mailto:riya@echotechai.in" className="text-ocean-blue hover:underline font-medium mt-2 inline-block">riya@echotechai.in</a>
            </p>
            <p className="leading-relaxed mt-4">
              Or visit our <Link to="/contact" className="text-ocean-blue hover:underline font-medium">Contact</Link> page.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
};

export default TermsPage;

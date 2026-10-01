import React, { useEffect } from 'react';
import { SEO } from '@/components/common/SEO';
import { Link } from 'react-router-dom';

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-cotton-white flex flex-col overflow-x-hidden pt-[72px]">
      <SEO 
        title="Privacy Policy — EchoTech" 
        description="Learn how EchoTech collects, uses, and protects your information." 
      />
      
      <main className="flex-1 w-full max-w-[800px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-12">Last Updated: September 11, 2026</p>

        <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
          
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              At EchoTech, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy describes how we collect, use, and process your data when you interact with our website and products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Information We May Collect</h2>
            <p className="leading-relaxed">
              We may collect information you provide directly to us when you create an account, communicate with us, or use our products. This may include contact details, account credentials, and usage data generated as you interact with our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. How Information Is Used</h2>
            <p className="leading-relaxed">
              The information we collect is used to provide, maintain, and improve our services, develop new products, and protect EchoTech and our users. We may also use this information to communicate with you about updates, security alerts, and support messages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. AI and Data Processing</h2>
            <p className="leading-relaxed">
              EchoTech products utilize artificial intelligence to process data and generate insights. We design our systems with privacy in mind. We do not use your personal data to train our foundational models without appropriate consent or anonymization measures where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Data Retention and Deletion</h2>
            <p className="leading-relaxed">
              We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. You may request the deletion of your personal data by contacting us, and we will process such requests in accordance with applicable regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Cookies and Analytics</h2>
            <p className="leading-relaxed">
              Our website may use cookies and similar tracking technologies to analyze trends, administer the website, and track users' movements around the site. You can control the use of cookies at the individual browser level.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Data Security</h2>
            <p className="leading-relaxed">
              EchoTech implements reasonable organizational and technical measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. We continually evaluate our security practices to maintain the integrity of our systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Third-Party Services</h2>
            <p className="leading-relaxed">
              We may employ third-party companies and individuals to facilitate our services, provide the service on our behalf, or assist us in analyzing how our services are used. These third parties have access to your personal information only to perform these tasks on our behalf.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. User Rights</h2>
            <p className="leading-relaxed">
              Depending on your location, you may have the right to access, correct, or delete your personal data. If you wish to exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Children's Privacy</h2>
            <p className="leading-relaxed">
              Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child has provided us with personal information, we take steps to remove such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Changes to this Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically for the latest information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, please reach out to us at:
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

export default PrivacyPage;

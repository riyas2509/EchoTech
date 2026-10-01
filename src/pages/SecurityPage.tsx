import React, { useEffect } from 'react';
import { SEO } from '@/components/common/SEO';

const SecurityPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-cotton-white flex flex-col overflow-x-hidden pt-[72px]">
      <SEO 
        title="Security — EchoTech" 
        description="Learn about our approach to security, data protection, and our ongoing improvements." 
      />
      
      <main className="flex-1 w-full max-w-[800px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">Security</h1>
        <p className="text-slate-500 text-sm mb-12">Last Updated: September 11, 2026</p>

        <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
          
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Security at EchoTech</h2>
            <p className="leading-relaxed">
              At EchoTech, we recognize that security is an ongoing process. We are committed to protecting the integrity, confidentiality, and availability of our users' data. Our team works diligently to implement foundational security measures and continually improve our security posture as our platform evolves.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Security Principles</h2>
            <p className="leading-relaxed">
              We design our products with a focus on human-centered AI, and security is a core part of that design. We believe in transparency, continuous improvement, and practical security measures that protect our users without causing unnecessary friction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Account and Access Security</h2>
            <p className="leading-relaxed">
              We utilize established authentication providers to manage user access securely. We encourage users to practice good credential hygiene, and we are working to integrate more robust access controls as our product ecosystem matures.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Protection</h2>
            <p className="leading-relaxed">
              We implement reasonable measures to protect data both in transit and at rest. As our products grow, we are continuously evaluating and upgrading our encryption strategies and data handling protocols.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Infrastructure and Application Security</h2>
            <p className="leading-relaxed">
              Our infrastructure is built on reputable cloud providers. We follow general best practices for application security and aim to minimize our attack surface through careful architectural decisions and dependency management.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">AI Security Considerations</h2>
            <p className="leading-relaxed">
              As an AI company, we take the security of our models and AI processing pipelines seriously. We are actively developing practices to prevent prompt injection, ensure data boundaries between users, and maintain the integrity of our AI-generated outputs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Vulnerability Reporting and Incident Response</h2>
            <p className="leading-relaxed">
              We value the input of the security community. If you believe you have found a vulnerability in one of our products, we encourage you to report it to us. We have procedures in place to evaluate, triage, and respond to potential security incidents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Planned Security Improvements</h2>
            <p className="leading-relaxed">
              EchoTech is continually developing. We are actively planning to introduce formal security audits, advanced encryption standards, and comprehensive compliance certifications in the future as our organizational capabilities expand.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact</h2>
            <p className="leading-relaxed">
              For security inquiries, vulnerability reports, or questions about our practices, please contact us at:
              <br />
              <a href="mailto:riya@echotechai.in" className="text-ocean-blue hover:underline font-medium mt-2 inline-block">riya@echotechai.in</a>
            </p>
          </section>

        </div>
      </main>
    </div>
  );
};

export default SecurityPage;

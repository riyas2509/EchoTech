import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '@/utils/analytics';

import { faqItems } from '@/data/faqData';


export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 lg:py-28 bg-[#F8F9FA] relative z-10" id="faq">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-[12px] font-bold text-ocean-blue uppercase tracking-widest block mb-2">
            Questions & Clarity
          </span>
          <h2 className="text-[32px] md:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.1] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[16px] md:text-[18px] text-slate-500 font-medium leading-[1.6] max-w-xl mx-auto">
            Direct, factual answers about EchoTech, our current products, and our development roadmap.
          </p>
        </div>

        {/* Q&A Accordion Stack */}
        <div className="flex flex-col gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-shadow hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full py-5 px-6 md:px-8 flex items-center justify-between text-left gap-4 outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-inset"
                  aria-expanded={isOpen}
                >
                  <span className="text-[17px] md:text-[18px] font-bold text-slate-900 tracking-tight">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-slate-100' : ''}`}>
                    <ChevronDown size={18} className="text-slate-600" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 pt-2 border-t border-slate-100 text-[15px] md:text-[16px] text-slate-600 leading-relaxed">
                        <p>{item.answer}</p>

                        {item.hasLink && (
                          <div className="mt-4">
                            {item.isExternal ? (
                              <a
                                href={item.linkHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackEvent('outbound_product_click', { product: 'echonote', source: 'faq_link' })}
                                className="inline-flex items-center gap-1.5 text-[14px] font-bold text-ocean-blue hover:text-blue-700 transition-colors"
                              >
                                {item.linkText} <ExternalLink size={14} />
                              </a>
                            ) : (
                              <Link
                                to={item.linkHref || '/'}
                                onClick={() => window.scrollTo(0, 0)}
                                className="inline-flex items-center gap-1.5 text-[14px] font-bold text-slate-900 hover:text-ocean-blue transition-colors"
                              >
                                {item.linkText} &rarr;
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

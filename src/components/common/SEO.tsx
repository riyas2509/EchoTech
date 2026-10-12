import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title: string;
  description: string;
  faq?: FAQItem[];
}

export const SEO: React.FC<SEOProps> = ({ title, description, faq }) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to safely update or create meta tags
    const updateMetaTag = (selector: string, nameAttr: string, valueAttr: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, valueAttr);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Description
    updateMetaTag('meta[name="description"]', 'name', 'description', description);

    // 3. Open Graph Tags
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', 'https://echotechai.in/assets/echotech-icon.png');
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    updateMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'EchoTech');

    const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://echotechai.in').replace(/\/$/, '');
    const canonicalUrl = location.pathname === '/' ? `${siteUrl}/` : `${siteUrl}${location.pathname}`;
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);

    // 4. Twitter Cards
    updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary');
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', 'https://echotechai.in/assets/echotech-icon.png');

    // 5. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 6. JSON-LD Structured Data: Organization, WebSite, WebPage, and optional FAQPage
    const graphItems: Record<string, unknown>[] = [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "EchoTech",
        "url": `${siteUrl}/`,
        "logo": `${siteUrl}/assets/echotech-icon.png`,
        "description": "EchoTech is a technology company building an interconnected ecosystem of human-centered intelligent software designed to reduce cognitive load and bridge the gap between thinking and doing.",
        "sameAs": [
          "https://www.linkedin.com/in/riya-shah-335056290/",
          "https://github.com/riyas2509"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": `${siteUrl}/`,
        "name": "EchoTech",
        "description": "Intelligent, human-centered software ecosystem.",
        "publisher": {
          "@id": `${siteUrl}/#organization`
        }
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": title,
        "description": description,
        "isPartOf": {
          "@id": `${siteUrl}/#website`
        },
        "about": {
          "@id": `${siteUrl}/#organization`
        }
      }
    ];

    if (faq && faq.length > 0) {
      graphItems.push({
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": faq.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      });
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": graphItems
    };

    let scriptTag = document.querySelector('script[data-schema="echotech-ldjson"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.setAttribute('data-schema', 'echotech-ldjson');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [title, description, location.pathname, faq]);

  return null;
};

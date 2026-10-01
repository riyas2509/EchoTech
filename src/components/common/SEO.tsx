import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
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
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', '/assets/echotech-icon.png');
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://echotechai.in';
    // Ensure trailing slash for root, but not for other routes as per guidelines
    const canonicalUrl = location.pathname === '/' ? `${siteUrl}/` : `${siteUrl}${location.pathname}`;
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    
    // 4. Twitter Cards
    updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary');
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', '/assets/echotech-icon.png');
    
    // 5. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 6. JSON-LD Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${siteUrl}/#organization`,
          "name": "EchoTech",
          "url": `${siteUrl}/`,
          "logo": `${siteUrl}/assets/echotech-icon.png`
        },
        {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          "url": `${siteUrl}/`,
          "name": "EchoTech",
          "publisher": {
            "@id": `${siteUrl}/#organization`
          }
        }
      ]
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
    
  }, [title, description, location.pathname]);

  return null;
};

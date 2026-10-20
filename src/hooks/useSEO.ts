import { useEffect } from 'react';
import type { FaqItem } from '../types.ts';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  breadcrumbs?: Array<{ name: string; path: string }>;
  faqs?: FaqItem[];
  publishedTime?: string;
}

export function useSEO({
  title,
  description,
  path,
  image,
  type = 'website',
  breadcrumbs,
  faqs,
  publishedTime
}: SEOProps) {
  useEffect(() => {
    // 1. Title tag
    document.title = title;

    // Helper to set or create meta tags
    const setMetaTag = (nameAttr: string, key: string, content: string) => {
      let meta = document.querySelector(`meta[${nameAttr}="${key}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(nameAttr, key);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 2. Standard Meta Description
    setMetaTag('name', 'description', description);

    // 3. Canonical URL
    const canonicalUrl = `${window.location.origin}${path}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 4. OpenGraph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:site_name', 'FitStart');
    if (image) {
      const fullImageUrl = image.startsWith('http') ? image : `${window.location.origin}${image}`;
      setMetaTag('property', 'og:image', fullImageUrl);
      setMetaTag('name', 'twitter:image', fullImageUrl);
    }

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);

    // 6. JSON-LD Structured Data
    const graph: any[] = [
      {
        '@type': 'Organization',
        '@id': `${window.location.origin}/#organization`,
        name: 'FitStart – Beginner Fitness Guide',
        url: window.location.origin,
        logo: `${window.location.origin}/favicon.svg`
      },
      {
        '@type': 'WebSite',
        '@id': `${window.location.origin}/#website`,
        url: window.location.origin,
        name: 'FitStart',
        description: 'Complete Beginner Fitness Guide for Workouts, Nutrition, and Healthy Habits.'
      }
    ];

    if (type === 'article') {
      graph.push({
        '@type': 'Article',
        '@id': `${canonicalUrl}#article`,
        isPartOf: { '@id': `${window.location.origin}/#website` },
        headline: title,
        description: description,
        inLanguage: 'en-US',
        mainEntityOfPage: canonicalUrl,
        datePublished: publishedTime || '2026-10-01',
        dateModified: '2026-10-20',
        publisher: { '@id': `${window.location.origin}/#organization` },
        image: image ? (image.startsWith('http') ? image : `${window.location.origin}${image}`) : undefined
      });
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: `${window.location.origin}${crumb.path}`
        }))
      });
    }

    if (faqs && faqs.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      });
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': graph
    };

    let scriptTag = document.getElementById('json-ld-structured-data') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, [title, description, path, image, type, breadcrumbs, faqs, publishedTime]);
}

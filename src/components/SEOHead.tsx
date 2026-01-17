import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedDate?: string;
  modifiedDate?: string;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  publishedDate,
  modifiedDate,
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to update or create meta tag
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);

    // Open Graph
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:type', ogType, true);
    if (ogImage) updateMeta('og:image', ogImage, true);
    if (canonicalUrl) updateMeta('og:url', canonicalUrl, true);

    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    if (ogImage) updateMeta('twitter:image', ogImage);

    // Article specific
    if (publishedDate) updateMeta('article:published_time', publishedDate, true);
    if (modifiedDate) updateMeta('article:modified_time', modifiedDate, true);

    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    // GEO meta tags for local SEO
    updateMeta('geo.region', 'IN-PB');
    updateMeta('geo.placename', 'Bathinda, Punjab');
    updateMeta('geo.position', '30.2070;74.9455');
    updateMeta('ICBM', '30.2070, 74.9455');
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, publishedDate, modifiedDate]);

  return null;
};

export default SEOHead;

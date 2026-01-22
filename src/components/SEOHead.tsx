import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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

const SITE_URL = 'https://shreebalajienvirotech.lovable.app';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

// LocalBusiness Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  "name": "Shree Balaji Envirotech",
  "description": "Leading manufacturer of premium biomass pellets in Punjab. Sustainable energy solutions for industries.",
  "url": SITE_URL,
  "telephone": "+91-6280610158",
  "email": "shreebalajienvirotech@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Grain Market",
    "addressLocality": "Bathinda",
    "addressRegion": "Punjab",
    "postalCode": "151001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "30.2070",
    "longitude": "74.9455"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "priceRange": "₹₹",
  "image": DEFAULT_OG_IMAGE,
  "sameAs": [
    "https://www.instagram.com/shree_balaji_envirotech/"
  ]
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": "Shree Balaji Envirotech",
  "url": SITE_URL,
  "logo": DEFAULT_OG_IMAGE,
  "description": "Premium biomass pellet manufacturer providing sustainable energy solutions for industries across Punjab and India.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-6280610158",
    "contactType": "sales",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi", "Punjabi"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bathinda",
    "addressRegion": "Punjab",
    "addressCountry": "IN"
  }
};

// Product Schema
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Premium Biomass Pellets",
  "description": "High-quality biomass pellets made from agricultural residue. Eco-friendly fuel alternative with 4200+ kcal/kg calorific value.",
  "brand": {
    "@type": "Brand",
    "name": "Shree Balaji Envirotech"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Shree Balaji Envirotech"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "8000",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Shree Balaji Envirotech"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "50"
  }
};

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  publishedDate,
  modifiedDate,
}: SEOHeadProps) => {
  const location = useLocation();
  const fullCanonicalUrl = canonicalUrl || `${SITE_URL}${location.pathname}`;

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
    updateMeta('og:image', ogImage, true);
    updateMeta('og:url', fullCanonicalUrl, true);
    updateMeta('og:site_name', 'Shree Balaji Envirotech', true);
    updateMeta('og:locale', 'en_IN', true);

    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);

    // Article specific
    if (publishedDate) updateMeta('article:published_time', publishedDate, true);
    if (modifiedDate) updateMeta('article:modified_time', modifiedDate, true);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullCanonicalUrl);

    // GEO meta tags for local SEO
    updateMeta('geo.region', 'IN-PB');
    updateMeta('geo.placename', 'Bathinda, Punjab');
    updateMeta('geo.position', '30.2070;74.9455');
    updateMeta('ICBM', '30.2070, 74.9455');

    // Add JSON-LD schemas
    const addJsonLd = (id: string, schema: object) => {
      let script = document.querySelector(`script[data-schema-id="${id}"]`);
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-schema-id', id);
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    };

    // Add schemas only on homepage
    if (location.pathname === '/') {
      addJsonLd('local-business', localBusinessSchema);
      addJsonLd('organization', organizationSchema);
      addJsonLd('product', productSchema);
    }

    // Cleanup schemas on unmount
    return () => {
      if (location.pathname !== '/') {
        document.querySelectorAll('script[data-schema-id]').forEach(el => el.remove());
      }
    };
  }, [title, description, keywords, fullCanonicalUrl, ogImage, ogType, publishedDate, modifiedDate, location.pathname]);

  return null;
};

export default SEOHead;

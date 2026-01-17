export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  excerpt: string;
  publishDate: string;
  modifiedDate: string;
  readTime: string;
  category: 'guide' | 'awareness' | 'industry' | 'local';
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'biomass-pellets-complete-guide-punjab',
    title: 'Biomass Pellets: Complete Guide for Industries in Punjab',
    metaTitle: 'Biomass Pellets Guide Punjab | Industrial Fuel Solution Bathinda',
    metaDescription: 'Complete guide to biomass pellets for industries in Punjab. Learn specifications, pricing, benefits & how to switch from coal. Suppliers in Bathinda.',
    primaryKeyword: 'biomass pellets Punjab',
    secondaryKeywords: ['biomass pellet suppliers Bathinda', 'industrial fuel Punjab', 'wood pellets price'],
    excerpt: 'Everything Punjab industries need to know about biomass pellets - from specifications to pricing to implementation.',
    publishDate: 'January 10, 2025',
    modifiedDate: '2025-01-10',
    readTime: '12 min read',
    category: 'guide',
    featured: true,
  },
  {
    slug: 'stubble-burning-solution-punjab-biomass-pellets',
    title: 'Stubble Burning in Punjab: How Biomass Pellets Solve the Crisis',
    metaTitle: 'Stubble Burning Solution Punjab | Convert Parali to Pellets Bathinda',
    metaDescription: 'Stop stubble burning in Punjab. Convert paddy straw (parali) to profitable biomass pellets. Government incentives & buyer connections in Bathinda.',
    primaryKeyword: 'stubble burning solution Punjab',
    secondaryKeywords: ['parali management Punjab', 'paddy straw pellets', 'stubble burning alternative'],
    excerpt: 'How Punjab farmers and industries can turn the stubble burning crisis into a profitable opportunity.',
    publishDate: 'January 8, 2025',
    modifiedDate: '2025-01-08',
    readTime: '10 min read',
    category: 'awareness',
    featured: true,
  },
  {
    slug: 'coal-to-biomass-switch-industrial-boilers',
    title: 'Switch from Coal to Biomass Pellets: Complete Industrial Guide',
    metaTitle: 'Coal to Biomass Switch Guide | Boiler Conversion Punjab',
    metaDescription: 'Step-by-step guide to switch industrial boilers from coal to biomass pellets. ROI analysis, retrofit options & suppliers in Punjab.',
    primaryKeyword: 'coal to biomass switch',
    secondaryKeywords: ['biomass boiler conversion', 'industrial biomass Punjab', 'coal alternative'],
    excerpt: 'A practical guide for industries looking to switch from coal to cleaner, cost-effective biomass pellets.',
    publishDate: 'January 5, 2025',
    modifiedDate: '2025-01-05',
    readTime: '8 min read',
    category: 'guide',
  },
  {
    slug: 'biomass-pellet-price-punjab-2025',
    title: 'Biomass Pellet Prices in Punjab 2025: Complete Market Analysis',
    metaTitle: 'Biomass Pellet Price Punjab 2025 | Current Rates Bathinda',
    metaDescription: 'Latest biomass pellet prices in Punjab for 2025. Compare agro-waste, wood & industrial pellet rates. Bulk pricing from Bathinda suppliers.',
    primaryKeyword: 'biomass pellet price Punjab',
    secondaryKeywords: ['pellet fuel cost', 'biomass rate Bathinda', 'wood pellet price India'],
    excerpt: 'Current market prices for different types of biomass pellets in Punjab with factors affecting costs.',
    publishDate: 'January 3, 2025',
    modifiedDate: '2025-01-03',
    readTime: '6 min read',
    category: 'industry',
  },
  {
    slug: 'biomass-pellet-suppliers-near-bathinda',
    title: 'Biomass Pellet Suppliers Near Bathinda: Buying Guide 2025',
    metaTitle: 'Biomass Pellet Suppliers Bathinda | Buy Pellets Near Me Punjab',
    metaDescription: 'Find reliable biomass pellet suppliers near Bathinda, Punjab. Quality checklist, pricing guide & trusted manufacturer contacts.',
    primaryKeyword: 'biomass pellet suppliers near Bathinda',
    secondaryKeywords: ['buy biomass pellets Punjab', 'pellet manufacturers near me', 'Bathinda biomass'],
    excerpt: 'How to find and evaluate biomass pellet suppliers in and around Bathinda, Punjab.',
    publishDate: 'December 28, 2024',
    modifiedDate: '2024-12-28',
    readTime: '7 min read',
    category: 'local',
    featured: true,
  },
  {
    slug: 'rice-husk-pellets-benefits-manufacturing',
    title: 'Rice Husk Pellets: Benefits, Manufacturing & Applications',
    metaTitle: 'Rice Husk Pellets Guide | Agro-Waste Fuel Punjab',
    metaDescription: 'Complete guide to rice husk pellets - manufacturing process, calorific value, applications & suppliers in Punjab rice belt.',
    primaryKeyword: 'rice husk pellets',
    secondaryKeywords: ['agro waste pellets Punjab', 'rice husk fuel', 'agricultural biomass'],
    excerpt: 'Understanding rice husk pellets - a sustainable fuel from Punjab\'s abundant agricultural waste.',
    publishDate: 'December 25, 2024',
    modifiedDate: '2024-12-25',
    readTime: '9 min read',
    category: 'guide',
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category: BlogPost['category']): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

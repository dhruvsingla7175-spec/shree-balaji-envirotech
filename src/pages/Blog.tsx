import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Leaf, Tag, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import BlogSidebar from '@/components/BlogSidebar';
import { allPosts, getFeaturedPosts, BlogPost } from '@/data/blogPosts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const POSTS_PER_PAGE = 6;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const categoryLabels: Record<BlogPost['category'], string> = {
  guide: 'Guide',
  awareness: 'Industry Solution',
  industry: 'Industry News',
  local: 'Local Focus',
};

const categoryColors: Record<BlogPost['category'], string> = {
  guide: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  awareness: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
  industry: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  local: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
};

// Thumbnail images based on category
const categoryThumbnails: Record<BlogPost['category'], string> = {
  guide: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=300&h=200&fit=crop',
  awareness: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=300&h=200&fit=crop',
  industry: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=300&h=200&fit=crop',
  local: 'https://images.unsplash.com/photo-1518173946687-a4c036bc4add?w=300&h=200&fit=crop',
};

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<BlogPost['category'] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  const featuredPosts = getFeaturedPosts();

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    if (activeCategory) {
      posts = posts.filter(post => post.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.primaryKeyword.toLowerCase().includes(query) ||
        post.secondaryKeywords.some(kw => kw.toLowerCase().includes(query))
      );
    }

    return posts;
  }, [searchQuery, activeCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  // Reset to page 1 when filters change
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryFilter = (category: BlogPost['category'] | null) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const getPostUrl = (post: BlogPost) => {
    if (post.isAwareness && post.awarenessPath) {
      return post.awarenessPath;
    }
    return `/blog/${post.slug}`;
  };

  const clearFilters = () => {
    setSearchQuery('');
    setActiveCategory(null);
    setCurrentPage(1);
  };

  const hasActiveFilters = searchQuery.trim() || activeCategory;

  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of article list
    document.getElementById('articles-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getPageNumbers = () => {
    const pages: (number | 'ellipsis')[] = [];
    
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      
      if (currentPage > 3) pages.push('ellipsis');
      
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) pages.push(i);
      
      if (currentPage < totalPages - 2) pages.push('ellipsis');
      
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Biomass Pellets Blog | Industry Insights & Guides | Bathinda, Punjab"
        description="Expert articles on biomass pellets, stubble burning solutions, industrial fuel alternatives & sustainable energy for Punjab industries. Local insights from Bathinda."
        keywords="biomass pellets blog, Punjab energy insights, stubble burning solution, industrial fuel guide, Bathinda biomass"
        canonicalUrl="https://shreebalajienvirotech.com/blog"
      />

      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li className="flex items-center gap-2">
                <span>/</span>
                <span className="text-foreground font-medium">Blog</span>
              </li>
            </ol>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-primary mb-4">
              <Leaf className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Knowledge Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Biomass Pellets Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert insights on biomass energy, stubble management, and sustainable fuel solutions 
              for industries in Punjab and North India. Published from Bathinda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <main className="flex-1 min-w-0">
              {/* Active Filters Bar */}
              {hasActiveFilters && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-muted/50 rounded-lg border border-border flex flex-wrap items-center gap-3"
                >
                  <span className="text-sm text-muted-foreground">Active filters:</span>
                  
                  {searchQuery && (
                    <Badge variant="secondary" className="flex items-center gap-1.5">
                      <Search className="w-3 h-3" />
                      "{searchQuery}"
                      <button onClick={() => setSearchQuery('')} className="ml-1 hover:text-destructive">
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  )}
                  
                  {activeCategory && (
                    <Badge variant="secondary" className="flex items-center gap-1.5">
                      Category: {categoryLabels[activeCategory]}
                      <button onClick={() => setActiveCategory(null)} className="ml-1 hover:text-destructive">
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  )}

                  <Button variant="ghost" size="sm" onClick={clearFilters} className="ml-auto">
                    Clear All
                  </Button>
                </motion.div>
              )}

              {/* Results Count */}
              <div className="mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filteredPosts.length}</span> 
                  {filteredPosts.length === 1 ? ' article' : ' articles'}
                  {activeCategory && <span> in <span className="text-primary">{categoryLabels[activeCategory]}</span></span>}
                </p>
              </div>

              {/* Featured Posts (only show when no filters) */}
              {!hasActiveFilters && featuredPosts.length > 0 && (
                <div className="mb-12">
                  <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xl font-bold text-foreground mb-6 flex items-center gap-2"
                  >
                    <span className="w-8 h-1 bg-primary rounded-full" />
                    Featured Articles
                  </motion.h2>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    {featuredPosts.slice(0, 2).map((post) => (
                      <motion.div key={post.slug} variants={fadeInUp}>
                        <Link to={getPostUrl(post)}>
                          <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 group overflow-hidden">
                            <div className="aspect-[16/9] relative overflow-hidden">
                              <img 
                                src={categoryThumbnails[post.category]} 
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                              <div className="absolute bottom-4 left-4 right-4">
                                <Badge className={categoryColors[post.category]}>
                                  {categoryLabels[post.category]}
                                </Badge>
                              </div>
                            </div>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                                {post.title}
                              </CardTitle>
                              <CardDescription className="line-clamp-2">
                                {post.excerpt}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="flex items-center justify-between text-sm text-muted-foreground">
                                <div className="flex items-center gap-3">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {post.publishDate}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {post.readTime}
                                  </span>
                                </div>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary" />
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}

              {/* All Posts List */}
              <div id="articles-list">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-xl font-bold text-foreground mb-6 flex items-center gap-2"
                >
                  <span className="w-8 h-1 bg-secondary rounded-full" />
                  {hasActiveFilters ? 'Search Results' : 'All Articles'}
                </motion.h2>

                {filteredPosts.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12 bg-muted/30 rounded-xl border border-dashed border-border"
                  >
                    <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">No articles found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search or filter criteria
                    </p>
                    <Button onClick={clearFilters}>Clear Filters</Button>
                  </motion.div>
                ) : (
                  <>
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-4"
                      key={currentPage} // Re-animate on page change
                    >
                      {paginatedPosts.map((post) => (
                        <motion.div key={post.slug} variants={fadeInUp}>
                          <Link to={getPostUrl(post)}>
                            <Card className="hover:shadow-md transition-all duration-300 hover:border-primary/50 group overflow-hidden">
                              <CardContent className="p-0">
                                <div className="flex flex-col sm:flex-row">
                                  {/* Thumbnail */}
                                  <div className="sm:w-48 md:w-56 flex-shrink-0">
                                    <div className="aspect-[16/10] sm:h-full relative overflow-hidden">
                                      <img 
                                        src={categoryThumbnails[post.category]} 
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                      />
                                    </div>
                                  </div>
                                  
                                  {/* Content */}
                                  <div className="flex-1 p-5">
                                    <div className="flex items-center gap-2 mb-2">
                                      <Badge className={`${categoryColors[post.category]} text-xs`}>
                                        {categoryLabels[post.category]}
                                      </Badge>
                                      {post.featured && (
                                        <Badge variant="outline" className="border-secondary text-secondary text-xs">
                                          Featured
                                        </Badge>
                                      )}
                                    </div>
                                    
                                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                                      {post.title}
                                    </h3>
                                    
                                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                                      {post.excerpt}
                                    </p>
                                    
                                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                                      <span className="flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {post.publishDate}
                                      </span>
                                      <span className="flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5" />
                                        {post.readTime}
                                      </span>
                                      <span className="hidden md:flex items-center gap-1">
                                        <Tag className="w-3.5 h-3.5" />
                                        {post.primaryKeyword}
                                      </span>
                                      <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform text-primary" />
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border"
                      >
                        <p className="text-sm text-muted-foreground">
                          Showing {((currentPage - 1) * POSTS_PER_PAGE) + 1}-{Math.min(currentPage * POSTS_PER_PAGE, filteredPosts.length)} of {filteredPosts.length} articles
                        </p>
                        
                        <div className="flex items-center gap-1">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="h-9 w-9"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          
                          {getPageNumbers().map((page, index) => (
                            page === 'ellipsis' ? (
                              <span key={`ellipsis-${index}`} className="px-2 text-muted-foreground">...</span>
                            ) : (
                              <Button
                                key={page}
                                variant={currentPage === page ? 'default' : 'outline'}
                                size="icon"
                                onClick={() => goToPage(page)}
                                className="h-9 w-9"
                              >
                                {page}
                              </Button>
                            )
                          ))}
                          
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="h-9 w-9"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </>
                )}
              </div>
            </main>

            {/* Sidebar */}
            <BlogSidebar 
              onSearch={handleSearch}
              onCategoryFilter={handleCategoryFilter}
              activeCategory={activeCategory}
            />
          </div>
        </div>
      </section>

      {/* Local CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Biomass Pellets in Punjab?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Get premium quality biomass pellets delivered across Bathinda, Ludhiana, Jalandhar, 
              Amritsar, and all of North India. Contact us for bulk pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get a Quote
              </Link>
              <a
                href="tel:+916280610158"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                Call: +91 62806 10158
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

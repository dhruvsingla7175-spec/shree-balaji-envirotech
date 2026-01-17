import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Leaf, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { blogPosts, getFeaturedPosts } from '@/data/blogPosts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const categoryLabels = {
  guide: 'Guide',
  awareness: 'Awareness',
  industry: 'Industry News',
  local: 'Local Focus',
};

const categoryColors = {
  guide: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  awareness: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
  industry: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  local: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
};

const Blog = () => {
  const featuredPosts = getFeaturedPosts();

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
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
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

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2"
            >
              <span className="w-10 h-1 bg-primary rounded-full" />
              Featured Articles
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {featuredPosts.map((post) => (
                <motion.div key={post.slug} variants={fadeInUp}>
                  <Link to={`/blog/${post.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 group">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={categoryColors[post.category]}>
                            {categoryLabels[post.category]}
                          </Badge>
                          {post.featured && (
                            <Badge variant="outline" className="border-secondary text-secondary">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
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
        </section>
      )}

      {/* All Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2"
          >
            <span className="w-10 h-1 bg-secondary rounded-full" />
            All Articles
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.slug} variants={fadeInUp}>
                <Link to={`/blog/${post.slug}`}>
                  <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary/50 group">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={categoryColors[post.category]}>
                              {categoryLabels[post.category]}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-3">{post.excerpt}</p>
                          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                            <Tag className="w-3 h-3" />
                            {post.secondaryKeywords.slice(0, 3).map((keyword, index) => (
                              <span key={index} className="bg-muted px-2 py-0.5 rounded">
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex md:flex-col items-center gap-4 md:gap-2 text-sm text-muted-foreground md:text-right">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.publishDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
                href="tel:+918360410158"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                Call: +91 83604 10158
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

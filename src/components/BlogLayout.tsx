import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail, MapPin, Calendar, Clock, User, ChevronRight, Home } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Button } from './ui/button';

interface BlogLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  author?: string;
  publishDate?: string;
  readTime?: string;
  breadcrumbs?: { label: string; href: string }[];
  showCTA?: boolean;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const BlogLayout = ({
  children,
  title,
  subtitle,
  author = 'Shree Balaji Envirotech Team',
  publishDate,
  readTime,
  breadcrumbs = [],
  showCTA = true,
}: BlogLayoutProps) => {
  const location = useLocation();
  const isAwarenessPage = location.pathname.startsWith('/awareness');
  const backLink = isAwarenessPage ? '/' : '/blog';
  const backLabel = isAwarenessPage ? 'Back to Home' : 'Back to Blog';

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
            aria-label="Breadcrumb"
          >
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
              <li>
                <Link to="/" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
                  <Link to={crumb.href} className="hover:text-primary transition-colors">
                    {crumb.label}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-1.5">
                <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
                <span className="text-foreground font-medium truncate max-w-[250px] md:max-w-[400px]">{title}</span>
              </li>
            </ol>
          </motion.nav>

          {/* Back Button */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-6">
            <Link to={backLink} className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>{backLabel}</span>
            </Link>
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 max-w-4xl"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p 
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-6"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Meta Info */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
          >
            {author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{author}</span>
              </div>
            )}
            {publishDate && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{publishDate}</span>
              </div>
            )}
            {readTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground"
          >
            {children}
          </motion.div>

          {/* Local CTA */}
          {showCTA && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 rounded-2xl border border-primary/20"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Get Premium Biomass Pellets in Bathinda, Punjab
              </h3>
              <p className="text-muted-foreground mb-6">
                Looking for reliable biomass pellet suppliers near you? Shree Balaji Envirotech LLP delivers 
                high-quality, eco-friendly biomass pellets across Punjab, Haryana, and North India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="tel:+918360410158">
                    <Phone className="w-4 h-4 mr-2" />
                    Call: +91 83604 10158
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="mailto:dhruv@shreebalajienvirotech.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Serving Bathinda, Ludhiana, Jalandhar, Amritsar, Patiala & all of Punjab</span>
              </div>
            </motion.div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogLayout;

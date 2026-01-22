import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Phone, MessageCircle, Mail, MapPin, 
  ChevronRight, Home, AlertTriangle, TrendingUp, 
  CheckCircle, IndianRupee, Factory, Leaf, Shield,
  ArrowRight, Zap
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import RelatedPosts from './RelatedPosts';
import { Button } from './ui/button';
import FAQSection from './FAQSection';
import { BlogPost } from '@/data/blogPosts';

interface PainPoint {
  text: string;
}

interface Consequence {
  icon: string;
  text: string;
}

interface Benefit {
  icon: ReactNode;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface CaseStudy {
  title: string;
  location: string;
  stats: { value: string; label: string }[];
}

interface FAQ {
  question: string;
  answer: string;
}

interface AwarenessPageProps {
  // SEO
  industry: string;
  industryIcon: ReactNode;
  heroTitle: string;
  heroSubtitle: string;
  
  // Pain Points Section
  painPointsTitle: string;
  painPoints: PainPoint[];
  
  // Industry Context (optional)
  industryContext?: {
    title: string;
    description: string;
    highlights: { icon: string; title: string; description: string }[];
    footer?: string;
  };
  
  // Consequences
  consequences: Consequence[];
  
  // Solution
  solutionTitle: string;
  pricingComparison: {
    biomassPrice: string;
    traditionalPrice: string;
    savingsText: string;
  };
  benefits: Benefit[];
  
  // Case Study (optional)
  caseStudy?: CaseStudy;
  
  // Trust Stats
  trustStats: Stat[];
  
  // CTA
  ctaTitle: string;
  ctaDescription: string;
  
  // FAQs
  faqs: FAQ[];
  
  // Related Posts
  currentSlug?: string;
  currentCategory?: BlogPost['category'];
  
  children?: ReactNode;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const AwarenessPageLayout = ({
  industry,
  industryIcon,
  heroTitle,
  heroSubtitle,
  painPointsTitle,
  painPoints,
  industryContext,
  consequences,
  solutionTitle,
  pricingComparison,
  benefits,
  caseStudy,
  trustStats,
  ctaTitle,
  ctaDescription,
  faqs,
  currentSlug,
  currentCategory = 'awareness',
  children
}: AwarenessPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link to="/" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
              </li>
              <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
              <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
              <li className="text-foreground font-medium">{industry}</li>
            </ol>
          </motion.nav>

          {/* Back Link */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="mb-6"
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Resources
            </Link>
          </motion.div>

          {/* Industry Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6"
          >
            {industryIcon}
            <span>{industry}</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-5xl leading-tight"
          >
            {heroTitle}
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8"
          >
            {heroSubtitle}
          </motion.p>

          {/* Quick Stats Row */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            {[
              { icon: <TrendingUp className="w-5 h-5" />, text: 'Save 20-40% on fuel' },
              { icon: <Leaf className="w-5 h-5" />, text: 'Carbon neutral' },
              { icon: <Shield className="w-5 h-5" />, text: 'NGT compliant' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-lg text-sm"
              >
                <span className="text-primary">{item.icon}</span>
                <span className="text-foreground font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-destructive/5 border-y border-destructive/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-destructive/10 rounded-xl">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {painPointsTitle}
                </h2>
                <p className="text-muted-foreground">The challenges {industry.toLowerCase()} face today</p>
              </div>
            </div>
            
            <div className="grid gap-3">
              {painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-card border border-destructive/20 rounded-xl hover:border-destructive/40 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-sm font-bold">{i + 1}</span>
                  </div>
                  <p className="text-foreground">{point.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Context Section */}
      {industryContext && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {industryContext.title}
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                {industryContext.description}
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {industryContext.highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-5 bg-gradient-to-br from-card to-accent/5 border border-border rounded-xl hover:shadow-lg transition-all group"
                  >
                    <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform">{item.icon}</span>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              
              {industryContext.footer && (
                <p className="text-muted-foreground p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <strong className="text-foreground">{industryContext.footer}</strong>
                </p>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Consequences Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              What High Fuel Costs Mean for Your Business
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {consequences.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                <Zap className="w-4 h-4" />
                The Solution
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {solutionTitle}
              </h2>
            </motion.div>

            {/* Pricing Comparison Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-2xl border border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                
                <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                      <IndianRupee className="w-10 h-10 text-primary" />
                      <span className="text-3xl md:text-4xl font-bold text-foreground">{pricingComparison.biomassPrice}</span>
                    </div>
                    <p className="text-muted-foreground">Biomass Pellets</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-muted-foreground/50">vs</div>
                  </div>
                  
                  <div className="flex-1 text-center lg:text-right">
                    <div className="flex items-center justify-center lg:justify-end gap-3 mb-3">
                      <span className="text-3xl md:text-4xl font-bold text-muted-foreground line-through">{pricingComparison.traditionalPrice}</span>
                    </div>
                    <p className="text-muted-foreground">Traditional Coal</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-primary/20 text-center">
                  <p className="text-lg text-foreground font-medium">
                    {pricingComparison.savingsText}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group p-6 bg-card border border-border rounded-xl hover:border-primary/30 hover:shadow-lg transition-all text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      {caseStudy && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="p-8 bg-card border border-border rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Factory className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-primary font-medium uppercase tracking-wider">Case Study</p>
                    <h3 className="text-xl font-bold text-foreground">{caseStudy.title}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {caseStudy.location}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {caseStudy.stats.map((stat, i) => (
                    <div key={i} className="text-center p-4 bg-primary/5 rounded-xl">
                      <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Trust Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Why {industry} Trust Shree Balaji Envirotech
            </h2>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {trustStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl text-center border border-primary/10"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              </div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                  {ctaTitle}
                </h2>
                <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-lg">
                  {ctaDescription}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 shadow-lg"
                  >
                    <a href="tel:+918360410158" className="gap-2">
                      <Phone className="w-5 h-5" />
                      Call: +91 83604 10158
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    <a 
                      href="https://wa.me/918360410158?text=Hi, I'm interested in biomass pellets for my business" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/80 text-sm">
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    shreebalajienvirotech@gmail.com
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Bathinda, Punjab
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FAQSection faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {currentSlug && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <RelatedPosts 
                currentSlug={currentSlug} 
                currentCategory={currentCategory} 
                maxPosts={3}
              />
            </div>
          </div>
        </section>
      )}

      {/* Additional Content */}
      {children}

      <Footer />
    </div>
  );
};

export default AwarenessPageLayout;

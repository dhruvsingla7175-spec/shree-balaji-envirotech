import BlogLayout from '@/components/BlogLayout';
import SEOHead from '@/components/SEOHead';
import FAQSection from '@/components/FAQSection';
import { getPostBySlug } from '@/data/blogPosts';
import { CheckCircle, MapPin, Phone, Mail, Star, Truck, Shield } from 'lucide-react';

const post = getPostBySlug('biomass-pellet-suppliers-near-bathinda')!;

const faqs = [
  {
    question: "Who is the best biomass pellet supplier in Bathinda?",
    answer: "Shree Balaji Envirotech is a leading biomass pellet manufacturer in Bathinda, offering agro-waste and wood pellets with consistent quality, competitive pricing, and reliable delivery across Punjab. Contact: +91 83604 10158."
  },
  {
    question: "What should I check before buying biomass pellets?",
    answer: "Key quality parameters to verify: moisture content (<10%), calorific value (>4000 Kcal/kg), ash content (<5%), and pellet dimensions (6-8mm diameter). Ask for test certificates and conduct a trial order before bulk purchase."
  },
  {
    question: "Do biomass pellet suppliers in Bathinda deliver to other cities?",
    answer: "Yes. Major suppliers like Shree Balaji Envirotech deliver across Punjab including Ludhiana, Jalandhar, Amritsar, Patiala, and Chandigarh. Delivery charges vary based on distance—typically Rs 500-1,500/ton beyond 100km."
  },
  {
    question: "What's the minimum order quantity for biomass pellets in Bathinda?",
    answer: "Most Bathinda suppliers accept orders from 10 tons onwards. Bulk orders of 50+ tons typically receive 5-10% discounts. Contact suppliers directly for specific MOQ and pricing."
  },
  {
    question: "Can I visit a biomass pellet factory in Bathinda before buying?",
    answer: "Yes. Reputable manufacturers welcome factory visits. Seeing the production facility, storage conditions, and quality testing processes helps verify supplier capabilities. Call ahead to schedule."
  }
];

const BiomassSuppliersNearBathinda = () => {
  return (
    <>
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={[post.primaryKeyword, ...post.secondaryKeywords].join(', ')}
        canonicalUrl={`https://shreebalajienvirotech.com/blog/${post.slug}`}
        ogType="article"
        publishedDate={post.modifiedDate}
      />

      <BlogLayout
        title={post.title}
        subtitle={post.excerpt}
        publishDate={post.publishDate}
        readTime={post.readTime}
        breadcrumbs={[{ label: 'Blog', href: '/blog' }]}
      >
        {/* Featured Supplier */}
        <section className="mb-12">
          <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/30">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-secondary fill-secondary" />
              <span className="text-sm font-medium text-secondary">Featured Manufacturer</span>
            </div>
            
            <h2 className="text-2xl font-bold text-foreground mb-4">Shree Balaji Envirotech</h2>
            
            <p className="text-muted-foreground mb-6">
              A leading biomass pellet manufacturer in Bathinda, Punjab, offering premium quality agro-waste 
              and wood pellets for industrial applications. Serving industries across Punjab, Haryana, and 
              North India since establishment.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Bathinda, Punjab, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+918360410158" className="text-sm text-primary hover:underline">+91 83604 10158</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:shreebalajienvirotech@gmail.com" className="text-sm text-primary hover:underline">shreebalajienvirotech@gmail.com</a>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground text-sm">Products Available:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Agro-Waste Pellets (Rice Husk, Paddy Straw)</li>
                  <li>• Wood Pellets (Sawdust, Wood Chips)</li>
                  <li>• Mixed Biomass Pellets</li>
                  <li>• Premium Industrial Grade Pellets</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {['ISO Certified', 'Bulk Supply', 'Pan-Punjab Delivery', 'Quality Tested', 'Competitive Pricing'].map((badge) => (
                <span key={badge} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed">
            Bathinda has emerged as a biomass pellet manufacturing hub in Punjab, thanks to its central 
            location in the state's agricultural heartland. Whether you're a textile mill in Ludhiana, 
            a brick kiln in Jalandhar, or a processing plant in Amritsar, Bathinda-based suppliers offer 
            competitive pricing and reliable supply chains.
          </p>
          <p className="mt-4">
            This guide helps you find and evaluate biomass pellet suppliers near Bathinda with a focus 
            on quality verification, pricing, and delivery capabilities.
          </p>
        </section>

        {/* Why Bathinda */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Bathinda for Biomass Pellets?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🌾',
                title: 'Agricultural Hub',
                description: 'Surrounded by rice and wheat cultivation zones providing abundant raw material year-round.'
              },
              {
                icon: '🚛',
                title: 'Central Location',
                description: 'Excellent road connectivity to all major Punjab cities within 150-200km radius.'
              },
              {
                icon: '💰',
                title: 'Cost Advantage',
                description: 'Lower raw material and production costs translate to competitive pellet prices.'
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-card border border-border rounded-xl text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quality Checklist */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Quality Checklist: What to Verify</h2>
          
          <p className="mb-6 text-muted-foreground">
            Not all pellet suppliers are equal. Use this checklist to evaluate potential suppliers:
          </p>

          <div className="space-y-4">
            {[
              {
                category: 'Product Quality',
                items: [
                  'Moisture content <10% (preferably <8%)',
                  'Calorific value >4000 Kcal/kg with test certificate',
                  'Ash content <5% (lower is better)',
                  'Consistent pellet size (6-8mm diameter)',
                  'No visible dust or broken pellets in bags'
                ]
              },
              {
                category: 'Manufacturing Capability',
                items: [
                  'Own production facility (not just trading)',
                  'Adequate capacity for your volume needs',
                  'Quality control processes in place',
                  'Proper raw material storage (moisture control)',
                  'Willingness to show factory'
                ]
              },
              {
                category: 'Business Practices',
                items: [
                  'GST registration and proper invoicing',
                  'Clear pricing with no hidden charges',
                  'Sample/trial order availability',
                  'Written quality specifications',
                  'References from existing customers'
                ]
              },
              {
                category: 'Delivery & Support',
                items: [
                  'Reliable delivery schedule',
                  'Proper packaging (moisture-proof bags)',
                  'Transparent transport cost calculation',
                  'Responsive to queries and complaints',
                  'Bulk storage guidance available'
                ]
              }
            ].map((section, index) => (
              <div key={index} className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  {section.category}
                </h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery Coverage */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Delivery Coverage from Bathinda</h2>
          
          <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
            <Truck className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <p className="text-muted-foreground mb-4">
                Bathinda's strategic location enables efficient delivery across Punjab and neighboring states. 
                Typical delivery timelines:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-2 font-semibold">Destination</th>
                      <th className="text-left p-2 font-semibold">Distance</th>
                      <th className="text-left p-2 font-semibold">Delivery Time</th>
                      <th className="text-left p-2 font-semibold">Est. Transport Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Bathinda (Local)', '0-30 km', 'Same day', 'Free/Minimal'],
                      ['Ludhiana', '150 km', '1 day', 'Rs 600-800/ton'],
                      ['Jalandhar', '180 km', '1 day', 'Rs 700-900/ton'],
                      ['Amritsar', '200 km', '1-2 days', 'Rs 800-1,000/ton'],
                      ['Patiala/Mohali', '140 km', '1 day', 'Rs 500-700/ton'],
                      ['Chandigarh', '170 km', '1 day', 'Rs 600-800/ton'],
                      ['Delhi NCR', '280 km', '2 days', 'Rs 1,000-1,500/ton'],
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-border/50 hover:bg-muted/50">
                        <td className="p-2">{row[0]}</td>
                        <td className="p-2 text-muted-foreground">{row[1]}</td>
                        <td className="p-2 text-muted-foreground">{row[2]}</td>
                        <td className="p-2 text-primary font-medium">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Buying Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Recommended Buying Process</h2>
          
          <div className="space-y-4">
            {[
              {
                step: 'Initial Inquiry',
                description: 'Contact supplier with your requirements: pellet type, volume, delivery location. Ask for quotation and specifications.'
              },
              {
                step: 'Verify Credentials',
                description: 'Check GST registration, ask for references, and review any certifications or test reports.'
              },
              {
                step: 'Request Samples',
                description: 'Get 50-100 kg samples for testing in your equipment. Check moisture, combustion quality, and ash.'
              },
              {
                step: 'Trial Order',
                description: 'Place initial order of 10-20 tons to verify supply reliability, delivery, and product consistency.'
              },
              {
                step: 'Negotiate Terms',
                description: 'For regular supply, negotiate bulk pricing, payment terms, and delivery schedule. Consider annual contracts.'
              },
              {
                step: 'Establish Relationship',
                description: 'Maintain communication for quality feedback, advance ordering, and addressing any issues promptly.'
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-4 bg-card border border-border rounded-lg">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.step}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Red Flags */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Red Flags: What to Avoid</h2>
          
          <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
            <ul className="space-y-3">
              {[
                'No factory visit allowed or excuses when you request one',
                'Significantly lower prices than market (likely quality compromise)',
                'No proper GST invoicing or cash-only transactions',
                'Unwillingness to provide test certificates or samples',
                'Vague specifications or "varies by batch" answers',
                'No references or unwilling to share customer contacts',
                'Demand for full payment before delivery'
              ].map((flag, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <div className="p-8 bg-gradient-to-br from-primary to-primary/80 rounded-2xl text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4">Ready to Source Biomass Pellets?</h2>
            <p className="mb-6 text-primary-foreground/90">
              Shree Balaji Envirotech offers premium biomass pellets with transparent pricing, 
              quality certification, and reliable delivery across Punjab. Contact us for samples and quotes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+918360410158"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call: +91 83604 10158
              </a>
              <a
                href="mailto:shreebalajienvirotech@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Request Quote & Samples
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQSection faqs={faqs} />

        {/* Related */}
        <section className="mt-12 pt-8 border-t border-border">
          <h3 className="font-semibold text-foreground mb-4">Related Articles</h3>
          <ul className="space-y-2">
            <li>
              <a href="/blog/biomass-pellet-price-punjab-2025" className="text-primary hover:underline">
                → Biomass Pellet Prices in Punjab 2025: Complete Market Analysis
              </a>
            </li>
            <li>
              <a href="/blog/biomass-pellets-complete-guide-punjab" className="text-primary hover:underline">
                → Biomass Pellets: Complete Guide for Industries in Punjab
              </a>
            </li>
            <li>
              <a href="/blog/coal-to-biomass-switch-industrial-boilers" className="text-primary hover:underline">
                → Switch from Coal to Biomass Pellets: Complete Industrial Guide
              </a>
            </li>
          </ul>
        </section>
      </BlogLayout>
    </>
  );
};

export default BiomassSuppliersNearBathinda;

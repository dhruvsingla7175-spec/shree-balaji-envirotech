import BlogLayout from '@/components/BlogLayout';
import SEOHead from '@/components/SEOHead';
import FAQSection from '@/components/FAQSection';
import { getPostBySlug } from '@/data/blogPosts';
import { TrendingUp, TrendingDown, Calendar, Phone } from 'lucide-react';

const post = getPostBySlug('biomass-pellet-price-punjab-2025')!;

const faqs = [
  {
    question: "What is the current price of biomass pellets in Bathinda?",
    answer: "As of January 2025, biomass pellet prices in Bathinda range from Rs 6,500-8,500 per ton depending on type. Agro-waste pellets are Rs 6,500-7,500/ton, while wood pellets are Rs 7,500-8,500/ton. Contact Shree Balaji Envirotech at +91 83604 10158 for current bulk pricing."
  },
  {
    question: "Do biomass pellet prices change seasonally?",
    answer: "Yes. Prices are typically lowest post-harvest (November-January) when raw material is abundant, and highest during monsoon (July-September) when moisture affects supply. Plan purchases around these cycles for best rates."
  },
  {
    question: "What's the minimum order quantity for biomass pellets?",
    answer: "Most suppliers including Shree Balaji Envirotech accept orders from 10 tons onwards. Bulk orders (50+ tons) typically receive 5-10% discounts. Long-term contracts offer the best pricing stability."
  },
  {
    question: "How do biomass pellet prices compare to coal prices in Punjab?",
    answer: "Coal currently costs Rs 10,000-12,000/ton in Punjab. On a cost-per-energy basis, biomass pellets at Rs 6,500-8,500/ton provide 20-35% savings even accounting for the slight energy density difference."
  },
  {
    question: "Will biomass pellet prices increase in 2025?",
    answer: "Prices are expected to remain stable or decrease slightly as more manufacturing capacity comes online. Government incentives and growing supply chains are keeping prices competitive against coal."
  }
];

const BiomassPelletPrice2025 = () => {
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
        {/* Price Summary */}
        <section className="mb-12">
          <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Updated: January 2025</span>
            </div>
            <h2 className="text-xl font-bold text-foreground mb-4">Quick Price Reference: Punjab Market</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { type: 'Agro-Waste Pellets', price: 'Rs 6,500-7,500', trend: 'stable' },
                { type: 'Wood Pellets', price: 'Rs 7,500-8,500', trend: 'stable' },
                { type: 'Mixed Biomass', price: 'Rs 7,000-8,000', trend: 'down' },
                { type: 'Premium Industrial', price: 'Rs 8,500-10,000', trend: 'up' },
              ].map((item, index) => (
                <div key={index} className="p-4 bg-background rounded-lg border border-border">
                  <div className="text-sm text-muted-foreground mb-1">{item.type}</div>
                  <div className="text-xl font-bold text-primary mb-2">{item.price}</div>
                  <div className={`flex items-center gap-1 text-xs ${
                    item.trend === 'up' ? 'text-amber-600' : 
                    item.trend === 'down' ? 'text-green-600' : 'text-muted-foreground'
                  }`}>
                    {item.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : 
                     item.trend === 'down' ? <TrendingDown className="w-3 h-3" /> : null}
                    {item.trend === 'up' ? 'Slight increase' : 
                     item.trend === 'down' ? 'Decreasing' : 'Stable'}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              *Prices are per metric ton, ex-factory Bathinda. Transport additional based on distance.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed">
            Biomass pellet prices in Punjab remain competitive against coal in 2025, with most varieties 
            offering 20-35% cost savings per unit of energy. This analysis covers current market rates, 
            price trends, and factors affecting costs across different pellet types.
          </p>
        </section>

        {/* Detailed Pricing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Detailed Price Breakdown by Type</h2>
          
          {[
            {
              type: 'Agro-Waste Pellets',
              price: 'Rs 6,500-7,500/ton',
              materials: 'Rice husk, wheat straw, paddy straw, corn cobs',
              calorific: '3,800-4,200 Kcal/kg',
              bestFor: 'Brick kilns, small-medium boilers, cost-sensitive applications',
              availability: 'High (abundant raw material in Punjab)',
              notes: 'Most economical option. Price drops post-harvest season.'
            },
            {
              type: 'Wood Pellets',
              price: 'Rs 7,500-8,500/ton',
              materials: 'Sawdust, wood chips, furniture factory waste',
              calorific: '4,200-4,500 Kcal/kg',
              bestFor: 'Textile mills, food processing, pharmaceutical',
              availability: 'Medium (dependent on wood processing industry)',
              notes: 'Higher energy density justifies premium. Preferred for sensitive applications.'
            },
            {
              type: 'Mixed Biomass Pellets',
              price: 'Rs 7,000-8,000/ton',
              materials: 'Combination of agricultural and wood waste',
              calorific: '4,000-4,300 Kcal/kg',
              bestFor: 'General industrial heating, versatile applications',
              availability: 'High (flexible sourcing)',
              notes: 'Good balance of price and performance. Most popular choice.'
            },
            {
              type: 'Premium Industrial Pellets',
              price: 'Rs 8,500-10,000/ton',
              materials: 'Selected high-grade feedstock, quality controlled',
              calorific: '4,400-4,800 Kcal/kg',
              bestFor: 'Co-firing power plants, high-efficiency boilers, export',
              availability: 'Limited (specialized production)',
              notes: 'Meets international standards. Lowest ash content.'
            }
          ].map((pellet, index) => (
            <div key={index} className="mb-6 p-6 bg-card border border-border rounded-xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{pellet.type}</h3>
                  <p className="text-2xl font-bold text-primary mt-1">{pellet.price}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                    {pellet.calorific}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    pellet.availability === 'High' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    pellet.availability === 'Medium' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' :
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {pellet.availability} availability
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Raw Materials:</span>
                  <p className="text-foreground">{pellet.materials}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Best For:</span>
                  <p className="text-foreground">{pellet.bestFor}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground italic">{pellet.notes}</p>
            </div>
          ))}
        </section>

        {/* Price Factors */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Factors Affecting Biomass Pellet Prices</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                factor: 'Seasonal Availability',
                impact: 'High',
                description: 'Post-harvest (Oct-Jan) sees lowest prices due to abundant raw material. Monsoon season (Jul-Sep) sees highest prices.'
              },
              {
                factor: 'Raw Material Costs',
                impact: 'High',
                description: 'Paddy straw at Rs 1,500-2,500/ton, wood waste at Rs 2,000-3,000/ton. Directly impacts final pellet price.'
              },
              {
                factor: 'Transport Distance',
                impact: 'Medium',
                description: 'Add Rs 500-1,500/ton for delivery beyond 100km from Bathinda. Bulk orders may include free delivery.'
              },
              {
                factor: 'Order Volume',
                impact: 'Medium',
                description: 'Bulk orders (50+ tons) receive 5-10% discount. Annual contracts offer best price stability.'
              },
              {
                factor: 'Quality Specifications',
                impact: 'Medium',
                description: 'Lower moisture (<8%), higher calorific value command premium prices. Standard specs are most competitive.'
              },
              {
                factor: 'Government Policies',
                impact: 'Low-Medium',
                description: 'GST at 5% (vs 18% for coal). Subsidies on equipment reduce production costs over time.'
              }
            ].map((item, index) => (
              <div key={index} className="p-4 bg-card border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{item.factor}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    item.impact === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                    item.impact === 'Medium' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' :
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}>
                    {item.impact} Impact
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Regional Prices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Regional Price Variations Across Punjab</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border border-border p-3 text-left font-semibold">City/Region</th>
                  <th className="border border-border p-3 text-center font-semibold">Agro-Waste</th>
                  <th className="border border-border p-3 text-center font-semibold">Wood Pellets</th>
                  <th className="border border-border p-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Bathinda (Manufacturing Hub)', 'Rs 6,500-7,200', 'Rs 7,500-8,200', 'Ex-factory prices, lowest in Punjab'],
                  ['Ludhiana', 'Rs 7,000-7,700', 'Rs 8,000-8,700', 'High industrial demand, add transport'],
                  ['Jalandhar', 'Rs 7,200-7,900', 'Rs 8,200-8,900', 'Growing market, competitive suppliers'],
                  ['Amritsar', 'Rs 7,300-8,000', 'Rs 8,300-9,000', 'Border region, good availability'],
                  ['Patiala/Mohali', 'Rs 7,000-7,700', 'Rs 8,000-8,700', 'Close to Bathinda manufacturing'],
                  ['Chandigarh (UT)', 'Rs 7,500-8,200', 'Rs 8,500-9,200', 'Premium market, quality focus'],
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-muted/50">
                    <td className="border border-border p-3 font-medium">{row[0]}</td>
                    <td className="border border-border p-3 text-center text-primary">{row[1]}</td>
                    <td className="border border-border p-3 text-center text-primary">{row[2]}</td>
                    <td className="border border-border p-3 text-sm text-muted-foreground">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Price Forecast */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">2025 Price Forecast & Trends</h2>
          
          <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <TrendingDown className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Overall Outlook: Stable to Declining</h3>
                <p className="text-muted-foreground">
                  Biomass pellet prices in Punjab are expected to remain stable or decline slightly through 2025 
                  due to increased manufacturing capacity, government incentives, and mature supply chains.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-background rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Q1 2025 (Jan-Mar)</h4>
                <p className="text-sm text-muted-foreground">
                  Lowest prices due to post-harvest abundance. Ideal time for bulk purchases and annual contracts.
                </p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Q2 2025 (Apr-Jun)</h4>
                <p className="text-sm text-muted-foreground">
                  Slight increase as stored raw material depletes. Summer demand from industries stable.
                </p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Q3 2025 (Jul-Sep)</h4>
                <p className="text-sm text-muted-foreground">
                  Peak prices during monsoon. Moisture affects raw material quality and availability.
                </p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Q4 2025 (Oct-Dec)</h4>
                <p className="text-sm text-muted-foreground">
                  Prices drop as new harvest brings fresh raw material. Anti-stubble burning initiatives boost supply.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Buying Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Tips for Getting Best Prices</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Buy in bulk (50+ tons) for 5-10% discounts',
              'Sign annual contracts for price stability',
              'Purchase post-harvest (Nov-Jan) for lowest rates',
              'Choose manufacturers with nearby facilities',
              'Verify quality specs to avoid hidden costs',
              'Consider mixed pellets for best value'
            ].map((tip, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <span className="text-muted-foreground">{tip}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <div className="p-8 bg-gradient-to-br from-primary to-primary/80 rounded-2xl text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4">Get Current Prices for Your Requirements</h2>
            <p className="mb-6 text-primary-foreground/90">
              Prices vary based on volume, pellet type, and delivery location. Contact Shree Balaji Envirotech 
              for accurate quotes tailored to your specific needs.
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
                href="mailto:dhruv@shreebalajienvirotech.com"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Request Bulk Pricing
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
              <a href="/blog/biomass-pellets-complete-guide-punjab" className="text-primary hover:underline">
                → Biomass Pellets: Complete Guide for Industries in Punjab
              </a>
            </li>
            <li>
              <a href="/blog/biomass-pellet-suppliers-near-bathinda" className="text-primary hover:underline">
                → Biomass Pellet Suppliers Near Bathinda: Buying Guide 2025
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

export default BiomassPelletPrice2025;

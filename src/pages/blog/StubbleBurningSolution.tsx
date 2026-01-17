import BlogLayout from '@/components/BlogLayout';
import SEOHead from '@/components/SEOHead';
import FAQSection from '@/components/FAQSection';
import { getPostBySlug } from '@/data/blogPosts';
import { AlertTriangle, CheckCircle, Leaf, TrendingUp, Phone, IndianRupee } from 'lucide-react';

const post = getPostBySlug('stubble-burning-solution-punjab-biomass-pellets')!;

const faqs = [
  {
    question: "How much can farmers earn from selling paddy straw for pellet production?",
    answer: "Farmers can earn Rs 1,500-2,500 per ton of paddy straw sold to pellet manufacturers. With average yield of 3-4 tons per acre, this translates to Rs 4,500-10,000 additional income per acre instead of burning. Contact Shree Balaji Envirotech in Bathinda for current buying rates."
  },
  {
    question: "What government subsidies are available for biomass pellet conversion in Punjab?",
    answer: "Punjab offers subsidies under the Crop Residue Management scheme—up to 80% subsidy for individual farmers and 50% for cooperatives on straw management equipment. Additionally, industries get GST benefits and accelerated depreciation for biomass equipment."
  },
  {
    question: "How does biomass pellet production reduce stubble burning?",
    answer: "Pellet manufacturers buy paddy straw directly from farmers at competitive rates, removing the economic incentive to burn. The straw is processed into high-value fuel pellets, creating a profitable supply chain instead of waste burning."
  },
  {
    question: "Can small farmers participate in stubble-to-pellet programs?",
    answer: "Yes. Aggregator models allow small farmers to pool their straw for collection. Shree Balaji Envirotech works with farmer cooperatives across Punjab, providing collection services even for holdings under 5 acres."
  },
  {
    question: "What's the environmental impact of converting stubble to pellets?",
    answer: "Converting 1 ton of paddy straw to pellets instead of burning prevents 1.5 tons of CO2 equivalent emissions. Punjab burns ~20 million tons annually—pellet conversion could prevent 30 million tons of carbon emissions each year."
  }
];

const StubbleBurningSolution = () => {
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
        {/* Problem Statement */}
        <section className="mb-12">
          <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">The Crisis: 20 Million Tons of Paddy Straw Burned Annually</h2>
                <p className="text-muted-foreground">
                  Every October-November, Punjab's skies turn toxic. Farmers burn paddy straw (parali) because 
                  there's no profitable alternative—and the smoke blankets North India for weeks. AQI levels 
                  exceed 500. Schools close. Health emergencies spike. Fines don't work because farmers have 
                  no choice.
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed">
            <strong>But there is a solution.</strong> The same paddy straw that creates pollution when burned 
            becomes a valuable industrial fuel when converted to biomass pellets. Punjab's "waste" is actually 
            worth Rs 3,000+ crore as renewable energy—if we build the infrastructure to process it.
          </p>
        </section>

        {/* The Numbers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">The Scale of Punjab's Stubble Problem</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: '20M+', label: 'Tons of straw burned yearly', color: 'text-red-600' },
              { value: '15 Days', label: 'Average burning window', color: 'text-amber-600' },
              { value: 'Rs 2,500/acre', label: 'Cost to farmers for non-burn disposal', color: 'text-foreground' },
              { value: '30M tons', label: 'CO2 emissions from burning', color: 'text-red-600' },
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-card border border-border rounded-xl text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Farmers Burn */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Do Farmers Burn Stubble?</h2>
          
          <p className="mb-6">
            Understanding the problem is key to fixing it. Farmers don't burn straw because they're 
            careless—they burn it because current alternatives are expensive and time-consuming:
          </p>

          <ul className="space-y-4">
            {[
              {
                problem: 'Tight sowing window',
                detail: 'Only 15-20 days between rice harvest and wheat sowing. Burning clears fields fastest.'
              },
              {
                problem: 'Cost of alternatives',
                detail: 'Mulching or removing straw costs Rs 2,000-3,000 per acre—unaffordable for marginal farmers.'
              },
              {
                problem: 'No buyers for straw',
                detail: 'Without accessible buyers, straw has no value. Burning costs nothing.'
              },
              {
                problem: 'Equipment unavailability',
                detail: 'Happy Seeders and balers are scarce. Rental queues exceed the short sowing window.'
              }
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </span>
                <div>
                  <strong className="text-foreground">{item.problem}:</strong>
                  <span className="text-muted-foreground ml-1">{item.detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* The Solution */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Solution: Biomass Pellet Production</h2>
          
          <div className="flex items-start gap-4 mb-6">
            <Leaf className="w-8 h-8 text-primary flex-shrink-0" />
            <p className="text-lg">
              <strong>Convert parali to profit.</strong> Biomass pellet plants buy paddy straw from farmers, 
              process it into standardized fuel pellets, and sell to industries as a coal replacement. 
              Everyone wins.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'For Farmers',
                icon: '👨‍🌾',
                benefits: [
                  'Earn Rs 1,500-2,500/ton for straw',
                  'Free field clearing in many cases',
                  'No fines for burning',
                  'Additional Rs 5,000-10,000 per acre'
                ]
              },
              {
                title: 'For Industries',
                icon: '🏭',
                benefits: [
                  '20-40% cheaper than coal',
                  'Carbon credit eligibility',
                  'ESG compliance',
                  'Reliable local supply'
                ]
              },
              {
                title: 'For Environment',
                icon: '🌍',
                benefits: [
                  'Zero field burning',
                  'Carbon-neutral energy',
                  '30M tons CO2 reduction potential',
                  'Clean air for North India'
                ]
              }
            ].map((column, index) => (
              <div key={index} className="p-6 bg-card border border-border rounded-xl">
                <div className="text-3xl mb-3">{column.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Economics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Economics: Making Stubble Profitable</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border border-border p-3 text-left font-semibold">Cost/Revenue Item</th>
                  <th className="border border-border p-3 text-left font-semibold">Amount (per ton)</th>
                  <th className="border border-border p-3 text-left font-semibold">Who Benefits</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Farmer receives for straw', 'Rs 1,500-2,500', 'Farmer'],
                  ['Collection & transport', 'Rs 800-1,200', 'Local transporters'],
                  ['Processing to pellets', 'Rs 1,500-2,000', 'Pellet manufacturer'],
                  ['Pellet selling price', 'Rs 6,500-8,500', 'Industry fuel cost'],
                  ['Industry savings vs coal', 'Rs 1,500-3,000', 'End user'],
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-muted/50">
                    <td className="border border-border p-3">{row[0]}</td>
                    <td className="border border-border p-3 text-primary font-semibold">{row[1]}</td>
                    <td className="border border-border p-3 text-muted-foreground">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 flex items-start gap-3">
            <IndianRupee className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Key Insight:</strong> The entire supply chain is profitable 
              without subsidies. Government incentives make it even more attractive.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">How It Works: From Field to Factory</h2>
          
          <div className="space-y-4">
            {[
              {
                step: 'Straw Collection',
                description: 'Baling machines collect straw immediately after harvest. Farmers either sell at field or arrange transport to collection centers.'
              },
              {
                step: 'Transport to Facility',
                description: 'Collected straw is transported to pellet manufacturing plants. Shree Balaji Envirotech in Bathinda has dedicated logistics.'
              },
              {
                step: 'Processing & Pelletization',
                description: 'Straw is shredded, dried to <10% moisture, and compressed into 6-8mm pellets at high pressure.'
              },
              {
                step: 'Quality Testing',
                description: 'Each batch is tested for calorific value, moisture, and ash content before dispatch.'
              },
              {
                step: 'Delivery to Industries',
                description: 'Finished pellets are delivered to factories across Punjab, Haryana, and North India as coal replacement.'
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

        {/* Government Support */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Government Incentives & Support</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <h3 className="font-bold text-foreground mb-3">For Farmers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 80% subsidy on straw management equipment</li>
                <li>• Free baler rentals through cooperatives</li>
                <li>• Bonus payments for non-burning districts</li>
                <li>• Crop insurance benefits</li>
              </ul>
            </div>
            <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <h3 className="font-bold text-foreground mb-3">For Industries</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 5% GST on biomass vs 18% on coal</li>
                <li>• Accelerated depreciation on equipment</li>
                <li>• Carbon credit eligibility</li>
                <li>• State pollution board incentives</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Success in the Field</h2>
          
          <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <TrendingUp className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2">Growing Adoption Across Punjab</h3>
                <p className="text-muted-foreground">
                  Districts like Sangrur, Patiala, and Bathinda are seeing rapid growth in pellet production. 
                  Shree Balaji Envirotech LLP works with 200+ farmers annually, converting thousands of tons 
                  of paddy straw into clean fuel.
                </p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary">50,000+</div>
                <div className="text-sm text-muted-foreground">Tons processed yearly</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-secondary">200+</div>
                <div className="text-sm text-muted-foreground">Partner farmers</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary">Rs 5 Cr+</div>
                <div className="text-sm text-muted-foreground">Annual farmer earnings</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <div className="p-8 bg-gradient-to-br from-primary to-primary/80 rounded-2xl text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4">Join the Solution</h2>
            <p className="mb-6 text-primary-foreground/90">
              Whether you're a farmer looking to sell straw or an industry seeking cleaner fuel, 
              Shree Balaji Envirotech LLP connects both sides of the solution.
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
                Email: dhruv@shreebalajienvirotech.com
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
              <a href="/blog/coal-to-biomass-switch-industrial-boilers" className="text-primary hover:underline">
                → Switch from Coal to Biomass Pellets: Complete Industrial Guide
              </a>
            </li>
            <li>
              <a href="/awareness/industrial-fuel-costs-punjab" className="text-primary hover:underline">
                → Industrial Fuel Costs Crushing Punjab Businesses? Here's the Fix
              </a>
            </li>
          </ul>
        </section>
      </BlogLayout>
    </>
  );
};

export default StubbleBurningSolution;

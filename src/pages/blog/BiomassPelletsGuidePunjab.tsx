import BlogLayout from '@/components/BlogLayout';
import SEOHead from '@/components/SEOHead';
import FAQSection from '@/components/FAQSection';
import { getPostBySlug } from '@/data/blogPosts';
import { CheckCircle, AlertTriangle, TrendingUp, Truck, Phone } from 'lucide-react';

const post = getPostBySlug('biomass-pellets-complete-guide-punjab')!;

const faqs = [
  {
    question: "What is the price of biomass pellets in Punjab?",
    answer: "Biomass pellet prices in Punjab range from Rs 6,500-10,000 per ton depending on the type. Agro-waste pellets cost Rs 6,500-7,500/ton, wood pellets Rs 7,500-8,500/ton, and premium industrial pellets Rs 8,500-10,000/ton. Contact Shree Balaji Envirotech in Bathinda for current bulk pricing."
  },
  {
    question: "Can I use biomass pellets in my existing coal boiler?",
    answer: "Yes, most coal boilers can be converted to use biomass pellets with minor modifications. The conversion typically costs Rs 50,000-2,00,000 depending on boiler size. Many Punjab industries have successfully made this switch, saving 20-40% on fuel costs."
  },
  {
    question: "What calorific value do biomass pellets offer?",
    answer: "Quality biomass pellets offer 3,800-4,800 Kcal/kg calorific value. Agro-waste pellets provide 3,800-4,200 Kcal/kg, while premium wood pellets offer 4,200-4,800 Kcal/kg. This is comparable to B-grade coal but with significantly lower emissions."
  },
  {
    question: "Where can I buy biomass pellets near Bathinda?",
    answer: "Shree Balaji Envirotech LLP is a leading biomass pellet manufacturer in Bathinda, Punjab. We supply across Bathinda, Ludhiana, Jalandhar, Amritsar, Patiala, and all of North India. Call +91 83604 10158 for pricing and delivery."
  },
  {
    question: "Are biomass pellets eligible for carbon credits?",
    answer: "Yes, industries switching from coal to biomass pellets can earn carbon credits. Each ton of biomass pellets used instead of coal prevents approximately 1.8 tons of CO2 emissions. Several Punjab industries are already earning revenue from these credits."
  }
];

const BiomassPelletsGuidePunjab = () => {
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
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed">
            Punjab's industrial sector burns through thousands of crores worth of coal and fossil fuels annually. 
            Meanwhile, 20+ million tons of paddy straw gets burned in fields, creating Delhi's infamous smog. 
            <strong> Biomass pellets solve both problems</strong>—offering industries a cheaper, cleaner fuel 
            while converting agricultural waste into profit.
          </p>
          <p className="mt-4">
            This guide covers everything Punjab industries need to know: specifications, pricing, suppliers, 
            and the exact steps to switch from coal to biomass pellets.
          </p>
        </section>

        {/* What Are Biomass Pellets */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What Are Biomass Pellets?</h2>
          <p>
            Biomass pellets are compressed cylinders of organic material—agricultural waste, wood residue, 
            or industrial byproducts—processed into a standardized, high-energy fuel. For Punjab industries, 
            they represent a locally-sourced alternative to imported coal and expensive fossil fuels.
          </p>
          
          <div className="mt-6 p-6 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="font-semibold text-foreground mb-4">Key Advantages for Punjab Industries:</h3>
            <ul className="space-y-3">
              {[
                'Cost savings of 20-40% compared to coal and LPG',
                'Locally sourced from Punjab\'s agricultural waste',
                'Carbon-neutral operation for ESG compliance',
                'Consistent energy output with standardized specifications',
                'Government incentives and carbon credit eligibility'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Specifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Biomass Pellet Specifications</h2>
          <p className="mb-6">
            Quality specifications matter for efficient combustion and equipment longevity. 
            Here's what to look for when buying biomass pellets in Punjab:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border border-border p-3 text-left font-semibold">Parameter</th>
                  <th className="border border-border p-3 text-left font-semibold">Standard Value</th>
                  <th className="border border-border p-3 text-left font-semibold">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Diameter', '6-8 mm', 'Ensures consistent feeding in boilers'],
                  ['Length', '10-40 mm', 'Prevents jamming in feed systems'],
                  ['Moisture', '<10%', 'Higher moisture reduces calorific value'],
                  ['Calorific Value', '4,000-4,500 Kcal/kg', 'Determines energy output per kg'],
                  ['Ash Content', '<5%', 'Lower ash means less cleaning/maintenance'],
                  ['Bulk Density', '650-700 kg/m³', 'Affects storage and transport costs'],
                  ['Sulphur', '<0.05%', 'Critical for emission compliance'],
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-muted/50">
                    <td className="border border-border p-3 font-medium">{row[0]}</td>
                    <td className="border border-border p-3 text-primary font-semibold">{row[1]}</td>
                    <td className="border border-border p-3 text-muted-foreground">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Types and Pricing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Types of Biomass Pellets & Pricing in Punjab</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              {
                type: 'Agro-Waste Pellets',
                material: 'Rice husk, wheat straw, paddy straw',
                calorific: '3,800-4,200 Kcal/kg',
                price: 'Rs 6,500-7,500/ton',
                ideal: 'Brick kilns, small boilers, cost-sensitive applications'
              },
              {
                type: 'Wood Pellets',
                material: 'Sawdust, wood chips, furniture waste',
                calorific: '4,200-4,500 Kcal/kg',
                price: 'Rs 7,500-8,500/ton',
                ideal: 'Textile mills, food processing, pharmaceutical'
              },
              {
                type: 'Mixed Biomass Pellets',
                material: 'Multi-source agricultural waste',
                calorific: '4,000-4,300 Kcal/kg',
                price: 'Rs 7,000-8,000/ton',
                ideal: 'General industrial heating, power generation'
              },
              {
                type: 'Premium Industrial Pellets',
                material: 'Selected high-grade feedstock',
                calorific: '4,400-4,800 Kcal/kg',
                price: 'Rs 8,500-10,000/ton',
                ideal: 'High-efficiency boilers, co-firing power plants'
              }
            ].map((pellet, index) => (
              <div key={index} className="p-6 border border-border rounded-xl bg-card hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg text-foreground mb-3">{pellet.type}</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="text-muted-foreground">Raw Material:</span> <span className="text-foreground">{pellet.material}</span></p>
                  <p><span className="text-muted-foreground">Calorific Value:</span> <span className="text-primary font-semibold">{pellet.calorific}</span></p>
                  <p><span className="text-muted-foreground">Price (2025):</span> <span className="text-secondary font-bold">{pellet.price}</span></p>
                  <p><span className="text-muted-foreground">Ideal For:</span> <span className="text-foreground">{pellet.ideal}</span></p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/20 flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Price Note:</strong> Prices vary based on order volume, 
              delivery location, and seasonal availability. Contact us for current bulk pricing in Bathinda 
              and across Punjab.
            </p>
          </div>
        </section>

        {/* How to Switch */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">How to Switch from Coal to Biomass Pellets</h2>
          
          <div className="space-y-6">
            {[
              {
                step: '1. Assess Your Current Setup',
                description: 'Evaluate your existing boiler type, fuel consumption, and storage facilities. Most chain-grate and stoker boilers can use biomass pellets with minor modifications.'
              },
              {
                step: '2. Calculate Your Requirements',
                description: 'Biomass pellets have ~85% of coal\'s energy density. If you use 10 tons of coal monthly, plan for approximately 12 tons of pellets.'
              },
              {
                step: '3. Modify Feed Systems',
                description: 'Pellet feeding systems may need adjustments for optimal combustion. Cost: Rs 50,000-2,00,000 depending on boiler capacity.'
              },
              {
                step: '4. Arrange Storage',
                description: 'Pellets must be stored in dry conditions. A covered shed or silo system works best. Moisture ruins pellet quality.'
              },
              {
                step: '5. Trial Run',
                description: 'Start with a 10-20 ton trial order to test combustion efficiency and adjust settings before full-scale adoption.'
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.step}</h3>
                  <p className="text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Warning Section */}
        <section className="mb-12">
          <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Quality Matters: Avoid Low-Grade Pellets</h3>
                <p className="text-muted-foreground">
                  Cheap, low-quality pellets with high moisture or ash content will clog your equipment, 
                  reduce efficiency, and increase maintenance costs. Always verify specifications and 
                  choose certified manufacturers like Shree Balaji Envirotech LLP.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Delivery Across Punjab & North India</h2>
          
          <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
            <Truck className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <p className="text-muted-foreground mb-4">
                Shree Balaji Envirotech LLP delivers biomass pellets across Punjab and North India 
                from our manufacturing facility in Bathinda. Regular supply routes include:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Bathinda', 'Ludhiana', 'Jalandhar', 'Amritsar', 'Patiala', 'Mohali', 'Chandigarh', 'Ambala', 'Panipat', 'Karnal'].map((city) => (
                  <span key={city} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Box */}
        <section className="mb-12">
          <div className="p-8 bg-gradient-to-br from-primary to-primary/80 rounded-2xl text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4">Get Started with Biomass Pellets Today</h2>
            <p className="mb-6 text-primary-foreground/90">
              Ready to reduce fuel costs and meet sustainability goals? Contact Shree Balaji Envirotech LLP 
              for a free consultation and competitive pricing.
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
                Email for Bulk Pricing
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQSection faqs={faqs} />

        {/* Internal Links */}
        <section className="mt-12 pt-8 border-t border-border">
          <h3 className="font-semibold text-foreground mb-4">Related Articles</h3>
          <ul className="space-y-2">
            <li>
              <a href="/blog/stubble-burning-solution-punjab-biomass-pellets" className="text-primary hover:underline">
                → Stubble Burning in Punjab: How Biomass Pellets Solve the Crisis
              </a>
            </li>
            <li>
              <a href="/blog/coal-to-biomass-switch-industrial-boilers" className="text-primary hover:underline">
                → Switch from Coal to Biomass Pellets: Complete Industrial Guide
              </a>
            </li>
            <li>
              <a href="/blog/biomass-pellet-price-punjab-2025" className="text-primary hover:underline">
                → Biomass Pellet Prices in Punjab 2025: Complete Market Analysis
              </a>
            </li>
          </ul>
        </section>
      </BlogLayout>
    </>
  );
};

export default BiomassPelletsGuidePunjab;

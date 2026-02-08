import BlogLayout from '@/components/BlogLayout';
import SEOHead from '@/components/SEOHead';
import FAQSection from '@/components/FAQSection';
import { getPostBySlug } from '@/data/blogPosts';
import { CheckCircle, Leaf, Factory, Phone } from 'lucide-react';

const post = getPostBySlug('rice-husk-pellets-benefits-manufacturing')!;

const faqs = [
  {
    question: "What is the calorific value of rice husk pellets?",
    answer: "Rice husk pellets typically have a calorific value of 3,800-4,200 Kcal/kg, slightly lower than wood pellets but suitable for most industrial heating applications. The actual value depends on processing quality and moisture content."
  },
  {
    question: "How much rice husk is needed to make 1 ton of pellets?",
    answer: "Approximately 1.2-1.3 tons of raw rice husk is needed to produce 1 ton of pellets, accounting for moisture removal and processing losses. Punjab's rice mills generate abundant rice husk, making it a cost-effective raw material."
  },
  {
    question: "Are rice husk pellets suitable for steam boilers?",
    answer: "Yes. Rice husk pellets work well in most industrial steam boilers, particularly traveling grate and fluidized bed designs. Some minor adjustments to air-fuel ratios may be needed. Their consistent size and low moisture ensure stable combustion."
  },
  {
    question: "What's the ash content of rice husk pellets?",
    answer: "Rice husk pellets typically have 8-15% ash content, higher than wood pellets (3-5%). While this requires more frequent ash removal, the lower cost and abundant availability in Punjab often compensate for this."
  },
  {
    question: "Where can I buy rice husk pellets in Punjab?",
    answer: "Shree Balaji Envirotech in Bathinda manufactures rice husk and agro-waste pellets with delivery across Punjab. Contact +91 83604 10158 for pricing and availability."
  }
];

const RiceHuskPellets = () => {
  return (
    <>
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={[post.primaryKeyword, ...post.secondaryKeywords].join(', ')}
        canonicalUrl={`https://shreebalajienvirotech.com/blog/${post.slug}`}
        ogType="article"
        publishedDate={post.modifiedDate}
        breadcrumbs={[{ label: 'Blog', href: '/blog' }]}
      />

      <BlogLayout
        title={post.title}
        subtitle={post.excerpt}
        publishDate={post.publishDate}
        readTime={post.readTime}
        breadcrumbs={[{ label: 'Blog', href: '/blog' }]}
        currentSlug={post.slug}
        currentCategory={post.category}
      >
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed">
            Punjab processes over 12 million tons of paddy annually, generating millions of tons of rice husk 
            as a byproduct. Once considered waste, rice husk is now a valuable raw material for biomass 
            pellet production—offering industries an affordable, locally-sourced fuel alternative.
          </p>
        </section>

        {/* What Are Rice Husk Pellets */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What Are Rice Husk Pellets?</h2>
          
          <div className="flex items-start gap-4 mb-6">
            <Leaf className="w-8 h-8 text-primary flex-shrink-0" />
            <p>
              Rice husk pellets are compressed cylinders made from the outer covering of rice grains, 
              removed during milling. The husk is dried, ground, and compressed under high pressure 
              into uniform 6-8mm pellets suitable for industrial combustion.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border border-border p-3 text-left font-semibold">Specification</th>
                  <th className="border border-border p-3 text-left font-semibold">Value</th>
                  <th className="border border-border p-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Diameter', '6-8 mm', 'Standard industrial size'],
                  ['Length', '10-30 mm', 'Optimal for feed systems'],
                  ['Calorific Value', '3,800-4,200 Kcal/kg', 'Varies with processing'],
                  ['Moisture Content', '<10%', 'Critical for efficiency'],
                  ['Ash Content', '8-15%', 'Higher than wood pellets'],
                  ['Bulk Density', '600-650 kg/m³', 'Good for storage'],
                  ['Silica Content', '15-20%', 'Characteristic of rice husk'],
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-muted/50">
                    <td className="border border-border p-3 font-medium">{row[0]}</td>
                    <td className="border border-border p-3 text-primary font-semibold">{row[1]}</td>
                    <td className="border border-border p-3 text-muted-foreground text-sm">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Benefits of Rice Husk Pellets</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Cost-Effective',
                points: [
                  'Lowest cost among biomass pellets',
                  '30-40% cheaper than coal on energy basis',
                  'Abundant raw material in Punjab',
                  'Minimal transport costs from local rice mills'
                ]
              },
              {
                title: 'Environmentally Friendly',
                points: [
                  'Carbon-neutral combustion',
                  'Reduces rice mill waste burden',
                  'Lower emissions than fossil fuels',
                  'Supports circular economy'
                ]
              },
              {
                title: 'Reliable Supply',
                points: [
                  'Year-round availability in Punjab',
                  'Multiple rice mills as sources',
                  'Not dependent on seasonal harvest',
                  'Consistent quality possible'
                ]
              },
              {
                title: 'Industrial Compatibility',
                points: [
                  'Works in most existing boilers',
                  'Uniform size for automated feeding',
                  'Good combustion characteristics',
                  'Easy storage and handling'
                ]
              }
            ].map((section, index) => (
              <div key={index} className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-bold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Manufacturing Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Manufacturing Process</h2>
          
          <div className="flex items-start gap-4 mb-6">
            <Factory className="w-8 h-8 text-primary flex-shrink-0" />
            <p>
              Converting rice husk to pellets involves several stages to ensure quality and 
              combustion efficiency:
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                step: 'Collection & Storage',
                description: 'Fresh rice husk collected from mills. Stored in dry conditions to prevent moisture absorption and microbial growth.'
              },
              {
                step: 'Drying',
                description: 'Husk dried to <12% moisture using rotary dryers. Critical step—high moisture reduces calorific value and causes pellet breakage.'
              },
              {
                step: 'Grinding',
                description: 'Dried husk ground to uniform particle size (2-4mm) using hammer mills. Consistent sizing ensures smooth pelletization.'
              },
              {
                step: 'Conditioning',
                description: 'Ground material mixed with small amount of steam or water to activate natural lignin as binding agent.'
              },
              {
                step: 'Pelletization',
                description: 'Conditioned material forced through die holes under high pressure (100-200 bar). Friction heat further binds particles.'
              },
              {
                step: 'Cooling',
                description: 'Hot pellets cooled in counter-flow cooler to harden and stabilize. Reduces moisture to final <10% target.'
              },
              {
                step: 'Screening & Packing',
                description: 'Pellets screened to remove fines. Packed in 50kg moisture-resistant bags or stored in silos for bulk delivery.'
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

        {/* Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Industrial Applications</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { industry: 'Brick Kilns', suitability: 'Excellent', notes: 'Cost-effective heat source, handles higher ash' },
              { industry: 'Rice Mills', suitability: 'Excellent', notes: 'Uses own waste, self-sufficient energy' },
              { industry: 'Textile Mills', suitability: 'Good', notes: 'Steam generation, check ash handling capacity' },
              { industry: 'Food Processing', suitability: 'Good', notes: 'Heating/drying applications' },
              { industry: 'Distilleries', suitability: 'Excellent', notes: 'Steam boilers, cost reduction' },
              { industry: 'Power Generation', suitability: 'Good', notes: 'Co-firing, biomass power plants' },
            ].map((app, index) => (
              <div key={index} className="p-4 bg-card border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{app.industry}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    app.suitability === 'Excellent' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {app.suitability}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{app.notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Comparison: Rice Husk vs Wood Pellets</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border border-border p-3 text-left font-semibold">Parameter</th>
                  <th className="border border-border p-3 text-center font-semibold">Rice Husk Pellets</th>
                  <th className="border border-border p-3 text-center font-semibold">Wood Pellets</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Price per ton', 'Rs 6,500-7,500', 'Rs 7,500-8,500'],
                  ['Calorific Value', '3,800-4,200 Kcal/kg', '4,200-4,500 Kcal/kg'],
                  ['Ash Content', '8-15%', '3-5%'],
                  ['Availability in Punjab', 'High', 'Medium'],
                  ['Maintenance needs', 'Higher (ash handling)', 'Lower'],
                  ['Best for', 'Cost-sensitive, brick kilns', 'Premium applications'],
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-muted/50">
                    <td className="border border-border p-3 font-medium">{row[0]}</td>
                    <td className="border border-border p-3 text-center">{row[1]}</td>
                    <td className="border border-border p-3 text-center">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            <strong>Bottom Line:</strong> Choose rice husk pellets for maximum cost savings when ash 
            handling isn't a constraint. Choose wood pellets for premium applications requiring lower 
            ash and higher energy density.
          </p>
        </section>

        {/* Punjab Availability */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Rice Husk Availability in Punjab</h2>
          
          <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
            <div className="grid sm:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">12M+</div>
                <div className="text-sm text-muted-foreground">Tons paddy processed/year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2.5M+</div>
                <div className="text-sm text-muted-foreground">Tons rice husk generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2,000+</div>
                <div className="text-sm text-muted-foreground">Rice mills in Punjab</div>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm">
              Major rice milling clusters: Amritsar, Jalandhar, Ludhiana, Bathinda, Patiala, Karnal. 
              These areas offer the best raw material access for rice husk pellet production.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <div className="p-8 bg-gradient-to-br from-primary to-primary/80 rounded-2xl text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4">Get Rice Husk Pellets in Punjab</h2>
            <p className="mb-6 text-primary-foreground/90">
              Shree Balaji Envirotech LLP manufactures quality rice husk and agro-waste pellets 
              in Bathinda. Competitive pricing, reliable supply, delivery across Punjab.
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
                Email for Bulk Pricing
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQSection faqs={faqs} />
      </BlogLayout>
    </>
  );
};

export default RiceHuskPellets;

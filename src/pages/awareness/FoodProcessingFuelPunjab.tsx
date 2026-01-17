import BlogLayout from '@/components/BlogLayout';
import SEOHead from '@/components/SEOHead';
import FAQSection from '@/components/FAQSection';
import { AlertTriangle, Flame, CheckCircle, Phone, IndianRupee, Wheat, Leaf } from 'lucide-react';

const faqs = [
  {
    question: "Is biomass pellet fuel safe for food processing boilers?",
    answer: "Absolutely. Biomass pellets burn cleanly with no odor transfer or contamination risk. They're FSSAI-compliant and widely used by food processing units across India. The low ash and low sulphur content makes them ideal for food industry steam generation."
  },
  {
    question: "How much can food processing units save with biomass pellets?",
    answer: "Food processing units typically save 25-40% on fuel costs. A rice mill or flour mill spending Rs 5 lakhs monthly on coal/LPG can reduce costs to Rs 3-4 lakhs with biomass pellets."
  },
  {
    question: "Can par-boiling rice mills use biomass pellets?",
    answer: "Yes. Par-boiling requires consistent steam at 100-120°C, which biomass pellets provide reliably. Many rice mills in Punjab's rice belt have successfully switched from coal to biomass for par-boiling operations."
  },
  {
    question: "What about FSSAI and food safety compliance?",
    answer: "Biomass pellets help meet FSSAI's sustainability guidelines. They produce no toxic emissions or residues that could contaminate food products. Many food processing units cite biomass fuel as part of their food safety documentation."
  }
];

const FoodProcessingFuelPunjab = () => {
  return (
    <>
      <SEOHead
        title="Food Processing Units in Punjab: Cut Steam Costs 40% with Biomass | Bathinda"
        description="Punjab food processing units - rice mills, flour mills, oil mills - save 25-40% on steam fuel. Switch to clean biomass pellets. Supplier in Bathinda."
        keywords="food processing fuel Punjab, rice mill boiler fuel, biomass pellets food industry, steam generation Punjab, par boiling rice mill"
        canonicalUrl="https://shreebalajienvirotech.com/awareness/food-processing-fuel-punjab"
      />

      <BlogLayout
        title="Food Processing Units in Punjab: Are High Fuel Costs Eating Your Margins?"
        subtitle="How rice mills, flour mills, and food processors in Punjab are cutting steam costs by 25-40% with local biomass pellets"
        breadcrumbs={[{ label: 'Awareness', href: '/awareness/food-processing-fuel-punjab' }]}
      >
        {/* Pain Point */}
        <section className="mb-12">
          <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">The Fuel Burden on Punjab's Food Processors</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Rice mills running par-boiling units 18+ hours during season</li>
                  <li>• Coal at Rs 10,000-12,000/ton cutting into thin margins</li>
                  <li>• LPG prices making dryers and roasters expensive to operate</li>
                  <li>• Buyers demanding sustainability certifications</li>
                  <li>• Competition from larger, more efficient plants</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Punjab's Food Processing Sector: Fuel-Intensive Operations</h2>
          <p className="text-muted-foreground mb-4">
            Punjab is India's food bowl, with <strong className="text-foreground">4,000+ food processing units</strong> including 
            rice mills, flour mills, oil extraction plants, and food manufacturing facilities. These operations require:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { icon: '🍚', title: 'Rice Mills', desc: 'Par-boiling, drying, and steaming require continuous steam at 100-120°C' },
              { icon: '🌾', title: 'Flour Mills', desc: 'Steam for grain conditioning and processing equipment' },
              { icon: '🫒', title: 'Oil Mills', desc: 'High-heat extraction and refining processes' }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-card border border-border rounded-lg">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground">
            With razor-thin margins in commodity processing, <strong className="text-foreground">fuel costs directly impact profitability</strong>. 
            A 1 paisa saving per kg of processed grain multiplies into lakhs over a season.
          </p>
        </section>

        {/* Consequences */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What High Fuel Costs Mean for Food Processors</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '📉', text: 'Per-quintal processing margins shrinking' },
              { icon: '🏆', text: 'Larger mills with economies of scale gaining advantage' },
              { icon: '🌍', text: 'Export opportunities lost due to carbon footprint' },
              { icon: '💸', text: 'Seasonal cash flow stress from fuel expenses' },
              { icon: '🔥', text: 'Coal-related ash and maintenance issues' },
              { icon: '📋', text: 'Sustainability certifications becoming mandatory' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Solution: Clean Biomass Pellets for Food Processing</h2>
          <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 mb-6">
            <div className="flex items-start gap-4">
              <IndianRupee className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Save Rs 2-4 per quintal on processing costs
                </p>
                <p className="text-muted-foreground">
                  A rice mill processing 5,000 quintals daily during season can save 
                  <strong className="text-foreground"> Rs 10,000-20,000 per day</strong>—that's Rs 12-24 lakhs over a 4-month season.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-4">Why Biomass Pellets Are Ideal for Food Processing</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Flame className="w-6 h-6" />, title: 'Consistent Steam', desc: 'Stable heat output for precise temperature control' },
              { icon: <Leaf className="w-6 h-6" />, title: 'Clean Burning', desc: 'No odor transfer, FSSAI-safe for food operations' },
              { icon: <Wheat className="w-6 h-6" />, title: 'Local Sourcing', desc: 'Made from Punjab rice husk & agri-waste' },
              { icon: <CheckCircle className="w-6 h-6" />, title: 'Low Maintenance', desc: '3-5% ash vs 15-25% for coal, less cleaning' }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-card border border-border rounded-lg text-center">
                <div className="text-primary mx-auto mb-2 flex justify-center">{item.icon}</div>
                <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Food Safety Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Food Safety & Quality Benefits</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'No Contamination Risk', desc: 'Clean combustion with no smoke, soot, or chemical residues near food products' },
              { title: 'FSSAI Compliant', desc: 'Meets food safety standards for steam generation in food processing' },
              { title: 'Audit-Ready', desc: 'Document sustainable fuel use for buyer audits and certifications' }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-primary/5 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rice Mill Specific */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Special Advantage for Rice Mills</h2>
          <div className="p-6 bg-secondary/10 rounded-xl border border-secondary/30">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🍚</span>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Rice Husk Pellets: From Your Waste to Your Fuel</h3>
                <p className="text-muted-foreground mb-4">
                  Rice mills generate rice husk as a by-product. We convert this husk into premium pellets, 
                  offering rice mills a unique advantage:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong className="text-foreground">Sell your rice husk to us</strong> for cash</li>
                  <li>• <strong className="text-foreground">Buy back pellets</strong> at discounted rates</li>
                  <li>• <strong className="text-foreground">Double savings</strong>: revenue from husk + lower fuel costs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Trusted by Food Processors Across Punjab</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { stat: '30+', label: 'Food processing clients' },
              { stat: 'Bathinda', label: 'Central Punjab location' },
              { stat: '100%', label: 'Season supply guarantee' },
              { stat: '12hr', label: 'Delivery across Punjab' }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-primary/5 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">{item.stat}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <div className="p-8 bg-gradient-to-br from-primary to-primary/80 rounded-2xl text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4">Calculate Your Food Processing Fuel Savings</h2>
            <p className="mb-6 text-primary-foreground/90">
              Share your daily capacity and current fuel consumption—we'll show you exact monthly savings with biomass pellets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+918360410158" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
                <Phone className="w-5 h-5" />
                Call: +91 83604 10158
              </a>
              <a href="mailto:dhruv@shreebalajienvirotech.com" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Get Savings Estimate
              </a>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />
      </BlogLayout>
    </>
  );
};

export default FoodProcessingFuelPunjab;

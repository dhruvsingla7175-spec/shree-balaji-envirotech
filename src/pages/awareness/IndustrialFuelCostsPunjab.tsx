import BlogLayout from '@/components/BlogLayout';
import SEOHead from '@/components/SEOHead';
import FAQSection from '@/components/FAQSection';
import { AlertTriangle, TrendingUp, CheckCircle, Phone, IndianRupee } from 'lucide-react';

const faqs = [
  {
    question: "How much can Punjab industries save by switching to biomass pellets?",
    answer: "Industries typically save 20-40% on fuel costs by switching from coal to biomass pellets. A factory spending Rs 10 lakhs monthly on coal can reduce costs to Rs 6-8 lakhs with biomass pellets."
  },
  {
    question: "Is biomass pellet supply reliable in Punjab?",
    answer: "Yes. Punjab generates 20+ million tons of agricultural waste annually, ensuring abundant raw material. Manufacturers like Shree Balaji Envirotech in Bathinda provide year-round supply with delivery across the state."
  },
  {
    question: "Do I need to change my boiler to use biomass pellets?",
    answer: "Most existing coal boilers work with biomass pellets after minor modifications costing Rs 50,000-2,00,000. The conversion typically pays for itself within 3-6 months through fuel savings."
  }
];

const IndustrialFuelCostsPunjab = () => {
  return (
    <>
      <SEOHead
        title="Industrial Fuel Costs Crushing Punjab Businesses? Biomass Solution | Bathinda"
        description="Punjab industries losing lakhs to rising coal & diesel costs. Switch to biomass pellets - save 20-40% on fuel. Local supplier in Bathinda. Call now."
        keywords="industrial fuel costs Punjab, reduce fuel expenses, biomass pellets Bathinda, coal alternative Punjab, save fuel costs industry"
        canonicalUrl="https://shreebalajienvirotech.com/awareness/industrial-fuel-costs-punjab"
      />

      <BlogLayout
        title="Industrial Fuel Costs Crushing Your Punjab Business?"
        subtitle="How rising coal, diesel, and LPG prices are eating into profits—and the local solution that saves 20-40%"
        breadcrumbs={[{ label: 'Awareness', href: '/awareness/industrial-fuel-costs-punjab' }]}
      >
        {/* Pain Point */}
        <section className="mb-12">
          <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">The Problem Every Punjab Factory Owner Knows</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Coal prices up 40% in 3 years—Rs 10,000-12,000/ton and climbing</li>
                  <li>• Diesel for generators bleeding Rs 90+/litre from operations</li>
                  <li>• LPG costs making production margins paper-thin</li>
                  <li>• Pollution control board penalties adding to the burden</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Consequences */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What High Fuel Costs Are Costing You</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '📉', text: 'Profit margins shrinking every quarter' },
              { icon: '🏭', text: 'Competitors with better fuel strategy gaining edge' },
              { icon: '💼', text: 'Tough choices between quality and cost-cutting' },
              { icon: '🌫️', text: 'Environmental compliance becoming expensive' }
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
          <h2 className="text-2xl font-bold text-foreground mb-4">The Solution: Biomass Pellets from Punjab, for Punjab</h2>
          <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 mb-6">
            <div className="flex items-start gap-4">
              <IndianRupee className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Rs 6,500-8,500/ton vs Rs 10,000-12,000/ton for coal
                </p>
                <p className="text-muted-foreground">
                  That's 20-40% savings on fuel costs—every month, every year. For a factory burning 
                  50 tons monthly, that's Rs 1.5-2 lakh saved.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Locally Made', desc: 'Manufactured in Bathinda from Punjab agricultural waste' },
              { title: 'Drop-in Replacement', desc: 'Works in existing boilers with minor modifications' },
              { title: 'Carbon Neutral', desc: 'Meet ESG goals and avoid pollution penalties' }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-card border border-border rounded-lg text-center">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Signals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Punjab Industries Trust Shree Balaji Envirotech</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { stat: '50,000+', label: 'Tons supplied annually' },
              { stat: '100+', label: 'Industrial clients' },
              { stat: 'Same Day', label: 'Delivery in Bathinda region' },
              { stat: '24/7', label: 'Customer support' }
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
            <h2 className="text-2xl font-bold mb-4">Stop Losing Money to Expensive Fuel</h2>
            <p className="mb-6 text-primary-foreground/90">
              Get a free fuel cost analysis and see exactly how much your factory can save with biomass pellets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+918360410158" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
                <Phone className="w-5 h-5" />
                Call: +91 83604 10158
              </a>
              <a href="mailto:dhruv@shreebalajienvirotech.com" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Get Free Analysis
              </a>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />
      </BlogLayout>
    </>
  );
};

export default IndustrialFuelCostsPunjab;

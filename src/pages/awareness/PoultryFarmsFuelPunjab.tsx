import BlogLayout from '@/components/BlogLayout';
import SEOHead from '@/components/SEOHead';
import FAQSection from '@/components/FAQSection';
import { AlertTriangle, Flame, CheckCircle, Phone, IndianRupee, Egg } from 'lucide-react';

const faqs = [
  {
    question: "How much fuel do poultry farms in Punjab typically consume?",
    answer: "A medium poultry farm (10,000-50,000 birds) consumes 2-5 tons of fuel monthly for brooding, heating, and feed processing. Large integrated operations can use 10-20 tons monthly, especially during winter."
  },
  {
    question: "Can biomass pellets replace LPG/diesel for poultry heating?",
    answer: "Yes. Biomass pellet heaters provide consistent warmth (28-35°C) essential for chick brooding. Many Punjab poultry farms have switched from expensive LPG to biomass, cutting heating costs by 40-50%."
  },
  {
    question: "What about temperature consistency for sensitive chicks?",
    answer: "Modern biomass heaters with thermostatic controls maintain ±1°C consistency. Our premium pellets ensure steady heat output, critical for the first 21 days of brooding when temperature fluctuations can cause mortality."
  },
  {
    question: "Is biomass suitable for feed mill operations?",
    answer: "Absolutely. Integrated poultry operations using steam for feed pelletizing benefit significantly. Biomass pellets provide the 150-200°C steam required for feed conditioning and pelletizing."
  }
];

const PoultryFarmsFuelPunjab = () => {
  return (
    <>
      <SEOHead
        title="Poultry Farms Punjab: Cut Heating Costs 45% with Biomass Pellets | Brooder Fuel Alternative"
        description="Punjab poultry farms spending lakhs on LPG and diesel heating. Switch to biomass pellets - save 40-50% on brooding fuel. Supplier in Bathinda."
        keywords="poultry farm fuel Punjab, biomass pellets poultry, brooder heating fuel, poultry LPG alternative, reduce heating cost poultry farm"
        canonicalUrl="https://shreebalajienvirotech.com/awareness/poultry-farms-fuel-punjab"
      />

      <BlogLayout
        title="Poultry Farms in Punjab: Are Heating Costs Eating Your Profits?"
        subtitle="How expensive LPG and diesel impact poultry farming—and the biomass solution saving farms 40-50%"
        breadcrumbs={[{ label: 'Awareness', href: '/awareness/poultry-farms-fuel-punjab' }]}
      >
        {/* Pain Point */}
        <section className="mb-12">
          <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">The Heating Crisis Hitting Punjab Poultry Farms</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• LPG prices at Rs 1,100+/cylinder—unsustainable for continuous heating</li>
                  <li>• Diesel heaters costing Rs 90+/litre during winter months</li>
                  <li>• Brooding heat consuming 25-35% of operating costs</li>
                  <li>• Temperature fluctuations causing chick mortality losses</li>
                  <li>• Feed costs already at record highs, leaving no margin for fuel</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Punjab's Poultry Industry: The Heating Challenge</h2>
          <p className="text-muted-foreground mb-4">
            Punjab's poultry sector—with over <strong className="text-foreground">1,500 commercial farms</strong>—produces 
            crores of eggs and lakhs of broilers annually. These farms require consistent heating for:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { icon: '🐣', title: 'Chick Brooding', desc: 'Critical 32-35°C for first week, gradual reduction' },
              { icon: '❄️', title: 'Winter Heating', desc: 'Maintaining 20-25°C during cold Punjab winters' },
              { icon: '🌾', title: 'Feed Processing', desc: 'Steam for pelletizing in integrated operations' }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-card border border-border rounded-lg">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground">
            With heating comprising <strong className="text-foreground">20-30% of production costs</strong> during winter, 
            fuel efficiency directly impacts your per-bird profitability.
          </p>
        </section>

        {/* Consequences */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What High Heating Costs Mean for Your Poultry Farm</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '📉', text: 'Lower margins on every bird or egg produced' },
              { icon: '🐔', text: 'Underheating causing slow growth and mortality' },
              { icon: '💨', text: 'LPG cylinder shortages during peak winter demand' },
              { icon: '⚡', text: 'Electric heaters too expensive with current tariffs' },
              { icon: '💸', text: 'Unpredictable fuel costs making planning difficult' },
              { icon: '🏆', text: 'Losing competitiveness to larger integrated farms' }
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
          <h2 className="text-2xl font-bold text-foreground mb-4">The Solution: Biomass Pellet Heaters for Poultry</h2>
          <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 mb-6">
            <div className="flex items-start gap-4">
              <IndianRupee className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Rs 8/kg pellets vs Rs 45/kg for LPG equivalent heat
                </p>
                <p className="text-muted-foreground">
                  A 25,000-bird farm saves <strong className="text-foreground">Rs 40,000-60,000 per batch</strong> during 
                  winter brooding—that's Rs 2-3 lakhs annually just on heating costs.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-4">Why Biomass Pellets Work for Poultry Farms</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Flame className="w-6 h-6" />, title: 'Steady Warmth', desc: 'Consistent 28-35°C for optimal brooding' },
              { icon: <Egg className="w-6 h-6" />, title: 'Bird-Safe', desc: 'Low emissions, no toxic fumes in sheds' },
              { icon: <CheckCircle className="w-6 h-6" />, title: 'Easy Storage', desc: 'Compact pellets, no cylinder management' },
              { icon: <IndianRupee className="w-6 h-6" />, title: '50% Cheaper', desc: 'Half the cost of LPG heating' }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-card border border-border rounded-lg text-center">
                <div className="text-primary mx-auto mb-2 flex justify-center">{item.icon}</div>
                <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Study */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Real Results from Punjab Poultry Farms</h2>
          <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
            <div className="flex items-start gap-4">
              <Egg className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">30,000-Bird Broiler Farm in Sangrur</h3>
                <div className="grid sm:grid-cols-3 gap-4 text-center mt-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">Rs 55K</div>
                    <div className="text-sm text-muted-foreground">Saved per batch</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">2%</div>
                    <div className="text-sm text-muted-foreground">Lower mortality rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">Better</div>
                    <div className="text-sm text-muted-foreground">FCR achieved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Punjab Poultry Farms Trust Shree Balaji Envirotech</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { stat: '20+', label: 'Poultry farms served' },
              { stat: '500+', label: 'Tons delivered monthly' },
              { stat: 'Bagged', label: 'Convenient packaging' },
              { stat: 'Same day', label: 'Urgent delivery' }
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
            <h2 className="text-2xl font-bold mb-4">Get a Free Heating Cost Analysis for Your Poultry Farm</h2>
            <p className="mb-6 text-primary-foreground/90">
              We'll calculate your exact savings potential based on your flock size, current heating method, and seasonal requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+918360410158" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
                <Phone className="w-5 h-5" />
                Call: +91 83604 10158
              </a>
              <a href="mailto:dhruv@shreebalajienvirotech.com" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Request Free Analysis
              </a>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />
      </BlogLayout>
    </>
  );
};

export default PoultryFarmsFuelPunjab;

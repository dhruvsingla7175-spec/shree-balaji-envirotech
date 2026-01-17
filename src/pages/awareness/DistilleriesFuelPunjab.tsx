import BlogLayout from '@/components/BlogLayout';
import SEOHead from '@/components/SEOHead';
import FAQSection from '@/components/FAQSection';
import { AlertTriangle, Flame, CheckCircle, Phone, IndianRupee, Thermometer } from 'lucide-react';

const faqs = [
  {
    question: "How much fuel do distilleries in Punjab typically consume?",
    answer: "A medium distillery (50-100 KLPD capacity) consumes 15-30 tons of fuel daily for fermentation heating, distillation, and ENA production. Fuel costs can be 30-40% of operating expenses."
  },
  {
    question: "Can biomass pellets replace coal in distillery boilers?",
    answer: "Yes. Biomass pellets work excellently in distillery boilers, providing consistent steam at 8-15 kg/cm² pressure required for distillation columns. Many Punjab distilleries have switched successfully."
  },
  {
    question: "What about the high-temperature requirements for distillation?",
    answer: "Our premium pellets provide 3800-4500 kcal/kg, easily achieving the 100-180°C temperatures needed for various distillation stages. Temperature stability is often better than coal due to consistent pellet quality."
  },
  {
    question: "Is biomass compatible with existing molasses-based operations?",
    answer: "Absolutely. Biomass pellets integrate seamlessly with existing boiler infrastructure. Many distilleries using sugarcane bagasse supplement with our pellets during off-season or when bagasse supply is limited."
  }
];

const DistilleriesFuelPunjab = () => {
  return (
    <>
      <SEOHead
        title="Distilleries Punjab: Cut Fuel Costs 30% with Biomass Pellets | Ethanol Production"
        description="Punjab distilleries spending crores on coal annually. Switch to biomass pellets - save 25-35% on boiler fuel. Sustainable ethanol production solution."
        keywords="distillery fuel Punjab, biomass pellets distillery, ethanol production fuel, ENA boiler coal alternative, reduce fuel cost distillery"
        canonicalUrl="https://shreebalajienvirotech.com/awareness/distilleries-fuel-punjab"
      />

      <BlogLayout
        title="Distilleries in Punjab: Is Fuel Cost Diluting Your Profits?"
        subtitle="How rising energy prices impact ethanol and spirit production—and the biomass solution saving distilleries 25-35%"
        breadcrumbs={[{ label: 'Awareness', href: '/awareness/distilleries-fuel-punjab' }]}
      >
        {/* Pain Point */}
        <section className="mb-12">
          <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">The Fuel Crisis Hitting Punjab Distilleries</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Coal prices up 45%—eating into margins despite ethanol demand</li>
                  <li>• Distillation and fermentation consuming 50-60% of energy costs</li>
                  <li>• Bagasse availability inconsistent outside crushing season</li>
                  <li>• Government ethanol blending targets creating pressure to scale</li>
                  <li>• Emission norms tightening under new environmental regulations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Punjab's Distillery Industry: The Fuel Challenge</h2>
          <p className="text-muted-foreground mb-4">
            With India's ethanol blending program targeting 20% by 2025, Punjab's 
            <strong className="text-foreground"> 20+ distilleries</strong> are scaling production. 
            These plants run steam-intensive operations including:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { icon: '🔬', title: 'Fermentation', desc: 'Temperature-controlled molasses/grain processing' },
              { icon: '⚗️', title: 'Distillation', desc: 'Multi-column distillation at 78-100°C' },
              { icon: '🧪', title: 'ENA Production', desc: 'Extra Neutral Alcohol requiring precise steam control' }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-card border border-border rounded-lg">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground">
            With fuel comprising <strong className="text-foreground">30-40% of production costs</strong>, 
            efficient fuel management is critical for profitability in the competitive spirits market.
          </p>
        </section>

        {/* Consequences */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What High Fuel Costs Mean for Your Distillery</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '📉', text: 'Lower margins despite growing ethanol demand' },
              { icon: '🏆', text: 'Difficulty meeting government pricing for ethanol' },
              { icon: '🌾', text: 'Bagasse dependency creating seasonal challenges' },
              { icon: '⚖️', text: 'Emission compliance costs increasing' },
              { icon: '💸', text: 'Volatile fuel prices affecting financial planning' },
              { icon: '📊', text: 'Struggling to scale for ethanol blending targets' }
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
          <h2 className="text-2xl font-bold text-foreground mb-4">The Solution: Biomass Pellets for Distilleries</h2>
          <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 mb-6">
            <div className="flex items-start gap-4">
              <IndianRupee className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Rs 7,000-8,500/ton vs Rs 11,000-13,000/ton for coal
                </p>
                <p className="text-muted-foreground">
                  A distillery consuming 500 tons monthly saves <strong className="text-foreground">Rs 15-25 lakhs/month</strong>—that's 
                  Rs 1.8-3 crores annually improving your profitability.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-4">Why Biomass Pellets Work for Distilleries</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Flame className="w-6 h-6" />, title: 'High Heat Output', desc: '3800-4500 kcal/kg for distillation temperatures' },
              { icon: <Thermometer className="w-6 h-6" />, title: 'Precise Control', desc: 'Consistent heat for fermentation accuracy' },
              { icon: <CheckCircle className="w-6 h-6" />, title: 'Year-Round Supply', desc: 'No seasonal bagasse dependency' },
              { icon: <IndianRupee className="w-6 h-6" />, title: 'Carbon Benefits', desc: 'Green credentials for export markets' }
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
          <h2 className="text-2xl font-bold text-foreground mb-4">Real Results from Punjab Distilleries</h2>
          <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
            <div className="flex items-start gap-4">
              <Thermometer className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">75 KLPD Ethanol Distillery in Fazilka</h3>
                <div className="grid sm:grid-cols-3 gap-4 text-center mt-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">Rs 18L</div>
                    <div className="text-sm text-muted-foreground">Monthly fuel savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">4 months</div>
                    <div className="text-sm text-muted-foreground">Conversion ROI payback</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">365 days</div>
                    <div className="text-sm text-muted-foreground">Consistent supply</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Punjab Distilleries Trust Shree Balaji Envirotech</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { stat: '5+', label: 'Distilleries served' },
              { stat: '2,500+', label: 'Tons capacity monthly' },
              { stat: 'Bulk', label: 'Supply guaranteed' },
              { stat: '24/7', label: 'Delivery capability' }
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
            <h2 className="text-2xl font-bold mb-4">Get a Free Fuel Cost Analysis for Your Distillery</h2>
            <p className="mb-6 text-primary-foreground/90">
              We'll calculate your exact savings potential based on your production capacity, current fuel mix, and operational requirements.
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

export default DistilleriesFuelPunjab;

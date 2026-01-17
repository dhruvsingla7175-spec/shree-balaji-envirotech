import BlogLayout from '@/components/BlogLayout';
import SEOHead from '@/components/SEOHead';
import FAQSection from '@/components/FAQSection';
import { AlertTriangle, Flame, CheckCircle, Phone, IndianRupee, Wheat } from 'lucide-react';

const faqs = [
  {
    question: "How much fuel do rice mills in Punjab typically consume?",
    answer: "A medium-sized rice mill (50-100 TPD capacity) typically consumes 3-6 tons of fuel daily for parboiling, drying, and steam generation. Large mills can use 10-15 tons daily during peak paddy season."
  },
  {
    question: "Can biomass pellets replace coal in rice mill parboiling boilers?",
    answer: "Yes. Biomass pellets work excellently in parboiling boilers, providing consistent steam at the required 3-4 kg/cm² pressure. Many Amritsar and Kapurthala rice mills have switched successfully."
  },
  {
    question: "What's the cost comparison for rice mills switching to biomass?",
    answer: "At current prices, biomass pellets cost Rs 7,000-8,500/ton vs coal at Rs 11,000-13,000/ton. A rice mill using 100 tons monthly saves Rs 3-5 lakhs, which is Rs 18-30 lakhs during the 6-month milling season."
  },
  {
    question: "Is biomass suitable for rice husk-fired boilers?",
    answer: "Absolutely. Our pellets complement rice husk burning and can serve as the primary fuel when husk availability is low. Many mills use a 70-30 pellet-husk blend for optimal efficiency."
  }
];

const RiceMillsFuelPunjab = () => {
  return (
    <>
      <SEOHead
        title="Rice Mills Punjab: Cut Parboiling Fuel Costs 35% with Biomass Pellets | Amritsar, Kapurthala"
        description="Punjab rice mills spending lakhs on coal for parboiling. Switch to biomass pellets - save 30-40% on boiler fuel. Supplier in Bathinda serving Amritsar belt."
        keywords="rice mill fuel Punjab, biomass pellets Amritsar, parboiling boiler fuel, rice mill coal alternative, reduce fuel cost rice mill"
        canonicalUrl="https://shreebalajienvirotech.com/awareness/rice-mills-fuel-punjab"
      />

      <BlogLayout
        title="Rice Mills in Punjab: Is Expensive Fuel Eating Your Margins?"
        subtitle="How rising coal prices impact Punjab's rice milling industry—and the local biomass solution saving mills 30-40%"
        breadcrumbs={[{ label: 'Awareness', href: '/awareness/rice-mills-fuel-punjab' }]}
      >
        {/* Pain Point */}
        <section className="mb-12">
          <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">The Fuel Crisis Hitting Punjab Rice Mills</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Coal prices crossed Rs 12,000/ton—squeezing already thin margins</li>
                  <li>• Parboiling operations consuming 60-70% of total energy costs</li>
                  <li>• Rice husk availability declining as stubble management changes</li>
                  <li>• Export buyers demanding sustainability certifications</li>
                  <li>• Pollution board pressure increasing on coal-fired units</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Punjab's Rice Industry: The Fuel Challenge</h2>
          <p className="text-muted-foreground mb-4">
            Punjab—India's rice bowl—houses over <strong className="text-foreground">4,500 rice mills</strong> concentrated 
            in Amritsar, Kapurthala, Jalandhar, Gurdaspur, and Tarn Taran. These mills run boilers 
            continuously during the 6-month milling season for:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { icon: '🍚', title: 'Parboiling', desc: 'Soaking paddy in 65-70°C water for 4-6 hours' },
              { icon: '💨', title: 'Steam Generation', desc: 'High-pressure steam for paddy processing' },
              { icon: '☀️', title: 'Drying Operations', desc: 'Reducing moisture content to 12-14%' }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-card border border-border rounded-lg">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground">
            With fuel comprising <strong className="text-foreground">25-35% of milling costs</strong>, 
            every rupee saved directly improves your per-quintal profitability.
          </p>
        </section>

        {/* Consequences */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What High Fuel Costs Mean for Your Rice Mill</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '📉', text: 'Lower margins on every quintal of processed rice' },
              { icon: '🏆', text: 'Losing contracts to mills with better cost structures' },
              { icon: '🌾', text: 'Uncertainty when rice husk supply fluctuates' },
              { icon: '⚖️', text: 'Risk of NGT penalties for coal boiler emissions' },
              { icon: '💸', text: 'Cash flow pressure during peak season operations' },
              { icon: '🌍', text: 'Missing out on premium export markets requiring green certifications' }
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
          <h2 className="text-2xl font-bold text-foreground mb-4">The Solution: Biomass Pellets for Rice Mills</h2>
          <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 mb-6">
            <div className="flex items-start gap-4">
              <IndianRupee className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Rs 7,000-8,500/ton vs Rs 11,000-13,000/ton for coal
                </p>
                <p className="text-muted-foreground">
                  A rice mill consuming 150 tons during season saves <strong className="text-foreground">Rs 5-7 lakhs/month</strong>—that's 
                  Rs 30-42 lakhs over the milling season going back to your profits.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-4">Why Biomass Pellets Work for Rice Processing</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Flame className="w-6 h-6" />, title: 'High Heat Output', desc: '3800-4200 kcal/kg, perfect for parboiling temperatures' },
              { icon: <Wheat className="w-6 h-6" />, title: 'Husk Compatible', desc: 'Can blend with rice husk in existing boilers' },
              { icon: <CheckCircle className="w-6 h-6" />, title: 'Consistent Supply', desc: 'Reliable availability even when husk runs short' },
              { icon: <IndianRupee className="w-6 h-6" />, title: 'Stable Pricing', desc: 'Locally sourced, no global price volatility' }
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
          <h2 className="text-2xl font-bold text-foreground mb-4">Real Results from Punjab Rice Mills</h2>
          <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
            <div className="flex items-start gap-4">
              <Wheat className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">75 TPD Rice Mill in Kapurthala</h3>
                <div className="grid sm:grid-cols-3 gap-4 text-center mt-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">Rs 5.8L</div>
                    <div className="text-sm text-muted-foreground">Monthly fuel savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">60 days</div>
                    <div className="text-sm text-muted-foreground">Conversion ROI payback</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">Zero</div>
                    <div className="text-sm text-muted-foreground">Production disruption</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Punjab Rice Mills Trust Shree Balaji Envirotech</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { stat: '15+', label: 'Rice mills served' },
              { stat: '3,000+', label: 'Tons delivered to rice belt' },
              { stat: 'Bathinda', label: 'Central Punjab location' },
              { stat: '24hr', label: 'Delivery to Amritsar belt' }
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
            <h2 className="text-2xl font-bold mb-4">Get a Free Fuel Cost Analysis for Your Rice Mill</h2>
            <p className="mb-6 text-primary-foreground/90">
              We'll calculate your exact savings potential based on your milling capacity, current fuel mix, and seasonal operations.
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

export default RiceMillsFuelPunjab;

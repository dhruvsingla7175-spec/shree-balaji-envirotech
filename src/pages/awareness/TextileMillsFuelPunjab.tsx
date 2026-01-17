import BlogLayout from '@/components/BlogLayout';
import SEOHead from '@/components/SEOHead';
import FAQSection from '@/components/FAQSection';
import { AlertTriangle, Flame, CheckCircle, Phone, IndianRupee, Factory } from 'lucide-react';

const faqs = [
  {
    question: "How much can textile mills in Punjab save with biomass pellets?",
    answer: "Textile mills typically save 25-40% on fuel costs by switching to biomass pellets. A mill spending Rs 15 lakhs monthly on coal/diesel can reduce costs to Rs 9-11 lakhs with biomass pellets, saving Rs 48-72 lakhs annually."
  },
  {
    question: "Are biomass pellets suitable for textile dyeing boilers?",
    answer: "Yes. Biomass pellets provide consistent high heat (3800-4200 kcal/kg) ideal for dyeing processes requiring precise temperature control. Many Ludhiana and Bathinda textile units have successfully switched without production disruptions."
  },
  {
    question: "What modifications are needed for textile mill boilers?",
    answer: "Most textile mill boilers require minor grate and feed system modifications costing Rs 75,000-2,50,000. The conversion typically pays for itself within 2-4 months through fuel savings."
  },
  {
    question: "Can biomass pellets meet peak demand during dyeing cycles?",
    answer: "Absolutely. Our premium pellets have consistent density and moisture content, ensuring steady heat output during intensive dyeing and finishing operations. Many clients report better temperature stability than coal."
  }
];

const TextileMillsFuelPunjab = () => {
  return (
    <>
      <SEOHead
        title="Textile Mills in Punjab: Cut Fuel Costs 40% with Biomass Pellets | Ludhiana, Bathinda"
        description="Punjab textile mills losing lakhs to coal & diesel costs. Switch to biomass pellets - save 25-40% on boiler fuel. Supplier in Bathinda serving Ludhiana."
        keywords="textile mill fuel Punjab, biomass pellets Ludhiana, dyeing boiler fuel, textile industry coal alternative, reduce fuel cost textile mill"
        canonicalUrl="https://shreebalajienvirotech.com/awareness/textile-mills-fuel-punjab"
      />

      <BlogLayout
        title="Textile Mills in Punjab: Is Expensive Fuel Shrinking Your Margins?"
        subtitle="How rising coal and diesel prices are hitting Punjab's textile industry—and the local biomass solution saving mills 25-40%"
        breadcrumbs={[{ label: 'Awareness', href: '/awareness/textile-mills-fuel-punjab' }]}
      >
        {/* Pain Point */}
        <section className="mb-12">
          <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">The Fuel Crisis Hitting Punjab Textile Mills</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Coal prices at Rs 11,000-13,000/ton—up 45% in 3 years</li>
                  <li>• Diesel generators costing Rs 95+/litre during power cuts</li>
                  <li>• Dyeing and finishing operations consuming 60-70% of energy costs</li>
                  <li>• Pollution board scrutiny increasing on coal-fired boilers</li>
                  <li>• Export orders demanding carbon footprint documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Punjab's Textile Industry: The Fuel Challenge</h2>
          <p className="text-muted-foreground mb-4">
            Punjab's textile belt—spanning Ludhiana, Jalandhar, Amritsar, and Bathinda—houses over 
            <strong className="text-foreground"> 3,000 textile mills</strong> employing lakhs of workers. These mills 
            run steam boilers 16-20 hours daily for:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { icon: '🎨', title: 'Dyeing Operations', desc: 'Continuous steam for fabric processing at 120-140°C' },
              { icon: '🔥', title: 'Finishing & Calendering', desc: 'High-heat processes for fabric treatment' },
              { icon: '💨', title: 'Drying Systems', desc: 'Energy-intensive moisture removal' }
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
            every rupee saved on fuel directly improves margins and competitiveness.
          </p>
        </section>

        {/* Consequences */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What High Fuel Costs Mean for Your Mill</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '📉', text: 'Lower profit margins on every meter of fabric' },
              { icon: '🏆', text: 'Losing orders to mills with better cost structures' },
              { icon: '🌍', text: 'Failing sustainability audits from international buyers' },
              { icon: '⚖️', text: 'Risk of pollution board penalties and shutdowns' },
              { icon: '💸', text: 'Cash flow strain from volatile fuel prices' },
              { icon: '🔧', text: 'Older boilers becoming increasingly expensive to run' }
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
          <h2 className="text-2xl font-bold text-foreground mb-4">The Solution: Biomass Pellets Designed for Textile Mills</h2>
          <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 mb-6">
            <div className="flex items-start gap-4">
              <IndianRupee className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Rs 7,000-8,500/ton vs Rs 11,000-13,000/ton for coal
                </p>
                <p className="text-muted-foreground">
                  A textile mill consuming 100 tons of fuel monthly saves <strong className="text-foreground">Rs 3-5 lakhs/month</strong>—that's 
                  Rs 36-60 lakhs annually going back to your bottom line.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-4">Why Biomass Pellets Work for Textile Operations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Flame className="w-6 h-6" />, title: 'Consistent Heat', desc: '3800-4200 kcal/kg, ideal for dyeing temperature control' },
              { icon: <Factory className="w-6 h-6" />, title: 'Boiler Compatible', desc: 'Works with existing Lancashire & FBC boilers' },
              { icon: <CheckCircle className="w-6 h-6" />, title: 'Low Ash', desc: '3-5% ash content means less cleaning, more uptime' },
              { icon: <IndianRupee className="w-6 h-6" />, title: 'Stable Pricing', desc: 'Locally sourced, insulated from global fuel volatility' }
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
          <h2 className="text-2xl font-bold text-foreground mb-4">Real Results from Punjab Textile Mills</h2>
          <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
            <div className="flex items-start gap-4">
              <Factory className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Medium-Sized Dyeing Unit in Ludhiana</h3>
                <div className="grid sm:grid-cols-3 gap-4 text-center mt-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">Rs 4.2L</div>
                    <div className="text-sm text-muted-foreground">Monthly fuel savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">45 days</div>
                    <div className="text-sm text-muted-foreground">Conversion ROI payback</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Pollution compliance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Punjab Textile Mills Trust Shree Balaji Envirotech</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { stat: '25+', label: 'Textile mills served' },
              { stat: '5,000+', label: 'Tons delivered monthly' },
              { stat: 'Bathinda', label: 'Manufacturing base' },
              { stat: '24hr', label: 'Delivery to Ludhiana belt' }
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
            <h2 className="text-2xl font-bold mb-4">Get a Free Fuel Cost Analysis for Your Textile Mill</h2>
            <p className="mb-6 text-primary-foreground/90">
              We'll calculate your exact savings potential based on your current fuel consumption, boiler type, and production schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+918360410158" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
                <Phone className="w-5 h-5" />
                Call: +91 83604 10158
              </a>
              <a href="mailto:shreebalajienvirotech@gmail.com" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
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

export default TextileMillsFuelPunjab;

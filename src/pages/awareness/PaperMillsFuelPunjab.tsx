import BlogLayout from '@/components/BlogLayout';
import SEOHead from '@/components/SEOHead';
import FAQSection from '@/components/FAQSection';
import { AlertTriangle, Flame, CheckCircle, Phone, IndianRupee, FileText } from 'lucide-react';

const faqs = [
  {
    question: "How much fuel do paper mills in Punjab typically consume?",
    answer: "A medium paper mill (50-100 TPD) consumes 8-15 tons of fuel daily for pulping, drying, and steam generation. The paper drying section alone accounts for 60-70% of thermal energy requirements."
  },
  {
    question: "Can biomass pellets replace coal in paper mill boilers?",
    answer: "Yes. Biomass pellets work excellently in paper mill boilers, providing consistent steam at 10-15 kg/cm² pressure required for paper drying. Several North India paper mills have made successful transitions."
  },
  {
    question: "What about the moisture consistency requirements?",
    answer: "Our pellets have controlled moisture content (8-12%), ensuring consistent heat output essential for the precise temperature control needed in paper drying operations. Variance is minimal compared to coal."
  },
  {
    question: "Is biomass economically viable for kraft paper production?",
    answer: "Absolutely. Kraft paper production, with its high steam requirements, benefits significantly. Mills report 25-35% fuel cost savings, with ROI typically achieved within 4-6 months of switching."
  }
];

const PaperMillsFuelPunjab = () => {
  return (
    <>
      <SEOHead
        title="Paper Mills Punjab: Cut Fuel Costs 35% with Biomass Pellets | Sustainable Paper Production"
        description="Punjab paper mills spending crores on coal annually. Switch to biomass pellets - save 25-35% on boiler fuel. Supplier in Bathinda serving North India."
        keywords="paper mill fuel Punjab, biomass pellets paper industry, paper drying boiler fuel, kraft paper coal alternative, reduce fuel cost paper mill"
        canonicalUrl="https://shreebalajienvirotech.com/awareness/paper-mills-fuel-punjab"
      />

      <BlogLayout
        title="Paper Mills in Punjab: Is Coal Burning Your Profits?"
        subtitle="How rising fuel costs impact paper manufacturing—and the biomass solution saving mills 25-35%"
        breadcrumbs={[{ label: 'Awareness', href: '/awareness/paper-mills-fuel-punjab' }]}
      >
        {/* Pain Point */}
        <section className="mb-12">
          <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">The Fuel Crisis Hitting Paper Manufacturing</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Coal prices crossed Rs 12,000/ton—up 50% since 2021</li>
                  <li>• Paper drying operations consuming 60-70% of thermal energy</li>
                  <li>• Global sustainability demands from packaging buyers</li>
                  <li>• NGT and pollution board pressure on coal emissions</li>
                  <li>• Recycled paper mills facing even tighter margins</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Paper Industry: The Fuel Challenge</h2>
          <p className="text-muted-foreground mb-4">
            North India's paper industry serves the massive packaging, printing, and stationery markets. 
            These mills run <strong className="text-foreground">energy-intensive operations 24/7</strong> including:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { icon: '📄', title: 'Paper Drying', desc: 'Multi-cylinder dryers at 100-120°C continuous operation' },
              { icon: '🌊', title: 'Pulp Processing', desc: 'Steam for digesting and chemical recovery' },
              { icon: '♨️', title: 'Process Steam', desc: 'High-pressure steam for various mill operations' }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-card border border-border rounded-lg">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground">
            With fuel comprising <strong className="text-foreground">35-45% of production costs</strong>, 
            fuel efficiency directly determines your competitive position in the market.
          </p>
        </section>

        {/* Consequences */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What High Fuel Costs Mean for Your Paper Mill</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '📉', text: 'Compressed margins on every ton of paper produced' },
              { icon: '🏆', text: 'Losing orders to mills with better cost structures' },
              { icon: '🌍', text: 'Unable to meet sustainability requirements of MNC buyers' },
              { icon: '⚖️', text: 'Increasing compliance costs for emission control' },
              { icon: '💸', text: 'Cash flow strain from volatile coal prices' },
              { icon: '🏭', text: 'Older boilers becoming increasingly expensive to operate' }
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
          <h2 className="text-2xl font-bold text-foreground mb-4">The Solution: Biomass Pellets for Paper Mills</h2>
          <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 mb-6">
            <div className="flex items-start gap-4">
              <IndianRupee className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Rs 7,000-8,500/ton vs Rs 11,000-13,000/ton for coal
                </p>
                <p className="text-muted-foreground">
                  A paper mill consuming 300 tons monthly saves <strong className="text-foreground">Rs 10-15 lakhs/month</strong>—that's 
                  Rs 1.2-1.8 crores annually going back to your bottom line.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-4">Why Biomass Pellets Work for Paper Manufacturing</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Flame className="w-6 h-6" />, title: 'High Heat Output', desc: '3800-4500 kcal/kg, ideal for drying operations' },
              { icon: <FileText className="w-6 h-6" />, title: 'Clean Burning', desc: 'No paper contamination, meets quality standards' },
              { icon: <CheckCircle className="w-6 h-6" />, title: 'Bulk Supply', desc: 'Reliable 300+ ton monthly deliveries' },
              { icon: <IndianRupee className="w-6 h-6" />, title: 'Carbon Credits', desc: 'Earn credits while saving on fuel' }
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
          <h2 className="text-2xl font-bold text-foreground mb-4">Real Results from Paper Mills</h2>
          <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
            <div className="flex items-start gap-4">
              <FileText className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Kraft Paper Mill in North India</h3>
                <div className="grid sm:grid-cols-3 gap-4 text-center mt-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">Rs 12L</div>
                    <div className="text-sm text-muted-foreground">Monthly fuel savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">5 months</div>
                    <div className="text-sm text-muted-foreground">Conversion ROI payback</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">Green</div>
                    <div className="text-sm text-muted-foreground">Certification achieved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Paper Mills Trust Shree Balaji Envirotech</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { stat: '5+', label: 'Paper mills served' },
              { stat: '1,500+', label: 'Tons delivered monthly' },
              { stat: 'Consistent', label: 'Quality guaranteed' },
              { stat: 'Bulk', label: 'Pricing available' }
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
            <h2 className="text-2xl font-bold mb-4">Get a Free Fuel Cost Analysis for Your Paper Mill</h2>
            <p className="mb-6 text-primary-foreground/90">
              We'll calculate your exact savings potential based on your production capacity, current fuel consumption, and operational requirements.
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

export default PaperMillsFuelPunjab;

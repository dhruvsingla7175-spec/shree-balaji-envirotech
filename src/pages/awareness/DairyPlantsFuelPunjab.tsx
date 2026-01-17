import BlogLayout from '@/components/BlogLayout';
import SEOHead from '@/components/SEOHead';
import FAQSection from '@/components/FAQSection';
import { AlertTriangle, Flame, CheckCircle, Phone, IndianRupee, Milk } from 'lucide-react';

const faqs = [
  {
    question: "How much fuel do dairy plants in Punjab typically consume?",
    answer: "A medium-sized dairy plant processing 50,000-1,00,000 liters daily uses 2-5 tons of fuel for pasteurization, spray drying, and steam generation. Larger plants can consume 8-12 tons daily."
  },
  {
    question: "Can biomass pellets maintain precise temperatures for pasteurization?",
    answer: "Yes. Our premium pellets provide consistent heat output (3800-4200 kcal/kg) ensuring stable steam temperatures essential for HTST and UHT pasteurization processes. Temperature variance is within ±2°C."
  },
  {
    question: "What's the ROI for dairy plants switching to biomass?",
    answer: "Most dairy plants see ROI in 3-6 months. With savings of Rs 3,000-5,000 per ton of fuel, a plant using 100 tons monthly saves Rs 3-5 lakhs, paying off conversion costs quickly."
  },
  {
    question: "Is biomass suitable for spray dryers in milk powder production?",
    answer: "Absolutely. Biomass pellets provide the high-temperature steam (180-200°C) required for spray drying. Several Punjab dairy plants have successfully switched their spray dryer boilers to biomass."
  }
];

const DairyPlantsFuelPunjab = () => {
  return (
    <>
      <SEOHead
        title="Dairy Plants Punjab: Cut Steam Costs 35% with Biomass Pellets | Ludhiana, Jalandhar"
        description="Punjab dairy processing plants spending lakhs on fuel. Switch to biomass pellets - save 30-40% on boiler costs. Supplier in Bathinda serving all Punjab."
        keywords="dairy plant fuel Punjab, biomass pellets dairy industry, pasteurization boiler fuel, milk processing coal alternative, reduce fuel cost dairy"
        canonicalUrl="https://shreebalajienvirotech.com/awareness/dairy-plants-fuel-punjab"
      />

      <BlogLayout
        title="Dairy Processing Plants in Punjab: Are Fuel Costs Souring Your Profits?"
        subtitle="How rising energy prices impact Punjab's dairy industry—and the biomass solution saving plants 30-40%"
        breadcrumbs={[{ label: 'Awareness', href: '/awareness/dairy-plants-fuel-punjab' }]}
      >
        {/* Pain Point */}
        <section className="mb-12">
          <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">The Fuel Crisis Hitting Punjab Dairy Plants</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Fuel costs up 40% in 3 years—squeezing processor margins</li>
                  <li>• Pasteurization and spray drying consuming 50-60% of energy budget</li>
                  <li>• Diesel generator backup costs during power cuts</li>
                  <li>• FSSAI and quality audits requiring process documentation</li>
                  <li>• Competition from large corporates with better cost structures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Punjab's Dairy Industry: The Fuel Challenge</h2>
          <p className="text-muted-foreground mb-4">
            Punjab's dairy sector—with Verka, Milkfed, and numerous private processors—handles over 
            <strong className="text-foreground"> 3.5 crore liters daily</strong>. These plants run 
            steam boilers 20-24 hours for:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { icon: '🥛', title: 'Pasteurization', desc: 'HTST at 72°C and UHT at 135°C processing' },
              { icon: '🧈', title: 'Product Processing', desc: 'Ghee, paneer, and butter manufacturing' },
              { icon: '🥛', title: 'Spray Drying', desc: 'Milk powder production requiring 180-200°C' }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-card border border-border rounded-lg">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground">
            With fuel comprising <strong className="text-foreground">20-30% of processing costs</strong>, 
            efficient fuel management directly impacts product pricing competitiveness.
          </p>
        </section>

        {/* Consequences */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What High Fuel Costs Mean for Your Dairy Plant</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '📉', text: 'Lower margins on every liter processed' },
              { icon: '🏆', text: 'Struggling to compete with large cooperative pricing' },
              { icon: '⚡', text: 'Diesel backup costs eating into profits during outages' },
              { icon: '⚖️', text: 'Environmental compliance pressures increasing' },
              { icon: '💸', text: 'Difficulty in long-term price commitments to farmers' },
              { icon: '🌍', text: 'Missing sustainability credentials for premium markets' }
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
          <h2 className="text-2xl font-bold text-foreground mb-4">The Solution: Biomass Pellets for Dairy Processing</h2>
          <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 mb-6">
            <div className="flex items-start gap-4">
              <IndianRupee className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Rs 7,000-8,500/ton vs Rs 11,000-13,000/ton for coal
                </p>
                <p className="text-muted-foreground">
                  A dairy plant consuming 80 tons monthly saves <strong className="text-foreground">Rs 2.5-4 lakhs/month</strong>—that's 
                  Rs 30-48 lakhs annually improving your bottom line.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-4">Why Biomass Pellets Work for Dairy Processing</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Flame className="w-6 h-6" />, title: 'Precise Heat Control', desc: 'Consistent temperatures for pasteurization accuracy' },
              { icon: <Milk className="w-6 h-6" />, title: 'Food-Grade Clean', desc: 'Low emissions, no contamination risk' },
              { icon: <CheckCircle className="w-6 h-6" />, title: '24/7 Reliability', desc: 'Consistent supply for round-the-clock operations' },
              { icon: <IndianRupee className="w-6 h-6" />, title: 'Predictable Costs', desc: 'Stable pricing for better financial planning' }
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
          <h2 className="text-2xl font-bold text-foreground mb-4">Real Results from Punjab Dairy Plants</h2>
          <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
            <div className="flex items-start gap-4">
              <Milk className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Private Dairy Plant in Moga District</h3>
                <div className="grid sm:grid-cols-3 gap-4 text-center mt-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">Rs 3.5L</div>
                    <div className="text-sm text-muted-foreground">Monthly fuel savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">4 months</div>
                    <div className="text-sm text-muted-foreground">Conversion ROI payback</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">±1°C</div>
                    <div className="text-sm text-muted-foreground">Temperature consistency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Punjab Dairy Plants Trust Shree Balaji Envirotech</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { stat: '10+', label: 'Dairy plants served' },
              { stat: '2,000+', label: 'Tons delivered monthly' },
              { stat: 'Bathinda', label: 'Central location' },
              { stat: 'Same day', label: 'Emergency delivery' }
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
            <h2 className="text-2xl font-bold mb-4">Get a Free Fuel Cost Analysis for Your Dairy Plant</h2>
            <p className="mb-6 text-primary-foreground/90">
              We'll calculate your exact savings potential based on your processing capacity, current fuel consumption, and operational hours.
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

export default DairyPlantsFuelPunjab;

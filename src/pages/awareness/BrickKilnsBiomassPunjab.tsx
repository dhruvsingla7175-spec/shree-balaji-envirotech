import BlogLayout from '@/components/BlogLayout';
import SEOHead from '@/components/SEOHead';
import FAQSection from '@/components/FAQSection';
import { AlertTriangle, Flame, CheckCircle, Phone, IndianRupee, Building } from 'lucide-react';

const faqs = [
  {
    question: "Can brick kilns use biomass pellets instead of coal?",
    answer: "Yes. Modern biomass pellets with 3800-4200 kcal/kg provide sufficient heat for brick firing. Many kilns in Punjab are successfully using biomass pellets, especially in zigzag and VSBK kilns. Bull's trench kilns may need minor modifications."
  },
  {
    question: "How much can brick kilns save by switching to biomass?",
    answer: "Brick kilns typically save 20-35% on fuel costs. A kiln spending Rs 8-10 lakhs monthly on coal can reduce costs to Rs 5.5-7.5 lakhs with biomass pellets, while also avoiding pollution penalties."
  },
  {
    question: "What about NGT regulations for brick kilns in Punjab?",
    answer: "The National Green Tribunal mandates cleaner technologies for brick kilns. Biomass pellets help kilns comply with emission norms and avoid closure orders. Several kilns in Bathinda and Mansa districts have switched specifically for compliance."
  },
  {
    question: "Is biomass pellet supply reliable during peak brick-making season?",
    answer: "Yes. Shree Balaji Envirotech maintains large inventories specifically for the October-May brick season. We ensure uninterrupted supply to kilns across Punjab with advance booking options."
  }
];

const BrickKilnsBiomassPunjab = () => {
  return (
    <>
      <SEOHead
        title="Brick Kilns in Punjab: Switch to Biomass Pellets, Avoid NGT Penalties | Bathinda"
        description="Punjab brick kilns facing NGT closure threats? Switch to biomass pellets - reduce emissions, cut fuel costs 20-35%. Supplier in Bathinda, Mansa, Fazilka."
        keywords="brick kiln fuel Punjab, biomass pellets brick kiln, NGT compliant fuel, coal alternative brick kiln, Bathinda brick kiln"
        canonicalUrl="https://shreebalajienvirotech.com/awareness/brick-kilns-biomass-punjab"
      />

      <BlogLayout
        title="Brick Kilns in Punjab: Coal Costs Rising, NGT Watching. What's Your Plan?"
        subtitle="How biomass pellets help Punjab brick kilns cut costs by 20-35% while meeting pollution norms"
        breadcrumbs={[{ label: 'Awareness', href: '/blog' }]}
      >
        {/* Pain Point */}
        <section className="mb-12">
          <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">The Double Crisis Facing Punjab Brick Kilns</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Coal prices at Rs 10,000-12,000/ton, eating into margins</li>
                  <li>• NGT and PPCB cracking down on emissions—kilns shut without notice</li>
                  <li>• Zigzag kiln conversion mandates adding compliance pressure</li>
                  <li>• Competition from fly ash bricks squeezing market share</li>
                  <li>• Labour costs rising while selling prices remain stagnant</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Punjab's Brick Industry: Under Pressure from All Sides</h2>
          <p className="text-muted-foreground mb-4">
            Punjab has over <strong className="text-foreground">2,500 brick kilns</strong> concentrated in 
            Bathinda, Mansa, Fazilka, Muktsar, and Ferozepur districts. These kilns face:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { 
                title: 'Regulatory Pressure', 
                points: ['NGT emission standards tightening', 'PPCB regular inspections', 'Closure orders during crop burning season', 'Zigzag/VSBK conversion mandates'] 
              },
              { 
                title: 'Economic Pressure', 
                points: ['Coal prices up 40% in 3 years', 'Brick prices barely increased', 'Fly ash brick competition', 'Rising labour and transport costs'] 
              }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-card border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {item.points.map((point, j) => (
                    <li key={j}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Consequences */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What Happens If You Don't Adapt?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '🚫', text: 'NGT closure orders during high pollution periods' },
              { icon: '💰', text: 'Heavy penalties—Rs 50,000 to Rs 5 lakh per violation' },
              { icon: '📉', text: 'Shrinking margins with every coal price increase' },
              { icon: '⚖️', text: 'Court cases and legal hassles' },
              { icon: '🏭', text: 'Forced kiln technology upgrades' },
              { icon: '❌', text: 'Permanent closure risk for repeat offenders' }
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
          <h2 className="text-2xl font-bold text-foreground mb-4">The Smart Solution: Biomass Pellets for Brick Kilns</h2>
          <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 mb-6">
            <div className="flex items-start gap-4">
              <IndianRupee className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-lg font-semibold text-foreground mb-2">
                  Save 20-35% on Fuel + Avoid Rs 5 Lakh+ in Potential Penalties
                </p>
                <p className="text-muted-foreground">
                  At Rs 7,000-8,500/ton vs Rs 10,000-12,000/ton for coal, a kiln using 80 tons monthly 
                  saves <strong className="text-foreground">Rs 2-3 lakhs/month</strong> while meeting emission norms.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-4">Why Biomass Pellets Work for Brick Kilns</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Flame className="w-6 h-6" />, title: 'High Heat Output', desc: '3800-4200 kcal/kg for proper brick firing' },
              { icon: <CheckCircle className="w-6 h-6" />, title: 'NGT Compliant', desc: 'Low emissions, meets pollution norms' },
              { icon: <Building className="w-6 h-6" />, title: 'Kiln Compatible', desc: 'Works with zigzag, VSBK, and modified BTK' },
              { icon: <IndianRupee className="w-6 h-6" />, title: 'Local Supply', desc: 'Made in Bathinda, reliable availability' }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-card border border-border rounded-lg text-center">
                <div className="text-primary mx-auto mb-2 flex justify-center">{item.icon}</div>
                <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Benefits */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Compliance Benefits for Your Kiln</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Lower Particulate Emissions', desc: 'Biomass produces 40-60% less particulate matter than coal' },
              { title: 'Reduced SO2 Emissions', desc: 'Near-zero sulphur content vs coal\'s 0.5-2% sulphur' },
              { title: 'Carbon Neutral Status', desc: 'Eligible for carbon credits and green certifications' }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-primary/5 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Signals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Trusted by Brick Kilns Across South Punjab</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { stat: '15+', label: 'Brick kilns supplied' },
              { stat: 'Bathinda', label: 'Manufacturing hub' },
              { stat: 'Oct-May', label: 'Peak season supply assured' },
              { stat: 'Same Day', label: 'Delivery in Bathinda-Mansa belt' }
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
            <h2 className="text-2xl font-bold mb-4">Protect Your Kiln from Rising Costs & NGT Action</h2>
            <p className="mb-6 text-primary-foreground/90">
              Get a free assessment of your fuel consumption and calculate exact savings with biomass pellets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+918360410158" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors">
                <Phone className="w-5 h-5" />
                Call: +91 83604 10158
              </a>
              <a href="mailto:dhruv@shreebalajienvirotech.com" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Get Free Assessment
              </a>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />
      </BlogLayout>
    </>
  );
};

export default BrickKilnsBiomassPunjab;

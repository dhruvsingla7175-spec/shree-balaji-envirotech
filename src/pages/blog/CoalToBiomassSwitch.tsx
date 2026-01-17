import BlogLayout from '@/components/BlogLayout';
import SEOHead from '@/components/SEOHead';
import FAQSection from '@/components/FAQSection';
import { getPostBySlug } from '@/data/blogPosts';
import { CheckCircle, AlertTriangle, Calculator, Settings, Phone } from 'lucide-react';

const post = getPostBySlug('coal-to-biomass-switch-industrial-boilers')!;

const faqs = [
  {
    question: "How much does it cost to convert a coal boiler to biomass pellets?",
    answer: "Conversion costs range from Rs 50,000 for minor feed system adjustments to Rs 2-5 lakhs for significant modifications on larger boilers. Many industries achieve ROI within 6-12 months through fuel cost savings."
  },
  {
    question: "Will switching to biomass pellets reduce my boiler efficiency?",
    answer: "Properly configured biomass systems achieve 80-85% efficiency, comparable to coal. The key is using quality pellets (<10% moisture, >4000 Kcal/kg) and optimizing air-fuel ratios for your specific setup."
  },
  {
    question: "Can I use biomass pellets in a traveling grate boiler?",
    answer: "Yes, traveling grate boilers are well-suited for biomass pellets. Minor modifications to grate speed and air distribution typically provide excellent results."
  },
  {
    question: "How much coal does 1 ton of biomass pellets replace?",
    answer: "Approximately 0.85-0.9 tons of coal is replaced by 1 ton of quality biomass pellets. While pellets have slightly lower energy density, their complete combustion and lower ash content often result in better overall thermal efficiency."
  },
  {
    question: "Do biomass pellets produce clinker like coal?",
    answer: "Quality biomass pellets with <5% ash content produce minimal clinker compared to coal (20-40% ash). This reduces boiler cleaning frequency and maintenance costs significantly."
  }
];

const CoalToBiomassSwitch = () => {
  return (
    <>
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={[post.primaryKeyword, ...post.secondaryKeywords].join(', ')}
        canonicalUrl={`https://shreebalajienvirotech.com/blog/${post.slug}`}
        ogType="article"
        publishedDate={post.modifiedDate}
      />

      <BlogLayout
        title={post.title}
        subtitle={post.excerpt}
        publishDate={post.publishDate}
        readTime={post.readTime}
        breadcrumbs={[{ label: 'Blog', href: '/blog' }]}
      >
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed">
            Coal prices have increased 40% in the last three years. Emission regulations are tightening. 
            ESG requirements are becoming mandatory. For Punjab industries, the question isn't whether 
            to switch from coal—it's <strong>how quickly you can do it profitably</strong>.
          </p>
          <p className="mt-4">
            This guide walks you through the complete coal-to-biomass conversion process, with real 
            numbers from industries that have already made the switch.
          </p>
        </section>

        {/* Why Switch */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Industries Are Switching to Biomass</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                The Coal Problem
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Prices increased 40% since 2021</li>
                <li>• Import dependency and supply uncertainty</li>
                <li>• 20-40% ash content requiring frequent cleaning</li>
                <li>• Tightening emission norms and penalties</li>
                <li>• Negative ESG perception affecting business</li>
              </ul>
            </div>
            <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                The Biomass Solution
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 20-40% cost savings vs coal</li>
                <li>• Locally sourced—no import dependency</li>
                <li>• Only 3-5% ash content</li>
                <li>• Carbon-neutral for emission compliance</li>
                <li>• Positive ESG rating impact</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Cost Comparison: Coal vs Biomass Pellets</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border border-border p-3 text-left font-semibold">Parameter</th>
                  <th className="border border-border p-3 text-center font-semibold">Coal</th>
                  <th className="border border-border p-3 text-center font-semibold">Biomass Pellets</th>
                  <th className="border border-border p-3 text-center font-semibold">Advantage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Price per ton', 'Rs 10,000-12,000', 'Rs 6,500-8,500', 'Pellets: 25-35% cheaper'],
                  ['Calorific Value', '5,000-6,000 Kcal/kg', '4,000-4,500 Kcal/kg', 'Coal: 15-20% higher'],
                  ['Cost per Million Kcal', 'Rs 2,000-2,400', 'Rs 1,500-1,900', 'Pellets: 20-25% cheaper'],
                  ['Ash Content', '20-40%', '3-5%', 'Pellets: 80% less ash'],
                  ['Sulphur Content', '2-4%', '<0.05%', 'Pellets: Near zero'],
                  ['Clinker Formation', 'Heavy', 'Minimal', 'Pellets: Less maintenance'],
                  ['CO2 Emissions', 'High (fossil)', 'Net zero (biogenic)', 'Pellets: Carbon neutral'],
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-muted/50">
                    <td className="border border-border p-3 font-medium">{row[0]}</td>
                    <td className="border border-border p-3 text-center">{row[1]}</td>
                    <td className="border border-border p-3 text-center text-primary font-semibold">{row[2]}</td>
                    <td className="border border-border p-3 text-center text-green-600 dark:text-green-400 text-sm">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-secondary/10 rounded-lg border border-secondary/20 flex items-start gap-3">
            <Calculator className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Quick Math:</strong> An industry consuming 100 tons 
              of coal monthly at Rs 10,000/ton = Rs 10 lakhs. Switching to pellets at Rs 7,500/ton 
              (accounting for energy difference, ~115 tons needed) = Rs 8.6 lakhs. 
              <strong className="text-primary"> Monthly savings: Rs 1.4 lakhs.</strong>
            </p>
          </div>
        </section>

        {/* Boiler Compatibility */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Boiler Compatibility: What Works with Biomass</h2>
          
          <div className="space-y-4">
            {[
              {
                type: 'Traveling Grate Boilers',
                compatibility: 'Excellent',
                modifications: 'Minor adjustments to grate speed and primary/secondary air ratio',
                cost: 'Rs 50,000-1,00,000'
              },
              {
                type: 'Chain Grate Boilers',
                compatibility: 'Very Good',
                modifications: 'Feed system adjustment, possible grate modification',
                cost: 'Rs 75,000-1,50,000'
              },
              {
                type: 'Stoker Boilers',
                compatibility: 'Good',
                modifications: 'Hopper modification, feed rate calibration',
                cost: 'Rs 1,00,000-2,00,000'
              },
              {
                type: 'Fluidized Bed Boilers',
                compatibility: 'Excellent',
                modifications: 'Minimal—designed for varied fuels',
                cost: 'Rs 50,000-1,00,000'
              },
              {
                type: 'Fixed Grate Boilers',
                compatibility: 'Moderate',
                modifications: 'May need grate replacement for optimal performance',
                cost: 'Rs 2,00,000-5,00,000'
              }
            ].map((boiler, index) => (
              <div key={index} className="p-4 bg-card border border-border rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{boiler.type}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{boiler.modifications}</p>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <span className={`px-3 py-1 rounded-full ${
                      boiler.compatibility === 'Excellent' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      boiler.compatibility === 'Very Good' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      boiler.compatibility === 'Good' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' :
                      'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                    }`}>
                      {boiler.compatibility}
                    </span>
                    <span className="text-primary font-semibold">{boiler.cost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Step by Step */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Step-by-Step Conversion Process</h2>
          
          <div className="space-y-6">
            {[
              {
                step: 'Site Assessment',
                duration: '1-2 days',
                details: 'Our team evaluates your existing boiler, fuel consumption patterns, and storage facilities. We identify required modifications and calculate expected savings.'
              },
              {
                step: 'ROI Analysis',
                duration: '1-2 days',
                details: 'Detailed cost-benefit analysis comparing your current coal expenses with projected pellet costs, including conversion investment and payback period.'
              },
              {
                step: 'Equipment Modification',
                duration: '3-7 days',
                details: 'Feed system adjustments, air flow optimization, and any necessary grate modifications. Most conversions complete without halting production.'
              },
              {
                step: 'Trial Run',
                duration: '2-3 days',
                details: 'Initial operation with biomass pellets, monitoring combustion efficiency, steam output, and emissions. Fine-tuning parameters for optimal performance.'
              },
              {
                step: 'Full-Scale Operation',
                duration: 'Ongoing',
                details: 'Transition to regular pellet supply. We arrange consistent deliveries from Bathinda to your facility.'
              },
              {
                step: 'Performance Monitoring',
                duration: '3 months',
                details: 'Ongoing support and efficiency tracking. Adjustments as needed to maximize savings and performance.'
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  {index < 5 && <div className="w-px h-full bg-primary/30 mt-2" />}
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-foreground">{item.step}</h3>
                    <span className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded-full">{item.duration}</span>
                  </div>
                  <p className="text-muted-foreground">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Considerations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Technical Considerations</h2>
          
          <div className="flex items-start gap-4 mb-6">
            <Settings className="w-8 h-8 text-primary flex-shrink-0" />
            <p>
              Successful conversion requires attention to these key technical factors:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Air-to-Fuel Ratio',
                content: 'Biomass requires different air ratios than coal. Typically 1.3-1.5:1 excess air for complete combustion without heat loss.'
              },
              {
                title: 'Feed Rate Calibration',
                content: 'Pellets have different bulk density than coal. Screw feeders or conveyors need recalibration for consistent fuel delivery.'
              },
              {
                title: 'Combustion Zone Temperature',
                content: 'Maintain 850-950°C in combustion zone. Higher temps increase NOx; lower temps lead to incomplete combustion.'
              },
              {
                title: 'Ash Handling',
                content: 'Much less ash than coal, but still requires regular removal. Existing ash systems usually work with minor adjustments.'
              },
              {
                title: 'Storage Requirements',
                content: 'Pellets must stay dry (<10% moisture critical). Covered storage or silos essential. Minimum 2-week buffer stock recommended.'
              },
              {
                title: 'Emission Compliance',
                content: 'Biomass typically meets all emission norms without additional controls. Document readings for compliance records.'
              }
            ].map((item, index) => (
              <div key={index} className="p-4 bg-card border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Warning */}
        <section className="mb-12">
          <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Common Conversion Mistakes to Avoid</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Using low-quality pellets:</strong> High moisture/ash pellets destroy efficiency gains</li>
                  <li>• <strong>Ignoring storage:</strong> Wet pellets disintegrate and clog systems</li>
                  <li>• <strong>Wrong air settings:</strong> Coal settings don't work for biomass—recalibrate</li>
                  <li>• <strong>Undersized supply contracts:</strong> Production stoppage from fuel shortage is costly</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <div className="p-8 bg-gradient-to-br from-primary to-primary/80 rounded-2xl text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4">Ready to Reduce Fuel Costs?</h2>
            <p className="mb-6 text-primary-foreground/90">
              Get a free site assessment and ROI analysis for your boiler conversion. 
              Shree Balaji Envirotech LLP has helped dozens of Punjab industries make the switch successfully.
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
                Request Free Assessment
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQSection faqs={faqs} />

        {/* Related */}
        <section className="mt-12 pt-8 border-t border-border">
          <h3 className="font-semibold text-foreground mb-4">Related Articles</h3>
          <ul className="space-y-2">
            <li>
              <a href="/blog/biomass-pellets-complete-guide-punjab" className="text-primary hover:underline">
                → Biomass Pellets: Complete Guide for Industries in Punjab
              </a>
            </li>
            <li>
              <a href="/blog/biomass-pellet-price-punjab-2025" className="text-primary hover:underline">
                → Biomass Pellet Prices in Punjab 2025: Complete Market Analysis
              </a>
            </li>
            <li>
              <a href="/awareness/industrial-fuel-costs-punjab" className="text-primary hover:underline">
                → Industrial Fuel Costs Crushing Punjab Businesses? Here's the Fix
              </a>
            </li>
          </ul>
        </section>
      </BlogLayout>
    </>
  );
};

export default CoalToBiomassSwitch;

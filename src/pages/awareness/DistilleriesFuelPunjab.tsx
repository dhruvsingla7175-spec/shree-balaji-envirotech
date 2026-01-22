import SEOHead from '@/components/SEOHead';
import AwarenessPageLayout from '@/components/AwarenessPageLayout';
import { Beaker, Flame, CheckCircle, IndianRupee, Thermometer } from 'lucide-react';

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

      <AwarenessPageLayout
        industry="Distilleries"
        industryIcon={<Beaker className="w-5 h-5" />}
        heroTitle="Distilleries in Punjab: Is Fuel Cost Diluting Your Profits?"
        heroSubtitle="How rising energy prices impact ethanol and spirit production—and the biomass solution saving distilleries 25-35%"
        
        painPointsTitle="The Fuel Crisis Hitting Punjab Distilleries"
        painPoints={[
          { text: "Coal prices up 45%—eating into margins despite ethanol demand" },
          { text: "Distillation and fermentation consuming 50-60% of energy costs" },
          { text: "Bagasse availability inconsistent outside crushing season" },
          { text: "Government ethanol blending targets creating pressure to scale" },
          { text: "Emission norms tightening under new environmental regulations" }
        ]}
        
        industryContext={{
          title: "Punjab's Distillery Industry: The Fuel Challenge",
          description: "With India's ethanol blending program targeting 20% by 2025, Punjab's 20+ distilleries are scaling production. These plants run steam-intensive operations.",
          highlights: [
            { icon: '🔬', title: 'Fermentation', description: 'Temperature-controlled molasses/grain processing' },
            { icon: '⚗️', title: 'Distillation', description: 'Multi-column distillation at 78-100°C' },
            { icon: '🧪', title: 'ENA Production', description: 'Extra Neutral Alcohol requiring precise steam control' }
          ],
          footer: "With fuel comprising 30-40% of production costs, efficient fuel management is critical for profitability in the competitive spirits market."
        }}
        
        consequences={[
          { icon: '📉', text: 'Lower margins despite growing ethanol demand' },
          { icon: '🏆', text: 'Difficulty meeting government pricing for ethanol' },
          { icon: '🌾', text: 'Bagasse dependency creating seasonal challenges' },
          { icon: '⚖️', text: 'Emission compliance costs increasing' },
          { icon: '💸', text: 'Volatile fuel prices affecting financial planning' },
          { icon: '📊', text: 'Struggling to scale for ethanol blending targets' }
        ]}
        
        solutionTitle="Biomass Pellets for Distilleries"
        pricingComparison={{
          biomassPrice: "Rs 7,000-8,500/ton",
          traditionalPrice: "Rs 11,000-13,000/ton",
          savingsText: "A distillery consuming 500 tons monthly saves Rs 15-25 lakhs/month—Rs 1.8-3 crores annually"
        }}
        
        benefits={[
          { icon: <Flame className="w-6 h-6" />, title: 'High Heat Output', description: '3800-4500 kcal/kg for distillation temperatures' },
          { icon: <Thermometer className="w-6 h-6" />, title: 'Precise Control', description: 'Consistent heat for fermentation accuracy' },
          { icon: <CheckCircle className="w-6 h-6" />, title: 'Year-Round Supply', description: 'No seasonal bagasse dependency' },
          { icon: <IndianRupee className="w-6 h-6" />, title: 'Carbon Benefits', description: 'Green credentials for export markets' }
        ]}
        
        caseStudy={{
          title: "75 KLPD Ethanol Distillery",
          location: "Fazilka, Punjab",
          stats: [
            { value: 'Rs 18L', label: 'Monthly fuel savings' },
            { value: '4 months', label: 'Conversion ROI payback' },
            { value: '365 days', label: 'Consistent supply' }
          ]
        }}
        
        trustStats={[
          { value: '5+', label: 'Distilleries served' },
          { value: '2,500+', label: 'Tons capacity monthly' },
          { value: 'Bulk', label: 'Supply guaranteed' },
          { value: '24/7', label: 'Delivery capability' }
        ]}
        
        ctaTitle="Get a Free Fuel Cost Analysis for Your Distillery"
        ctaDescription="We'll calculate your exact savings potential based on your production capacity, current fuel mix, and operational requirements."
        
        faqs={faqs}
        currentSlug="distilleries-fuel-punjab"
        currentCategory="awareness"
      />
    </>
  );
};

export default DistilleriesFuelPunjab;

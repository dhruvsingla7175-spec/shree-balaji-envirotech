import SEOHead from '@/components/SEOHead';
import AwarenessPageLayout from '@/components/AwarenessPageLayout';
import { Wheat, Flame, CheckCircle, IndianRupee } from 'lucide-react';

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

      <AwarenessPageLayout
        industry="Rice Mills"
        industryIcon={<Wheat className="w-5 h-5" />}
        heroTitle="Rice Mills in Punjab: Is Expensive Fuel Eating Your Margins?"
        heroSubtitle="How rising coal prices impact Punjab's rice milling industry—and the local biomass solution saving mills 30-40%"
        
        painPointsTitle="The Fuel Crisis Hitting Punjab Rice Mills"
        painPoints={[
          { text: "Coal prices crossed Rs 12,000/ton—squeezing already thin margins" },
          { text: "Parboiling operations consuming 60-70% of total energy costs" },
          { text: "Rice husk availability declining as stubble management changes" },
          { text: "Export buyers demanding sustainability certifications" },
          { text: "Pollution board pressure increasing on coal-fired units" }
        ]}
        
        industryContext={{
          title: "Punjab's Rice Industry: The Fuel Challenge",
          description: "Punjab—India's rice bowl—houses over 4,500 rice mills concentrated in Amritsar, Kapurthala, Jalandhar, Gurdaspur, and Tarn Taran. These mills run boilers continuously during the 6-month milling season.",
          highlights: [
            { icon: '🍚', title: 'Parboiling', description: 'Soaking paddy in 65-70°C water for 4-6 hours' },
            { icon: '💨', title: 'Steam Generation', description: 'High-pressure steam for paddy processing' },
            { icon: '☀️', title: 'Drying Operations', description: 'Reducing moisture content to 12-14%' }
          ],
          footer: "With fuel comprising 25-35% of milling costs, every rupee saved directly improves your per-quintal profitability."
        }}
        
        consequences={[
          { icon: '📉', text: 'Lower margins on every quintal of processed rice' },
          { icon: '🏆', text: 'Losing contracts to mills with better cost structures' },
          { icon: '🌾', text: 'Uncertainty when rice husk supply fluctuates' },
          { icon: '⚖️', text: 'Risk of NGT penalties for coal boiler emissions' },
          { icon: '💸', text: 'Cash flow pressure during peak season operations' },
          { icon: '🌍', text: 'Missing out on premium export markets requiring green certifications' }
        ]}
        
        solutionTitle="Biomass Pellets for Rice Mills"
        pricingComparison={{
          biomassPrice: "Rs 7,000-8,500/ton",
          traditionalPrice: "Rs 11,000-13,000/ton",
          savingsText: "A rice mill consuming 150 tons during season saves Rs 5-7 lakhs/month—Rs 30-42 lakhs over the milling season"
        }}
        
        benefits={[
          { icon: <Flame className="w-6 h-6" />, title: 'High Heat Output', description: '3800-4200 kcal/kg, perfect for parboiling temperatures' },
          { icon: <Wheat className="w-6 h-6" />, title: 'Husk Compatible', description: 'Can blend with rice husk in existing boilers' },
          { icon: <CheckCircle className="w-6 h-6" />, title: 'Consistent Supply', description: 'Reliable availability even when husk runs short' },
          { icon: <IndianRupee className="w-6 h-6" />, title: 'Stable Pricing', description: 'Locally sourced, no global price volatility' }
        ]}
        
        caseStudy={{
          title: "75 TPD Rice Mill",
          location: "Kapurthala, Punjab",
          stats: [
            { value: 'Rs 5.8L', label: 'Monthly fuel savings' },
            { value: '60 days', label: 'Conversion ROI payback' },
            { value: 'Zero', label: 'Production disruption' }
          ]
        }}
        
        trustStats={[
          { value: '15+', label: 'Rice mills served' },
          { value: '3,000+', label: 'Tons delivered to rice belt' },
          { value: 'Bathinda', label: 'Central Punjab location' },
          { value: '24hr', label: 'Delivery to Amritsar belt' }
        ]}
        
        ctaTitle="Get a Free Fuel Cost Analysis for Your Rice Mill"
        ctaDescription="We'll calculate your exact savings potential based on your milling capacity, current fuel mix, and seasonal operations."
        
        faqs={faqs}
        currentSlug="rice-mills-fuel-punjab"
        currentCategory="awareness"
      />
    </>
  );
};

export default RiceMillsFuelPunjab;

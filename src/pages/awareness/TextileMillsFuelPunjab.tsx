import SEOHead from '@/components/SEOHead';
import AwarenessPageLayout from '@/components/AwarenessPageLayout';
import { Shirt, Flame, CheckCircle, Factory, IndianRupee } from 'lucide-react';

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

      <AwarenessPageLayout
        industry="Textile Mills"
        industryIcon={<Shirt className="w-5 h-5" />}
        heroTitle="Textile Mills in Punjab: Is Expensive Fuel Shrinking Your Margins?"
        heroSubtitle="How rising coal and diesel prices are hitting Punjab's textile industry—and the local biomass solution saving mills 25-40%"
        
        painPointsTitle="The Fuel Crisis Hitting Punjab Textile Mills"
        painPoints={[
          { text: "Coal prices at Rs 11,000-13,000/ton—up 45% in 3 years" },
          { text: "Diesel generators costing Rs 95+/litre during power cuts" },
          { text: "Dyeing and finishing operations consuming 60-70% of energy costs" },
          { text: "Pollution board scrutiny increasing on coal-fired boilers" },
          { text: "Export orders demanding carbon footprint documentation" }
        ]}
        
        industryContext={{
          title: "Punjab's Textile Industry: The Fuel Challenge",
          description: "Punjab's textile belt—spanning Ludhiana, Jalandhar, Amritsar, and Bathinda—houses over 3,000 textile mills employing lakhs of workers. These mills run steam boilers 16-20 hours daily.",
          highlights: [
            { icon: '🎨', title: 'Dyeing Operations', description: 'Continuous steam for fabric processing at 120-140°C' },
            { icon: '🔥', title: 'Finishing & Calendering', description: 'High-heat processes for fabric treatment' },
            { icon: '💨', title: 'Drying Systems', description: 'Energy-intensive moisture removal' }
          ],
          footer: "With fuel comprising 30-40% of production costs, every rupee saved on fuel directly improves margins and competitiveness."
        }}
        
        consequences={[
          { icon: '📉', text: 'Lower profit margins on every meter of fabric' },
          { icon: '🏆', text: 'Losing orders to mills with better cost structures' },
          { icon: '🌍', text: 'Failing sustainability audits from international buyers' },
          { icon: '⚖️', text: 'Risk of pollution board penalties and shutdowns' },
          { icon: '💸', text: 'Cash flow strain from volatile fuel prices' },
          { icon: '🔧', text: 'Older boilers becoming increasingly expensive to run' }
        ]}
        
        solutionTitle="Biomass Pellets Designed for Textile Mills"
        pricingComparison={{
          biomassPrice: "Rs 7,000-8,500/ton",
          traditionalPrice: "Rs 11,000-13,000/ton",
          savingsText: "A textile mill consuming 100 tons monthly saves Rs 3-5 lakhs/month—Rs 36-60 lakhs annually"
        }}
        
        benefits={[
          { icon: <Flame className="w-6 h-6" />, title: 'Consistent Heat', description: '3800-4200 kcal/kg, ideal for dyeing temperature control' },
          { icon: <Factory className="w-6 h-6" />, title: 'Boiler Compatible', description: 'Works with existing Lancashire & FBC boilers' },
          { icon: <CheckCircle className="w-6 h-6" />, title: 'Low Ash', description: '3-5% ash content means less cleaning, more uptime' },
          { icon: <IndianRupee className="w-6 h-6" />, title: 'Stable Pricing', description: 'Locally sourced, insulated from global fuel volatility' }
        ]}
        
        caseStudy={{
          title: "Medium-Sized Dyeing Unit",
          location: "Ludhiana, Punjab",
          stats: [
            { value: 'Rs 4.2L', label: 'Monthly fuel savings' },
            { value: '45 days', label: 'Conversion ROI payback' },
            { value: '100%', label: 'Pollution compliance' }
          ]
        }}
        
        trustStats={[
          { value: '25+', label: 'Textile mills served' },
          { value: '5,000+', label: 'Tons delivered monthly' },
          { value: 'Bathinda', label: 'Manufacturing base' },
          { value: '24hr', label: 'Delivery to Ludhiana belt' }
        ]}
        
        ctaTitle="Get a Free Fuel Cost Analysis for Your Textile Mill"
        ctaDescription="We'll calculate your exact savings potential based on your current fuel consumption, boiler type, and production schedule."
        
        faqs={faqs}
      />
    </>
  );
};

export default TextileMillsFuelPunjab;

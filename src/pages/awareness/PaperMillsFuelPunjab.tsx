import SEOHead from '@/components/SEOHead';
import AwarenessPageLayout from '@/components/AwarenessPageLayout';
import { FileText, Flame, CheckCircle, IndianRupee, Award } from 'lucide-react';

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

      <AwarenessPageLayout
        industry="Paper Mills"
        industryIcon={<FileText className="w-5 h-5" />}
        heroTitle="Paper Mills in Punjab: Is Coal Burning Your Profits?"
        heroSubtitle="How rising fuel costs impact paper manufacturing—and the biomass solution saving mills 25-35%"
        
        painPointsTitle="The Fuel Crisis Hitting Paper Manufacturing"
        painPoints={[
          { text: "Coal prices crossed Rs 12,000/ton—up 50% since 2021" },
          { text: "Paper drying operations consuming 60-70% of thermal energy" },
          { text: "Global sustainability demands from packaging buyers" },
          { text: "NGT and pollution board pressure on coal emissions" },
          { text: "Recycled paper mills facing even tighter margins" }
        ]}
        
        industryContext={{
          title: "Paper Industry: The Fuel Challenge",
          description: "North India's paper industry serves the massive packaging, printing, and stationery markets. These mills run energy-intensive operations 24/7.",
          highlights: [
            { icon: '📄', title: 'Paper Drying', description: 'Multi-cylinder dryers at 100-120°C continuous operation' },
            { icon: '🌊', title: 'Pulp Processing', description: 'Steam for digesting and chemical recovery' },
            { icon: '♨️', title: 'Process Steam', description: 'High-pressure steam for various mill operations' }
          ],
          footer: "With fuel comprising 35-45% of production costs, fuel efficiency directly determines your competitive position in the market."
        }}
        
        consequences={[
          { icon: '📉', text: 'Compressed margins on every ton of paper produced' },
          { icon: '🏆', text: 'Losing orders to mills with better cost structures' },
          { icon: '🌍', text: 'Unable to meet sustainability requirements of MNC buyers' },
          { icon: '⚖️', text: 'Increasing compliance costs for emission control' },
          { icon: '💸', text: 'Cash flow strain from volatile coal prices' },
          { icon: '🏭', text: 'Older boilers becoming increasingly expensive to operate' }
        ]}
        
        solutionTitle="Biomass Pellets for Paper Mills"
        pricingComparison={{
          biomassPrice: "Rs 7,000-8,500/ton",
          traditionalPrice: "Rs 11,000-13,000/ton",
          savingsText: "A paper mill consuming 300 tons monthly saves Rs 10-15 lakhs/month—Rs 1.2-1.8 crores annually"
        }}
        
        benefits={[
          { icon: <Flame className="w-6 h-6" />, title: 'High Heat Output', description: '3800-4500 kcal/kg, ideal for drying operations' },
          { icon: <FileText className="w-6 h-6" />, title: 'Clean Burning', description: 'No paper contamination, meets quality standards' },
          { icon: <CheckCircle className="w-6 h-6" />, title: 'Bulk Supply', description: 'Reliable 300+ ton monthly deliveries' },
          { icon: <Award className="w-6 h-6" />, title: 'Carbon Credits', description: 'Earn credits while saving on fuel' }
        ]}
        
        caseStudy={{
          title: "Kraft Paper Mill",
          location: "North India",
          stats: [
            { value: 'Rs 12L', label: 'Monthly fuel savings' },
            { value: '5 months', label: 'Conversion ROI payback' },
            { value: 'Green', label: 'Certification achieved' }
          ]
        }}
        
        trustStats={[
          { value: '5+', label: 'Paper mills served' },
          { value: '1,500+', label: 'Tons delivered monthly' },
          { value: 'Consistent', label: 'Quality guaranteed' },
          { value: 'Bulk', label: 'Pricing available' }
        ]}
        
        ctaTitle="Get a Free Fuel Cost Analysis for Your Paper Mill"
        ctaDescription="We'll calculate your exact savings potential based on your production capacity, current fuel consumption, and operational requirements."
        
        faqs={faqs}
      />
    </>
  );
};

export default PaperMillsFuelPunjab;

import SEOHead from '@/components/SEOHead';
import AwarenessPageLayout from '@/components/AwarenessPageLayout';
import { Factory, Flame, CheckCircle, Leaf, IndianRupee } from 'lucide-react';

const faqs = [
  {
    question: "How much can Punjab industries save by switching to biomass pellets?",
    answer: "Industries typically save 20-40% on fuel costs by switching from coal to biomass pellets. A factory spending Rs 10 lakhs monthly on coal can reduce costs to Rs 6-8 lakhs with biomass pellets."
  },
  {
    question: "Is biomass pellet supply reliable in Punjab?",
    answer: "Yes. Punjab generates 20+ million tons of agricultural waste annually, ensuring abundant raw material. Manufacturers like Shree Balaji Envirotech in Bathinda provide year-round supply with delivery across the state."
  },
  {
    question: "Do I need to change my boiler to use biomass pellets?",
    answer: "Most existing coal boilers work with biomass pellets after minor modifications costing Rs 50,000-2,00,000. The conversion typically pays for itself within 3-6 months through fuel savings."
  }
];

const IndustrialFuelCostsPunjab = () => {
  return (
    <>
      <SEOHead
        title="Industrial Fuel Costs Crushing Punjab Businesses? Biomass Solution | Bathinda"
        description="Punjab industries losing lakhs to rising coal & diesel costs. Switch to biomass pellets - save 20-40% on fuel. Local supplier in Bathinda. Call now."
        keywords="industrial fuel costs Punjab, reduce fuel expenses, biomass pellets Bathinda, coal alternative Punjab, save fuel costs industry"
        canonicalUrl="https://shreebalajienvirotech.com/awareness/industrial-fuel-costs-punjab"
        breadcrumbs={[{ label: 'Resources', href: '/blog' }]}
      />

      <AwarenessPageLayout
        industry="Industrial Manufacturing"
        industryIcon={<Factory className="w-5 h-5" />}
        heroTitle="Industrial Fuel Costs Crushing Your Punjab Business?"
        heroSubtitle="How rising coal, diesel, and LPG prices are eating into profits—and the local solution that saves 20-40%"
        
        painPointsTitle="The Problem Every Punjab Factory Owner Knows"
        painPoints={[
          { text: "Coal prices up 40% in 3 years—Rs 10,000-12,000/ton and climbing" },
          { text: "Diesel for generators bleeding Rs 90+/litre from operations" },
          { text: "LPG costs making production margins paper-thin" },
          { text: "Pollution control board penalties adding to the burden" }
        ]}
        
        consequences={[
          { icon: '📉', text: 'Profit margins shrinking every quarter' },
          { icon: '🏭', text: 'Competitors with better fuel strategy gaining edge' },
          { icon: '💼', text: 'Tough choices between quality and cost-cutting' },
          { icon: '🌫️', text: 'Environmental compliance becoming expensive' }
        ]}
        
        solutionTitle="Biomass Pellets from Punjab, for Punjab"
        pricingComparison={{
          biomassPrice: "Rs 6,500-8,500/ton",
          traditionalPrice: "Rs 10,000-12,000/ton",
          savingsText: "Save Rs 1.5-2 lakh monthly for a factory burning 50 tons"
        }}
        
        benefits={[
          { icon: <Leaf className="w-6 h-6" />, title: 'Locally Made', description: 'Manufactured in Bathinda from Punjab agricultural waste' },
          { icon: <Factory className="w-6 h-6" />, title: 'Drop-in Replacement', description: 'Works in existing boilers with minor modifications' },
          { icon: <CheckCircle className="w-6 h-6" />, title: 'Carbon Neutral', description: 'Meet ESG goals and avoid pollution penalties' },
          { icon: <IndianRupee className="w-6 h-6" />, title: 'Stable Pricing', description: 'Local sourcing means no global volatility' }
        ]}
        
        trustStats={[
          { value: '50,000+', label: 'Tons supplied annually' },
          { value: '100+', label: 'Industrial clients' },
          { value: 'Same Day', label: 'Delivery in Bathinda region' },
          { value: '24/7', label: 'Customer support' }
        ]}
        
        ctaTitle="Stop Losing Money to Expensive Fuel"
        ctaDescription="Get a free fuel cost analysis and see exactly how much your factory can save with biomass pellets."
        
        faqs={faqs}
        currentSlug="industrial-fuel-costs-punjab"
        currentCategory="awareness"
      />
    </>
  );
};

export default IndustrialFuelCostsPunjab;

import SEOHead from '@/components/SEOHead';
import AwarenessPageLayout from '@/components/AwarenessPageLayout';
import { Wheat, Flame, CheckCircle, Leaf, IndianRupee } from 'lucide-react';

const faqs = [
  {
    question: "Is biomass pellet fuel safe for food processing boilers?",
    answer: "Absolutely. Biomass pellets burn cleanly with no odor transfer or contamination risk. They're FSSAI-compliant and widely used by food processing units across India. The low ash and low sulphur content makes them ideal for food industry steam generation."
  },
  {
    question: "How much can food processing units save with biomass pellets?",
    answer: "Food processing units typically save 25-40% on fuel costs. A rice mill or flour mill spending Rs 5 lakhs monthly on coal/LPG can reduce costs to Rs 3-4 lakhs with biomass pellets."
  },
  {
    question: "Can par-boiling rice mills use biomass pellets?",
    answer: "Yes. Par-boiling requires consistent steam at 100-120°C, which biomass pellets provide reliably. Many rice mills in Punjab's rice belt have successfully switched from coal to biomass for par-boiling operations."
  },
  {
    question: "What about FSSAI and food safety compliance?",
    answer: "Biomass pellets help meet FSSAI's sustainability guidelines. They produce no toxic emissions or residues that could contaminate food products. Many food processing units cite biomass fuel as part of their food safety documentation."
  }
];

const FoodProcessingFuelPunjab = () => {
  return (
    <>
      <SEOHead
        title="Food Processing Units in Punjab: Cut Steam Costs 40% with Biomass | Bathinda"
        description="Punjab food processing units - rice mills, flour mills, oil mills - save 25-40% on steam fuel. Switch to clean biomass pellets. Supplier in Bathinda."
        keywords="food processing fuel Punjab, rice mill boiler fuel, biomass pellets food industry, steam generation Punjab, par boiling rice mill"
        canonicalUrl="https://shreebalajienvirotech.com/awareness/food-processing-fuel-punjab"
      />

      <AwarenessPageLayout
        industry="Food Processing"
        industryIcon={<Wheat className="w-5 h-5" />}
        heroTitle="Food Processing Units in Punjab: Are High Fuel Costs Eating Your Margins?"
        heroSubtitle="How rice mills, flour mills, and food processors in Punjab are cutting steam costs by 25-40% with local biomass pellets"
        
        painPointsTitle="The Fuel Burden on Punjab's Food Processors"
        painPoints={[
          { text: "Rice mills running par-boiling units 18+ hours during season" },
          { text: "Coal at Rs 10,000-12,000/ton cutting into thin margins" },
          { text: "LPG prices making dryers and roasters expensive to operate" },
          { text: "Buyers demanding sustainability certifications" },
          { text: "Competition from larger, more efficient plants" }
        ]}
        
        industryContext={{
          title: "Punjab's Food Processing Sector: Fuel-Intensive Operations",
          description: "Punjab is India's food bowl, with 4,000+ food processing units including rice mills, flour mills, oil extraction plants, and food manufacturing facilities.",
          highlights: [
            { icon: '🍚', title: 'Rice Mills', description: 'Par-boiling, drying, and steaming require continuous steam at 100-120°C' },
            { icon: '🌾', title: 'Flour Mills', description: 'Steam for grain conditioning and processing equipment' },
            { icon: '🫒', title: 'Oil Mills', description: 'High-heat extraction and refining processes' }
          ],
          footer: "With razor-thin margins in commodity processing, fuel costs directly impact profitability. A 1 paisa saving per kg multiplies into lakhs over a season."
        }}
        
        consequences={[
          { icon: '📉', text: 'Per-quintal processing margins shrinking' },
          { icon: '🏆', text: 'Larger mills with economies of scale gaining advantage' },
          { icon: '🌍', text: 'Export opportunities lost due to carbon footprint' },
          { icon: '💸', text: 'Seasonal cash flow stress from fuel expenses' },
          { icon: '🔥', text: 'Coal-related ash and maintenance issues' },
          { icon: '📋', text: 'Sustainability certifications becoming mandatory' }
        ]}
        
        solutionTitle="Clean Biomass Pellets for Food Processing"
        pricingComparison={{
          biomassPrice: "Rs 2-4 per quintal savings",
          traditionalPrice: "Rs 10,000-20,000/day with coal",
          savingsText: "A rice mill processing 5,000 quintals daily saves Rs 12-24 lakhs over a 4-month season"
        }}
        
        benefits={[
          { icon: <Flame className="w-6 h-6" />, title: 'Consistent Steam', description: 'Stable heat output for precise temperature control' },
          { icon: <Leaf className="w-6 h-6" />, title: 'Clean Burning', description: 'No odor transfer, FSSAI-safe for food operations' },
          { icon: <Wheat className="w-6 h-6" />, title: 'Local Sourcing', description: 'Made from Punjab rice husk & agri-waste' },
          { icon: <CheckCircle className="w-6 h-6" />, title: 'Low Maintenance', description: '3-5% ash vs 15-25% for coal, less cleaning' }
        ]}
        
        trustStats={[
          { value: '30+', label: 'Food processing clients' },
          { value: 'Bathinda', label: 'Central Punjab location' },
          { value: '100%', label: 'Season supply guarantee' },
          { value: '12hr', label: 'Delivery across Punjab' }
        ]}
        
        ctaTitle="Calculate Your Food Processing Fuel Savings"
        ctaDescription="Share your daily capacity and current fuel consumption—we'll show you exact monthly savings with biomass pellets."
        
        faqs={faqs}
        currentSlug="food-processing-fuel-punjab"
        currentCategory="awareness"
      />
    </>
  );
};

export default FoodProcessingFuelPunjab;

import SEOHead from '@/components/SEOHead';
import AwarenessPageLayout from '@/components/AwarenessPageLayout';
import { Building, Flame, CheckCircle, Shield, IndianRupee } from 'lucide-react';

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
        breadcrumbs={[{ label: 'Resources', href: '/blog' }]}
      />

      <AwarenessPageLayout
        industry="Brick Kilns"
        industryIcon={<Building className="w-5 h-5" />}
        heroTitle="Brick Kilns in Punjab: Coal Costs Rising, NGT Watching. What's Your Plan?"
        heroSubtitle="How biomass pellets help Punjab brick kilns cut costs by 20-35% while meeting pollution norms"
        
        painPointsTitle="The Double Crisis Facing Punjab Brick Kilns"
        painPoints={[
          { text: "Coal prices at Rs 10,000-12,000/ton, eating into margins" },
          { text: "NGT and PPCB cracking down on emissions—kilns shut without notice" },
          { text: "Zigzag kiln conversion mandates adding compliance pressure" },
          { text: "Competition from fly ash bricks squeezing market share" },
          { text: "Labour costs rising while selling prices remain stagnant" }
        ]}
        
        industryContext={{
          title: "Punjab's Brick Industry: Under Pressure from All Sides",
          description: "Punjab has over 2,500 brick kilns concentrated in Bathinda, Mansa, Fazilka, Muktsar, and Ferozepur districts. These kilns face dual pressure:",
          highlights: [
            { icon: '⚖️', title: 'Regulatory Pressure', description: 'NGT emission standards, PPCB inspections, closure orders' },
            { icon: '💰', title: 'Economic Pressure', description: 'Coal prices up 40%, brick prices stagnant' },
            { icon: '🏗️', title: 'Competition', description: 'Fly ash bricks gaining market share rapidly' }
          ],
          footer: "Brick kilns that don't adapt face closure orders, heavy penalties, and shrinking margins."
        }}
        
        consequences={[
          { icon: '🚫', text: 'NGT closure orders during high pollution periods' },
          { icon: '💰', text: 'Heavy penalties—Rs 50,000 to Rs 5 lakh per violation' },
          { icon: '📉', text: 'Shrinking margins with every coal price increase' },
          { icon: '⚖️', text: 'Court cases and legal hassles' },
          { icon: '🏭', text: 'Forced kiln technology upgrades' },
          { icon: '❌', text: 'Permanent closure risk for repeat offenders' }
        ]}
        
        solutionTitle="Biomass Pellets for Brick Kilns"
        pricingComparison={{
          biomassPrice: "Rs 7,000-8,500/ton",
          traditionalPrice: "Rs 10,000-12,000/ton",
          savingsText: "Save 20-35% on fuel + avoid Rs 5 lakh+ in potential penalties"
        }}
        
        benefits={[
          { icon: <Flame className="w-6 h-6" />, title: 'High Heat Output', description: '3800-4200 kcal/kg for proper brick firing' },
          { icon: <Shield className="w-6 h-6" />, title: 'NGT Compliant', description: 'Low emissions, meets pollution norms' },
          { icon: <Building className="w-6 h-6" />, title: 'Kiln Compatible', description: 'Works with zigzag, VSBK, and modified BTK' },
          { icon: <IndianRupee className="w-6 h-6" />, title: 'Local Supply', description: 'Made in Bathinda, reliable availability' }
        ]}
        
        trustStats={[
          { value: '15+', label: 'Brick kilns supplied' },
          { value: 'Bathinda', label: 'Manufacturing hub' },
          { value: 'Oct-May', label: 'Peak season supply assured' },
          { value: 'Same Day', label: 'Delivery in Bathinda-Mansa belt' }
        ]}
        
        ctaTitle="Protect Your Kiln from Rising Costs & NGT Action"
        ctaDescription="Get a free assessment of your fuel consumption and calculate exact savings with biomass pellets."
        
        faqs={faqs}
        currentSlug="brick-kilns-biomass-punjab"
        currentCategory="awareness"
      />
    </>
  );
};

export default BrickKilnsBiomassPunjab;

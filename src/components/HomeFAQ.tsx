import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  HelpCircle, 
  Phone, 
  Leaf, 
  Wheat, 
  Users, 
  Settings, 
  IndianRupee, 
  Flame, 
  Truck, 
  Factory,
  TreeDeciduous,
  Building2,
  MessageCircle
} from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const faqCategories = [
  {
    id: 'biomass',
    label: 'Biomass Basics',
    icon: Leaf,
    faqs: [
      {
        question: "What is biomass co-firing?",
        answer: "Biomass co-firing is the process of using biomass, such as agricultural residues, alongside coal in thermal power plants (TPPs) to generate electricity. This method aims to reduce greenhouse gas (GHG) emissions and enhance the sustainability of power generation."
      },
      {
        question: "What is the role of the SAMARTH Mission?",
        answer: "The SAMARTH Mission (https://biomassexchange.gov.in) aims to promote sustainable biomass utilization in power generation, enhancing the overall efficiency and reducing reliance on coal. It facilitates farmers in selling agro-residue and supports the biomass ecosystem."
      },
      {
        question: "How does biomass co-firing reduce emissions?",
        answer: "By substituting a portion of coal with biomass, the overall carbon emissions from power generation are reduced, as biomass is considered carbon-neutral. Each ton of biomass pellets used prevents approximately 1.8 tons of CO2 emissions."
      },
    ]
  },
  {
    id: 'types',
    label: 'Pellet Types',
    icon: Wheat,
    faqs: [
      {
        question: "What types of biomass and agro-residue can be used?",
        answer: "Various types of biomass can be used including agricultural residues like paddy straw, wheat straw, cotton stalks, rice husk, mustard stalk, sugarcane bagasse, maize stalks, groundnut shells, coconut shells, bamboo chips, sawdust, and wood chips."
      },
      {
        question: "What are biomass pellets made from?",
        answer: "Our biomass pellets are manufactured from agricultural waste like rice husk, wheat straw, paddy straw, sawdust, and wood chips sourced locally from Punjab farms. This converts crop residue that would otherwise be burned into clean, efficient fuel."
      },
      {
        question: "What is torrefaction in biomass processing?",
        answer: "Torrefaction is a thermal process that improves biomass properties, making it more suitable for conversion into pellets. The process involves heating biomass to 200–300°C in the absence of oxygen, which enhances its calorific value and grindability."
      },
    ]
  },
  {
    id: 'farmers',
    label: 'For Farmers',
    icon: Users,
    faqs: [
      {
        question: "How can farmers benefit from biomass co-firing?",
        answer: "Farmers can benefit by selling agricultural residues that would otherwise be burned, thus generating additional income and reducing air pollution. This saves the cost of clearing land for the next crop and provides employment opportunities."
      },
      {
        question: "How do I sell my agro-residue as a farmer?",
        answer: "Farmers can sell agro-residue through Farmers' Producer Organizations (FPOs), aggregators, digital e-market platforms, or directly to pellet manufacturers. Contact your nearest FPO, CHC, or department of agriculture for information."
      },
      {
        question: "What is the expected impact on employment?",
        answer: "The biomass sector is expected to create millions of jobs in collection, processing, and transportation of biomass materials. This supports rural employment and income generation across the supply chain."
      },
    ]
  },
  {
    id: 'technical',
    label: 'Specifications',
    icon: Settings,
    faqs: [
      {
        question: "What is the calorific value of biomass pellets?",
        answer: "Our pellets offer 3,800-4,500 Kcal/kg depending on the type. Agro-waste pellets provide 3,800-4,200 Kcal/kg, while premium wood pellets offer 4,200-4,500 Kcal/kg—comparable to B-grade coal but with significantly lower emissions."
      },
      {
        question: "What are the technical specifications for biomass pellets?",
        answer: "As per MoP guidelines: Moisture content should not exceed 14%, pellet diameter should be 6-25mm, fines should be ≤5%, and bulk density around 600 kg/m³. The pellets must meet Indian Standards for quality control."
      },
      {
        question: "How should biomass pellets be stored?",
        answer: "Pellets should be stored in a cool, dry, covered area to prevent moisture absorption. Use pallets or concrete flooring—avoid direct ground contact. Properly stored pellets maintain quality for 6-12 months."
      },
    ]
  },
  {
    id: 'pricing',
    label: 'Pricing',
    icon: IndianRupee,
    faqs: [
      {
        question: "How much can I save by switching from coal to biomass pellets?",
        answer: "Industries typically save 20-40% on fuel costs by switching to biomass pellets. At Rs 7,000-8,500/ton compared to coal at Rs 10,000-12,000/ton, a factory using 50 tons monthly can save Rs 1.5-2 lakhs every month."
      },
      {
        question: "What is the price of biomass pellets?",
        answer: "The price depends on quality, quantity, type of feedstock, and transportation costs. Currently, biomass pellets are taxed at 5% GST. Prices are market-driven and depend on demand and availability."
      },
      {
        question: "Are biomass pellets eligible for carbon credits?",
        answer: "Yes! Industries switching from coal to biomass can earn carbon credits. Each ton of biomass pellets used prevents approximately 1.8 tons of CO2 emissions. We can help connect you with carbon credit verification agencies."
      },
    ]
  },
  {
    id: 'usage',
    label: 'Usage',
    icon: Flame,
    faqs: [
      {
        question: "Can I use biomass pellets in my existing coal boiler?",
        answer: "Yes! Most coal boilers (chain-grate, stoker, FBC) can use biomass pellets with minor modifications. Conversion typically costs Rs 50,000-2,00,000 depending on boiler capacity, and pays for itself within 3-6 months."
      },
      {
        question: "Does the Ministry of Power mandate biomass co-firing?",
        answer: "Yes, the Government of India through Ministry of Power has mandated the use of biomass in existing coal-fired power plants. The revised policy mandates the use of low-cost biomass pellets as a substitute for coal."
      },
    ]
  },
  {
    id: 'delivery',
    label: 'Delivery',
    icon: Truck,
    faqs: [
      {
        question: "Do you deliver to locations outside Bathinda?",
        answer: "Absolutely! We deliver across Punjab, Haryana, and North India. Our regular delivery routes cover Bathinda, Ludhiana, Jalandhar, Amritsar, Patiala, Mohali, Chandigarh, and beyond. Bulk orders get priority delivery within 24-48 hours."
      },
      {
        question: "What is the minimum order quantity?",
        answer: "Our minimum order is 10 tons for direct delivery. For smaller requirements, we can arrange pickup from our Bathinda facility. Bulk orders of 50+ tons receive preferential pricing and priority supply arrangements."
      },
    ]
  },
];

// Flatten all FAQs for schema
const allFaqs = faqCategories.flatMap(cat => cat.faqs);

// Generate JSON-LD Schema for FAQs
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": allFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const HomeFAQ = () => {
  const [activeCategory, setActiveCategory] = useState('biomass');

  const activeFaqs = faqCategories.find(cat => cat.id === activeCategory)?.faqs || [];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-muted/50 via-background to-muted/30 relative overflow-hidden">
      {/* Inject FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-lg mb-6"
          >
            <HelpCircle className="w-8 h-8" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Got Questions?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              We've Got Answers
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about biomass pellets, pricing, specifications, and government policies
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
        >
          {faqCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                    : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {activeFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="border-0 rounded-2xl bg-card shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6 px-6 gap-4 hover:no-underline [&[data-state=open]]:bg-primary/5">
                        <span className="flex items-start gap-4">
                          <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary flex items-center justify-center group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground transition-all duration-300">
                            <MessageCircle className="w-5 h-5" />
                          </span>
                          <span className="text-base md:text-lg leading-snug">{faq.question}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground px-6 pb-6 pl-20">
                        <div className="prose prose-sm max-w-none">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
        >
          {[
            { icon: TreeDeciduous, value: '1.8 tons', label: 'CO₂ saved per ton' },
            { icon: IndianRupee, value: '20-40%', label: 'Cost savings' },
            { icon: Factory, value: '500+', label: 'Industries served' },
            { icon: Building2, value: '24-48hrs', label: 'Delivery time' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-card rounded-2xl p-5 text-center border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is ready to help you make the switch to sustainable energy
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
                <a href="tel:+916280610158" className="inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91 62806 10158
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
                <a href="https://wa.me/916280610158" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFAQ;
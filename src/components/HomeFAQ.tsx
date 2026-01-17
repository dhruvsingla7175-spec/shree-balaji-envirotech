import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, Phone } from 'lucide-react';
import { Button } from './ui/button';

const faqs = [
  // About Biomass Co-firing & SAMARTH Mission
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
  // About Agro-residue & Biomass Types
  {
    question: "What types of biomass and agro-residue can be used?",
    answer: "Various types of biomass can be used including agricultural residues like paddy straw, wheat straw, cotton stalks, rice husk, mustard stalk, sugarcane bagasse, maize stalks, groundnut shells, coconut shells, bamboo chips, sawdust, and wood chips. These are by-products from crops like Paddy, Cotton, Gram, Jawar, Bajra, Moong, Gwar, Arhar, Soya, Sunflower, and Mustard."
  },
  {
    question: "What are biomass pellets made from?",
    answer: "Our biomass pellets are manufactured from agricultural waste like rice husk, wheat straw, paddy straw, sawdust, and wood chips sourced locally from Punjab farms. This converts crop residue that would otherwise be burned into clean, efficient fuel."
  },
  {
    question: "What are biomass pellets?",
    answer: "Pellets are made by compressing fine particles of biomass into a solid, uniform-sized form. The process involves drying the feedstock, grinding it, and then using pellet mills to compress it. Biomass pellets are environmentally friendly and can be used as an alternative to fossil fuels."
  },
  // Benefits for Farmers
  {
    question: "How can farmers benefit from biomass co-firing?",
    answer: "Farmers can benefit by selling agricultural residues that would otherwise be burned, thus generating additional income and reducing air pollution. This saves the cost of clearing land for the next crop, provides employment opportunities, and helps avoid the negative effects of stubble burning on health and environment."
  },
  {
    question: "How do I sell my agro-residue as a farmer?",
    answer: "Farmers can sell agro-residue through Farmers' Producer Organizations (FPOs), aggregators, digital e-market platforms, or directly to pellet manufacturers. You can contact the nearest FPO, CHC (Custom Hiring Centre), or department of agriculture for information on biomass collection and selling options."
  },
  {
    question: "What is the expected impact on employment?",
    answer: "The biomass sector is expected to create millions of jobs in collection, processing, and transportation of biomass materials. This supports rural employment and income generation across the supply chain."
  },
  // Technical Specifications
  {
    question: "What is the calorific value of biomass pellets?",
    answer: "Our pellets offer 3,800-4,500 Kcal/kg depending on the type. Agro-waste pellets provide 3,800-4,200 Kcal/kg, while premium wood pellets offer 4,200-4,500 Kcal/kg. Non-torrefied pellets have GCV of 3400-4000 Kcal/kg, while torrefied pellets range from 4000-5000 Kcal/kg—comparable to B-grade coal but with significantly lower emissions and ash content."
  },
  {
    question: "What are the technical specifications for biomass pellets?",
    answer: "As per MoP guidelines: Moisture content should not exceed 14%, pellet diameter should be 6-25mm, fines should be ≤5%, and bulk density around 600 kg/m³. The pellets must meet Indian Standards for quality control and proper testing is essential."
  },
  {
    question: "What is torrefaction in biomass processing?",
    answer: "Torrefaction is a thermal process that improves biomass properties, making it more suitable for conversion into pellets. The process involves heating biomass to 200–300°C in the absence of oxygen, which enhances its calorific value and grindability. Torrefied pellets have higher energy density and better storage properties."
  },
  // Pricing & Savings
  {
    question: "How much can I save by switching from coal to biomass pellets?",
    answer: "Industries typically save 20-40% on fuel costs by switching to biomass pellets. At Rs 7,000-8,500/ton compared to coal at Rs 10,000-12,000/ton, a factory using 50 tons monthly can save Rs 1.5-2 lakhs every month. The exact savings depend on your boiler type and fuel consumption."
  },
  {
    question: "What is the price of biomass pellets and is GST applicable?",
    answer: "The price of biomass depends on various factors such as quality, quantity, type of feedstock, and transportation costs. Currently, biomass pellets are taxed at 5% GST. Prices are market-driven and depend on demand and availability."
  },
  // Usage & Compatibility
  {
    question: "Can I use biomass pellets in my existing coal boiler?",
    answer: "Yes! Most coal boilers (chain-grate, stoker, FBC) can use biomass pellets with minor modifications. Conversion typically costs Rs 50,000-2,00,000 depending on boiler capacity, and pays for itself within 3-6 months through fuel savings."
  },
  {
    question: "Does the Ministry of Power mandate biomass co-firing?",
    answer: "Yes, the Government of India through Ministry of Power has mandated the use of biomass in existing coal-fired power plants. The revised policy mandates the use of low-cost biomass pellets as a substitute for coal to reduce carbon footprint and achieve sustainable energy goals."
  },
  // Supply & Delivery
  {
    question: "Do you deliver to locations outside Bathinda?",
    answer: "Absolutely! We deliver across Punjab, Haryana, and North India. Our regular delivery routes cover Bathinda, Ludhiana, Jalandhar, Amritsar, Patiala, Mohali, Chandigarh, and beyond. Bulk orders get priority delivery, often within 24-48 hours."
  },
  {
    question: "What is the minimum order quantity?",
    answer: "Our minimum order is 10 tons for direct delivery. For smaller requirements, we can arrange pickup from our Bathinda facility. Bulk orders of 50+ tons receive preferential pricing and priority supply arrangements."
  },
  // Manufacturing & Storage
  {
    question: "What are the major components needed for pellet manufacturing?",
    answer: "The major components for biomass pelletization include: Pellet Mill, Hammer Mill, Dryer, Chipper, Pre-shredder, Screening equipment, and Grinding machines. Setting up a biomass pellet plant requires careful planning including location proximity to raw materials, technical specifications, and feasibility studies."
  },
  {
    question: "How should biomass pellets be stored?",
    answer: "Pellets should be stored in a cool, dry, covered area to prevent moisture absorption and deterioration. A simple covered shed with good ventilation works well. Avoid direct ground contact—use pallets or concrete flooring. Properly stored pellets maintain quality for 6-12 months. Transportation should use well-ventilated containers."
  },
  // Environmental & Carbon Credits
  {
    question: "Are biomass pellets eligible for carbon credits?",
    answer: "Yes! Industries switching from coal to biomass can earn carbon credits. Each ton of biomass pellets used prevents approximately 1.8 tons of CO2 emissions. This supports India's commitment to reducing carbon emissions and transitioning towards a more sustainable energy future. We can help connect you with carbon credit verification agencies."
  },
  {
    question: "What are the key benefits of biomass co-firing?",
    answer: "Key benefits include: Reduces carbon footprint of power generation, utilizes agricultural residues addressing waste management issues, enhances energy security by diversifying fuel sources, supports rural employment and income generation, and contributes to national goals of reducing GHG emissions."
  },
  // Government Support
  {
    question: "What financial assistance is available for biomass manufacturing?",
    answer: "Various government schemes provide financial assistance for setting up biomass plants. You can access information about these schemes through the SAMARTH Mission portal (https://biomassexchange.gov.in), government conferences, seminars, and workshops organized by the Ministry of Power (https://powermin.gov.in). Contact your local agricultural office for more details."
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

// Generate JSON-LD Schema for FAQs
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const HomeFAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Inject FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about biomass co-firing, SAMARTH Mission, pellet specifications, and government policies
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 bg-card shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 gap-4">
                    <span className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center mt-0.5">
                        {index + 1}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 pl-10">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="tel:+918360410158" className="inline-flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call Us: +91 83604 10158
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFAQ;

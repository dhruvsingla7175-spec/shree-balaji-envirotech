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
  {
    question: "What are biomass pellets made from?",
    answer: "Our biomass pellets are manufactured from agricultural waste like rice husk, wheat straw, paddy straw, sawdust, and wood chips sourced locally from Punjab farms. This converts crop residue that would otherwise be burned into clean, efficient fuel."
  },
  {
    question: "How much can I save by switching from coal to biomass pellets?",
    answer: "Industries typically save 20-40% on fuel costs by switching to biomass pellets. At Rs 7,000-8,500/ton compared to coal at Rs 10,000-12,000/ton, a factory using 50 tons monthly can save Rs 1.5-2 lakhs every month. The exact savings depend on your boiler type and fuel consumption."
  },
  {
    question: "Can I use biomass pellets in my existing coal boiler?",
    answer: "Yes! Most coal boilers (chain-grate, stoker, FBC) can use biomass pellets with minor modifications. Conversion typically costs Rs 50,000-2,00,000 depending on boiler capacity, and pays for itself within 3-6 months through fuel savings."
  },
  {
    question: "What is the calorific value of your biomass pellets?",
    answer: "Our pellets offer 3,800-4,500 Kcal/kg depending on the type. Agro-waste pellets provide 3,800-4,200 Kcal/kg, while premium wood pellets offer 4,200-4,500 Kcal/kg—comparable to B-grade coal but with significantly lower emissions and ash content."
  },
  {
    question: "Do you deliver to locations outside Bathinda?",
    answer: "Absolutely! We deliver across Punjab, Haryana, and North India. Our regular delivery routes cover Bathinda, Ludhiana, Jalandhar, Amritsar, Patiala, Mohali, Chandigarh, and beyond. Bulk orders get priority delivery, often within 24-48 hours."
  },
  {
    question: "What is the minimum order quantity?",
    answer: "Our minimum order is 10 tons for direct delivery. For smaller requirements, we can arrange pickup from our Bathinda facility. Bulk orders of 50+ tons receive preferential pricing and priority supply arrangements."
  },
  {
    question: "Are biomass pellets eligible for carbon credits?",
    answer: "Yes! Industries switching from coal to biomass can earn carbon credits. Each ton of biomass pellets used prevents approximately 1.8 tons of CO2 emissions. We can help connect you with carbon credit verification agencies."
  },
  {
    question: "How should biomass pellets be stored?",
    answer: "Pellets should be stored in a dry, covered area to prevent moisture absorption. A simple covered shed works well. Avoid direct ground contact—use pallets or concrete flooring. Properly stored pellets maintain quality for 6-12 months."
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
            Everything you need to know about biomass pellets, pricing, delivery, and switching from coal
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

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const partners = [
  {
    name: "NTPC Limited",
    description: "India's largest power utility",
    url: "https://www.ntpc.co.in",
  },
  {
    name: "PSPCL",
    description: "Punjab State Power Corporation",
    url: "https://pspcl.in",
  },
  {
    name: "SAMARTH Mission",
    description: "Biomass Exchange Portal",
    url: "https://biomassexchange.gov.in",
  },
  {
    name: "Ministry of Power",
    description: "Government of India",
    url: "https://powermin.gov.in",
  },
  {
    name: "MNRE",
    description: "Ministry of New & Renewable Energy",
    url: "https://mnre.gov.in",
  },
  {
    name: "PEDA",
    description: "Punjab Energy Development Agency",
    url: "https://peda.gov.in",
  },
  {
    name: "CEA",
    description: "Central Electricity Authority",
    url: "https://cea.nic.in",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const Partners = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

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
            <ExternalLink className="w-4 h-4" />
            Government Partners
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Affiliations & Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Working alongside India's leading power and energy organizations to promote sustainable biomass utilization
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {partners.map((partner) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="group bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <ExternalLink className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {partner.name}
              </h3>
              <p className="text-sm text-muted-foreground">{partner.description}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            Aligned with Government of India's initiatives for sustainable energy and carbon emission reduction
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;

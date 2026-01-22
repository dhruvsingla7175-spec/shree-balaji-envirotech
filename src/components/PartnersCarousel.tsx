import { motion } from "framer-motion";
import { ExternalLink, Building2 } from "lucide-react";

const partners = [
  { name: "NTPC Limited", url: "https://www.ntpc.co.in" },
  { name: "PSPCL", url: "https://pspcl.in" },
  { name: "SAMARTH Mission", url: "https://biomassexchange.gov.in" },
  { name: "Ministry of Power", url: "https://powermin.gov.in" },
  { name: "MNRE", url: "https://mnre.gov.in" },
  { name: "PEDA", url: "https://peda.gov.in" },
  { name: "CEA", url: "https://cea.nic.in" },
  { name: "CPCB", url: "https://cpcb.nic.in" },
  { name: "PPCB", url: "https://ppcb.punjab.gov.in" },
  { name: "MoEFCC", url: "https://moef.gov.in" },
  { name: "BEE", url: "https://beeindia.gov.in" },
  { name: "NITI Aayog", url: "https://niti.gov.in" },
];

// Duplicate for infinite scroll effect
const allPartners = [...partners, ...partners];

const PartnersCarousel = () => {
  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Building2 className="w-4 h-4" />
            Trusted By
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Our Government <span className="text-primary">Partners</span>
          </h2>
        </motion.div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />

        {/* Scrolling Track */}
        <motion.div
          animate={{ x: [0, -50 * partners.length] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-8 py-4"
        >
          {allPartners.map((partner, index) => (
            <a
              key={`${partner.name}-${index}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 group"
            >
              <div className="flex items-center gap-3 px-6 py-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 min-w-[200px]">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <ExternalLink className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersCarousel;

import { motion } from "framer-motion";
import { Shield, Award, Leaf, CheckCircle, FileCheck, BadgeCheck } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "ISO 9001:2015",
    description: "Quality Management System",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Leaf,
    title: "Eco-Certified",
    description: "Sustainable Production",
    color: "bg-[hsl(142,70%,45%)]/10 text-[hsl(142,70%,45%)]",
  },
  {
    icon: Award,
    title: "BIS Standards",
    description: "Bureau of Indian Standards",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: FileCheck,
    title: "PPCB Approved",
    description: "Punjab Pollution Control Board",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BadgeCheck,
    title: "MNRE Listed",
    description: "Ministry of New & Renewable Energy",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: CheckCircle,
    title: "GST Registered",
    description: "Tax Compliant Business",
    color: "bg-secondary/10 text-secondary",
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

const Certifications = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
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
            <Shield className="w-4 h-4" />
            Certifications & Compliance
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quality <span className="text-primary">Assured</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our operations meet the highest standards of quality, safety, and environmental compliance
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto"
        >
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-muted-foreground">{cert.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            All certifications are current and regularly audited. We maintain strict compliance with 
            all regulatory requirements for biomass production and distribution.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

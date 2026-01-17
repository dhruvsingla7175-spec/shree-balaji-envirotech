import { motion } from "framer-motion";
import { Truck, Cog, Circle, ClipboardCheck, Leaf, Factory, Package, Award } from "lucide-react";

const steps = [
  {
    icon: Truck,
    title: "Raw Material Collection",
    description: "Agricultural residues like rice husk, wheat straw, and sawdust are collected from farms and sawmills across Punjab.",
    details: ["Paddy straw from fields", "Wood chips from sawmills", "Agricultural waste sorting"],
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Cog,
    title: "Material Processing",
    description: "Raw materials undergo size reduction, drying, and conditioning to achieve optimal moisture content below 12%.",
    details: ["Hammer mill crushing", "Rotary dryer processing", "Moisture optimization"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Factory,
    title: "Pellet Formation",
    description: "Processed material is compressed under high pressure through die holes to form dense, uniform pellets.",
    details: ["Ring die pelletizer", "High-pressure compression", "Natural lignin binding"],
    color: "from-primary to-green-500"
  },
  {
    icon: Package,
    title: "Cooling & Packaging",
    description: "Hot pellets are cooled, screened for quality, and packaged in moisture-resistant bags for storage.",
    details: ["Counter-flow cooling", "Vibrating screen sorting", "50kg bag packaging"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: ClipboardCheck,
    title: "Quality Testing",
    description: "Every batch undergoes rigorous testing for calorific value, moisture, ash content, and durability.",
    details: ["Calorific value testing", "Durability index check", "Ash content analysis"],
    color: "from-emerald-500 to-teal-500"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const stepVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: { 
    scaleY: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.5, type: "spring" as const, stiffness: 200 }
  }
};

const Manufacturing = () => {
  return (
    <section id="process" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Factory className="w-4 h-4" />
            Our Manufacturing Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            From Farm Waste to <span className="text-primary">Clean Energy</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our state-of-the-art facility transforms agricultural residues into high-quality biomass pellets 
            through a carefully controlled 5-step process.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-primary origin-top"
              variants={lineVariants}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              variants={stepVariants}
            >
              {/* Icon */}
              <motion.div 
                className={`absolute left-8 md:left-1/2 -translate-x-1/2 z-10 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                variants={iconVariants}
                whileHover={{ scale: 1.1 }}
              >
                <step.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Content card */}
              <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                <motion.div 
                  className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
                  
                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:items-end" : ""}`}>
                    {step.details.map((detail, i) => (
                      <motion.li 
                        key={i}
                        className={`flex items-center gap-2 text-sm ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <Circle className="w-2 h-2 fill-primary text-primary" />
                        <span className="text-foreground/80">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-4rem)]" />
            </motion.div>
          ))}
        </motion.div>

        {/* Quality badges */}
        <motion.div 
          className="mt-16 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { icon: Award, label: "ISO 9001:2015 Certified" },
            { icon: Leaf, label: "Eco-Friendly Production" },
            { icon: ClipboardCheck, label: "Quality Assured" }
          ].map((badge, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full shadow-sm"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            >
              <badge.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Manufacturing;

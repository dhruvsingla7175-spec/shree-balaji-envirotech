import { motion, type Easing } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPin, TrendingUp, Factory, Leaf, Building2, Flame, Users, ArrowUpRight } from "lucide-react";

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: easeOut } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } }
};

const regions = [
  { state: "Punjab", waste: "20+ Million Tons", source: "Paddy Straw", growth: "+35%" },
  { state: "Haryana", waste: "12+ Million Tons", source: "Rice & Wheat Straw", growth: "+28%" },
  { state: "Uttar Pradesh", waste: "25+ Million Tons", source: "Sugarcane Bagasse", growth: "+40%" },
  { state: "Rajasthan", waste: "8+ Million Tons", source: "Mustard Stalks", growth: "+22%" },
];

const industries = [
  { icon: Factory, name: "Textiles", description: "Boilers & heating systems" },
  { icon: Building2, name: "Food Processing", description: "Steam generation" },
  { icon: Flame, name: "Brick Kilns", description: "Coal replacement" },
  { icon: TrendingUp, name: "Power Plants", description: "Co-firing mandates" },
];

const demandDrivers = [
  {
    icon: Leaf,
    title: "Government Push",
    description: "Strict policies to reduce stubble burning and promote biomass utilization",
  },
  {
    icon: TrendingUp,
    title: "Carbon Credits",
    description: "Industries earning carbon credits by switching to renewable biomass",
  },
  {
    icon: Users,
    title: "Industrial Shift",
    description: "Manufacturing sector transitioning from coal to cleaner alternatives",
  },
];

const Demand = () => {
  return (
    <section id="demand" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Market Opportunity
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Growing Demand in <span className="text-primary">North India</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            North India represents a massive opportunity with millions of tons of agricultural waste and rising industrial demand
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Regional Data */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              Regional Biomass Availability
            </h3>
            
            <motion.div variants={staggerContainer} className="space-y-4">
              {regions.map((region, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="p-5 bg-card border-border hover:shadow-elevated transition-all duration-300 group">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                          {region.state}
                        </h4>
                        <p className="text-sm text-muted-foreground">{region.source}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-foreground">{region.waste}</div>
                        <div className="flex items-center gap-1 text-primary text-sm font-semibold">
                          <ArrowUpRight className="w-4 h-4" />
                          {region.growth} YoY
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Key Cities */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/20"
            >
              <h4 className="font-bold text-foreground mb-4">Key Demand Centers</h4>
              <div className="flex flex-wrap gap-2">
                {["Ludhiana", "Jalandhar", "Amritsar", "Bathinda", "Patiala", "Chandigarh", "Panipat", "Karnal"].map((city, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-card rounded-full text-sm font-medium text-foreground border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Industry & Drivers */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="space-y-8"
          >
            {/* Target Industries */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Factory className="w-6 h-6 text-secondary" />
                Target Industries
              </h3>
              <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <motion.div key={index} variants={scaleIn}>
                    <Card className="p-5 bg-card border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group text-center">
                      <div className="inline-flex p-3 bg-secondary/10 rounded-xl mb-3 group-hover:bg-secondary/20 transition-colors">
                        <industry.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <h4 className="font-bold text-foreground mb-1">{industry.name}</h4>
                      <p className="text-xs text-muted-foreground">{industry.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Demand Drivers */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Demand Drivers</h3>
              <motion.div variants={staggerContainer} className="space-y-4">
                {demandDrivers.map((driver, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="p-5 bg-card border-border hover:shadow-elevated transition-all duration-300 group">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                          <driver.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-1">{driver.title}</h4>
                          <p className="text-sm text-muted-foreground">{driver.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-gold border-none">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "65M+", label: "Tons Biomass/Year", subtext: "Available in North India" },
                { value: "₹500Cr+", label: "Market Size", subtext: "And growing rapidly" },
                { value: "30%", label: "Annual Growth", subtext: "In pellet demand" },
                { value: "1000+", label: "Industries", subtext: "Switching to biomass" },
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-1">{stat.value}</div>
                  <div className="text-secondary-foreground font-medium text-sm">{stat.label}</div>
                  <div className="text-secondary-foreground/70 text-xs mt-1">{stat.subtext}</div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Demand;

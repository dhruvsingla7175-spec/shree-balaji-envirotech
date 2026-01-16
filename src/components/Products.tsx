import { motion, type Easing } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ruler, Flame, Droplets, Wind, Package, Sparkles, Check } from "lucide-react";

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

const specifications = [
  { icon: Ruler, label: "Diameter", value: "6-8 mm", description: "Standard size for efficient combustion" },
  { icon: Package, label: "Length", value: "10-40 mm", description: "Optimal length for various applications" },
  { icon: Droplets, label: "Moisture", value: "< 10%", description: "Low moisture for efficient burning" },
  { icon: Flame, label: "Calorific Value", value: "4000-4500 Kcal/kg", description: "High energy output" },
  { icon: Wind, label: "Ash Content", value: "< 5%", description: "Minimal residue after combustion" },
  { icon: Sparkles, label: "Bulk Density", value: "650-700 kg/m³", description: "Compact storage & transport" },
];

const pelletTypes = [
  {
    name: "Agro-Waste Pellets",
    rawMaterial: "Rice Husk, Wheat Straw",
    calorificValue: "3800-4200 Kcal/kg",
    price: "₹6,500 - ₹7,500",
    priceUnit: "per ton",
    popular: false,
    features: ["Abundant availability", "Cost-effective", "Low emissions"],
  },
  {
    name: "Wood Pellets",
    rawMaterial: "Sawdust, Wood Chips",
    calorificValue: "4200-4500 Kcal/kg",
    price: "₹7,500 - ₹8,500",
    priceUnit: "per ton",
    popular: true,
    features: ["High calorific value", "Low ash content", "Premium quality"],
  },
  {
    name: "Mixed Biomass Pellets",
    rawMaterial: "Multi-source Biomass",
    calorificValue: "4000-4300 Kcal/kg",
    price: "₹7,000 - ₹8,000",
    priceUnit: "per ton",
    popular: false,
    features: ["Versatile application", "Balanced performance", "Year-round supply"],
  },
  {
    name: "Premium Industrial",
    rawMaterial: "Selected Feedstock",
    calorificValue: "4400-4800 Kcal/kg",
    price: "₹8,500 - ₹10,000",
    priceUnit: "per ton",
    popular: false,
    features: ["Highest efficiency", "Ultra-low moisture", "Industrial grade"],
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

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
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Premium <span className="text-primary">Biomass Pellets</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            High-quality pellets manufactured with precision for optimal energy output and environmental sustainability
          </p>
        </motion.div>

        {/* Specifications Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-center mb-8">
            Technical Specifications
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specifications.map((spec, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="p-6 text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 bg-card border-border group h-full">
                  <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                    <spec.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                  <div className="text-xl font-bold text-foreground mb-2">{spec.value}</div>
                  <div className="text-xs text-muted-foreground/80">{spec.description}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pellet Types & Pricing */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-center mb-4">
            Pellet Types & Pricing
          </motion.h3>
          <motion.p variants={fadeInUp} className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
            Choose the right pellet type for your energy needs. Bulk orders and long-term contracts available.
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pelletTypes.map((pellet, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className={`relative p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 bg-card border-border h-full flex flex-col ${pellet.popular ? 'ring-2 ring-secondary' : ''}`}>
                  {pellet.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  
                  <h4 className="text-lg font-bold text-foreground mb-2">{pellet.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{pellet.rawMaterial}</p>
                  
                  <div className="mb-4">
                    <div className="text-xs text-muted-foreground">Calorific Value</div>
                    <div className="text-sm font-semibold text-primary">{pellet.calorificValue}</div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-foreground">{pellet.price}</div>
                    <div className="text-xs text-muted-foreground">{pellet.priceUnit}</div>
                  </div>
                  
                  <ul className="space-y-2 mt-auto">
                    {pellet.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;

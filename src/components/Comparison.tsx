import { motion, type Easing } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Leaf, Flame, DollarSign, Wind, CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: easeOut } }
};

const progressVariant = {
  hidden: { width: 0 },
  visible: (width: number) => ({
    width: `${width}%`,
    transition: { duration: 1, ease: easeOut, delay: 0.3 }
  })
};

const fuels = [
  {
    name: "Biomass Pellets",
    icon: Leaf,
    color: "bg-primary",
    textColor: "text-primary",
    costPerMKcal: "₹1,500-1,800",
    costScore: 90,
    co2: "Carbon Neutral",
    co2Status: "good",
    ash: "3-5%",
    ashScore: 95,
    sulfur: "<0.05%",
    sulfurScore: 98,
    availability: "Renewable",
    storage: "Easy",
    isHighlighted: true,
  },
  {
    name: "Coal",
    icon: Flame,
    color: "bg-slate-600",
    textColor: "text-slate-600",
    costPerMKcal: "₹2,500-3,000",
    costScore: 60,
    co2: "High Emissions",
    co2Status: "bad",
    ash: "20-40%",
    ashScore: 30,
    sulfur: "2-4%",
    sulfurScore: 20,
    availability: "Limited",
    storage: "Difficult",
    isHighlighted: false,
  },
  {
    name: "LPG",
    icon: Wind,
    color: "bg-blue-500",
    textColor: "text-blue-500",
    costPerMKcal: "₹4,500+",
    costScore: 35,
    co2: "Medium",
    co2Status: "medium",
    ash: "0%",
    ashScore: 100,
    sulfur: "Low",
    sulfurScore: 85,
    availability: "Imported",
    storage: "Specialized",
    isHighlighted: false,
  },
  {
    name: "Diesel",
    icon: DollarSign,
    color: "bg-amber-600",
    textColor: "text-amber-600",
    costPerMKcal: "₹5,000+",
    costScore: 25,
    co2: "High Emissions",
    co2Status: "bad",
    ash: "0%",
    ashScore: 100,
    sulfur: "0.5-1%",
    sulfurScore: 60,
    availability: "Imported",
    storage: "Specialized",
    isHighlighted: false,
  },
];

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "good") return <CheckCircle2 className="w-5 h-5 text-primary" />;
  if (status === "medium") return <AlertCircle className="w-5 h-5 text-amber-500" />;
  return <XCircle className="w-5 h-5 text-destructive" />;
};

const Comparison = () => {
  return (
    <section id="comparison" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            Fuel Comparison
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why <span className="text-primary">Biomass</span> Outperforms?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive comparison showing how biomass pellets deliver superior value across all key parameters
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {fuels.map((fuel, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Card className={`p-6 h-full ${fuel.isHighlighted ? 'ring-2 ring-primary bg-primary/5' : 'bg-card'} border-border hover:shadow-elevated transition-all duration-300`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 ${fuel.color} rounded-xl`}>
                    <fuel.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{fuel.name}</h3>
                    {fuel.isHighlighted && (
                      <span className="text-xs text-primary font-semibold">Recommended</span>
                    )}
                  </div>
                </div>

                <div className="space-y-5">
                  {/* Cost */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Cost per M.Kcal</span>
                      <span className="font-semibold text-foreground">{fuel.costPerMKcal}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${fuel.color} rounded-full`}
                        variants={progressVariant}
                        custom={fuel.costScore}
                      />
                    </div>
                  </div>

                  {/* CO2 */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">CO2 Emissions</span>
                    <div className="flex items-center gap-2">
                      <StatusIcon status={fuel.co2Status} />
                      <span className="text-sm font-medium text-foreground">{fuel.co2}</span>
                    </div>
                  </div>

                  {/* Ash Content */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Ash Content</span>
                      <span className="font-semibold text-foreground">{fuel.ash}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${fuel.color} rounded-full`}
                        variants={progressVariant}
                        custom={fuel.ashScore}
                      />
                    </div>
                  </div>

                  {/* Sulfur */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Sulfur Content</span>
                      <span className="font-semibold text-foreground">{fuel.sulfur}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${fuel.color} rounded-full`}
                        variants={progressVariant}
                        custom={fuel.sulfurScore}
                      />
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="pt-4 border-t border-border space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Availability</span>
                      <span className={`font-medium ${fuel.isHighlighted ? 'text-primary' : 'text-foreground'}`}>
                        {fuel.availability}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Storage</span>
                      <span className={`font-medium ${fuel.isHighlighted ? 'text-primary' : 'text-foreground'}`}>
                        {fuel.storage}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Advantages Summary */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Card className="p-8 bg-gradient-hero border-none">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { value: "40%", label: "Cost Savings vs Coal" },
                { value: "100%", label: "Carbon Neutral" },
                { value: "95%", label: "Less Ash vs Coal" },
                { value: "24/7", label: "Renewable Supply" },
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="text-4xl font-bold text-primary-foreground mb-2">{stat.value}</div>
                  <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;

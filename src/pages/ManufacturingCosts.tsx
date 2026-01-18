import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wheat, 
  Zap, 
  Wrench, 
  Users, 
  Landmark, 
  AlertTriangle,
  Truck,
  Building2,
  TrendingDown,
  Calculator
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const costBreakdown = [
  {
    icon: Wheat,
    title: "Raw Material (Paddy Straw)",
    cost: "₹2.40",
    description: "Effective cost including moisture, loading, unloading, wastage, internal transport",
    note: "Base buying price: ₹1.75/kg",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Zap,
    title: "Electric Cost",
    cost: "₹1.45",
    description: "125 kWh/ton @ ₹9.50/kWh",
    note: "Major operational expense",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: Wrench,
    title: "Maintenance & Spare Parts",
    cost: "₹0.65",
    description: "Die, roller assembly, shell, bearing, hammer, sieves with misc",
    note: "Regular replacement required",
    color: "from-slate-500 to-slate-700"
  },
  {
    icon: Users,
    title: "Labour",
    cost: "₹0.50",
    description: "Operators, helpers, supervisors, manager, security, cleaning",
    note: "2 shifts operation",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Landmark,
    title: "Bank Interest",
    cost: "₹0.50",
    description: "Based on ₹10 Cr loan @ 10% p.a.",
    note: "Financial cost",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: AlertTriangle,
    title: "Mishappening / Contingency",
    cost: "₹0.20",
    description: "Unexpected spare parts and repairs",
    note: "Buffer for unforeseen issues",
    color: "from-red-500 to-rose-500"
  }
];

const additionalCosts = [
  {
    icon: Truck,
    title: "Transport to NTPC & Private",
    cost: "₹0.75",
    description: "Load & unload charges under 200km (depends on distance)"
  },
  {
    icon: Building2,
    title: "Factory Overheads & Misc",
    cost: "₹0.30",
    description: "Admin salaries, insurance, office expenses, food & water"
  }
];

const costCuttingMethods = [
  "Self Baling - Reduce raw material costs",
  "Solar Project - Reduce electricity costs",
  "Own Transport - Reduce logistics costs",
  "Double Project Setup - Economy of scale",
  "Subsidy + Loan Optimization",
  "Round Bales Usage - Better efficiency"
];

const ManufacturingCosts = () => {
  const totalManufacturing = 5.70;
  const totalWithOverheads = 6.75;

  return (
    <>
      <SEOHead 
        title="Manufacturing Cost Breakdown | Biomass Pellet Production Costs"
        description="Detailed per-kg manufacturing cost analysis for biomass pellet production. Raw material, electricity, labour, and overhead costs explained."
        keywords="biomass pellet cost, manufacturing cost, production cost per kg, pellet production economics"
      />
      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Calculator className="w-4 h-4 mr-2" />
                Cost Analysis
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Manufacturing Cost Breakdown
              </h1>
              <p className="text-xl text-foreground/70 mb-8">
                Transparent per-kilogram cost analysis for non-torrefied biomass pellet production
              </p>
              
              {/* Total Cost Highlight */}
              <div className="flex flex-wrap justify-center gap-6">
                <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
                  <CardContent className="p-6 text-center">
                    <p className="text-sm opacity-90 mb-1">Manufacturing Cost</p>
                    <p className="text-4xl font-bold">₹{totalManufacturing.toFixed(2)}</p>
                    <p className="text-sm opacity-75">per kg</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground border-0">
                  <CardContent className="p-6 text-center">
                    <p className="text-sm opacity-90 mb-1">Total with Overheads</p>
                    <p className="text-4xl font-bold">₹{totalWithOverheads.toFixed(2)}</p>
                    <p className="text-sm opacity-75">per kg</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Cost Breakdown */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center text-foreground mb-4">
                Core Manufacturing Costs
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
                Breakdown of all direct costs involved in producing one kilogram of biomass pellets
              </motion.p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {costBreakdown.map((item, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="h-full hover:shadow-lg transition-shadow border-border/50 bg-card">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color}`}>
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-3xl font-bold text-primary">{item.cost}</span>
                        </div>
                        <CardTitle className="text-lg text-foreground">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/70 text-sm mb-2">{item.description}</p>
                        <Badge variant="secondary" className="text-xs">
                          {item.note}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Subtotal */}
              <motion.div variants={fadeInUp} className="mt-8">
                <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                  <CardContent className="p-6 flex items-center justify-between">
                    <span className="text-xl font-semibold text-foreground">Manufacturing Subtotal</span>
                    <span className="text-3xl font-bold text-primary">₹{totalManufacturing.toFixed(2)}/kg</span>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Additional Costs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center text-foreground mb-12">
                Additional Operating Costs
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {additionalCosts.map((item, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="h-full border-border/50 bg-card">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-muted">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                            <span className="text-xl font-bold text-primary">{item.cost}</span>
                          </div>
                          <p className="text-sm text-foreground/70">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Grand Total */}
              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0">
                  <CardContent className="p-8 flex items-center justify-between">
                    <div>
                      <p className="text-lg opacity-90 mb-1">Total Cost (Delivered)</p>
                      <p className="text-sm opacity-75">Including transport under 200km</p>
                    </div>
                    <span className="text-4xl font-bold">₹{totalWithOverheads.toFixed(2)}/kg</span>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Cost Cutting Methods */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <Badge className="mb-4 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                  <TrendingDown className="w-4 h-4 mr-2" />
                  Cost Optimization
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Cost Cutting Methods
                </h2>
                <p className="text-foreground/70">
                  Strategies to reduce production costs and improve profitability
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {costCuttingMethods.map((method, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="bg-card border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-foreground font-medium">{method}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center"
            >
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Want a Detailed Cost Analysis for Your Project?
                  </h2>
                  <p className="text-foreground/70 mb-6">
                    Contact us for a customized cost breakdown based on your specific requirements and location
                  </p>
                  <a
                    href="https://wa.me/919501005435"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Get Custom Quote
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ManufacturingCosts;

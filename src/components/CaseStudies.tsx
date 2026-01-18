import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingDown, Leaf, Award, ArrowRight, Factory, Flame, Milk } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const caseStudies = [
  {
    industry: "Textile Mill",
    location: "Ludhiana, Punjab",
    icon: Factory,
    challenge: "Rising coal costs eating into margins, facing pollution penalties from PPCB",
    solution: "Switched 2 boilers to biomass pellets with minor grate modifications",
    results: [
      { label: "Fuel Cost Savings", value: "38%", icon: TrendingDown },
      { label: "CO₂ Reduced", value: "1,200 tons/yr", icon: Leaf },
      { label: "ROI Period", value: "8 months", icon: Award },
    ],
    quote: "We were skeptical at first, but the numbers speak for themselves. Our fuel bill dropped by ₹18 lakhs annually.",
    author: "Plant Manager, Leading Textile Unit",
    color: "from-blue-500 to-cyan-500",
  },
  {
    industry: "Brick Kiln",
    location: "Bathinda, Punjab",
    icon: Flame,
    challenge: "Coal shortages causing production delays, struggling with GRAP regulations",
    solution: "Transitioned to 100% biomass pellets for zigzag kiln operation",
    results: [
      { label: "Fuel Cost Savings", value: "35%", icon: TrendingDown },
      { label: "Production Uptime", value: "99%", icon: Award },
      { label: "Emission Compliance", value: "100%", icon: Leaf },
    ],
    quote: "No more coal supply worries. Pellets arrive on schedule and burn cleaner than anything we've used before.",
    author: "Owner, Bathinda Brick Works",
    color: "from-orange-500 to-red-500",
  },
  {
    industry: "Dairy Processing",
    location: "Amritsar, Punjab",
    icon: Milk,
    challenge: "High diesel costs for steam generation, environmental certification needed",
    solution: "Installed biomass pellet burner for pasteurization boiler",
    results: [
      { label: "Fuel Cost Savings", value: "42%", icon: TrendingDown },
      { label: "Carbon Neutral", value: "Certified", icon: Leaf },
      { label: "Payback Period", value: "6 months", icon: Award },
    ],
    quote: "The switch to biomass helped us get organic certification. Our customers love that we're truly green.",
    author: "Operations Head, Dairy Cooperative",
    color: "from-emerald-500 to-teal-500",
  },
];

const CaseStudies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const cardsY = useTransform(scrollYProgress, [0, 0.5], ["30px", "0px"]);

  return (
    <section ref={sectionRef} id="case-studies" className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Parallax Background decoration */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl -translate-x-1/2" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Real Results from <span className="text-primary">Punjab Industries</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how businesses across Punjab are saving money and reducing emissions with our biomass pellets
          </p>
        </motion.div>

        <motion.div
          style={{ y: cardsY }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group overflow-hidden border-border">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${study.color} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
                        {study.industry}
                      </Badge>
                      <study.icon className="w-8 h-8 text-white/80" />
                    </div>
                    <p className="text-white/90 text-sm">{study.location}</p>
                  </div>
                </div>

                <CardContent className="p-6 space-y-6">
                  {/* Challenge & Solution */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-destructive mb-1">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">Solution</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-center p-3 bg-muted/50 rounded-lg group-hover:bg-muted transition-colors">
                        <result.icon className="w-4 h-4 mx-auto mb-1 text-primary" />
                        <div className="text-lg font-bold text-foreground">{result.value}</div>
                        <div className="text-[10px] text-muted-foreground leading-tight">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm italic text-muted-foreground mb-2">"{study.quote}"</p>
                    <p className="text-xs font-medium text-foreground">— {study.author}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-elevated hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
          >
            Get Similar Results for Your Business
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
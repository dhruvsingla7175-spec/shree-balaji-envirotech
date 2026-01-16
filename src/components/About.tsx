import { motion, type Easing } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Recycle, Factory, TrendingUp, CheckCircle2 } from "lucide-react";

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: easeOut }}
        className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={slideInLeft}>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Transforming <span className="text-primary">Agricultural Waste</span> into Clean Energy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Shree Balaji Envirotech LLP is a pioneer in manufacturing premium-grade biomass pellets. 
                We convert agricultural residues into highly efficient, eco-friendly fuel that powers industries 
                while reducing carbon footprint.
              </p>
            </motion.div>

            <motion.div 
              variants={slideInLeft}
              className="grid sm:grid-cols-3 gap-6"
            >
              {[
                { icon: Recycle, value: "100%", label: "Renewable", bg: "bg-primary/10", iconColor: "text-primary" },
                { icon: Factory, value: "Premium", label: "Quality", bg: "bg-secondary/20", iconColor: "text-secondary" },
                { icon: TrendingUp, value: "High", label: "Efficiency", bg: "bg-accent/20", iconColor: "text-accent" },
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: easeOut }}
                >
                  <div className={`inline-flex p-3 ${stat.bg} rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="relative"
          >
            <Card className="p-8 bg-card shadow-elevated border-border relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent" />
              
              <h3 className="text-2xl font-bold mb-6 text-card-foreground flex items-center gap-2">
                <span className="w-10 h-1 bg-primary rounded-full" />
                Our Commitment
              </h3>
              <motion.ul 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  "Premium quality biomass pellets with consistent specifications",
                  "Advanced manufacturing processes for optimal performance",
                  "Sustainable sourcing from agricultural waste materials",
                  "Dedicated customer support and technical assistance",
                  "Competitive pricing with reliable supply chain",
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    variants={fadeInUp}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="mt-0.5 flex-shrink-0 w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </Card>

            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, ease: easeOut }}
              className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg shadow-elevated font-semibold text-sm animate-float"
            >
              🌱 Eco-Certified
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

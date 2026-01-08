import { Card } from "@/components/ui/card";
import { Leaf, Zap, DollarSign, Shield, Flame, Droplets } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "100% Eco-Friendly",
    description: "Carbon-neutral renewable energy source that reduces environmental impact significantly",
    color: "from-primary to-primary/70",
  },
  {
    icon: Zap,
    title: "High Energy Output",
    description: "Superior calorific value of 4200+ kcal/kg ensuring efficient energy generation",
    color: "from-secondary to-accent",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "Up to 40% savings compared to traditional fuels with consistent pricing",
    color: "from-accent to-secondary",
  },
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Stringent quality control with ISO standards ensuring reliable performance",
    color: "from-primary/80 to-primary",
  },
  {
    icon: Flame,
    title: "Low Ash Content",
    description: "Less than 3% ash content for cleaner combustion and minimal residue",
    color: "from-secondary/80 to-accent",
  },
  {
    icon: Droplets,
    title: "Optimal Moisture",
    description: "8-10% moisture content for efficient burning and easy storage",
    color: "from-primary to-primary/60",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">Biomass Pellets</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sustainable, efficient, and economical - the perfect energy solution for modern industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group p-8 hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 bg-card border-border relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className={`mb-6 inline-flex p-4 bg-gradient-to-br ${benefit.color} rounded-2xl shadow-subtle group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

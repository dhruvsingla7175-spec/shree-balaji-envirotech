import { Card } from "@/components/ui/card";
import { Leaf, Zap, DollarSign, Shield } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "100% Eco-Friendly",
    description: "Carbon-neutral renewable energy source that reduces environmental impact",
  },
  {
    icon: Zap,
    title: "High Energy Output",
    description: "Superior calorific value ensuring efficient energy generation",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "Economical alternative to traditional fuels with consistent pricing",
  },
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Stringent quality control ensuring consistent, reliable performance",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">Biomass Pellets</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sustainable, efficient, and economical - the perfect energy solution for modern industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 inline-flex p-4 bg-gradient-green rounded-2xl shadow-subtle">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

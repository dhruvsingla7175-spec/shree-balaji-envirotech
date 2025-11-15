import { Card } from "@/components/ui/card";
import { Recycle, Factory, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Transforming <span className="text-primary">Agricultural Waste</span> into Clean Energy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Shree Balaji Envirotech LLP is a pioneer in manufacturing premium-grade biomass pellets. 
              We convert agricultural residues into highly efficient, eco-friendly fuel that powers industries 
              while reducing carbon footprint.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our state-of-the-art processing ensures consistent quality, optimal moisture content, 
              and superior energy density, making our pellets the preferred choice for sustainable energy needs.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-3">
                  <Recycle className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Renewable</div>
              </div>
              <div className="text-center">
                <div className="inline-flex p-3 bg-secondary/20 rounded-xl mb-3">
                  <Factory className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">Premium</div>
                <div className="text-sm text-muted-foreground">Quality</div>
              </div>
              <div className="text-center">
                <div className="inline-flex p-3 bg-accent/20 rounded-xl mb-3">
                  <TrendingUp className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">High</div>
                <div className="text-sm text-muted-foreground">Efficiency</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <Card className="p-8 bg-card shadow-elevated border-border">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Our Commitment</h3>
              <ul className="space-y-4">
                {[
                  "Premium quality biomass pellets with consistent specifications",
                  "Advanced manufacturing processes for optimal performance",
                  "Sustainable sourcing from agricultural waste materials",
                  "Dedicated customer support and technical assistance",
                  "Competitive pricing with reliable supply chain",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

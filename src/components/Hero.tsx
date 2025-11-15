import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-border shadow-subtle">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Sustainable Energy Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-primary-foreground">Premium</span>
              <br />
              <span className="text-secondary">Biomass Pellet</span>
              <br />
              <span className="text-primary-foreground">Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
              Leading the way in sustainable energy with high-quality, eco-friendly biomass pellets. 
              Powering industries while protecting our planet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-elevated group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-gold rounded-full blur-3xl opacity-30" />
              <img 
                src={logo} 
                alt="Shree Balaji Envirotech LLP Logo" 
                className="relative w-full max-w-md h-auto drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

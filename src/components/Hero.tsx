import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Play } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-foreground/5 rounded-full blur-3xl" />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-secondary/40 rounded-full animate-float"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-border shadow-subtle animate-pulse-subtle">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Sustainable Energy Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-primary-foreground">Premium</span>
              <br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Biomass Pellet</span>
              <br />
              <span className="text-primary-foreground">Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
              Leading the way in sustainable energy with high-quality, eco-friendly biomass pellets. 
              Powering industries while protecting our planet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-elevated group text-lg px-8"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToAbout}
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 group"
              >
                <Play className="mr-2 w-4 h-4" />
                Learn More
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-secondary/80 border-2 border-primary flex items-center justify-center text-xs font-bold text-secondary-foreground">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-primary-foreground/80 text-sm">50+ Happy Clients</span>
              </div>
              <div className="h-8 w-px bg-primary-foreground/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-secondary text-lg">★</span>
                  ))}
                </div>
                <span className="text-primary-foreground/80 text-sm">Trusted Quality</span>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-gold rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="absolute -inset-4 bg-secondary/20 rounded-full blur-2xl animate-pulse-subtle" />
              <img 
                src={logo} 
                alt="Shree Balaji Envirotech LLP Logo" 
                className="relative w-full max-w-md h-auto drop-shadow-2xl animate-float rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

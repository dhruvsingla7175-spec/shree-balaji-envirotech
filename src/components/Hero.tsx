import { motion, type Easing } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, ChevronDown, Sparkles, Shield, Award } from "lucide-react";
import logo from "@/assets/logo.jpg";

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: easeOut } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: easeOut } }
};

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToStats = () => {
    document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-24 md:pt-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large ambient blobs */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: easeOut }}
          className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: easeOut }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: '1s' }} 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-foreground/5 rounded-full blur-3xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: easeOut }}
            className="absolute rounded-full animate-float"
            style={{
              width: `${8 + i * 4}px`,
              height: `${8 + i * 4}px`,
              background: `linear-gradient(135deg, hsl(40 85% 55% / ${0.3 + i * 0.05}), hsl(145 65% 35% / ${0.2 + i * 0.03}))`,
              top: `${10 + i * 10}%`,
              left: `${5 + i * 12}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2.5 bg-card/90 backdrop-blur-md rounded-full border border-secondary/30 shadow-elevated">
              <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Sustainable Energy Solutions
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-primary-foreground">Premium</span>
              <br />
              <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease-in-out_infinite]">
                Biomass Pellet
              </span>
              <br />
              <span className="text-primary-foreground">Solutions</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/90 max-w-xl leading-relaxed">
              Leading the way in sustainable energy with <strong className="text-secondary">high-quality</strong>, eco-friendly biomass pellets. 
              Powering industries while protecting our planet.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-elevated group text-lg px-8 h-14 hover:scale-105 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToAbout}
                className="border-2 border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary h-14 transition-all duration-300"
              >
                <Leaf className="mr-2 w-5 h-5" />
                Learn More
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-6 justify-center lg:justify-start">
              {[
                { icon: Shield, text: "ISO Certified" },
                { icon: Award, text: "Quality Assured" },
                { icon: Leaf, text: "100% Eco-Friendly" },
              ].map((badge, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.4, ease: easeOut }}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20"
                >
                  <badge.icon className="w-4 h-4 text-secondary" />
                  <span className="text-primary-foreground/90 text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Logo with enhanced presentation */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Glow effects */}
              <div className="absolute inset-0 bg-gradient-gold rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 scale-110" />
              <div className="absolute -inset-6 bg-secondary/20 rounded-full blur-2xl animate-pulse-subtle" />
              
              {/* Main logo container */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md rounded-3xl p-6 border border-secondary/20 shadow-elevated"
              >
                <img 
                  src={logo} 
                  alt="Shree Balaji Envirotech LLP Logo" 
                  className="relative w-full max-w-sm h-auto drop-shadow-2xl animate-float rounded-2xl"
                />
                
                {/* Floating badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5, ease: easeOut }}
                  className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full shadow-elevated flex items-center gap-2 animate-bounce-subtle"
                >
                  <span className="text-lg">🌱</span>
                  <span className="font-bold text-sm">Green Energy</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6, ease: easeOut }}
        onClick={scrollToStats}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors cursor-pointer group"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll Down</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;

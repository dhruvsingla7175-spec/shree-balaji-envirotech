import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const heroSection = document.getElementById("hero");
      const contactSection = document.getElementById("contact");
      
      if (heroSection && contactSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        const contactTop = contactSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Show when past hero and not at contact section
        setIsVisible(heroBottom < 0 && contactTop > windowHeight && !isDismissed);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isDismissed]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.0, 0.0, 0.2, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-lg border-t border-border shadow-elevated py-3 px-4 md:hidden"
        >
          <div className="container mx-auto flex items-center justify-between gap-3">
            <div className="flex-1 flex gap-2">
              <a href="tel:+916280610158" className="flex-1">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
              </a>
              <a 
                href="https://wa.me/916280610158?text=Hi%2C%20I%27m%20interested%20in%20biomass%20pellets" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white gap-2">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
            </div>
            <button
              onClick={() => setIsDismissed(true)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Dismiss"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;

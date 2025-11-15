import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to switch to sustainable energy? Contact us today for premium biomass pellet solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card border-border">
            <div className="inline-flex p-4 bg-gradient-green rounded-2xl mb-6">
              <Phone className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-card-foreground">Call Us</h3>
            <p className="text-muted-foreground mb-4">Available Monday to Saturday</p>
            <a href="tel:+911234567890" className="text-primary hover:underline font-medium">
              +91 123 456 7890
            </a>
          </Card>

          <Card className="p-8 text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card border-border">
            <div className="inline-flex p-4 bg-gradient-gold rounded-2xl mb-6">
              <Mail className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-card-foreground">Email Us</h3>
            <p className="text-muted-foreground mb-4">We'll respond within 24 hours</p>
            <a href="mailto:info@balajienvirontech.com" className="text-primary hover:underline font-medium">
              info@balajienvirontech.com
            </a>
          </Card>

          <Card className="p-8 text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card border-border">
            <div className="inline-flex p-4 bg-primary/20 rounded-2xl mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-card-foreground">Visit Us</h3>
            <p className="text-muted-foreground">
              Industrial Area<br />
              Your City, State<br />
              India
            </p>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-green hover:opacity-90 text-primary-foreground shadow-elevated">
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

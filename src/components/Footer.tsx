import logo from "@/assets/logo.jpg";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
      <div className="absolute top-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Shree Balaji Envirotech LLP" className="h-14 w-auto rounded-full" />
              <div>
                <div className="font-bold text-lg">Shree Balaji</div>
                <div className="text-sm text-primary-foreground/80">Envirotech LLP</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Leading manufacturer of premium biomass pellets, committed to sustainable energy solutions.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Leaf className="w-4 h-4 text-secondary" />
              <span>Eco-Certified Manufacturer</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "hero" },
                { label: "Benefits", id: "benefits" },
                { label: "About Us", id: "about" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary rounded-full" />
              Our Products
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>Wood Biomass Pellets</li>
              <li>Agricultural Waste Pellets</li>
              <li>Industrial Grade Pellets</li>
              <li>Premium Heating Pellets</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-secondary rounded-full" />
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:+918360410158" className="hover:text-secondary transition-colors">
                  +91 83604 10158
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-4 h-4 text-secondary" />
                <a href="mailto:dhruv@shreebalajienvirotech.com" className="hover:text-secondary transition-colors">
                  dhruv@shreebalajienvirotech.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                <span>Bathinda, Punjab, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Shree Balaji Envirotech LLP. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/70 flex items-center gap-2">
              <Leaf className="w-4 h-4" />
              Committed to sustainable energy solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

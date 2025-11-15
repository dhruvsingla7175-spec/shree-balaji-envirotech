import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Shree Balaji Envirotech LLP" className="h-16 w-auto" />
            <div>
              <div className="font-bold text-lg">Shree Balaji Envirotech LLP</div>
              <div className="text-sm text-primary-foreground/80">Biomass Pellet Solutions</div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/90">
              © {new Date().getFullYear()} Shree Balaji Envirotech LLP. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/70 mt-2">
              Committed to sustainable energy solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

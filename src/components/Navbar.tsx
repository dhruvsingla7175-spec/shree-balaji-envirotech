import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { cn } from "@/lib/utils";
import { getAwarenessPages } from "@/data/blogPosts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "Products", id: "products" },
  { label: "Benefits", id: "benefits" },
  { label: "Demand", id: "demand" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const slugToLabel = (slug: string) =>
  slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

// Custom nav link component
const NavButton = ({ 
  children, 
  onClick, 
  isScrolled, 
  isActive 
}: { 
  children: React.ReactNode; 
  onClick: () => void; 
  isScrolled: boolean; 
  isActive: boolean;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "relative font-medium transition-colors group",
      isScrolled ? "text-foreground" : "text-primary-foreground",
      isActive && "text-secondary"
    )}
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
  </button>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const awarenessLinks = getAwarenessPages()
    .map((p) => ({
      label: slugToLabel(p.slug),
      href: p.awarenessPath || `/awareness/${p.slug}`,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a href="tel:+918360410158" className="hover:underline">+91 83604 10158</a>
            <span className="mx-2">|</span>
            <a href="mailto:shreebalajienvirotech@gmail.com" className="hover:underline">shreebalajienvirotech@gmail.com</a>
          </div>
          <div className="text-primary-foreground/90">
            🌿 Sustainable Energy for a Greener Tomorrow
          </div>
        </div>
      </div>
      
      <nav
        className={`fixed top-0 md:top-10 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-card/98 backdrop-blur-lg shadow-elevated py-3 md:top-0"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => scrollToSection("hero")}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src={logo} 
                  alt="Shree Balaji Envirotech LLP" 
                  className="h-12 w-auto rounded-full relative z-10 transition-transform group-hover:scale-105" 
                />
              </div>
              <div className={`hidden sm:block transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
                <div className="font-bold text-lg leading-tight">Shree Balaji</div>
                <div className="text-xs opacity-80">Envirotech LLP</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <NavButton
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  isScrolled={isScrolled}
                  isActive={activeSection === item.id}
                >
                  {item.label}
                </NavButton>
              ))}
              
              {/* Blog Link */}
              <Link
                to="/blog"
                className={cn(
                  "relative font-medium transition-colors group",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}
              >
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* Awareness Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={cn(
                  "relative font-medium transition-colors group flex items-center gap-1 outline-none",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}>
                  Awareness
                  <ChevronDown className="w-4 h-4" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  {awarenessLinks.map((page) => (
                    <DropdownMenuItem key={page.href} asChild>
                      <Link to={page.href} className="cursor-pointer">
                        {page.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-elevated hover:scale-105 transition-all"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? "text-foreground hover:bg-muted" 
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100 mt-4 pb-4" : "max-h-0 opacity-0"
          }`}>
            <div className="space-y-2 bg-card/95 backdrop-blur-lg rounded-xl p-4 shadow-elevated">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left font-medium py-3 px-4 rounded-lg transition-all ${
                    activeSection === item.id 
                      ? "bg-primary text-primary-foreground" 
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Blog Link */}
              <Link
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left font-medium py-3 px-4 rounded-lg transition-all text-foreground hover:bg-muted"
              >
                Blog
              </Link>

              {/* Mobile Awareness Links */}
              <div className="border-t border-border pt-2 mt-2">
                <div className="text-sm text-muted-foreground px-4 py-2">Awareness</div>
                {awarenessLinks.map((page) => (
                  <Link
                    key={page.href}
                    to={page.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left font-medium py-2 px-6 rounded-lg transition-all text-foreground hover:bg-muted text-sm"
                  >
                    {page.label}
                  </Link>
                ))}
              </div>

              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground mt-2"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
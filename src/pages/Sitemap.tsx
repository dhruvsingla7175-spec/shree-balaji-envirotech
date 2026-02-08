import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Info,
  BookOpen,
  Factory,
  Wrench,
  Shield,
  Users,
  FileText,
  Leaf,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

interface SitemapLink {
  label: string;
  href: string;
  description: string;
}

interface SitemapSection {
  title: string;
  icon: React.ReactNode;
  links: SitemapLink[];
}

const sections: SitemapSection[] = [
  {
    title: "Main Pages",
    icon: <Home className="w-5 h-5" />,
    links: [
      { label: "Home", href: "/", description: "Welcome to Shree Balaji Envirotech" },
      { label: "About Us", href: "/about", description: "Our story, mission & team" },
      { label: "Manufacturing Costs", href: "/manufacturing-costs", description: "Biomass pellet production cost breakdown" },
      { label: "Equipment", href: "/equipment", description: "Pellet manufacturing machinery & setup" },
      { label: "Compliance", href: "/compliance", description: "Environmental regulations & certifications" },
      { label: "Buyers", href: "/buyers", description: "Find biomass pellet buyers & markets" },
    ],
  },
  {
    title: "Blog",
    icon: <BookOpen className="w-5 h-5" />,
    links: [
      { label: "All Blog Posts", href: "/blog", description: "Latest articles & guides" },
      { label: "Biomass Pellets Complete Guide – Punjab", href: "/blog/biomass-pellets-complete-guide-punjab", description: "Everything you need to know about biomass pellets" },
      { label: "Stubble Burning Solution", href: "/blog/stubble-burning-solution-punjab-biomass-pellets", description: "How biomass pellets solve stubble burning in Punjab" },
      { label: "Coal to Biomass Switch", href: "/blog/coal-to-biomass-switch-industrial-boilers", description: "Switching industrial boilers from coal to biomass" },
      { label: "Biomass Pellet Price 2025", href: "/blog/biomass-pellet-price-punjab-2025", description: "Current pricing trends for biomass pellets" },
      { label: "Suppliers Near Bathinda", href: "/blog/biomass-pellet-suppliers-near-bathinda", description: "Top biomass pellet suppliers in the Bathinda area" },
      { label: "Rice Husk Pellets", href: "/blog/rice-husk-pellets-benefits-manufacturing", description: "Benefits & manufacturing of rice husk pellets" },
    ],
  },
  {
    title: "Industry Awareness",
    icon: <Factory className="w-5 h-5" />,
    links: [
      { label: "Industrial Fuel Costs Punjab", href: "/awareness/industrial-fuel-costs-punjab", description: "Fuel cost analysis for Punjab industries" },
      { label: "Textile Mills Fuel", href: "/awareness/textile-mills-fuel-punjab", description: "Biomass solutions for textile mills" },
      { label: "Brick Kilns Biomass", href: "/awareness/brick-kilns-biomass-punjab", description: "Sustainable fuel for brick kilns" },
      { label: "Food Processing Fuel", href: "/awareness/food-processing-fuel-punjab", description: "Green fuel for food processing units" },
      { label: "Rice Mills Fuel", href: "/awareness/rice-mills-fuel-punjab", description: "Cost-effective fuel for rice mills" },
      { label: "Dairy Plants Fuel", href: "/awareness/dairy-plants-fuel-punjab", description: "Biomass energy for dairy plants" },
      { label: "Paper Mills Fuel", href: "/awareness/paper-mills-fuel-punjab", description: "Sustainable fuel for paper mills" },
      { label: "Distilleries Fuel", href: "/awareness/distilleries-fuel-punjab", description: "Biomass pellets for distilleries" },
      { label: "Poultry Farms Fuel", href: "/awareness/poultry-farms-fuel-punjab", description: "Heating solutions for poultry farms" },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Sitemap – Shree Balaji Envirotech"
        description="Browse all pages on Shree Balaji Envirotech — main pages, blog posts, and industry awareness articles about biomass pellets in Punjab."
        keywords="sitemap, biomass pellets, Shree Balaji Envirotech, Punjab"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3"
          >
            Sitemap
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            A complete directory of every page on our website — find what you're looking for quickly.
          </motion.p>
        </div>
      </section>

      {/* Sitemap Grid */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {sections.map((section) => (
            <motion.div
              key={section.title}
              variants={item}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary">
                  {section.icon}
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  {section.title}
                </h2>
              </div>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group flex items-start gap-2 rounded-lg px-3 py-2 -mx-3 hover:bg-primary/5 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 mt-0.5 text-primary/60 group-hover:text-primary transition-colors shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {link.label}
                        </span>
                        <p className="text-xs text-muted-foreground leading-snug mt-0.5">
                          {link.description}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Sitemap;

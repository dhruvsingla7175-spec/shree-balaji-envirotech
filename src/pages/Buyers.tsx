import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Flame,
  Factory,
  Building2,
  Milk,
  FileText,
  Pill,
  Package,
  Wheat,
  MapPin,
  Users,
  TrendingUp,
  Phone
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const thermalPlants = {
  punjab: [
    { name: "Ropar Thermal Power Plant", location: "Rupnagar", capacity: "1260 MW" },
    { name: "Lehra Mohabbat Thermal Plant", location: "Bhucho", capacity: "1980 MW" },
    { name: "Nabha Thermal Power Plant", location: "Rajpura (L&T Power)", capacity: "2640 MW" },
    { name: "Rajpura Thermal Power Plant", location: "Nabha", capacity: "1400 MW" }
  ],
  haryana: [
    { name: "Panipat Thermal Power Station", location: "Panipat", capacity: "1360 MW" },
    { name: "Deenbandhu Chhotu Ram TPS", location: "Yamunanagar", capacity: "600 MW" },
    { name: "Indira Gandhi Super Thermal Power Project", location: "Jhajjar (NTPC-Haryana)", capacity: "1500 MW" },
    { name: "Faridabad Gas Thermal Plant", location: "Faridabad", capacity: "430 MW" },
    { name: "NTPC Faridabad", location: "Faridabad", capacity: "NA" }
  ],
  ntpc: [
    { name: "NTPC Dadri", location: "Dhadari, UP", capacity: "1820 MW" },
    { name: "Badarpur Thermal Power Plant", location: "NTPC Delhi", capacity: "705 MW (Decommissioned)" },
    { name: "APCPL Jharli", location: "Haryana", capacity: "1320 MW" }
  ]
};

const industrialBuyers = [
  {
    icon: Factory,
    title: "Brick Kilns",
    description: "Large-scale consumers transitioning from coal to biomass pellets",
    demand: "High",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: FileText,
    title: "Paper Mills",
    description: "Steam generation for pulp processing and drying operations",
    demand: "High",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Wheat,
    title: "Food Processing Plants",
    description: "Boiler fuel for food processing and preservation",
    demand: "Medium",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: Pill,
    title: "Pharmaceutical Industries",
    description: "Clean fuel for pharmaceutical manufacturing processes",
    demand: "Medium",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: Milk,
    title: "Dairy Plants",
    description: "Steam for pasteurization and dairy processing",
    demand: "High",
    color: "from-sky-500 to-blue-500"
  },
  {
    icon: Building2,
    title: "Cement Manufacturing",
    description: "Alternative fuel for cement kilns and processing",
    demand: "Very High",
    color: "from-slate-500 to-gray-600"
  },
  {
    icon: Package,
    title: "Plywood Industries",
    description: "Thermal energy for plywood pressing and drying",
    demand: "Medium",
    color: "from-amber-600 to-orange-600"
  },
  {
    icon: Factory,
    title: "Textile Mills",
    description: "Steam generation for dyeing and finishing processes",
    demand: "High",
    color: "from-purple-500 to-violet-500"
  }
];

const majorBrands = [
  { name: "Amul Milk Plant", location: "Multiple locations" },
  { name: "Nestlé Plant", location: "Moga, Punjab" },
  { name: "Thermax Limited", location: "Industrial heating solutions" },
  { name: "ITC Limited", location: "Agri-business division" },
  { name: "Trident Group", location: "Barnala, Punjab" },
  { name: "Uttam Energy Limited", location: "Renewable energy" },
  { name: "SAEL", location: "Sustainable Agro Energy Ltd" },
  { name: "Sukhbir Agro Energy Ltd", location: "Punjab" }
];

const localContacts = [
  { type: "Paper Factory", location: "Near Tapa Grid" },
  { type: "Brick Kiln", location: "Near Dhaula Grid" },
  { type: "Ashutosh Plastic Industry", location: "Near Tapa Grid" },
  { type: "Trader - Vijay Malik BPM", location: "Punjab" },
  { type: "Samana Industries", location: "Pellet factory, Bricks" }
];

const Buyers = () => {
  return (
    <>
      <SEOHead 
        title="Biomass Pellet Buyers | Thermal Plants, Industries & Traders"
        description="Connect with major biomass pellet buyers: NTPC, thermal power plants, brick kilns, paper mills, dairy plants across Punjab & North India."
        keywords="biomass pellet buyers, NTPC biomass, thermal plant fuel, brick kiln biomass, industrial pellet buyers Punjab"
      />
      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Users className="w-4 h-4 mr-2" />
                Market Demand
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Potential Buyers & Customers
              </h1>
              <p className="text-xl text-foreground/70 mb-8">
                Large-scale consumers of biomass pellets across Punjab, Haryana & North India
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <Card className="bg-card border-border/50">
                  <CardContent className="p-4 text-center">
                    <Flame className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold text-foreground">15+</p>
                    <p className="text-sm text-foreground/70">Thermal Plants</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border/50">
                  <CardContent className="p-4 text-center">
                    <Factory className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold text-foreground">8+</p>
                    <p className="text-sm text-foreground/70">Industry Types</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border/50">
                  <CardContent className="p-4 text-center">
                    <Building2 className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold text-foreground">50+</p>
                    <p className="text-sm text-foreground/70">Major Brands</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border/50">
                  <CardContent className="p-4 text-center">
                    <TrendingUp className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold text-foreground">5%+</p>
                    <p className="text-sm text-foreground/70">Co-firing Mandate</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Thermal Power Plants */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <Badge className="mb-4 bg-red-500/10 text-red-600 border-red-500/20">
                  <Flame className="w-4 h-4 mr-2" />
                  Government Mandate
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Thermal Power Plants
                </h2>
                <p className="text-foreground/70 max-w-2xl mx-auto">
                  Under government mandate, thermal power plants must use 5-7% biomass co-firing, creating massive demand for pellets
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Punjab */}
                <motion.div variants={fadeInUp}>
                  <Card className="h-full border-border/50 bg-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-foreground">
                        <MapPin className="w-5 h-5 text-primary" />
                        Punjab
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {thermalPlants.punjab.map((plant, index) => (
                        <div key={index} className="p-3 rounded-lg bg-muted/50 border border-border/30">
                          <p className="font-medium text-foreground">{plant.name}</p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-sm text-foreground/60">{plant.location}</span>
                            <Badge variant="secondary" className="text-xs">{plant.capacity}</Badge>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Haryana */}
                <motion.div variants={fadeInUp}>
                  <Card className="h-full border-border/50 bg-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-foreground">
                        <MapPin className="w-5 h-5 text-primary" />
                        Haryana
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {thermalPlants.haryana.map((plant, index) => (
                        <div key={index} className="p-3 rounded-lg bg-muted/50 border border-border/30">
                          <p className="font-medium text-foreground">{plant.name}</p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-sm text-foreground/60">{plant.location}</span>
                            <Badge variant="secondary" className="text-xs">{plant.capacity}</Badge>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* NTPC & Others */}
                <motion.div variants={fadeInUp}>
                  <Card className="h-full border-border/50 bg-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-foreground">
                        <Flame className="w-5 h-5 text-red-500" />
                        NTPC & Others
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {thermalPlants.ntpc.map((plant, index) => (
                        <div key={index} className="p-3 rounded-lg bg-muted/50 border border-border/30">
                          <p className="font-medium text-foreground">{plant.name}</p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-sm text-foreground/60">{plant.location}</span>
                            <Badge variant="secondary" className="text-xs">{plant.capacity}</Badge>
                          </div>
                        </div>
                      ))}
                      <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                        <p className="text-sm text-foreground/80">
                          <strong className="text-primary">NTPC Tender:</strong> Regular tenders for biomass pellet supply across all plants
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industrial Buyers */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Industrial Buyers
                </h2>
                <p className="text-foreground/70 max-w-2xl mx-auto">
                  Key industries switching from coal to biomass pellets for sustainable operations
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {industrialBuyers.map((buyer, index) => {
                  const Icon = buyer.icon;
                  return (
                    <motion.div key={index} variants={fadeInUp}>
                      <Card className="h-full border-border/50 bg-card hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${buyer.color} flex items-center justify-center mb-4`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="font-semibold text-foreground mb-2">{buyer.title}</h3>
                          <p className="text-sm text-foreground/70 mb-3">{buyer.description}</p>
                          <Badge className={`
                            ${buyer.demand === 'Very High' ? 'bg-red-500/10 text-red-600 border-red-500/20' : ''}
                            ${buyer.demand === 'High' ? 'bg-orange-500/10 text-orange-600 border-orange-500/20' : ''}
                            ${buyer.demand === 'Medium' ? 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20' : ''}
                          `}>
                            {buyer.demand} Demand
                          </Badge>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Major Brands */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Major Brands & Companies
                </h2>
                <p className="text-foreground/70">
                  Leading companies actively procuring biomass pellets
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {majorBrands.map((brand, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="border-border/50 bg-card hover:border-primary/30 transition-colors">
                      <CardContent className="p-4 text-center">
                        <p className="font-semibold text-foreground">{brand.name}</p>
                        <p className="text-sm text-foreground/60">{brand.location}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Local Contacts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <Badge className="mb-4 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                  <Phone className="w-4 h-4 mr-2" />
                  Direct Contacts
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Local Industry Contacts
                </h2>
                <p className="text-foreground/70">
                  Direct contacts for pellet procurement in Punjab region
                </p>
              </motion.div>

              <div className="space-y-4">
                {localContacts.map((contact, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="border-border/50 bg-card">
                      <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold text-foreground">{contact.type}</p>
                          <p className="text-sm text-foreground/60 flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {contact.location}
                          </p>
                        </div>
                        <a 
                          href="https://wa.me/919501005435"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium hover:bg-primary/20 transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          Contact for details
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center"
            >
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Looking for Biomass Pellet Supply?
                  </h2>
                  <p className="text-foreground/70 mb-6">
                    We supply high-quality biomass pellets to thermal plants, industries, and traders across North India
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="https://wa.me/919501005435"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Get Supply Quote
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-muted text-foreground px-6 py-3 rounded-full font-semibold hover:bg-muted/80 transition-colors"
                    >
                      Become a Buyer
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Buyers;

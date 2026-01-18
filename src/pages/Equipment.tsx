import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cog, 
  Zap, 
  Package,
  ArrowRight,
  CheckCircle2,
  Factory,
  Shield
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

const equipmentList = [
  {
    srNo: 1,
    name: "Infeed Belt Conveyor 1000 MM",
    specs: ["Power: 5HP gear motor 3-phase TEFC, IE3/IE4", "Motor & VFD: ABB / Siemens", "Length: 10m & Belt thickness: 8mm"],
    use: "Shredder input conveyor",
    qty: 1
  },
  {
    srNo: 2,
    name: "Double Shaft Shredder with Platform",
    specs: ["Power: 75+60 HP", "Brand: SHREDO (Customized)"],
    use: "Main shredding",
    qty: 1,
    highlight: true
  },
  {
    srNo: 3,
    name: "Output Belt Conveyor 800 MM",
    specs: ["Power: 3HP gear motor 3-phase TEFC, IE3/IE4", "Motor & VFD: ABB / Siemens", "Length: 7m & Belt thickness: 8mm"],
    use: "Shredder output conveyor",
    qty: 1
  },
  {
    srNo: 4,
    name: "Input Angle Belt Conveyor for Dryer",
    specs: ["Power: 3HP gear motor 3-phase TEFC, IE3/IE4", "Width: 800 MM", "Motor & VFD: ABB / Siemens"],
    use: "Dryer input conveyor",
    qty: 1
  },
  {
    srNo: 5,
    name: "Output Angle Belt Conveyor for Dryer",
    specs: ["Power: 3HP gear motor 3-phase TEFC, IE3/IE4", "Width: 800 MM", "Motor & VFD: ABB / Siemens"],
    use: "Dryer output conveyor",
    qty: 1
  },
  {
    srNo: 6,
    name: "Dryer Double Pass Flash 5 Ton",
    specs: ["Blower Power: 40HP × 2", "Rotary Valve (Airlock): 5 HP × 2", "Rotary valve 16 inches", "With cyclone & stand", "With furnace (wood base)"],
    use: "To reduce moisture",
    qty: 1,
    highlight: true
  },
  {
    srNo: 7,
    name: "Automatic Feeder with Stand",
    specs: ["Watch Glass / Stone Separator with structure 3 ton", "Screw: 3HP with VFD", "Feeder Belt Motor with Gearbox", "5 HP Roller Drive System", "3 HP Cutter Roller Drum Assembly", "Brand: PROVEG"],
    use: "Controlled feeding and Stone/metal removal",
    qty: 1
  },
  {
    srNo: 8,
    name: "Hammer Input Belt Conveyor 1000 MM",
    specs: ["Power: 5HP gear motor 3-phase TEFC, IE3/IE4", "Motor & VFD: ABB / Siemens", "Length: 10m & Belt thickness: 8mm"],
    use: "Conveying material into hammer",
    qty: 1
  },
  {
    srNo: 9,
    name: "Hammer Mill 75×150",
    specs: ["Power: 200+4 KW", "Fan blower: CM-10C-55KW", "Cyclone Dia: Ø250", "Air lock: 700/5.5KW", "Hammers: 126 PCS", "Air pipe: Ø525×10M", "Sieve: 4 pcs (6-8mm holes)", "PLC ECP box & full accessory", "Brand: YULONG"],
    use: "Grinding",
    qty: 1,
    highlight: true
  },
  {
    srNo: 10,
    name: "Double Discharge Chain Conveyors",
    specs: ["Power: 5HP with gear motor 3-phase TEFC, IE3/IE4 with VFD", "Length: 5500mm", "Dia: 16-inches", "Blade thickness: 6mm"],
    use: "Conveying material into storage tank",
    qty: 1
  },
  {
    srNo: 11,
    name: "Hydraulic Bin & Double Silo with PLC ECP",
    specs: ["Size: 5.8 × 1.3 × 1.3m (for 2 set XGJ560)", "Materials Level sensor: 1", "Frequency converter: 2", "Screw feeder U273×2m: 2", "Brand: YULONG", "Integrated mixing facility for burnt oil (1%)"],
    use: "Material storage and feeding control",
    qty: 1
  },
  {
    srNo: 12,
    name: "Vertical Ring Die Pellet Mill XGJ560",
    specs: ["Power: 160+2.2+0.55+2.2+0.05 KW", "Die: 6mm/8mm", "Ring-die (stainless steel)", "Roller assembly with roller shell", "2 sets Auto-lubrication device", "Cooling fan blower", "Soft starter", "Brand: YULONG"],
    use: "Compressing powdered biomass into high-density pellets",
    qty: 2,
    highlight: true
  },
  {
    srNo: 13,
    name: "Belt Conveyor (Green belt) 600 MM",
    specs: ["Power: 2HP gear motor 3-phase TEFC, IE3/IE4", "Motor & VFD: ABB / Siemens", "Length: 7m"],
    use: "Conveying pellet into grader",
    qty: 1
  },
  {
    srNo: 14,
    name: "Z Type Cooling Green Belt Conveyor",
    specs: ["Exhaust Fan: 3 nos", "Width: 600 MM", "Power: 3HP gear motor 3-phase TEFC, IE3/IE4", "Motor & VFD: ABB / Siemens"],
    use: "Cooling material",
    qty: 1
  },
  {
    srNo: 15,
    name: "Pulse Jet Filter 240 Bags",
    specs: ["Elgi Compressor: 15HP with Air Tank", "Blower: 40 HP collector for plant", "Electric Control Panel"],
    use: "Plant dust removal",
    qty: 1
  },
  {
    srNo: 16,
    name: "Maintenance Spares Kit",
    specs: ["Ring Dies", "Rollers", "Screens", "Bearings", "Hammers", "Sieves"],
    use: "Regular maintenance",
    qty: "As per stock"
  },
  {
    srNo: 17,
    name: "Plant Accessories",
    specs: ["Magnet system on conveyor", "Welding machine, grinders", "Platforms & ladders", "Air compressor", "Supporting platforms with access ladders", "Anti-vibration wedge for all machines"],
    use: "Plant support infrastructure",
    qty: 1
  },
  {
    srNo: 18,
    name: "Electrical Cabinet & Automation",
    specs: ["PLC, HMI, VFD, MCC, Soft Starter", "SCADA with interlocking", "APFC panel", "Machine-mounted sensors", "Local controllers"],
    use: "Control room automation",
    qty: 1
  },
  {
    srNo: 19,
    name: "Installation & Erection",
    specs: ["Complete plant setup", "Spark detection & suppression system", "Explosion vents", "Dust control system", "Fire safety and alarm system", "Water tankers", "AI-controlled CCTV", "Piping, ducting, ladders, platforms, earthing"],
    use: "Complete plant integration",
    qty: 1
  }
];

const Equipment = () => {
  return (
    <>
      <SEOHead 
        title="Plant Equipment & Machinery | YULONG Biomass Pellet Plant Setup"
        description="Complete biomass pellet plant machinery list with YULONG equipment. Shredder, hammer mill, pellet mills, dryer, conveyors and automation systems."
        keywords="biomass pellet plant machinery, YULONG pellet mill, hammer mill, shredder, pellet plant equipment"
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
                <Factory className="w-4 h-4 mr-2" />
                Complete Plant Setup
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Plant Equipment & Machinery
              </h1>
              <p className="text-xl text-foreground/70 mb-8">
                World-class YULONG biomass pellet manufacturing equipment with complete automation
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <Card className="bg-card border-border/50">
                  <CardContent className="p-4 text-center">
                    <Cog className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold text-foreground">19+</p>
                    <p className="text-sm text-foreground/70">Equipment Units</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border/50">
                  <CardContent className="p-4 text-center">
                    <Zap className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold text-foreground">725 KW</p>
                    <p className="text-sm text-foreground/70">Connected Load</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border/50">
                  <CardContent className="p-4 text-center">
                    <Package className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold text-foreground">2.6 T/hr</p>
                    <p className="text-sm text-foreground/70">Production</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border/50">
                  <CardContent className="p-4 text-center">
                    <Shield className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold text-foreground">YULONG</p>
                    <p className="text-sm text-foreground/70">Brand</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Equipment List */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center text-foreground mb-4">
                Complete Equipment List
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
                Full specification of all machinery included in our turnkey biomass pellet plant
              </motion.p>

              <div className="space-y-4 max-w-5xl mx-auto">
                {equipmentList.map((item, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className={`border-border/50 bg-card ${item.highlight ? 'ring-2 ring-primary/20' : ''}`}>
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                          {/* Sr No */}
                          <div className="flex-shrink-0">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${item.highlight ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'}`}>
                              {item.srNo}
                            </div>
                          </div>
                          
                          {/* Main Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                              {item.highlight && (
                                <Badge className="bg-primary/10 text-primary border-primary/20">Key Equipment</Badge>
                              )}
                            </div>
                            
                            {/* Specs */}
                            <div className="grid sm:grid-cols-2 gap-1 mb-3">
                              {item.specs.map((spec, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                  <span>{spec}</span>
                                </div>
                              ))}
                            </div>
                            
                            {/* Use & Qty */}
                            <div className="flex flex-wrap items-center gap-4 text-sm">
                              <span className="flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 text-primary" />
                                <span className="text-foreground/80">{item.use}</span>
                              </span>
                              <Badge variant="secondary">Qty: {item.qty}</Badge>
                            </div>
                          </div>
                        </div>
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
                    Ready to Set Up Your Pellet Plant?
                  </h2>
                  <p className="text-foreground/70 mb-6">
                    Get complete consultation on equipment selection, plant layout, and installation support
                  </p>
                  <a
                    href="https://wa.me/916280610158"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Request Plant Quotation
                  </a>
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

export default Equipment;

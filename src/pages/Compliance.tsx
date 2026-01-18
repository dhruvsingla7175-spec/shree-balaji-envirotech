import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { 
  FileText,
  Building2,
  Leaf,
  Users,
  Shield,
  Truck,
  Globe,
  CheckCircle2,
  ClipboardList
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

interface ComplianceItem {
  id: string;
  name: string;
  description?: string;
}

interface ComplianceCategory {
  id: string;
  title: string;
  icon: any;
  color: string;
  items: ComplianceItem[];
}

const complianceCategories: ComplianceCategory[] = [
  {
    id: "company",
    title: "Company & Legal Registration",
    icon: Building2,
    color: "from-blue-500 to-indigo-500",
    items: [
      { id: "deed", name: "Registered Sale Deed" },
      { id: "mutation", name: "Land Mutation & Jamabandi (Revenue Record)" },
      { id: "company", name: "Company Registration - Pvt Ltd", description: "Preferred for subsidy & tender eligibility" },
      { id: "gst", name: "GST Registration" },
      { id: "udyam", name: "Udyam Registration for MSME" },
      { id: "trademark", name: "Trademark Registration" },
      { id: "pan", name: "PAN & TAN for Company" },
      { id: "coi", name: "Certificate of Incorporation" },
      { id: "moa", name: "Memorandum & Articles of Association (MoA, AoA)" },
      { id: "board", name: "Board Resolution (authorized signatory)" },
      { id: "dsc", name: "Company DSC (Digital Signature Certificate)" },
      { id: "dpin", name: "D PIN" },
      { id: "cin", name: "CIN/NIC Code" },
      { id: "lei", name: "LEI (Legal Entity Identifier)" }
    ]
  },
  {
    id: "land",
    title: "Land & Building Approvals",
    icon: FileText,
    color: "from-amber-500 to-orange-500",
    items: [
      { id: "clu", name: "Grant Permission for Change of Land Use (CLU)" },
      { id: "building", name: "Building Plan Approval" },
      { id: "noc_gram", name: "NOC from Gram Panchayat / Local Body" },
      { id: "tcp", name: "Town & Country Planner (TCP) Approval" },
      { id: "site", name: "Site Plan Approval" },
      { id: "vastu", name: "Vastu Compliance (optional)" }
    ]
  },
  {
    id: "environmental",
    title: "Environmental & Pollution Control",
    icon: Leaf,
    color: "from-emerald-500 to-teal-500",
    items: [
      { id: "cte", name: "Consent to Establish (CTE) – PPCB" },
      { id: "cto", name: "Consent to Operate (CTO) – PPCB" },
      { id: "green", name: "Pollution Control Board & Green Category NOC" },
      { id: "water", name: "Water / Borewell connection / CGWA approval" },
      { id: "hazardous", name: "Hazardous Waste Authorization", description: "Ash, dust, lubricant waste" },
      { id: "etp", name: "Factory Effluent Treatment Plant (ETP) Approval" },
      { id: "renewable", name: "State Renewable Energy Dept. NOC", description: "If solar/biomass subsidy claimed" }
    ]
  },
  {
    id: "factory",
    title: "Factory & Industrial Licenses",
    icon: Shield,
    color: "from-purple-500 to-violet-500",
    items: [
      { id: "factory", name: "Factory License (under Factories Act)" },
      { id: "shop", name: "Shop & Establishment License" },
      { id: "fire", name: "Provisional and Final Fire NOC" },
      { id: "boiler", name: "Boiler Registration (if using steam boilers)" },
      { id: "peso", name: "PESO License", description: "If storing diesel/fuel > 2500 liters" },
      { id: "dic", name: "District Industry Centre (DIC) Registration", description: "Subsidy benefits" },
      { id: "weighbridge", name: "Weighbridge Approval & Stamping" }
    ]
  },
  {
    id: "electrical",
    title: "Electrical & Power",
    icon: Globe,
    color: "from-yellow-500 to-amber-500",
    items: [
      { id: "load", name: "Electricity Load Approval (PSEB/PSPCL)" },
      { id: "ceig_cert", name: "Certification of Electrical Infrastructure – CEIG" },
      { id: "ceig_charge", name: "Charging Permission from CEIG" },
      { id: "transformer", name: "Transformer Installation Approval" },
      { id: "solar_noc", name: "Solar Installation NOC (if applicable)" }
    ]
  },
  {
    id: "labour",
    title: "Labour & Employment",
    icon: Users,
    color: "from-rose-500 to-pink-500",
    items: [
      { id: "labour_reg", name: "Labour Department Registration" },
      { id: "lin", name: "Labour Identification Number (LIN)" },
      { id: "migrant", name: "Registration for Migrant Workman" },
      { id: "contract", name: "Contract Labour License / ESI Registration" },
      { id: "pf", name: "Provident Fund Registration" },
      { id: "professional", name: "Professional Tax Registration" },
      { id: "workmen", name: "Workmen Compensation Insurance" }
    ]
  },
  {
    id: "quality",
    title: "Quality & Certifications",
    icon: CheckCircle2,
    color: "from-cyan-500 to-blue-500",
    items: [
      { id: "iso9001", name: "ISO 9001 Certification (Quality Management)" },
      { id: "iso14001", name: "ISO 14001 Certification (Environment)" },
      { id: "iso45001", name: "ISO 45001 Certification (Safety)" },
      { id: "bis", name: "BIS Certification for Pellets/Standards" },
      { id: "carbon", name: "Carbon Credit Monetization" },
      { id: "rec", name: "REC Certificates" },
      { id: "pellet_test", name: "Pellet Test Reports (GCV, Moisture, Ash)" }
    ]
  },
  {
    id: "transport",
    title: "Transport & Logistics",
    icon: Truck,
    color: "from-slate-500 to-gray-600",
    items: [
      { id: "rc", name: "Vehicle RC, Fitness Certificate" },
      { id: "vehicle_insurance", name: "Vehicle Insurance" },
      { id: "puc", name: "PUC Certificates" },
      { id: "driver", name: "Driver's License" },
      { id: "transport_agreement", name: "Goods Transport Agreement (if outsourced)" }
    ]
  },
  {
    id: "insurance",
    title: "Insurance & Risk Management",
    icon: Shield,
    color: "from-red-500 to-rose-500",
    items: [
      { id: "fire_insurance", name: "Fire & Machinery Breakdown Insurance" },
      { id: "stock", name: "Stock Insurance" },
      { id: "public", name: "Public Liability Insurance" },
      { id: "factory_insurance", name: "Factory & Machinery Insurance" }
    ]
  },
  {
    id: "business",
    title: "Business & Marketing",
    icon: Globe,
    color: "from-indigo-500 to-purple-500",
    items: [
      { id: "iec", name: "IEC Code (Import Export)" },
      { id: "dpiit", name: "DPIIT Startup India Registration" },
      { id: "nsic", name: "NSIC Registration" },
      { id: "gem", name: "GeM Portal Registration" },
      { id: "indiamart", name: "IndiaMart / TradeIndia Listing" },
      { id: "google", name: "Google Maps / Just Dial Listing" },
      { id: "website", name: "Website & SEO Optimization" },
      { id: "demat", name: "Demat Account" }
    ]
  }
];

const Compliance = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const totalItems = complianceCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  const completedItems = checkedItems.size;
  const progressPercent = Math.round((completedItems / totalItems) * 100);

  const getCategoryProgress = (category: ComplianceCategory) => {
    const completed = category.items.filter(item => checkedItems.has(item.id)).length;
    return { completed, total: category.items.length };
  };

  return (
    <>
      <SEOHead 
        title="Compliance Checklist | Biomass Pellet Plant Licenses & Approvals"
        description="Complete checklist of 70+ licenses, approvals and certifications required for biomass pellet manufacturing plant in Punjab. Track your compliance progress."
        keywords="biomass plant compliance, factory license, PPCB approval, pellet plant licenses, industrial approvals Punjab"
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
                <ClipboardList className="w-4 h-4 mr-2" />
                Interactive Checklist
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Compliance & Approvals Checklist
              </h1>
              <p className="text-xl text-foreground/70 mb-8">
                Track all {totalItems}+ licenses and approvals required for your biomass pellet plant
              </p>
              
              {/* Progress Card */}
              <Card className="max-w-md mx-auto bg-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Overall Progress</span>
                    <span className="text-sm font-bold text-primary">{completedItems}/{totalItems}</span>
                  </div>
                  <Progress value={progressPercent} className="h-3 mb-2" />
                  <p className="text-sm text-foreground/70">{progressPercent}% Complete</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Compliance Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              {complianceCategories.map((category, catIndex) => {
                const progress = getCategoryProgress(category);
                const Icon = category.icon;
                
                return (
                  <motion.div key={category.id} variants={fadeInUp}>
                    <Card className="border-border/50 bg-card overflow-hidden">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <CardTitle className="flex items-center gap-3 text-foreground">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            {category.title}
                          </CardTitle>
                          <Badge variant={progress.completed === progress.total ? "default" : "secondary"}>
                            {progress.completed}/{progress.total} Complete
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {category.items.map((item) => (
                            <div
                              key={item.id}
                              className={`flex items-start gap-3 p-3 rounded-lg border transition-colors cursor-pointer ${
                                checkedItems.has(item.id)
                                  ? 'bg-primary/5 border-primary/30'
                                  : 'bg-background border-border/50 hover:border-primary/20'
                              }`}
                              onClick={() => toggleItem(item.id)}
                            >
                              <Checkbox
                                checked={checkedItems.has(item.id)}
                                onCheckedChange={() => toggleItem(item.id)}
                                className="mt-0.5"
                              />
                              <div className="flex-1 min-w-0">
                                <p className={`text-sm font-medium ${
                                  checkedItems.has(item.id) ? 'text-primary line-through' : 'text-foreground'
                                }`}>
                                  {item.name}
                                </p>
                                {item.description && (
                                  <p className="text-xs text-foreground/60 mt-0.5">{item.description}</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-4xl mx-auto"
            >
              <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/20">
                <CardHeader>
                  <CardTitle className="text-foreground">Important Notes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-foreground/80">
                  <p>• Requirements may vary based on your specific location and project scale</p>
                  <p>• Some approvals are prerequisites for others (e.g., CTE before CTO)</p>
                  <p>• Consult with local authorities for the most current requirements</p>
                  <p>• Processing times vary from 1 week to 6 months depending on the approval</p>
                  <p>• Consider hiring a compliance consultant for smoother processing</p>
                </CardContent>
              </Card>
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
                    Need Help with Compliance?
                  </h2>
                  <p className="text-foreground/70 mb-6">
                    Our team can assist you with documentation, applications, and liaising with authorities
                  </p>
                  <a
                    href="https://wa.me/916280610158"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Get Compliance Support
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

export default Compliance;

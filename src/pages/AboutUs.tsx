import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Users, Target, Leaf, TrendingUp, IndianRupee, Recycle, History, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

const team = [
  {
    name: "Dhruv Singla",
    role: "Founder & Managing Partner",
    bio: "Visionary leader with expertise in business development and sustainable energy solutions. Driving the company's mission to revolutionize the biomass industry in Punjab.",
    isFounder: true,
  },
  {
    name: "Keshav Goyal",
    role: "Partner",
    bio: "Brings extensive experience in operations and supply chain management, ensuring seamless delivery of quality biomass products.",
  },
  {
    name: "Davinder Kumar",
    role: "Partner",
    bio: "Expert in industrial relations and client partnerships, building strong relationships with businesses across Punjab.",
  },
  {
    name: "Vishnu Goyal",
    role: "Partner",
    bio: "Specializes in financial planning and strategic growth, driving the company's expansion and profitability.",
  },
  {
    name: "Umesh Gupta",
    role: "Partner",
    bio: "Focuses on quality control and production excellence, maintaining the highest standards in biomass manufacturing.",
  },
  {
    name: "Gurmeet Singh",
    role: "Partner",
    bio: "Leads farmer outreach and raw material sourcing, creating sustainable partnerships with agricultural communities.",
  },
];

const missionPoints = [
  {
    icon: TrendingUp,
    title: "Growth of Business",
    description: "Expanding sustainable energy solutions while creating value for our partners, clients, and communities.",
  },
  {
    icon: Leaf,
    title: "Protect Nature",
    description: "Committed to environmental conservation by promoting clean, renewable energy alternatives.",
  },
  {
    icon: Recycle,
    title: "Reduce Pollution",
    description: "Eliminating stubble burning and industrial emissions through eco-friendly biomass solutions.",
  },
  {
    icon: IndianRupee,
    title: "Save Money",
    description: "Helping industries cut fuel costs by 30-40% with affordable, high-quality biomass pellets.",
  },
  {
    icon: Heart,
    title: "Clear Field Waste",
    description: "Transforming agricultural residue into valuable fuel, solving the stubble disposal problem for farmers.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const AboutUs = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Us - Shree Balaji Envirotech | Biomass Pellet Manufacturer Punjab"
        description="Learn about Shree Balaji Envirotech - Punjab's leading biomass pellet manufacturer. Meet our team of dedicated partners committed to sustainable energy and environmental protection."
        keywords="about shree balaji envirotech, biomass company punjab, sustainable energy team, biomass pellet manufacturer history"
        canonicalUrl="https://shreebalajienvirotech.lovable.app/about"
      />
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-16 overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"
        />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Building a <span className="text-primary">Greener Future</span> Together
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Shree Balaji Envirotech is Punjab's trusted partner in sustainable biomass solutions, 
              driven by a passionate team committed to environmental protection and industrial growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <History className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                United by a <span className="text-primary">Common Vision</span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-lg"
            >
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  <span className="text-foreground font-semibold">Shree Balaji Envirotech</span> was born from a unique convergence of 
                  entrepreneurs from diverse business backgrounds who shared a common concern – the environmental crisis caused by 
                  stubble burning in Punjab and the rising fuel costs affecting industries.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Our founders, each successful in their respective fields, recognized that Punjab's agricultural waste could be 
                  transformed from a pollution problem into a sustainable energy solution. With expertise spanning agriculture, 
                  manufacturing, finance, and operations, they came together to establish a company that would bridge the gap 
                  between farmers with crop residue and industries seeking affordable, eco-friendly fuel.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we stand as Punjab's premier biomass pellet manufacturer, processing thousands of tons of agricultural 
                  waste annually and helping industries reduce their carbon footprint while saving on fuel costs. Our journey 
                  is a testament to what can be achieved when diverse expertise unites for a sustainable cause.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Target className="w-4 h-4" />
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What <span className="text-primary">Drives Us</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our mission is built on five pillars that guide every decision we make
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missionPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  variants={fadeInUp}
                  className={`group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 ${
                    index === 4 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <point.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Users className="w-4 h-4" />
                Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our <span className="text-primary">Leadership</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A dedicated team of entrepreneurs united by a vision for sustainable energy
              </p>
            </motion.div>

            {/* Founder Highlight */}
            <motion.div variants={fadeInUp} className="mb-12">
              <div className="bg-gradient-to-br from-primary/10 via-card to-secondary/10 border-2 border-primary/20 rounded-3xl p-8 md:p-10 max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center border-4 border-background shadow-xl">
                    <span className="text-4xl font-bold text-primary-foreground">DS</span>
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                      Founder & Managing Partner
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                      Dhruv Singla
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {team[0].bio}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Other Partners */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.slice(1).map((member) => (
                <motion.div
                  key={member.name}
                  variants={fadeInUp}
                  className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-2 border-primary/10 group-hover:border-primary/30 transition-colors">
                      <span className="text-xl font-bold text-primary">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </motion.div>
              ))}
            </div>

            {/* Team Statement */}
            <motion.div variants={fadeInUp} className="text-center mt-12">
              <div className="bg-card border border-border rounded-2xl p-8 max-w-3xl mx-auto">
                <p className="text-lg text-muted-foreground italic">
                  "Together, we bring diverse expertise from different industries, united by a shared commitment 
                  to create sustainable energy solutions that benefit farmers, industries, and the environment."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutUs;

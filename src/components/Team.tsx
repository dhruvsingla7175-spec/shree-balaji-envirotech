import { motion } from "framer-motion";
import { Users, Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Dhruv Singla",
    role: "Founder & Partner",
    image: null,
  },
  {
    name: "Keshav Goyal",
    role: "Founder & Partner",
    image: null,
  },
  {
    name: "Davinder Kumar",
    role: "Founder & Partner",
    image: null,
  },
  {
    name: "Vishnu Goyal",
    role: "Founder & Partner",
    image: null,
  },
  {
    name: "Umesh Gupta",
    role: "Founder & Partner",
    image: null,
  },
  {
    name: "Gurmeet Singh",
    role: "Founder & Partner",
    image: null,
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

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Our Leadership
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Partners</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated team of visionaries driving sustainable energy solutions across Punjab and beyond
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeInUp}
              className="group bg-card border border-border rounded-2xl p-6 text-center hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-2 border-primary/10 group-hover:border-primary/30 transition-colors">
                <span className="text-2xl font-bold text-primary">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-bold text-foreground text-sm md:text-base mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Together, we're committed to revolutionizing the biomass industry and creating a greener future for India
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;

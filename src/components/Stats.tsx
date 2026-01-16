import { useEffect, useState, useRef } from "react";
import { motion, type Easing } from "framer-motion";

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

const stats = [
  { value: 5000, suffix: "+", label: "Tons Produced" },
  { value: 100, suffix: "%", label: "Eco-Friendly" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 24, suffix: "/7", label: "Support" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary-foreground">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: easeOut } }
};

const Stats = () => {
  return (
    <section id="stats" className="py-16 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easeOut }}
          className="absolute top-10 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: easeOut }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-primary-foreground/5 rounded-full blur-3xl" 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <div className="text-primary-foreground/80 mt-2 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;

import { motion } from "framer-motion";
import { Star, Quote, Factory, Building2, Flame, Wheat } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rajinder Singh",
    role: "Plant Manager",
    company: "Punjab Textile Mills",
    location: "Ludhiana, Punjab",
    rating: 5,
    quote: "Switching to biomass pellets from Shree Balaji reduced our fuel costs by 35%. The quality is consistent and delivery is always on time. Highly recommended for any textile unit looking to cut costs.",
    icon: Building2,
  },
  {
    name: "Harpreet Kaur",
    role: "Operations Director",
    company: "Bathinda Brick Works",
    location: "Bathinda, Punjab",
    rating: 5,
    quote: "We've been using their pellets for over a year now. The calorific value is excellent and ash content is minimal. Our production efficiency has improved significantly.",
    icon: Factory,
  },
  {
    name: "Amandeep Sharma",
    role: "Owner",
    company: "Sharma Food Processing",
    location: "Patiala, Punjab",
    rating: 5,
    quote: "The team at Shree Balaji Envirotech understands our requirements perfectly. Their biomass pellets burn cleaner and give us consistent heat for our processing units.",
    icon: Flame,
  },
  {
    name: "Gurpreet Singh Sandhu",
    role: "Managing Director",
    company: "Sandhu Industries",
    location: "Amritsar, Punjab",
    rating: 5,
    quote: "Excellent quality pellets at competitive prices. The switch from coal has not only saved us money but also helped us meet our sustainability goals. Great service!",
    icon: Building2,
  },
  {
    name: "Vikram Malhotra",
    role: "Chief Engineer",
    company: "Malhotra Steel Works",
    location: "Jalandhar, Punjab",
    rating: 4,
    quote: "We were skeptical about biomass initially, but Shree Balaji's pellets have proven their worth. Reliable supply chain and excellent customer support.",
    icon: Factory,
  },
  {
    name: "Sukhwinder Kaur",
    role: "Farm Owner",
    company: "Kaur Agro Industries",
    location: "Moga, Punjab",
    rating: 5,
    quote: "As a farmer, I'm happy to see my crop residue being converted into useful fuel instead of burning. Shree Balaji pays fair prices and collects from our farm directly.",
    icon: Wheat,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
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
            <Star className="w-4 h-4 fill-primary" />
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by industries across Punjab for quality biomass pellets and reliable service
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => {
                const IconComponent = testimonial.icon;
                return (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full p-6 bg-card border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <Quote className="w-8 h-8 text-primary/20" />
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-muted-foreground/30"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-4">
                        "{testimonial.quote}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground text-sm truncate">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-muted-foreground truncate">
                            {testimonial.role}
                          </p>
                          <p className="text-xs text-primary font-medium truncate">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>

                      {/* Location Badge */}
                      <div className="mt-3">
                        <span className="inline-block text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                          📍 {testimonial.location}
                        </span>
                      </div>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-primary/10 hover:bg-primary/20 border-primary/20" />
              <CarouselNext className="static translate-y-0 bg-primary/10 hover:bg-primary/20 border-primary/20" />
            </div>
          </Carousel>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
        >
          {[
            { value: "50+", label: "Happy Clients" },
            { value: "500+", label: "Tons Delivered Monthly" },
            { value: "98%", label: "Client Retention" },
            { value: "4.9/5", label: "Average Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

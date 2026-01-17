import { motion, type Easing } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const easeOut: Easing = [0.0, 0.0, 0.2, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: easeOut } }
};

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[+]?[\d\s-]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Some fields need your attention",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset after showing success
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", company: "", industry: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field as keyof FormErrors]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: easeOut }}
        className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" 
      />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Ready to switch to sustainable energy? Contact us today for premium biomass pellet solutions
          </p>
          <a
            href="https://wa.me/message/RRKAEOM2TS3EM1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-2 space-y-4"
          >
            {[
              {
                icon: Phone,
                title: "Call Us",
                subtitle: "Mon-Sat, 9AM-6PM",
                value: "+91 83604 10158",
                href: "tel:+918360410158",
                gradient: "bg-gradient-green",
              },
              {
                icon: Mail,
                title: "Email Us",
                subtitle: "24 hour response",
                value: "shreebalajienvirotech@gmail.com",
                href: "mailto:shreebalajienvirotech@gmail.com",
                gradient: "bg-gradient-gold",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                subtitle: "Punjab, India",
                value: "Bathinda, Punjab",
                href: "#",
                gradient: "bg-primary/20",
              },
              {
                icon: Clock,
                title: "Working Hours",
                subtitle: "Monday - Saturday",
                value: "9:00 AM - 6:00 PM",
                href: "#",
                gradient: "bg-secondary/20",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card
                  className="p-5 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card border-border group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${item.gradient} rounded-xl group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{item.subtitle}</p>
                      {item.href !== "#" ? (
                        <a href={item.href} className="text-primary hover:underline font-medium text-sm">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-foreground font-medium text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-3"
          >
            <Card className="p-8 bg-card shadow-elevated border-border">
              <h3 className="text-xl font-bold mb-6 text-card-foreground flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" />
                Send us a Message
              </h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`bg-muted/50 ${errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`bg-muted/50 ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Phone <span className="text-destructive">*</span>
                      </label>
                      <Input
                        placeholder="+91 xxxxx xxxxx"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`bg-muted/50 ${errors.phone ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Company Name</label>
                      <Input
                        placeholder="Your company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="bg-muted/50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Industry</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      className="w-full h-10 px-3 rounded-md border border-input bg-muted/50 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select your industry</option>
                      <option value="textile">Textile Mill</option>
                      <option value="brick">Brick Kiln</option>
                      <option value="food">Food Processing</option>
                      <option value="dairy">Dairy Processing</option>
                      <option value="paper">Paper Mill</option>
                      <option value="rice">Rice Mill</option>
                      <option value="distillery">Distillery</option>
                      <option value="poultry">Poultry Farm</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      placeholder="Tell us about your fuel requirements, current usage, and any specific needs..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`bg-muted/50 ${errors.message ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-green hover:opacity-90 text-primary-foreground shadow-elevated group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

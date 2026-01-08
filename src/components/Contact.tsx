import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to switch to sustainable energy? Contact us today for premium biomass pellet solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: Phone,
                title: "Call Us",
                subtitle: "Mon-Sat, 9AM-6PM",
                value: "+91 123 456 7890",
                href: "tel:+911234567890",
                gradient: "bg-gradient-green",
              },
              {
                icon: Mail,
                title: "Email Us",
                subtitle: "24 hour response",
                value: "info@balajienvirontech.com",
                href: "mailto:info@balajienvirontech.com",
                gradient: "bg-gradient-gold",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                subtitle: "Industrial Area",
                value: "Your City, State, India",
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
              <Card
                key={index}
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
            ))}
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-3 p-8 bg-card shadow-elevated border-border">
            <h3 className="text-xl font-bold mb-6 text-card-foreground flex items-center gap-2">
              <Send className="w-5 h-5 text-primary" />
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-muted/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-muted/50"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                <Input
                  placeholder="+91 xxxxx xxxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-muted/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-muted/50"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-green hover:opacity-90 text-primary-foreground shadow-elevated group">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

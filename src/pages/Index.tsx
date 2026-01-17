import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import Manufacturing from "@/components/Manufacturing";
import Benefits from "@/components/Benefits";
import Comparison from "@/components/Comparison";
import Demand from "@/components/Demand";
import About from "@/components/About";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import HomeFAQ from "@/components/HomeFAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Products />
      <Manufacturing />
      <Benefits />
      <Comparison />
      <Demand />
      <About />
      <Team />
      <Testimonials />
      <Partners />
      <HomeFAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

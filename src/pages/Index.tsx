import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import Comparison from "@/components/Comparison";
import Demand from "@/components/Demand";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Products />
      <Benefits />
      <Comparison />
      <Demand />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

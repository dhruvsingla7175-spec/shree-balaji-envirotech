import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingDown, Leaf, IndianRupee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const fuelData = {
  coal: { name: "Coal", pricePerKg: 12, calorificValue: 5500 },
  diesel: { name: "Diesel", pricePerKg: 95, calorificValue: 10500 },
  lpg: { name: "LPG", pricePerKg: 85, calorificValue: 11000 },
  furnaceOil: { name: "Furnace Oil", pricePerKg: 70, calorificValue: 10000 },
};

const biomassPellet = { pricePerKg: 8, calorificValue: 4200 };

const SavingsCalculator = () => {
  const [currentFuel, setCurrentFuel] = useState<keyof typeof fuelData>("coal");
  const [monthlyConsumption, setMonthlyConsumption] = useState([50]); // in tonnes
  
  const fuel = fuelData[currentFuel];
  
  // Calculate energy requirement
  const monthlyEnergyNeeded = monthlyConsumption[0] * 1000 * fuel.calorificValue; // kcal
  
  // Calculate biomass needed for same energy
  const biomassNeeded = monthlyEnergyNeeded / biomassPellet.calorificValue; // kg
  
  // Calculate costs
  const currentMonthlyCost = monthlyConsumption[0] * 1000 * fuel.pricePerKg;
  const biomassMonthlyCost = biomassNeeded * biomassPellet.pricePerKg;
  
  // Calculate savings
  const monthlySavings = currentMonthlyCost - biomassMonthlyCost;
  const yearlySavings = monthlySavings * 12;
  const savingsPercentage = ((monthlySavings / currentMonthlyCost) * 100).toFixed(0);
  
  // CO2 emissions saved (approximate)
  const co2Saved = monthlyConsumption[0] * 2.5; // tonnes CO2 per month

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            Savings Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Calculate Your <span className="text-primary">Fuel Savings</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how much you can save by switching to biomass pellets from your current fuel source
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-bold text-foreground mb-6">Your Current Fuel Usage</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Current Fuel Type
                    </label>
                    <Select value={currentFuel} onValueChange={(v) => setCurrentFuel(v as keyof typeof fuelData)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select fuel type" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(fuelData).map(([key, value]) => (
                          <SelectItem key={key} value={key}>
                            {value.name} (₹{value.pricePerKg}/kg)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Monthly Consumption: <span className="text-primary font-bold">{monthlyConsumption[0]} Tonnes</span>
                    </label>
                    <Slider
                      value={monthlyConsumption}
                      onValueChange={setMonthlyConsumption}
                      min={10}
                      max={500}
                      step={10}
                      className="mt-4"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>10 T</span>
                      <span>500 T</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Current Monthly Cost:</span>
                      <span className="font-bold text-foreground">₹{currentMonthlyCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Biomass Monthly Cost:</span>
                      <span className="font-bold text-primary">₹{Math.round(biomassMonthlyCost).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-6">Your Potential Savings</h3>
                
                <div className="space-y-6">
                  {/* Monthly Savings */}
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <TrendingDown className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Monthly Savings</span>
                    </div>
                    <div className="text-3xl font-bold text-primary flex items-center">
                      <IndianRupee className="w-6 h-6" />
                      {Math.round(monthlySavings).toLocaleString()}
                    </div>
                    <div className="text-sm text-secondary font-medium mt-1">
                      {savingsPercentage}% reduction in fuel costs
                    </div>
                  </div>

                  {/* Yearly Savings */}
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-secondary/10 rounded-lg">
                        <IndianRupee className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="text-sm text-muted-foreground">Yearly Savings</span>
                    </div>
                    <div className="text-3xl font-bold text-secondary">
                      ₹{Math.round(yearlySavings).toLocaleString()}
                    </div>
                  </div>

                  {/* CO2 Savings */}
                  <div className="bg-card rounded-xl p-4 border border-border">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Leaf className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">CO₂ Reduced Monthly</span>
                    </div>
                    <div className="text-2xl font-bold text-accent">
                      ~{co2Saved.toFixed(1)} Tonnes
                    </div>
                  </div>

                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12 text-lg gap-2"
                  >
                    Get Custom Quote
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;

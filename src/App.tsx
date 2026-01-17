import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BiomassPelletsGuidePunjab from "./pages/blog/BiomassPelletsGuidePunjab";
import StubbleBurningSolution from "./pages/blog/StubbleBurningSolution";
import CoalToBiomassSwitch from "./pages/blog/CoalToBiomassSwitch";
import BiomassPelletPrice2025 from "./pages/blog/BiomassPelletPrice2025";
import BiomassSuppliersNearBathinda from "./pages/blog/BiomassSuppliersNearBathinda";
import RiceHuskPellets from "./pages/blog/RiceHuskPellets";
import IndustrialFuelCostsPunjab from "./pages/awareness/IndustrialFuelCostsPunjab";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/biomass-pellets-complete-guide-punjab" element={<BiomassPelletsGuidePunjab />} />
          <Route path="/blog/stubble-burning-solution-punjab-biomass-pellets" element={<StubbleBurningSolution />} />
          <Route path="/blog/coal-to-biomass-switch-industrial-boilers" element={<CoalToBiomassSwitch />} />
          <Route path="/blog/biomass-pellet-price-punjab-2025" element={<BiomassPelletPrice2025 />} />
          <Route path="/blog/biomass-pellet-suppliers-near-bathinda" element={<BiomassSuppliersNearBathinda />} />
          <Route path="/blog/rice-husk-pellets-benefits-manufacturing" element={<RiceHuskPellets />} />
          <Route path="/awareness/industrial-fuel-costs-punjab" element={<IndustrialFuelCostsPunjab />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import MiniMarketResidencial from "./pages/MiniMarketResidencial";
import MiniMarketCorporativo from "./pages/MiniMarketCorporativo";
import MidiaLaundry from "./pages/MidiaLaundry";
import QuemSomos from "./pages/QuemSomos";
import Contato from "./pages/Contato";
import FAQ from "./pages/FAQ";
import ComoComprar from "./pages/ComoComprar";
import NossasLojas from "./pages/NossasLojas";
import NotFound from "./pages/NotFound";

// Garante que toda navegação começa no topo da página
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/mini-market-residencial" component={MiniMarketResidencial} />
        <Route path="/mini-market-corporativo" component={MiniMarketCorporativo} />
        <Route path="/midia-laundry" component={MidiaLaundry} />
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/contato" component={Contato} />
        <Route path="/faq" component={FAQ} />
        <Route path="/como-comprar" component={ComoComprar} />
        <Route path="/nossas-lojas" component={NossasLojas} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import LocationPage from "./pages/LocationPage";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import ComparisonPage from "./pages/ComparisonPage";
import UseCasePage from "./pages/UseCasePage";
import NotFound from "./pages/NotFound";
import { getAllLocationCodes } from "./data/locations";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Set default title for better SEO
    document.title = "Bilio | Tu asistente financiero en WhatsApp";
    
    // Add viewport meta for mobile optimization if not present
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main homepage */}
            <Route path="/" element={<Index />} />
            
            {/* Location-based pages */}
            {getAllLocationCodes().map(locationCode => (
              <Route 
                key={locationCode}
                path={`/${locationCode}`} 
                element={<LocationPage />} 
              />
            ))}
            
            {/* Blog section */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            
            {/* Comparison pages */}
            <Route path="/bilio-vs-mint" element={<ComparisonPage />} />
            <Route path="/bilio-vs-cleo" element={<ComparisonPage />} />
            <Route path="/bilio-vs-ynab" element={<ComparisonPage />} />
            
            {/* Use case pages */}
            <Route path="/expense-tracking" element={<UseCasePage />} />
            <Route path="/financial-coaching" element={<UseCasePage />} />
            <Route path="/whatsapp-finance" element={<UseCasePage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

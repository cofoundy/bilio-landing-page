import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { getAllLocationCodes } from "./data/locations";

// Code splitting: Lazy load route components
const Index = lazy(() => import("./pages/Index"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ComparisonPage = lazy(() => import("./pages/ComparisonPage"));
const UseCasePage = lazy(() => import("./pages/UseCasePage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AnimationDemo = lazy(() => import("./components/AnimationDemo"));

const queryClient = new QueryClient();

// Loading component for suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-Bilio-yellow border-r-transparent"></div>
      <p className="mt-4 text-Bilio-gray-600">Cargando...</p>
    </div>
  </div>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
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

              {/* Animation Demo (Development) */}
              <Route path="/animation-demo" element={<AnimationDemo />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

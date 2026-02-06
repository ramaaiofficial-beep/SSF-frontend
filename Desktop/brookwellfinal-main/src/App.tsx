import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import AboutUsPage from "./pages/AboutUsPage";
import ThrieBeamPage from "./pages/ThrieBeamPage";
import WBeamPage from "./pages/WBeamPage";
import InquiryPage from "./pages/InquiryPage";
import ContactUsPage from "./pages/ContactUsPage";
import OurProducts from "./pages/OurProducts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/thrie-beam" element={<ThrieBeamPage />} />
          <Route path="/w-beam" element={<WBeamPage />} />
          <Route path="/inquiry" element={<InquiryPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/our-products" element={<OurProducts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
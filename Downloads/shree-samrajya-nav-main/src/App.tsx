import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DonationModalProvider, useDonationModal } from "@/contexts/DonationModalContext";
import DonationModal from "@/components/DonationModal";
import Index from "./pages/Index";
import HospitalOverview from "./pages/HospitalOverview";
import HospitalDepartments from "./pages/HospitalDepartments";
import OfflineDonations from "./pages/OfflineDonations";
import AboutFoundation from "./pages/AboutFoundation";
import BoardMembers from "./pages/BoardMembers";
import Guruji from "./pages/Guruji";
import GoddessSamrajyalakshmi from "./pages/GoddessSamrajyalakshmi";
import Temple from "./pages/Temple";
import ContactUs from "./pages/ContactUs";
import MediaGallery from "./pages/MediaGallery";
import PressAndNews from "./pages/PressAndNews";
import PhotoGallery from "./pages/PhotoGallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Global Donation Modal Component
const GlobalDonationModal = () => {
  const { isOpen, setOpen } = useDonationModal();
  return <DonationModal open={isOpen} onOpenChange={setOpen} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <DonationModalProvider>
        <Toaster />
        <Sonner />
        <GlobalDonationModal />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/hospital/overview" element={<HospitalOverview />} />
            <Route path="/hospital/departments" element={<HospitalDepartments />} />
            <Route path="/fundraising/offline" element={<OfflineDonations />} />
            <Route path="/foundation/about" element={<AboutFoundation />} />
            <Route path="/foundation/board" element={<BoardMembers />} />
            <Route path="/foundation/guruji" element={<Guruji />} />
            <Route path="/foundation/goddess" element={<GoddessSamrajyalakshmi />} />
            <Route path="/foundation/temple" element={<Temple />} />
            <Route path="/contact/contact-us" element={<ContactUs />} />
            <Route path="/media" element={<MediaGallery />} />
            <Route path="/media/press" element={<PressAndNews />} />
            <Route path="/media/photos" element={<PhotoGallery />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DonationModalProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

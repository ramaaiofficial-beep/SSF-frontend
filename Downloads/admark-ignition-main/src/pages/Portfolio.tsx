import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { OurWork } from "@/components/OurWork";
import { DownloadSuccessPopup } from "@/components/DownloadSuccessPopup";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import prospectusPdf from "@/assets/AdMark-Digitals prospectus.pdf?url";
import portfolioPdf from "@/assets/Our-Works portfolio .pdf?url";

const Portfolio = () => {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);

  const handleDownloadPDFs = async () => {
    try {
      // Download both PDFs
      const pdfs = [
        { 
          url: prospectusPdf,
          filename: "AdMark-Digitals-prospectus.pdf" 
        },
        { 
          url: portfolioPdf,
          filename: "Our-Works-portfolio.pdf" 
        },
      ];

      for (const pdf of pdfs) {
        try {
          const response = await fetch(pdf.url);
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = pdf.filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
          // Small delay between downloads
          await new Promise(resolve => setTimeout(resolve, 100));
        } catch (error) {
          console.error(`Error downloading ${pdf.filename}:`, error);
        }
      }

      // Show success popup
      setShowDownloadPopup(true);
    } catch (error) {
      console.error("Error downloading PDFs:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Our Work Section with Animation */}
      <OurWork />

      {/* Download Section */}
      <section className="relative py-32 bg-background overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-pulse-slow" />
        
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              <span className="text-neon">Download</span> Our Portfolio
            </h2>
            <p className="text-muted-foreground text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
              Get our complete portfolio and company prospectus. See what we've built and what we can do for you.
            </p>
            
            <Button
              onClick={handleDownloadPDFs}
              variant="neon"
              size="lg"
              className="text-lg px-8 py-6 group relative overflow-hidden"
            >
              <Download className="mr-2 group-hover:animate-bounce" size={24} />
              Download Portfolio PDFs
              <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            <p className="text-muted-foreground text-sm mt-6">
              Includes: Company Prospectus & Our Works Portfolio
            </p>
          </div>
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-primary/20 rounded-full animate-float pointer-events-none">
          <div className="absolute inset-0 border-2 border-primary/10 rounded-full animate-pulse-slow" />
        </div>
        <div
          className="absolute bottom-20 right-10 w-60 h-60 border-2 border-primary/20 rounded-full animate-float pointer-events-none"
          style={{ animationDelay: "1s" }}
        >
          <div
            className="absolute inset-0 border-2 border-primary/10 rounded-full animate-pulse-slow"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
      </section>

      {/* Download Success Popup */}
      <DownloadSuccessPopup
        isVisible={showDownloadPopup}
        onClose={() => setShowDownloadPopup(false)}
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Portfolio;

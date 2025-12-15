import { useState } from "react";
import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import gallery1 from "@/assets/view more media/Krupanidhi-Guru-Ji-Picture-Gallery-1-768x644-1.jpg";
import gallery2 from "@/assets/view more media/Krupanidhi-Guru-Ji-Picture-Gallery-2-768x644-1.jpg";
import gallery3 from "@/assets/view more media/Krupanidhi-Guru-Ji-Picture-Gallery-3-768x644-1.jpg";
import gallery4 from "@/assets/view more media/Krupanidhi-Guru-Ji-Picture-Gallery-4-768x644-1.jpg";
import gallery5 from "@/assets/view more media/Krupanidhi-Guru-Ji-Picture-Gallery-6a-768x644-1.jpg";
import gallery6 from "@/assets/view more media/Krupanidhi-Guru-Ji-Picture-Gallery-7-768x644-1.jpg";
import gallery7 from "@/assets/view more media/Krupanidhi-Guru-Ji-Picture-Gallery-8-768x644-1 (1).jpg";
import gallery8 from "@/assets/view more media/Krupanidhi-Guru-Ji-Picture-Gallery-9-768x644-1.jpg";
import gallery9 from "@/assets/view more media/Untitled-design-2.png";
import gallery10 from "@/assets/view more media/WhatsApp-Image-2025-08-15-at-9.24.28-PM-1-scaled.jpeg";
import gallery11 from "@/assets/view more media/WhatsApp-Image-2025-08-15-at-9.24.28-PM-scaled.jpeg";
import gallery12 from "@/assets/view more media/WhatsApp-Image-2025-08-15-at-9.24.29-PM-scaled.jpeg";
import gallery13 from "@/assets/view more media/WhatsApp-Image-2025-08-15-at-9.35.18-PM.jpeg";
import gallery14 from "@/assets/view more media/WhatsApp-Image-2025-08-15-at-9.36.14-PM.jpeg";

const MediaGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
  ];

  return (
    <div className="min-h-screen bg-background pt-[73px] sm:pt-[81px]">
      <NavBar />
      
      {/* Hero Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-foreground">
              Media Gallery
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-1 sm:mt-2 text-center">
              Explore Our Events and Activities
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pt-4 sm:pt-6 pb-6 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg bg-background">
                    <img
                      src={image}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-primary/90 rounded-full p-2">
                          <X className="h-4 w-4 text-white rotate-45" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative rounded-lg overflow-hidden border-2 border-white/20 shadow-2xl">
              <img
                src={selectedImage}
                alt="Gallery"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaGallery;


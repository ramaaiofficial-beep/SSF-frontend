import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CheckCircle2, Download, Sparkles, X } from "lucide-react";

interface DownloadSuccessPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

export const DownloadSuccessPopup = ({ isVisible, onClose }: DownloadSuccessPopupProps) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const sparklesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    const popup = popupRef.current;
    const icon = iconRef.current;
    const sparkles = sparklesRef.current;

    if (!popup || !icon || !sparkles) return;

    // Entrance animation
    gsap.fromTo(
      popup,
      {
        scale: 0.5,
        opacity: 0,
        y: 50,
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      }
    );

    // Icon animation
    gsap.fromTo(
      icon,
      {
        scale: 0,
        rotation: -180,
      },
      {
        scale: 1,
        rotation: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "elastic.out(1, 0.5)",
      }
    );

    // Sparkles animation
    const sparkleElements = sparkles.querySelectorAll(".sparkle");
    sparkleElements.forEach((sparkle, i) => {
      gsap.fromTo(
        sparkle,
        {
          scale: 0,
          opacity: 0,
          x: 0,
          y: 0,
        },
        {
          scale: 1,
          opacity: 1,
          x: () => (Math.random() - 0.5) * 100,
          y: () => (Math.random() - 0.5) * 100,
          duration: 1,
          delay: 0.4 + i * 0.1,
          ease: "power2.out",
        }
      );
    });

    // Auto close after 3 seconds
    const timer = setTimeout(() => {
      gsap.to(popup, {
        scale: 0.8,
        opacity: 0,
        y: -30,
        duration: 0.3,
        ease: "power2.in",
        onComplete: onClose,
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Popup */}
      <div
        ref={popupRef}
        className="relative bg-gradient-to-br from-card via-card/95 to-card border-2 border-primary/50 rounded-2xl p-8 md:p-12 shadow-[0_0_60px_rgba(239,68,68,0.5)] max-w-md w-full mx-4 pointer-events-auto"
      >
        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 animate-shimmer opacity-50" />

        {/* Sparkles */}
        <div ref={sparklesRef} className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <Sparkles
              key={i}
              className="sparkle absolute text-primary"
              size={16}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Icon */}
          <div ref={iconRef} className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full animate-pulse" />
              <CheckCircle2 className="relative text-primary" size={80} strokeWidth={2} />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            Download Successful!
          </h3>

          {/* Message */}
          <p className="text-muted-foreground text-lg mb-2">
            Thank you for downloading!
          </p>
          <p className="text-muted-foreground text-base mb-6">
            Please check your downloads folder for the PDF files.
          </p>

          {/* Download icon animation */}
          <div className="flex justify-center">
            <div className="relative">
              <Download className="text-primary animate-bounce" size={32} />
              <div className="absolute inset-0 bg-primary/20 blur-xl animate-pulse" />
            </div>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={() => {
            gsap.to(popupRef.current, {
              scale: 0.8,
              opacity: 0,
              y: -30,
              duration: 0.3,
              ease: "power2.in",
              onComplete: onClose,
            });
          }}
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};


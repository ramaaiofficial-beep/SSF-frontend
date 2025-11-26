import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logoImage from "../assets/ADMARK LOGO.png";

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoading) return;

    const container = containerRef.current;
    const logo = logoRef.current;
    const progress = progressRef.current;
    const rings = ringsRef.current;

    if (!container || !logo || !progress || !rings) return;

    // Reset and show
    gsap.set(container, { display: "flex", opacity: 0, backdropFilter: "blur(0px)" });
    gsap.set(logo, { scale: 0, opacity: 0, rotation: -180 });
    gsap.set(progress, { scaleX: 0 });

    // Entrance animation
    const tl = gsap.timeline();

    tl.to(container, {
      opacity: 1,
      backdropFilter: "blur(30px)",
      duration: 0.5,
      ease: "power2.out",
    })
      .to(
        logo,
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .to(
        progress,
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=0.6"
      );

    // Rotate rings
    gsap.to(rings.querySelectorAll(".ring"), {
      rotation: 360,
      duration: 3,
      repeat: -1,
      ease: "none",
    });

    gsap.to(rings.querySelectorAll(".ring-reverse"), {
      rotation: -360,
      duration: 4,
      repeat: -1,
      ease: "none",
    });

    // Exit animation after 2 seconds
    const exitTimer = setTimeout(() => {
      const exitTl = gsap.timeline({
        onComplete: () => {
          gsap.set(container, { display: "none" });
        },
      });

      exitTl.to(logo, {
        scale: 1.2,
        opacity: 0,
        rotation: 180,
        duration: 0.4,
        ease: "power2.in",
      }).to(
        container,
        {
          opacity: 0,
          backdropFilter: "blur(0px)",
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.2"
      );
    }, 2000);

    return () => {
      clearTimeout(exitTimer);
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/90 backdrop-blur-2xl"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-primary/20 animate-pulse-slow" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(239, 68, 68, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "25px 25px",
        }}
      />

      {/* Rotating rings */}
      <div ref={ringsRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="ring absolute border-2 border-primary/30 rounded-full" style={{ width: "300px", height: "300px" }} />
        <div className="ring-reverse absolute border-2 border-primary/20 rounded-full" style={{ width: "400px", height: "400px" }} />
        <div className="ring absolute border-2 border-primary/10 rounded-full" style={{ width: "500px", height: "500px" }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo with effects */}
        <div className="relative mb-10">
          {/* Outer glow */}
          <div className="absolute inset-0 bg-primary/40 blur-3xl rounded-full scale-150 animate-pulse" />
          
          {/* Rotating border rings */}
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-spin" style={{ animationDuration: "3s" }} />
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin" style={{ animationDuration: "2s", animationDirection: "reverse" }} />
          
          {/* Logo image */}
          <img
            ref={logoRef}
            src={logoImage}
            alt="AdMark Digitals"
            className="relative w-36 h-36 md:w-44 md:h-44 object-contain filter drop-shadow-[0_0_40px_rgba(239,68,68,1)]"
          />
        </div>

        {/* Loading text */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-pulse">
          Loading...
        </h2>

        {/* Progress bar */}
        <div className="w-72 md:w-96 h-1.5 bg-primary/20 rounded-full overflow-hidden backdrop-blur-sm">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-primary via-primary-glow to-primary rounded-full origin-left shadow-[0_0_20px_rgba(239,68,68,0.8)]"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>

      {/* Corner accent elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-2 border-primary/40 rounded-full animate-pulse" />
      <div className="absolute top-8 right-8 w-12 h-12 border-2 border-primary/40 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-2 border-primary/40 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-primary/40 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
    </div>
  );
};


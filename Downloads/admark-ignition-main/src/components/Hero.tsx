import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 0, 51, ${Math.random() * 0.5 + 0.5})`;
        ctx.fill();

        // Draw connections
        particles.forEach((p2) => {
          const dx = particle.x - p2.x;
          const dy = particle.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 0, 51, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const marqueeItems = [
    "Portfolio Websites",
    "E-Commerce",
    "Cost-Effective Premium Websites",
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10"
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Rolling Text Animation */}
          <div className="overflow-hidden">
            <h1 className="text-6xl md:text-8xl font-bold text-foreground animate-fade-in">
              <span className="block">We Don't Just Build Websites.</span>
              <span className="block text-neon mt-4">
                We Engineer Digital Obsessions.
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Because mid websites should be illegal.
            <br />
            We design experiences so good, your competition will be like: "Bro, send the developer number."
          </p>

          {/* Marquee */}
          <div className="relative overflow-hidden py-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex animate-marquee whitespace-nowrap">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span
                  key={i}
                  className="mx-8 text-lg md:text-xl font-semibold text-primary inline-flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Build My Website
            </Button>
            <Button variant="neon" size="lg" className="text-lg px-8 py-6">
              <MessageCircle className="mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-30" />
    </section>
  );
};

// Add marquee animation to index.css
const style = document.createElement("style");
style.textContent = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    animation: marquee 20s linear infinite;
  }
`;
document.head.appendChild(style);

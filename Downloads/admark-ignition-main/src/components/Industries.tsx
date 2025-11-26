import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { name: "Digital Commerce", icon: "🛍️", tagline: "Sell more, stress less", color: "from-blue-500/20 to-purple-500/20" },
  { name: "Culinary Ventures", icon: "🍽️", tagline: "Food that slaps, sites that match", color: "from-orange-500/20 to-red-500/20" },
  { name: "EdTech Platforms", icon: "🎓", tagline: "Learning made lit", color: "from-purple-500/20 to-pink-500/20" },
  { name: "Property Markets", icon: "🏢", tagline: "Real estate, unreal sites", color: "from-cyan-500/20 to-blue-500/20" },
  { name: "Travel & Hospitality", icon: "✈️", tagline: "Wanderlust, web-style", color: "from-sky-500/20 to-cyan-500/20" },
  { name: "HealthTech Solutions", icon: "⚕️", tagline: "Healthy code, healthy vibes", color: "from-green-500/20 to-emerald-500/20" },
  { name: "Beauty & Wellness", icon: "💅", tagline: "Glow up your digital presence", color: "from-pink-500/20 to-rose-500/20" },
  { name: "FinTech Innovations", icon: "💰", tagline: "Money moves, web moves", color: "from-yellow-500/20 to-amber-500/20" },
];

export const Industries = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".industry-card");
    
    cards.forEach((card, index) => {
      const cardElement = card as HTMLElement;
      
      // Scroll trigger animation
      gsap.from(cardElement, {
        scrollTrigger: {
          trigger: cardElement,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        scale: 0.8,
        rotation: index % 2 === 0 ? -5 : 5,
        duration: 0.8,
        delay: index * 0.1,
        ease: "back.out(1.7)",
      });

      // Magnetic hover effect
      const handleMouseMove = (e: MouseEvent) => {
        const rect = cardElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const moveX = (x - centerX) * 0.15;
        const moveY = (y - centerY) * 0.15;

        gsap.to(cardElement, {
          x: moveX,
          y: moveY,
          rotationX: moveY * 0.1,
          rotationY: moveX * 0.1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(cardElement, {
          x: 0,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });
      };

      cardElement.addEventListener("mousemove", handleMouseMove);
      cardElement.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        cardElement.removeEventListener("mousemove", handleMouseMove);
        cardElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    // Title animation
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="industries" ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-pulse-slow" />
      
      {/* Grid pattern */}
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
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="text-6xl md:text-8xl font-bold text-foreground mb-6">
            Industries We <span className="text-neon relative inline-block">
              Dominate
              <span className="absolute inset-0 text-neon blur-2xl opacity-50 animate-pulse-slow">Dominate</span>
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            From startups to enterprises, if you've got ambition, we've got the blueprint.
            <br />
            <span className="text-primary text-lg">(No cap, fr fr)</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto perspective-1000">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="industry-card group relative cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-card/90 via-card/70 to-card/50 backdrop-blur-xl border-2 border-primary/20 rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_40px_rgba(239,68,68,0.3)] h-full">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <div 
                    className="absolute inset-0 rounded-2xl animate-shimmer"
                    style={{
                      background: "linear-gradient(90deg, transparent, hsl(350, 100%, 50% / 0.5), transparent)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon with animation */}
                  <div className="mb-4 relative">
                    <div className="text-6xl md:text-7xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 inline-block">
                      {industry.icon}
                    </div>
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {industry.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm md:text-base text-muted-foreground group-hover:text-primary/80 transition-colors duration-300 font-medium">
                    {industry.tagline}
                  </p>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Particle effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full animate-float"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${2 + Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
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
  );
};

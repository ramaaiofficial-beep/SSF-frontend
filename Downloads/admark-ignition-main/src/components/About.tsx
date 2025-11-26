import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logoImage from "../assets/ADMARK LOGO.png";

gsap.registerPlugin(ScrollTrigger);

interface PhilosophyCardProps {
  title: string;
  children: React.ReactNode;
  index: number;
}

const PhilosophyCard = ({ title, children, index }: PhilosophyCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const title = titleRef.current;
    const content = contentRef.current;
    const glow = glowRef.current;

    if (!card || !title || !content || !glow) return;

    // Magnetic hover effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const moveX = (x - centerX) * 0.1;
      const moveY = (y - centerY) * 0.1;

      gsap.to(card, {
        x: moveX,
        y: moveY,
        rotationX: moveY * 0.1,
        rotationY: moveX * 0.1,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(glow, {
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
      });

      gsap.to(glow, {
        x: 0,
        y: 0,
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      gsap.to(glow, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      // Glitch effect on title
      gsap.to(title, {
        x: () => (Math.random() - 0.5) * 4,
        duration: 0.05,
        repeat: 5,
        yoyo: true,
        ease: "power2.inOut",
      });

      // Text reveal animation
      const words = content.textContent?.split(" ") || [];
      content.innerHTML = words
        .map((word, i) => `<span class="word" style="opacity: 0;">${word} </span>`)
        .join("");

      gsap.to(content.querySelectorAll(".word"), {
        opacity: 1,
        duration: 0.3,
        stagger: 0.02,
        ease: "power2.out",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("mouseenter", handleMouseEnter);

    // Scroll trigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(card, {
      opacity: 0,
      y: 100,
      x: index % 2 === 0 ? -50 : 50,
      rotationX: -15,
      rotationY: index % 2 === 0 ? -5 : 5,
      duration: 1,
      ease: "power3.out",
      delay: index * 0.15,
    })
      .from(
        title,
        {
          opacity: 0,
          x: -50,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        content,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
      card.removeEventListener("mouseenter", handleMouseEnter);
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === card) trigger.kill();
      });
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="relative perspective-1000 group cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      {/* Animated glow effect */}
      <div
        ref={glowRef}
        className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none transition-opacity duration-300"
        style={{
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "50%",
          width: "200%",
          height: "200%",
          scale: 0,
          background: "radial-gradient(circle, hsl(350, 100%, 50% / 0.2), hsl(350, 100%, 50% / 0.05), transparent)",
        }}
      />

      {/* Card content */}
      <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 md:p-10 overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(239,68,68,0.3)] h-full flex flex-col">
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
          <div 
            className="absolute inset-0 rounded-2xl animate-shimmer"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(350, 100%, 50% / 0.5), transparent)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col flex-grow">
          <h3
            ref={titleRef}
            className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent"
          >
            {title}
          </h3>
          <p
            ref={contentRef}
            className="text-muted-foreground text-base md:text-lg leading-relaxed flex-grow"
          >
            {children}
          </p>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Particle effect overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          {[...Array(20)].map((_, i) => (
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
  );
};

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const logo = logoRef.current;
    const cta = ctaRef.current;

    if (!section || !logo || !cta) return;

    // Logo animation
    gsap.from(logo, {
      scrollTrigger: {
        trigger: logo,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      scale: 0.5,
      rotation: -180,
      duration: 1.2,
      ease: "back.out(1.7)",
    });

    // CTA animation
    gsap.from(cta, {
      scrollTrigger: {
        trigger: cta,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      delay: 0.4,
      ease: "back.out(1.7)",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.vars.trigger === logo ||
          trigger.vars.trigger === cta
        ) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            {/* Logo */}
            <div ref={logoRef} className="flex justify-center mb-8">
              <div className="relative group cursor-pointer">
                <img
                  src={logoImage}
                  alt="AdMark Digitals Logo"
                  className="h-24 md:h-32 w-auto object-contain filter drop-shadow-[0_0_20px_rgba(239,68,68,0.5)] group-hover:drop-shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </div>
            </div>
          </div>

          {/* Philosophy Cards - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-12">
            <PhilosophyCard title="Our Philosophy" index={0}>
              In a world drowning in mediocre websites, we engineer digital
              experiences that create psychological impact. Every pixel, every
              interaction, every line of code is strategically designed to
              convert visitors into customers and turn browsers into believers.
            </PhilosophyCard>

            <PhilosophyCard title="What Makes Us Different" index={1}>
              We don't just build websites—we craft digital weapons for modern
              businesses. Combining cutting-edge technology, conversion
              psychology, and killer design, we create platforms that don't just
              look good—they perform. Your competitors will wonder what hit
              them. Your customers will wonder where you've been all their lives.
            </PhilosophyCard>

            <PhilosophyCard title="Our Promise" index={2}>
              We build fast, we build smart, and we build to scale. Whether
              you're a startup ready to disrupt or an established brand looking
              to dominate, we deliver premium-quality websites that are
              mobile-obsessed, SEO-optimized, and conversion-engineered. No
              templates. No shortcuts. Just pure digital excellence that makes
              your competition sweat.
            </PhilosophyCard>
          </div>

          {/* CTA Section */}
          <div ref={ctaRef} className="text-center pt-16">
            <div className="relative inline-block group">
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-4 relative z-10">
                Ready to build something unforgettable?
              </p>
              <div className="absolute inset-0 bg-primary/20 blur-2xl group-hover:bg-primary/30 transition-colors duration-300 rounded-full" />
            </div>
            <p className="text-muted-foreground text-lg md:text-xl mt-4">
              Let's turn your vision into a digital reality that customers can't
              stop talking about.
            </p>
          </div>
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
  );
};

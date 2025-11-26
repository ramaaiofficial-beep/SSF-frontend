import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Zap, Rocket, Shield, Target, Code, Smartphone, PenTool, Palette } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const additionalServices = [
  {
    title: "Strategic Web Design",
    description: "Not just pretty pixels. We architect digital experiences that convert visitors into customers, because aesthetics without strategy is just expensive art.",
    icon: Palette,
    gradient: "from-purple-500/20 via-pink-500/20 to-red-500/20",
    glow: "rgba(168, 85, 247, 0.4)",
  },
  {
    title: "24/7 Elite Support",
    description: "Sleep-deprived founders get priority. We're here round-the-clock because your website doesn't take vacations, and neither do we.",
    icon: Shield,
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    glow: "rgba(59, 130, 246, 0.4)",
  },
  {
    title: "Full-Stack Development",
    description: "Front-end glamour meets back-end muscle. We build the entire ecosystem—responsive, scalable, and future-proof. No half-measures here.",
    icon: Code,
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    glow: "rgba(34, 197, 94, 0.4)",
  },
  {
    title: "100% Mobile-Obsessed Design",
    description: "If it doesn't look killer on a phone, it doesn't leave our studio. Period. Mobile-first isn't a buzzword for us—it's survival.",
    icon: Smartphone,
    gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
    glow: "rgba(249, 115, 22, 0.4)",
  },
  {
    title: "Conversion-Driven Content",
    description: "Words that sell, not just fill space. We craft copy that speaks to humans, converts skeptics, and makes Google algorithms jealous.",
    icon: PenTool,
    gradient: "from-rose-500/20 via-pink-500/20 to-fuchsia-500/20",
    glow: "rgba(244, 63, 94, 0.4)",
  },
  {
    title: "Identity & Logo Mastery",
    description: "Your brand isn't just a logo—it's a psychological weapon. We design identities that stick in minds and demand attention.",
    icon: Rocket,
    gradient: "from-violet-500/20 via-purple-500/20 to-indigo-500/20",
    glow: "rgba(139, 92, 246, 0.4)",
  },
];

interface ServiceCardProps {
  service: typeof additionalServices[0];
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const IconComponent = service.icon;

  useEffect(() => {
    const card = cardRef.current;
    const icon = iconRef.current;
    const title = titleRef.current;
    const desc = descRef.current;
    const glow = glowRef.current;

    if (!card || !icon || !title || !desc || !glow) return;

    // Scroll trigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(card, {
      opacity: 0,
      y: 80,
      rotationX: -20,
      scale: 0.8,
      duration: 1,
      ease: "power3.out",
      delay: index * 0.1,
    })
      .from(
        icon,
        {
          opacity: 0,
          scale: 0,
          rotation: -180,
          duration: 0.8,
          ease: "back.out(2)",
        },
        "-=0.5"
      )
      .from(
        title,
        {
          opacity: 0,
          x: -30,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        desc,
        {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

    // Magnetic hover effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const moveX = (x - centerX) * 0.2;
      const moveY = (y - centerY) * 0.2;

      gsap.to(card, {
        x: moveX,
        y: moveY,
        rotationX: moveY * 0.15,
        rotationY: moveX * 0.15,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(glow, {
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(icon, {
        rotation: 360,
        scale: 1.2,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });

      gsap.to(glow, {
        x: 0,
        y: 0,
        scale: 0,
        duration: 0.4,
        ease: "power2.out",
      });

      gsap.to(icon, {
        rotation: 0,
        scale: 1,
        duration: 0.4,
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
        x: () => (Math.random() - 0.5) * 3,
        duration: 0.05,
        repeat: 3,
        yoyo: true,
        ease: "power2.inOut",
      });

      // Sparkle particles
      const sparkles = card.querySelectorAll(".sparkle");
      sparkles.forEach((sparkle, i) => {
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
            x: () => (Math.random() - 0.5) * 80,
            y: () => (Math.random() - 0.5) * 80,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power2.out",
          }
        );
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("mouseenter", handleMouseEnter);

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
      className="group relative cursor-pointer perspective-1000"
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
          background: `radial-gradient(circle, ${service.glow}, transparent)`,
        }}
      />

      {/* Card */}
      <div className={`relative bg-gradient-to-br from-card/90 via-card/70 to-card/50 backdrop-blur-xl border-2 border-primary/20 rounded-2xl p-8 overflow-hidden transition-all duration-500 group-hover:border-primary/50 h-full`}
        style={{
          boxShadow: `0 0 0 0 ${service.glow}`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 40px ${service.glow}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 0 0 0 ${service.glow}`;
        }}
      >
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
          <div 
            className="absolute inset-0 rounded-2xl animate-shimmer"
            style={{
              background: `linear-gradient(90deg, transparent, ${service.glow}, transparent)`,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div ref={iconRef} className="mb-6 relative inline-block">
            <div className={`p-4 rounded-xl bg-gradient-to-br ${service.gradient} border border-primary/30 group-hover:border-primary/50 transition-all duration-300`}>
              <IconComponent className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Title */}
          <h3
            ref={titleRef}
            className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300"
          >
            {service.title}
          </h3>

          {/* Description */}
          <p
            ref={descRef}
            className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300"
          >
            {service.description}
          </p>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Sparkle particles */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <Sparkles
              key={i}
              className="sparkle absolute text-primary"
              size={14}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          {[...Array(15)].map((_, i) => (
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

export const AdditionalServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    if (title) {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }

    if (subtitle) {
      gsap.from(subtitle, {
        scrollTrigger: {
          trigger: subtitle,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.vars.trigger === title ||
          trigger.vars.trigger === subtitle
        ) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section id="more-ways" ref={sectionRef} className="py-32 bg-gradient-dark relative overflow-hidden">
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
          <h2
            ref={titleRef}
            className="text-6xl md:text-8xl font-bold text-foreground mb-6"
          >
            More Ways We Make{" "}
            <span className="text-neon relative inline-block">
              Magic Happen
              <span className="absolute inset-0 text-neon blur-2xl opacity-50 animate-pulse-slow">
                Magic Happen
              </span>
            </span>
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Because one skill set is never enough when you're building empires.
            <br />
            <span className="text-primary text-lg">(We're built different, no cap)</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {additionalServices.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
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

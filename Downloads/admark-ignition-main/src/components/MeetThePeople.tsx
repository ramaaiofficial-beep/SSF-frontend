import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Mail, Phone } from "lucide-react";
import ctoImage from "../assets/CTO .jpeg";
import coFounderImage from "../assets/Co-founder.jpeg";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Harshith V Malipatil",
    role: "CTO",
    image: ctoImage,
    phone: "9632092273",
    email: "malipatilharshith@gmail.com",
    linkedin: "https://www.linkedin.com/in/harshith-malipatil-6503a4264",
    description: "The code wizard behind the magic. Turning coffee into code and ideas into reality.",
  },
  {
    name: "Tejasvi Jois",
    role: "Co-Founder",
    image: coFounderImage,
    phone: "9686658055",
    email: "tejasvijois@gmail.com",
    linkedin: "https://www.linkedin.com/in/tejasvijois",
    description: "The vision architect. Building bridges between dreams and digital reality.",
  },
];

interface TeamCardProps {
  member: typeof teamMembers[0];
  index: number;
}

const TeamCard = ({ member, index }: TeamCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const glow = glowRef.current;

    if (!card || !image || !content || !glow) return;

    // Professional scroll trigger animation with creative entrance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(card, {
      opacity: 0,
      y: 60,
      scale: 0.95,
      duration: 1,
      ease: "power3.out",
      delay: index * 0.2,
    })
      .from(
        image,
        {
          opacity: 0,
          scale: 0.8,
          rotation: -5,
          duration: 0.8,
          ease: "back.out(1.4)",
        },
        "-=0.6"
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

    // Subtle professional hover effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const moveX = (x - centerX) * 0.05;
      const moveY = (y - centerY) * 0.05;

      gsap.to(card, {
        x: moveX,
        y: moveY,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(glow, {
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        opacity: 0.3,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(glow, {
        x: 0,
        y: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === card) trigger.kill();
      });
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative perspective-1000"
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
          width: "150%",
          height: "150%",
          background: "radial-gradient(circle, hsl(350, 100%, 50% / 0.15), transparent 70%)",
        }}
      />

      {/* Card - Creative and professional */}
      <div className="relative bg-gradient-to-br from-card/90 via-card/80 to-card/70 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 md:p-10 overflow-hidden transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_20px_60px_rgba(239,68,68,0.15)] group-hover:-translate-y-2">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 30%, rgba(239, 68, 68, 0.03) 50%, transparent 70%),
                linear-gradient(-45deg, transparent 30%, rgba(239, 68, 68, 0.03) 50%, transparent 70%)
              `,
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* Content */}
        <div ref={contentRef} className="relative z-10 text-center">
          {/* Image with creative frame */}
          <div className="relative mb-8 inline-block">
            {/* Outer glow ring */}
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
            
            {/* Image container with creative border */}
            <div className="relative">
              {/* Decorative corner elements */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative w-48 h-48 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary/60 transition-all duration-500 shadow-[0_0_30px_rgba(239,68,68,0.2)] group-hover:shadow-[0_0_40px_rgba(239,68,68,0.4)]">
                <img
                  ref={imageRef}
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Role badge - Creative design */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary via-primary-glow to-primary text-primary-foreground px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg group-hover:scale-110 transition-transform duration-300">
              {member.role}
            </div>
          </div>

          {/* Name with gradient effect */}
          <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:via-primary-glow group-hover:to-primary transition-all duration-500">
            {member.name}
          </h3>

          {/* Description with elegant styling */}
          <div className="relative mb-8">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg italic group-hover:text-foreground/90 transition-colors duration-300">
              "{member.description}"
            </p>
            {/* Decorative quote marks */}
            <div className="absolute -top-4 -left-4 text-primary/20 text-6xl font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-300">"</div>
            <div className="absolute -bottom-8 -right-4 text-primary/20 text-6xl font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-300">"</div>
          </div>

          {/* Contact Info - Creative button design */}
          <div className="flex flex-col gap-3 justify-center items-center">
            <a
              href={`tel:${member.phone}`}
              className="group/btn relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 hover:from-primary/20 hover:via-primary/10 hover:to-primary/20 border border-primary/30 hover:border-primary/50 rounded-xl text-foreground hover:text-primary transition-all duration-300 w-full max-w-sm justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
              <Phone className="w-5 h-5 relative z-10 group-hover/btn:scale-110 transition-transform duration-300" />
              <span className="text-sm font-semibold relative z-10">{member.phone}</span>
            </a>
            <a
              href={`mailto:${member.email}`}
              className="group/btn relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 hover:from-primary/20 hover:via-primary/10 hover:to-primary/20 border border-primary/30 hover:border-primary/50 rounded-xl text-foreground hover:text-primary transition-all duration-300 w-full max-w-sm justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
              <Mail className="w-5 h-5 relative z-10 group-hover/btn:scale-110 transition-transform duration-300" />
              <span className="text-sm font-semibold relative z-10 truncate">{member.email}</span>
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 hover:from-primary/20 hover:via-primary/10 hover:to-primary/20 border border-primary/30 hover:border-primary/50 rounded-xl text-foreground hover:text-primary transition-all duration-300 w-full max-w-sm justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
              <Linkedin className="w-5 h-5 relative z-10 group-hover/btn:scale-110 transition-transform duration-300" />
              <span className="text-sm font-semibold relative z-10">View LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MeetThePeople = () => {
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
    <section id="meet-the-people" ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* Creative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/10 rounded-full opacity-30 animate-float pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-40 h-40 border border-primary/10 rounded-lg rotate-45 opacity-20 animate-float pointer-events-none" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4" />
          </div>
          <h2
            ref={titleRef}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="text-foreground">Meet the </span>
            <span className="relative inline-block">
              <span className="text-primary relative z-10">Team</span>
              <span className="absolute inset-0 text-primary blur-2xl opacity-50 animate-pulse-slow">Team</span>
            </span>
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            The leadership team driving innovation and excellence at AdMark Digitals.
            <br />
            <span className="text-primary/60 text-lg">Visionaries crafting digital excellence.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};


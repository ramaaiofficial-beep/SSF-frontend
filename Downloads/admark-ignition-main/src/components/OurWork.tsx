import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const OurWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;

    if (!section || !text1 || !text2) return;

    // Horizontal scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
      },
    });

    tl.fromTo(
      text1,
      { x: "100%" },
      { x: "-100%", ease: "none" }
    ).fromTo(
      text2,
      { x: "-100%" },
      { x: "100%", ease: "none" },
      "<"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* First Text - Slides Left */}
        <div
          ref={text1Ref}
          className="text-outlined font-bold uppercase whitespace-nowrap"
          style={{
            fontSize: "clamp(4rem, 15vw, 12rem)",
            fontFamily: "Inter, sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          OUR WORK
        </div>

        {/* Second Text - Slides Right */}
        <div
          ref={text2Ref}
          className="text-outlined font-bold uppercase whitespace-nowrap mt-8"
          style={{
            fontSize: "clamp(4rem, 15vw, 12rem)",
            fontFamily: "Inter, sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          AWESOME DESIGNS
        </div>
      </div>

      {/* Glitch overlay effect */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-20">
        <div className="absolute inset-0 bg-primary animate-pulse-slow" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 51, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 51, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

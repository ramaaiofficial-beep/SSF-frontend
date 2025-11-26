import { useState } from "react";

const services = [
  {
    icon: "🌐",
    title: "Web Design & Development",
    description:
      "We build visually addictive websites customized to your goals. Clean, fast, responsive, and engineered for user obsession.",
  },
  {
    icon: "🛒",
    title: "E-Commerce Websites",
    description:
      "We create scalable e-commerce stores with payment integration, product variations, automated invoices, and conversion-friendly UI.",
  },
  {
    icon: "🔍",
    title: "SEO & Online Visibility",
    description:
      "Being invisible online is a crime. We fix that. Optimized structure, ranking strategy, and search visibility built in.",
  },
];

export const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            What We <span className="text-neon">Actually Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Not your average web agency. We're the ones your competitors wish they hired first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`
                  relative bg-card border border-border rounded-xl p-8 
                  transition-all duration-300 overflow-hidden
                  ${
                    hoveredIndex === index
                      ? "-translate-y-2 shadow-neon-strong border-primary"
                      : "shadow-lg hover:shadow-xl"
                  }
                `}
              >
                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-6 text-4xl transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>

                {/* Description with animated height */}
                <div
                  className={`
                    transition-all duration-300 ease-in-out
                    ${
                      hoveredIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                    overflow-hidden
                  `}
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`
                    absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent 
                    transition-opacity duration-300 pointer-events-none
                    ${hoveredIndex === index ? "opacity-100" : "opacity-0"}
                  `}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

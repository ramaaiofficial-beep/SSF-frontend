const reasons = [
  {
    title: "Dangerously Unique Design",
    description:
      "Cookie-cutter templates? Not here. Every pixel is custom-crafted to reflect your brand's personality and make your competitors question their life choices. We don't follow trends—we set them.",
  },
  {
    title: "SEO That Actually Works",
    description:
      "Pretty websites that nobody finds? That's a crime. We bake SEO intelligence into every line of code—meta tags, schema markup, speed optimization, and content structure that makes Google algorithms fall in love with you.",
  },
  {
    title: "Mobile-First Philosophy",
    description:
      "If it doesn't look flawless on a 5-inch screen, it doesn't ship. We obsess over responsive design because 70% of your visitors are scrolling on their phones—and they're impatient. So are we.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-gradient-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Why Clients Keep <span className="text-neon">Coming Back</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Spoiler: It's not just the coffee we serve at meetings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 hover-lift hover:border-primary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Number indicator */}
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-neon">
                {index + 1}
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4 mt-4 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary-glow group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

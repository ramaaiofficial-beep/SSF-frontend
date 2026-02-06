import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import highwaysImage from "@/assets/application-highways.png";
import bridgesImage from "@/assets/application-bridges.png";
import railwayImage from "@/assets/application-railway.png";
import ruralImage from "@/assets/application-rural.png";
import industrialImage from "@/assets/application-industrial.png";
import commercialImage from "@/assets/application-commercial.png";
import wBeamHeroImage from "@/assets/products-w-beam.png";
import { Shield, Layers, Globe, Wrench, Factory } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WBeamPage = () => {
  const [activeTab, setActiveTab] = useState("galvanising");
  const [activeFaq, setActiveFaq] = useState<string | undefined>(undefined);

  const featureCardStyles = `
    .feature-card {
      position: relative;
      overflow: hidden;
    }
    .feature-card::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      background-color: #E8B80D;
      transition: height 0.4s ease-in-out;
      z-index: 1;
    }
    .feature-card:hover::before {
      height: 100%;
    }
    .feature-number {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 8rem;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.3);
      opacity: 0;
      transition: opacity 0.4s ease-in-out;
      z-index: 2;
      pointer-events: none;
      font-family: 'Cinzel', serif;
    }
    .feature-card:hover .feature-number {
      opacity: 1;
    }
    .feature-title, .feature-description {
      position: relative;
      z-index: 3;
      transition: color 0.4s ease-in-out;
    }
    .feature-card:hover .feature-title,
    .feature-card:hover .feature-description {
      color: white;
    }
  `;

  const features = [
    {
      icon: Shield,
      number: "01",
      title: "Precision Engineering",
      description: "Crafted with meticulous detail to absorb and redirect collision forces effectively.",
    },
    {
      icon: Layers,
      number: "02",
      title: "Superior Durability",
      description: "Built to withstand severe impacts and extreme environmental conditions.",
    },
    {
      icon: Factory,
      number: "03",
      title: "Premium Materials",
      description: "Manufactured using high-quality steel from TATA, SAIL, and Hindustan Zinc.",
    },
    {
      icon: Shield,
      number: "04",
      title: "Enhanced Safety",
      description: "Double-wave design optimizes energy absorption, reducing injury and vehicle damage.",
    },
    {
      icon: Globe,
      number: "05",
      title: "Global Standards",
      description: "Meets Indian, American, European, and international safety standards.",
    },
    {
      icon: Wrench,
      number: "06",
      title: "Quick Installation",
      description: "Engineered for easy transport and efficient installation on-site.",
    },
  ];

  const applications = [
    {
      title: "Highways & Expressways",
      image: highwaysImage,
      description: "Engineered for high-speed corridors, W Beam barriers reduce accident severity and protect drivers and passengers with proven impact resistance.",
    },
    {
      title: "Bridges & Urban Roads",
      image: bridgesImage,
      description: "Installed on elevated roadways and city networks, these barriers safeguard commuters and infrastructure, meeting global crash barrier specifications.",
    },
    {
      title: "Railway Crossings",
      image: railwayImage,
      description: "Strategically positioned at road-rail intersections, they minimize collision risks between vehicles and trains, ensuring commuter and cargo safety.",
    },
    {
      title: "Rural Roads",
      image: ruralImage,
      description: "Improving connectivity and safety in rural regions, W Beam barriers strengthen infrastructure while reducing accident rates in community roads.",
    },
    {
      title: "Industrial Zones",
      image: industrialImage,
      description: "Deployed around factories and plants, they prevent vehicle mishaps, protecting workers, assets, and heavy equipment from potential hazards.",
    },
    {
      title: "Commercial Areas",
      image: commercialImage,
      description: "Ideal for bustling districts, shopping complexes, and markets, they enhance pedestrian safety and reduce risks of vehicle-related accidents.",
    },
  ];

  const manufacturingProcess = [
    {
      step: "01",
      title: "Document Review",
      description: "We carefully examine technical documents to ensure W Beam crash barriers meet client specifications and industry standards before production begins.",
    },
    {
      step: "02",
      title: "Material Inspection",
      description: "All raw materials are rigorously checked for quality, strength, and durability to guarantee reliable performance in crash barrier production.",
    },
    {
      step: "03",
      title: "Testing and quality control",
      description: "Raw materials undergo several mechanical and chemical tests to verify their properties, ensuring high-quality production and reliability.",
    },
    {
      step: "04",
      title: "Galvanising",
      description: "Coils are cleaned, fluxed, and hot-dip galvanized in zinc baths, then cooled to provide superior corrosion resistance and surface protection.",
    },
    {
      step: "05",
      title: "Packing",
      description: "Finished barriers are securely packed, labeled, and documented to protect them during transit and ensure smooth delivery to clients.",
    },
    {
      step: "06",
      title: "Dispatch",
      description: "Packed goods are shipped through logistics partners, with tracking and management to ensure timely, safe delivery to the destination.",
    },
  ];

  const qualityPolicyTabs = [
    {
      id: "advanced",
      name: "Advanced Machinery",
      description: "State-of-the-art machinery and infrastructure ensure precision engineering, consistently meeting stringent quality standards for all highway crash barriers.",
    },
    {
      id: "premium",
      name: "Premium Sourcing",
      description: "Only top-grade raw materials are selected to guarantee durability, strength, and superior performance.",
    },
    {
      id: "quality",
      name: "Quality Management",
      description: "End-to-end quality control ensures production management, thickness & width, and physical testing standards across all functional primary checks.",
    },
    {
      id: "thickness",
      name: "Thickness & Width",
      description: "Precise measurement of sheet thickness and width ensures all barriers meet required physical specifications and dimensional accuracy.",
    },
    {
      id: "physical",
      name: "Physical Testing",
      description: "Materials are tested for Yield Strength, Ultimate Tensile Strength, and Elongation to verify strength, durability, and reliability.",
    },
    {
      id: "chemical",
      name: "Chemical Composition",
      description: "Strict analysis of chemical composition ensures raw materials remain compliant with industry standards.",
    },
    {
      id: "dimensional",
      name: "Dimensional Accuracy",
      description: "Accurate measurements of length, diameter, galvanizing, and grade, coupled with skilled workmanship, deliver high-quality, defect-free barriers.",
    },
    {
      id: "finishing",
      name: "Finishing Checks",
      description: "Comprehensive inspections of dimensions, hole positions, slot sizes, and final shaping guarantee flawless finishing of all products.",
    },
    {
      id: "galvanising",
      name: "Galvanising Tests",
      description: "Laboratory tests verify zinc coating mass, uniformity, and adhesion, providing long-lasting corrosion protection for every barrier.",
    },
  ];

  const activeTabData = qualityPolicyTabs.find(tab => tab.id === activeTab);

  const faqs = [
    {
      id: "01",
      question: "How does a W Beam barrier work?",
      answer: "W Beam barriers use a double-wave (W-shaped) corrugated profile that absorbs and redirects impact energy, effectively containing vehicles and preventing crossover into opposing lanes. They are widely used for standard road safety applications.",
    },
    {
      id: "02",
      question: "What are the main components?",
      answer: "Components include W beam steel panels, posts, and connecting hardware, which collectively absorb impact energy and prevent vehicles from crossing lanes.",
    },
    {
      id: "03",
      question: "What material is used?",
      answer: "We use premium-grade galvanised steel with high mechanical strength and corrosion resistance, ensuring long-term durability and structural integrity.",
    },
    {
      id: "04",
      question: "What are the key benefits?",
      answer: "W Beam barriers ensure longevity, global standard compliance, versatility across highways, bridges, urban roads, industrial zones, and enhanced road safety.",
    },
    {
      id: "05",
      question: "What factors determine effectiveness?",
      answer: "Effectiveness depends on design, material quality, adherence to safety standards, and accurate professional installation for optimal performance.",
    },
    {
      id: "06",
      question: "Can barriers be customised?",
      answer: "Yes, they can be customised in length, height, beam profile, and end treatments to suit specific road geometries.",
    },
    {
      id: "07",
      question: "How do they perform in harsh weather?",
      answer: "Galvanised steel construction ensures resistance to extreme temperatures, heavy rainfall, and high winds, maintaining barrier durability.",
    },
    {
      id: "08",
      question: "Are they safety-compliant?",
      answer: "Yes, barriers are tested to meet national and international standards, including AASHTO M180, EN 1317, and MASH certifications.",
    },
    {
      id: "09",
      question: "Can they be installed on curves?",
      answer: "Specialised mounting hardware allows installation on curved roads while maintaining effectiveness in vehicle redirection and safety.",
    },
    {
      id: "10",
      question: "Are they suitable for high-speed areas?",
      answer: "Yes, their design ensures vehicles are safely redirected, preventing crossovers and reducing collision risks on highways and medians.",
    },
    {
      id: "11",
      question: "Are they environmentally friendly?",
      answer: "Galvanised steel construction reduces maintenance and replacements, providing a sustainable, eco-conscious road safety solution.",
    },
    {
      id: "12",
      question: "What are installation requirements?",
      answer: "Professional installation ensures proper alignment, spacing, and inspections, maximising barrier performance and road safety.",
    },
    {
      id: "13",
      question: "How to choose between W Beam and Thrie Beam?",
      answer: "W Beam is ideal for standard roads and cost-effective projects; Thrie Beam offers higher containment for high-speed or critical corridors. Consider traffic speed, volume, and safety requirements.",
    },
    {
      id: "14",
      question: "How does material choice impact durability?",
      answer: "High-quality steel from trusted vendors, combined with cold-rolling and proper grades, ensures corrosion resistance, strength, and long-lasting performance.",
    },
    {
      id: "15",
      question: "Where to get further information?",
      answer: "For maintenance, manufacturer details, crash absorption data, or cost inquiries, please contact Brookwell Industries directly.",
    },
  ];

  return (
    <div className="min-h-screen font-montserrat">
      <style>{featureCardStyles}</style>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${wBeamHeroImage})` }}
          >
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-end justify-start pb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-left tracking-wider">
              W Beam
            </h1>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-8 md:py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-left">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-normal">
                At <strong className="text-foreground font-bold">Brookwell Industries</strong>, we manufacture high-performance <strong className="text-foreground font-bold">W Beam Crash Barriers</strong> that are vital for highways, expressways, and road networks. Designed with a double-wave horizontal profile, these barriers deliver proven strength and impact resistance, making them highly effective for standard and accident-prone environments.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-normal">
                To ensure uncompromised quality, our barriers are produced using premium raw materials sourced from trusted industry leaders such as <strong className="text-foreground font-bold">TATA, SAIL, and Hindustan Zinc</strong>. Every product is built to meet stringent Indian, American, European, and international standards, ensuring long-lasting durability, corrosion resistance, and reliability in diverse conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-8 md:py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-center text-foreground mb-16 tracking-wide">
              Key Features
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="relative bg-white p-8 rounded-lg hover:shadow-lg transition-all duration-300 group overflow-hidden feature-card"
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-secondary/50 select-none font-cinzel feature-number">
                      {feature.number}
                    </div>

                    <div className="relative mb-4 w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>

                    <h3 className="relative text-xl font-montserrat font-bold text-foreground mb-3 tracking-wide feature-title group-hover:text-white transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="relative text-muted-foreground leading-relaxed font-normal feature-description group-hover:text-white transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-8 md:py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-center text-foreground mb-4 tracking-wide">
              Application Areas
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto font-normal">
              Our W Beam crash barriers are versatile and suitable for a wide range of road infrastructure projects
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent group-hover:from-blue-900/80 transition-all duration-500 flex items-end">
                      <h3 className="text-xl font-montserrat font-bold text-primary-foreground p-6 tracking-wide">
                        {app.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground leading-relaxed font-normal">
                      {app.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturing Process */}
        <section className="py-8 md:py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-center text-foreground mb-16 tracking-wide">
              Manufacturing Process
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {manufacturingProcess.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 group hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-montserrat font-bold text-lg group-hover:text-[#ff6600] transition-colors duration-300">
                      {step.step}
                    </div>
                    <span className="text-primary font-montserrat font-bold text-sm uppercase tracking-wide">STEP</span>
                  </div>

                  <h3 className="text-xl font-montserrat font-bold text-foreground mb-3 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Policy */}
        <section id="quality-policy" className="py-8 md:py-12 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-blue-100/10 blur-sm"></div>
          <div className="relative container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-center text-primary mb-12 tracking-wide">
              Quality Policy
            </h1>

            <nav className="flex flex-wrap justify-center gap-4 mb-12">
              {qualityPolicyTabs.map((tab) => (
                <button
                  key={tab.id}
                  data-tab={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-montserrat transition-all duration-300 ${
                    activeTab === tab.id
                      ? "text-blue-600 border-b-2 border-blue-600 font-bold"
                      : "text-blue-400 hover:text-blue-600 font-normal"
                  }`}
                  aria-selected={activeTab === tab.id}
                  role="tab"
                >
                  {tab.name}
                </button>
              ))}
            </nav>

            <div
              id="description-content"
              className="max-w-4xl mx-auto text-center transition-all duration-1000 ease-out"
              style={{
                opacity: activeTabData ? 1 : 0,
                transform: activeTabData ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <p className="text-lg leading-relaxed text-gray-700 font-normal">
                {activeTabData?.description}
              </p>
            </div>
          </div>
        </section>

        {/* Why Brookwell */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-center text-foreground mb-16 tracking-wide">
              Why Brookwell?
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Side - Text Blocks */}
              <div className="space-y-8">
                <div className="animate-fade-in-up">
                  <h3 className="text-xl font-montserrat font-bold text-foreground mb-2">Proven Expertise</h3>
                  <p className="text-muted-foreground leading-relaxed font-normal">
                    Over seven years of experience in steel fabrication, galvanisation, and crash barrier manufacturing ensures reliable quality.
                  </p>
                </div>

                <div className="animate-fade-in-up">
                  <h3 className="text-xl font-montserrat font-bold text-foreground mb-2">Premium Materials</h3>
                  <p className="text-muted-foreground leading-relaxed font-normal">
                    We source top-grade raw materials through trusted vendors, guaranteeing durability, strength, and consistent product performance.
                  </p>
                </div>

                <div className="animate-fade-in-up">
                  <h3 className="text-xl font-montserrat font-bold text-foreground mb-2">24/7 Logistics</h3>
                  <p className="text-muted-foreground leading-relaxed font-normal">
                    Dedicated logistics ensure rapid delivery across India, supported by ready stock of 50 km of crash barriers.
                  </p>
                </div>

                <div className="animate-fade-in-up">
                  <h3 className="text-xl font-montserrat font-bold text-foreground mb-2">Global Standards</h3>
                  <p className="text-muted-foreground leading-relaxed font-normal">
                    All materials and products comply with Indian, American, and European crash barrier standards for maximum safety.
                  </p>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">Have any Question?</h3>
                <p className="text-muted-foreground mb-8 font-normal">
                  The point of using Lorem Ipsum is that it has more-or-less packages normal point of using.
                </p>

                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Your Inquiry"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder="Write Here..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground py-3 rounded-md font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-center text-foreground mb-16 tracking-wide">
              FAQ
            </h2>

            <div className="max-w-4xl mx-auto">
              <Accordion
                type="single"
                collapsible
                className="w-full space-y-4"
                value={activeFaq}
                onValueChange={(value) => setActiveFaq(value)}
              >
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border-b border-gray-200">
                    <AccordionTrigger className="flex items-center justify-between py-6 text-left hover:no-underline">
                      <div className="flex items-center gap-4">
                        <span
                          className={`faq-number text-lg font-semibold transition-colors duration-300 ${
                            activeFaq === faq.id ? "text-[#ff6600]" : "text-gray-600"
                          }`}
                        >
                          {faq.id}.
                        </span>
                        <span
                          className={`faq-question text-lg font-medium transition-colors duration-300 ${
                            activeFaq === faq.id ? "text-[#ff6600]" : "text-gray-800"
                          }`}
                        >
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pt-0">
                      <p className="text-gray-600 leading-relaxed pl-12 font-normal">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WBeamPage;

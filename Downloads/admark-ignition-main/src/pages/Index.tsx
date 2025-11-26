import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AdditionalServices } from "@/components/AdditionalServices";
import { Industries } from "@/components/Industries";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { MeetThePeople } from "@/components/MeetThePeople";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <AdditionalServices />
      <Industries />
      <WhyChooseUs />
      <MeetThePeople />
      <About />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

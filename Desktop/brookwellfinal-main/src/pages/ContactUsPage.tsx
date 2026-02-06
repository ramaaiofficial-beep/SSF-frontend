import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import contactHeroImage from "@/assets/contact-hero.png";
import contactUsImage from "@/assets/brookwell-industries-contact-us.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactUsPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setResult("Sending...");

    const formDataToSend = new FormData(e.target as HTMLFormElement);
    formDataToSend.append("access_key", "277bdd8c-91a9-493f-8606-b940c12946ab");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setResult("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${contactUsImage})` }}
          >
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-end justify-start pb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-primary-foreground tracking-wider">
              Contact Us
            </h1>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-8 bg-background font-montserrat">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 tracking-wide">
              Get in touch with our team
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-card p-8 rounded-lg shadow-lg text-center border border-border hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 tracking-wide">Our Location</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                  Plot No 231/A, 1st Floor MLA Colony,<br />
                  Road No 12, Banjara Hills, Hyderabad,<br />
                  Telangana, India – 500034
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-lg text-center border border-border hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 tracking-wide">Opening Hour</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                  Mon - Fri 10.00 - 18.00<br />
                  Sat & Sun - Closed
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-lg text-center border border-border hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 tracking-wide">Chat to Support</h3>
                <a
                  href="mailto:info@brookwellindustries.in"
                  className="text-sm text-accent hover:text-accent/80 transition-colors font-normal"
                >
                  info@brookwellindustries.in
                </a>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-lg text-center border border-border hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 tracking-wide">Call Us</h3>
                <a
                  href="tel:+919701346348"
                  className="text-sm text-accent hover:text-accent/80 transition-colors font-normal"
                >
                  +91 97013 46348
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container mx-auto px-4">
          <div className="h-1 bg-accent/20 max-w-6xl mx-auto" />
        </div>

        {/* Form Section */}
        <section className="py-8 bg-background font-montserrat">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 tracking-wide">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
              <div className="grid sm:grid-cols-3 gap-6 mb-6">
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="bg-card border-border font-normal"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card border-border font-normal"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-card border-border font-normal"
                  required
                />
              </div>

              <Textarea
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-card border-border mb-6 min-h-[150px] font-normal"
                rows={6}
              />

              <div className="text-center">
                <Button type="submit" variant="cta" size="lg" className="px-12 font-normal">
                  Send Message
                </Button>
                {result && <p className="mt-4 text-sm text-center">{result}</p>}
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUsPage;

import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { useState } from "react";

const ContactUs = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  return (
    <div className="min-h-screen bg-background pt-[73px] sm:pt-[81px]">
      <NavBar />
      
      {/* Hero Section */}
      <section className="py-4 md:py-10 bg-secondary">
        <div className="container mx-auto px-3 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-xl md:text-5xl font-bold mb-2 md:mb-3 text-foreground leading-tight">
              Contact Us
            </h1>
            <p className="text-sm md:text-xl text-muted-foreground mt-1 md:mt-2 text-center leading-tight">
              Reach Out to Us for Inquiries and Support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="pt-4 md:pt-6 pb-4 md:pb-8">
        <div className="container mx-auto px-3 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-4 md:gap-8">
              {/* Contact Information */}
              <div className="space-y-3 md:space-y-4">
                <Card className="shadow-lg hover:shadow-xl hover:scale-105 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Physical Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 md:space-y-3">
                    <p className="text-muted-foreground text-sm md:text-base leading-tight">
                      Tonachagondanahalli Village,<br />
                      Madhugiri Taluk, Karnataka
                    </p>
                    <div className="w-full h-40 md:h-64 rounded-lg overflow-hidden border border-border bg-muted relative">
                      <iframe
                        src="https://www.google.com/maps?q=Shree+Samrajyalakshmi+Foundation,+Tonachagondanahalli+Village,+Madhugiri+Taluk,+Karnataka&hl=en&z=15&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Shree Samrajyalakshmi Foundation Location"
                        className="absolute inset-0 w-full h-full"
                        onLoad={() => setMapLoaded(true)}
                      />
                      {/* Loading state - hidden when map loads */}
                      {!mapLoaded && (
                        <div className="absolute inset-0 bg-muted flex items-center justify-center pointer-events-none transition-opacity duration-300">
                          <div className="text-center">
                            <MapPin className="h-6 w-6 mx-auto mb-2 text-muted-foreground animate-pulse" />
                            <p className="text-xs text-muted-foreground">Loading map...</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <a
                      href="https://www.google.com/maps/dir//Shree+Samrajyalakshmi+Foundation+Thonachagondana+Hally+Kurubarahalli,+Karnataka+572112/@13.6828571,77.1160311,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3bb04d44549a9895:0x9933a502c901af2b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Get Directions
                    </a>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl hover:scale-105 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Working Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1.5 md:space-y-2 text-muted-foreground text-sm md:text-base leading-tight">
                      <p>Mon to Fri - 10:00AM to 05:00PM</p>
                      <p>Sat & Sun - 10:00AM to 02:00PM</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl hover:scale-105 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      Phone Number
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1.5 md:space-y-2">
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <Phone className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground flex-shrink-0" />
                        <a href="tel:+918179178919" className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base leading-tight">
                          Mobile: +91 817 917 8919
                        </a>
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <Phone className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground flex-shrink-0" />
                        <a href="https://wa.me/918179178919" className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base leading-tight">
                          WhatsApp: +91 817 917 8919
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle>Send us Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form 
                      onSubmit={async (e) => {
                        e.preventDefault();
                        const form = e.currentTarget;
                        const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                        const originalText = submitBtn.textContent;
                        
                        submitBtn.textContent = "Sending...";
                        submitBtn.disabled = true;
                        
                        try {
                          const formData = new FormData(form);
                          formData.append("access_key", "44b554b1-1162-49d2-b6fc-4d84dbf53e1b");
                          
                          const response = await fetch("https://api.web3forms.com/submit", {
                            method: "POST",
                            body: formData
                          });
                          
                          const data = await response.json();
                          
                          if (response.ok && data.success) {
                            alert("Success! Your message has been sent. We'll get back to you soon.");
                            form.reset();
                          } else {
                            alert("Error: " + (data.message || "Something went wrong. Please try again."));
                          }
                        } catch (error) {
                          alert("Something went wrong. Please try again.");
                        } finally {
                          submitBtn.textContent = originalText || "Send Message";
                          submitBtn.disabled = false;
                        }
                      }}
                      className="space-y-3 md:space-y-4"
                    >
                      <div className="space-y-1 md:space-y-2">
                        <Label htmlFor="name" className="text-sm md:text-base leading-tight">Full Name *</Label>
                        <Input id="name" name="name" placeholder="Enter your full name" required className="text-sm md:text-base" />
                      </div>
                      
                      <div className="space-y-1 md:space-y-2">
                        <Label htmlFor="email" className="text-sm md:text-base leading-tight">Email Address *</Label>
                        <Input id="email" name="email" type="email" placeholder="Enter your email address" required className="text-sm md:text-base" />
                      </div>
                      
                      <div className="space-y-1 md:space-y-2">
                        <Label htmlFor="subject" className="text-sm md:text-base leading-tight">Subject *</Label>
                        <Input id="subject" name="subject" placeholder="Enter subject" required className="text-sm md:text-base" />
                      </div>
                      
                      <div className="space-y-1 md:space-y-2">
                        <Label htmlFor="message" className="text-sm md:text-base leading-tight">Message *</Label>
                        <Textarea 
                          id="message" 
                          name="message"
                          placeholder="Enter your message"
                          rows={6}
                          required
                          className="text-sm md:text-base"
                        />
                      </div>
                      
                      <Button type="submit" className="w-full hover:scale-105 hover:shadow-lg transition-all duration-300">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;


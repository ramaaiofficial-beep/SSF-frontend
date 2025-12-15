import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background pt-[73px] sm:pt-[81px]">
      <NavBar />
      
      {/* Hero Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-foreground">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-1 sm:mt-2 text-center">
              Reach Out to Us for Inquiries and Support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="pt-4 sm:pt-6 pb-6 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Contact Information */}
              <div className="space-y-4">
                <Card className="shadow-lg hover:shadow-xl hover:scale-105 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Physical Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">
                      Tonachagondanahalli Village,<br />
                      Madhugiri Taluk, Karnataka
                    </p>
                    <div className="w-full h-48 sm:h-64 rounded-lg overflow-hidden border border-border">
                      <iframe
                        src="https://www.google.com/maps?q=Shree+Samrajyalakshmi+Foundation+Thonachagondana+Hally+Kurubarahalli+Karnataka+572112&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Shree Samrajyalakshmi Foundation Location"
                      />
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
                    <div className="space-y-2 text-muted-foreground">
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
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <a href="tel:+918179178919" className="text-muted-foreground hover:text-primary transition-colors">
                          Mobile: +91 817 917 8919
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <a href="https://wa.me/918179178919" className="text-muted-foreground hover:text-primary transition-colors">
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
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" placeholder="Enter your full name" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" name="email" type="email" placeholder="Enter your email address" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input id="subject" name="subject" placeholder="Enter subject" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message" 
                          name="message"
                          placeholder="Enter your message"
                          rows={6}
                          required
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


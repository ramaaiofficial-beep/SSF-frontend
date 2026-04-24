import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero section.png";
import gurujuPhoto from "@/assets/guruju photo.png";
import sewingMachineDonation from "@/assets/media highlights/Sewing Machine Donation​.png";
import medicalCheckupCamp from "@/assets/media highlights/Free Medical And Cancer Checkup Camp.jpeg";
import sweetsDistribution from "@/assets/media highlights/Sweets Distribution to Students.png";
import sriLalithaYagnam from "@/assets/media highlights/Sri Lalitha Sahasranama Parayana Maha Yagnam.jpg";
import pressCoverage1 from "@/assets/Press Coverage/WhatsApp-Image-2025-09-23-at-6.01.32-PM.jpeg";
import pressCoverage2 from "@/assets/Press Coverage/WhatsApp-Image-2025-09-23-at-6.01.33-PM-1.jpeg";
import pressCoverage3 from "@/assets/Press Coverage/WhatsApp-Image-2025-09-23-at-6.01.33-PM-2.jpeg";
import pressCoverage4 from "@/assets/Press Coverage/WhatsApp-Image-2025-09-23-at-6.01.33-PM.jpeg";
import videoClip from "@/assets/Video Clips/free-medicial-camp.mp4";
import gallery1 from "@/assets/gallery/Untitled-design-2.png";
import gallery2 from "@/assets/gallery/WhatsApp-Image-2025-08-15-at-9.24.28-PM-1-scaled.jpeg";
import gallery3 from "@/assets/gallery/WhatsApp-Image-2025-08-15-at-9.24.28-PM-scaled.jpeg";
import gallery4 from "@/assets/gallery/WhatsApp-Image-2025-08-15-at-9.24.29-PM-scaled.jpeg";
import { useState, useRef, useEffect } from "react";
import { Heart, Award, Clock, ArrowRight, Newspaper, PlayCircle, Image as ImageIcon, Mail, Phone, MapPin, X, Volume2, VolumeX, Pause, Play, Maximize, Minimize } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useDonationModal } from "@/contexts/DonationModalContext";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string; date: string } | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { openModal } = useDonationModal();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFullscreen = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );
      setIsFullscreen(isFullscreen);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          const offset = 100; // Account for fixed navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 300);
    }
  }, []);

  const pressCoverage = [
    { image: pressCoverage1, title: "The Hindu - Healthcare Initiative", date: "3 days ago" },
    { image: pressCoverage2, title: "Times of India - Community Impact", date: "1 week ago" },
    { image: pressCoverage3, title: "Press Coverage", date: "2 weeks ago" },
    { image: pressCoverage4, title: "Media Report", date: "2 weeks ago" },
  ];

  return (
    <div className="min-h-screen bg-background pt-[73px] sm:pt-[81px]">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Hero image controls the height; scales with no stretching */}
        <div className="relative w-full">
          <img
            src={heroImage}
            alt="Shree Samrajya Lakshmi Multi-Super Specialty Hospital"
            className="block w-full h-auto object-contain"
          />

          {/* Very light tint overlay for a subtle premium feel */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Hero content */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="w-full max-w-4xl px-3 sm:px-4 md:px-6 pb-6 sm:pb-8 md:pb-10 lg:pb-14 xl:pb-16 mx-auto">
              {/* Hero text container perfectly centered */}
              <div className="text-center text-primary-foreground drop-shadow-md flex flex-col items-center justify-center w-full">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center w-full">
                  <span className="block text-center sm:whitespace-nowrap">
                    1000 bedded Divine Hospital for the People,
                  </span>
                  <span className="block text-center sm:whitespace-nowrap mt-1">
                    Built by the People.
                  </span>
                </h1>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-primary-foreground/90 leading-relaxed text-center px-2">
                  Join us in creating the Shree Samrajya Lakshmi Multi-Super Specialty Hospital a world-class healthcare centre dedicated to free treatment for all. Your contribution today lays the foundation for a healthier tomorrow.
                </p>
                <div className="mt-5 sm:mt-6 md:mt-7 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full px-2">
                  <button
                    onClick={openModal}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-primary-foreground shadow-lg transition-all duration-200 hover:bg-primary/90 hover:shadow-xl animate-breathe w-full sm:w-auto"
                  >
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                    Donate Now
                  </button>
                  <a
                    href="/hospital/overview"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-background/90 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg w-full sm:w-auto"
                  >
                    Explore Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Foundation Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Guruji Photo with Creative Shadow Card */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Decorative shadow layers for depth */}
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-2xl blur-xl"></div>
                <div className="absolute -bottom-2 -right-2 w-full h-full bg-primary/10 rounded-2xl blur-md"></div>
                
                {/* Main photo card */}
                <Card className="relative overflow-hidden shadow-2xl border-0">
                  <div className="aspect-[4/5] bg-muted overflow-hidden">
                    <img 
                      src={gurujuPhoto} 
                      alt="Pujya Shree Krupanidhi Guruji" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/30 to-transparent rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/20 to-transparent rounded-tr-full"></div>
                </Card>
              </div>
            </div>
            
            {/* Foundation Content */}
            <div className="flex flex-col justify-center space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3">
                About the Foundation
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground text-justify">
                The Shree Samrajya Lakshmi Foundation, founded by Pujya Shree Krupanidhi Guruji, is dedicated to spiritual, social, and cultural transformation. With the blessings of Goddess Samrajya Lakshmi, the foundation actively promotes community welfare through temple preservation, education, healthcare, and environmental initiatives.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground text-justify">
                With a mission to preserve the divine legacy for future generations, the foundation bridges spirituality with community service. It inspires holistic growth by empowering individuals, nurturing devotion, and promoting harmony. Join us in creating a better, spiritually enriched future.
              </p>
              
              {/* Vision & Mission */}
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 pt-2 mt-2">
                <Card className="shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Award className="h-5 w-5 text-primary" />
                      Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">
                      To create a compassionate society empowered by free healthcare, education, and service.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Heart className="h-5 w-5 text-primary" />
                      Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground">
                      Deliver impactful spiritual, social, medical, and charitable services for community upliftment.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Hospital Matters */}
      <section id="why-hospital" className="py-6 sm:py-8 md:py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Content spanning both columns, starting from photo card's left edge */}
            <div className="md:col-span-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
                Why This Hospital Matters
              </h2>
              <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-muted-foreground space-y-3 sm:space-y-4 text-justify">
                <p>
                  A 1000-bedded multi-super specialty hospital in Madhugiri has the power to completely transform healthcare access in the entire region. Today, families are forced to travel long distances—often to Bengaluru or Tumakuru—for emergency care, critical surgeries, or specialised treatments, losing precious time and money in the process.
                </p>
                <p>
                  Rural patients frequently delay treatment because advanced facilities are simply unavailable nearby, leading to avoidable complications and higher mortality rates. Many underprivileged households face the burden of huge medical bills, pushing them into debt or leaving serious conditions untreated.
                </p>
                <p className="font-semibold text-foreground">
                  By bringing world-class, free healthcare directly to Madhugiri, this hospital eliminates these barriers, provides immediate life-saving care, and ensures that even the poorest families receive timely and dignified treatment. This single institution will uplift community health, reduce preventable deaths, and become a vital lifeline for lakhs of people across the region.
                </p>
              </div>
              <div className="mt-6 text-center">
                <Button asChild size="lg">
                  <a href="/hospital/overview">
                    View Hospital Project Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Progress & Transparency */}
      <section id="progress" className="py-6 sm:py-8 md:py-10 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
              Live Progress & Transparency
            </h2>
            
            <Card className="mb-4 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-center mb-3">
                  <CardTitle>Fundraising Progress</CardTitle>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-primary">₹0</span>
                    <Button size="sm" className="hover:scale-105 hover:shadow-lg transition-all duration-300" onClick={openModal}>
                      <Heart className="mr-2 h-3 w-3" />
                      Donate Now
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Raised out of ₹195 Crore</span>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>300 days left to reach our goal</span>
                    </div>
                  </div>
                  <Progress value={0} className="h-3" />
                </div>
              </CardHeader>
            </Card>

            {/* Recent Donor Feed */}
            <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="text-center">Recent Donations</CardTitle>
                <CardDescription className="text-center">Thank you to our generous supporters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  {[
                    { name: "Anonymous", amount: "₹50,000", time: "2 hours ago" },
                    { name: "Rajesh K.", amount: "₹25,000", time: "5 hours ago" },
                    { name: "Priya M.", amount: "₹10,000", time: "1 day ago" },
                    { name: "Community Trust", amount: "₹1,00,000", time: "2 days ago" },
                  ].map((donor, idx) => (
                    <Card key={idx} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-3 sm:p-4">
                        <div className="space-y-1 sm:space-y-2">
                          <p className="font-semibold text-xs sm:text-sm">{donor.name}</p>
                          <p className="text-xs text-muted-foreground">{donor.time}</p>
                          <p className="font-bold text-primary text-xs sm:text-sm">{donor.amount}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events & Volunteering */}
      <section id="events" className="py-6 sm:py-8 md:py-10 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">Events & Volunteering</h2>
            
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
              {/* Recent Programs */}
              <div className="flex flex-col h-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Recent Programs</h3>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <Card className="overflow-hidden hover:shadow-xl hover:scale-105 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img 
                        src={sewingMachineDonation} 
                        alt="Sewing Machine Donation"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-4">
                      <p className="font-semibold mb-1">Sewing Machine Donation</p>
                      <p className="text-sm text-muted-foreground">Date: 23 Sep 2025</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden hover:shadow-xl hover:scale-105 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img 
                        src={medicalCheckupCamp} 
                        alt="Free Medical And Cancer Checkup Camp"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-4">
                      <p className="font-semibold mb-1">Shree Samrajyalakshmi Foundation Bangalore</p>
                      <p className="text-sm text-muted-foreground mb-1">Free Medical And Cancer Checkup Camp</p>
                      <p className="text-sm text-muted-foreground">Date: 15 Aug 2025</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden hover:shadow-xl hover:scale-105 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img 
                        src={sweetsDistribution} 
                        alt="Sweets Distribution to Students"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-4">
                      <p className="font-semibold mb-1">Sweets Distribution to Students</p>
                      <p className="text-sm text-muted-foreground mb-1">Madhugiri</p>
                      <p className="text-sm text-muted-foreground">Date: 15 Aug 2025</p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden hover:shadow-xl hover:scale-105 hover:border-primary/50 transition-all duration-300 cursor-pointer">
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img 
                        src={sriLalithaYagnam} 
                        alt="Sri Lalitha Sahasranama Parayana Maha Yagnam"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-4">
                      <p className="font-semibold mb-1">Sri Lalitha Sahasranama Parayana Maha Yagnam</p>
                      <p className="text-sm text-muted-foreground">Date: 06 Feb 2025</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Volunteer Form */}
              <div id="volunteer" className="flex flex-col h-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Volunteer with Us</h3>
                <Card className="flex-1 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle>Join Our Mission</CardTitle>
                    <CardDescription>
                      Help us make a difference in the community
                    </CardDescription>
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
                          formData.append("subject", "Volunteer Application Form");
                          
                          const response = await fetch("https://api.web3forms.com/submit", {
                            method: "POST",
                            body: formData
                          });
                          
                          const data = await response.json();
                          
                          if (response.ok && data.success) {
                            alert("Success! Your volunteer application has been submitted. We'll get back to you soon.");
                            form.reset();
                          } else {
                            alert("Error: " + (data.message || "Something went wrong. Please try again."));
                          }
                        } catch (error) {
                          alert("Something went wrong. Please try again.");
                        } finally {
                          submitBtn.textContent = originalText || "Submit Application";
                          submitBtn.disabled = false;
                        }
                      }}
                      className="space-y-3"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="volunteer-name">Name *</Label>
                        <Input id="volunteer-name" name="name" placeholder="Enter your full name" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="volunteer-phone">Phone Number *</Label>
                        <Input id="volunteer-phone" name="phone" type="tel" placeholder="Enter your phone number" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="volunteer-place">Place *</Label>
                        <Input id="volunteer-place" name="place" placeholder="Enter your city/town" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="volunteer-education">Education</Label>
                        <Input id="volunteer-education" name="education" placeholder="Enter your educational qualification" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="volunteer-skills">Skills</Label>
                        <Textarea 
                          id="volunteer-skills" 
                          name="skills"
                          placeholder="List your skills and areas of expertise (e.g., Medical, Teaching, Administration, etc.)"
                          rows={1}
                          className="min-h-[40px]"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="volunteer-message">Additional Information</Label>
                        <Textarea 
                          id="volunteer-message" 
                          name="message"
                          placeholder="Tell us why you'd like to volunteer and how you can contribute"
                          rows={1}
                          className="min-h-[40px]"
                        />
                      </div>
                      
                      <Button type="submit" className="w-full hover:scale-105 hover:shadow-lg transition-all duration-300">
                        Submit Application
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories That Inspire */}
      <section className="py-6 sm:py-8 md:py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">Stories That Inspire</h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-1 text-center">
              Hear from our devotees and supporters
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mt-4 sm:mt-6">
            {[
              {
                name: "Ramesh Kumar",
                role: "Community Member",
                quote: "This hospital will be a blessing for our region. I've seen families struggle to access quality healthcare, and this initiative gives us hope.",
              },
              {
                name: "Dr. Anjali Sharma",
                role: "Medical Professional",
                quote: "As a doctor, I understand the critical need for accessible healthcare. This hospital will save countless lives in rural areas.",
              },
              {
                name: "Lakshmi Devi",
                role: "Devotee",
                quote: "Guruji's vision of free healthcare for all is truly divine. I'm honored to be part of this noble cause.",
              },
              {
                name: "Suresh Reddy",
                role: "Local Business Owner",
                quote: "Having a world-class hospital in our area will transform lives. I'm proud to support this mission that will benefit generations to come.",
              },
            ].map((testimonial, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Highlights */}
      <section className="py-6 sm:py-8 md:py-10 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">Media Highlights</h2>
            <p className="text-base sm:text-lg text-muted-foreground text-center">
              Recent press mentions and coverage
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mt-4 sm:mt-6">
            {/* Press Coverage */}
            <Card className="overflow-hidden md:col-span-2">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Newspaper className="h-5 w-5 text-primary" />
                  <CardTitle>Gallery</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { image: gallery1, title: "The Hindu - Healthcare Initiative", date: "3 days ago" },
                    { image: gallery2, title: "Times of India - Community Impact", date: "1 week ago" },
                    { image: gallery3, title: "Press Coverage", date: "2 weeks ago" },
                    { image: gallery4, title: "Media Report", date: "2 weeks ago" },
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="group cursor-pointer"
                      onClick={() => setSelectedImage(item)}
                    >
                      <div className="relative overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl bg-background">
                        <div className="aspect-[4/3] bg-muted overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-primary rounded-full p-2 shadow-lg">
                            <ImageIcon className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* View More Media Button */}
                <div className="text-center mt-4">
                  <Button variant="outline" asChild className="hover:scale-105 hover:shadow-lg hover:bg-[#14B8A6] hover:text-white hover:border-[#14B8A6] transition-all duration-300">
                    <a href="/media/photos">
                      View More Media
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Gallery */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <ImageIcon className="h-5 w-5 text-primary" />
                  <CardTitle>Press Coverage</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    pressCoverage1,
                    pressCoverage2,
                    pressCoverage3,
                    pressCoverage4,
                  ].map((image, idx) => (
                    <div 
                      key={idx} 
                      className="relative aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer group"
                      onClick={() => setSelectedGalleryImage(image)}
                    >
                      <img 
                        src={image} 
                        alt={`Gallery ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-primary/90 rounded-full p-2">
                            <ImageIcon className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Video Section */}
                <div className="mt-4 max-w-sm mx-auto">
                  <div className="relative aspect-video bg-muted rounded-lg overflow-hidden group border-2 border-border shadow-lg">
                    <video
                      ref={videoRef}
                      src={videoClip}
                      loop
                      muted={isMuted}
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                      onTimeUpdate={() => {
                        if (videoRef.current) {
                          setCurrentTime(videoRef.current.currentTime);
                        }
                      }}
                      onLoadedMetadata={() => {
                        if (videoRef.current) {
                          setDuration(videoRef.current.duration);
                        }
                      }}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onVolumeChange={() => {
                        if (videoRef.current) {
                          setIsMuted(videoRef.current.muted);
                        }
                      }}
                    />
                    

                    {/* Video Controls Bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-3 z-20">
                      {/* Progress Bar */}
                      <div className="mb-2">
                        <div 
                          className="h-1 bg-white/30 rounded-full cursor-pointer"
                          onClick={(e) => {
                            if (videoRef.current && duration) {
                              const rect = e.currentTarget.getBoundingClientRect();
                              const percent = (e.clientX - rect.left) / rect.width;
                              videoRef.current.currentTime = percent * duration;
                            }
                          }}
                        >
                          <div 
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                          />
                        </div>
                      </div>
                      
                      {/* Control Buttons */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              if (videoRef.current) {
                                if (isPlaying) {
                                  videoRef.current.pause();
                                } else {
                                  videoRef.current.play();
                                }
                                setIsPlaying(!isPlaying);
                              }
                            }}
                            className="bg-black/60 hover:bg-black/80 rounded-full p-1.5 transition-all backdrop-blur-sm"
                            aria-label={isPlaying ? "Pause" : "Play"}
                          >
                            {isPlaying ? (
                              <Pause className="h-4 w-4 text-white" />
                            ) : (
                              <Play className="h-4 w-4 text-white" />
                            )}
                          </button>
                          <button
                            onClick={() => {
                              if (videoRef.current) {
                                videoRef.current.muted = !isMuted;
                                setIsMuted(!isMuted);
                              }
                            }}
                            className="bg-black/60 hover:bg-black/80 rounded-full p-1.5 transition-all backdrop-blur-sm"
                            aria-label={isMuted ? "Unmute" : "Mute"}
                          >
                            {isMuted ? (
                              <VolumeX className="h-4 w-4 text-white" />
                            ) : (
                              <Volume2 className="h-4 w-4 text-white" />
                            )}
                          </button>
                          <span className="text-xs text-white/90">
                            {Math.floor(currentTime / 60)}:{(Math.floor(currentTime % 60)).toString().padStart(2, '0')} / {Math.floor(duration / 60)}:{(Math.floor(duration % 60)).toString().padStart(2, '0')}
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            if (videoRef.current) {
                              if (!isFullscreen) {
                                if (videoRef.current.requestFullscreen) {
                                  videoRef.current.requestFullscreen();
                                } else if (videoRef.current.webkitRequestFullscreen) {
                                  videoRef.current.webkitRequestFullscreen();
                                } else if (videoRef.current.mozRequestFullScreen) {
                                  videoRef.current.mozRequestFullScreen();
                                } else if (videoRef.current.msRequestFullscreen) {
                                  videoRef.current.msRequestFullscreen();
                                }
                                setIsFullscreen(true);
                              } else {
                                if (document.exitFullscreen) {
                                  document.exitFullscreen();
                                } else if (document.webkitExitFullscreen) {
                                  document.webkitExitFullscreen();
                                } else if (document.mozCancelFullScreen) {
                                  document.mozCancelFullScreen();
                                } else if (document.msExitFullscreen) {
                                  document.msExitFullscreen();
                                }
                                setIsFullscreen(false);
                              }
                            }
                          }}
                          className="bg-black/60 hover:bg-black/80 rounded-full p-1.5 transition-all backdrop-blur-sm"
                          aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                        >
                          {isFullscreen ? (
                            <Minimize className="h-4 w-4 text-white" />
                          ) : (
                            <Maximize className="h-4 w-4 text-white" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* View More Media Button */}
                <div className="text-center mt-4">
                  <Button variant="outline" asChild className="hover:scale-105 hover:shadow-lg hover:bg-[#14B8A6] hover:text-white hover:border-[#14B8A6] transition-all duration-300">
                    <a href="/media/press">
                      View More Media
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Together, We Can Build Hope
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 text-primary-foreground/90 px-2">
              Your contribution brings free medical care closer to reality
            </p>
            <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 animate-breathe" onClick={openModal}>
              <Heart className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              Donate Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Press Coverage Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative rounded-lg overflow-hidden border-2 border-white/20 shadow-2xl">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                <p className="font-bold text-white text-lg mb-2">{selectedImage.title}</p>
                <p className="text-sm text-white/80">{selectedImage.date}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Image Modal */}
      {selectedGalleryImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedGalleryImage(null)}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative rounded-lg overflow-hidden border-2 border-white/20 shadow-2xl">
              <img 
                src={selectedGalleryImage} 
                alt="Gallery"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

interface ImpactTileProps {
  amount: string;
  title: string;
  description: string;
}

const ImpactTile = ({ amount, title, description }: ImpactTileProps) => {
  return (
    <Card className="text-center hover:shadow-xl hover:scale-105 hover:border-primary/50 transition-all duration-300 cursor-pointer">
      <CardHeader>
        <div className="text-3xl font-bold text-primary mb-2">{amount}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
      <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Index;

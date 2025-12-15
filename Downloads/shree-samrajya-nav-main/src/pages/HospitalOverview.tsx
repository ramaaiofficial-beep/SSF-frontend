import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Heart } from "lucide-react";

const HospitalOverview = () => {
  return (
    <div className="min-h-screen bg-background pt-[73px] sm:pt-[81px]">
      <NavBar />
      
      {/* Hero Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-foreground">
              Hospital Overview
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-1 sm:mt-2 text-center">
              Transforming Healthcare Access for Underserved Communities
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-4 sm:pt-6 pb-6 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto prose prose-sm sm:prose-base md:prose-lg max-w-none">
            <div className="space-y-3 sm:space-y-4 text-muted-foreground">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                The Shree Samrajya Lakshmi Multi–Super Specialty Hospital is a transformative healthcare initiative dedicated to delivering world-class medical care completely free of cost to the people of Madhugiri and surrounding regions. Designed as a 1000-bedded, multi-disciplinary institution, the hospital will serve as a life-changing healthcare hub for lakhs of families who currently struggle with limited access to advanced treatment, critical care, and emergency services.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                This project is envisioned not only as a medical facility but as a comprehensive ecosystem of healthcare, education, and innovation. With specialized departments, cutting-edge technology, integrated diagnostics, trauma care, surgical excellence, and community health programs, the hospital will bring a new era of accessible, ethical, and high-quality treatment to underserved communities.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Situated on 50 acres of dedicated land, this institution will also include a Medical College, Nursing School, Allied Health Sciences Institute, and a Research & Innovation Center. Together, they will build a continuous pipeline of skilled professionals and drive breakthroughs in rural healthcare delivery. The hospital stands as a commitment to dignity, equality, and the belief that every life deserves the best possible medical care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="pt-4 sm:pt-6 pb-6 sm:pb-8 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <Card className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
                    <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground text-justify">
                    To build India's most accessible, compassionate, and advanced healthcare ecosystem where world-class treatment, education, and medical innovation are available to every individual—completely free of cost.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl">
                    <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground text-justify">
                    To deliver integrated healthcare, train future medical professionals, and advance research-driven solutions that uplift underserved communities and create a healthier, empowered society for generations to come.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HospitalOverview;


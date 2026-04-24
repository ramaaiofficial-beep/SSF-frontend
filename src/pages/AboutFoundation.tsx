import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Heart } from "lucide-react";

const AboutFoundation = () => {
  return (
    <div className="min-h-screen bg-background pt-[73px] sm:pt-[81px]">
      <NavBar />
      
      {/* Hero Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-foreground">
              About Foundation
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-1 sm:mt-2 text-center">
              Dedicated to Uplifting Society Through Compassionate Service
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
                The Shree Samrajya Lakshmi Foundation is a charitable organization dedicated to uplifting society through spiritual, social, medical, and humanitarian initiatives. Rooted in compassion and guided by service, the foundation works to create sustainable impact in communities that lack access to essential resources and opportunities. Our most ambitious mission is the establishment of the Shree Samrajya Lakshmi Multi–Super Specialty Hospital—a 1000-bedded, world-class healthcare institution that will provide advanced treatment completely free of cost.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                We believe that quality healthcare is a fundamental right, not a privilege. For thousands of families in and around Madhugiri, access to emergency care, specialized treatments, and preventive health services remains a major challenge. Through this hospital, the foundation aims to eliminate barriers, bring medical excellence closer to underserved communities, and create a healthier future for generations to come.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Beyond healthcare, the foundation also supports education, community development, cultural preservation, and spiritual enrichment. Every initiative is driven by transparency, accountability, and a deep commitment to public welfare. With the support of donors, volunteers, and well-wishers, we strive to build institutions and programs that strengthen lives, empower communities, and reflect the true spirit of selfless service.
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
                    To create a compassionate society empowered by free healthcare, education, and service.
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
                    Deliver impactful spiritual, social, medical, and charitable services for community upliftment.
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

export default AboutFoundation;


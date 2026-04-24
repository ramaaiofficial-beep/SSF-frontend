import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import gurujuPhoto from "@/assets/Our Team/guruju photo.png";
import drSaiSrinivas from "@/assets/Our Team/Dr. Sai Srinivas.png";
import prathibaNarayanan from "@/assets/Our Team/Prathiba Narayanan.png";

const BoardMembers = () => {
  const boardMembers = [
    {
      name: "Pujya Shree Krupanidhi Guruji",
      role: "Founder (India)",
      image: gurujuPhoto,
    },
    {
      name: "Dr. Sai Srinivas",
      role: "Founder Member (India)",
      image: drSaiSrinivas,
    },
    {
      name: "Prathiba Narayanan",
      role: "Member (India)",
      image: prathibaNarayanan,
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-[73px] sm:pt-[81px]">
      <NavBar />
      
      {/* Hero Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-foreground">
              Board Members & Leadership
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-1 sm:mt-2 text-center">
              Guided by Visionary Leaders Committed to Service
            </p>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="pt-4 sm:pt-6 pb-6 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {boardMembers.map((member, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl hover:scale-105 transition-all duration-300 bg-card cursor-pointer"
                >
                  <div className="aspect-[3/4] bg-muted overflow-hidden p-2">
                    <div className="w-full h-full border-2 border-border rounded-sm overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <CardContent className="p-4 text-center bg-background">
                    <h3 className="text-base font-semibold mb-1 text-foreground">{member.name}</h3>
                    <p className="text-xs text-muted-foreground text-center">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BoardMembers;


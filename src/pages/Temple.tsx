import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Temple = () => {
  return (
    <div className="min-h-screen bg-background pt-[73px] sm:pt-[81px]">
      <NavBar />
      
      {/* Hero Section */}
      <section className="py-6 sm:py-8 md:py-10 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-foreground">
              Shree Samrajyalakshmi Temple
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-4 sm:pt-6 pb-6 sm:pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto prose prose-sm sm:prose-base md:prose-lg max-w-none">
            <div className="space-y-3 sm:space-y-4 text-muted-foreground">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                A Divine Testament to Leadership, Prosperity, and Cultural Heritage
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                Nestled in the serene village of Tonachagondanahalli, Madhugiri taluk, Karnataka, the Shri Samrajya Lakshmi Temple stands as a sacred testament to devotion, cultural heritage, and divine leadership. Dedicated to Goddess Bhagavati Shri Samrajya Lakshmi, this ancient temple holds a profound historical and spiritual significance, revered by legendary kings and noble rulers for centuries.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-4 sm:mt-6 mb-2 sm:mb-3">The History of Shri Samrajya Lakshmi Temple</h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                The origins of this temple date back to an era when kings and palegaras (feudal lords) sought divine intervention for their kingdoms' success. Shri Samrajya Lakshmi, an exalted form of Goddess Lakshmi, has been venerated by generations of rulers as the Kula Devi (family deity) and Aradhya Daiva (worshipped divinity).
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Prominent historical figures, including the legendary Madakarinayaka, revered this temple as a sacred site of devotion. Kings and nobles regularly visited the temple to seek the Goddess's blessings for their governance, military conquests, and the prosperity of their realms. Under her divine guidance, these leaders thrived, ensuring justice, welfare, and peace for their subjects.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                However, as centuries passed, the temple fell into obscurity, its glory fading but never forgotten. The memories of its sacredness persisted in the hearts of local villagers and devotees, awaiting a resurgence that would honor its historical and spiritual significance.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-4 sm:mt-6 mb-2 sm:mb-3">A Sacred Revival Under Visionary Leadership</h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The Shri Samrajya Lakshmi Temple is now being restored to its former glory under the compassionate leadership of Sri Sri Dr. Krupanidhi Guru Ji, a revered spiritual guide known for his profound yogic practices and divine vision. Guided by mystical insights, Guru Ji has undertaken the noble mission of reviving the temple, supported by a dedicated team of devotees, local villagers, and spiritual leaders.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                The restoration began with a grand Bhoomi Pooja and the performance of the sacred Shri Maha Chandika Yaga on 31st January 2016, under the guidance of Sri Sri Sri Pandith Srinivasan Swami Ji. These sacred rituals marked the official commencement of the temple's rejuvenation, attracting hundreds of devotees from across the country.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                This initiative is not merely an act of cultural preservation but a profound spiritual movement aimed at benefiting humanity. The temple is being transformed into a holistic spiritual center that serves as a bridge between ancient traditions and contemporary needs.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-4 sm:mt-6 mb-2 sm:mb-3">The Temple as a Center for Holistic Growth</h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Under the auspices of the Shri Samrajya Lakshmi Maha Samsthanam, the temple is being transformed into a center for holistic spiritual and cultural growth. It aspires to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 text-sm sm:text-base md:text-lg">
                <li>Provide a space for spiritual enlightenment and meditation.</li>
                <li>Serve as a hub for educational and cultural programs through the Veda Pathasala.</li>
                <li>Promote community welfare initiatives, aligning with the principles of universal prosperity espoused by Shri Samrajya Lakshmi.</li>
              </ul>

              <div className="bg-secondary rounded-lg p-4 sm:p-6 mt-4 sm:mt-6 text-center">
                <Button asChild size="lg" className="hover:scale-105 hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
                  <a href="https://samrajyalakshmitemple.org/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Visit Temple Website
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Temple;


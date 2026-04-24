import { Mail, Phone, MapPin } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDonationModal } from "@/contexts/DonationModalContext";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { openModal } = useDonationModal();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const sectionId = hash.replace("#", "");
    
    if (location.pathname === "/") {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 100; // Account for fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      // Navigate to home page first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
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
  };

  const handleDonateClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        openModal();
      }, 100);
    } else {
      openModal();
    }
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-4 sm:mb-6">
          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="/" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/foundation/about" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/hospital/overview" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                  Hospital Project
                </a>
              </li>
              <li>
                <a 
                  href="/#why-hospital" 
                  onClick={(e) => handleAnchorClick(e, "#why-hospital")}
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Why This Hospital
                </a>
              </li>
              <li>
                <a 
                  href="/#progress" 
                  onClick={(e) => handleAnchorClick(e, "#progress")}
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Milestones & Progress
                </a>
              </li>
              <li>
                <a href="/media/press" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                  Press & News
                </a>
              </li>
              <li>
                <a href="/#events" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/contact/contact-us" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Get Involved</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="/#volunteer" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                  Become a Volunteer
                </a>
              </li>
              <li>
                <a 
                  href="/fundraising/donate" 
                  onClick={handleDonateClick}
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Become a Donor
                </a>
              </li>
              <li>
                <a href="/fundraising/corporate" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                  Corporate Partnerships
                </a>
              </li>
              <li>
                <a href="/fundraising/csr" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                  CSR Collaborations
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Legal & Compliance</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="/terms" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/refund" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="/csr-registration" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                  CSR Registration Details
                </a>
              </li>
              <li>
                <a href="/80g-12a" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                  80G / 12A Information
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Contact Information</h3>
            <div className="space-y-2 sm:space-y-3">
              <div>
                <p className="font-semibold text-sm sm:text-base text-foreground mb-1 sm:mb-2">Shree Samrajya Lakshmi Foundation</p>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <p className="text-xs sm:text-sm">
                    Tonachagondanahalli Village, Madhugiri Taluk,<br />
                    Madhugiri, Karnataka
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a 
                  href="mailto:info@shreesamrajyalakshmifoundation.org" 
                  className="text-xs sm:text-sm hover:text-primary transition-colors break-all"
                >
                  info@shreesamrajyalakshmifoundation.org
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a 
                  href="tel:+918179178919" 
                  className="text-xs sm:text-sm hover:text-primary transition-colors"
                >
                  +91 781 302 1766
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-border pt-4 sm:pt-6">
          <div className="text-center text-muted-foreground">
            <p className="text-xs sm:text-sm text-center">© 2025 Shree Samrajya Lakshmi Foundation. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


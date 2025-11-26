import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "../assets/ADMARK LOGO.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path === "/" || path.startsWith("/#")) {
      e.preventDefault();
      let hash = "";
      
      if (path === "/") {
        hash = "home";
      } else if (path.startsWith("/#")) {
        hash = path.substring(2);
      }
      
      if (location.pathname !== "/") {
        // If not on home page, navigate first then scroll
        window.location.href = `/#${hash}`;
      } else {
        // If on home page, just scroll
        const element = document.getElementById(hash);
        if (element) {
          const offset = 80; // Navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "More Ways", path: "/#more-ways" },
    { name: "Industries", path: "/#industries" },
    { name: "Why Choose Us", path: "/#why-choose-us" },
    { name: "Meet the People", path: "/#meet-the-people" },
    { name: "About", path: "/#about" },
    { name: "Our Work", path: "/portfolio" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-lg border-b border-red-500/20 shadow-neon"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src={logoImage}
                alt="AdMark Digitals Logo"
                className="h-10 md:h-12 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(239,68,68,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.8)] transition-all duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-red-500 transition-colors group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="neon" size="sm" asChild>
              <a href={`https://wa.me/919632092273`} target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-red-500 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-red-500/20 shadow-neon animate-fade-in">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className="block px-4 py-3 text-white/80 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="neon" size="sm" className="w-full" asChild>
                <a href={`https://wa.me/919632092273`} target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

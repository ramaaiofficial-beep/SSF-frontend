import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ssfLogo from "@/assets/ssf-logo.png";

interface SubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  subItems?: SubItem[];
}

const navigationItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Hospital",
    href: "/hospital",
    subItems: [
      { label: "Overview", href: "/hospital/overview" },
      { label: "Departments & Facilities Planned", href: "/hospital/departments" },
    ],
  },
  {
    label: "Fundraising",
    href: "/fundraising",
    subItems: [
      { label: "Donate (One-time + Recurring)", href: "/fundraising/donate" },
      { label: "Offline Donations (Bank / Cheque)", href: "/fundraising/offline" },
    ],
  },
  {
    label: "Foundation",
    href: "/foundation",
    subItems: [
      { label: "About Foundation", href: "/foundation/about" },
      { label: "Shree Krupanidhi Guruji", href: "/foundation/guruji" },
      { label: "Board Members & Leadership", href: "/foundation/board" },
      { label: "Shree Samrajyalakshmi Temple", href: "/foundation/temple" },
    ],
  },
  {
    label: "Media",
    href: "/media",
    subItems: [
      { label: "Photo Gallery", href: "/media/photos" },
      { label: "Press & News", href: "/media/press" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    subItems: [
      { label: "Blog", href: "/blog" },
      { label: "Press Release", href: "/press-release" },
      { label: "Downloads (Brochures, Project Reports)", href: "/downloads" },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact/contact-us",
  },
];

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    if (href !== "#") {
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
    }
  };

  const toggleMobileDropdown = (itemLabel: string) => {
    setOpenDropdown(openDropdown === itemLabel ? null : itemLabel);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background shadow-md border-b border-border">
      <div className="bg-background">
        <div className="container mx-auto flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-4 py-2 sm:py-3">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
            <img 
              src={ssfLogo} 
              alt="SSF Logo" 
              className="h-12 sm:h-16 md:h-20 w-auto object-contain flex-shrink-0" 
            />
            <div className="flex flex-col text-left min-w-0">
              <span className="text-xs sm:text-sm md:text-lg lg:text-xl font-extrabold leading-tight text-primary whitespace-nowrap uppercase block truncate">
                SHREE SAMRAJYALAKSHMI
              </span>
              <span className="block text-[10px] sm:text-xs md:text-sm lg:text-base font-medium text-muted-foreground whitespace-nowrap tracking-tight leading-tight mt-0.5 truncate">
                Multi-Super Specialty Hospital
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 ml-4">
            <ul className="flex items-center justify-center gap-0 w-full">
              {navigationItems.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={item.subItems ? "#" : item.href}
                    onClick={(e) => {
                      if (item.subItems) {
                        e.preventDefault();
                      }
                      handleNavClick(item.href);
                    }}
                    className={cn(
                      "flex items-center gap-1 px-2 xl:px-3 py-2 xl:py-3 text-xs xl:text-sm font-medium text-foreground transition-colors duration-200 whitespace-nowrap",
                      "hover:text-primary",
                      openDropdown === item.label && "text-primary"
                    )}
                  >
                    {item.label}
                    {item.subItems && (
                      <ChevronDown
                        className={cn(
                          "h-3 w-3 xl:h-4 xl:w-4 transition-transform duration-200",
                          openDropdown === item.label && "rotate-180"
                        )}
                      />
                    )}
                  </a>

                  {/* Active indicator */}
                  <div
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-0.5 bg-primary transition-transform duration-200 origin-left",
                      openDropdown === item.label ? "scale-x-100" : "scale-x-0"
                    )}
                  />

                  {/* Dropdown Menu */}
                  {item.subItems && openDropdown === item.label && (
                    <div className="absolute left-0 top-full z-50 min-w-[240px] xl:min-w-[280px] animate-in fade-in-10 slide-in-from-top-1 duration-200">
                      <div className="mt-2 rounded-xl bg-popover p-2 shadow-lg border border-border">
                        <ul className="space-y-0.5">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.label}>
                              <a
                                href={subItem.href}
                                onClick={() => handleNavClick(subItem.href)}
                                className="block rounded-lg px-3 xl:px-4 py-2 xl:py-2.5 text-xs xl:text-sm text-popover-foreground transition-colors duration-150 hover:bg-accent hover:text-primary"
                              >
                                {subItem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Login/Register Button */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <button className="rounded-full border-2 border-primary bg-background px-4 xl:px-6 py-1.5 xl:py-2 text-xs xl:text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground whitespace-nowrap">
              Login / Register
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent transition-colors flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Menu Sidebar */}
          <div className="fixed top-[73px] sm:top-[81px] left-0 right-0 bottom-0 bg-background z-50 lg:hidden overflow-y-auto border-t border-border">
            <div className="container mx-auto px-4 py-4">
              {/* Mobile Login Button */}
              <div className="mb-4 pb-4 border-b border-border">
                <button 
                  className="w-full rounded-full border-2 border-primary bg-background px-6 py-3 text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login / Register
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav>
                <ul className="space-y-1">
                  {navigationItems.map((item) => (
                    <li key={item.label} className="border-b border-border/50 last:border-b-0">
                      {item.subItems ? (
                        <>
                          <button
                            onClick={() => toggleMobileDropdown(item.label)}
                            className="w-full flex items-center justify-between px-4 py-4 text-base font-medium text-foreground hover:text-primary transition-colors"
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              className={cn(
                                "h-5 w-5 transition-transform duration-200",
                                openDropdown === item.label && "rotate-180"
                              )}
                            />
                          </button>
                          {openDropdown === item.label && (
                            <ul className="bg-secondary/50 pb-2">
                              {item.subItems.map((subItem) => (
                                <li key={subItem.label}>
                                  <a
                                    href={subItem.href}
                                    onClick={() => handleNavClick(subItem.href)}
                                    className="block px-8 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors"
                                  >
                                    {subItem.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <a
                          href={item.href}
                          onClick={() => handleNavClick(item.href)}
                          className="block px-4 py-4 text-base font-medium text-foreground hover:text-primary hover:bg-accent/50 transition-colors"
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default NavBar;

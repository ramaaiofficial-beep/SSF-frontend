import { ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png"; // your company logo
import footerImage from "@/assets/brookwell-industries-footer.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="text-white relative bg-cover bg-center"
      style={{ backgroundImage: `url(${footerImage})` }}
    >
      {/* Overlay for readability */}
      <div className="bg-black/60">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Logo */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="Brookwell Industries Logo" className="h-12 w-auto" />
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Trusted manufacturer of W-Beam and Thrie-Beam crash barriers, delivering safety and reliability since 2018.
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-heading font-bold mb-4">Useful Links</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="#" className="text-gray-300 hover:text-[#e2b13c] transition">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-300 hover:text-[#e2b13c] transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-300 hover:text-[#e2b13c] transition">
                    Terms of use
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-gray-300 hover:text-[#e2b13c] transition">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Office Address */}
            <div>
              <h3 className="text-lg font-heading font-bold mb-4">Office Address</h3>
              <address className="not-italic text-sm text-gray-300 leading-relaxed">
                Plot No 231/A, 1st Floor MLA Colony,<br />
                Road No 12, Banjara Hills, Hyderabad,<br />
                Telangana, India – 500034
              </address>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-heading font-bold mb-4">Phone Number</h3>
              <a
                href="tel:+919701346348"
                className="text-sm text-gray-300 hover:text-[#e2b13c] transition block mb-6"
              >
                +91 97013 46348
              </a>

              <h3 className="text-lg font-heading font-bold mb-4">Email Address</h3>
              <p className="text-sm text-gray-300 mb-2">
                Interested in working with us?
              </p>
              <a
                href="mailto:info@brookwellindustries.in"
                className="text-sm text-gray-300 hover:text-[#e2b13c] transition"
              >
                info@brookwellindustries.in
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-gray-400">
              © 2025 Brookwell Industries Private Limited.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#e2b13c] hover:bg-[#d4a335] text-[#1a3a5c] flex items-center justify-center rounded shadow-lg z-40 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;

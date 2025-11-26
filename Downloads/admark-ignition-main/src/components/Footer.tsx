import { useEffect, useRef } from "react";
import { Mail, Phone, Linkedin, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes: Array<{ x: number; y: number; vx: number; vy: number }> = [];

    // Create neural nodes
    for (let i = 0; i < 30; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections
        nodes.forEach((node2, j) => {
          if (i === j) return;
          const dx = node.x - node2.x;
          const dy = node.y - node2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 0, 51, ${0.15 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.stroke();
          }
        });

        // Draw nodes
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 0, 51, 0.5)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <footer className="relative bg-black pt-20 pb-10 overflow-hidden">
      {/* Neural mesh canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
        style={{ width: "100%", height: "100%" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold text-neon mb-4">AdMark Digitals</h3>
            <p className="text-muted-foreground mb-4">
              Engineering digital obsessions. One website at a time.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/admarkdigitals?igsh=dXdkbHc1bjZ1cnEx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61559192616231&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 border border-primary flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className="mt-4">
              <a
                href="mailto:admarkdigitals@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>admarkdigitals@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "Work", "Industries", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-foreground mb-4">Leadership</h4>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-foreground">Harshith V Malipatil</p>
                <p className="text-sm text-primary">CTO</p>
                <a
                  href="tel:9632092273"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 mt-1"
                >
                  <Phone className="w-4 h-4" />
                  9632092273
                </a>
              </div>
              <div>
                <p className="font-semibold text-foreground">Tejasvi Jois</p>
                <p className="text-sm text-primary">Co-Founder</p>
                <a
                  href="tel:9686658055"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 mt-1"
                >
                  <Phone className="w-4 h-4" />
                  9686658055
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} AdMark Digitals. All rights reserved. Built with code, coffee, and controlled chaos.
          </p>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
};

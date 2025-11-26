import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const whatsappNumber = "9632092273";
  const message = "Hi! I'd like to discuss building a website with AdMark Digitals.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
    >
      <Button
        variant="hero"
        size="lg"
        className="rounded-full w-16 h-16 p-0 shadow-neon-strong animate-glow"
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-card border border-primary text-foreground px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
};

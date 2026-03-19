import { Phone, MessageCircle } from "lucide-react";
import { locations } from "@/data/locations";

const StickyCallBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-border bg-background/95 backdrop-blur-xl">
    <a
      href={`tel:${locations[0].phone}`}
      className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground font-semibold text-sm"
      aria-label="Call Indirapuram branch"
    >
      <Phone className="w-4 h-4" />
      Call Indirapuram
    </a>
    <a
      href={`https://wa.me/${locations[0].whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 py-3 bg-accent text-accent-foreground font-semibold text-sm"
      aria-label="WhatsApp Indirapuram branch"
    >
      <MessageCircle className="w-4 h-4" />
      WhatsApp
    </a>
  </div>
);

export default StickyCallBar;

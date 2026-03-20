import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import { locations } from "@/data/locations";

const Footer = () => (
  <footer className="bg-secondary border-t border-border py-12" role="contentinfo">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-lg font-bold text-primary neon-text mb-4">DANCING BALLS</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Premium Pool & Snooker Club experience across two locations. Professional tables, vibrant atmosphere,
            unforgettable games.
          </p>
        </div>
        {locations.map((loc) => (
          <div key={loc.id}>
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">{loc.shortName} Club</h4>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>
                  {loc.address}, {loc.city}, {loc.state} {loc.postalCode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${loc.phone}`} className="hover:text-primary transition-colors">
                  {loc.phone}
                </a>
              </div>
            </address>
            <Link to={`/${loc.slug}`} className="inline-block mt-3 text-xs text-primary hover:underline">
              View Details →
            </Link>
          </div>
        ))}
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dancing Balls. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

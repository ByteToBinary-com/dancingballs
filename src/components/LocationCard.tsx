import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { ClubLocation } from "@/data/locations";

const LocationCard = ({ location }: { location: ClubLocation }) => (
  <article className="gradient-card border border-border rounded-xl p-6 hover:neon-border transition-all duration-300 group">
    <h3 className="font-display text-xl font-bold text-foreground mb-1">{location.shortName} Club</h3>
    <p className="text-muted-foreground text-sm mb-4">{location.description}</p>
    <address className="not-italic space-y-3 text-sm">
      <div className="flex items-start gap-3 text-foreground/80">
        <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
        <span>{location.address}, {location.city}, {location.state} {location.postalCode}</span>
      </div>
      <div className="flex items-center gap-3 text-foreground/80">
        <Phone className="w-4 h-4 text-primary shrink-0" />
        <a href={`tel:${location.phone}`} className="hover:text-primary transition-colors font-medium">{location.phone}</a>
      </div>
      <div className="flex items-start gap-3 text-foreground/80">
        <Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" />
        <div>
          {location.hours.map((h, i) => (
            <div key={i}>{h.day}: {h.time}</div>
          ))}
        </div>
      </div>
    </address>
    <div className="flex gap-3 mt-6">
      <a
        href={`tel:${location.phone}`}
        className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        <Phone className="w-4 h-4" /> Call Now
      </a>
      <Link
        to={`/${location.slug}`}
        className="flex items-center gap-2 border border-primary/30 text-primary px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/10 transition-colors"
      >
        Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </article>
);

export default LocationCard;

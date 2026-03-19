import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react";
import SchemaMarkup from "@/components/SchemaMarkup";
import { locations } from "@/data/locations";

const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = locations.find((l) => l.slug === slug);

  useEffect(() => {
    if (location) {
      document.title = location.metaTitle;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", location.metaDescription);
    }
  }, [location]);

  if (!location) return <Navigate to="/" replace />;

  return (
    <>
      <SchemaMarkup location={location} />

      {/* Hero */}
      <section className="pt-24 pb-16 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: "radial-gradient(circle at 50% 80%, hsl(120 100% 62% / 0.2) 0%, transparent 50%)",
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-3">DancingBalls</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            {location.shortName} <span className="text-primary neon-text">Club</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">{location.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Club Details</h2>
              <address className="not-italic space-y-5 text-base">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-muted-foreground">{location.address}, {location.city}, {location.state} {location.postalCode}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a href={`tel:${location.phone}`} className="text-primary hover:underline text-lg font-medium">{location.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Business Hours</p>
                    {location.hours.map((h, i) => (
                      <p key={i} className="text-muted-foreground">{h.day}: {h.time}</p>
                    ))}
                  </div>
                </div>
              </address>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={`tel:${location.phone}`}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
                  aria-label={`Call ${location.name}`}
                >
                  <Phone className="w-5 h-5" /> Call Now
                </a>
                <a
                  href={`https://wa.me/${location.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
                  aria-label={`WhatsApp ${location.name}`}
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-xl font-bold hover:border-primary/50 hover:text-primary transition-colors"
                  aria-label={`Get directions to ${location.name}`}
                >
                  <Navigation className="w-5 h-5" /> Get Directions
                </a>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Find Us</h2>
              <div className="rounded-xl overflow-hidden border border-border aspect-video">
                <iframe
                  src={location.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${location.name}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationPage;

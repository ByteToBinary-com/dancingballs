import { MapPin, Phone, MessageCircle, Navigation, Clock } from "lucide-react";
import Seo from "@/components/Seo";
import SchemaMarkup from "@/components/SchemaMarkup";
import { locations } from "@/data/locations";
import { getPageSeo } from "@/seo";

const Contact = () => {
  return (
    <>
      <Seo seo={getPageSeo("/contact")} />

      {locations.map((loc) => (
        <SchemaMarkup key={loc.id} location={loc} />
      ))}

      <section className="pt-24 pb-12 gradient-dark">
        <div className="container mx-auto px-4">
          <p className="text-primary font-display text-xs tracking-[0.3em] uppercase mb-3">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-black mb-4">
            Contact <span className="text-primary neon-text">Us</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Reach out to either of our locations. We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 space-y-16">
          {locations.map((loc) => (
            <div key={loc.id} className="gradient-card border border-border rounded-2xl p-8" id={loc.id}>
              <h2 className="font-display text-2xl font-bold mb-6">
                📍 {loc.name}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <address className="not-italic space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{loc.address}, {loc.city}, {loc.state} {loc.postalCode}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <a href={`tel:${loc.phone}`} className="text-primary hover:underline text-lg font-semibold">{loc.phone}</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div className="text-foreground/80">
                      {loc.hours.map((h, i) => (
                        <div key={i}>{h.day}: {h.time}</div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-4">
                    <a href={`tel:${loc.phone}`} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
                      <Phone className="w-4 h-4" /> Call Now
                    </a>
                    <a href={`https://wa.me/${loc.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </a>
                    <a href={`https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:border-primary/50 hover:text-primary transition-colors">
                      <Navigation className="w-4 h-4" /> Directions
                    </a>
                  </div>
                </address>
                <div className="rounded-xl overflow-hidden border border-border aspect-video">
                  <iframe
                    src={loc.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title={`Map of ${loc.name}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Contact;

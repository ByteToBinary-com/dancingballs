import { Link } from "react-router-dom";
import { MapPin, Phone, Trophy, Users, Star } from "lucide-react";
import LocationCard from "@/components/LocationCard";
import SchemaMarkup from "@/components/SchemaMarkup";
import { locations } from "@/data/locations";

const Index = () => (
  <>
    {locations.map((loc) => (
      <SchemaMarkup key={loc.id} location={loc} />
    ))}

    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center justify-center gradient-dark overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 30% 50%, hsl(120 100% 62% / 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, hsl(180 100% 50% / 0.1) 0%, transparent 50%)",
      }} />
      <div className="container mx-auto px-4 text-center relative z-10 pt-16">
        <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4 animate-pulse-neon">Premium Pool & Snooker</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
          <span className="text-foreground">DANCING</span>{" "}
          <span className="text-primary neon-text">BALLS</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Two premium locations. Professional tables. Unforgettable games. Experience the finest pool & snooker club in Uttar Pradesh.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${locations[0].phone}`}
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-bold hover:opacity-90 transition-opacity neon-border"
          >
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-8 py-4 rounded-xl text-base font-bold hover:border-primary/50 hover:text-primary transition-colors"
          >
            <MapPin className="w-5 h-5" /> Our Locations
          </Link>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Trophy, title: "Tournaments", desc: "Regular pool & snooker tournaments with exciting prizes." },
            { icon: Users, title: "Community", desc: "Join a vibrant community of cue sport enthusiasts." },
            { icon: Star, title: "Pro Tables", desc: "Professional-grade tables maintained to perfection." },
          ].map((f) => (
            <div key={f.title} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Locations */}
    <section className="py-20" id="locations">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Our <span className="text-primary neon-text">Locations</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Visit us at any of our two premium clubs across Uttar Pradesh.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, hsl(120 100% 62% / 0.2) 0%, transparent 60%)",
      }} />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Play?</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Grab your cue and head to the nearest Dancing Balls club. Walk in or call to book your table.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${locations[0].phone}`} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
            <Phone className="w-5 h-5" /> Indirapuram: {locations[0].phone}
          </a>
          <a href={`tel:${locations[1].phone}`} className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
            <Phone className="w-5 h-5" /> Saharanpur: {locations[1].phone}
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Index;

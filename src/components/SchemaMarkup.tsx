import { ClubLocation } from "@/data/locations";

const SchemaMarkup = ({ location }: { location: ClubLocation }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://dancingballs.com/${location.slug}`,
    name: location.name,
    description: location.description,
    telephone: location.phone,
    url: `https://dancingballs.com/${location.slug}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.lat,
      longitude: location.lng,
    },
    openingHoursSpecification: location.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.time.split(" – ")[0],
      closes: h.time.split(" – ")[1],
    })),
    image: "https://dancingballs.com/og-image.jpg",
    priceRange: "$$",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;

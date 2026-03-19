export interface ClubLocation {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
  whatsapp: string;
  mapEmbedUrl: string;
  lat: number;
  lng: number;
  hours: { day: string; time: string }[];
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export const locations: ClubLocation[] = [
  {
    id: "indirapuram",
    name: "DancingBalls Indirapuram",
    shortName: "Indirapuram",
    slug: "indirapuram-pool-club",
    address: "Shop No. 12, Ahinsa Khand-2, Indirapuram",
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    postalCode: "201014",
    phone: "+919876543210",
    whatsapp: "919876543210",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5!2d77.37!3d28.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM4JzAuMCJOIDc3wrAyMicwLjAiRQ!5e0!3m2!1sen!2sin!4v1",
    lat: 28.6353,
    lng: 77.3707,
    hours: [
      { day: "Monday – Friday", time: "11:00 AM – 12:00 AM" },
      { day: "Saturday – Sunday", time: "10:00 AM – 1:00 AM" },
    ],
    description: "Experience premium pool and snooker at our Indirapuram club. Featuring professional-grade tables, ambient lighting, and a vibrant atmosphere.",
    metaTitle: "Pool Club in Indirapuram | DancingBalls Snooker & Billiards",
    metaDescription: "Visit DancingBalls Pool & Snooker Club in Indirapuram, Ghaziabad. Professional tables, tournaments, and a premium gaming lounge experience. Call now!",
  },
  {
    id: "saharanpur",
    name: "DancingBalls Saharanpur",
    shortName: "Saharanpur",
    slug: "saharanpur-snooker-club",
    address: "Main Market Road, Near Clock Tower, Saharanpur",
    city: "Saharanpur",
    state: "Uttar Pradesh",
    postalCode: "247001",
    phone: "+919876543211",
    whatsapp: "919876543211",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.8!2d77.54!3d29.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU4JzAuMCJOIDc3wrAzMicwLjAiRQ!5e0!3m2!1sen!2sin!4v1",
    lat: 29.9680,
    lng: 77.5460,
    hours: [
      { day: "Monday – Friday", time: "12:00 PM – 11:00 PM" },
      { day: "Saturday – Sunday", time: "10:00 AM – 12:00 AM" },
    ],
    description: "Our Saharanpur branch offers a world-class snooker and pool experience. Professional equipment, friendly vibes, and competitive rates.",
    metaTitle: "Snooker Club in Saharanpur | DancingBalls Pool & Billiards",
    metaDescription: "Visit DancingBalls Snooker & Pool Club in Saharanpur. Premium tables, great ambiance, and exciting tournaments. Call to book your table!",
  },
];

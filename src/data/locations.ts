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
    name: "Dancing Balls Indirapuram",
    shortName: "Indirapuram",
    slug: "indirapuram-pool-club",
    address: "346, 2nd floor, Shakti khand 3, Indirapuram",
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    postalCode: "201014",
    phone: "+918920393482",
    whatsapp: "918920393482",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.3910020909348!2d77.3685971!3d28.648009000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfbafc67ddc63%3A0x7fb3f6aacf2a27c7!2sDancing%20Balls%20-%20Snooker%20%26%20Pool%20Club!5e0!3m2!1sen!2sin!4v1773981382167!5m2!1sen!2sin",
    lat: 28.648183185283482,
    lng: 77.36862928650726,
    hours: [
      { day: "Monday – Friday", time: "11:00 AM – 12:00 AM" },
      { day: "Saturday – Sunday", time: "10:00 AM – 1:00 AM" },
    ],
    description:
      "Experience premium pool and snooker at our Indirapuram club. Featuring professional-grade tables, ambient lighting, and a vibrant atmosphere.",
    metaTitle: "Pool Club in Indirapuram | Dancing Balls Snooker & Billiards",
    metaDescription:
      "Visit Dancing Balls Pool & Snooker Club in Indirapuram, Ghaziabad. Professional tables, tournaments, and a premium gaming lounge experience. Call now!",
  },
  {
    id: "saharanpur",
    name: "Dancing Balls Saharanpur",
    shortName: "Saharanpur",
    slug: "saharanpur-snooker-club",
    address: "2b/1234, near honeybees school, Chander nagar",
    city: "Saharanpur",
    state: "Uttar Pradesh",
    postalCode: "247001",
    phone: "+916395720072",
    whatsapp: "916395720072",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.050736925904!2d77.54328!3d29.9492192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca164f1fe7fec5b%3A0xc2300fae152254f0!2sDancing%20balls%20-%20Snooker%20%26%20Pool%20club!5e0!3m2!1sen!2sin!4v1773981695614!5m2!1sen!2sin",
    lat: 29.949493437380006,
    lng: 77.5433014576715,
    hours: [
      { day: "Monday – Friday", time: "12:00 PM – 11:00 PM" },
      { day: "Saturday – Sunday", time: "10:00 AM – 12:00 AM" },
    ],
    description:
      "Our Saharanpur branch offers a world-class snooker and pool experience. Professional equipment, friendly vibes, and competitive rates.",
    metaTitle: "Snooker Club in Saharanpur | Dancing Balls Pool & Billiards",
    metaDescription:
      "Visit Dancing Balls Snooker & Pool Club in Saharanpur. Premium tables, great ambiance, and exciting tournaments. Call to book your table!",
  },
];

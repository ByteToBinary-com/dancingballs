import { locations } from "@/data/locations";
import { DEFAULT_OG_IMAGE, SITE_URL } from "./site";

export interface PageSeo {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage: string;
}

const defaultSeo = {
  title:
    "Dancing Balls – Premium Pool & Snooker Club | Indirapuram & Saharanpur",
  description:
    "Dancing Balls is a premium Pool & Snooker Club with locations in Indirapuram and Saharanpur. Book your table, enjoy tournaments, and experience the best billiards lounge.",
};

export const prerenderRoutes = ["/", "/contact", ...locations.map((location) => `/${location.slug}`)];

export const getPageSeo = (pathname: string): PageSeo => {
  const normalizedPath = pathname === "/" ? pathname : pathname.replace(/\/+$/, "");
  const location = locations.find((entry) => `/${entry.slug}` === normalizedPath);

  if (location) {
    return {
      title: location.metaTitle,
      description: location.metaDescription,
      canonicalUrl: `${SITE_URL}/${location.slug}`,
      ogImage: DEFAULT_OG_IMAGE,
    };
  }

  if (normalizedPath === "/contact") {
    return {
      title:
        "Contact Dancing Balls – Pool & Snooker Club | Indirapuram & Saharanpur",
      description:
        "Get in touch with Dancing Balls Pool & Snooker Club. Find our addresses, phone numbers, and directions for Indirapuram and Saharanpur locations.",
      canonicalUrl: `${SITE_URL}/contact`,
      ogImage: DEFAULT_OG_IMAGE,
    };
  }

  if (normalizedPath === "/") {
    return {
      title: defaultSeo.title,
      description: defaultSeo.description,
      canonicalUrl: `${SITE_URL}/`,
      ogImage: DEFAULT_OG_IMAGE,
    };
  }

  return {
    title: "Page Not Found | Dancing Balls",
    description: "The page you requested could not be found.",
    canonicalUrl: `${SITE_URL}${normalizedPath || "/"}`,
    ogImage: DEFAULT_OG_IMAGE,
  };
};

const upsertMeta = (
  selector: string,
  attributeName: "name" | "property",
  attributeValue: string,
  content: string,
) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
};

export const applyDocumentSeo = (seo: PageSeo) => {
  if (typeof document === "undefined") {
    return;
  }

  document.title = seo.title;
  upsertMeta('meta[name="description"]', "name", "description", seo.description);
  upsertMeta('meta[property="og:title"]', "property", "og:title", seo.title);
  upsertMeta(
    'meta[property="og:description"]',
    "property",
    "og:description",
    seo.description,
  );
  upsertMeta('meta[property="og:url"]', "property", "og:url", seo.canonicalUrl);
  upsertMeta('meta[property="og:image"]', "property", "og:image", seo.ogImage);
  upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", seo.title);
  upsertMeta(
    'meta[name="twitter:description"]',
    "name",
    "twitter:description",
    seo.description,
  );
  upsertMeta(
    'meta[name="twitter:image"]',
    "name",
    "twitter:image",
    seo.ogImage,
  );
  upsertCanonical(seo.canonicalUrl);
};

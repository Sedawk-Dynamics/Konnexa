import { services, site, team } from "@/lib/site";

// JSON-LD structured data. Multiple @graph entries help Google understand the
// organization, its physical offices (Local SEO), services offered, and how the
// page itself fits together.
export function StructuredData() {
  const organization = {
    "@type": "Organization",
    "@id": `${site.url}#organization`,
    name: site.legalName,
    alternateName: site.brand,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/konnexa-logo.png`,
      width: 1178,
      height: 987,
    },
    description: site.description,
    foundingDate: site.founded,
    taxID: site.gst,
    email: site.email,
    telephone: `+${site.phoneRaw}`,
    sameAs: [site.instagram],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+${site.phoneRaw}`,
        email: site.email,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Telugu"],
      },
    ],
    founder: team.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.role.split(",")[0]?.trim() ?? m.role,
      email: m.email,
    })),
  };

  const localBusinesses = site.offices.map((office, i) => ({
    "@type": "LocalBusiness",
    "@id": `${site.url}#office-${i}`,
    name: `${site.brand} — ${office.locality}`,
    parentOrganization: { "@id": `${site.url}#organization` },
    url: site.url,
    image: `${site.url}/konnexa-logo.png`,
    telephone: `+${site.phoneRaw}`,
    email: site.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: office.streetAddress,
      addressLocality: office.locality,
      addressRegion: office.region,
      postalCode: office.postalCode || undefined,
      addressCountry: office.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "18:30",
      },
    ],
  }));

  const website = {
    "@type": "WebSite",
    "@id": `${site.url}#website`,
    url: site.url,
    name: site.brand,
    description: site.description,
    publisher: { "@id": `${site.url}#organization` },
    inLanguage: "en-IN",
  };

  const offerCatalog = {
    "@type": "Service",
    "@id": `${site.url}#services`,
    provider: { "@id": `${site.url}#organization` },
    serviceType: "HR Services, Digital Marketing, Software Training, Skill Development",
    areaServed: { "@type": "Country", name: "India" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Konnexa Innovations Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
        },
      })),
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}#services` },
      { "@type": "ListItem", position: 3, name: "About", item: `${site.url}#about` },
      { "@type": "ListItem", position: 4, name: "Team", item: `${site.url}#team` },
      { "@type": "ListItem", position: 5, name: "Contact", item: `${site.url}#contact` },
    ],
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, ...localBusinesses, website, offerCatalog, breadcrumb],
  };

  return (
    <script
      type="application/ld+json"
      // The payload is generated from our trusted site config, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

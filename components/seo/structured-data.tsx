import { seoConfig } from "@/lib/seo-config";

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${seoConfig.brand.url}/#organization`,
    name: seoConfig.brand.name,
    legalName: seoConfig.brand.legalName,
    url: seoConfig.brand.url,
    logo: {
      "@type": "ImageObject",
      url: seoConfig.brand.logo,
      width: "512",
      height: "512",
    },
    foundingDate: seoConfig.brand.founded,
    description: seoConfig.defaultMetadata.description,
    email: seoConfig.brand.email,
    telephone: seoConfig.brand.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: seoConfig.brand.address.street,
      addressLocality: seoConfig.brand.address.city,
      addressRegion: seoConfig.brand.address.state,
      postalCode: seoConfig.brand.address.postalCode,
      addressCountry: seoConfig.brand.address.country,
    },
    sameAs: [
      seoConfig.social.linkedin,
      seoConfig.social.github,
      seoConfig.social.facebook,
      `https://twitter.com/${seoConfig.social.twitter.replace("@", "")}`,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: seoConfig.brand.email,
      telephone: seoConfig.brand.phone,
      availableLanguage: ["English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Website Schema
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${seoConfig.brand.url}/#website`,
    url: seoConfig.brand.url,
    name: seoConfig.brand.name,
    description: seoConfig.defaultMetadata.description,
    publisher: {
      "@id": `${seoConfig.brand.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${seoConfig.brand.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// LocalBusiness Schema
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${seoConfig.brand.url}/#localbusiness`,
    name: seoConfig.brand.name,
    image: seoConfig.brand.logo,
    url: seoConfig.brand.url,
    telephone: seoConfig.brand.phone,
    email: seoConfig.brand.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: seoConfig.brand.address.street,
      addressLocality: seoConfig.brand.address.city,
      addressRegion: seoConfig.brand.address.state,
      postalCode: seoConfig.brand.address.postalCode,
      addressCountry: seoConfig.brand.address.country,
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service Schema
export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: {
      "@id": `${seoConfig.brand.url}/#organization`,
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: name,
            description: description,
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${seoConfig.brand.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Article/Project Schema
export function ArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url,
}: {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image || seoConfig.brand.logo,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author || seoConfig.brand.name,
    },
    publisher: {
      "@id": `${seoConfig.brand.url}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${seoConfig.brand.url}${url}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema
export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ItemList Schema for Projects/Services
export function ItemListSchema({
  items,
  type = "Service",
}: {
  items: { name: string; description: string; url?: string }[];
  type?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": type,
        name: item.name,
        description: item.description,
        ...(item.url && { url: `${seoConfig.brand.url}${item.url}` }),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// SEO Configuration for MSIC Labs Brand
export const seoConfig = {
  brand: {
    name: "MSIC Labs",
    legalName: "MSIC Labs Private Limited",
    slogan: "Innovative Software Solutions for Digital Excellence",
    founded: "2020",
    url: "https://msiclabs.com",
    logo: "https://msiclabs.com/msiclogo.png",
    email: "info@msiclabs.com",
    phone: "+94714879783", // Update with actual phone
    address: {
      street: "Colombo, Sri Lanka", // Update with actual address
      city: "Matara",
      state: "Southern Province",
      postalCode: "81000",
      country: "Sri Lanka",
    },
  },
  social: {
    twitter: "@msiclabs", // Update with actual handles
    linkedin: "https://linkedin.com/company/msiclabs",
    github: "https://github.com/msiclabs",
    facebook: "https://facebook.com/msiclabs",
  },
  defaultMetadata: {
    title: "MSIC Labs - Innovative Software Development & IT Consultancy",
    description:
      "MSIC Labs delivers cutting-edge software development, AI/ML solutions, cloud services, and IT consultancy. Transform your business with our expert team specialized in web, mobile, and enterprise applications.",
    keywords: [
      "MSIC Labs",
      "MSIC",
      "software development company",
      "IT consultancy",
      "custom software solutions",
      "AI development",
      "machine learning services",
      "web application development",
      "mobile app development",
      "cloud solutions",
      "enterprise software",
      "e-commerce development",
      "UI/UX design",
      "SEO services",
      "digital transformation",
      "technology consulting",
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    images: {
      default: {
        url: "https://msiclabs.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MSIC Labs - Innovative Software Solutions",
      },
    },
  },
  twitter: {
    handle: "@msiclabs",
    site: "@msiclabs",
    cardType: "summary_large_image",
  },
};

// Generate comprehensive metadata for pages
export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
}: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}) {
  const fullTitle = title
    ? `${title} | ${seoConfig.brand.name}`
    : seoConfig.defaultMetadata.title;
  const fullDescription = description || seoConfig.defaultMetadata.description;
  const fullUrl = url ? `${seoConfig.brand.url}${url}` : seoConfig.brand.url;
  const imageUrl = image || seoConfig.openGraph.images.default.url;
  const allKeywords = [
    ...seoConfig.defaultMetadata.keywords,
    ...keywords,
  ].join(", ");

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: allKeywords,
    authors: author ? [{ name: author }] : [{ name: seoConfig.brand.name }],
    creator: seoConfig.brand.name,
    publisher: seoConfig.brand.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.brand.url),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      siteName: seoConfig.brand.name,
      images: [
        {
          url: imageUrl,
          width: seoConfig.openGraph.images.default.width,
          height: seoConfig.openGraph.images.default.height,
          alt: fullTitle,
        },
      ],
      locale: seoConfig.openGraph.locale,
      type: type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: seoConfig.twitter.cardType,
      title: fullTitle,
      description: fullDescription,
      images: [imageUrl],
      creator: seoConfig.twitter.handle,
      site: seoConfig.twitter.site,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code", // Add actual verification codes
      yandex: "your-yandex-verification-code",
      bing: "your-bing-verification-code",
    },
  };
}

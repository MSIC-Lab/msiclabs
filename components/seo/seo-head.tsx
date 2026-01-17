import { seoConfig } from "@/lib/seo-config";

/**
 * SEO Head Component
 * Provides additional meta tags that can't be added via Next.js metadata API
 */
export function SEOHead() {
  return (
    <>
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      
      {/* Preconnect to improve performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Geo tags for local SEO */}
      <meta name="geo.region" content={seoConfig.brand.address.country} />
      <meta name="geo.placename" content={seoConfig.brand.address.city} />
      
      {/* Business/Company info */}
      <meta name="author" content={seoConfig.brand.name} />
      <meta name="company" content={seoConfig.brand.legalName} />
      
      {/* Mobile optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* IE/Edge optimization */}
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      
      {/* Disable automatic detection and formatting */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />
    </>
  );
}

/**
 * No Index Component
 * Use this for pages that shouldn't be indexed
 */
export function NoIndex() {
  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="googlebot" content="noindex, nofollow" />
    </>
  );
}

/**
 * Canonical Link Component
 * For pages with duplicate content
 */
export function CanonicalLink({ url }: { url: string }) {
  const fullUrl = url.startsWith("http") ? url : `${seoConfig.brand.url}${url}`;
  return <link rel="canonical" href={fullUrl} />;
}

/**
 * Alternate Language Links
 * For multi-language sites (future enhancement)
 */
export function AlternateLinks({
  languages,
  currentPath,
}: {
  languages: { code: string; name: string }[];
  currentPath: string;
}) {
  return (
    <>
      {languages.map((lang) => (
        <link
          key={lang.code}
          rel="alternate"
          hrefLang={lang.code}
          href={`${seoConfig.brand.url}/${lang.code}${currentPath}`}
        />
      ))}
    </>
  );
}

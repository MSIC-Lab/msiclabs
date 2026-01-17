/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://msiclabs.com",
  generateRobotsTxt: false, // We have custom robots.txt
  generateIndexSitemap: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*", "/admin/*", "/_next/*"],
  
  // Custom transformation for better SEO
  transform: async (config, path) => {
    // Define custom priorities for different pages
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path.startsWith("/projects")) {
      priority = 0.9;
      changefreq = "weekly";
    } else if (path.startsWith("/aboutUs") || path === "/about") {
      priority = 0.8;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://msiclabs.com${path}`,
          hreflang: "en",
        },
      ],
    };
  },

  // Additional paths for dynamic content
  additionalPaths: async (config) => {
    const result = [];

    // Add important sections with custom config
    result.push({
      loc: "/",
      changefreq: "daily",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    });

    result.push({
      loc: "/projects",
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    });

    result.push({
      loc: "/aboutUs",
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    });

    return result;
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
  },
};


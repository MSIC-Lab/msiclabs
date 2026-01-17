import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "@/app/providers";
import { seoConfig, generateMetadata } from "@/lib/seo-config";
import {
  OrganizationSchema,
  WebsiteSchema,
  LocalBusinessSchema,
} from "@/components/seo/structured-data";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  ...generateMetadata({
    title: seoConfig.defaultMetadata.title,
    description: seoConfig.defaultMetadata.description,
    keywords: seoConfig.defaultMetadata.keywords,
  }),
  title: {
    default: seoConfig.defaultMetadata.title,
    template: `%s | ${seoConfig.brand.name}`,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/msiclogo.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/msiclogo.ico",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: seoConfig.brand.name,
  },
  applicationName: seoConfig.brand.name,
  category: "technology",
};


export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
        <LocalBusinessSchema />
        <link rel="canonical" href={seoConfig.brand.url} />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={popins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

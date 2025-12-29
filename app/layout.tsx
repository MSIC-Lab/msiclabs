import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Poppins } from "next/font/google"; // Removed Inter as it's not used
import { Providers } from "@/app/providers";

const popins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
  title: {
    default: "MSIC LABS - Software Development and Consultancy",
    template: "%s | MSIC LABS",
  },
  description:
    "MSIC LABS specializes in innovative software development and consultancy services, delivering tailored solutions to enhance your business operations.",
  keywords:
    "software development, consultancy, custom software, web development, mobile apps, MSIC LABS, IT solutions, software consulting",
  openGraph: {
    title: "MSIC LABS - Software Development and Consultancy",
    description:
      "Discover MSIC LABS' innovative software solutions and expert consultancy services. We provide tailored IT solutions to meet your business needs.",
    url: "https://msiclabs.com",
    siteName: "MSIC LABS",
    images: [
      {
        url: "/msiclogo.png",
        width: 1200,
        height: 630,
        alt: "MSIC LABS Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", 
    title: "MSIC LABS - Software Development and Consultancy",
    description:
      "Discover MSIC LABS' innovative software solutions and expert consultancy services. We provide tailored IT solutions to meet your business needs.",
    images: [
      {
        url: "/msiclogo.png",
        width: 1200,
        height: 630,
        alt: "MSIC LABS Logo",
      },
    ], 
  },
  icons: {
    icon: "/msiclogo.ico",
  },
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
    <html suppressHydrationWarning lang="en" className="light">
      <head />
      <body className={popins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

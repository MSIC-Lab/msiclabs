import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import { Providers } from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });
const popins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });
export const metadata: Metadata = {
  title: {
    default: "MSIC LABS",
    template: "%s | MSIC LABS",
  },
  description: "Software Development and Consultancy",
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
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={popins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

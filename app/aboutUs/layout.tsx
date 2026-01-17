import type { Metadata } from "next";
import { generateMetadata } from "@/lib/seo-config";

export const metadata: Metadata = generateMetadata({
  title: "About MSIC Labs - Our Vision, Mission & Expert Team",
  description:
    "Discover MSIC Labs' journey since 2020. Learn about our vision, mission, core values of innovation and excellence, and meet the expert team delivering transformative software solutions worldwide.",
  keywords: [
    "about MSIC Labs",
    "software company background",
    "technology team",
    "company vision mission",
    "expert developers",
    "IT consulting team",
  ],
  url: "/aboutUs",
});

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about MSIC Labs, our vision, mission, core values, and the team behind innovative software solutions.",
  openGraph: {
    title: "About Us | MSIC Labs",
    description: "Discover MSIC Labs' story, our commitment to excellence, and the innovative team delivering transformative digital solutions.",
    url: "https://msiclabs.com/aboutUs",
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

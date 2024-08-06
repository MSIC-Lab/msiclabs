// import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/ui/navbar";
import Customer from "@/components/sections/Customers";
import Services from "@/components/sections/Services";
import Social from "@/components/sections/Social";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/ContactUs";
import Projects from "@/components/sections/Projects";

// import Services from "@/components/sections/services";
// import Technologies from "@/components/sections/technologies";
// import Contact from "@/components/sections/contact";

const projectData = [
  {
    imageSrc: "/pos.png",
    company: "Microsoft Corp.",
    title: "Management system",
    description:
      "Flowbite helps you connect with friends, family and communities of people who share your interests.",
    caseStudyLink: "#",
  },
  {
    imageSrc: "/jak.png",
    altText: "Image description",
    company: "Google Inc.",
    title: "E-commerce website",
    description:
      "Flowbite helps you connect with friends, family and communities of people who share your interests.",
    caseStudyLink: "#",
  },
  {
    imageSrc: "/car.png",
    altText: "Image description",
    company: "Facebook Inc.",
    title: "Social media app",
    description:
      "Flowbite helps you connect with friends, family and communities of people who share your interests.",
    caseStudyLink: "#",
  },
  {
    imageSrc: "/mask.png",
    altText: "Image description",
    company: "Amazon Inc.",
    title: "E-learning platform",
    description:
      "Flowbite helps you connect with friends, family and communities of people who share your interests.",
    caseStudyLink: "#",
  },
  {
    imageSrc: "/property.png",
    altText: "Image description",
    company: "Twitter Inc.",
    title: "Healthcare app",
    description:
      "Flowbite helps you connect with friends, family and communities of people who share your interests.",
    caseStudyLink: "#",
  },
  {
    imageSrc: "/sanima.png",
    altText: "Image description",
    company: "Twitter Inc.",
    title: "Healthcare app",
    description:
      "Flowbite helps you connect with friends, family and communities of people who share your interests.",
    caseStudyLink: "#",
  },
  {
    imageSrc: "/travel.png",
    altText: "Image description",
    company: "Twitter Inc.",
    title: "Healthcare app",
    description:
      "Flowbite helps you connect with friends, family and communities of people who share your interests.",
    caseStudyLink: "#",
  },
  {
    imageSrc: "/hotel.png",
    altText: "Image description",
    company: "Twitter Inc.",
    title: "Healthcare app",
    description:
      "Flowbite helps you connect with friends, family and communities of people who share your interests.",
    caseStudyLink: "#",
  },
];
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Customer />
      <Services />
      <Projects projects={projectData} />

      <Social />
      <Contact />

      <Footer />
    </>
  );
}

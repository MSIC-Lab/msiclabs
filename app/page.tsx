// import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/ui/navbar";
import Customer from "@/components/sections/Customers";
import Services from "@/components/sections/Services";
import Social from "@/components/sections/Social";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/ContactUs";

// import Services from "@/components/sections/services";
// import Technologies from "@/components/sections/technologies";
// import Contact from "@/components/sections/contact";

const projectData = [
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXd03DjoukH5H5-kMKiWvox8bUrf75d4tpg&s",
    altText: "Image description",
    company: "Microsoft Corp.",
    title: "Management system",
    description:
      "Flowbite helps you connect with friends, family and communities of people who share your interests.",
    caseStudyLink: "#",
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXd03DjoukH5H5-kMKiWvox8bUrf75d4tpg&s",
    altText: "Image description",
    company: "Google Inc.",
    title: "E-commerce website",
    description:
      "Flowbite helps you connect with friends, family and communities of people who share your interests.",
    caseStudyLink: "#",
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXd03DjoukH5H5-kMKiWvox8bUrf75d4tpg&s",
    altText: "Image description",
    company: "Facebook Inc.",
    title: "Social media app",
    description:
      "Flowbite helps you connect with friends, family and communities of people who share your interests.",
    caseStudyLink: "#",
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXd03DjoukH5H5-kMKiWvox8bUrf75d4tpg&s",
    altText: "Image description",
    company: "Amazon Inc.",
    title: "E-learning platform",
    description:
      "Flowbite helps you connect with friends, family and communities of people who share your interests.",
    caseStudyLink: "#",
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXd03DjoukH5H5-kMKiWvox8bUrf75d4tpg&s",
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

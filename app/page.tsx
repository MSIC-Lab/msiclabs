// import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/ui/navbar";
import Customer from "@/components/sections/Customers";
import Services from "@/components/sections/Services";
import Social from "@/components/sections/Social";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/ContactUs";
import AboutUs from "@/components/sections/AboutUs";

import Projects from "@/components/sections/Projects";
// import Services from "@/components/sections/services";
// import Technologies from "@/components/sections/technologies";
// import Contact from "@/components/sections/contact";

const projectData = [
  
  {
    imageSrc: "/jak.png",
    altText: "company portfolio",
    company: "Jak Digital Solutions",
    title: "Company Portfolio",
    description:
      "Jak Digital Solutions official website. A company that provides digital solutions to businesses.",
    caseStudyLink: "https://jakdigitalsolutions.com.au/",
  },
  
  {
    imageSrc: "/mask.png",
    altText: "Ecormmerce platform",
    company: "Yaka Store",
    title: "Ecommerce Platform",
    description:
      "E Commerce Website that offers a wide range of traditional masks from Sri Lankan culture to users who are interested worlwide.",
    caseStudyLink: "#",
  },
  {
    imageSrc: "/hotel.png",
    altText: "Hotel Management System",
    company: "Bouganvilla Hotels",
    title: "Hotel Management System",
    description:
      "Hotel Management System for Bouganvilla Hotels, a chain of hotels in Sri Lanka.",
    caseStudyLink: "#",
  },
  {
    imageSrc: "/pos.png",
    company: "Retail Shop",
    title: "Point of Sale System",
    description:
      "MSIC POS is a point of sale system that help you manage your business with ease.",
    caseStudyLink: "#",
  },
  {
    imageSrc: "/car.png",
    altText: "Car Rental System",
    company: "JAK Car Rental Solutions",
    title: "Car Rental System",
    description:
      "Web application offering car rental services in Melbourne, Sydney, Geelong, and Central Coast to users in need of transportation",
    caseStudyLink: "https://jakcarrentalsolutions.com.au/",
  },
  {
    imageSrc: "/property.png",
    altText: "Online Services Website",
    company: "JAK Property Solutions",
    title: "Online Services Website",
    description:
      "Website for JAK Property Solutions which offer unparalleled services across three states in Australia.",
    caseStudyLink: "https://jakpropertysolutions.com.au/",
  },
  {
    imageSrc: "/sanima.png",
    altText: "Company Website",
    company: "Sanima.lk",
    title: "Company Website",
    description:
      "Webiste for the Sanima Holdings, the Leading Steel Building Construction Company in Sri Lanka",
    caseStudyLink: "https://sanima.lk/",
  },
  {
    imageSrc: "/travel.png",
    altText: "Company Website",
    company: "A & M Travels",
    title: "Company Website",
    description:
      "Website for A & M Travels, a travel agency that offers a wide range of travel services.",
    caseStudyLink: "#",
  },
  
  {
    imageSrc: "/hotelRomaya.png",
    altText: "Hotel Website",
    company: "Hotel Romaya",
    title: "Hotel Website",
    description:
      "Experience luxury and tranquility at Hotel Romaya, nestled in the picturesque coastal towns of Matara and Mirissa.",
    caseStudyLink: "https://hotelromaya.com",
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
      {/* <AboutUs /> */}


      {/* <Social /> */}
      <Contact />
      <Footer />
    </>
  );
}

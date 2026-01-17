// import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/ui/navbar";
import Customer from "@/components/sections/Customers";
import Services from "@/components/sections/Services";
// import Social from "@/components/sections/Social";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/ContactUs";
import AboutUs from "@/components/sections/AboutUs";
import OurCustomers from "@/components/sections/OurCustomers";
import { ItemListSchema } from "@/components/seo/structured-data";
import { serviceData } from "@/components/data/serviceData";

// import Services from "@/components/sections/services";
// import Technologies from "@/components/sections/technologies";
// import Contact from "@/components/sections/contact";

export default function Home() {
  // Prepare service data for structured data
  const services = serviceData.slice(0, 8).map((service) => ({
    name: service.title,
    description: service.description,
  }));

  return (
    <>
      <ItemListSchema items={services} type="Service" />
      <Navbar />
      <Hero />
      <Customer />
      <Services />
      <OurCustomers />
      <AboutUs />

      {/* <Social /> */}
      <Contact />
      <Footer />
    </>
  );
}

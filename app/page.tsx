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

// import Services from "@/components/sections/services";
// import Technologies from "@/components/sections/technologies";
// import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
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

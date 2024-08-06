// import Image from "next/image";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/ui/navbar";
import Customer from "@/components/sections/Customers";
import Services from "@/components/sections/Services";
import Social from "@/components/sections/Social";
import Footer from "@/components/sections/Footer";
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
      <Social />
      <Footer />
    </>
  );
}

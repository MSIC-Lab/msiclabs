import Image from "next/image";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/ui/navbar";
import Services from "@/components/sections/services";
import Technologies from "@/components/sections/technologies";
import Contact from "@/components/sections/contact";


export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Technologies></Technologies>
      <Contact></Contact>
    </>
  );
}

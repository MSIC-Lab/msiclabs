"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import { ThemeSwitch } from "../theme-switch";

const links = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Our Works", href: "#works" },
  { name: "Contact Us", href: "#contact" },
];

export default function Nav() {
  const [active, setActive] = useState(links[0].name);

  return (
    <Navbar className="dark:bg-slate-800 shadow-lg" maxWidth="xl">
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit text-black-300">
          <span className="text-primary-1 ml-2 dark:text-white">MSIC</span><span className="text-gray-700 dark:text-white"> Labs</span>
        </p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map((link) => (
          <NavbarItem key={link.name} isActive={active === link.name}>
            <Link
              color={active === link.name ? "secondary" : "foreground"}
              href={link.href}
              onClick={() => setActive(link.name)}
            >
              {link.name}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

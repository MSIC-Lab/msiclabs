"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import { HiArrowRight, HiChevronDown } from "react-icons/hi2";

const links = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  { 
    name: "Products", 
    href: "#",
    dropdown: [
      { name: "Luvia ERP", href: "/projects#luvia-erp", description: "Enterprise Resource Planning" },
      { name: "MSIC Hotel Management", href: "/projects#hotel-management", description: "Complete Hotel Solutions" },
      { name: "MSIC BOT", href: "/projects#msic-chatbot", description: "AI-Powered Automation" },
      { name: "Other Projects", href: "/projects#other-projects", description: "View All Projects" },
    ]
  },
  { name: "About Us", href: "/aboutUs" },
];

export default function Nav() {
  const [active, setActive] = useState(links[0].name);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  return (
    <Navbar 
      className="bg-white/70 dark:bg-slate-950/70 backdrop-blur-2xl border-b border-gray-200/40 dark:border-white/5" 
      maxWidth="xl"
      height="80px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-gray-700 dark:text-gray-300"
        />
        <NavbarBrand>
          <Link href="/#home" className="flex items-center gap-3 group">
            <div className="relative transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
              <AcmeLogo />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-xl">
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                  MSIC
                </span>
                <span className="text-gray-800 dark:text-white"> Labs</span>
              </p>
              <span className="text-[10px] tracking-wider text-gray-500 dark:text-gray-400 uppercase hidden lg:block font-medium">
                Technology Solutions
              </span>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-1" justify="center">
        {links.map((link) => (
          <NavbarItem key={link.name} isActive={active === link.name}>
            {link.dropdown ? (
              <Dropdown>
                <DropdownTrigger>
                  <button
                    onClick={() => setActive(link.name)}
                    className={`
                      relative px-4 py-2 font-semibold text-sm transition-all duration-300 rounded-lg flex items-center gap-1
                      ${active === link.name 
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5'
                      }
                    `}
                  >
                    {link.name}
                    <HiChevronDown className="text-base" />
                  </button>
                </DropdownTrigger>
                <DropdownMenu 
                  aria-label="Products"
                  className="w-[300px]"
                  itemClasses={{
                    base: "gap-4",
                  }}
                >
                  {link.dropdown.map((item) => (
                    <DropdownItem
                      key={item.name}
                      description={item.description}
                      href={item.href}
                      className="text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 py-3"
                    >
                      {item.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Link
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`
                  relative px-4 py-2 font-semibold text-sm transition-all duration-300 rounded-lg
                  ${active === link.name 
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5'
                  }
                `}
              >
                {link.name}
              </Link>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/#contact">
            <Button
              className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hidden sm:flex"
              endContent={<HiArrowRight className="text-lg" />}
              size="md"
              radius="lg"
            >
              Get Started
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-white/98 dark:bg-slate-950/98 backdrop-blur-2xl pt-8 px-6 border-r border-gray-200/40 dark:border-white/5">
        <div className="flex flex-col gap-2">
          {links.map((link, index) => (
            <div key={`${link.name}-${index}`}>
              {link.dropdown ? (
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setDropdownOpen(dropdownOpen === link.name ? null : link.name)}
                    className={`
                      w-full text-base py-4 px-5 rounded-xl transition-all duration-300 font-semibold flex items-center justify-between
                      ${active === link.name
                        ? 'bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-950/50 dark:to-blue-900/30 text-blue-600 dark:text-blue-400 shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
                      }
                    `}
                  >
                    {link.name}
                    <HiChevronDown 
                      className={`text-lg transition-transform duration-300 ${
                        dropdownOpen === link.name ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {dropdownOpen === link.name && (
                    <div className="flex flex-col gap-1 ml-4 mt-1">
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="w-full text-sm py-3 px-4 rounded-lg transition-all duration-300 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white flex flex-col gap-1"
                        >
                          <span className="font-semibold">{item.name}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-500">{item.description}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavbarMenuItem>
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActive(link.name);
                      setIsMenuOpen(false);
                    }}
                    className={`
                      w-full text-base py-4 px-5 rounded-xl transition-all duration-300 font-semibold
                      ${active === link.name
                        ? 'bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-950/50 dark:to-blue-900/30 text-blue-600 dark:text-blue-400 shadow-sm'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                </NavbarMenuItem>
              )}
            </div>
          ))}
          <NavbarMenuItem>
            <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white font-semibold shadow-lg shadow-blue-500/30 mt-4"
                endContent={<HiArrowRight className="text-lg" />}
                size="lg"
                radius="lg"
              >
                Get Started
              </Button>
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}

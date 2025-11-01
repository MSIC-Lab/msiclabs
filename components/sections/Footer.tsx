import Image from "next/image";
import React from "react";
import Logo from "@/public/msiclogo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-screen-xl p-6 lg:p-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center mb-6 group">
              <div className="relative mr-3 h-10 w-10 rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={Logo}
                  alt="MSIC Labs Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  MSIC Labs
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Innovation & Technology
                </span>
              </div>
            </a>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Transforming businesses through innovative technology solutions and expert digital consultancy.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold text-gray-900 uppercase tracking-wider dark:text-white">
              Company
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>
                <a href="/#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="/#works" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Our Work
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold text-gray-900 uppercase tracking-wider dark:text-white">
              Solutions
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li>
                <a href="/#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Web Development
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  E-Commerce
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="mb-6 text-sm font-bold text-gray-900 uppercase tracking-wider dark:text-white">
              Legal
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400 mb-8">
              <li>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Terms & Conditions
                </a>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              {[
                { icon: <FaFacebook />, href: "https://www.facebook.com/profile.php?id=61561512306189&mibextid=ZbWKwL", color: "hover:bg-blue-600" },
                { icon: <FaTwitter />, href: "https://x.com/msiclabs", color: "hover:bg-blue-400" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/msiclabs", color: "hover:bg-blue-700" },
                { icon: <FaGithub />, href: "https://github.com/MSIC-Lab", color: "hover:bg-gray-700" },
                { icon: <FaInstagram />, href: "#", color: "hover:bg-pink-600" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear}{" "}
              <a href="https://msiclabs.com" className="hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors">
                MSIC Labs™
              </a>
              . All Rights Reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Crafted with ❤️ in Sri Lanka
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

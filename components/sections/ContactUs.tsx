import Image from "next/image";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import ContactForm from "../ContactForm";

const Contact = () => {


  return (
    <>
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-start gap-10 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Contact Us
              </h2>
              <div className="mt-8">
                <ul className="space-y-6">
                  <li className="flex items-center">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <FaPhone className="text-black text-lg" />
                    </div>
                    <a href="javascript:void(0)" className="text-gray-700 text-sm ml-4">
                      <small className="block">Phone</small>
                      <strong>+94 714879783</strong>
                    </a>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <IoLogoWhatsapp className="text-black text-lg" />
                    </div>
                    <a href="javascript:void(0)" className="text-gray-700 text-sm ml-4">
                      <small className="block">Whatsapp</small>
                      <strong>+94 714879783</strong>
                    </a>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <IoMail className="text-black text-lg" />
                    </div>
                    <a href="javascript:void(0)" className="text-gray-700 text-sm ml-4">
                      <small className="block">Mail</small>
                      <strong>info@msiclabs.com</strong>
                    </a>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <IoLocation className="text-black text-lg" />
                    </div>
                    <a href="javascript:void(0)" className="text-gray-700 text-sm ml-4">
                      <small className="block">Location</small>
                      <strong>Matara, Sri Lanka</strong>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 ">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

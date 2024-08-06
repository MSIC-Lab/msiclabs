import Image from "next/image";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";

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
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 ">
            <form action="https://api.web3forms.com/submit" method="POST">
                <div className="mb-5">
                <input type="hidden" name="access_key" value="a75c7ed8-233e-4e93-ad78-64da2a243474" />
                <input type="hidden" name="from_name" value="msiclabs.com"></input>
                {/* <input type="hidden" name="redirect" value="/#"></input> */}
                <input type="checkbox" name="botcheck" id="" className="hidden" ></input>

                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div className="my-5">
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="first_name"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="sm:col-span-2 my-5">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-800 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

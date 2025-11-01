"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import ContactForm from "../ContactForm";

const Contact = () => {
  const message = "Hello MSIC Labs, I'm interested in learning more about your services.";
  
  const contactInfo = [
    {
      icon: <FaPhone className="text-blue-600 text-xl" />,
      label: "Phone",
      value: "+94 70 216 5052",
      href: "tel:+94702165052",
    },
    {
      icon: <IoLogoWhatsapp className="text-green-600 text-xl" />,
      label: "WhatsApp",
      value: "+94 70 216 5052",
      href: `https://wa.me/94702165052?text=${encodeURIComponent(message)}`,
      external: true,
    },
    {
      icon: <IoMail className="text-red-600 text-xl" />,
      label: "Email",
      value: "info@msiclabs.com",
      href: "mailto:info@msiclabs.com",
    },
    {
      icon: <IoLocation className="text-purple-600 text-xl" />,
      label: "Location",
      value: "Colombo, Sri Lanka",
      href: "https://www.google.com/maps/place/Colombo,+Sri+Lanka",
      external: true,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" id="contact">
      <div className="py-16 lg:py-24 px-4 mx-auto max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's start a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Have a project in mind or need expert consultation? Our team is ready to help you achieve your digital goals.
              </p>

              <ul className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <a
                      href={item.href}
                      {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="flex items-center p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300"
                    >
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="ml-4">
                        <small className="block text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {item.label}
                        </small>
                        <strong className="text-gray-900 dark:text-white text-base">
                          {item.value}
                        </strong>
                      </div>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl"
            >
              <h4 className="text-xl font-bold mb-4">Business Hours</h4>
              <div className="space-y-2 text-blue-50">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 dark:border-gray-700"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

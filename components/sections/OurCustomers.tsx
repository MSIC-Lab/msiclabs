"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const customers = [
  {
    name: "AKSEO",
    logo: "/customers/AKSEO.png",
  },
  {
    name: "Baby Ayu",
    logo: "/customers/babyAyu.png",
  },
  {
    name: "Dilshan",
    logo: "/customers/Dilshan.png",
  },
  {
    name: "JAK Car",
    logo: "/customers/jak car 1.png",
  },
  {
    name: "JAK Digi",
    logo: "/customers/jak digi1.png",
  },
  {
    name: "Jayasinghe",
    logo: "/customers/Jayasinghe.png",
  },
  {
    name: "Keerthi Shoe",
    logo: "/customers/KeerthiShoe.png",
  },
  {
    name: "Logo Color",
    logo: "/customers/logo-color.png",
  },
  {
    name: "Modern Logo",
    logo: "/customers/LOGOModern.png",
  },
  {
    name: "Sanima Roofing",
    logo: "/customers/sanima.png",
  },
  {
    name: "Matara Properties",
    logo: "/customers/MataraProperties.jpg",
  },
  {
    name: "Mihisaru",
    logo: "/customers/MIHISARU.png",
  },
  {
    name: "Royal",
    logo: "/customers/royal.png",
  },
  {
    name: "Royal Flash",
    logo: "/customers/royal_flash.png",
  },
  {
    name: "Saree",
    logo: "/customers/sAREE_.png",
  },
  {
    name: "Velora",
    logo: "/customers/Velora.png",
  },
  {
    name: "Vetmax",
    logo: "/customers/vetmax_logo-removebg-preview.png",
  },
];

const OurCustomers = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950" id="customers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 rounded-full">
            Our Customers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're proud to partner with innovative companies worldwide, delivering excellence in every project.
          </p>
        </motion.div>

        {/* Customer Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-purple-100/20 to-blue-100/20 dark:from-blue-950/10 dark:via-purple-950/10 dark:to-blue-950/10 rounded-3xl blur-3xl -z-10"></div>
          
          {/* Logos Container */}
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-8 md:p-12 shadow-xl">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {customers.map((customer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative flex items-center justify-center"
                >
                  <div className="relative flex items-center justify-center w-24 h-20 md:w-32 md:h-24">
                    <Image
                      src={customer.logo}
                      alt={customer.name}
                      width={150}
                      height={80}
                      className="object-contain max-h-full max-w-full transition-all duration-300 group-hover:scale-110 "
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Join <span className="font-bold text-blue-600 dark:text-blue-400">17+ companies</span> who trust us with their digital transformation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurCustomers;

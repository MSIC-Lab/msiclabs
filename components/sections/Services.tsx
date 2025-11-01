"use client";

import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../ServiceCard";

import { serviceData } from "@/components/data/serviceData";

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" id="services">
      <div className="py-16 px-4 mx-auto max-w-screen-xl sm:py-20 lg:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12 lg:mb-16 text-center"
        >
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="mt-4 mb-4 text-4xl lg:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg dark:text-gray-300 max-w-2xl mx-auto">
            We offer premier solutions to support your growth in the digital realm, 
            delivering excellence through innovation and expertise.
          </p>
        </motion.div>
        
        <div className="grid gap-6 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full max-w-sm"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

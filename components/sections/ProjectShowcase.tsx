"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import NumberTicker from "@/components/magicui/number-ticker";

// LUVIa ERP Section Component
export const LuviaERPSection = () => {
  const stats = [
    { label: "Active Users", value: 500, suffix: "+" },
    { label: "Modules", value: 15, suffix: "+" },
    { label: "Countries", value: 3, suffix: "" },
    { label: "Uptime", value: 99.9, suffix: "%" },
  ];

  const customerLogos = [
    "/logos/logo-google.svg",
    "/logos/logo-amazon.svg",
    "/logos/logo-netflix.svg",
    "/logos/logo-spotify.svg",
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-16 lg:py-24">
      <div className="max-w-screen-xl px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary-1 font-semibold text-sm uppercase tracking-wider">
            Our Flagship Product
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            LUVIa ERP
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Enterprise Resource Planning solution that transforms business operations
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image/Mockup Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl">
                <div className="bg-gray-200 dark:bg-gray-700 h-8 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                    <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded"></div>
                      <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Comprehensive Business Management
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              LUVIa ERP is our flagship enterprise resource planning solution designed
              to streamline and automate core business processes. From inventory
              management to financial reporting, LUVIa ERP provides a unified platform
              for complete business visibility and control.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Real-time Analytics</h4>
                  <p className="text-gray-600 dark:text-gray-400">Make data-driven decisions with live dashboards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Scalable Architecture</h4>
                  <p className="text-gray-600 dark:text-gray-400">Grows with your business needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Cloud-Based Solution</h4>
                  <p className="text-gray-600 dark:text-gray-400">Access your data anywhere, anytime</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.luviaerp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg transition-all duration-200"
            >
              Visit LUVIa ERP
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 lg:p-12 mb-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
                  <NumberTicker value={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Customer Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 font-semibold mb-8">
            Trusted by Leading Organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {customerLogos.map((logo, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src={logo}
                  alt={`Customer logo ${index + 1}`}
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Hotel Management System Section
export const HotelManagementSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16 lg:py-24">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-1 font-semibold text-sm uppercase tracking-wider">
              Industry Solution
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              MSIC Hotel Management System
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              A comprehensive hotel management solution designed to streamline operations
              from reservations to housekeeping. Our system empowers hotels to deliver
              exceptional guest experiences while maximizing operational efficiency.
            </p>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 mb-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    <NumberTicker value={3} />+ Hotels
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">Trusted by leading properties</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {[
                "Real-time room availability and booking management",
                "Integrated POS and billing system",
                "Guest relationship management (CRM)",
                "Housekeeping and maintenance scheduling",
                "Comprehensive reporting and analytics",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg transition-all duration-200">
              Request Demo
            </button>
          </motion.div>

          {/* Mockup Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Desktop Mockup */}
              <div className="relative border-8 border-gray-800 dark:border-gray-700 bg-gray-800 rounded-t-2xl shadow-2xl">
                <div className="bg-gray-700 h-8 rounded-t-xl flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
                      <div className="h-8 bg-blue-500 rounded w-32"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-32 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-lg"></div>
                      <div className="h-32 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg"></div>
                      <div className="h-32 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-lg"></div>
                    </div>
                    <div className="h-48 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
                  </div>
                </div>
              </div>
              <div className="relative bg-gray-800 dark:bg-gray-700 rounded-b-2xl h-6"></div>
              <div className="relative bg-gray-800 rounded-b-xl h-16 w-48 mx-auto"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Other Projects Grid Section
interface Project {
  imageSrc: string;
  altText: string;
  company: string;
  title: string;
  description: string;
  caseStudyLink: string;
  category: string;
}

export const OtherProjectsSection = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 lg:py-24">
      <div className="max-w-screen-xl px-4 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-1 font-semibold text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            Websites & Custom Systems
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Delivering innovative solutions across diverse industries
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <Image
                  src={project.imageSrc}
                  alt={project.altText}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-primary-1 font-semibold mb-2">{project.company}</p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                {project.caseStudyLink !== "#" ? (
                  <a
                    href={project.caseStudyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
                  >
                    View Project
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ) : (
                  <span className="inline-flex items-center text-gray-400 dark:text-gray-500 font-semibold">
                    Case Study
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

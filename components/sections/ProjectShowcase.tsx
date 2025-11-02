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
    <section id="luvia-erp" className="bg-white dark:bg-gray-900 py-16 lg:py-24 scroll-mt-20">
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
          {/* Video/Mockup Side */}
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
                <div className="aspect-video">
                  <iframe
                    src="https://drive.google.com/file/d/1Z_wv7mELhK1Aaxp4e2fAyalCpBdR9r7g/preview"
                    className="w-full h-full"
                    allow="autoplay"
                    allowFullScreen
                  ></iframe>
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
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </section>
  );
};

// Hotel Management System Section
export const HotelManagementSection = () => {
  return (
    <section id="hotel-management" className="bg-gray-50 dark:bg-gray-800 py-16 lg:py-24 scroll-mt-20">
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

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hotel hero.png"
                alt="MSIC Hotel Management System"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient for better visual */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
            </div>
            
            {/* 3+ Hotels Badge - After Image */}
            <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    <NumberTicker value={3} />+ Hotels
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Trusted by leading properties</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// MSIC Chatbot Section
export const MSICChatbotSection = () => {
  const features = [
    {
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities for understanding user intent",
      icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
    },
    {
      title: "24/7 Availability",
      description: "Round-the-clock customer support without human intervention",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Multi-Platform Integration",
      description: "Seamlessly integrates with websites, mobile apps, and messaging platforms",
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    },
    {
      title: "Customizable Responses",
      description: "Tailor chatbot responses to match your brand voice and requirements",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    }
  ];

  return (
    <section id="msic-chatbot" className="bg-white dark:bg-gray-900 py-16 lg:py-24 scroll-mt-20">
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
            AI-Powered Solution
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
            MSIC Chatbot
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Intelligent conversational AI that enhances customer engagement and automates support
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Chatbot Mockup Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-6 shadow-2xl">
              {/* Chat Window */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">MSIC Assistant</h4>
                    <p className="text-purple-100 text-sm">Online</p>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                </div>

                {/* Chat Messages */}
                <div className="p-6 space-y-4 h-96 overflow-y-auto bg-gray-50 dark:bg-gray-900">
                  {/* Bot Message */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                      </svg>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl rounded-tl-none p-4 shadow max-w-xs">
                      <p className="text-gray-800 dark:text-gray-200">Hello! How can I help you today?</p>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex gap-3 justify-end">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl rounded-tr-none p-4 shadow max-w-xs">
                      <p className="text-white">What services do you offer?</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Bot Message */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                      </svg>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl rounded-tl-none p-4 shadow max-w-xs">
                      <p className="text-gray-800 dark:text-gray-200 mb-3">We offer a wide range of services including:</p>
                      <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                        <li>• Web Development</li>
                        <li>• Mobile App Development</li>
                        <li>• Custom ERP Solutions</li>
                        <li>• AI & Machine Learning</li>
                      </ul>
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      </svg>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl rounded-tl-none p-4 shadow">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      disabled
                    />
                    <button className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
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
              Transform Customer Interactions with AI
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              MSIC Chatbot leverages cutting-edge artificial intelligence to provide instant,
              accurate responses to customer inquiries. Our chatbot learns from every interaction,
              continuously improving its ability to serve your customers better.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                  <NumberTicker value={95} />%
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Customer Satisfaction</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Based on user feedback</p>
                </div>
              </div>
            </div>

            <button className="px-6 py-3 text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg transition-all duration-200">
              Request Demo
            </button>
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
    <section id="other-projects" className="bg-white dark:bg-gray-900 py-16 lg:py-24 scroll-mt-20">
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

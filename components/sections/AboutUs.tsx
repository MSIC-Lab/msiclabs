"use client";

import React from "react";
import { motion } from "framer-motion";
import Social from "./Social";
import OurTeam from "../OurTeam";
import { GoGoal } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import FadeIn from "@/components/ui/transition/fade";
import { vision, mission, aboutUs } from "@/components/data/aboutUsData";

const AboutUs: React.FC = () => {
  return (
    <>
      <section id="about" className="relative bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 py-16 lg:py-24">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center py-2 px-4 mb-8 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
              <span className="ml-2">Crafting Tomorrow's Tech, Today</span>
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              About MSIC Labs
            </h1>
            
            <p className="mb-12 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-300 leading-relaxed">
              {aboutUs}
            </p>
          </motion.div>

          <FadeIn opacity={0.8}>
            <div className="grid gap-8 px-4 mx-auto max-w-screen-xl lg:grid-cols-2 lg:px-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative flex flex-col justify-center items-center space-y-6 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 w-full">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaEye className="text-4xl text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Our Vision
                  </h2>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    {vision}
                  </p>
                  
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-6 mx-auto"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative flex flex-col justify-center items-center space-y-6 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 w-full">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <GoGoal className="text-4xl text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Our Mission
                  </h2>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    {mission}
                  </p>
                  
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mt-6 mx-auto"></div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>
      {/* <OurTeam /> */}
    </>
  );
};

export default AboutUs;

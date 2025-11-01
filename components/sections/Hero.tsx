"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import NumberTicker from "@/components/magicui/number-ticker";
import FadeIn from "../transitions/fadein";
import GetStarted from "../getStarted";
import { Suspense } from "react";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <section className="relative bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative grid justify-center items-center max-w-screen-xl px-4 py-16 mx-auto lg:gap-12 xl:gap-16 lg:py-24 lg:grid-cols-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mr-auto place-self-center lg:col-span-7"
          >
            <FadeIn
              text="Crafting Tomorrow's Tech, Today!"
              className="max-w-2xl mb-3 text-lg font-semibold tracking-wide leading-none md:text-xl text-blue-600 dark:text-blue-400"
            />
            
            <h1 className="max-w-2xl mb-6 text-5xl font-extrabold tracking-tight leading-tight md:text-6xl xl:text-7xl text-gray-900 dark:text-white">
              MSIC Labs
            </h1>
            
            <p className="max-w-2xl mb-8 text-lg leading-relaxed text-gray-600 lg:mb-10 md:text-xl dark:text-gray-300">
              We breathe life into your ideas through groundbreaking technology solutions.
              Beyond digital tools—we craft impactful solutions that unlock transformative digital potential.
            </p>

            <GetStarted />

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 grid-cols-3 dark:text-white">
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    <NumberTicker value={20} />+
                  </dt>
                  <dd className="text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
                    Successful Projects
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center border-x border-gray-200 dark:border-gray-700">
                  <dt className="mb-2 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    <NumberTicker value={15} />+
                  </dt>
                  <dd className="text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
                    Trusted Clients
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    <NumberTicker value={3} />+
                  </dt>
                  <dd className="text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
                    Countries Spanned
                  </dd>
                </div>
              </dl>
            </motion.div>
          </motion.div>
          
          <Suspense
            fallback={
              <div className="lg:mt-0 lg:col-span-5 flex justify-center items-center">
                <div className="animate-pulse bg-gray-200 dark:bg-gray-700 w-full h-96 rounded-3xl"></div>
              </div>
            }
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:mt-0 lg:col-span-5 flex justify-center items-center"
            >
              <div className="relative">
                {/* Decorative gradient background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-20 blur-2xl"></div>
                <Image
                  src="/hero.png"
                  alt="MSIC Labs Innovation"
                  width={500}
                  height={500}
                  priority
                  placeholder="blur"
                  blurDataURL="/placeholder.png"
                  className="relative drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default Hero;


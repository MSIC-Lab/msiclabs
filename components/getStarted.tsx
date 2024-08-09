"use client";
import React from "react";
import { motion } from "framer-motion";

export default function GetStarted() {
  return (
    <a
      href="#"
      className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-1 hover:bg-primary-2 focus:ring-1 focus:ring-primary-200 dark:focus:ring-primary-900"
    >
      Explore More
      <motion.div
        className="w-5 h-5 ml-2 -mr-1"
        initial={{ x: 0 }}
        animate={{ x: [0, -5, 0] }} 
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
      >
        <motion.svg
          className="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </motion.svg>
      </motion.div>
    </a>
  );
}

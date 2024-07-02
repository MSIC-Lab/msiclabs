"use client";
import React from "react";
import { motion } from "framer-motion";

const randomDelay = () => Math.random() * 5;

export const V29 = () => {
  return (
    <svg
      width="68"
      height="312"
      viewBox="0 0 68 312"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="shineGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="50%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.rect
        x="0"
        y="0"
        width="68"
        height="312"
        fill="url(#shineGradient)"
        initial={{ y: -312 }}
        animate={{ y: 312 }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: randomDelay(),
        }}
      />
      <motion.path
        d="M1 1C44.6667 48.5 73.2003 203 66.0003 311"
        stroke="url(#paint0_linear_103_176)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 0.2, 0,0.8,0,1,0] }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: randomDelay(),
        }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_103_176"
          x1="37.4225"
          y1="24"
          x2="37.4225"
          y2="311"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3D1768" />
          <stop offset="1" stopColor="#3D1768" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// Repeat the same for other components
export const V25 = () => {
  return (
    <svg
      width="124"
      height="279"
      viewBox="0 0 124 279"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M123 0.5C79.3333 48 -6.2 170 1 278"
        stroke="url(#paint0_linear_103_172)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: randomDelay(),
        }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_103_172"
          x1="61.7863"
          y1="0.5"
          x2="61.7863"
          y2="278"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3D1768" />
          <stop offset="1" stopColor="#3D1768" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const V26 = () => {
  return (
    <svg
      width="72"
      height="271"
      viewBox="0 0 72 271"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M71.5 0.5C27.8333 48 -5.20008 162.5 1.99992 270.5"
        stroke="url(#paint0_linear_103_173)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: randomDelay(),
        }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_103_173"
          x1="36.2556"
          y1="0.5"
          x2="36.2556"
          y2="270.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3D1768" />
          <stop offset="1" stopColor="#3D1768" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const V27 = () => {
  return (
    <svg
      width="36"
      height="293"
      viewBox="0 0 36 293"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M35 1C15.9999 67 0.500002 238.5 0.5 292.5"
        stroke="url(#paint0_linear_103_174)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: randomDelay(),
        }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_103_174"
          x1="9.75"
          y1="18"
          x2="9.75"
          y2="289"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3D1768" />
          <stop offset="1" stopColor="#3D1768" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const V28 = () => {
  return (
    <svg
      width="119"
      height="302"
      viewBox="0 0 119 302"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M0.5 1C44.1667 48.5 125.2 193.5 118 301.5"
        stroke="url(#paint0_linear_103_175)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0] }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: randomDelay(),
        }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_103_175"
          x1="64.2522"
          y1="26"
          x2="64.2522"
          y2="301.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3D1768" />
          <stop offset="1" stopColor="#3D1768" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const V30 = () => {
  return (
    <svg
      width="23"
      height="314"
      viewBox="0 0 23 314"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M1 1C20.2534 73.3321 22 254.819 22 314"
        stroke="url(#paint0_linear_103_177)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 0.5,1,0] }}
        transition={{
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: randomDelay(),
        }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_103_177"
          x1="24"
          y1="27"
          x2="24"
          y2="324"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3D1768" />
          <stop offset="1" stopColor="#3D1768" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

"use client";
import React from "react";
import { motion } from "framer-motion";
import {Reacticon,Jsicon,Expressicon,Nodeicon,Cssicon,Htmlicon} from './icons'

// Common rotating animation configuration
const rotatingAnimation = {
  animate: {
    rotateX: [0, 16, -6, 26, 0],
    rotateY: [0, 10, 0, -18, 0], // Rotate around the Z-axis
  },
  transition: {
    duration: 20, // Adjust for speed of rotation around the Z-axis
    ease: "linear",
    repeat: Infinity,
    repeatType: "loop",
  },
};

const ringStyle = {
  //   display: "flex",
  //   flexDirection:"column",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   perspective: "1000px",
  //   transformStyle: "preserve-3d",
};

// Component for E21 with rotating effect
export const E21 = ({ styles }) => {
  return (
    <motion.div
      style={{
        ...styles,
      }}
      {...rotatingAnimation}
      className={`relative lg:w-[851px] h-[239px] md:w-[451px] w-[300px] `}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 881 269"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={ringStyle}
      >
        <path
          d="M880.5 134.5C880.5 152.832 868.33 170.393 846.091 186.448C823.862 202.494 791.665 216.966 751.835 229.128C672.179 253.449 562.105 268.5 440.5 268.5C318.895 268.5 208.821 253.449 129.165 229.128C89.3346 216.966 57.1376 202.494 34.9093 186.448C12.6695 170.393 0.5 152.832 0.5 134.5C0.5 116.168 12.6695 98.6067 34.9093 82.5519C57.1376 66.5055 89.3346 52.0341 129.165 39.8723C208.821 15.5507 318.895 0.5 440.5 0.5C562.105 0.5 672.179 15.5507 751.835 39.8723C791.665 52.0341 823.862 66.5055 846.091 82.5519C868.33 98.6067 880.5 116.168 880.5 134.5Z"
          stroke="url(#paint0_linear_103_207)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_103_207"
            x1="440.5"
            y1="0"
            x2="440.5"
            y2="269"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopOpacity="0" />
            <stop offset="0.479167" stopColor="#763CAC" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute top-[25%] left-8">
      <Reacticon></Reacticon>
      </div>

    </motion.div>
  );
};

// Component for E22 with rotating effect
export const E22 = ({ styles }) => {
  return (
    <motion.div
      style={{
        ...styles,
      }}
      className={` lg:w-[791px] h-[239px] md:w-[564px] w-[320px] `}
      animate={{
        rotateX: [0, 30, -26, 18, 0],
        rotateY: [0, 15, 0, -20, 0], // Rotate around the Z-axis
      }}
      transition={{
        duration: 18, // Adjust for speed of rotation around the Z-axis
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 764 269"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={ringStyle}
      >
        <path
          d="M763.5 134.5C763.5 152.863 752.931 170.427 733.661 186.469C714.393 202.509 686.482 216.975 651.949 229.134C582.886 253.451 487.445 268.5 382 268.5C276.555 268.5 181.114 253.451 112.051 229.134C77.5179 216.975 49.6071 202.509 30.3393 186.469C11.0687 170.427 0.5 152.863 0.5 134.5C0.5 116.137 11.0687 98.5726 30.3393 82.5308C49.6071 66.4915 77.5179 52.0248 112.051 39.8658C181.114 15.5493 276.555 0.5 382 0.5C487.445 0.5 582.886 15.5493 651.949 39.8658C686.482 52.0248 714.393 66.4915 733.661 82.5308C752.931 98.5726 763.5 116.137 763.5 134.5Z"
          stroke="url(#paint0_linear_103_208)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_103_208"
            x1="382"
            y1="0"
            x2="382"
            y2="269"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopOpacity="0" />
            <stop offset="0.479167" stopColor="#763CAC" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute top-[15%] right-20">
      <Nodeicon></Nodeicon>
      </div>
    </motion.div>
  );
};

// Component for E23 with rotating effect
export const E23 = ({ styles }) => {
  return (
    <motion.div
      style={{
        ...styles,
      }}
      className={`max-w-screen lg:w-[951px] h-[259px] md:w-[595px] w-[330px] `}
      animate={{
        rotateX: [0, 36, -36, 36, 0],
        rotateY: [0, 20, 0, -20, 0], 
     
      }}
      transition={{
        duration: 12, // Adjust for speed of rotation around the Z-axis
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 695 299"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={ringStyle}
      >
        <path
          d="M694.5 134.5C694.5 152.882 684.877 170.45 667.354 186.485C649.831 202.52 624.448 216.983 593.039 229.14C530.225 253.452 443.414 268.5 347.5 268.5C251.586 268.5 164.775 253.452 101.961 229.14C70.5521 216.983 45.1686 202.52 27.6458 186.485C10.1234 170.45 0.5 152.882 0.5 134.5C0.5 116.118 10.1234 98.55 27.6458 82.5154C45.1686 66.4805 70.5521 52.0172 101.961 39.8604C164.775 15.5481 251.586 0.5 347.5 0.5C443.414 0.5 530.225 15.5481 593.039 39.8604C624.448 52.0172 649.831 66.4805 667.354 82.5154C684.877 98.55 694.5 116.118 694.5 134.5Z"
          stroke="url(#paint0_linear_103_209)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_103_209"
            x1="347.5"
            y1="0"
            x2="347.5"
            y2="269"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopOpacity="0" />
            <stop offset="0.479167" stopColor="#763CAC" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute left-[50%] top-48 ">
      <Expressicon></Expressicon>
      </div>
      <div className="absolute top-[10%] left-[25%]">
      <Jsicon></Jsicon>
      </div>
      <div className="absolute top-[15%] md:top-[5%] left-[80%] md:left-[70%]">
      <Htmlicon></Htmlicon>
      </div>
    </motion.div>
  );
};
export const E25 = ({ styles }) => {
  return (
    <motion.div
      style={{
        ...styles,
      }}
      className={`  h-[100px] md:w-[120px] w-[120px] `}
      animate={{
        rotateX: [0, 56, -76, 56, 0],
        rotateY: [0, 30, 0, -30, 0],
      }}
      transition={{
        duration: 12,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <svg
className="h-full w-full"
        viewBox="0 0 295 164"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M294.5 82C294.5 104.38 278.177 124.746 251.555 139.546C224.95 154.336 188.162 163.5 147.5 163.5C106.838 163.5 70.0495 154.336 43.4447 139.546C16.823 124.746 0.5 104.38 0.5 82C0.5 59.6202 16.823 39.2541 43.4447 24.4543C70.0495 9.66376 106.838 0.5 147.5 0.5C188.162 0.5 224.95 9.66376 251.555 24.4543C278.177 39.2541 294.5 59.6202 294.5 82Z"
          stroke="url(#paint0_linear_103_212)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_103_212"
            x1="147.5"
            y1="0"
            x2="147.5"
            y2="164"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.197917" stopOpacity="0" />
            <stop offset="1" stopColor="#763CAC" />
          </linearGradient>
        </defs>
      </svg>





    </motion.div>
  );
};
export const E24 = ({ styles }) => {
  return (
    <motion.div
      style={{
        ...styles,
      }}
      className={` lg:w-[100px] h-[100px] md:w-[100px] w-[1000px] `}
      animate={{
        rotateX: [0, 46, -36, 30, 0],
        rotateY: [0, 20, 0, -20, 0],
       
      }}
      transition={{
        duration: 8, // Adjust for speed of rotation around the Z-axis
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <svg
    className="h-full w-full"
        viewBox="0 0 306 275"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M305.5 137.5C305.5 213.114 237.275 274.5 153 274.5C68.725 274.5 0.5 213.114 0.5 137.5C0.5 61.8859 68.725 0.5 153 0.5C237.275 0.5 305.5 61.8859 305.5 137.5Z"
          stroke="url(#paint0_linear_103_211)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_103_211"
            x1="153"
            y1="0"
            x2="153"
            y2="275"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.197917" stopOpacity="0" />
            <stop offset="1" stopColor="#763CAC" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export const Logoback = () => {
  return (
    <>
      <svg
        width="80"
        height="80"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="90" cy="90" r="90" fill="url(#paint0_linear_103_206)" />
        <defs>
          <linearGradient
            id="paint0_linear_103_206"
            x1="90"
            y1="0"
            x2="90"
            y2="180"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#301080" stopOpacity="0.6" />
            <stop offset="1" stopColor="#7840AD" stopOpacity="0.36" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

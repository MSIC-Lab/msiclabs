"use client";
import React from "react";
import { delay, motion } from "framer-motion";
import './styles.css'; // Add this line to include your CSS file

const text = "3D ROLLUP Lorem ipsum dolor sit amet.";

const letterAnimation = {
  initial: {
    rotateX: 100,
    y:10,
    opacity: 0,
  },
  animate: {
    rotateX: 0,
    y:0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const containerAnimation = {
  animate: {
    transition: {
      staggerChildren: 0.01,
    },
  },
};

const RollUpLetters = ({text,className}) => {
  return (
    <motion.div
      variants={containerAnimation}
      initial="initial"
      animate="animate"
      className={`${className}`}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={char === " " ? {} : letterAnimation}
          className="letter"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default RollUpLetters;

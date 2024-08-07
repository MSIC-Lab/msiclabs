"use client";
import React from 'react';
import { motion } from "framer-motion";

const letterAnimation = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const containerAnimation = (delay) => ({
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: delay,
    },
  },
});

const FadeIn = ({ className, text, delay = 0 }) => {
  return (
    <motion.div
      variants={containerAnimation(delay)}
      initial="initial"
      animate="animate"
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterAnimation}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default FadeIn;

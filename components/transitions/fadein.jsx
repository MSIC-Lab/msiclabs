"use client";
import React,{useState,useEffect} from 'react';
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
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <motion.div
      variants={containerAnimation(delay)}
      initial="initial"
      animate={hasMounted?"animate":"initial"}
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

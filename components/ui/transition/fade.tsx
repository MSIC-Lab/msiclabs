"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  opacity?: number;
  offset?: string;
};

const Fade = ({ children,opacity,}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset:  ["0.5 0.8", "0.5 0.5"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [opacity?opacity:0.1, 1]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [100 ,0]);


  const varients = {    
    rest: { 
        opacity: 0.2, 
        y:100
    },
    animate: {
            opacity: 1,
            y:0,
            transition:{
                duration:0.5,
                type:"tween"
            }
          }
  };


  return (
    <motion.div
    initial="rest"
    whileInView="animate"
        variants={varients}
    >
      {children}
    </motion.div>
  );
};

export default Fade;

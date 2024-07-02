"use client";
import Image from "next/image";
import { useRef } from "react";

import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
  } from "framer-motion";
import { wrap } from "@motionone/utils";

const TECHNOLOGIES = [
  "react",
  "nextjs",
  "nodejs",
  "mongodb",
  "java",
  "spring",
  "flutter",
  "wordpress",
  "woo",
  "react",
  "nextjs",
  "nodejs",
  "mongodb",
  "java",
  "spring",
  "flutter",
  "wordpress",
  "woo",
  "react",
  "nextjs",
  "nodejs",
  "mongodb",
  "java",
  "spring",
  "flutter",
  "wordpress",
  "woo",

];


export function Technologies() {

    const baseVelocity = 5;
  const baseX = useMotionValue(10);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy *0.1* velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });



  return (
    // <Fade>
      <section className="">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center overflow-hidden">
            <motion.div className="flex gap-20" style={{ x }}>
              {TECHNOLOGIES.map((logo, key) => (
                <Image
                  key={key}
                  alt={logo}
                  width={30} // Adjust width and height as needed
                  height={30}
                  className="md:w-14 w-10"
                  src={`/logos/logo-${logo}.svg`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    // </Fade>
  );
}

export default Technologies;

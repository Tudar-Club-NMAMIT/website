import React, { useRef } from "react";
import Image from "next/image";
import "./Hero.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-70%", "150%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center">
      <motion.div
        style={{ y: textY }}
        className="opacity-100 font-bold relative z-30">
        <Image
          src="/src/tudar-text-1.png"
          alt="Tudar"
          width={420}
          height={250}></Image>
      </motion.div>

      <motion.div
        className="min-h-screen bg-contain object-center absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2) 100px), url(https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/v1/Tudar/h67xebdfxglmsx3l8f8i)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />

      <div
        className="absolute inset-0 z-20 "
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 100px ), url(https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/v1/Tudar/cujh3cq4rorvbibsdbgl)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};

export default Hero;

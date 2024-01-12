"use client"
import { useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";

const Blog = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

  return (
    <section ref={targetRef} className="relative h-[80vh] bg-gray-900">
      <h1 className="flex justify-center items-center text-[#afa18f] text-4xl lg:text-6xl font-bold">
        Tulu Chronicles
      </h1>
      <br />
      <h1 className="flex justify-center items-center text-[#fefefe] text-lg md:text-3xl lg:text-5xl font-semibold">
        Where Tradition Meets the Digital Age
      </h1>
      <Card/>
    </section>
  );
};

export default Blog;

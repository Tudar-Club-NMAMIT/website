"use client"
import React, { useEffect, useState } from "react";
 // Make sure to import your Tailwind CSS or additional styles

const Parallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div >
      {/* Parallax Image */}
      <div
        className="min-h-screen z-1 flex justify-center items-center bg-kola-img  bg-cover bg-center relative "
        style={{ transform: `translateY(${scrollY * 0.6}px)` }} // Adjust the multiplier for the desired parallax effect
      >
        <h1 className="font-extrabold text-6xl  text-center text-white">TUDAR</h1>
      </div>

      {/* Content Section */}
      <div className="p-10 relative z-10 flex flex-col justify-center">
        <div><h2 className=" text-white font-bold text-4xl">Sample Section</h2></div>
        <div>
        <p className="text-white text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
          aliquam, reiciendis quibusdam dolores necessitatibus odit, eveniet, ea
          asperiores ullam qui illo perspiciatis omnis ut itaque animi
          accusantium? Itaque, harum illo. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. 
        </p>
        </div>
      </div>
    </div>
  );
};

export default Parallax;

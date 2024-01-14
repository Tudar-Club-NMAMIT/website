"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./Events.css";

const ShuffleHero = () => {
  return (
    <section className="bg-[#000] z-30 m-4 w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-8xl mx-auto">
      <div className=" m-3 lg:m-6 flex-col  flex gap-4 ">
        <h2 className="event-heading text-3xl lg:text-5xl font-bold">
          Glimpses of our Events.
        </h2>
        <p className="text-2xl font-bold  text-justify text-gray-400">
          TUDAR Club has been a catalyst for unforgettable events that celebrate
          Tulu culture. From engaging workshops and language learning sessions
          to lively cultural showcases, each event is crafted to illuminate the
          beauty of Tulu traditions.
        </p>
        <button className="fancy">
          <span className="top-key"></span>
          <span className="text">Know More</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
      </div>

      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: any) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/src/events/DSC_0263.JPG",
  },
  {
    id: 2,
    src: "/src/events/MVB09703.JPG",
  },
  {
    id: 3,
    src: "/src/events/MVB09703.JPG",
  },
  {
    id: 4,
    src: "/src/events/MVB08973.JPG",
  },
  {
    id: 5,
    src: "/src/events/MVB09677.JPG",
  },
  {
    id: 6,
    src: "/src/events/MVB09688.JPG",
  },
  {
    id: 7,
    src: "/src/events/DSC_0263.JPG",
  },
  {
    id: 8,
    src: "/src/events/MVB08939.JPG",
  },
  {
    id: 9,
    src: "/src/events/MVB09688.JPG",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq: any) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className=" rounded-md w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<null | NodeJS.Timeout>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current || 0);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 h-[350px] lg:h-[450px] gap-1 ">
      {squares.map((sq: any) => sq)}
    </div>
  );
};

export default ShuffleHero;

"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./Events.css";
import Link from "next/link";

const ShuffleHero = () => {
  return (
    <section className="bg-[#000] z-30 m-4 w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-8xl mx-auto">
      <div className=" m-3 lg:m-6 flex-col  flex gap-4 ">
        <h1 className="event-heading text-3xl lg:text-5xl font-bold">
          Glimpses of our Events.
        </h1>
        <p className="text-2xl font-bold  text-justify text-gray-400">
          TUDAR Club has been a catalyst for unforgettable events that celebrate
          Tulu culture. From engaging workshops and language learning sessions
          to lively cultural showcases, each event is crafted to illuminate the
          beauty of Tulu traditions.
        </p>
        <Link href="/website/Events">
          <button className="fancy">
            <span className="top-key"></span>
            <span className="text">Know More</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </button>
        </Link>
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
    src: "https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/cbmtx2mublivnejdfbnx",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/v1/Tudar/m87auoctdpfoyjpqvb5k",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/v1/Tudar/auio5zajwejyotzjkcf2",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/v1/Tudar/aakj3gs57n1yrwnqsazl",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/v1/Tudar/eki3madd4ebwywut1xbr",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/v1/Tudar/k95ulprkudilviigfqwt",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/v1/Tudar/g3tpoaswcn2kml5lsh4f",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/v1/Tudar/ngok6vook4qjmjwk2kdw",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/v1/Tudar/i8plm83ph7rbrzolnpai",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq: any) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className=" rounded-md w-full h-auto"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
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
    <div className="grid grid-cols-3 grid-rows-3  h-[350px] lg:h-[450px] gap-1 ">
      {squares.map((sq: any) => sq)}
    </div>
  );
};

export default ShuffleHero;

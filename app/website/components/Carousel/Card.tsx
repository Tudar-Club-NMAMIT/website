"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Card() {
  return (
    <div className="h-[60vh] rounded-md flex flex-col bg-none items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    name: "pili-vesha",
    img: "https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/v1/Tudar/m87auoctdpfoyjpqvb5k",
  },
  {
    name: "kalanjali",
    img: "https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/v1/Tudar/auio5zajwejyotzjkcf2",
  },
  {
    name: "guests",
    img: "https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/v1/Tudar/aakj3gs57n1yrwnqsazl",
  },
  {
    name: "lamp",
    img: "https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/v1/Tudar/eki3madd4ebwywut1xbr",
  },
  {
    name: "rangoli",
    img: "https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/v1/Tudar/k95ulprkudilviigfqwt",
  },
];

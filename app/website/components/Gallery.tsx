import React from "react";
import Image from "next/image";
export const Gallery = () => {
  return (
    <div>
      <div className=" lg:flex flex-row-reverse justify-center gap-2 mt-40 md:block">
        <div className="collage_img ">
          <Image
            src="/grp.jpg"
            className="rounded-lg"
            alt="hbd"
            width={700}
            height={1000}
          ></Image>
        </div>
        <div className="flex-col justify-center items-center h-full my-auto">
          <h1 className="text-4xl">About Us</h1>
          <h2 className="max-w-lg overflow-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            sunt recusandae nihil mollitia officia nobis aliquid dolor labore.
            Unde nesciunt nulla, alias perferendis nisi neque eaque laborum eos
            cum officiis.
          </h2>
        </div>
      </div>
      <div className="lg:flex justify-center gap-2 my-40  md:block">
        <div className="collage_img ">
          <Image
            src="/grp.jpg"
            className="rounded-lg"
            alt="hbd"
            width={700}
            height={1000}
          ></Image>
        </div>
        <div className="flex-col justify-center items-center h-full my-auto ">
          <h1 className="text-4xl">About Us</h1>
          <h2 className="max-w-lg overflow-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            sunt recusandae nihil mollitia officia nobis aliquid dolor labore.
            Unde nesciunt nulla, alias perferendis nisi neque eaque laborum eos
            cum officiis.
          </h2>
        </div>
      </div>
    </div>
  );
};

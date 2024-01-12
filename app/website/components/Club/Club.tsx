"use client";
import Image from "next/image";
import { MaskContainer } from "../ui/svg-mask-effect";
import "./Club.css";
export default function Club() {
  return (
    <div className="flex pt-12 px-10 lg:px-14  items-center justify-center bg-hero md:h-[80vh] overflow-hidden">
      <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full lg:pr-10">
          <MaskContainer
            revealText={
              <div>
                <p className=" text-gray-400 text-justify font-bold text-2xl">
                  At TUDAR Club, we are on a mission to celebrate, preserve, and
                  propagate the vibrant heritage of the Tulu language. Rooted in
                  the cultural mosaic of coastal Karnataka, Tulu is a language
                  that encapsulates centuries of tradition, folklore, and a
                  unique identity.
                </p>
              </div>
            }
            className="h-[25rem] ">
            Materegla solmelu to celebrate, preserve, and propagate the vibrant
            heritage of the Tulu language. Rooted in the cultural mosaic of
            coastal Karnataka, Tulu is a language that encapsulates centuries of
            tradition, folklore, and a unique identity.
          </MaskContainer>
        </div>
        <div className="w-full md:w-1/2 flex justify-center ">
          <Image width={250} height={300} src="/src/logo.png" alt="" />
        </div>
      </div>
    </div>
  );
}

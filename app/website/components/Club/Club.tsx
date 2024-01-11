"use client";
import Image from "next/image";
import { MaskContainer } from "../ui/svg-mask-effect";
import "./Club.css";
export default function Club() {
  return (
    // <div className="flex pt-12 px-8 md:px-8  items-center justify-center bg-hero md:h-screen overflow-hidden">
    //   <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
    //     <div className="w-full md:w-1/2 lg:pr-10">
    //       <h1 className=" m-6 font-bold club-heading text-3xl lg:text-5xl text-left text-[#afa18f] ">
    //         Bridging Cultures, Celebrating Tulu Heritage
    //       </h1>
    //       <h3 className="m-6  md:mt-10 text-md lg:text-xl text-justify  text-white opacity-50  ">
    //         At TUDAR Club, we are on a mission to celebrate, preserve, and
    //         propagate the vibrant heritage of the Tulu language. Rooted in the
    //         cultural mosaic of coastal Karnataka, Tulu is a language that
    //         encapsulates centuries of tradition, folklore, and a unique
    //         identity.
    //       </h3>
    //     </div>
    //     <div className="w-full md:w-1/2 flex justify-center md:justify-end">
    //       <Image width={250} height={300} src="/src/logo.png" alt="" />
    //     </div>
    //   </div>
    // </div>
    <div className="flex pt-12 px-14  items-center justify-center bg-hero md:h-screen overflow-hidden">
      <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full md:w-1/2 lg:pr-10">
          <MaskContainer
            revealText={
              <p className="  text-white text-justify font-bold text-2xl">
                At TUDAR Club, we are on a mission to celebrate, preserve, and
                propagate the vibrant heritage of the Tulu language. Rooted in
                the cultural mosaic of coastal Karnataka, Tulu is a language
                that encapsulates centuries of tradition, folklore, and a unique
                identity.
              </p>
            }
            className="h-[40rem] ">
            Materegla solmelu to celebrate, preserve, and
            propagate the vibrant heritage of the Tulu language. Rooted in the
            cultural mosaic of coastal Karnataka, Tulu is a language that
            encapsulates centuries of tradition, folklore, and a unique
            identity.
          </MaskContainer>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image width={250} height={300} src="/src/logo.png" alt="" />
        </div>
      </div>
    </div>
  );
}

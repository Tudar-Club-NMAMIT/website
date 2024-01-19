"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] font-sans w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          ತುಡರ್
        </h1>
        <h3 className="relative z-10 text-lg md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          ತುಳು ಟ್ರಾನ್ಸ್ಲೇಟರ್ ಬೇಗೊಡು ಬರ್ರೆಗುಂಡು
        </h3>
      </div>
      <BackgroundBeams />
    </div>
  );
}


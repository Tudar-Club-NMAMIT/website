import React from "react";
import Image from "next/image";

const registerPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-screen pt-20 sm:p-5 sm:pt-24 flex justify-center items-center">
      <div className="w-full h-full rounded-xl md:border-r-2 border-gray-300 flex max-w-[400px] lg:max-w-[1200px] sm:bg-white">
        <div className="hidden lg:flex rounded-l-xl  bg-[#CA0000] w-1/2 justify-center items-center relative">
          <Image
          fill
          src="https://res.cloudinary.com/dixgnlrzf/image/upload/v1726509132/crumpled-paper-texture-12_1_av4ysh.png"
          alt="am i here"
          className="w-full h-full absolute z-10 object-cover mix-blend-multiply"/>
          <Image
            width={150}
            height={200}
            src="https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/v1/Tudar/klqbxupxjh776obmsubz"
            // src="https://asset.cloudinary.com/dixgnlrzf/675447ba4236f399cd2d860b2c5879bd"
            alt=""
            className="pr-0 md:pr-4 m-0 z-20"
          />
        </div>
        <div className="bg-white sm:rounded-xl text-black md:rounded-r-xl  w-full lg:w-1/2 invert sm:invert-0">
          {children}
        </div>
      </div>
    </main>
  );
};

export default registerPageLayout;

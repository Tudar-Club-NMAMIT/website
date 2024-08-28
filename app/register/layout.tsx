import React from "react";
import Image from "next/image";

const registerPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-screen pt-20 sm:p-5 sm:pt-24 flex justify-center items-center">
      <div className="w-full h-full rounded-xl md:border-r-2 border-gray-300 flex max-w-[400px] lg:max-w-[1000px] sm:bg-white">
        <div className="hidden lg:flex rounded-l-xl  bg-red-900 w-1/2 justify-center items-center">
          <Image
            width={150}
            height={200}
            src="https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/v1/Tudar/klqbxupxjh776obmsubz"
            alt=""
            className="pr-0 md:pr-4 m-0"
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

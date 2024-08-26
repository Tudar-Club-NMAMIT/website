import Image from "next/image";
import React from "react";
import { PiSmileySad } from "react-icons/pi";
import { signIn, signOut } from "next-auth/react";

const CantBeMember = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 p-8">
      <PiSmileySad className="-z-10 text-black/5 absolute w-1/2 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <h1 className="text-2xl font-black text-center md:w-2/3 font-sans ">
        WE ARE SORRY, YOU CANNOT BE A MEMBER OF THIS CLUB!
      </h1>
      <button className="border-2 invert sm:invert-0 border-yellow-800 text-yellow-700 sm:border-yellow-600 w-2/3 sm:text-yellow-800 hover:bg-yellow-800/10 hover:text-yellow-600 font-bold py-2 px-4 rounded">
        Go Back to Home
      </button>

      <button
        onClick={(e) => {
          e.preventDefault;
          signOut();
          signIn("google");
        }}
        className="invert w-2/3 justify-center sm:invert-0 px-4 hover:bg-black/5 sm:border-2 sm:border-black/20 sm:text-black py-2 border-2 flex gap-2 border-slate-200 dark:border-white/40 rounded-md text-slate-600 dark:text-white/70 font-sans hover:text-slate-900  transition duration-150"
      >
        <div className="w-6 h-6 relative">
          <Image
            className="w-6 h-6"
            fill
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google logo"
          />
        </div>
        <span>Use Another Account</span>
      </button>
      <p className="font-sans invert sm:invert-0 text-yellow-600 text-center text-opacity-50 text-xs sm:text-sky-600">
        <strong>*Note:</strong> If you are a student of NMAMIT try signing in
        with your NMAMIT google account. Ex : nnm22CS001@nmamit.in
      </p>
    </div>
  );
};

export default CantBeMember;

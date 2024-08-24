import { signIn } from "next-auth/react";
import Image from "next/image";

import React from "react";

const SignInWithGoogleButton = () => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault;
        signIn("google");
      }}
      className="invert sm:invert-0 px-4 sm:border-2 sm:border-black/20 sm:text-black py-2 border-2 flex gap-2 border-slate-200 dark:border-white/40 rounded-lg text-slate-600 dark:text-white/70 font-sans dark:hover:border-opacity-90 hover:text-slate-900  hover:shadow transition duration-150"
    >
      <div className="w-6 h-6 relative">
        <Image
          className="w-6 h-6"
          fill
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="google logo"
        />
      </div>
      <span>SignIn with Google</span>
    </button>
  );
};

export default SignInWithGoogleButton;

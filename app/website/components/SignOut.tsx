"use client";
import { signOut } from "next-auth/react";
import React from "react";

const SignOut = () => {
  return (
    <button
      onClick={() => signOut()}
      className="block focus:ring-4 focus:outline-none bg-red-700 border-2 border-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      Sign Out
    </button>
  );
};

export default SignOut;

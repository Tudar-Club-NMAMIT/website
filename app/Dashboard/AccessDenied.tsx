import React from "react";
import { useRouter } from "next/navigation";
const AccessDenied = () => {
  const router = useRouter();
  return (
    <div className="flex h-screen justify-center items-center font-sans">
      <div className="flex-col text-center gap-10">
        <h1 className="text-3xl font-bold m-5">
          You don't have the proper Credential to Acess this page
        </h1>
        <p className=" text-gray-500">
          Please contact the developer if you are an admin
        </p>
        <button
          onClick={(e) => router.push("/")}
          className="p-3 mt-5  bg-slate-800 rounded-lg"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default AccessDenied;

"use client";
import React from "react";
import { languageFetch } from "../libs/language";
import { useState } from "react";
const page = () => {
  const [input, setinput] = useState("");
  const [result, setresult] = useState("");
  const handleStateChange = (e: any) => {
    setinput(e);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res: any = await languageFetch(input);
    setresult(res.data);
    console.log(res.data);
  };
  return (
    <div className="flex justify-center">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex-col m-10">
          <input
            type="text"
            className=" w-60 p-3 mb-10 border-8"
            placeholder="Enter the text"
            value={input}
            onChange={(e) => handleStateChange(e.target.value)}
          />

          <div className="flex justify-center">
            <button className="flexCenter gap-3 px-4 py-3 bg-violet-500 rounded-xl text-sm font-medium max-md:w-full text-white">
              Translate
            </button>
          </div>
        </div>
      </form>
      <div>
        <input
          type="text"
          className=" w-60 p-3 m-10 border-8"
          placeholder="Converted text here"
          value={result}
          readOnly={true}
        />
      </div>
    </div>
  );
};

export default page;

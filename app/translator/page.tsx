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
    let resStr = JSON.stringify(res.data);
    console.log(resStr);
    console.log(typeof resStr);
    const kannadaPattern = /[\u0C80-\u0CFF]+|[\{\}\[\]"']+/g;
    const cleanedString = resStr.replace(kannadaPattern, "");
    setresult(cleanedString.toLowerCase());
    // // Step 2: Convert the string to lowercase
    // const lowercaseString = cleanedString.toLowerCase();

    // setresult(lowercaseString);

    console.log(res.data);
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen my-auto">
      <div className="flex space-x-2 ">
        <textarea
          name="input"
          className="p-4 text-2xl bg-gray-200 rounded-lg"
          placeholder="Enter the text"
          cols={20}
          rows={5}
          value={input}
          onChange={(e) => handleStateChange(e.target.value)}
        ></textarea>

        <textarea
          name="input"
          className="p-4 text-2xl bg-gray-200 rounded-lg"
          placeholder="Converted text here"
          cols={20}
          rows={5}
          value={result}
          readOnly
        ></textarea>
      </div>
      <div className="flex justify-center mt-5">
        <button
          className="flexCenter gap-3 px-4 py-3 bg-violet-500 rounded-xl text-sm font-medium max-md:w-full text-white"
          onClick={handleSubmit}
        >
          Translate
        </button>
      </div>
    </div>
  );
};

export default page;

"use client";
import React, { useEffect, useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { useSession } from "next-auth/react";
import { getPerform, getUserId, addScoreToUser } from "../server/actions";
interface Questions {
  question: string
  answer: string
  points: number
  options: {
    [key: string]: string;
  };
}
const questions:Questions = {
    question: "ಒಡಿಪುದ ಪ್ಯಾಮಯಏತ್ ವರ್ಷಮಗರ ನಡೆಪುನು?",
    options: {a: "2", b: "4", c: "3" , d: "1"},
    answer: "a",
    points: 5,
}
export default function BackgroundBeamsDemo() {
  const [score, setScore] = useState(0)
  const [Streaks, setStreaks] = useState(0)
  const [selected, setSelected] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const { data: session } = useSession();
  const [userId, setUserId] = useState("");
  
  useEffect(() => {
    getUserId(session?.user?.email || "").then((value) => {
      setUserId(value || "")
    }).then(() => {
      getPerform(userId).then((value) => {
        setScore(value.score)
        setStreaks(value.streak)
      })
    })
    
   });
   useEffect(() => {
    if(submitted) {

      addScoreToUser(userId, selected === questions.answer, questions.points).then((perform) => {
        setScore(perform.score)
        setStreaks(perform.streak)
      })
    }
   }, [submitted, userId])
  return (
    <>
    <div className="h-[40rem] font-sans w-full rounded-md bg-neutral-950  flex flex-col items-center justify-center ">

    {session ? (
      <div className="p-4">                                                                                                   
        <div className="absolute top-28 left-10 flex gap-3 text-lg md:text-xl p-2  mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          <div>Score: {score}</div>
          <div>Streaks: {Streaks}</div>
        </div>
        <div className="relative z-10 text-lg md:text-2xl  mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          {questions.question}
        </div>
        <div className="grid grid-cols-2">
          {Object.keys(questions.options).map((item:any, index) => (
            <div key={index} className={`z-20 m-2 rounded-sm border cursor-pointer ${selected === item?(submitted?(selected==questions.answer)?"border-green-600":"border-red-600":"border-neutral-300"):"border-neutral-600"}`}>
              <div  onClick={() => submitted?"":setSelected(item)} className={`z-10 text-lg md:text-1xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold`}>
              {questions.options[item]}
              </div>
          </div>
          ))}
        </div>
        <div className="border mt-10 mx-auto w-1/2 py-1 bg-green-100 bg-opacity-10 cursor-pointer">
          <div onClick={() => setSubmitted(true)} className="relative z-20 text-lg md:text-xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Submit
          </div>
        </div>
      </div>
    ) : ( 
      <div className="relative z-10 text-lg md:text-3xl p-2  mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Please Sign-in
        </div>
    )}
      <BackgroundBeams />
    </div>
    </>

  );
}

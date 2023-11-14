"use client";
import React from 'react';
import Button from "./Button";

const Homepage: React.FC = () =>{
    return ( 
    <div className='flex flex-col gap-5 items-center justify-center overflow-hidden bg-blue-100 h-screen'>
      <img className='absolute  w-full -z-10' src='src/gameBackground.jpg'></img>
      <div className="">
        <img className='w-36'  src="src/logofinal22.png" alt="" />
      </div>

      <div className="m-1 p-3 flex flex-col items-center justify-center">
      <h1 className='font-extrabold text-3xl'><strong>TULIPU</strong></h1>
      <h6 className='w-3/4 text-center'>Get Two Chance To Match The Jumbled Word</h6>
      </div>
      <div className='sm:flex-row flex-col flex justify-center items-center'>

      <Button onClick={() => alert('Button Clicked')}>HOW</Button>
      <Button variant="primary">LOG IN</Button>
      <Button variant="primary">PLAY</Button>
      </div>
    </div>
     );
}
 
export default Homepage;
"use client";
import React from 'react';
import Button from "./Button";

const Homepage: React.FC = () =>{
    return ( 
    <div className='flex-row gap-5 items-center justify-center bg-gray-200 h-screen'>
        
      <div className="h-12 w-12 ">
        <img  src="src/logofinal22.png" alt="" />
      </div>

      <div className="m-1 p-3">
      <h1>TULIPU</h1>
      <h6>Get Two Chance To Match The Jumbled Word</h6>
      </div>
      
      <Button onClick={() => alert('Button Clicked')}>HOW</Button>
      <Button variant="primary">LOG IN</Button>
      <Button variant="primary">PLAY</Button>
    </div>
     );
}
 
export default Homepage;
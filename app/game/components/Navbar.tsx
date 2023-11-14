import React from "react";
import "./navbar.css";
import Link from "next/link";
import { HelpCircle, Menu, Flame } from 'lucide-react';


const Navbar = () => {
  return (
    <nav className="py-2 px-8 border-b border-nav-border bg-white">
      <div className="flex w-full">
        <Menu className=" h-10 float-left p-0"/>      
        {/* <p className="text-bold text-3xl m-4">Tudar</p> */}
        <div className="flex items-center justify-center w-screen ">
        <ul className="md:flex justify-center hidden min-w-screen text-sm gap-10 margin-auto navlist">
          
          <span className="extra-bold alink">Tudar-Tulipu</span>
        </ul>
        </div>
       
        <HelpCircle className="h-10 float-right mr-5"/>
        <Flame className="h-10 float-right "/>

      </div>
      <div className="flexCenter"></div>
      <div className="fixed  bg-gray-200 bottom-10 right-10 rounded-full w-10 h-10"></div>
    </nav>
  );
};
export default Navbar;
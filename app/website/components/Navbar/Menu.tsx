"use client";
import React from "react";
import "./navbar.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const Menu = (NavLists: {Navlist: { href: string; key: string; text: string }[];}) => {
  const [menuToggleFlag, setmenuToggleFlag] = useState(true);
  const { data: session} = useSession();
  return (
    <div className="flex justify-center items-center">
      {/* Hamberger*/}
      <div className="md:hidden flex w-8 aspect-square float-right m-0 hamburger p-1 "
            id="hamburger"
            onClick={()=>{setmenuToggleFlag(!menuToggleFlag)}}>
            <div className={`${!menuToggleFlag?"bg-black":"bg-white"} bar-hamburger`} style={!menuToggleFlag?{animation:"cross-1 0.2s ease-in forwards"}:{animation:"none"}}></div>
            <div className={`${!menuToggleFlag?"hidden bg-black":"block bg-white"} bar-hamburger`}></div>
            <div className={`${!menuToggleFlag?"bg-black":"bg-white"} bar-hamburger`} style={!menuToggleFlag?{animation:"cross-2 0.2s ease-in forwards"}:{animation:"none"}}></div>
      </div>

      {/* Menu */}
      <div className={`${menuToggleFlag?"hidden": ""} container-menu w-full absolute navbar-bg-menu top-0 left-0`} style={menuToggleFlag?{animation: "none"}:{animation:"menu-click-animation 0.2s ease-in"}} id="menu-container">

        <ul className="flex justify-center flex-col p-10 gap-3 ">
          {session ? (
            <div className=" flex items-center gap-7"><Image width={50} height={50} src={session?.user?.image || ""} alt="err" className="rounded-full border border-white"></Image>
                <span className="text-black">{session?.user?.name}</span>
            </div> ) : 
            (
              <Link href="/api/auth/signin" className="text-black">Sign in</Link>
            )
          }
          {NavLists.Navlist.map((link) => (
              <Link
                className="h-20 flex justify-start items-center text-black"
                onClick={()=>setmenuToggleFlag(!menuToggleFlag)}
                href={link.href}
                key={link.key}>
                  <span className="linkSpan">{link.text}</span>
              </Link>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default Menu;

"use client";
import React from "react";
import "./navbar.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const Menu = (NavLists: {
  Navlist: { href: string; key: string; text: string }[];
}) => {
  const [flag, setflag] = useState(true);
  const { data: session} = useSession();
  return (
    <>
    <div
          className="md:hidden flex  w-10 h float-right m-0 hamburger p-1 "
          id="hamburger"
          onClick={()=>{setflag(!flag)}}
        >
          <div className={`${!flag?"bg-black":"bg-white"} bar-hamburger`} style={!flag?{animation:"cross-1 0.2s ease-in forwards"}:{animation:"none"}}></div>
          <div className={`${!flag?"hidden bg-black":"block bg-white"} bar-hamburger`}></div>
          <div className={`${!flag?"bg-black":"bg-white"} bar-hamburger`} style={!flag?{animation:"cross-2 0.2s ease-in forwards"}:{animation:"none"}}></div>
        </div>
    <div className={`${flag?"hidden": ""} container-menu w-full absolute navbar-bg-menu z-40 top-0 left-0`} style={flag?{animation: "none"}:{animation:"menu-click-animation 0.2s ease-in"}} id="menu-container">
      <ul className="flex justify-center flex-col p-10 gap-3 ">
        {session ? (
          <Link href={`/website/Profile/${session.user?.email}`}>
            <div className=" flex items-center gap-7">
              <Image
                width={50}
                height={50}
                src={session?.user?.image || ""}
                alt="err"
                className="rounded-full border border-white"></Image>
              <span className="text-black">{session?.user?.name}</span>
            </div>
          </Link>
        ) : (
          <Link href="/api/auth/signin" className="text-black">
            Sign in
          </Link>
        )}

        {NavLists.Navlist.map((link) => (
          <Link
            className="h-20 flex justify-start items-center text-black"
            onClick={()=>setflag(!flag)}
            href={link.href}
            key={link.key}>
              <button >

            <span className="linkSpan">{link.text}</span>
              </button>
          </Link>
        ))}
      </ul>
    </div>
    </>

  );
};
export default Menu;

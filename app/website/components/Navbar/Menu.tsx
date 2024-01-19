"use client";
import React from "react";
import "./navbar.css";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Menu = (NavLists: {
  Navlist: { href: string; key: string; text: string }[];
}) => {
  const { data: session} = useSession();
  return (
    <div className="container-menu navbar-bg-menu z-40" id="menu-container">

      <ul className="flex justify-center flex-col p-10 gap-3 ">
      {session ? (
        <div className=" flex items-center gap-7"><Image width={50} height={50} src={session?.user?.image || ""} alt="err" className="rounded-full border border-white"></Image>
            <span className="text-black">{session?.user?.name}</span>
        </div>
) : (
          <Link href="/api/auth/signin" className="text-black">Sign in</Link>
        )}
      

        {NavLists.Navlist.map((link) => (
          <Link
            className="h-20 flex justify-start items-center text-black"
            href={link.href}
            key={link.key}>
            <span className="linkSpan">{link.text}</span>
          </Link>
        ))}
        
      </ul>
    </div>
  );
};
export default Menu;

"use client";
import React from "react";
import "./navbar.css";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Menu = (NavLists: {
  Navlist: { href: string; key: string; text: string }[];
}) => {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div className="container-menu" id="menu-container">
      <ul className="flex justify-center flex-col p-10 gap-3 bg-white">
        {NavLists.Navlist.map((link) => (
          <Link
            className="h-20 flex justify-start items-center text-black"
            href={link.href}
            key={link.key}>
            <span className="linkSpan">{link.text}</span>
          </Link>
        ))}
        {session ? (
          <h1>Logged in </h1>
        ) : (
          <Link href="/api/auth/signin">Sign in</Link>
        )}
      </ul>
    </div>
  );
};
export default Menu;

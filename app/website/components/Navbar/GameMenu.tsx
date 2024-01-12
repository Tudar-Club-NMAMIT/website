"use client";
import React from "react";
import "./navbar.css";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
const NavLinks = [
  { href: "/", key: "Home", text: "Home" },
  { href: "/website/Team", key: "Team", text: "Club Team" },
  { href: "/", key: "About", text: "About" },
  { href: "/", key: "Events", text: "Events" },
  { href: "/", key: "Blog", text: "Blog" },
  { href: "/website/ContactUs", key: "Contact", text: "Contact" },
];
const Menu = () => {
  const handleClick = () =>{
    return (
        <></>
    )
  }
  return (
    <nav className="nav-menu-bg py-4 px-8 border-b border-nav-border fixed z-40 w-screen h-screen bg-white">
      <div className="flex flex-col">
        <div className="flex flex-col w-screen ">
          <ul
            className="flex justify-center flex-col min-w-screen p-10 gap-3 margin-auto  navmenulist "
            id="navlist">
            {NavLinks.map((link) => (
              <Link
                className=" border-black h-20 flex justify-start items-center text-black"
                href={link.href}
                key={link.key}>
                    <span className="linkSpan capitalize">
                {link.text}
                    </span>
              </Link>
            ))}
          </ul>
        </div>
        <div
          className="md:hidden flex  w-10 h float-right m-0 hamburger p-1"
          id="hamburger"
          onClick={handleClick}>
          <div className="bar-hamburger"></div>
          <div className="bar-hamburger"></div>
          <div className="bar-hamburger"></div>
        </div>
      </div>
      <div className="flexCenter"></div>
    </nav>
  );
};
export default Menu;

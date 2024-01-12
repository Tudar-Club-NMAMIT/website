"use client";
import React from "react";
import "./navbar.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Menu from "./Menu";

const NavLinks = [
  { href: "/", key: "Home", text: "Home" },
  { href: "/website/Team", key: "Team", text: "Club Team" },
  { href: "/", key: "About", text: "About" },
  { href: "/", key: "Events", text: "Events" },
  { href: "/", key: "Blog", text: "Blog" },
  { href: "/website/ContactUs", key: "Contact", text: "Contact" },
];
const Navbar = () => {
  const [flag, setflag] = useState(true);

  const handleClick = () => {
    const bars = document.querySelectorAll<HTMLElement>(".bar-hamburger");
    let color = "white"
    if(flag) { color = "black"}
    else{ color = "white"}
      bars.forEach(bar => {
        bar.style.background=color;
      })
    const menu = document.getElementById("menu");
    if (menu) {
      if (flag) {
        menu.style.display = "block"; 
      }
      if (!flag) {
        menu.style.display = "none"; 
      }
      setflag(!flag);
    } 

  };
  return (
    <nav  className="navbar-bg py-4 px-8 border-b w-screen border-nav-border absolute z-40 ">
      <div className="menu-container fixed top-0 left-0 w-screen h-screen" id="menu" style={{display:"none"}}>
      <Menu Navlist={NavLinks} />{
      }
      </div>
      <div className="flex w-full">
        <a href="#" className="float-left ml-0">
          <span className=" whitespace-nowrap">
            <Image src="/src/tudar.png" alt="Tudar" width={120} height={100}></Image>
          </span>
        </a>
        {/* <p className="text-bold text-3xl m-4">Tudar</p> */}
        <div className="flex items-center justify-center w-screen ">
          <ul
            className="md:flex  md:justify-center md:flex-row min-w-screen flex-col hidden text-sm gap-10 margin-auto navlist"
            id="navlist">
            {NavLinks.map((link) => (
              <Link
                className="alink"
                href={link.href}
                key={link.key}>
                {link.text}
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
export default Navbar;

"use client";
import React from "react";
import "./navbar.css";
import Link from "next/link";


const NavLinks = [
    { href: "/", key: "Home", text: "Home" },
    { href: "/website/Team", key: "Team", text: "Club Team" },
    { href: "/", key: "About", text: "About" },
    { href: "/", key: "Events", text: "Events" },
    { href: "/", key: "Blog", text: "Blog" },
    { href: "/website/ContactUs", key: "Contact", text: "Contact" },
  ];
  const Menu = (NavLists:{Navlist:{href: string,key: string,text: string}[]}) => {
    return (
      <div className="container">
          <div className="flex flex-col w-screen bg-white fixed left-0 top-0">
            <ul
              className="flex justify-center flex-col min-w-screen p-10 gap-3 margin-auto  navmenulist "
              id="navlist">
              {NavLists.Navlist.map((link) => (
                  <Link
                  className=" border-black h-20 flex justify-start items-center text-black"
                  href={link.href}
                  key={link.key}>
                      <span className="linkSpan capitalize text-lg">
                  {link.text}
                      </span>
                </Link>
              ))}
            </ul>
          </div>
        </div>
       
    );
  };
  export default Menu;
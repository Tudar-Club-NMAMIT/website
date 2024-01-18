"use client";
import React from "react";
import "./navbar.css";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Menu from "./Menu";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const NavLinks = [
  { href: "/", key: "Home", text: "Home" },
  { href: "/website/Team", key: "Team", text: "Club Team" },
  { href: "/website/Aboutus", key: "About", text: "About" },
  { href: "/website/Events", key: "Events", text: "Events" },
  { href: "/website/Blogs", key: "Blog", text: "Blog" },
  { href: "/website/ContactUs", key: "Contact", text: "Contact" },
];

const Navbar = () => {
  const [flag, setflag] = useState(true);
  const { data: session } = useSession();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollY > lastScrollY ? setShow(false) : setShow(true);
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);

  const handleClick = () => {
    const bars = document.querySelectorAll<HTMLElement>(".bar-hamburger");
    const menu = document.getElementById("menu");
    let color = "white";
    if (menu) {
      if (flag) {
        color = "black";
        bars[1].style.display = "none";
        bars[0].style.animation = "cross-1 0.2s ease-in forwards";
        bars[2].style.animation = "cross-2 0.2s ease-in forwards";
        menu.style.display = "block";
        menu.style.animation = "menu-click-animation 0.2s ease-in";
      }
      if (!flag) {
        color = "white";
        menu.style.display = "none";
        menu.style.animation = "none";
        bars[1].style.display = "block";
        bars[0].style.animation = "none";
        bars[2].style.animation = "none";
      }
      bars.forEach((bar) => {
        bar.style.background = color;
      });
      setflag(!flag);
    }
  };
  return (
    <nav
      className={`navbar-bg py-4 px-8 border-b w-screen fixed border-nav-border z-40 top-0 transition-style ${
        flag ? (show ? "translate-y-0" : "-translate-y-full") : "translate-y-0"
      }`}>
      <div
        className="menu-container absolute top-0 left-0 w-screen"
        id="menu"
        style={{ display: "none" }}>
        <Menu Navlist={NavLinks} />
      </div>
      <div className="flex w-full">
        <Link href="/" className="float-left ml-0">
          <span className="whitespace-nowrap">
            <Image
              src="https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/xczsl6fzq0clalmthj6f"
              alt="Tudar"
              width={40}
              height={30}></Image>
          </span>
        </Link>
        <div className="flex items-center justify-center w-screen ">
          <ul className="md:flex justify-center flex-row min-w-screen hidden gap-10 navlist">
            {NavLinks.map((link) => (
              <Link className="alink" href={link.href} key={link.key}>
                {link.text}
              </Link>
            ))}
          </ul>
        </div>
        <div className="float float-right hidden md:block ">
          {session ? (
            <div>
              <button
                onClick={() => setOpen(!open)}
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                type="button">
                <span className="sr-only">Open user menu</span>
                <Image
                  className="w-11 h-9 rounded-full"
                  src={session.user?.image || ""}
                  alt="user photo"
                  width={50}
                  height={50}
                />
              </button>
              <div
                className={`z-30 ${
                  open ? null : `hidden`
                } font-sans right-0 mr-8 mt-1 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-900 opacity-70  dark:divide-gray-100`}>
                <div className="px-4 py-3 text-sm text-white">
                  <div>{session.user?.name}</div>
                  <div className="font-medium truncate">
                    {session.user?.email}
                  </div>
                </div>
                <ul className="py-2 text-gray-700 ">
                  <li>
                    <Link
                      href="/Profile"
                      className="block px-4 py-2 text-white hover:bg-white hover:text-black">
                      Profile
                    </Link>
                  </li>
                  {session.user?.email === "nittetudar@gmail.com" ? (
                    <li>
                      <Link
                        href="/Dashboard"
                        className="block px-4 py-2 text-white hover:bg-white hover:text-black">
                        Dashboard
                      </Link>
                    </li>
                  ) : null}
                </ul>
                <div className="py-2 ">
                  <button
                    onClick={() => signOut()}
                    className="block px-4 py-2 w-44 text-left text-white hover:bg-white hover:text-black">
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <Link href="/api/auth/signin" className="signIn-button">
                <div className="pointer px-1 whitespace-nowrap">Sign-In</div>
              </Link>
            </div>
          )}
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

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
  { href: "/website/Aboutus", key: "About", text: "About us" },
  { href: "/website/Events", key: "Events", text: "Events" },
  { href: "/website/Blogs", key: "Blog", text: "Blog" },
  { href: "/website/ContactUs", key: "Contact", text: "Contact" },
];

const Navbar = () => {
  const { data: session } = useSession();
  const flag =true;
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

  return (
    <nav className={`navbar-bg py-4 px-8 border-b w-screen fixed border-nav-border high-z-index top-0 transition-style ${flag ? (show ? "translate-y-0" : "-translate-y-full") : "translate-y-0"}`}>
      <div className="flex justify-center items-center w-full">
        <Link href="/" className="float-left ml-0">
          <span className="whitespace-nowrap">
            <Image
              src="https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/xczsl6fzq0clalmthj6f"
              alt="Tudar"
              width={40}
              height={30}
            ></Image>
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
        <div className="float-right gap-3 flex justify-center z-50 ">
          {session ? (
            <div className="w-10 md:block hidden">
             <Link href={`/website/Profile/${session?.user?.email}`}><button
                onClick={() => setOpen(!open)}
                className="flex text-sm aspect-square bg-gray-800 rounded-full md:me-0 ring-2 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                type="button"
              >
                <span className="sr-only">Open user menu</span>
                <Image
                  className="w-12 aspect-square rounded-full"
                  src={session.user?.image || ""}
                  alt="user photo"
                  width={50}
                  height={50}
                />
              </button>
              </Link>
              <div
                className={`z-30 ${
                  open ? null : `hidden`
                } font-sans right-0 mr-8 mt-1 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-900 opacity-70 font-semibold  dark:divide-gray-100 `}>
                <div className="px-4 py-3 text-sm text-black dark:text-white   hover:bg-slate-400 ">
                  <div>{session.user?.name}</div>
                  <div className="font-medium truncate">
                    {session.user?.email}
                  </div>
                </div>
                <ul className="py-2 text-gray-700 hover:bg-slate-400">
                  <li>
                    <Link
                      href={`/website/Profile/${session?.user?.email}`}
                      className="block px-4 py-2 text-black dark:text-white  "
                    >
                      Profile
                    </Link>
                  </li>
                  {session.user?.email === "nittetudar@gmail.com" ? (
                    <li>
                      <Link
                        href="/Dashboard"
                        className="block px-4 py-2 text-black dark:text-white "
                      >
                        Dashboard
                      </Link>
                    </li>
                  ) : null}
                </ul>
                <div className="py-2  hover:bg-slate-400">
                  <button
                    onClick={() => signOut()}
                    className="block px-4 py-2 w-44 text-left text-black dark:text-white"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="md:flex hidden items-center justify-center text-white">
              <Link href="/api/auth/signin" className="signIn-button ">
                <div className="pointer p-2 px-4 whitespace-nowrap ">Sign-In</div>
              </Link>
            </div>
          )}
          <Menu Navlist={NavLinks} />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { getAllEvents, getPosts } from "@/app/server/actions";

import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const events = await getAllEvents();
  
  console.log("pots:" + events);
  return (
    <div>

      <Navbar />
      <div className="bg-black font-sans py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tulu Chronicles
            </h2>
            <p className="mt-2 text-lg leading-8 text-white">
              Where Tradition Meets the Digital Age
            </p>
          </div>
           <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {events.map((event) => (
            
              <article
                key={event.id}
                className="flex max-w-xl flex-col items-start justify-between p-6"
              >
                <Image
                  className="rounded-md"
                  src={event.imageUrl}
                  alt=""
                  width={500}
                  height={500}
                />
                
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white">
                    <a href="">
                      <span className="absolute inset-0" />
                      {event.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">
                    {event.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src="https://lh3.googleusercontent.com/a/ACg8ocJB_jXg-txmKOlPMmgamsf5qUgExNPG6gm2tofOXCPR=s96-c"
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-white">
                      <a href="">
                        <span className="absolute inset-0" />
                        Tudar Nitte
                      </a>
                    </p>
                    {/* <p className="text-white">{post.author.role}</p> */}
                   </div>
                </div>
              </article>
            ))}
          </div> 
        </div>
      </div>
    </div>
  );
};

export default page;

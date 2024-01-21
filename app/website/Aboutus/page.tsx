
import React from 'react'
import Team from './Team'
import Image from 'next/image';


 function  Info() {
  return (
    <div>
      {/* Hero page  */}
      <section className="font-sans bg-black pt-24">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-neutral-300 md:text-5xl lg:text-6xl dark:text-white">
            At Tudar Club,{" "}
          </h1>
          <p className="mb-8 text-lg font-normal text-justify lg:text-xl sm:px-16 xl:px-48 text-gray-400">
            Our primary mission is to provide a platform for students to
            showcase their talents and share knowledge about the rich tapestry
            of Tulu culture. In today's fast-paced journey towards
            globalization, we recognize the importance of preserving,
            understanding, and practicing regional knowledge for a sustainable
            ecosystem. Tudar aims to create awareness among students about
            indigenous cultures, fostering a deep appreciation for the roots
            that anchor us in a globalized world.
          </p>
        </div>
      </section>

      <div className="font-sans p-5 mx-auto sm:p-10 md:p-16 bg-black text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <Image
            src="https://res.cloudinary.com/deax1ssmv/image/upload/f_auto,q_auto/dfpjeipbgjx7icsxqai8"
            alt=""
            width={400}
            height={400}
            className="w-full h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl">
                Reviving Roots: The Birth of Tudar Club
              </a>
              <p className="text-xs text-gray-400">Year 2021</p>
            </div>
            <div className="text-gray-100">
              <p className="p-1">
                In the heart of NITTE College, where the echoes of Tulu culture
                lingered in everyday conversations, three friends envisioned a
                haven for preserving their ancestral heritage. Fueled by a
                shared love for Tulu traditions, they initiated discussions that
                sprouted into the formation of Tudar Club.
              </p>
              <p className="p-1">
                Recognizing the need for a structured platform to explore and
                celebrate Tulu culture, the trio pitched their idea to the Dean
                of Student Welfare, Subramanya Bhat Sir, and Principal Dr.
                Niranjana N Chiplunkar. On the 27th of October 2021, Tudar Club
                officially emerged as a beacon for students eager to deepen
                their understanding of Tulu traditions and connect with
                like-minded enthusiasts.
              </p>
              <p className="p-1">
                In its concise genesis, Tudar Club pledged to be more than a
                cultural hub—it aimed to be a bridge between the past and
                present, ensuring the vibrancy of Tulu heritage resonated within
                the walls of NITTE College.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="p-6 font-sans bg-black text-gray-100">
        <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leadi lg:text-6xl">990+</p>
            <p className="text-sm sm:text-base">Members</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leadi lg:text-6xl">1000+</p>
            <p className="text-sm sm:text-base">Followers on social media</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leadi lg:text-6xl">15+</p>
            <p className="text-sm sm:text-base">Articles</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leadi lg:text-6xl">3</p>
            <p className="text-sm sm:text-base">Workshops</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leadi lg:text-6xl">3</p>
            <p className="text-sm sm:text-base">Years of Tudar</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leadi lg:text-6xl">10+</p>
            <p className="text-sm sm:text-base">Events</p>
          </div>
        </div>
      </section>

      <Team />
    </div>
  );
}

export default Info
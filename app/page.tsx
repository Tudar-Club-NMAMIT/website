"use client";
import Navbar from "./website/components/Navbar/Navbar";
import Club from "./website/components/Club/Club";
import Hero from "./website/components/Hero/Hero";
import Events from "./website/components/Main-Events/Events";
import Card from "./website/components/Card-section/Card";
import Blog from "./website/components/Carousel/Blog";
import Footer from "./website/components/Footer/Footer";
import Video from "./website/components/Video-section/Video";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { prisma } from "./utils/db";
import FAQ from "./website/components/FAQ/FAQ";

export default function Home() {
  const { data: session, status } = useSession();
  // const user = await prisma.user.findMany();
  // console.log("user"+user)
  return (
    <>
      <div className="bg-[#000] tulu-font">
        <Navbar />
        <Hero />
        <Club />
        <Video />
        <Events />
        <Card />
        <Blog />
        <FAQ/>
        <Footer />
      </div>
    </>
  );
}

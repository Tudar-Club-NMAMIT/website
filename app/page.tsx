"use client";

import Club from "./website/components/Club/Club";
import Hero from "./website/components/Hero/Hero";
import Events from "./website/components/Main-Events/Events";
import Card from "./website/components/Card-section/Card";
import Blog from "./website/components/Carousel/Blog";
import Video from "./website/components/Video-section/Video";
import { useSession } from "next-auth/react";
import FAQ from "./website/components/FAQ/FAQ";
import RegisterPopup from "./register/registerPopup";

export default function Home() {
  const { data: session, status } = useSession();
  // const user = await prisma.user.findMany();
  // console.log("user"+user)
  new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <>
      {/* TODO(Amrith) : Uncomment the below line and rename _register page to enable registration. */}
      {/* <RegisterPopup /> */}
      <div className="bg-[#000] tulu-font">
        <Hero />
        <Club />
        <Video />
        <Events />
        <Card />
        <Blog />
        <FAQ />
      </div>
    </>
  );
}

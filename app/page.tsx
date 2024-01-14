"use client"
import Navbar from "./website/components/Navbar/Navbar";
import Club from "./website/components/Club/Club";
import Hero from "./website/components/Hero/Hero";
import Events from "./website/components/Main-Events/Events";
import Card from "./website/components/Card-section/Card";
import Blog from "./website/components/Blog Carousel/Blog";
import Footer from "./website/components/Footer/Footer";
import Video from "./website/components/Video-section/Video";
import { useSession } from "next-auth/react";


export default function Home() {
  const { data: session, status } = useSession();
  
  return (
    <div className="bg-gray-900">
      {/* {data?.name} */}
      <Navbar />
      <Hero />
      <Video/>
      <Club />
      <Events />
      <Card/>
      <Blog/>
      <Footer/>
    </div>
  );
}


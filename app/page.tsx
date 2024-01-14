import Navbar from "./website/components/Navbar/Navbar";
import Club from "./website/components/Club/Club";
import Hero from "./website/components/Hero/Hero";
import Events from "./website/components/Main-Events/Events";
import Card from "./website/components/Card-section/Card";
import Blog from "./website/components/Blog Carousel/Blog";
import Footer from "./website/components/Footer/Footer";
import { prisma } from "./utils/db";
import { uploadName } from "./server/actions";

import ResponsiveVideo from "./website/components/Video/Video";


 export default async function Home() {
  // const data = await prisma.test.findFirst()
  return (
    <div className="bg-gray-900">
      {/* {data?.name} */}
      <Navbar />
      <Hero />
      <Club />
      <ResponsiveVideo 
      
      />
      <Events />
      <Card/>
      <Blog/>
      <Footer/>
    </div>
  );
}


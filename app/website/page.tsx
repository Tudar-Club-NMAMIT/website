import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Documentation from "./components/Documentation";
import { Gallery } from "./components/Gallery";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <Documentation />
      <Footer />
    </div>
  );
};

export default page;

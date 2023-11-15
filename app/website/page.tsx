import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Documentation from "./components/Documentation";
import { Gallery } from "./components/Gallery";

const page = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Gallery />
      <Documentation />
      <Footer />
    </div>
  );
};

export default page;

import React from "react";

const Video = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video autoPlay muted loop className="w-screen h-screen object-cover">
        <source src="https://res.cloudinary.com/deax1ssmv/video/upload/f_auto:video,q_auto/v1/Tudar/dbpyvbmlmngbftsadtml" />
      </video>
      <div className="gradient-overlay top"></div>
      <div className="gradient-overlay bottom"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className=" text-4xl md:text-7xl text-white  text-center font-bold">
          Cultivating future Culture! Here at Tudar
        </p>
      </div>
    </div>
  );
};

export default Video;

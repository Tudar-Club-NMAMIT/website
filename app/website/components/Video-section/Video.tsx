import React from 'react';

const Video = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <video autoPlay muted loop className='w-full h-full object-cover'>
        <source src="src/Theme.mp4" />
      </video>
      <div className="gradient-overlay top"></div>
      <div className="gradient-overlay bottom"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-6xl font-malayalam font-bold">
          Cultivating future Culture! Here at Tudar.
        </p>
      </div>
    </div>
  );
}

export default Video;

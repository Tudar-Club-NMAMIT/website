import React from 'react';

const Video = () => {
  return (
    <div className="relative h-screen md:hidden">
      <video autoPlay muted loop className='w-full h-full object-cover'>
        <source src="src/fire.mp4" />
      </video>
      <div className="absolute inset-0 gradient-overlay"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-black text-6xl font-malayalam font-bold">നിനക്ക് </p>
      </div>
    </div>
  );
}

export default Video;

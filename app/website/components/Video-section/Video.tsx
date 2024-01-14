import React from 'react'

const Video = () => {
  return (
    <div className=" ">
      <video autoPlay muted loop className='w-screen h-screen'>
        <source src="src/fire.mp4" />
      </video>
    </div>
  );
}

export default Video

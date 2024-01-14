import React from 'react'
import  style from './ResponsiveVideo.module.css'

const Home: React.FC = () => {
  return (
      <video autoPlay loop style={{ width: '500px', height: '500px',  zIndex: 10}}>
        <source src="/src/5080327_Light_Bokeh_Background_1280x720.mp4" />
      </video>
   )
 }

export default Home;
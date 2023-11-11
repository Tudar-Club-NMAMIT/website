// components/Documentary.tsx
import React from 'react';

const Documentation: React.FC = () => {
  return (
    <div>
      <head>
        <title>Documentary</title>
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <div className="w3-main m-50 flex justify-center mb-10 " >
        <div className="w3-display-container w3-container">
          <img src="/src/abc.jpg" alt="Jeans" className="h-screen rounded-3xl shadow-2xl" />
          <div className="w3-display-topleft w3-text-white pl-24 pr-48 " >
            <h1 className="w3-jumbo w3-hide-small">New arrivals</h1>
            <h1 className="w3-hide-large w3-hide-medium">New arrivals</h1>
            <h1 className="w3-hide-small">COLLECTION 2016</h1>
            <p>
              <a href="#jeans" className="w3-button w3-black w3-padding-large w3-large">
                SHOP NOW
              </a>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Documentation;

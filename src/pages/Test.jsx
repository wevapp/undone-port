import React from "react";

const Test = () => {
  return (
    <div
      className="bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url(/bg/cont.png)" }}
    >
      <span className="absolute top-0">Test</span>
      <svg
        id="sw-js-blob-svg"
        viewBox="-50 -50 100 100" // Adjusted viewBox to center the path
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="200" // Added width and height attributes to specify dimensions
        height="200"
        className=""
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop
              id="stop1"
              stopColor="rgba(248, 117, 55, 1)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stopColor="rgba(251, 168, 31, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M25,-30.4C30.9,-24.9,33.2,-15.6,33.6,-6.9C34,1.8,32.6,9.9,28.9,17.1C25.3,24.3,19.4,30.7,12.3,32.9C5.2,35.1,-3.1,33.3,-12.6,31.3C-22,29.2,-32.6,27.1,-38.6,20.4C-44.6,13.8,-46,2.7,-42.6,-5.9C-39.2,-14.6,-30.9,-20.8,-23,-26C-15.1,-31.2,-7.5,-35.4,1,-36.6C9.6,-37.8,19.1,-36,25,-30.4Z"
          strokeWidth="0"
          style={{ transition: "all 0.3s ease 0s" }}
        ></path>
        <text x="-20" y="0" fontSize="10" fill="black">
          Hello, SVG!
        </text>
      </svg>
    </div>
  );
};

export default Test;

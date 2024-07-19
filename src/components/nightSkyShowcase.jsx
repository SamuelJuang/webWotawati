import React, { useEffect, useRef } from "react";
import image from "../assets/nightImage.jpeg";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const NightSkyView = () => {
  const containerRef = useRef(null);

  return (
    <div
      className="text-white"
      ref={containerRef}
      style={{
        backgroundImage: `
        linear-gradient(to bottom, rgba(17, 25, 36, 0.8), rgba(17, 25, 36, 0.1) 60%, rgba(17, 25, 36, 1) 100%),
        url(${image})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        color: "white",
        transition: "background 1s ease",
      }}
    >
      <div className="flex flex-row h-full font-poppins ms-5 lg:ms-[6rem]">
        <div className="w-1/2 flex flex-col justify-center ">
          <h1 className="text-6xl mb-5 font-bold">
            Night <span className="text-yellow-400">Sky</span> Showcase
          </h1>
          <p className="text-3xl font-inter">
            Bintang dan langit malam yang indah pada Wotawati
          </p>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default NightSkyView;

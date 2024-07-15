import React, { useEffect, useRef } from "react";

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const NightSkyView = () => {
    const containerRef = useRef(null);

    
  return (
    <div className="text-white" ref={containerRef} style={{
        height: '130vh',
        background: 'linear-gradient(to bottom, transparent 6%, rgb(0,0,60) 30%, black 90%, transparent 99%)',
        color: 'white',
        transition: 'background 1s ease'
    }}>
      <div className="flex flex-row h-full font-poppins ms-5 lg:ms-[6rem]">
      
      <div className="w-1/2 flex flex-col items-center justify-center ">
      <h1 className="text-6xl mb-5 font-bold">Night <span className="text-yellow-400">Sky</span> Showcase</h1>
      <p className="text-3xl font-inter">Here you can see the night sky in all its glory.</p>
      </div>


      <div>

      </div>


      </div>
    </div>
  );
};

export default NightSkyView;

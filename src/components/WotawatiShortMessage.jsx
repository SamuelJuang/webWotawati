import React, { useEffect, useRef, forwardRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flicking from "@egjs/react-flicking";
import { CarouselDefault } from "./flickingCarousel";

gsap.registerPlugin(ScrollTrigger);

const WotawatiShortMessage = forwardRef((props, ref) => {
  const imageRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    imageRefs.forEach((ref) => {
      if (ref.current) {
        handleImageAnimation(ref);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  const handleImageAnimation = (ref) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 100%",
        end: "center 80%",
        scrub: 1,
        markers: false,
      },
    });
    tl.fromTo(
      ref.current,
      {
        y: -50,
        ease: "none",
      },
      {
        y: 0,
        ease: "none",
      }
    );
  };

  return (
    <div
      ref={ref}
      className="w-screen flex flex-col lg:flex-row h-screen"
      style={{
        background:
          "linear-gradient(to bottom, transparent 95%, rgb(17,25,36) 100%)",
      }}
    >
      <div className="w-full lg:w-7/12 h-1/4 lg:h-full mb-3">
        <CarouselDefault />
      </div>
      <div className="h-3/4 lg:h-full lg:w-1/2 flex justify-center items-center p-5 lg:me-5">
        <div className="flex flex-col items-start lg:justify-center lg:items-center lg:me-5">
          <div className="text-xl pt-5 lg:text-4xl font-bold text-center font-poppins flex flex-row gap-2 justify-center items-center">
            <h1>Destinasi wisata</h1>
            <h1
              className="text-secondary"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #096168 0%, #A7C7E7 100%)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              alam
            </h1>
            <h1>yang</h1>
          </div>
          <p className="text-xl lg:text-4xl font-bold text-center font-poppins">
            memukau
          </p>
          <p className="text-xl lg:text-4xl font-bold text-center font-poppins">
            di Girisubo, Gunungkidul!
          </p>
          <p className="text-justify block lg:hidden pt-5 font-inter">
            This hidden gem, nestled deep within an ancient forest, is a sanctuary for both wildlife and visitors seeking peace and tranquility. The air is filled with the soothing sounds of rustling leaves and chirping birds, while sunlight filters through the canopy, casting dappled shadows on the forest floor.
          </p>
        </div>
      </div>
    </div>
  );
});

// Add displayName for debugging purposes
WotawatiShortMessage.displayName = "WotawatiShortMessage";

export default WotawatiShortMessage;

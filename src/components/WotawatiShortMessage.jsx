import React, { useEffect, useRef, forwardRef, useState } from "react";
import image from "../assets/tampakDepan.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flicking from "@egjs/react-flicking";
import { CarouselDefault } from "./FlickingCarousel";

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
      <div className="w-full lg:w-7/12 h-1/4 lg:h-full">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            id diam sapien. Suspendisse potenti. Sed vulputate felis mauris, non
            pellentesque metus porttitor quis. Sed commodo dapibus est in
            malesuada. Duis tempor dapibus ultricies. Sed sit amet ullamcorper
            lorem. Ut tellus felis, imperdiet eu diam at, pharetra bibendum
            nibh. Nunc massa nisl, luctus vitae ultrices eu, tincidunt sed nunc.
            Donec semper, metus a tristique rhoncus, velit nisi iaculis velit,
            sed maximus urna neque id tellus. Nunc vel lectus ullamcorper,
            vestibulum elit sed, blandit felis. Pellentesque a metus blandit,
            egestas tortor at, pharetra neque.
          </p>
        </div>
      </div>
    </div>
  );
});

// Add displayName for debugging purposes
WotawatiShortMessage.displayName = "WotawatiShortMessage";

export default WotawatiShortMessage;

import { Carousel } from "@material-tailwind/react";
import { First, Second, Third } from "../assets/CarouselImages/imageImports";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function CarouselDefault() {
  const imageRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  useEffect(() => {
    imageRefs.current.forEach((imageRef) => {
      if (imageRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top+=200 bottom",  // Adjust the start point
            end: "top bottom", // Adjust the end point
            scrub: 1,
            markers: false,
          },
        });
        tl.fromTo(
          imageRef.current,
          {
            y: -50,
            ease: "none",
          },
          {
            y: 0,
            ease: "none",
          }
        );
      }
    });
  }, []);

  return (
    <div className="h-full flex items-center rounded-b-lg lg:rounded-l-lg brightness-75">
      <Carousel
        className="rounded-xl shadow-none lg:shadow-md lg:h-5/6 lg:rounded-none lg:rounded-r-lg overflow-hidden"
        autoplay
      >
        <div className="">
          <img
            loading="lazy"
            src={First}
            alt="image 1"
            className="w-full h-[50rem] object-cover"
            ref={imageRefs.current[0]}
          />
        </div>
        <img
          loading="lazy"
          src={Second}
          alt="image 2"
          className="w-full h-full object-cover"
          ref={imageRefs.current[1]}
        />
        <img
        loading="lazy"
          src={Third}
          alt="image 3"
          className="w-full h-full object-cover"
          ref={imageRefs.current[2]}
        />
      </Carousel>
    </div>
  );
}

export default CarouselDefault;

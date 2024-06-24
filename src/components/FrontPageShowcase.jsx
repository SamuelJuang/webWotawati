import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import image from "../assets/tampakDepan.jpg";
import { useEffect, useRef } from "react";
import { BsArrowDownCircle } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const FrontPageShowcase = () => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const pointer = useRef(null);

  useEffect(() => {
    if (pointer) {
      const tl3 = gsap.timeline({
        repeat: -1,
        yoyo: true,
      });
      tl3.fromTo(
        pointer.current,
        {
          y: 150,
          ease: "none",
        },
        {
          y: 175,
          ease: "none",
        }
      );
    }
  });

  useEffect(() => {
    if (imageRef) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top center",
          end: "bottom center +50px",
          scrub: 1,
          markers: false,
        },
      });
      tl.fromTo(
        imageRef.current,
        {
          y: -150,
          ease: "none",
        },
        {
          y: 0,
          ease: "none",
        }
      );
    }
  });

  useEffect(() => {
    if (titleRef) {
      const tl2 = gsap.timeline({
        duration: 1,
      });
      tl2.fromTo(
        titleRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      );
      tl2.play();
    }
  });

  return (
    <div className="w-screen h-screen flex flex-col-reverse lg:flex-row">
      <div className="flex flex-col mt-[2rem] lg:mt-0 lg:w-5/12 justify-center ms-[6rem] font-poppins">
        <span>
          {" "}
          <h1 ref={titleRef} className="text-6xl font-bold">
            Welcome to{" "}
          </h1>
        </span>
        <p className=" text-6xl font-bold  text-primary">Wotawati</p>
        <p className=" text-accent me-5 font-inter">
          iorem ipsum dolor sit amet
        </p>
        <div className="flex justify-center items-center">
          <div ref={pointer} className="flex">
            <BsArrowDownCircle className="text-5xl text-accent" />
          </div>
        </div>
      </div>
      <div className="lg:w-7/12 flex">
        <div className="h-screen overflow-hidden flex rounded-l-lg brightness-75" >
          <img
            ref={imageRef}
            src={image}
            alt="hiya"
            className="w-full h-[100rem] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FrontPageShowcase;

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import image from "../assets/frontPageImage.jpeg";
import { useEffect, useRef } from "react";
import { BsArrowDownCircle } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const FrontPageShowcase = ({ onClick }) => {
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
  }, []);

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
          y: -100,
          ease: "none",
        },
        {
          y: 0,
          ease: "none",
        }
      );
    }
  }, []);

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
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row-reverse" onClick={onClick}>
      <div className="w-full lg:w-7/12">
        <div className="lg:h-screen flex mb-5 items-center h-full overflow-hidden flex rounded-b-lg lg:rounded-l-lg ">
          <img
          loading="lazy"
            ref={imageRef}
            src={image}
            alt="hiya"
            className="w-full h-full object-cover lg:h-[60rem]"
          />
        </div>
      </div>
      <div className="inset-0 flex flex-col mt-[2rem] lg:mt-0 lg:w-4/12 justify-center ms-5 lg:ms-[6rem] font-poppins">
        <span>
          <h1 ref={titleRef} className="text-4xl lg:text-6xl font-bold">
            Welcome to
          </h1>
        </span>
        <p className="text-5xl lg:text-7xl font-bold text-primary">Wotawati</p>
        <p className="text-accent me-5 font-inter">
          Ketenangan dan keindahan, Selalu di hati
        </p>
        <div className="flex justify-center items-center">
          <div ref={pointer} className="hidden lg:flex">
            <BsArrowDownCircle className="text-5xl text-accent cursor-pointer" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default FrontPageShowcase;

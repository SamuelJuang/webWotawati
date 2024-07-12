import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedImage = ({ image, alt, classname, title, mapsUrl }) => {
  const imgRef = useRef(null);

  const tween = useRef(null);

  useEffect(() => {
    tween.current = gsap.to(imgRef.current, {
      scale: 1.3,
      paused: true,
      webkitFilter: "brightness(0.9)",
      filter: "brightness(0.9)",
    });
  }, []);

  useEffect(() => {
    if (imgRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 100%",
          end: "center 80%",
          scrub: 1,
          markers: false,
        },
      });

      tl.fromTo(
        imgRef.current,
        {
          yPercent: -20,
          ease: "none",
        },
        {
          yPercent: 0,
          ease: "none",
        }
      );
    }
  }, [imgRef]);

  const onMouseEnterHandler = () => {
    tween.current.play();
  };

  const onMouseLeaveHandler = () => {
    tween.current.reverse();
  };

  const onClickHandler = () => {
    window.location.href = mapsUrl;
  };

  return (
    <div
      className="relative w-[10rem] h-[10rem] rounded-xl overflow-hidden cursor-pointer"
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      onClick={onClickHandler}
    >
      <img
        ref={imgRef}
        className={classname}
        src={image}
        alt={alt}
      />
      <div className="absolute text-4xl text-center font-os font-bold text-white z-10 inset-0 top-10">
        {title}
      </div>
    </div>
  );
};

export default AnimatedImage;
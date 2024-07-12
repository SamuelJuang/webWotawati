import { useEffect, useRef } from "react";
import image from "../assets/tampakDepan.jpg";
import gsap from "gsap";

const WotawatiShortMessage = () => {
  const imageRef = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if(imageRef) {
      handleImageAnimation(imageRef);
    }
    if(imageRef2) {
      handleImageAnimation(imageRef2);
    }
    if(imageRef3) {
      handleImageAnimation(imageRef3);
    }
  })

  const handleImageAnimation = (imageRef) => {
    if (imageRef) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 100%",
          end: "center 80%",
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
  }

  return (
    <div className="w-screen h-dvh flex">
      <div className="w-6/12 relative h-full">
        <div
          className="w-[20rem] h-[20rem] absolute -left-[2rem] rounded-xl overflow-hidden brightness-75"
        >
          <img src={image} ref={imageRef} alt="" className="h-full object-cover" />
        </div>
        <div
          
          className="w-[20rem] h-[20rem] absolute bottom-[10rem] -right-0  rounded-xl overflow-hidden"
        >
          <img ref={imageRef2} src={image} alt="" className="h-full object-cover" />
        </div>
        <div
         
          className="w-[20rem] h-[20rem] absolute bottom-0 left-5 rounded-xl overflow-hidden"
        >
          <img ref={imageRef3} src={image} alt="" className="h-full object-cover" />
        </div>
      </div>
      <div className="w-6/12 flex justify-center items-center p-5 me-5">
        <div className="flex flex-col justify-center items-center me-5">
          <div className="text-4xl font-bold text-center font-poppins flex flex-row gap-2">
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
          <p className="text-4xl font-bold text-center font-poppins">memukau</p>
          <p className="text-4xl font-bold text-center font-poppins">
            di Girisubo, Gunungkidul!
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default WotawatiShortMessage;

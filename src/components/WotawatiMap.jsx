import React, { useRef } from "react";
import GmapsWotawati from "./map";
import image from "../assets/tampakDepan.jpg";
import AnimatedImage from "./animatedImage";

const WotawatiMap = () => {
  return (
    <div className="w-screen h-dvh flex">
      <div className="flex w-5/12 items-center justify-center flex-col">
        <p className="text-4xl font-bold font-poppins">Temukan Kami Disini!</p>
        <div className="flex flex-row gap-5 pt-[2rem]">

          <AnimatedImage
            title={"Balai Dukuh"}
            image={image}
            classname={"w-50 brightness-75 h-full object-cover"}
            alt={"Balai Dukuh"}
            mapsUrl={"https://maps.app.goo.gl/1iUDyjUjdzgapyodA"}
          />

          <AnimatedImage
            title={"Balai Dukuh"}
            image={image}
            classname={"w-50 brightness-75 h-full object-cover"}
            alt={"Balai Dukuh"}
            mapsUrl={"https://maps.app.goo.gl/1iUDyjUjdzgapyodA"}
          />
        </div>
      </div>
      <div className="flex w-7/12 p-5">
        <GmapsWotawati />
      </div>
    </div>
  );
};

export default WotawatiMap;

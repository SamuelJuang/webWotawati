import React, { useRef } from "react";
import GmapsWotawati from "./map";
import image from "../assets/tampakDepan.jpg";
import AnimatedImage from "./animatedImage";
import balaiImage from "../assets/balai.jpg";

const WotawatiMap = () => {
  return (
    <div className="w-screen h-dvh pt-16 lg:pt-5 flex lg:flex-row flex-col" style={{
      background: "linear-gradient(to bottom, rgb(17,25,36) 0%, transparent 5%)"
    }}>
      <div
        className="z-0 h-[15rem] aspect-square bg-secondary rounded-full top-[50%] left-0 translate-x-[-50%] translate-y-[-50%] blur-[15rem]"
        ></div>
      <div className="flex lg:w-5/12 items-center justify-center flex-col">
        <p className="text-4xl font-bold font-poppin">Temukan Kami Disini!</p>
        <div className="flex flex-row gap-5 pt-[2rem]">

          <AnimatedImage
            title={"Balai Padukuhan"}
            image={balaiImage}
            classname={"w-50 brightness-50 h-full object-cover"}
            alt={"Balai Dukuh"}
            mapsUrl={"https://maps.app.goo.gl/1iUDyjUjdzgapyodA"}
          />

          <AnimatedImage
            title={"Rumah Dukuh"}
            image={image}
            classname={"w-50 brightness-75 h-full object-cover"}
            alt={"Balai Dukuh"}
            mapsUrl={"https://maps.app.goo.gl/1iUDyjUjdzgapyodA"}
          />
        </div>
      </div>
      <div className="flex w-full lg:w-7/12 p-5 h-full">
        <GmapsWotawati />
      </div>
    </div>
  );
};

export default WotawatiMap;

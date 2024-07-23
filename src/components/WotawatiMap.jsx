import React, { useRef } from "react";
import GmapsWotawati from "./map";
import image from "../assets/RumahDukuh.webp";
import AnimatedImage from "./animatedImage";
import balaiImage from "../assets/balai.webp";

const WotawatiMap = () => {
  return (
    <div className="w-screen h-dvh pt-16 lg:pt-5 flex lg:flex-row flex-col" style={{
      background: "linear-gradient(to bottom, rgb(17,25,36) 0%, transparent 5%)"
    }}>
      
      <div className="flex w-full lg:w-3/12 justify-center flex-col ms-5 lg:ms-[6rem]">
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
      <div className="flex w-full lg:w-9/12 p-5 h-full">
        <GmapsWotawati />
      </div>
    </div>
  );
};

export default WotawatiMap;

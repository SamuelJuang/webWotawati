import FrontPageShowcase from "../components/FrontPageShowcase";
import Cube3d from "../components/Cube";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import WotawatiShortMessage from "../components/WotawatiShortMessage";
import Cube from "../components/Cube";
import { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import WotawatiMap from "../components/WotawatiMap";
import NightSkyView from "../components/nightSkyShowcase";

const HomePage = () => {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

 
  return (
    <ReactLenis root>
      <div className="overflow-hidden">
        <Navbar />
        <div
        className="absolute z-0 w-[15rem] aspect-square bg-primary rounded-full top-[50%] left-0 translate-x-[-50%] translate-y-[-50%] blur-[10rem]"
        ></div>
        <FrontPageShowcase onClick={handleClick}/>
        
        <WotawatiShortMessage ref={ref}/>
        <NightSkyView />
        <WotawatiMap  />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default HomePage;

import FrontPageShowcase from "../components/FrontPageShowcase";
import Cube3d from "../components/Cube";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import WotawatiShortMessage from "../components/WotawatiShortMessage";
import Cube from "../components/Cube";
import { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { gsap } from 'gsap';
import WotawatiMap from "../components/WotawatiMap";



const HomePage = () => {

  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
    }
  })
  return (
    <ReactLenis root>
   <div className="overflow-hidden">
    <Navbar />
     <FrontPageShowcase />
     <WotawatiShortMessage/>
     <WotawatiMap/>
     <br />
     <br />
     <br />
     <br />
     <Footer/>
   </div>
   
   </ReactLenis>  
  );
};

export default HomePage;

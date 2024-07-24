import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import PakDukuhShowcase from "../components/PakDukuhShowcase";
import HistorySection from "../components/HistorySection";
import Footer from "../components/Footer";
import mapping from "../assets/mapping (1).webp";

const AboutPage = () => {
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
  return (
    <ReactLenis root>
      <Navbar />
      <PakDukuhShowcase />
      <div className="absolute z-0 w-[15rem] aspect-square bg-primary rounded-full top-[150%] right-0 translate-x-[-50%] translate-y-[-50%] blur-[8rem]"></div>
      <div className="absolute z-0 w-[15rem] aspect-square bg-primary rounded-full top-[170%] left-0 translate-x-[-50%] translate-y-[-50%] blur-[8rem]"></div>
      <HistorySection />
      <div className="flex justify-center items-center w-3/4 mx-auto flex-col gap-5">
        <p className="font-poppins text-3xl lg:text-5xl font-bold">
          Peta Lengkap Wotawati
        </p>
        <img src={mapping} alt="" className="" />
      </div>

      <Footer />
    </ReactLenis>
  );
};

export default AboutPage;

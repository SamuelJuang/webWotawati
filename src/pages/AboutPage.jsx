import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/navbar";
import PakDukuhShowcase from "../components/PakDukuhShowcase";
import HistorySection from "../components/HistorySection";

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
    <Navbar/>
    <PakDukuhShowcase />
    <HistorySection />
    </ReactLenis>
  );
};

export default AboutPage;

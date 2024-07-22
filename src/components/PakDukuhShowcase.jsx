import { Navigate } from "react-router-dom";
import image from "../assets/FotoPakRobyNoBG.png";

const PakDukuhShowcase = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col-reverse md:flex-row mb-[5rem] ">
        <div className="absolute z-0 w-[15rem] aspect-square bg-accent rounded-full top-5 left-0 translate-x-[-50%] translate-y-[-50%] blur-[5rem]"></div>
        <div className="absolute z-0 w-[15rem] aspect-square bg-accent rounded-full bottom-0 right-0 blur-[5rem]"></div>
        <div className="relative flex w-full md:w-7/12 pe-[5rem] items-center justify-center">
          <div className="flex flex-col ms-[5rem] lg:ms-[6rem] md:pt-[5rem] text-center lg:text-left">
            <p className="font-poppins text-4xl lg:text-5xl font-bold mb-5">
              Dukuh
            </p>
            <p className="font-inter text-sm lg:text-xl font-light z-10">
              Seorang dukuh adalah pemimpin sebuah daerah dalam
              tingkat dukuh. Seorang Dukuh bertanggung jawab untuk
              mengelola pemerintahan dan kesejahteraan masyarakat di dukuhnya.
            </p>
          </div>
        </div>

        <div className="flex flex-col relative w-full md:w-5/12 justify-center items-center">
          <img
            className="relative w-[15rem] md:w-[30rem] z-0"
            src={image}
            alt="Maatcha"
          />
          <div className="flex flex-col text-center">
            <p className="font-poppins pt-[1rem] lg:pt-0 text-4xl lg:text-4xl font-bold mb-0 lg:mb-2 text-primary drop-shadow-2xl">
              Roby Sugihastanto
            </p>
            <p className="text-lg font-poppins font-semibold pb-[3rem] lg:pb-0">
              Dukuh Padukuhan Wotawati
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PakDukuhShowcase;

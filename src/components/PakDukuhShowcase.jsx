import { Navigate } from "react-router-dom";
import image from "../assets/testing (1).webp";

const PakDukuhShowcase = () => {
  return (
    <div className="h-screen lg:min-h-[120vh] pt-[5rem] overflow-hidden relative">
      <div className="flex flex-col-reverse md:flex-row mb-[5rem] lg:mb-0 relative">
        <div className="absolute z-0 w-[15rem] aspect-square bg-accent rounded-full top-5 left-0 transform -translate-x-1/2 -translate-y-1/2 blur-[5rem]"></div>
        <div className="absolute z-0 w-[15rem] aspect-square bg-accent rounded-full bottom-5 right-0 blur-[15rem]"></div>
        <div className="relative flex w-full md:w-7/12 pe-[5rem] items-center justify-center">
          <div className="flex flex-col ms-[5rem] lg:ms-[6rem] md:pt-[5rem] text-center lg:text-left">
            <p className="font-poppins text-4xl lg:text-5xl font-bold mb-5">
              Dukuh
            </p>
            <p className="font-inter text-sm lg:text-xl font-light z-10">
              Seorang dukuh adalah pemimpin sebuah daerah dalam
              tingkat dukuh. 
              <span className="hidden lg:inline">
                Seorang Dukuh bertanggung jawab untuk
                mengelola pemerintahan dan kesejahteraan masyarakat di padukuhannya.
              </span>
            </p>
          </div>
        </div>

        <div className="relative flex w-full md:w-5/12 justify-center items-center flex-col">
          <img
            className="relative object-contain h-[25rem] w-[15rem] md:w-[30rem] z-0"
            src={image}
            alt="Maatcha"
          />
          <div className="flex flex-col text-center">
            <p className="font-poppins pt-[1rem] lg:pt-0 text-4xl lg:text-4xl font-bold mb-0 lg:mb-2 text-primary drop-shadow-2xl">
              Roby Sugihastanto
            </p>
            <p className="text-lg font-poppins font-semibold pb-[3rem] lg:pb-0">
              Dukuh Padukuhan Wotawati 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PakDukuhShowcase;

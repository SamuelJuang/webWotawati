import { Navigate } from "react-router-dom";
import image from "../assets/placeholder.png";

const PakDukuhShowcase = () => {
    return (
        <div>
       <div className="flex flex-col-reverse md:flex-row mt-[8rem] mb-[15rem] ">
        <div className="relative flex w-full md:w-7/12 pe-[5rem] items-center justify-center">
        <div className="flex flex-col ps-[5rem] lg:ps-[10rem] justify-center md:pt-[5rem]">
            <p className="font-pfd text-4xl lg:text-5xl font-semibold mb-5">Brownies</p>
            <p className="font-roboto text-sm lg:text-xl font-light z-10">
              Brownies yang terbuat dari bahan-bahan pilihan dengan kualitas terbaik.
              Dibuat dengan resep yang telah teruji dan disukai oleh banyak orang.
              Rasakan kenikmatan brownies yang lezat dan nikmat di setiap gigitannya.
            </p>
            <button
              onClick={() => Navigate("/katalog/produk?search=brownies")}
              className="bg-logosecondary hover:bg-logoprimary font-roboto text-white font-bold text-xl mt-10 py-2 px-4 rounded-full lg:w-1/2"
            >
              Telusuri Brownies!
            </button>
          </div>
        </div>
        
        <div className="flex relative w-full md:w-5/12 justify-center items-center">
       <img
            className="relative w-[15rem] md:w-[30rem] inset-0 md:-inset-x-8 z-10"
            src={image}
            alt="Maatcha"
          />
        </div>
      </div>
        </div>
    );
}

export default PakDukuhShowcase;
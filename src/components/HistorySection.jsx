import Cube from "./Cube";
import { CarouselDefault } from "./flickingCarousel";
import { CarouselWithContent } from "./HistoryCarousel";



const HistorySection = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col h-1/4 lg:h-full relative w-full lg:me-5 justify-center items-center text-center ">
        <p className="font-poppins text-4xl lg:text-5xl font-bold h-1/4 mb-[10vh]">
          Sejarah Singkat Wotawati
        </p>
        
      </div>
      <div className="h-3/4 w-3/4 lg:w-3/4 mb-[10vh]">
          <CarouselWithContent/>
        </div>
    </div>
  );
};

export default HistorySection;

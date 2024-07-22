import Cube from "./Cube";
import { CarouselDefault } from "./flickingCarousel";
import { CarouselWithContent } from "./HistoryCarousel";



const HistorySection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col relative w-full lg:me-5 justify-center items-center text-center lg:text-left">
        <p className="font-poppins text-4xl lg:text-5xl font-bold">
          Sejarah Singkat Wotawati
        </p>
        <div className="h-3/4 w-full lg:w-3/4">
          <CarouselWithContent/>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;

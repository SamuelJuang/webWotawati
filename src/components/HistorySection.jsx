import Cube from "./Cube";

const HistorySection = () => {
  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row mb-[5rem] ">
        <div className="relative flex w-full md:w-7/12 pe-[5rem] items-center justify-center">
          <div className="">
          <Cube />
          </div>
        </div>

        <div className="flex flex-col relative w-full md:w-5/12 lg:me-5 justify-center items-center text-center lg:text-left">
          
          <p className="font-poppins text-4xl lg:text-5xl font-bold mb-5">
                Sejarah Singkat Wotawati
              </p>
              <p className="font-inter text-sm lg:text-xl font-light z-10">
                Kepala Dukuh adalah seorang yang memimpin di sebuah daerah dalam
                tingkat dukuh. Seorang Kepala Dukuh bertanggung jawab untuk
                mengelola pemerintahan dan kesejahteraan masyarakat di dukuhnya.
              </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;

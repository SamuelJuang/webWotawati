import { Carousel, Typography, Button } from "@material-tailwind/react";
import { First, Second, Third } from "../assets/CarouselImages/imageImports";

export function CarouselWithContent() {
  return (
    <div className="h-full flex items-center rounded-b-lg lg:rounded-l-lg brightness-75">
      <Carousel className="rounded-xl shadow-none lg:shadow-md overflow-hidden">
        {/* image pertama */}
        <div className="relative w-full h-full">
          <img
            loading="lazy"
            src={First}
            alt="image 1"
            className="w-full h-[50rem] object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-1/2 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-3 text-3xl md:text-3xl lg:text-4xl text-accent"
              >
                Sejarah Bengawan Solo Purba
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 font-inter text-sm "
              >
                Sungai bengawan Solo Purba dulunya membentang dua puluhan
                kilometer sebelum mengering sekitar empat juta tahun lalu akibat
                pergeseran lempeng. Jejaknya masih bisa ditemukan memanjang dari
                Pantai Sadeng ke Waduk Gajah Mungkur.
              </Typography>
              <div className="flex justify-center gap-2">
                <button className="border border-accent text-accent bg-transparent hover:bg-accent hover:text-black focus:outline-none focus:ring-2 focus:ring-white py-2 px-4 rounded-md transition duration-200">
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Second Image */}
        <div className="relative w-full h-full">
          <img
            loading="lazy"
            src={First}
            alt="image 1"
            className="w-full h-[50rem] object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-1/2 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-3 text-3xl md:text-3xl lg:text-4xl text-accent"
              >
                Pembentukan Wotawati
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 font-inter text-sm"
              >
                Bekas aliran Bengawan Solo Purba menjadi permukiman warga, salah
                satunya kampung Wotawati di Kabupaten Gunungkidul, yang
                didirikan oleh Raden Jayasukma dan pengikutnya yang melarikan
                diri dari Kerajaan Majapahit pada abad ke-15. Nama Wotawati
                berasal dari 'ngewot' (merangkai bambu) dan 'Wati', dengan
                sejarah kaya termasuk kisah Raden Jayasukma mengikat batu
                raksasa dengan tali ijuk aren, menciptakan landmark Watu Duk.
              </Typography>
              <div className="flex justify-center gap-2">
                <button className="border border-accent text-accent bg-transparent hover:bg-accent hover:text-black focus:outline-none focus:ring-2 focus:ring-white py-2 px-4 rounded-md transition duration-200">
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Third Image */}
        <div className="relative w-full h-full">
          <img
            loading="lazy"
            src={First}
            alt="image 1"
            className="w-full h-[50rem] object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-1/2 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-3 text-3xl md:text-3xl lg:text-4xl text-accent font-poppins"
              >
                Masuknya Agama Islam
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 font-inter text-sm "
              >
                Kisah Wotawati mencatat masuknya Islam melalui seorang wali,
                murid Sunan Kalijaga, yang membantu warga menghentikan banjir
                dengan menciptakan sembilan lubang penyedot air, dikenal sebagai
                Luweng Sanga. Warga Wotawati mulai memeluk Islam sambil
                melestarikan adat tradisi mereka, dan peninggalan sejarah
                seperti Song Putri, Watu Duk, Punthuk, Luweng Sanga, Rasulan,
                dan pusaka-pusaka Majapahit tetap menjadi saksi bisu sejarah
                panjang kampung ini.
              </Typography>
              <div className="flex justify-center gap-2">
                <button className="border border-accent text-accent bg-transparent hover:bg-accent hover:text-black focus:outline-none focus:ring-2 focus:ring-white py-2 px-4 rounded-md transition duration-200">
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

import { Carousel, Typography, Button } from "@material-tailwind/react";
import { First, Second, Third } from "../assets/CarouselImages/imageImports";

export function CarouselWithContent() {
  return (
    <div className="h-full flex items-center rounded-b-lg lg:rounded-l-lg brightness-75">
      <Carousel
        className="rounded-xl shadow-none lg:shadow-md lg:h-5/6 overflow-hidden"
        autoplay
      >
        <div className="relative w-full h-full">
          <img
            loading="lazy"
            src={First}
            alt="image 1"
            className="w-full h-[50rem] object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src={Second}
          alt="image 2"
          className="w-full h-full object-cover"
        />
        <img
          loading="lazy"
          src={Third}
          alt="image 3"
          className="w-full h-full object-cover"
        />
      </Carousel>
    </div>
  );
}

import { Image } from "../atoms/Image";
import heroImage from "../../assets/hero-img.png";
import { Text } from "../atoms/Text";
import { HeroTexts } from "../particles/DataLists";
import { Button } from "../atoms/Button";
import { Fade, Slide } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <section 
      className="w-full lg:h-screen md:h-[550px] h-[830px] relative overflow-x-hidden flex justify-end bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <main className="w-full lg:h-full h-auto grid md:grid-cols-2 absolute top-0 left-0 lg:px-24 md:px-8 px-5 pt-24 md:pt-32 lg:pt-0">
        <div className="flex flex-col justify-center items-center gap-4 md:gap-6 gap-3 md:order-1 order-2">
          <Text
            as="h1"
            className="text-color3 lg:text-5xl md:text-3xl text-xl font-medium text-center md:text-start mt-8"
          >
            <Fade>{HeroTexts.secondText}</Fade>
          </Text>
          <Text
            as="p"
            className="text-color3 md:text-base text-sm text-center md:text-start font-light"
          >
            <Fade>{HeroTexts.thirdText}</Fade>
          </Text>
          <div className="w-full flex md:justify-start justify-center items-center lg:gap-12 md:gap-6 gap-0">
            <Button
              type="button"
              className="outline-none border-none lg:px-7 px-5 py-3 bg-color2 text-white font-extralight rounded-lg"
              onClick={() => window.open('https://wa.link/g6l89n', '_blank')}
            >
              {HeroTexts.firstButton}
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center md:order-2 order-1">
          <Slide direction="right">
            <Image
              image={heroImage}
              alt="Hero Image"
              className="lg:h-[70%] lg:w-[90%] md:h-full md:w-full w-[90%] h-[50vh] object-contain"
            />
          </Slide>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
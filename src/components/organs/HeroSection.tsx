import { Image } from "../atoms/Image";
import bgImage from "../../assets/HeroVector.png";
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
        <div className="flex flex-col justify-center md:gap-6 gap-3 md:order-1 order-2">
          {/* <Text as="p" className="text-color1 uppercase tracking-widest lg:text-base  text-sm font-normal">
            <Fade>{HeroTexts.firstText}</Fade>
          </Text> */}
          <Text
            as="h1"
            className="text-color3 lg:text-5xl md:text-3xl text-xl font-medium"
          >
            <Fade>{HeroTexts.secondText}</Fade>
          </Text>
          <Text
            as="p"
            className="text-color3 md:text-base text-sm text-justify font-light"
          >
            <Fade>{HeroTexts.thirdText}</Fade>
          </Text>
          <div className="w-full flex md:justify-start justify-between items-center lg:gap-12 md:gap-6 gap-0">
            <Button
              type="button"
              className="outline-none border-none lg:px-7 px-5 py-3 bg-color2 text-white font-extralight rounded-lg"
            >
              {HeroTexts.firstButton}
            </Button>
            {/* <div className="flex items-center lg:gap-6 gap-3 cursor-pointer">
              <Text as="span" className="relative flex h-14 w-14">
                <Text
                  as="span"
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-color1 opacity-75"
                ></Text>
                <Text
                  as="span"
                  className="relative flex justify-center items-center text-white rounded-full h-14 w-14 bg-color1"
                >
                  <Play size={20} color="currentColor" weight="fill" />
                </Text>
              </Text>
              <Button type="button" className="outline-none border-none">
                {HeroTexts.secondButton}
              </Button>
            </div> */}
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
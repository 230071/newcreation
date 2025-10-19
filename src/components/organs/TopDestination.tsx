import { useRef } from "react";
import { Text } from "../atoms/Text";
import { TopDestinationTexts } from "../particles/DataLists";
import Slider from "react-slick";
import { Button } from "../atoms/Button";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

// Helper function to extract YouTube video ID from URL
const getYouTubeEmbedUrl = (url: string): string => {
  try {
    const urlObj = new URL(url);

    // Handle youtube.com/shorts/ format
    if (urlObj.pathname.includes("/shorts/")) {
      const videoId = urlObj.pathname.split("/shorts/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Handle youtube.com/watch?v= format
    if (urlObj.searchParams.has("v")) {
      const videoId = urlObj.searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Handle youtu.be/ format
    if (urlObj.hostname === "youtu.be") {
      const videoId = urlObj.pathname.slice(1);
      return `https://www.youtube.com/embed/${videoId}`;
    }

    return "";
  } catch (error) {
    console.error("Invalid YouTube URL:", url);
    return "";
  }
};

const TopDestination = () => {
  const sliderRef = useRef<Slider | null>(null);

  // Function for next button
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  // function for previous button
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Slider settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="w-full h-auto flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6 my-10">
      <Text
        as="p"
        className="font-light text-base text-color3/80 tracking-widest"
      >
        {TopDestinationTexts.firstText}
      </Text>
      <Text
        as="h2"
        className="md:text-2xl text-xl text-center mt-3 max-w-xl font-medium capitalize text-color3"
      >
        {TopDestinationTexts.secondText}
      </Text>

      {/* Controllers  */}
      <div className="mt-12 w-full flex justify-end gap-2 items-center md:px-6 px-3">
        <Button
          onClick={previous}
          className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full"
          type="button"
        >
          <CaretLeft size={18} color="currentColor" weight="fill" />
        </Button>
        <Button
          onClick={next}
          className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full"
          type="button"
        >
          <CaretRight size={18} color="currentColor" weight="fill" />
        </Button>
      </div>

      {/* Slides  */}
      {/* Slides  */}
      <div className="w-full h-auto mt-4">
        <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
          {TopDestinationTexts.cards.map((card, index) => (
            <div key={index} className="md:px-6 px-3 h-full">
              <div className="!flex !flex-col overflow-hidden shadow-md rounded-lg cursor-pointer group bg-white !h-full">
                {/* YouTube Video Embed */}
                <div className="w-full h-[250px] overflow-hidden bg-black flex-shrink-0">
                  <iframe
                    src={getYouTubeEmbedUrl(card.url)}
                    title={card.country}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-col gap-4 w-full px-5 py-5 flex-grow">
                  <div className="flex justify-between items-center">
                    <Text as="h4" className="text-base font-medium text-color3">
                      {card.country}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TopDestination;

import { Text } from "../atoms/Text";
import { ServiceTexts } from "../particles/DataLists";
import GroupOfPlus from "../../assets/plusGroup.png";
import { Card } from "../molecules/Card";
import { Image } from "../atoms/Image";
import { Fade } from "react-awesome-reveal";

const Services = () => {
  // Convert a normal YouTube URL into an embeddable one
  const getYouTubeEmbedUrl = (url: string) => {
    if (!url || url === "#") return "";
    return url
      .replace("watch?v=", "embed/")
      .replace("youtu.be/", "www.youtube.com/embed/")
      .split("?")[0];
  };

  return (
    <section className="w-full h-auto flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6">
      {/* <Image
        image={GroupOfPlus}
        alt="Vector"
        className="absolute top-0 right-4 lg:h-36 h-24"
      /> */}
      <main className="w-full pt-32 flex flex-col gap-3 items-center justify-center">
        <Text
          as="p"
          className="font-light text-base text-color3/80 tracking-widest"
        >
          <Fade>{ServiceTexts.firstText}</Fade>
        </Text>
        <Text
          as="h2"
          className="md:text-2xl text-center text-lg font-medium capitalize text-color3"
        >
          <Fade>{ServiceTexts.secondText}</Fade>
        </Text>

        <div className="w-full h-auto grid lg:grid-cols-4 md:grid-cols-2 lg:gap-7 md:gap-10 gap-7 my-12 z-20 px-8 md:px-0">
          {ServiceTexts.cards.map((card, index) => (
            <Card
              key={index}
              cardClass="w-full bg-white flex flex-col items-center justify-center py-6 cursor-pointer transition duration-300 hover:shadow-xl px-5 rounded-xl cardPseudo after:bg-color1"
              imageWrapperClass="hidden" // hide image wrapper
              imageAlt=""
              imageSrc=""
              textWrapperClass="w-full flex flex-col items-center gap-2"
            >
              <div className="w-full aspect-video rounded-lg overflow-hidden mb-3">
                {card.url && card.url !== "#" ? (
                  <iframe
                    className="w-full h-full"
                    src={getYouTubeEmbedUrl(card.url)}
                    title={card.firstText}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
                    No video available
                  </div>
                )}
              </div>

              <Text as="h4" className="text-base font-medium text-color3">
                {card.firstText}
              </Text>
              <Text
                as="p"
                className="text-sm font-light text-center text-color3"
              >
                {card.secondText}
              </Text>
            </Card>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Services;

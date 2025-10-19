import { Image } from "../atoms/Image";
import logo from "../../assets/nc__logo.png";
import { Text } from "../atoms/Text";
import { FooterTexts } from "../particles/DataLists";
import { List } from "../atoms/List";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-white">
      <section className="w-full h-auto grid lg:grid-cols-4 md:grid-cols-3 lg:px-20 md:px-12 px-6 py-16 gap-7 md:gap-4 lg:gap-0">
        <div className="flex flex-col items-start">
          <Image className="w-28" image={logo} alt="Logo" as="a" href="/" />
          <Text className="text-sm text-color4" as="p">
            {FooterTexts.underLogoText}
          </Text>
        </div>

        <div className="flex flex-col md:items-start gap-4 md:mt-8">
          <Text className="text-xl text-color3" as="h2">
            {FooterTexts.quickLinks.caption}
          </Text>
          <ul className="flex flex-col gap-2">
            {FooterTexts.quickLinks.links.map((link, index) => (
              <List key={index} className="text-sm">
                <Link
                  to={link.url}
                  className="text-color4 transition-all duration-300 hover:underline"
                >
                  {link.name}
                </Link>
              </List>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:items-start gap-4 md:mt-8">
          <Text className="text-xl text-color3" as="h2">
            {FooterTexts.contacts.caption}
          </Text>
          <ul className="flex flex-col gap-2">
            {FooterTexts.contacts.links.map((link, index) => (
              <List key={index} className="text-sm">
                <Link
                  to={link.url}
                  className="text-color4 transition-all duration-300 hover:underline break-words"
                >
                  {link.name}
                </Link>
              </List>
            ))}
          </ul>
        </div>

        {/* <div className="flex flex-col lg:items-center gap-4 md:mt-8">
                    <Text className="text-xl text-color3" as="h2">
                        {FooterTexts.more.caption}
                    </Text>
                    <ul className="flex flex-col gap-2 lg:ml-10">
                        {
                            FooterTexts.more.links.map((link, index) => (
                                <List key={index} className="text-sm">
                                    <Link to={link.url} className="text-color4 transition-all duration-300 hover:underline">{link.name}</Link>
                                </List>
                            ))
                        }
                    </ul>
                </div> */}

        <div className="flex flex-col lg:items-start w-full md:mt-8 gap-4">
          <ul className="w-full flex items-center lg:justify-center gap-4">
            <li>
              <a
                href="https://www.facebook.com/newcreationgathering"
                target="_blank"
                rel="noopener noreferrer"
                className="text-color3 border border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white"
              >
                <FaFacebook size={15} />
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/@newcreation-2017"
                target="_blank"
                rel="noopener noreferrer"
                className="text-color3 border border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white"
              >
                <FaYoutube size={15} />
              </a>
            </li>

            <li>
              <a
                href="https://www.tiktok.com/@newcreationgathering?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-color3 border border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white"
              >
                <FaTiktok size={15} />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <Text className="text-center bg-color4 text-white text-xs py-6 font-light">
        Copyright 2025. newcreationgathering2017. All rights reserved.
      </Text>
    </footer>
  );
};

export default Footer;

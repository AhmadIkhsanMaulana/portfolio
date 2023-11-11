import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";

import { styles } from "../styles";

const socialMedia = [
  {
    id: "social-media-1",
    icon: <IoLogoLinkedin />,
    link: "https://www.linkedin.com/in/ahmadikhsanmaulana/",
  },
  {
    id: "social-media-2",
    icon: <IoLogoGithub />,
    link: "https://github.com/AhmadIkhsanMaulana/",
  },
  {
    id: "social-media-3",
    icon: <IoLogoYoutube />,
    link: "https://www.youtube.com/@AhmadIkhsanMaulana/",
  },
  {
    id: "social-media-4",
    icon: <IoLogoInstagram />,
    link: "https://www.instagram.com/ahmdikhsn_/",
  },
];

const Footer = () => (
    <nav
    className={`${
      styles.paddingX
    }`}
  >
    <section
        className={`flex justify-center items-center sm:py-16 py-6 flex-col`}
    >
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#232631]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
            {/* thanks to JavaScript Mastery for the tutorial provided */}
            Copyright Ⓒ 2023 Ahmad Ikhsan Maulana. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
            {socialMedia.map((social, index) => (
                <div
                    key={index}
                    className={`w-[21px] h-[21px] text-white text-2xl cursor-pointer ${
                        index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                    }`}
                    onClick={() => window.open(social.link, '_blank')}
                    >
                    {social.icon}
                </div>
            ))}
        </div>
    </div>
    </section>
  </nav>
);

export default Footer;
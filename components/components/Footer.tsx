import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import Image from "next/image";

export const socialMedia = [
  {
    id: 1,
    img: "/facebook.png",
  },
  {
    id: 2,
    img: "/x.png",
  },
  {
    id: 3,
    img: "/instagram.png",
  },
];

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-black">
           <span className="text-purple">Be A Life Changer </span> For A Woman 
        </h1>
       
        <p className="text-black md:mt-10 my-5 text-center">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate blanditiis quisquam tenetur ipsam ea sapiente earum eos? Adipisci sequi consectetur quidem cumque blanditiis non ea porro deleniti hic assumenda.
        </p>
        <a href="#">
          <MagicButton
            title="Donate"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Refugio.today
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

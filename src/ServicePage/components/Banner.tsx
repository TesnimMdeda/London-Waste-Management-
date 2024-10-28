import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import BannerImageDesktop from "@/assets/images/Banner.png";
import BannerImageMobile from "@/assets/images/BannerMobile.png";
import { PhoneCall } from "lucide-react";
import { Feature, features } from "@/SevicesSection/featureSection";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-[800px] md:h-[750px] flex items-center justify-center bg-gradient-to-r from-gray-900/50 to-gray-900/50">
      {/* Desktop background image */}
      <Image
        src={BannerImageDesktop}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        className="hidden md:block "
      />

      {/* Mobile background image */}
      <Image
        src={BannerImageMobile}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        className="md:hidden"
      />

      <div className="relative z-10 text-white text-center w-full mx-2 md:max-w-3xl ld:maw-w-4xl p-8 mb-2 bg-gray-900/50 backdrop-blur-lg rounded-xl shadow-xl ">
        <nav className="mb-4 text-sm text-gray-300">
          <span className="mx-2">Maintenances</span>{" "}
          <span className=" m-1">●</span>
          <span className="mx-2">Repairs</span> <span className="m-1">●</span>
          <span className="mx-2">Improvements</span>{" "}
        </nav>

        <h1 className="text-3xl md:text-5xl font-bold mb-8 md:mx-[6.5rem]">
          Need improvement or repair your home? we can help!
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4 mb-4">
          <span className="text-xs md:text-sm">✓ Free Quotes</span>
          <span className="text-xs md:text-sm">✓ 100% Commitment-Free</span>
        </div>

        <Button
          size="lg"
          className="bg-[#8DC044] hover:bg-[#8DC044] px-6 py-3 rounded-full mb-4"
        >
          <a href={`https://wa.me/ 02030971517`}>
            {" "}
            <PhoneCall className="inline mr-2" /> Call Us Now
          </a>
        </Button>

        <div className="md:flex md:justify-around md:mt-8 grid grid-cols-2 gap-4 mt-4">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              text={feature.text}
              layout="row"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;

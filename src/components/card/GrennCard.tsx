import Image from "next/image";
import BarImage from "@/assets/images/bar.png";
import { cards } from "@/utils/satisfactioCard";

export const SatisfactionSection = () => {
  return (
    <div className="relative h-auto bg-[#8DC044] w-full p-5 rounded-lg mt-8">
      <div className="absolute inset-y-0 -left-1 -right-1 flex justify-between items-center mt-[60px]">
        <div className="md:flex hidden justify-center items-center">
          <Image src={BarImage} alt="Bar Image" height={500} width={50} />
        </div>

        <div className="md:flex hidden justify-center items-center transform scale-x-[-1]">
          <Image src={BarImage} alt="Bar Image" />
        </div>
      </div>

      <div className=" md:px-12 lg:px-24 md:text-left text-center">
        <div className="md:grid md:grid-cols-2 md:gap-24 p-6">
          <h2 className="text-white md:text-4xl text-3xl font-bold mb-4">
            Fast, Friendly, and Satisfaction Guarantee
          </h2>
          <p className="text-[#263238] text-sm max-w-2xl mx-auto mt-8">
            No matter how big or small your worries, whether it’s for the
            interior or exterior of your home, we are ready to serve and help
            you solve your home problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 m-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start space-x-4"
            >
              <div className="md:flex-shrink-0">
                <Image
                  src={card.imgSrc}
                  alt={card.title}
                  className={`${index === 0 ? "h-14 w-14" : "h-10 w-10"} `}
                  width={32}
                  height={32}
                />
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold md:mb-2 md:mt-0 my-4">
                  {card.title}
                </h3>
                <p className="text-[#263238] text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

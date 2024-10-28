import React from "react";
import { cardData } from "@/utils/card";
import { ServiceCard } from "@/components/card/servicesCard";
import Link from "next/link";

const ServiceSection: React.FC = () => {
  const cards = cardData.map((service, index) => (
    <Link key={index} href={`${service.id}/services/`}>
      <ServiceCard
        id={service.id}
        title={service.title}
        imgSrc={service.imgSrc}
      />
    </Link>
  ));

  return (
    <div className="flex flex-col items-center mt-20 w-full">
      <div className="text-center mb-4">
        <div className="flex justify-center items-center">
          <p className="text-4xl mr-2 font-bold">Our Service</p>
        </div>
        <p className="text-md text-gray-500 mt-3 m-4 max-w-[480px]">
          Lorem ipsum dolor sit amet consectetur. Nunc risus ipsum ut et amet
          est in porttitor lacus. Id nisl nulla elementum vulputate vitae.
        </p>
      </div>
      <div className="flex flex-col items-center mt-24 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-24 gap-x-10">
          {cards}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

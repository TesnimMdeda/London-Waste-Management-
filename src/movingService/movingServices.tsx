"use client";

import React, { useRef } from "react";
import BannerMovingServices from "@/assets/images/MovingService.png";
import Banner from "@/components/Banner";
import QuotationForm from "@/quotation/quotation";
import { SatisfactionSection } from "@/components/card/GrennCard";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { movingServicesData } from "@/utils/movingServicesData";
import Image from "next/image";

export default function MovingServices() {
  const quotationFormRef = useRef<HTMLDivElement>(null);

  const scrollToQuotationForm = () => {
    quotationFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Banner title="Moving Services" imageUrl={BannerMovingServices.src} />
      <div className="flex justify-center items-center my-8">
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
        >
          <CarouselContent>
            {movingServicesData.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card
                  className="border-none shadow-md h-64 mt-10 transition-colors duration-300 hover:bg-white cursor-pointer"
                  onClick={scrollToQuotationForm}
                >
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                    <div className="w-32 h-32 mb-4">
                      <Image
                        src={service.imgSrc}
                        alt={service.title}
                        width={128}
                        height={128}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-center">
                      {service.title}
                    </h3>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div ref={quotationFormRef}>
        <QuotationForm />
      </div>
      <div className="mx-10 mb-14">
        <SatisfactionSection />
      </div>
      <QuotationForm />
      <div className="mx-10 mb-14">
        <SatisfactionSection />
      </div>
    </div>
  );
}

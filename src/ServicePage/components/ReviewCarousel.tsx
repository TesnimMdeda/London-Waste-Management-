"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import trustpilot from "@/assets/icons/trust.png";
import avatar from "@/assets/images/avatar.png";

type Review = {
  id: number;
  name: string;
  rating: number;
  content: string;
  avatar: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Kende Attila",
    rating: 4,
    content:
      "Lorem ipsum dolor sit amet consectetur. Sed eget pellentesque nam faucibus porttitor augue et sodales tempor. Felis in feugiat imperdiet ac nec facilisi. Sit volutpat in sit adipiscing in erat. Praesent aliqu am in fusce rhoncus.",
    avatar: avatar.src,
  },
  {
    id: 2,
    name: "Jane Doe",
    rating: 5,
    content:
      "Excellent service! I'm very satisfied with the product and the customer support. Would definitely recommend to others.",
    avatar: avatar.src,
  },
  {
    id: 3,
    name: "John Smith",
    rating: 4,
    content:
      "Great experience overall. The product met my expectations and the delivery was quick. Only minor issue was with the packaging.",
    avatar: avatar.src,
  },
];

export default function EmblaReviewCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-4">
        Here our original reviews from trusted platform
      </h2>
      <Image
        src={trustpilot.src}
        width={150}
        height={50}
        alt="Trustpilot"
        className="mx-auto mb-8"
      />
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review) => (
              <div key={review.id} className="flex-[0_0_100%] min-w-0 pl-4">
                <div className="bg-white p-6 rounded-lg">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center mb-4">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={64}
                        height={64}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{review.name}</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < review.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-md text-gray-600 text-center">
                      {review.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#8DC044] rounded-full md:p-1 mx-2 shadow-md"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#8DC044] rounded-full md:p-1 shadow-md"
          onClick={scrollNext}
          disabled={!canScrollNext}
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {reviews.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full mx-1 ${
              index === selectedIndex ? "bg-[#8DC044]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

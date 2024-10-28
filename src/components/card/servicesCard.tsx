import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { ServiceCardProps } from "./types";
import { useRouter } from "next/router";

export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  imgSrc,
  className,
  ...props
}) => {
  const cardContent = (
    <>
      <figure>
        <div className="rounded-lg absolute">
          <Image width={140} height={140} src={imgSrc} alt={title} />
        </div>
      </figure>
      <div className="card-body p-3 flex flex-col justify-center items-center">
        {/* Center the title both horizontally and vertically */}
        <h2 className="card-title text-lg text-center mt-10">{title}</h2>
      </div>
    </>
  );

  return (
    <div
      {...props}
      className={cn(
        "card shadow bg-[#fafafa] border-[1px] mb-5 border-gray-200 hover:border-[#7ad03a] hover:bg-white hover:text-[#8dc044] hover:shadow-lg max-w-[240px] h-[250px] w-[264px] p-2 transition duration-1000 items-center",
        className
      )}
    >
      {cardContent}
    </div>
  );
};

import Image from "next/image";
import { cn } from "@/lib/utils";

interface BannerProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
}

export default function Banner({ imageUrl, title, subtitle }: BannerProps) {
  return (
    <div className={cn("relative h-[200px] w-full overflow-hidden")}>
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0" />
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12">
        <h1 className=" font-bold text-white md:text-[52px] text-2xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 max-w-xl text-sm text-gray-200 sm:text-base md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

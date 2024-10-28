import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import logoImg from "@/assets/images/logos.png";
import { CheckIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function HomeSection() {
  const services = [
    "Repair and Installation",
    "Maintenance",
    "Home Security Services",
    "Plumbing",
    "Budget-friendly",
  ];

  return (
    <Card className="w-full max-w-max mx-auto bg-white border-none mt-10 md:p-10">
      <CardContent className="flex flex-col-reverse md:flex-row gap-x-10 justify-between md:items-start max-w-full">
        {/* Left side - Text Content */}
        <div className="flex-1 w-full h-full text-left">
          <CardHeader>
            <CardTitle className="text-3xl sm:text-4xl font-bold text-black text-center md:text-left mb-8">
              Professional for your home services
            </CardTitle>
            <CardDescription className=" text-base text-gray-600 text-center md:text-left mt-10">
              You need help for home care? We are home care professionals
              focused in the US region. We provide several services that support
              home services
            </CardDescription>
          </CardHeader>

          <div className="gap-8 md:grid md:grid-cols-2 flex flex-col justify-center items-center mt-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckIcon className="text-[#8DC044] ml-2" />
                <span className="text-bold md:text-xl text-sm text-[#8DC044]">
                  {service}
                </span>
              </div>
            ))}
          </div>

          <Button className="bg-[#8DC044] md:w-full hidden md:flex text-white font-normal text-left h-16 px-6 py-5 rounded-3xl mt-10 hover:bg-[#8DC044] break-words max-w-full">
            We already provide 24 hours fast services to help you .{" "}
            <span>You can contact us at:</span>
            <a
              href="tel:+ 02030971517"
              className="flex items-center space-x-1 underline font-bold hover:text-[#E6F3D3] transition-colors duration-300 ml-2"
            >
              <span>(888) 617-5894</span>
            </a>
          </Button>
        </div>

        {/* Right side - Overlapping Circular Images */}
        <div className="flex-1 flex  justify-end mt:pt-20 ">
          <div>
            <Image src={logoImg} alt="Home Services Collage" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

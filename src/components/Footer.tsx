import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import footer from "@/assets/images/Footer.png";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Card, CardContent } from "./ui/card";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
import { CaretDownIcon } from "@radix-ui/react-icons";

export default function Footer() {
  const ServicesDropdown: React.FC<{ className?: string }> = ({
    className,
  }) => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={cn(
            "text-white focus:outline-none hover:text-[#2c3a47]  flex items-center",
            className
          )}
        >
          Services{" "}
          <CaretDownIcon className="CaretDown ml-2" aria-hidden="true" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="bg-[#8cc63f] text-white rounded shadow-lg p-2 z-50">
        <DropdownMenu.Item className="px-4 py-2 outline-none hover:text-[#2c3a47]  cursor-pointer">
          <Link href="/services">LWM Services</Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="px-4 py-2 outline-none hover:text-[#2c3a47]  cursor-pointer">
          <Link href="/moving-services">Moving Services</Link>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );

  return (
    <div className="flex flex-col max-h-screen">
      <section className="bg-[#243037] text-white">
        <div className="mx-auto flex flex-col-reverse md:flex-row items-center ">
          <div className="md:w-1/2 mb-8 md:mb-0 md:p-24 p-12 ">
            <h1 className="md:text-[52px] text-2xl flex flex-row  font-bold mb-4 text-center md:text-left">
              Already to get rid of trash from your home? Let's Talk!
            </h1>
            <div className="flex flex-col md:flex-row md:items-start items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 text-[#8DC044]">
              <span className="text-xs md:text-sm">✓ Free Quotes</span>
              <span className="text-xs md:text-sm">✓ 100% Commitment-Free</span>
            </div>
            <div className="flex justify-center md:justify-start items-center md:items-start">
              <Button
                size="lg"
                className="bg-[#8DC044] hover:bg-[#8DC044] px-6 py-3 rounded-full mb-4"
              >
                <a href={`https://wa.me/02030971517`}>
                  {" "}
                  <PhoneCall className="inline mr-2" /> Call Us Now
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex justify-end mb-0 order-first md:order-none">
            <Image
              src={footer.src}
              alt="Person pointing at a green phone"
              width={400}
              height={400}
              className="w-auto rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </section>
      <section className="bg-[#8cc63f] py-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white w-full h-full rounded-xl">
            <CardContent className="p-5 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-4 md:mb-0">
                <h2 className="text-xl font-medium  text-[#8DC044] mb-2">
                  Stay Connected with Our Newsletter
                </h2>
                <p className="text-[#8DC044]  text-md mb-4">
                  Subscribe to our newsletter to get more news, promo, or news
                  services
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <form className="flex items-center bg-[#1e2832] rounded-full md:p-2 p-1 ">
                  <Input
                    type="email"
                    placeholder="Enter email address"
                    className="flex-grow bg-transparent text-white border-0 focus:ring-0 focus:outline-none placeholder-gray-400 px-4 py-2"
                    style={{ boxShadow: "none" }}
                  />
                  <Button
                    type="submit"
                    className="bg-transparent hover:bg-[#2c3a47] text-white font-semibold px-4 py-2 rounded-full transition-colors duration-200"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <div className="bg-[#8cc63f] text-white px-24">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <p className="mb-4">
              Thank you for your interest in our trash removal services.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/rubbishlovers">
                <FaFacebookSquare size={24} className="hover:text-[#2c3a47]" />
              </Link>
              <Link href="https://www.instagram.com/rubbishlovers/">
                <FaInstagram size={24} className="hover:text-[#2c3a47]" />
              </Link>
              <Link href="https://www.linkedin.com/company/rubbishlovers">
                <FaLinkedin size={24} className="hover:text-[#2c3a47]" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 ">
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-[#2c3a47]">
                    Home
                  </Link>
                </li>
                <li>
                  <ServicesDropdown />
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#2c3a47]">
                    Our Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#2c3a47]">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-[#2c3a47]">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-2">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>License</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

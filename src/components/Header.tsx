// components/Header.tsx
import MySVG from "@/assets/icons";
import Link from "next/link";
import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import CartSheet from "@/ShoppingSection/CartSheet";

const ServicesDropdown: React.FC<{ className?: string }> = ({ className }) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <button
        className={cn(
          "text-white focus:outline-none hover:text-[#7ad03a] flex items-center",
          className
        )}
      >
        Services <CaretDownIcon className="CaretDown ml-2" aria-hidden="true" />
      </button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content className="bg-[#263238] text-white rounded shadow-lg p-2 z-50">
      <DropdownMenu.Item className="px-4 py-2 outline-none hover:text-[#7ad03a] cursor-pointer">
        <Link href="/services">LWM Services</Link>
      </DropdownMenu.Item>
      <DropdownMenu.Item className="px-4 py-2 outline-none hover:text-[#7ad03a] cursor-pointer">
        <Link href="/moving-services">Moving Services</Link>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);

export default function Header() {
  return (
    <header className="navbar bg-[#263238] w-full border-slate-100 ">
      <div className=" w-full flex justify-between items-center lg:px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <MySVG fillColor="white" />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-white">
          <Link href="/" className="hover:text-[#7ad03a]">
            Home
          </Link>
          <ServicesDropdown />
          <Link href="/blog" className="hover:text-[#7ad03a]">
            Our Blog
          </Link>
          <Link href="/contact" className="hover:text-[#7ad03a]">
            Contact
          </Link>
          <Link href="/faq" className="hover:text-[#7ad03a]">
            FAQ
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4 text-white">
          <CartSheet />
          <span className="text-[#7ad03a] m-1">●</span> 24 Hour Services
        </div>

        {/* Mobile Menu for small screens */}
        <div className="md:hidden w-full">
          <CartSheet />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden  bg-transparent border-0"
              >
                <MenuIcon className="h-6 w-6 text-white " />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#263238] flex flex-col"
              closeButtonColor="white"
            >
              <div className="flex-grow ">
                <div className="px-6">
                  <Link href="#" prefetch={false}>
                    <MySVG fillColor="white" />
                  </Link>
                </div>
                <div className="grid gap-8 py-12">
                  <Link
                    href="/"
                    className="hover:bg-[#7ad03a] justify-center flex w-full items-center py-2 text-xl font-semibold text-white h-[88px]"
                  >
                    Home
                  </Link>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="services" className="border-b-0">
                      <AccordionTrigger className="hover:bg-[#7ad03a] justify-center flex w-full items-center py-2 text-xl font-semibold text-white h-[88px]">
                        Service
                      </AccordionTrigger>
                      <AccordionContent>
                        <Link
                          href="/services"
                          className="hover:bg-[#7ad03a] justify-center flex w-full items-center py-2 text-lg font-medium text-white h-[66px]"
                        >
                          LWM Service
                        </Link>
                        <Link
                          href="/moving-service"
                          className="hover:bg-[#7ad03a] justify-center flex w-full items-center py-2 text-lg font-medium text-white h-[66px]"
                        >
                          Moving Service
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Link
                    href="/blog"
                    className="hover:bg-[#7ad03a] justify-center flex w-full items-center py-2 text-xl font-semibold text-white h-[88px]"
                  >
                    Our Blog
                  </Link>
                  <Link
                    href="/contact"
                    className="hover:bg-[#7ad03a] justify-center flex w-full items-center py-2 text-xl font-semibold text-white h-[88px]"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/faq"
                    className="hover:bg-[#7ad03a] justify-center flex w-full items-center py-2 text-xl font-semibold text-white h-[88px]"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
              <SheetFooter>
                <div className="self-center space-x-4 text-white">
                  <span className="text-[#7ad03a] m-1">●</span> 24 Hour Services
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

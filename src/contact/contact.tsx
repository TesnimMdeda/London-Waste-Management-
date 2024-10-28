"use client";

import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import img from "@/assets/images/contact.png";
import { Card } from "@/components/ui/card";
import { formSchema } from "./utils";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#8DC044]">
      <div className="flex flex-col md:flex-row flex-grow">
        <div className="md:hidden p-4 bg-white text-center">
          <h1 className="text-2xl font-bold text-black">
            Let's Get in <span className="text-[#8DC044]">Touch!</span>
          </h1>
          <h2 className="font-semibold">
            Have a question or need assistance? Reach out to us via email,
            phone, or the contact form below. We're eager to assist you.
          </h2>
          <h2 className="text-[#8DC044] font-bold">Nice hearing from you </h2>
        </div>

        <div className="md:w-3/5 relative h-64 md:h-auto bg-[#8DC044]">
          <Image
            src={img.src}
            alt="Contact"
            layout="fill"
            objectFit="cover"
            className="lg:rounded-bl-[90px]"
          />
          <div className="absolute hidden md:block w-1/2 md:top-14 md:left-1 p-4">
            <h1 className="text-3xl font-bold text-black">
              Let's Get in <span className="text-[#8DC044]">Touch!</span>
            </h1>
            <h2 className="font-semibold">
              Have a question or need assistance? Reach out to us via email,
              phone, or the contact form below. We're eager to assist you.
            </h2>
            <h2 className="text-[#8DC044] font-bold">Nice hearing from you </h2>
          </div>
        </div>
        <div className="md:w-2/5 bg-white p-10 flex items-center justify-center md:rounded-br-[100px] ">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
            <div>
              <Input
                type="text"
                placeholder="FullName"
                className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                style={{ boxShadow: "none" }}
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="text-red-500 mt-1">{errors.fullName.message}</p>
              )}
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email address"
                className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                style={{ boxShadow: "none" }}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Textarea
                placeholder="Message"
                {...register("message")}
                className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-3xl"
                style={{ boxShadow: "none" }}
                rows={4}
              />
              {errors.message && (
                <p className="text-red-500 mt-1">{errors.message.message}</p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full rounded-full bg-[#8DC044] hover:bg-[#7CB342] text-white font-semibold py-3"
            >
              SEND MESSAGE
            </Button>
          </form>
        </div>
      </div>

      <footer className="text-black py-8 bg-[#8DC044] ">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <Card className="bg-transparent">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1006.916925607229!2d-0.4369829!3d51.5091283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876738f135d00e1%3A0xa48782d08662b977!2sLondon+Waste+Management!5e0!3m2!1sen!2suk!4v1698735254321!5m2!1sen!2suk"
                width="100%"
                height="200"
                className="rounded-lg"
                loading="lazy"
              ></iframe>
            </Card>
          </div>
          <div className="text-white grid grid-rows-3 self-center md:gap-5 gap-2 flex-grow md:w-1/2 md:pl-4 ">
            <p className="flex ">
              <Phone className="w-5 h-5 mr-2" />
              <a href={`https://wa.me/02030971517`}> 020 30971517</a>
            </p>
            <p className="flex ">
              <Mail className="w-5 h-5 mr-2" />
              <a
                href="mailto:hello@londonwastemanagement.com"
                className="underline break-all"
              >
                hello@londonwastemanagement.com
              </a>
            </p>
            <p className="flex">
              <MapPin className="w-5 h-5 mr-2" /> 6, Stockley Park, 9 The
              Square, Hayes, Heathrow UB11 1FW, United Kingdom Est
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

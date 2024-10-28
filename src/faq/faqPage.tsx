"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Faq from "./faq";
import Banner from "@/components/Banner";
import faqBanner from "@/assets/images/faq.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoveRight } from "lucide-react";
import { FormData } from "./utils";

export default function FAQ() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Handle form submission here
    console.log("Form submitted:", data);
  };

  return (
    <div>
      <Banner imageUrl={faqBanner.src} title="FAQ" />
      <div className="flex flex-col md:flex-row gap-8 p-10 ">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <Faq />
        </div>
        <div className="flex-1">
          <Card>
            <CardHeader>
              <CardTitle className="p-4 mb-4">
                Don&apos;t find your answer? Ask for support.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
                <Input
                  type="email"
                  placeholder="Email address"
                  className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                  style={{ boxShadow: "none" }}
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}

                <Input
                  type="text"
                  placeholder="Subject"
                  className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                  style={{ boxShadow: "none" }}
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && (
                  <p className="text-red-500">{errors.subject.message}</p>
                )}

                <Textarea
                  placeholder="Message (Optional)"
                  className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-3xl"
                  style={{ boxShadow: "none" }}
                  {...register("message")}
                  rows={4}
                />

                <Button
                  type="submit"
                  className="w-fit rounded-full bg-[#8DC044] hover:bg-[#8DC044]"
                >
                  SEND MESSAGE <MoveRight className=" h-6 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

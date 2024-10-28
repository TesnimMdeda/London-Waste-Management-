"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { formSchema, UploadedFile } from "./utils";
import { Icons } from "@/components/icons";
import Banner from "@/components/Banner";
import BannerQuotation from "@/assets/images/quotation.png";

type FormInputs = z.infer<typeof formSchema>;

export default function QuotationForm({ banner }: { banner?: boolean }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
  });

  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      name: file.name,
      size: file.size,
    }));
    setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 10,
    maxSize: 15 * 1024 * 1024,
  });

  const handleRemoveFile = (fileName: string) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((file) => file.name !== fileName)
    );
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  return (
    <div>
      {banner && <Banner title="Quotation" imageUrl={BannerQuotation.src} />}
      <div className="py-10 md:px-24 px-10 bg-white rounded-lg ">
        <h2 className="text-2xl font-bold mb-6">Billing Information</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Username</Label>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                  style={{ boxShadow: "none" }}
                  {...register("firstName")}
                  placeholder="First name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    first name are required
                  </p>
                )}
                <Input
                  className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                  style={{ boxShadow: "none" }}
                  {...register("lastName")}
                  placeholder="Last name"
                />
              </div>
              {errors.lastName && (
                <p className="text-red-500 text-sm">last name are required</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyName" className="whitespace-nowrap">
                Company Name (Optional)
              </Label>
              <Input
                className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                id="companyName"
                style={{ boxShadow: "none" }}
                {...register("companyName")}
              />
            </div>
          </div>
          <div className="">
            <Label htmlFor="address">Address</Label>
            <Input
              className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
              style={{ boxShadow: "none" }}
              id="address"
              {...register("address")}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="region">Region/State</Label>
              <Select
                onValueChange={(value) =>
                  register("region").onChange({ target: { value } })
                }
              >
                <SelectTrigger
                  className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                  style={{ boxShadow: "none" }}
                >
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="state1">State 1</SelectItem>
                  <SelectItem value="state2">State 2</SelectItem>
                  {/* Add more states as needed */}
                </SelectContent>
              </Select>
              {errors.region && (
                <p className="text-red-500 text-sm">{errors.region.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="road">Road</Label>
              <Select
                onValueChange={(value) =>
                  register("road").onChange({ target: { value } })
                }
              >
                <SelectTrigger
                  className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                  style={{ boxShadow: "none" }}
                >
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="road1">Road 1</SelectItem>
                  <SelectItem value="road2">Road 2</SelectItem>
                  {/* Add more roads as needed */}
                </SelectContent>
              </Select>
              {errors.road && (
                <p className="text-red-500 text-sm">{errors.road.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="doorNumber">Door number</Label>
              <Input
                className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                style={{ boxShadow: "none" }}
                id="doorNumber"
                {...register("doorNumber")}
              />
              {errors.doorNumber && (
                <p className="text-red-500 text-sm">
                  {errors.doorNumber.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="zipCode">Zip Code</Label>
              <Input
                className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                style={{ boxShadow: "none" }}
                id="zipCode"
                {...register("zipCode")}
              />
              {errors.zipCode && (
                <p className="text-red-500 text-sm">{errors.zipCode.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                style={{ boxShadow: "none" }}
                id="email"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="propertyType">Property Type</Label>
              <Input
                className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                style={{ boxShadow: "none" }}
                id="propertyType"
                {...register("propertyType")}
              />
              {errors.propertyType && (
                <p className="text-red-500 text-sm">
                  {errors.propertyType.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comments">Comments</Label>
            <Textarea
              className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-badge"
              style={{ boxShadow: "none" }}
              id="comments"
              {...register("comments")}
            />
          </div>

          {/* File Upload Section */}
          <div
            className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <p className="mb-2">Drag & Drop Files Here</p>
            <p className="text-sm text-gray-500 mb-4">OR</p>
            <Button type="button" variant="outline">
              Browse Files
            </Button>
          </div>

          {/* Display Uploaded Files */}
          <div className="space-y-4 mt-4">
            {uploadedFiles.map((file) => (
              <div key={file.name} className=" flex gap-4">
                <button
                  type="button"
                  className="text-gray-500 "
                  onClick={() => handleRemoveFile(file.name)}
                >
                  <Icons.trash className="h-4 w-4" />
                </button>
                <div>
                  <p>{file.name}</p>
                  <p className="text-sm text-gray-500">
                    {(file.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-[#8DC044] hover:bg-[#8DC044] text-white"
            >
              REQUEST A QUOTE
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

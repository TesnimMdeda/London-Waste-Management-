"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Car, CreditCard, DollarSign, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { formSchema } from "./utils";
import Banner from "@/components/Banner";
import Billing from "@/assets/images/BillingBanner.png";
import OrderDeatils from "@/ShoppingSection/orderDeatils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import venmo from "@/assets/images/venmo.png";
import paypal from "@/assets/images/paypal.png";
import amazon from "@/assets/images/amazon.png";

type FormValues = z.infer<typeof formSchema>;

export default function BillingForm() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMethod: "credit-card",
      shippingAddress: false,
    },
  });

  const paymentOptions = [
    {
      value: "cash",
      icon: <DollarSign className="w-8 h-8 text-orange-500" />,
      label: "Cash on Delivery",
    },
    {
      value: "venmo",
      icon: <Image src={venmo} alt="Venmo" width={32} height={32} />,
      label: "Venmo",
    },
    {
      value: "paypal",
      icon: <Image src={paypal} alt="Paypal" width={32} height={32} />,
      label: "Paypal",
    },
    {
      value: "amazon",
      icon: <Image src={amazon} alt="Amazon Pay" width={32} height={32} />,
      label: "Amazon Pay",
    },
    {
      value: "credit-card",
      icon: <CreditCard className="w-8 h-8 text-orange-500" />,
      label: "Debit/Credit Card",
    },
  ];

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle form submission here
  };

  const watchPaymentMethod = watch("paymentMethod");

  return (
    <div>
      <Banner imageUrl={Billing.src} title="Billing" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-20 mt-20 p-6 bg-white  px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 order-2 md:order-1">
            <Card>
              <CardHeader className="p-4">
                <CardTitle>Billing Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First name</Label>
                    <Controller
                      name="firstName"
                      control={control}
                      render={({ field }) => (
                        <Input
                          id="firstName"
                          placeholder="First name"
                          className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                          style={{ boxShadow: "none" }}
                          {...field}
                        />
                      )}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last name</Label>
                    <Controller
                      name="lastName"
                      control={control}
                      render={({ field }) => (
                        <Input
                          id="lastName"
                          placeholder="Last name"
                          className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                          style={{ boxShadow: "none" }}
                          {...field}
                        />
                      )}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="address">Address</Label>
                  <Controller
                    name="address"
                    control={control}
                    render={({ field }) => (
                      <Input
                        id="address"
                        placeholder="Address"
                        className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                        style={{ boxShadow: "none" }}
                        {...field}
                      />
                    )}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.address.message}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Controller
                      name="country"
                      control={control}
                      render={({ field }) => (
                        <Input
                          id="country"
                          placeholder="Country"
                          className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                          style={{ boxShadow: "none" }}
                          {...field}
                        />
                      )}
                    />
                    {errors.country && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.country.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="region">Region/State</Label>
                    <Controller
                      name="region"
                      control={control}
                      render={({ field }) => (
                        <Input
                          id="region"
                          placeholder="Region/State"
                          className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                          style={{ boxShadow: "none" }}
                          {...field}
                        />
                      )}
                    />
                    {errors.region && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.region.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Controller
                      name="city"
                      control={control}
                      render={({ field }) => (
                        <Input
                          id="city"
                          placeholder="City"
                          className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                          style={{ boxShadow: "none" }}
                          {...field}
                        />
                      )}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="zipCode">Zip Code</Label>
                    <Controller
                      name="zipCode"
                      control={control}
                      render={({ field }) => (
                        <Input
                          id="zipCode"
                          placeholder="Zip Code"
                          className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                          style={{ boxShadow: "none" }}
                          {...field}
                        />
                      )}
                    />
                    {errors.zipCode && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.zipCode.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <Input
                          id="email"
                          type="email"
                          placeholder="Email"
                          className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                          style={{ boxShadow: "none" }}
                          {...field}
                        />
                      )}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Phone Number"
                          className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                          style={{ boxShadow: "none" }}
                          {...field}
                        />
                      )}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-8">
                  <Controller
                    name="shippingAddress"
                    control={control}
                    render={({ field }) => (
                      <div className="flex flex-col items-start">
                        <div className="flex items-center">
                          <Checkbox
                            id="shippingAddress"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="text-white data-[state=checked]:border-[#8DC044] data-[state=checked]:bg-[#8DC044]"
                            style={{ boxShadow: "none" }}
                          />
                          <Label htmlFor="shippingAddress" className="ml-2">
                            Ship to a different address
                          </Label>
                        </div>
                        {field.value && (
                          <div className="mt-2 w-full">
                            <p className="text-sm text-gray-600 mb-2">
                              Set Your exact Location please
                            </p>
                            <div className="flex flex-col sm:flex-row gap-2 w-full">
                              <Input
                                type="url"
                                id="googleMapsUrl"
                                placeholder="Google Maps URL"
                                className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                                style={{ boxShadow: "none" }}
                                onChange={(e) => {
                                  field.onChange(e.target.value);
                                }}
                              />
                              <Button
                                type="button"
                                onClick={() =>
                                  window.open(
                                    "https://www.google.com/maps",
                                    "_blank"
                                  )
                                }
                                className="bg-[#8DC044] hover:bg-[#8DC044] text-white flex items-center justify-center rounded-full sm:w-auto"
                              >
                                PROCEED TO GOOGLE MAPS
                                <MapPin className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">
                  Payment Option
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Controller
                  name="paymentMethod"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      onValueChange={(value) => {
                        field.onChange(value);
                        setPaymentMethod(value);
                      }}
                      value={field.value}
                      className="grid grid-cols-5 gap-4"
                    >
                      {paymentOptions.map((option) => (
                        <div
                          key={option.value}
                          className="flex flex-col items-center justify-between bg-background md:border md:border-input rounded-md p-4 h-full"
                        >
                          <div className="flex flex-col items-center">
                            <div className="mb-2 h-8">{option.icon}</div>
                            <Label
                              htmlFor={option.value}
                              className="text-sm text-center"
                            >
                              {option.label}
                            </Label>
                          </div>
                          <RadioGroupItem
                            value={option.value}
                            id={option.value}
                            className="mt-2 border-2 border-gray-300 text-[#8DC044] focus:border-[#8DC044] focus:ring-[#8DC044] data-[state=checked]:border-[#8DC044]"
                          >
                            <span>Select {option.label}</span>
                          </RadioGroupItem>
                        </div>
                      ))}
                    </RadioGroup>
                  )}
                />
                {watchPaymentMethod === "credit-card" && (
                  <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">
                      Credit Card Information
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Controller
                          name="cardName"
                          control={control}
                          render={({ field }) => (
                            <Input
                              id="cardName"
                              placeholder="Name on Card"
                              className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                              style={{ boxShadow: "none" }}
                              {...field}
                            />
                          )}
                        />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Controller
                          name="cardNumber"
                          control={control}
                          render={({ field }) => (
                            <Input
                              id="cardNumber"
                              placeholder="Card Number"
                              className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                              style={{ boxShadow: "none" }}
                              {...field}
                            />
                          )}
                        />
                      </div>
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Controller
                          name="expiryDate"
                          control={control}
                          render={({ field }) => (
                            <Input
                              id="expiryDate"
                              placeholder="MM/YY"
                              className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                              style={{ boxShadow: "none" }}
                              {...field}
                            />
                          )}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Controller
                          name="cvv"
                          control={control}
                          render={({ field }) => (
                            <Input
                              id="cvv"
                              placeholder="CVV"
                              className="focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-full"
                              style={{ boxShadow: "none" }}
                              {...field}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">
                Additional Information
              </h2>
              <Label htmlFor="orderNotes">
                Order Notes <span className="text-gray-400">(Optional)</span>
              </Label>
              <Controller
                name="orderNotes"
                control={control}
                render={({ field }) => (
                  <Textarea
                    id="orderNotes"
                    placeholder="Notes about your order, e.g. special notes for delivery"
                    className=" w-full focus:ring-0 focus:border-[#8DC044] focus:border-2 mt-5 rounded-badge"
                    style={{ boxShadow: "none" }}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-8">
              <label htmlFor="terms" className="text-md">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  className="text-[#8DC044] underline"
                >
                  privacy policy.
                </a>
              </label>
            </div>

            <div className="mt-4">
              <Controller
                name="terms"
                control={control}
                render={({ field }) => (
                  <div className="flex items-start">
                    <Checkbox
                      id="terms"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="text-white data-[state=checked]:border-[#8DC044] data-[state=checked]:bg-[#8DC044] mt-1"
                      style={{ boxShadow: "none" }}
                    />
                    <label htmlFor="terms" className="ml-2 text-md">
                      I have read and agree to the website{" "}
                      <a
                        href="/terms-and-conditions"
                        target="_blank"
                        className="text-[#8DC044] underline"
                      >
                        terms and conditions*
                      </a>
                    </label>
                  </div>
                )}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.terms?.message}
                </p>
              )}
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-[#8DC044] hover:bg-[#8DC044] text-white"
              >
                Submit
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <OrderDeatils title="Card Summary" image={true} />
          </div>
        </div>
      </form>
    </div>
  );
}

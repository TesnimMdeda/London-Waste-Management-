"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/cart-context";
import { getAdditionalCost, getLocationText } from "@/utils/utils";
import { CartItemActions } from "./update-cart";
import Link from "next/link";
import { cn } from "@/lib/utils";
import RemoveItem from "./remove-item";
import { Icons } from "@/components/icons";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import Banner from "@/components/Banner";
import img from "@/assets/images/cartBanner.png";
import OrderDeatils from "./orderDeatils";

export default function ShoppingCart() {
  const [couponCode, setCouponCode] = useState("");
  const [timeSlot, setTimeSlot] = useState("Any Time 5:30 AM to 8:30 PM");
  const [date, setDate] = useState<Date>(new Date());

  const { cartItems } = useCart();

  return (
    <div>
      <Banner imageUrl={img.src} title="Cart" />
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <div className="grid gap-6 md:grid-cols-[2fr_1fr] max-w-full">
          <div className="order-1 w-full max-w-full">
            <Card className="w-full max-w-full">
              <CardContent className="w-full max-w-full">
                <table className="table-auto w-full max-w-full">
                  <thead className="hidden md:table-header-group">
                    <tr className="border-b">
                      <th className="text-left py-2">PRODUCTS</th>
                      <th className="text-right py-2">PRICE</th>
                      <th className="text-right py-2">QUANTITY</th>
                      <th className="text-right py-2">SUB-TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr
                        key={item.productDetails.id}
                        className="block md:table-row border-b md:border-none mb-4 md:mb-0"
                      >
                        <td className="block md:table-cell py-4">
                          <div className="flex items-center space-x-4 md:block">
                            <div className="flex justify-between items-center mb-2">
                              <RemoveItem item={item} icon={Icons.close} />
                            </div>
                            <div className="flex space-x-4">
                              <Image
                                src={item.productDetails.imgSrc}
                                alt={item.productDetails.title}
                                width={50}
                                height={50}
                                className="rounded-md"
                              />
                              <div>
                                <h3 className="font-semibold">
                                  {item.productDetails.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                  {getLocationText(item.itemPosition!)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="block md:table-cell text-right py-4">
                          <div className="flex justify-between md:block">
                            <span className="font-semibold md:hidden">
                              PRICE
                            </span>
                            {formatPrice(item.productDetails.price)}
                          </div>
                        </td>
                        <td className="block md:table-cell text-right py-4">
                          <div className="flex justify-between md:block">
                            <span className="font-semibold md:hidden">
                              QUANTITY
                            </span>
                            <CartItemActions item={item} />
                          </div>
                        </td>
                        <td className="block md:table-cell text-right py-4">
                          <div className="flex justify-between md:block">
                            <span className="font-semibold md:hidden">
                              SUB-TOTAL
                            </span>
                            {formatPrice(
                              item.productDetails.price * item.quantity +
                                getAdditionalCost(item.itemPosition!)
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Back to shop button */}
                <div className="flex justify-between mt-6">
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="flex items-center border-[#8DC044] text-[#8DC044] hover:bg-[#8DC044] hover:text-white rounded-badge"
                    >
                      <ChevronLeft className=" h-4 w-4" /> RETURN TO SHOP
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:order-2 order-last w-full max-w-full">
            <OrderDeatils title="Card Totals" />
          </div>

          <div className="md:order-3 order-2 w-full max-w-full">
            <p className="font-bold text-[#8DC044] mb-5 w-full">
              ALL ITEMS TO BE LEFT OUTSIDE AND COLLECTED ANYTIME DURING THE DAY
              RECEIVE 10% DISCOUNT.
            </p>
            <p className="mb-2 font-medium text-sm w-full">
              Scheduled Time Advisory: Chosen Time Slots Are Subject To Rare
              Adjustments Based On Your Postcode And Our Team's Coverage
              Schedule. We Appreciate Your Understanding And Flexibility. In The
              Unlikely Event Of Any Changes, We Will Notify You At Least One Day
              Prior To The Scheduled Collection.
            </p>
            <p className="font-medium text-sm w-full">
              If There Are More Than 2 Flights Of Stairs You Maybe Subject To
              Further Charges (Depending On Difficulty Of Access). Please Get In
              Touch If You Have Any Doubts.
            </p>
            <Card className="mt-8 w-full max-w-full">
              <CardHeader className="w-full p-4">
                <CardTitle>Collection Details</CardTitle>
              </CardHeader>
              <CardContent className="w-full max-w-full">
                <div className="font-semibold md:grid md:grid-rows-2 md:gap-4">
                  <div className="md:flex grid  items-center gap-4">
                    <h3 className="font-bold text-center md:text-left whitespace-nowrap">
                      Collection Date:
                    </h3>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="date"
                          variant="outline"
                          className={cn(
                            "justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarDays className="mr-2 h-4 w-4 rounded-badge" />
                          {date ? (
                            format(date, "dd MMMM, yyyy")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={(day) => day && setDate(day)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="grid grid-rows-1 my-5 gap-3">
                    <h3 className="font-bold mb-2 md:text-left text-center ">
                      Time Slot:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        "Any Time 6:30 AM to 8:30 PM",
                        "07:00 - 12:00",
                        "12:00 - 17:00",
                      ].map((slot) => (
                        <Button
                          key={slot}
                          variant={timeSlot === slot ? "default" : "outline"}
                          className={cn(
                            "w-full justify-center rounded-badge",
                            timeSlot === slot &&
                              "bg-[#9AC653] hover:bg-[#8AB643] text-white"
                          )}
                          onClick={() => setTimeSlot(slot)}
                        >
                          {slot}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className=" md:order-4 order-3 w-full max-w-full">
            <Card className="w-full h-fit max-w-full">
              <CardHeader className="w-full p-4">
                <CardTitle>Coupon Code</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 w-full">
                <Input
                  id="coupon"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="mr-2 w-full"
                  placeholder="Coupon Code"
                />
                <Button className="w-fit rounded-full bg-[#9AC653] hover:bg-[#8AB643] text-white font-semibold">
                  APPLY COUPON
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

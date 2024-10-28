"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAdditionalCost, orderDeatilsProps } from "@/utils/utils";
import RemoveItem from "./remove-item";
import { Icons } from "@/components/icons";
import Image from "next/image";

export default function OrderDeatils({ image, title }: orderDeatilsProps) {
  const { cartTotal, cartItems } = useCart();
  const discount = 24;
  const tax = 61.99;
  const total = cartTotal - discount + tax;

  return (
    <Card className="w-full max-w-full h-fit">
      <CardHeader className="w-full p-4">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="w-full max-w-full">
        {cartItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-4 mb-4">
            {image && (
              <>
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
                </div>
                <div>
                  <h3 className="font-semibold">{item.productDetails.title}</h3>
                  <p className="text-sm text-gray-600">
                    item position (£{getAdditionalCost(item.itemPosition!)}):{" "}
                    {item.itemPosition}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Sub-total</span>
            <span>{formatPrice(cartTotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
        {!image && (
          <Link href="/checkout">
            <Button className="w-full mt-4 rounded-full bg-[#8DC044] hover:bg-[#7DAF3A] text-white">
              PROCEED TO CHECKOUT
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}

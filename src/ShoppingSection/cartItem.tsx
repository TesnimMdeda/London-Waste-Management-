"use client";

import * as React from "react";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { type CartItem } from "@/types";
import { CartItemActions } from "./update-cart";
import { getAdditionalCost, getLocationText } from "@/utils/utils";
import RemoveItem from "./remove-item";

interface CartItemProps {
  item: CartItem;
}

export function CartItem({ item }: CartItemProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative h-16 w-16 overflow-hidden rounded">
        <Image
          src={item.productDetails.imgSrc}
          alt={item.productDetails.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="absolute object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 self-start text-sm">
        <span className="line-clamp-1">{item.productDetails.title}</span>
        <span className="">
          ({formatPrice(item.productDetails.price)} x {item.quantity}+{" "}
          {getAdditionalCost(item.itemPosition!)}) ={" "}
          {formatPrice(
            Number(item.productDetails.price) * item.quantity +
              getAdditionalCost(item.itemPosition!)
          )}
        </span>
        <span>
          {" "}
          Item Position -{" "}
          {getLocationText(item.itemPosition!) +
            "£" +
            getAdditionalCost(item.itemPosition!).toFixed(2)}
        </span>
      </div>
      <CartItemActions item={item} />
      <RemoveItem item={item} />
    </div>
  );
}

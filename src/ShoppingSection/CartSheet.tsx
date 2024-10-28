"use client";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CartItem } from "./cartItem";
import { Icons } from "@/components/icons";
import { useCart } from "@/context/cart-context";
import Link from "next/link";

export const useCartSheet = () => {
  const [open, setOpen] = React.useState(false);
  return { open, setOpen };
};

export default function CartSheet() {
  const { cartItems, cartTotal } = useCart();
  const { open, setOpen } = useCartSheet();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          aria-label="Cart"
          variant="outline"
          size="icon"
          className="relative bg-transparent text-white hover:bg-[#8DC044] border-0 hover:text-white"
        >
          {itemCount > 0 && (
            <Badge
              variant="secondary"
              className="absolute -right-1 -top-1 g-6 w-6 h-6 rounded-full p-2"
            >
              {itemCount}
            </Badge>
          )}
          <Icons.shoppingCart className="h-6 w-6" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="flex w-full flex-col pr-0 sm:max-w-lg px-4"
        closeButtonColor="black"
      >
        <SheetHeader className="px-1">
          <SheetTitle>Cart {itemCount > 0 && `(${itemCount})`}</SheetTitle>
        </SheetHeader>
        <Separator />
        {itemCount > 0 && (
          <div className="flex flex-1 flex-col gap-5 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="flex flex-col gap-5 pr-6">
                {cartItems.map((item) => (
                  <div key={item.productDetails.id} className="space-y-3">
                    <CartItem item={item} />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}
        <div className="mt-8 space-y-4">
          <div className="flex justify-between items-center text-base font-semibold">
            <span>Subtotal:</span>
            <span>£{cartTotal.toFixed(2)}</span>
          </div>
          <div className="grid grid-rows-3 gap-5">
            <SheetClose asChild>
              <Link href="/cart" passHref>
                <Button
                  variant="outline"
                  className="w-full hover:bg-[#8DC044] hover:text-white"
                >
                  View Cart
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/services" passHref>
                <Button
                  variant="outline"
                  className="w-full hover:bg-[#8DC044] hover:text-white"
                >
                  Continue Shopping
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/checkout" passHref>
                <Button className="w-full bg-[#8DC044] hover:bg-[#7DAF3A] text-white">
                  Proceed To Checkout
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

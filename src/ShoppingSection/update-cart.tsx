import React from "react";
import { useCart } from "@/context/cart-context";
import { CartItem } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { CartItemActionsProps } from "@/utils/utils";

export function CartItemActions({ item }: CartItemActionsProps) {
  const { updateCartItemQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (qty: number) => {
    const quantity = Number(qty);
    if (quantity >= 1) {
      updateCartItemQuantity(item.productDetails.id, quantity);
    }
  };

  return (
    <div className="flex items-center space-x-1">
      <div className="flex items-center space-x-1">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => {
            handleQuantityChange(item.quantity - 1);
          }}
        >
          -
        </Button>
      </div>
      <Input
        className="h-8 w-14 text-xs items-center"
        min="1"
        value={item.quantity}
        onChange={(e) => {
          handleQuantityChange(Number(e.target.value));
        }}
      />
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={() => {
          handleQuantityChange(item.quantity + 1);
        }}
      >
        +
      </Button>
    </div>
  );
}

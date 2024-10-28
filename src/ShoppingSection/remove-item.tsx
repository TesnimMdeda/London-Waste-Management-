import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { CartItemActionsProps } from "@/utils/utils";
import React from "react";

export default function RemoveItem({
  item,
  icon: Icon = Icons.trash,
}: CartItemActionsProps & { icon?: React.ElementType }) {
  const { removeFromCart } = useCart();
  const handleRemoveClick = () => {
    removeFromCart(item.productDetails.id);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="h-8 w-8"
      onClick={handleRemoveClick}
    >
      <Icon className="h-4 w-4" />
    </Button>
  );
}

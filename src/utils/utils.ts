import { CartItem } from "@/types";

export const getLocationText = (location: string) => {
  switch (location) {
    case "inside-dismantling":
      return "Inside the Property Needs Dismantling";
    case "inside-no-dismantling":
      return "Inside the Property No Dismantling";
    case "outside":
      return "Outside the Property";
    default:
      return "";
  }
};

export const getAdditionalCost = (location: string) => {
  switch (location) {
    case "inside-dismantling":
      return 16.0;
    case "inside-no-dismantling":
      return 8.0;
    case "outside":
      return 0.0;
    default:
      return 0.0;
  }
};
export interface CartItemActionsProps {
  item: CartItem;
}

export interface orderDeatilsProps {
  image?: boolean;
  title: string;
}

import { ProductProps } from "./components/card/types";

export interface CartItem {
  productDetails: ProductProps;
  quantity: number;
  itemPosition?: string;
  subtotal?: number;
}

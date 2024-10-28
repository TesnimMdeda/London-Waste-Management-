import { ProductProps } from "@/components/card/types";
import { cardData } from "@/utils/card";
import { useState } from "react";

export const useFetch = () => {
  const [product, setProduct] = useState<ProductProps | null>(null);

  const fetchProduct = ({
    serviceId,
    productId,
  }: {
    serviceId: string;
    productId: string;
  }) => {
    const service = cardData.find((service) => service.id === serviceId);
    if (service) {
      const foundProduct = service.products?.find(
        (product) => product.id === productId
      );
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  };

  return [product, fetchProduct] as const;
};

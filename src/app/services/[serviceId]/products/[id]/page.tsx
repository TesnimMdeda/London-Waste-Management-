"use client";

import { useFetch } from "@/Hooks/useFetch";
import ProductDetail from "@/SevicesSection/ProductsDetails";
import { useEffect } from "react";

export default function ProductPage({
  params,
}: {
  params: { serviceId: string; id: string };
}) {
  const { serviceId, id } = params;
  const [product, fetchProduct] = useFetch();

  useEffect(() => {
    fetchProduct({ productId: id, serviceId: serviceId });
  }, [id, serviceId]);

  return product && <ProductDetail product={product} />;
}

import { formatPrice } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { ProductProps } from "./types";

export const ProductDetailCard = ({ product }: { product: ProductProps }) => (
  <Card
    className="flex flex-col h-full shadow bg-[#fafafa] border-[1px] mb-5 border-gray-200 hover:border-[#7ad03a]
 hover:bg-white hover:text-[#8dc044] hover:shadow-lg  transition duration-1000 "
  >
    <CardHeader>
      <CardTitle className="flex justify-center items-center ">
        <img src={product.imgSrc} alt={product.title} />
      </CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <h3 className="text-lg font-semibold my-5">{product.title}</h3>
      <p className="text-sm text-gray-500">-{product.details}</p>
    </CardContent>
    <CardFooter className="flex justify-between items-center mt-auto">
      <span className="text-lg font-semibold">
        {formatPrice(product.price)}
      </span>
      <Button className="text-white border-[#8DC044] hover:bg-[#8DC044] bg-[#8DC044]">
        View Details
      </Button>
    </CardFooter>
  </Card>
);

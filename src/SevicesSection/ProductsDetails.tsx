"use client";

import { ProductProps } from "@/components/card/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { additionalServices, relatedServices } from "@/utils/card";
import { ProductDetailCard } from "@/components/card/cardDetails";
import Banner from "@/components/Banner";
import img from "@/assets/images/ServiceDetailBanner.png";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/cart-context";
import { getAdditionalCost, getLocationText } from "@/utils/utils";
import { useCartSheet } from "@/ShoppingSection/CartSheet";

export default function ProductDetail({ product }: { product: ProductProps }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState("");
  const [showTable, setShowTable] = useState(false);
  const { setOpen: setCartOpen } = useCartSheet();

  const handleLocationChange = (value: string) => {
    setLocation(value);
    setShowTable(true);
  };

  const subtotal = formatPrice(product.price + getAdditionalCost(location));

  const handleAddToCart = () => {
    addToCart({
      productDetails: product,
      itemPosition: location,
      quantity,
    });
    setCartOpen(true);
  };

  return (
    <div>
      <Banner
        imageUrl={img.src}
        title="Service Detail"
        subtitle="Lorem ipsum dolor sit amet consectetur. Nunc risus ipsum ut et amet est in porttitor lacus. Id nisl nulla elementum vulputate vitae."
      />
      <div className="container mx-auto p-4">
        <Link
          href="/services"
          className="flex items-center text-[#8DC044] mb-4"
        >
          <ChevronLeft className="mr-2" />
          Back
        </Link>
        <Card className="p-6">
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  className="text-[#8DC044] mb-4"
                />
                <ul className="list-none pl-0 text-center">
                  {product.details.map((detail, index) => (
                    <li key={index} className="mb-2">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h1 className="md:text-3xl text-xl font-bold mb-4">
                  {product.title}
                </h1>
                <p className="md:text-2xl text-lg font-semibold text-[#8DC044] mb-4">
                  {formatPrice(product.price)}
                </p>
                <RadioGroup
                  value={location}
                  onValueChange={handleLocationChange}
                  className="mb-4 mt-4 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="inside-dismantling"
                        id="inside-dismantling"
                        className="text-[#8DC044] focus:border-[#8DC044]  focus:ring-[#8DC044] "
                      />
                      <Label htmlFor="inside-dismantling">
                        Inside the Property
                      </Label>
                    </div>
                    <span className="text-sm text-right text-gray-500">
                      Needs Dismantling (+£16.00)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="inside-no-dismantling"
                        id="inside-no-dismantling"
                        className="text-[#8DC044] focus:border-[#8DC044]  focus:ring-[#8DC044] "
                      />
                      <Label htmlFor="inside-no-dismantling">
                        Inside the Property No Dismantling
                      </Label>
                    </div>
                    <span className="text-sm text-gray-500">(+£8.00)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="outside"
                        id="outside"
                        className="text-[#8DC044] focus:border-[#8DC044]  focus:ring-[#8DC044]  "
                      />
                      <Label htmlFor="outside">Outside the Property</Label>
                    </div>
                    <span className="text-sm text-gray-500">(£0.00)</span>
                  </div>
                </RadioGroup>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      variant="outline"
                      className="px-3 py-1"
                    >
                      -
                    </Button>
                    <span className="mx-4">{quantity}</span>
                    <Button
                      onClick={() => setQuantity(quantity + 1)}
                      variant="outline"
                      className="px-3 py-1"
                    >
                      +
                    </Button>
                  </div>

                  <Button
                    className="w-fit bg-[#8DC044] hover:bg-[#7DAF3A] text-white"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                </div>
                <p className="text-sm text-gray-500 my-5">
                  Note*: All items to be left outside and collected anytime
                  during the day receive 10% discount
                </p>
                {showTable && (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead colSpan={2}>Addon Details</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>{product.title}</TableCell>
                        <TableCell> {formatPrice(product.price)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          Item Position - {getLocationText(location)}
                        </TableCell>
                        <TableCell>{getAdditionalCost(location)}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold">Subtotal</TableCell>
                        <TableCell className="font-bold">{subtotal}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="container px-4 py-8">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              You May Also Include This
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <Link
                  href={`/services/${service.id}/products/${product.id}`}
                  key={index}
                >
                  <ProductDetailCard product={service} />
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">
              Related Service You Might Book
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedServices.map((service, index) => (
                <Link
                  href={`/services/${service.id}/products/${product.id}`}
                  key={index}
                >
                  <ProductDetailCard product={service} />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cardData } from "@/utils/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Feature, features } from "./featureSection";
import Image from "next/image";
import SeparatorVertical from "@/assets/images/separation.png";
import { Phone, FileText } from "lucide-react";
import Link from "next/link";
import { ProductDetailCard } from "@/components/card/cardDetails";
import Banner from "@/components/Banner";
import img from "@/assets/images/ServiceBanner.png";

export default function Service({ id }: { id?: string }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const productsPerPage = 12;

  useEffect(() => {
    if (id) {
      setSelectedCategory(id);
      setCurrentPage(1);
    }
  }, [id]);

  const allProducts = useMemo(() => {
    return cardData.flatMap((card) => card.products || []);
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let products = selectedCategory
      ? cardData.find((category) => category.id === selectedCategory)
          ?.products || []
      : allProducts;

    return products
      .filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        switch (sortOption) {
          case "price-asc":
            return parseFloat(a.price) - parseFloat(b.price);
          case "price-desc":
            return parseFloat(b.price) - parseFloat(a.price);
          case "name-asc":
            return a.title.localeCompare(b.title);
          case "name-desc":
            return b.title.localeCompare(a.title);
          default:
            return 0;
        }
      });
  }, [selectedCategory, searchTerm, sortOption, allProducts]);

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(
    filteredAndSortedProducts.length / productsPerPage
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <Banner
        imageUrl={img.src}
        title="Our Services"
        subtitle="Lorem ipsum dolor sit amet consectetur. Nunc risus ipsum ut et amet est in porttitor lacus. Id nisl nulla elementum vulputate vitae."
      />
      <div className=" mx-auto p-4 ">
        <div className="flex justify-center items-center my-10">
          <p className="text-4xl mr-2 font-bold md:text-left text-center">
            Why Book Your Removal With Us?
          </p>
        </div>
        <div className="md:flex grid grid-cols-2 justify-center items-center ">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <Feature icon={feature.icon} text={feature.text} layout="row" />
              {index < features.length - 1 && (
                <div className="h-12 w-px bg-gray-300 mx-4">
                  <Image src={SeparatorVertical} alt="Vertical Separator" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <div className="md:col-span-1 px-10">
            <h2 className="text-lg font-semibold mb-10 md:text-left text-center">
              Search By Category
            </h2>
            <div className="md:hidden mb-4">
              <Select
                onValueChange={handleCategoryClick}
                value={selectedCategory!}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {cardData.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      <div className="flex items-center space-x-2">
                        <Image
                          src={category.imgSrc}
                          alt={category.title}
                          width={32}
                          height={32}
                          className="w-8 h-8"
                        />
                        <span>{category.title}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <ul className=" hidden md:block space-y-10 md:content-left content-center">
              {cardData.map((category) => (
                <li
                  key={category.id}
                  className={`flex items-center space-x-4 cursor-pointer hover:text-[#8DC044] hover:font-bold ${
                    selectedCategory === category.id
                      ? "font-bold text-[#8DC044]"
                      : ""
                  }`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <img
                    src={category.imgSrc}
                    alt={category.title}
                    className="w-8 h-8"
                  />
                  <span>{category.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="flex justify-between">
              <Input
                className=" w-fit focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-badge"
                style={{ boxShadow: "none" }}
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Select onValueChange={(value) => setSortOption(value)}>
                <SelectTrigger className="w-[180px] max-w-full focus:ring-0 focus:border-[#8DC044] focus:border-2 rounded-badge">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  <SelectItem value="name-desc">Name: Z to A</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-gray-500 my-8">
              Showing {indexOfFirstProduct + 1}-
              {Math.min(indexOfLastProduct, filteredAndSortedProducts.length)}{" "}
              of {filteredAndSortedProducts.length} results
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentProducts.length > 0 ? (
                currentProducts.map((product, index) => (
                  <Link
                    href={`/services/${selectedCategory}/products/${product.id}`}
                    key={index}
                  >
                    <ProductDetailCard product={product} />
                  </Link>
                ))
              ) : (
                <p className="text-center col-span-3">No products found.</p>
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <nav className="inline-flex">
                <Button
                  size="lg"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="focus:outline-none focus:ring-0 bg-transparent hover:bg-transparent"
                >
                  <ChevronLeft className="h-6 w-6 text-[#8DC044]" />
                </Button>
                {[...Array(totalPages)].map((_, index) => {
                  if (
                    index === 0 ||
                    index === totalPages - 1 ||
                    (index >= currentPage - 2 && index <= currentPage + 2)
                  ) {
                    return (
                      <Button
                        key={index}
                        variant={
                          currentPage === index + 1 ? "default" : "outline"
                        }
                        className={`w-10 h-10 rounded-full focus:outline-none focus:ring-0 mx-1 hover:bg-[#8DC044] hover:text-white ${
                          currentPage === index + 1
                            ? "bg-[#8DC044] text-white"
                            : "text-black hover:bg-[#8DC044]"
                        }`}
                        onClick={() => paginate(index + 1)}
                      >
                        {index + 1}
                      </Button>
                    );
                  } else if (
                    index === currentPage - 3 ||
                    index === currentPage + 3
                  ) {
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className="mx-1"
                        disabled
                      >
                        ...
                      </Button>
                    );
                  }
                  return null;
                })}
                <Button
                  size="lg"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="focus:outline-none focus:ring-0 bg-transparent hover:bg-transparent"
                >
                  <ChevronRight className="h-6 w-6 text-[#8DC044]" />
                </Button>
              </nav>
            </div>
          </div>
        </div>
        <Card className="mx-auto  border-none mt-20">
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#263238] md:text-left text-center">
                  Fair and simple pricing
                </h2>
              </div>
              <div className="space-y-4 md:text-left text-center">
                <p className="text-[#263238] font-bold">
                  London Waste Management strives to make the whole process of
                  removing heavy items as simple and hassle-free as possible.
                </p>
                <p className="text-[#263238]">
                  If you are unsure, please give us a call, or upload a photo so
                  we can give you an instant quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={`tel:+ 02030971517`}>
                    <Button className="w-full sm:w-auto bg-[#8DC044] hover:bg-[#7DAF3A] text-white border-[#8DC044]">
                      <Phone className="mr-2 h-4 w-4" /> Call Us
                    </Button>
                  </a>
                  <a href="/quotation">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto text-[#8DC044] border-[#8DC044] hover:bg-[#8DC044] hover:text-white"
                    >
                      <FileText className="mr-2 h-4 w-4" /> Request Quote
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

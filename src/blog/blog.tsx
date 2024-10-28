"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogData } from "@/utils/BlogData";
import Banner from "@/components/Banner";
import blogBanner from "@/assets/images/blogbanner.png";
import { allTags } from "./utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BlogCard from "../components/card/blogCard";

const ITEMS_PER_PAGE = 5;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState("All");

  const totalPages = Math.ceil(blogData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPosts = blogData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Banner title="Blog" imageUrl={blogBanner.src} />
      <div className="container mx-auto px-4 md:px-16 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">All Blog Posts</h1>
          <Input
            type="text"
            placeholder="Search blog articles"
            size={40}
            className="w-fit md:w-auto focus:ring-0 focus:border-[#8DC044] focus:border-2"
            style={{ boxShadow: "none" }}
          />
        </div>

        <div className="mb-8">
          <div className="md:hidden">
            <Select onValueChange={setSelectedTag} value={selectedTag}>
              <SelectTrigger className="w-full mb-4 focus:ring-0 border-[#8DC044] rounded-full focus:border-[#8DC044] focus:bg-[#8DC044] text-white bg-[#8DC044]">
                <SelectValue placeholder="Select a tag" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                {allTags.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop buttons - hidden on small screens, visible on md and larger */}
          <div className="hidden md:flex flex-wrap gap-2 justify-center">
            <Button
              variant="outline"
              size="sm"
              className={`px-4 focus:ring-0 border-[#8DC044] rounded-full focus:border-[#8DC044] focus:bg-[#8DC044] focus:text-white bg-white text-[#8DC044] hover:text-white hover:bg-[#8DC044] ${
                selectedTag === "All" ? "bg-[#8DC044] text-white" : ""
              }`}
              onClick={() => setSelectedTag("All")}
            >
              All
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant="outline"
                size="sm"
                className={`focus:ring-0 border-[#8DC044] rounded-full focus:border-[#8DC044] focus:border-2 bg-white text-[#8DC044] hover:text-white hover:bg-[#8DC044] ${
                  selectedTag === tag ? "bg-[#8DC044] text-white" : ""
                }`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {currentPosts.length > 0 ? (
          <>
            {/* Featured Post (index 0) */}
            <Card className="mb-8">
              <div className="flex md:flex-row flex-col">
                <div className="md:w-2/3 p-6 flex flex-col justify-center order-2 md:order-1">
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-[#8DC044]">
                      {currentPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {currentPosts[0].description}
                    </p>
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-500 mb-4">
                        {currentPosts[0].date.toDateString()}
                      </p>
                      <Link href={`/blog/${currentPosts[0].id}`} passHref>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-none text-[#8DC044] focus:bg-transparent focus:text-[#8DC044] hover:bg-transparent hover:text-[#8DC044]"
                        >
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 order-1 md:order-2">
                  <Image
                    src={currentPosts[0].imgSrc}
                    alt={currentPosts[0].title}
                    width={600}
                    height={400}
                    className="w-full rounded-2xl h-[200px] md:h-full object-cover"
                  />
                </div>
              </div>
            </Card>

            <BlogCard index={1} posts={currentPosts} />
            {/* Bottom Featured Post */}
            {currentPosts[4] && (
              <Card className="mb-8">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image
                      src={currentPosts[4].imgSrc}
                      alt={currentPosts[4].title}
                      width={600}
                      height={400}
                      className="w-full rounded-2xl h-[300px] md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6 flex flex-col justify-center">
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-[#8DC044]">
                        {currentPosts[4].title}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {currentPosts[4].description}
                      </p>
                      <div className="flex justify-between">
                        <p className="text-sm text-gray-500 mb-4">
                          {currentPosts[4].date.toDateString()}
                        </p>
                        <Link href={`/blog/${currentPosts[4].id}`} passHref>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-none text-[#8DC044] focus:bg-transparent focus:text-[#8DC044] hover:bg-transparent hover:text-[#8DC044]"
                          >
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-2 mt-8">
              <Button
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="focus:outline-none focus:ring-0 bg-transparent hover:bg-transparent"
              >
                <ChevronLeft className="h-6 w-6 text-[#8DC044]" />
              </Button>
              {[...Array(totalPages)].map((_, index) => (
                <Button
                  key={index}
                  variant={currentPage === index + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageChange(index + 1)}
                  className={`w-10 h-10 rounded-full  focus:outline-none focus:ring-0 mx-1 hover:bg-[#8DC044] hover:text-white  ${
                    currentPage === index + 1
                      ? "bg-[#8DC044] text-white"
                      : "text-black hover:bg-[#8DC044]"
                  }`}
                >
                  {index + 1}
                </Button>
              ))}
              <Button
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="focus:outline-none focus:ring-0 bg-transparent hover:bg-transparent"
              >
                <ChevronRight className="h-6 w-6 text-[#8DC044]" />
              </Button>
            </div>
          </>
        ) : (
          <p>No blog posts found matching your search criteria.</p>
        )}
      </div>
    </div>
  );
}

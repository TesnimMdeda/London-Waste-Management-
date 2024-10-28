import { CaretRightIcon } from "@radix-ui/react-icons";
import BlogCard from "@/components/card/blogCard";
import { blogData } from "@/utils/BlogData";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Explore() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-4">
        <div className="flex justify-center items-center">
          <p className="text-2xl mr-2 font-400">
            Explore Insights in Our Blog{" "}
          </p>
        </div>
        <p className="text-lg text-gray-500 mt-3">
          Find lots of insights and information on our blog. Explore, learn, and
          get inspired today.{" "}
        </p>
      </div>
      <div className="flex flex-col items-center  mt-5">
        <div className="grid">
          <BlogCard index={0} posts={blogData} tag />
        </div>
        <Link href="/blog">
          <Button className="btn text-lg m-2 text-bold hover:bg-transparent shadow-none  bg-transparent border-none text-[#8DC044]">
            View Full
            <CaretRightIcon
              className="CaretLeft size-7 mr-10"
              aria-hidden="true"
            />
          </Button>
        </Link>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BlogCardProps } from "@/components/card/types";

export default function blogCard({
  posts,
  index,
  tag,
}: {
  posts: BlogCardProps[];
  index: number;
  tag?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      {posts.slice(index, index + 3).map((post) => (
        <Card key={post.id} className="w-fit">
          <CardContent>
            <Image
              src={post.imgSrc}
              alt={post.title}
              width={150}
              height={100}
              className="w-full h-full rounded-2xl"
            />
          </CardContent>
          <CardHeader>
            <CardTitle className="text-lg pt-0">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 pt-4">{post.description}</p>
            {tag && (
              <div className="flex justify-start mt-4">
                {post.tag.map((tag, index) => (
                  <p
                    key={index}
                    className="bg-gray-200 text-[#545971] text-sm font-medium mt-2 mr-2 w-fit px-2 py-1 rounded-full "
                  >
                    {tag}
                  </p>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="ml-3">
              <p className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString("en-GB")}
              </p>
            </div>
            <Link href={`/blog/${post.id}`} passHref>
              <Button
                variant="outline"
                size="sm"
                className="border-none text-[#8DC044] focus:bg-transparent focus:text-[#8DC044] hover:bg-transparent hover:text-[#8DC044]"
              >
                Read More
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

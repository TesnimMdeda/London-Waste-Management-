import Image from "next/image";
import { blogData } from "@/utils/BlogData";
import Banner from "@/components/Banner";
import BlogDetailsbanner from "@/assets/images/blogDetails.png";
import BlogCard from "../components/card/blogCard";

export default function BlogPostDetails({ id }: { id: string }) {
  const post = blogData.find((post) => post.id === id);
  const relatedPosts = blogData.filter((p) => p.id !== id).slice(0, 3);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <Banner title="Blog Post Details" imageUrl={BlogDetailsbanner.src} />
      <div className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <Image
            src={post.imgSrc}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-[400px] object-cover mb-8 rounded-lg"
          />
          <h1 className="text-4xl font-bold mb-4 text-[#8DC044]">
            {post.title}
          </h1>
          <div className="flex gap-5 ">
            <p className="text-[#8DC044] font-bold">
              Written By {post.writtenBy}
            </p>
            <p className=" text-gray-500">
              {new Date(post.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <p className="text-lg my-4">{post.description}</p>
        </article>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Related Posts</h2>
          <BlogCard index={0} posts={relatedPosts} />
        </section>
      </div>
    </div>
  );
}

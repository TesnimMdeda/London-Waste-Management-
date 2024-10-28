import Blog from "@/blog/blog";
import BlogDetails from "@/blog/blogDetails";

export default function page({ params }: { params: { id: string } }) {
  const { id } = params;
  return <BlogDetails id={id} />;
}

import { BlogPostType } from "@/app/_interface/BlogPostType";
import Image from "next/image";
import Link from "next/link";
interface PostCardProps {
  post: BlogPostType;
}
/**
 * `PostCard` is a reusable UI component that displays a blog post preview.
 * It includes a square thumbnail image and a truncated title, wrapped in a link
 * to the full blog post page.
 *
 * @component
 * @param {PostCardProps} props - The props containing blog post data.
 * @returns {JSX.Element} A clickable card linking to the blog post detail page.
 */
export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="rounded-xl overflow-hidden border border-gray-200 hover:scale-105 transition-transform"
    >
      <div className="relative w-full aspect-square border-b border-b-gray-200">
        <Image src={post.image} alt={post.title} fill />
      </div>
      <div className="overflow-hidden py-4">
        <p className="line-clamp-1 text-sm w-full px-2">{post.title}</p>
      </div>
    </Link>
  );
}

import { BlogPostType } from "@/app/_interface/BlogPostType";
import Image from "next/image";
import Link from "next/link";
interface BlogPostCardProps {
  post: BlogPostType;
}
/**
 * Renders a styled card component for a single blog post.
 *
 * Displays the post's image, title, category, and a link to view the full post.
 * The card includes hover effects and responsive styling.
 *
 * @component
 * @param {BlogPostCardProps} props - The props object.
 * @param {BlogPostType} props.post - The blog post data used to populate the card.
 * @returns {JSX.Element} A visual card element representing a blog post.
 */
export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <div
      key={post.id}
      className="rounded-md overflow-hidden border border-gray-200 text-[#003d5d] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
    >
      <div className="relative w-full aspect-[3/2]">
        <Image src={post.image} alt={post.title} fill />
      </div>
      <div className="p-4">
        <h2 className="line-clamp-1 font-semibold">{post.title}</h2>
        <div className="flex justify-between items-center pt-4">
          <Link
            href={`/blog/${post.slug}`}
            className=" bg-[#003d5d] text-white/90 text-sm border-2 rounded-md hover:scale-105 px-4 py-2 transition-transform text-center"
          >
            مشاهده
          </Link>
          <p className="text-[#003d5d]/50 text-xs">{post.category}</p>
        </div>
      </div>
    </div>
  );
}

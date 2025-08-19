import { BlogPostType } from "@/app/_interface/BlogPostType";
import { mapPostCategoryToPersian } from "@/app/_utils/mapPostCatName";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
interface BreadcrumbProps {
  post: BlogPostType;
}
/**
 * Breadcrumb component for blog post navigation.
 *
 * This component renders a breadcrumb trail for a blog post, allowing users to
 * navigate back to the homepage, the blog category page, and view the current post title.
 * It uses Persian labels and icons to visually separate breadcrumb items.
 *
 * @param {Object} props - Component props
 * @param {BlogPostType} props.post - The blog post object containing title and category
 *
 * @returns {JSX.Element} A breadcrumb navigation list
 */
export default function Breadcrumb({ post }: BreadcrumbProps) {
  return (
    <ul className="w-full flex justify-start items-center gap-1 text-sm">
      <li>
        <Link href={"/"} className="hover:opacity-80">
          خانه
        </Link>
      </li>
      <li>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="block mx-1 text-xs text-[#003d5d]"
        />
      </li>
      <li>
        <Link href={`/blog/${post.category}`} className="hover:opacity-80">
          {mapPostCategoryToPersian(post.category)}
        </Link>
      </li>
      <li>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="block mx-1 text-xs text-[#003d5d]"
        />
      </li>
      <li className="font-semibold">{post.title}</li>
    </ul>
  );
}

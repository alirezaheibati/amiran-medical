import Image from "next/image";
import Link from "next/link";
import { CategoryType } from "@/app/_interface/CategoryType";
interface CategoryCartProps {
  category: CategoryType;
}
/**
 * Displays a clickable card for a single product category.
 *
 * The card includes an image and name, styled with visual enhancements.
 * Navigates to the corresponding category page using its slug.
 *
 * @param {CategoryCartProps} props - Props containing a category object
 * @returns {JSX.Element} A styled link component representing the category
 */
export default function CategoryCard({ category }: CategoryCartProps) {
  return (
    <Link
      className="w-32 h-32 rounded-2xl overflow-hidden bg-[#a7e6ff] shadow-[5px_5px_10px_rgba(0,61,93,0.4)] flex justify-center flex-col items-center gap-3 hover:-translate-y-1 transition-transform"
      href={`/shop/${category.slug}`}
      key={category.slug}
    >
      <Image src={category.image} alt={category.name} width={60} height={60} />
      <p className="text-xs w-full text-[rgb(0,61,93)] text-center line-clamp-1">
        {category.name}
      </p>
    </Link>
  );
}

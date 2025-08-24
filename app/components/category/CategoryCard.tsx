import { CategoryType } from "@/app/_interface/CategoryType";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  category: CategoryType;
}
/**
 * CategoryCard component renders a clickable card for a product category.
 * Displays an image, name, description, and a call-to-action with an icon.
 *
 * @component
 * @param {CategoryCardProps} props - Props for the category card
 * @param {CategoryType} props.category - Category data including name, slug, image, and description
 * @returns {JSX.Element} A styled category card linking to the category's shop page
 */
export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/shop/${category.slug}`}
      key={category.slug}
      className="group border-sky-700 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:translate-y-[5px] border-b-4 relative transition-all"
    >
      <div className="h-48 relative overflow-hidden bg-gray-100">
        <Image
          src={category.image ?? "/images/placeholder.png"}
          alt={category.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300 "
        />
      </div>
      <div className="p-6 ">
        <h3 className="text-xl font-bold mb-2 text-sky-700 group-hover:text-sky-700 transition-colors">
          {category.name}
        </h3>
        <p className="text-sm text-[#30638e] mb-4">{category.description}</p>
        <div className="flex justify-end items-center text-sm text-[#003d5d] font-medium transition-colors">
          <span className="ml-1">مشاهده محصولات</span>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="transform group-hover:-translate-x-1 transition-transform"
          />
        </div>
      </div>
    </Link>
  );
}

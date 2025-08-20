import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";
import { mapPostCategoryToPersian } from "@/app/_utils/mapPostCatName";
import Link from "next/link";
type CategoryCount = {
  category: string;
  count: number;
};
interface PostCategoryItemProps {
  category: CategoryCount;
}
/**
 * Renders a single post category item as a list element.
 *
 * This component displays the category name in Persian using `mapPostCategoryToPersian`,
 * along with the post count converted to Persian digits via `convertToPersianDigits`.
 * It wraps the content in a `Link` that navigates to the category-specific blog page.
 *
 * @component
 * @param {PostCategoryItemProps} props - The props for the component.
 * @param {CategoryCount} props.category - An object containing the category name and post count.
 * @returns {JSX.Element} A list item with a link to the category page and localized text.
 */
export default function PostCategoryItem({ category }: PostCategoryItemProps) {
  return (
    <li className="w-full hover:bg-gray-100 rounded-md p-1">
      <Link href={`/blog/${category.category}`}>
        <p>{`${mapPostCategoryToPersian(
          category.category
        )} (${convertToPersianDigits(category.count)})`}</p>
      </Link>
    </li>
  );
}

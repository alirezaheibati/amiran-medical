import { getPostCategories } from "@/app/_lib/posts";
import PostCategoryItem from "./PostCategoryItem";
/**
 * Asynchronously fetches and displays a list of post categories.
 *
 * This component retrieves post categories from the backend using `getPostCategories`,
 * and renders them as a list of `PostCategoryItem` components.
 *
 * @component
 * @async
 * @returns {JSX.Element} A styled container with a heading and a list of post categories.
 */
export default async function PostCategories() {
  const categories = await getPostCategories();

  return (
    <div className="rounded-lg border border-gray-200 p-4 md:w-1/2 lg:w-full">
      <h1 className="font-semibold font-messiri">دسته بندی مطالب</h1>
      <hr className="mb-4 mt-3" />
      <ul className="flex flex-col justify-start items-start gap-2">
        {categories.map((category) => (
          <PostCategoryItem category={category} key={category.category} />
        ))}
      </ul>
    </div>
  );
}

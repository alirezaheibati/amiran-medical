import { CategoryType } from "@/app/_interface/CategoryType";
import { getCategoriesList } from "@/app/_lib/categories";
import CategoryCard from "@/app/components/category/CategoryCard";
import ReturnLink from "@/app/components/ui/ReturnLink";
/**
 * Renders the shop page displaying a list of product categories.
 * Fetches category data and displays each category using the CategoryCard component.
 *
 * @returns {JSX.Element} The rendered shop page with category grid and return link.
 */
export default async function ShopPage() {
  const categories: CategoryType[] = await getCategoriesList();
  return (
    <div className="max-w-7xl mx-auto px-4 mb-16 pt-8">
      <h1 className="font-semibold text-2xl font-messiri text-[#003d5d] mb-8">
        دسته بندی محصولات
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard category={category} key={category.slug} />
        ))}
      </div>
      <ReturnLink href="/" title="بازگشت به خانه" />
    </div>
  );
}

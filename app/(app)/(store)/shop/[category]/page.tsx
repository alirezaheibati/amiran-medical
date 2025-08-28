import { CategoryType } from "@/app/_interface/CategoryType";
import { ProductType } from "@/app/_interface/ProductType";
import { getCategoryBySlug } from "@/app/_lib/categories";
import { getAllProductsOfCategory } from "@/app/_lib/products";
import ProductItemsGrid from "@/app/components/shop/ProductItemsGrid";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}
/**
 * Renders a category-specific product listing page.
 * Fetches category metadata and associated products based on the slug from route parameters.
 *
 * @param {CategoryPageProps} props - The props containing category route parameters.
 * @returns {JSX.Element} The rendered category page with title, description, and product grid.
 */
export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.category.toLowerCase();
  const pageCategory: CategoryType = await getCategoryBySlug(categorySlug);
  const categoryProducts: ProductType[] = await getAllProductsOfCategory(
    categorySlug
  );

  return (
    <>
      <div className="mt-2 rounded-xl p-2">
        <h1 className="text-xl px-2 mb-1 text-[#003d5d]">
          {pageCategory.name}
        </h1>
        <p className="mb-4 px-2 text-xs text-[#003d5d]/80">
          {pageCategory.description}
        </p>
        <ProductItemsGrid categoryProducts={categoryProducts} />
      </div>
    </>
  );
}

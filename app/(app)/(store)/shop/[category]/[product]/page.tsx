import { CategoryType } from "@/app/_interface/CategoryType";
import { ProductType } from "@/app/_interface/ProductType";
import { getCategoryBySlug } from "@/app/_lib/categories";
import { getProductById } from "@/app/_lib/products";
import BreadCrumb from "@/app/components/product/BreadCrumb";
import ProductDetails from "@/app/components/product/ProductDetails";
import ReturnLink from "@/app/components/ui/ReturnLink";

interface ProductPageProps {
  params: Promise<{ category: string; product: string }>;
}
/**
 * Renders the product detail page including breadcrumb navigation,
 * product information, and a return link to the category page.
 *
 * @param {ProductPageProps} props - The props containing route parameters.
 * @returns {JSX.Element} The rendered product page section.
 */
export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;

  const breadcrumbCategory: CategoryType = await getCategoryBySlug(
    resolvedParams.category
  );
  const product: ProductType = await getProductById(+resolvedParams.product);
  return (
    <section className="max-w-7xl px-4 mx-auto py-8">
      {/* breadcrumb section */}
      <BreadCrumb
        productCategorySlug={breadcrumbCategory.slug}
        productName={product.name}
        productCategoryName={breadcrumbCategory.name}
      />
      <ProductDetails product={product} />
      <ReturnLink href={`/shop/${product.category}`} title="بازگشت" />
    </section>
  );
}

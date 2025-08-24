import Link from "next/link";

interface BreadCrumbProps {
  productCategorySlug: string;
  productCategoryName: string;
  productName: string;
}
/**
 * BreadCrumb component displays a navigation trail for product pages.
 * Shows links to the shop, category, and current product name.
 *
 * @component
 * @param {BreadCrumbProps} props - Props for breadcrumb navigation
 * @param {string} props.productCategorySlug - Slug used for category URL
 * @param {string} props.productCategoryName - Display name of the category
 * @param {string} props.productName - Name of the current product
 * @returns {JSX.Element} A styled breadcrumb navigation bar
 */
export default function BreadCrumb({
  productCategorySlug,
  productCategoryName,
  productName,
}: BreadCrumbProps) {
  return (
    <nav className="flex justify-start items-center gap-2 mb-6 text-sm sm:text-base">
      <Link href={"/shop"} className="text-[#00798c] hover:text-[#003d5b]">
        فروشگاه
      </Link>
      <p>/</p>
      <Link
        href={`/shop/${productCategorySlug}`}
        className="text-[#00798c] hover:text-[#003d5b]"
      >
        {productCategoryName}
      </Link>
      <p>/</p>
      <p className="text-gray-500">{productName}</p>
    </nav>
  );
}

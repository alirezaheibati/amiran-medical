import { ProductType } from "@/app/_interface/ProductType";
import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";
import Image from "next/image";
import Link from "next/link";
/** Product data to be displayed in the search result row */
interface SearchResultRowProps {
  product: ProductType;
}
/**
 * `SearchResultRow` renders a single product entry in the search results list.
 * Displays product image, name, price (in Persian digits), and brand.
 *
 * @component
 * @param {SearchResultRowProps} props - Props containing product data.
 * @returns {JSX.Element} A styled list item with product details and navigation link.
 */
export default function SearchResultRow({ product }: SearchResultRowProps) {
  return (
    <li className="bg-white hover:bg-gray-100 p-4">
      <Link
        href={`/shop/${product.category}/${product.id}`}
        className="flex justify-between items-center"
      >
        <div className="flex justify-start items-center gap-1 ">
          <Image
            src={product.image}
            alt={product.name}
            width={64}
            height={36}
          />
          <div>
            <p className="text-[#003d5b] mb-1 font-messiri">{product.name}</p>
            <p className="text-sm text-[#00798c]">
              <span>{convertToPersianDigits(product.price)}</span>
              <span className="text-[10px]"> تومان</span>
            </p>
          </div>
        </div>
        <p className="text-[#003d5b] text-sm">{product.brand}</p>
      </Link>
    </li>
  );
}

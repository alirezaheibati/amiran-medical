import Image from "next/image";
import Link from "next/link";
import DiscountBadge from "./DiscountBadge";
import addCommasToString from "@/app/_utils/addCommasToPrice";
import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";
import { ProductType } from "@/app/_interface/ProductType";
interface DiscountItemCardProps {
  product: ProductType;
}
/**
 * Renders a clickable product card with discount visuals and Persian-formatted pricing.
 * Includes an image, discount badge, product name, and current vs. original price.
 *
 * @component
 * @param {DiscountItemCardProps} props - Component props including the product data
 * @returns {JSX.Element} A styled product card with discount and pricing details
 */
export default function DiscountItemCard({ product }: DiscountItemCardProps) {
  return (
    <Link
      href={`/shop/${product.category}/${product.id}`}
      className="rounded-md overflow-hidden w-[calc(25%-24px)] bg-white/90 hover:scale-105 transition-transform"
    >
      <div className="relative aspect-square w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 310) 100vw, (max-width: 309px) 50vw, 33vw"
        />
        <DiscountBadge discount={product.discount} />
      </div>
      <div className="text-[#003d5d] px-4 py-2">
        <h2 className="font-semibold line-clamp-1 my-2">{product.name}</h2>
        <div className="flex justify-between items-center text-lg">
          <p>
            {addCommasToString(
              convertToPersianDigits(
                product.price - product.price * (product.discount / 100)
              )
            )}
          </p>
          <del>{addCommasToString(convertToPersianDigits(product.price))}</del>
        </div>
      </div>
    </Link>
  );
}

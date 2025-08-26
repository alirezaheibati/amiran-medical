import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";
interface ProductDiscountBadgeProps {
  discount: number;
}
/**
 * ProductDiscountBadge component displays a styled badge showing the product's discount percentage.
 * Converts the numeric discount to Persian digits for localization.
 *
 * @component
 * @param {ProductDiscountBadgeProps} props - Props containing the discount value
 * @returns {JSX.Element} A positioned badge with localized discount percentage
 */

export default function ProductDiscountBadge({
  discount,
}: ProductDiscountBadgeProps) {
  return (
    <p className="w-10 h-10 bg-[#D92C54] absolute top-4 left-4 text-slate-50 text-lg rounded-b-2xl rounded-tr-2xl flex justify-center items-center gap-0.5 font-bold z-10">
      <span>{convertToPersianDigits(discount)}</span>
      <span className="text-sm">٪</span>
    </p>
  );
}

import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";

interface DiscountBadgeProps {
  discount: number;
}
/**
 * A React component that displays a discount badge with a percentage value
 * formatted in Persian digits.
 *
 * @component
 * @param {DiscountBadgeProps} props - Props containing the discount value
 * @returns {JSX.Element} A styled badge element showing the discount in Persian digits
 */
export default function DiscountBadge({ discount }: DiscountBadgeProps) {
  return (
    <p className="w-10 h-10 bg-[#D92C54] absolute top-4 right-4 text-slate-50 text-lg rounded-b-2xl rounded-tr-2xl flex justify-center items-center gap-0.5 font-bold">
      <span>{convertToPersianDigits(discount)}</span>
      <span className="text-sm">٪</span>
    </p>
  );
}

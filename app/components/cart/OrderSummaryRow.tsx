import addCommasToString from "@/app/_utils/addCommasToPrice";
import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";
interface OrderSummaryRowProps {
  title: string;
  price: number;
}
/**
 * OrderSummaryRow component displays a single row in the order summary,
 * showing a label and its corresponding price formatted with Persian digits and commas.
 *
 * @component
 * @param {OrderSummaryRowProps} props - Props for the row
 * @param {string} props.title - Label describing the price (e.g. "Shipping Cost")
 * @param {number} props.price - Numeric value to be formatted and displayed
 * @returns {JSX.Element} A flex container with title and formatted price
 */
export default function OrderSummaryRow({
  title,
  price,
}: OrderSummaryRowProps) {
  return (
    <div className="flex justify-between items-center text-sm py-2">
      <p>{title}</p>
      <p>
        {addCommasToString(convertToPersianDigits(price))}
        <span className="text-[8px]"> تومان</span>
      </p>
    </div>
  );
}

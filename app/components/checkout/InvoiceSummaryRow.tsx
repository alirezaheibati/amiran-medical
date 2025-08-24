import addCommasToString from "@/app/_utils/addCommasToPrice";
import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";

interface ItemSummaryRowProps {
  amount: number;
  price: number;
  title: string;
}
/**
 * InvoiceSummaryRow component displays a single row in the invoice summary.
 * Shows the item title, quantity, and total price in Persian digits with comma formatting.
 *
 * @component
 * @param {ItemSummaryRowProps} props - Props for the invoice row
 * @param {string} props.title - Name of the item
 * @param {number} props.price - Unit price of the item
 * @param {number} props.amount - Quantity of the item
 * @returns {JSX.Element} A styled row showing item quantity and total cost
 */
export default function InvoiceSummaryRow({
  title,
  price,
  amount,
}: ItemSummaryRowProps) {
  return (
    <div className="flex justify-between items-center text-sm py-2">
      <p>
        {convertToPersianDigits(amount)} x {title}
      </p>
      <p>
        {addCommasToString(convertToPersianDigits(amount * price))}
        <span className="text-[8px]"> تومان</span>
      </p>
    </div>
  );
}

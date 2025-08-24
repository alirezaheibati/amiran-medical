import addCommasToString from "@/app/_utils/addCommasToPrice";
import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";
import { faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import StyledLinkAsBtn from "../ui/StyledLinkAsBtn";
import OrderSummaryRow from "./OrderSummaryRow";
import { CartItemType } from "@/app/_interface/CartItemType";
interface OrderSummaryProps {
  items: CartItemType[];
}
/**
 * OrderSummary component displays a breakdown of the user's cart totals,
 * including item subtotal, shipping cost, packaging fee, and final payable amount.
 *
 * @component
 * @param {OrderSummaryProps} props - Props containing an array of cart items
 * @param {CartItemType[]} props.items - List of items currently in the cart
 * @returns {JSX.Element} A styled summary box with pricing details and checkout link
 */
export default function OrderSummary({ items }: OrderSummaryProps) {
  const orderTotal = items.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);
  const shippingPrice = 49000;
  const boxingPrice = 3000;
  return (
    <div className="lg:col-span-1 border border-gray-100 shadow-md p-4 rounded-md text-[#003d5b]">
      <h1 className="text-xl text-[#003d5b] mb-4 font-semibold text-center">
        جزئیات سفارش
      </h1>
      <OrderSummaryRow title="جمع سفارش" price={orderTotal} />
      <OrderSummaryRow title="هزینه ارسال" price={shippingPrice} />
      <OrderSummaryRow title="هزینه بسته بندی" price={boxingPrice} />

      <div className="mt-4 flex justify-between items-center font-semibold py-4 border-t border-gray-200">
        <p>جمع کل</p>
        <p>
          {addCommasToString(
            convertToPersianDigits(orderTotal + shippingPrice + boxingPrice)
          )}
          <span className="text-[8px]"> تومان</span>
        </p>
      </div>
      <StyledLinkAsBtn
        href="/checkout"
        title="انتخاب روش پرداخت"
        bgColor="bg-[#d1495b]"
        icon={faMoneyBill1}
      />
      <p className="text-center text-sm text-[#003d5b] mt-4">
        قابل پرداخت بوسیله تمامی کارت های عضو شتاب
      </p>
    </div>
  );
}

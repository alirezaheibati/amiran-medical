"use client";
import { useAppSelector } from "@/app/_hooks/useAppSelector";
import addCommasToString from "@/app/_utils/addCommasToPrice";
import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";
import InvoiceSummaryRow from "./InvoiceSummaryRow";
import OrderSummaryRow from "../cart/OrderSummaryRow";
/**
 * InvoiceSummary component displays a detailed breakdown of the cart invoice.
 * Includes itemized rows, shipping and boxing fees, and a total cost in Persian digits.
 *
 * @component
 * @returns {JSX.Element} A styled invoice summary section with cart data and pricing
 */
export default function InvoiceSummary() {
  const cartItems = useAppSelector((state) => state.cartItems.cart);
  const shippingPrice = 49000;
  const boxingPrice = 3000;
  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.count * item.price;
  }, 0);
  return (
    <div className="lg:col-span-1 border border-gray-100 shadow-md p-4 rounded-xl text-[#003d5b]">
      <h1 className="text-xl text-[#003d5b] mb-4 font-semibold text-center">
        ریز فاکتور
      </h1>
      {cartTotal > 0 && (
        <div>
          {cartItems.map((item) => (
            <InvoiceSummaryRow
              title={item.name}
              price={item.price}
              amount={item.count}
              key={item.id}
            />
          ))}
          <OrderSummaryRow title="هزینه ارسال" price={shippingPrice} />
          <OrderSummaryRow title="هزینه بسته بندی" price={boxingPrice} />

          <div className="mt-4 flex justify-between items-center font-semibold py-4 border-t border-gray-200">
            <p>جمع کل</p>
            <p>
              {addCommasToString(
                convertToPersianDigits(cartTotal + shippingPrice + boxingPrice)
              )}
              <span className="text-[8px]"> تومان</span>
            </p>
          </div>
        </div>
      )}
      <p className="text-center text-sm text-[#003d5b] mt-4">
        پرداخت صورتحساب به منزله موافقت با قوانین سایت میباشد.
      </p>
    </div>
  );
}

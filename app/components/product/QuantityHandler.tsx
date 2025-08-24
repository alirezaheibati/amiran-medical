"use client";
import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";
import { ForwardedRef, forwardRef, useState } from "react";
/**
 * QuantityHandler component provides a UI for adjusting item quantity.
 * Includes increment and decrement buttons and a read-only input displaying the current amount.
 * Uses Persian digit formatting and supports forwarding a ref to the input element.
 *
 * @component
 * @param {QuantityHandlerProps} props - No props currently used
 * @param {ForwardedRef<HTMLInputElement>} ref - Ref forwarded to the input element
 * @returns {JSX.Element} A styled quantity control with internal state
 */

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type QuantityHandlerProps = {};

const QuantityHandler = forwardRef<HTMLInputElement, QuantityHandlerProps>(
  (_, ref: ForwardedRef<HTMLInputElement>) => {
    const [amount, setAmount] = useState(1);
    function increaseItemAmountHandler() {
      setAmount((prev) => ++prev);
    }

    function decreaseItemAmountHandler() {
      setAmount((prev) => {
        return prev > 1 ? --prev : 1;
      });
    }
    return (
      <div className=" text-[#003d5b] border border-gray-400 rounded-md flex justify-start items-stretch w-24 overflow-hidden">
        <button
          className="w-8 h-8 text-lg font-bold border-l cursor-pointer border-gray-400"
          onClick={increaseItemAmountHandler}
        >
          +
        </button>
        <input
          type="text"
          readOnly
          value={convertToPersianDigits(amount)}
          className="w-8 h-8 text-center grow focus:outline-none"
          ref={ref}
        />
        <button
          className="w-8 h-8 text-lg font-bold border-r cursor-pointer border-gray-400"
          onClick={decreaseItemAmountHandler}
        >
          -
        </button>
      </div>
    );
  }
);
QuantityHandler.displayName = "QuantityHandler";
export default QuantityHandler;

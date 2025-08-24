"use client";
import { useAppDispatch } from "@/app/_hooks/useAppDispatch";
import { cartSliceActions } from "@/app/_store/cart-slice";
import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";

interface QuantityControlProps {
  itemId: string;
  quantity: number;
}
/**
 * QuantityControl component provides UI controls to adjust the quantity of a cart item.
 * Includes increment and decrement buttons and a read-only input displaying the current quantity.
 *
 * @component
 * @param {QuantityControlProps} props - Props for the quantity control
 * @param {string} props.itemId - Unique identifier of the cart item
 * @param {number} props.quantity - Current quantity of the item
 * @returns {JSX.Element} A styled quantity control element with Redux dispatch integration
 */
export default function QuantityControl({
  itemId,
  quantity,
}: QuantityControlProps) {
  const dispatch = useAppDispatch();
  function increaseItemAmountHandler() {
    dispatch(cartSliceActions.increaseItemAmount(itemId));
  }

  function decreaseItemAmountHandler() {
    dispatch(cartSliceActions.decreaseItemAmount(itemId));
  }
  return (
    <div className=" text-[#003d5b] border border-gray-400 rounded-md flex justify-start items-stretch w-24 overflow-hidden mx-auto">
      <button
        className="w-8 h-8 text-lg font-bold border-l cursor-pointer border-gray-400"
        onClick={increaseItemAmountHandler}
      >
        +
      </button>
      <input
        type="text"
        readOnly
        value={convertToPersianDigits(quantity)}
        className="w-8 h-8 text-center grow focus:outline-none"
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

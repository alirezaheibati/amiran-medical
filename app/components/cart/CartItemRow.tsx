import QuantityControl from "./QuantityControl";
import Image from "next/image";
import addCommasToString from "@/app/_utils/addCommasToPrice";
import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useAppDispatch } from "@/app/_hooks/useAppDispatch";
import { cartSliceActions } from "@/app/_store/cart-slice";
import { CartItemType } from "@/app/_interface/CartItemType";
/**
 * CartItemRow component renders a single row in the shopping cart table.
 * Displays product details, quantity controls, pricing, and a delete option.
 *
 * @component
 * @param {CartItemRowProps} props - Props containing a cart item object
 * @param {CartItemType} props.item - The cart item to be displayed
 * @returns {JSX.Element} A table row with product info and cart actions
 */
interface CartItemRowProps {
  item: CartItemType;
}
export default function CartItemRow({ item }: CartItemRowProps) {
  const dispatch = useAppDispatch();
  function removeItemHandler() {
    dispatch(cartSliceActions.removeItem(item.id));
  }
  return (
    <tr className="hover:bg-slate-50">
      <td className="p-2 border-b border-slate-200">
        <div className="flex justify-start items-center gap-2">
          <Image
            src={item.image}
            alt={item.name}
            className="object-cover rounded"
            width={64}
            height={36}
          />
          <p className="block font-semibold text-sm text-slate-800">
            {item.name}
          </p>
        </div>
      </td>
      <td className="p-2 border-b border-slate-200">
        <QuantityControl quantity={item.count} itemId={item.id} />
      </td>
      <td className="p-2 text-center border-b border-slate-200 py-5">
        <p className="text-sm text-slate-500">
          {addCommasToString(convertToPersianDigits(item.price))}
        </p>
      </td>
      <td className="p-2 text-center border-b border-slate-200 py-5">
        <p className="text-sm text-slate-500">
          {addCommasToString(convertToPersianDigits(item.price * item.count))}
        </p>
      </td>
      <td className="p-2 text-center border-b border-slate-200 py-5">
        <button
          type="button"
          className="text-[#003d5b] hover:text-red-600 cursor-pointer"
          onClick={removeItemHandler}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </td>
    </tr>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
interface RemoveFromCartBtnProps {
  onRemoveFromCart: () => void;
}
/**
 * RemoveFromCartBtn component renders a styled button with a trash icon.
 * Triggers the provided callback to remove an item from the cart.
 *
 * @component
 * @param {RemoveFromCartBtnProps} props - Props containing the remove handler
 * @returns {JSX.Element} A button for removing cart items
 */
export default function RemoveFromCartBtn({
  onRemoveFromCart,
}: RemoveFromCartBtnProps) {
  return (
    <button
      className="flex justify-center items-center p-3 absolute right-4 top-4 z-10 text-white rounded-full bg-[#d1495b] hover:bg-[#d1495b]/90 cursor-pointer"
      title="حذف"
      onClick={() => onRemoveFromCart()}
    >
      <FontAwesomeIcon icon={faTrashCan} className="block" />
    </button>
  );
}

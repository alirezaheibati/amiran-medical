import { useAppDispatch } from "@/app/_hooks/useAppDispatch";
import { cartSliceActions } from "@/app/_store/cart-slice";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
/**
 * CartActions component provides user controls for managing the shopping cart.
 * Includes a link to add more products and a button to empty the cart.
 *
 * @component
 * @returns {JSX.Element} A UI section with cart-related actions
 */
export default function CartActions() {
  const dispatch = useAppDispatch();
  function emptyCartHandler() {
    dispatch(cartSliceActions.emptyCart());
  }
  return (
    <div className=" py-4 text-sm text-left flex justify-between items-center px-2">
      <Link
        href="/shop"
        className="inline-flex items-center  text-[#00798c] hover:text-[#003d5b] transition-colors"
      >
        اضافه کردن محصول
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
      </Link>
      <button
        className="text-[#d1495b] cursor-pointer font-semibold"
        onClick={emptyCartHandler}
      >
        خالی کردن سبد
      </button>
    </div>
  );
}

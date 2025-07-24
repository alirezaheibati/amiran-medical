import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
/**
 * HeaderCartLink component displays a cart icon with an item count badge.
 * The icon links to the cart page and is styled using Tailwind CSS.
 *
 * @component
 * @returns {JSX.Element} JSX element for the cart button in header
 */
export default function HeaderCartLink() {
  return (
    <div className="relative h-11 w-11 bg-[#003d5d]/10 rounded-xl flex overflow-hidden shadow-md">
      <p className="absolute bottom-1.5 right-1/2 translate-x-1/2 text-xs text-white">
        ۳۱
      </p>
      <Link
        href="/cart"
        className="text-[#003d5d] h-full w-full flex justify-center items-center"
      >
        <FontAwesomeIcon icon={faBagShopping} className="text-3xl" />
      </Link>
    </div>
  );
}

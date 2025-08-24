"use client";
import { useAppSelector } from "@/app/_hooks/useAppSelector";
import CartActions from "@/app/components/cart/CartActions";
import CartTable from "@/app/components/cart/CartTable";
import OrderSummary from "@/app/components/cart/OrderSummary";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
/**
 * CartPage component renders the shopping cart view.
 * Displays cart items in a table, action buttons, and an order summary.
 * If the cart is empty, shows a message and a link to continue shopping.
 *
 * @component
 * @returns {JSX.Element} A responsive cart layout with conditional rendering
 */
export default function CartPage() {
  const cartItems = useAppSelector((state) => state.cartItems.cart);

  return (
    <section className="max-w-7xl px-4 mx-auto pt-8 min-h-screen">
      <h1 className="text-3xl font-bold text-[#003d5b] mb-2 line-clamp-1 font-messiri">
        سبد خرید
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* basket */}
        <div className="lg:col-span-2">
          <div className=" overflow-x-auto border border-gray-100 shadow-md">
            {/* cart table */}
            {cartItems.length > 0 && <CartTable items={cartItems} />}
            {cartItems.length > 0 && <CartActions />}
          </div>
          {cartItems.length === 0 && (
            <div>
              <p className="p-4">سبد خرید خالی است.</p>
              <Link
                href="/shop"
                className="inline-flex items-center px-4 text-[#00798c] hover:text-[#003d5b] transition-colors text-sm"
              >
                اضافه کردن محصول
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              </Link>
            </div>
          )}
        </div>
        <div className="lg:col-span-1">
          {/* order summary */}
          {cartItems.length > 0 && <OrderSummary items={cartItems} />}
        </div>
      </div>
    </section>
  );
}

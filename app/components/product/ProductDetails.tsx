"use client";
import { useAppDispatch } from "@/app/_hooks/useAppDispatch";
import { useAppSelector } from "@/app/_hooks/useAppSelector";
import { cartSliceActions } from "@/app/_store/cart-slice";
import addCommasToString from "@/app/_utils/addCommasToPrice";
import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";
import {
  faShoppingBag,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import QuantityHandler from "./QuantityHandler";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { ProductType } from "@/app/_interface/ProductType";
import { CartItemType } from "@/app/_interface/CartItemType";
import { convertToEnglishDigits } from "@/app/_utils/ConvertToEnDigit";
interface ProductDetailsProps {
  product: ProductType;
}
/**
 * ProductDetails component displays detailed information about a single product.
 * Includes product name, description, price, image, and cart interaction buttons.
 *
 * @component
 * @param {ProductDetailsProps} props - Props for the product details
 * @param {ProductType} props.product - Product data including name, price, image, and description
 * @returns {JSX.Element} A styled product detail view with cart integration
 */
export default function ProductDetails({ product }: ProductDetailsProps) {
  //get cart items from redux store
  const cart = useAppSelector((state) => state.cartItems.cart);
  const dispatch = useAppDispatch();
  //checks that product is in cart already. true means it is in cart.
  const productIsInCart =
    cart.findIndex((cartItem) => cartItem.id === product.id) < 0 ? false : true;

  const quantityRef = useRef<HTMLInputElement>(null);

  function addProductToCartHandler() {
    let count = 1;
    if (quantityRef.current) {
      count = convertToEnglishDigits(quantityRef.current.value);
    }
    const cartItem: CartItemType = {
      ...product,
      count: count,
      date: product.date,
    };

    dispatch(cartSliceActions.addItem(cartItem));
  }
  function removeProductHandler() {
    dispatch(cartSliceActions.removeItem(product.id));
  }
  return (
    <div className="w-full flex-col md:flex-row flex justify-between items-stretch border border-gray-100 bg-white rounded-xl overflow-hidden shadow-md min-h-96">
      <div className="w-full md:w-1/2 p-10 bg-gray-50">
        <h1 className="text-2xl font-bold text-[#003d5b] mb-2 line-clamp-1">
          {product?.name}
        </h1>
        <div className="text-xl font-bold flex justify-end items-center gap-1 mb-4 text-[#d1495b]">
          <p>
            {addCommasToString(convertToPersianDigits(product?.price ?? 0))}
          </p>
          <p className="text-xs">تومان</p>
        </div>
        <p className="text-sm text-[#30638e]/80 mb-4 line-clamp-4 ">
          {product?.description}
        </p>
        {/* product actions */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          {productIsInCart && (
            <div className="bg-green-50 px-3 text-[#4bb543] text-sm rounded-lg h-16 flex justify-center items-center">
              <FontAwesomeIcon icon={faShoppingBag} className="ml-1.5" />
              این محصول در سبد خرید شما موجود است.
            </div>
          )}
          {!productIsInCart && (
            <div className="h-16">
              <p className="text-[#003d5b] mb-1">تعداد:</p>
              <QuantityHandler ref={quantityRef} />
            </div>
          )}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-4">
            {!productIsInCart && (
              <button
                className="py-3 cursor-pointer flex justify-center items-center gap-2 rounded-full text-white font-medium bg-[#4bb543]/95 hover:bg-[#4bb543] w-full sm:w-1/2"
                onClick={addProductToCartHandler}
              >
                افزودن به سبد
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>
            )}
            {productIsInCart && (
              <button
                className="py-3 cursor-pointer flex justify-center items-center gap-2 rounded-full text-white font-medium bg-[#d1495b]/95 hover:bg-[#d1495b] w-full sm:w-1/2"
                onClick={removeProductHandler}
              >
                حذف از سبد
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            )}
            <Link
              href={"/cart"}
              className="py-3 cursor-pointer flex justify-center items-center rounded-full text-[#003d5b] font-medium bg-gray-200 hover:bg-gray-300 w-full sm:w-1/2"
            >
              مشاهده سبد خرید
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative flex justify-center items-center p-4">
        {productIsInCart && (
          <div
            className="flex justify-center items-center p-3 absolute right-4 top-4 z-10 text-white rounded-full bg-[#4bb543] text-lg"
            title="در سبد خرید موجود است"
          >
            <FontAwesomeIcon icon={faShoppingBag} className="block" />
          </div>
        )}
        <div className="bg-red-500 relative w-full max-w-[360px] aspect-square">
          <Image
            src={product?.image ?? "/images/placeholder.png"}
            alt={product?.name ?? "product image"}
            fill
          />
        </div>
      </div>
    </div>
  );
}

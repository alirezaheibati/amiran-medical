"use client";
import { useAppSelector } from "@/app/_hooks/useAppSelector";
import { cartSliceActions } from "@/app/_store/cart-slice";
import { useDispatch } from "react-redux";
import { ProductType } from "@/app/_interface/ProductType";
import addCommasToString from "@/app/_utils/addCommasToPrice";
import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";
import { faCheck, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import OutOfStockCover from "./OutOfStockCover";
import ProductDiscountBadge from "./ProductDiscountBadge";
import RemoveFromCartBtn from "./RemoveFromCartBtn";

interface ProductCardType {
  product: ProductType;
}
/**
 * ProductCard component displays a product with image, name, description, price,
 * and interactive buttons for adding/removing the item from the cart.
 *
 * @component
 * @param {ProductCardType} props - Props for the product card
 * @param {ProductType} props.product - Product data including name, image, price, and category
 * @returns {JSX.Element} A styled product card with cart interaction and navigation
 */
export default function ProductCard({ product }: ProductCardType) {
  const cartItems = useAppSelector((state) => state.cartItems.cart);
  const isInCart: boolean =
    cartItems.findIndex((cartItem) => cartItem.id === product.id) < 0
      ? false
      : true;
  const dispatch = useDispatch();
  function addItemToCartHandler() {
    dispatch(
      cartSliceActions.addItem({
        ...product,
        count: 1,
        date: product.date.toString(),
      })
    );
  }
  function removeItemHandler() {
    dispatch(cartSliceActions.removeItem(product.id));
  }
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all group">
      <div className="h-64 relative flex items-center justify-center overflow-hidden">
        {product.amount <= 0 && <OutOfStockCover />}
        {isInCart && <RemoveFromCartBtn onRemoveFromCart={removeItemHandler} />}
        {product.discount > 0 && (
          <ProductDiscountBadge discount={product.discount} />
        )}
        <Image
          src={product.image}
          alt={product.name}
          width={256}
          height={256}
          className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="py-6 px-2 sm:px-6 bg-gray-50">
        <div>
          <h2 className="text-lg font-bold text-[#003d5b] mb-2 line-clamp-1">
            {product.name}
          </h2>
          <p className="text-sm text-[#30638e]/80 mb-4 line-clamp-2 ">
            {product.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <button
              disabled={isInCart || product.amount <= 0}
              className={`h-10 w-10 flex items-center justify-center rounded-full text-white ${
                product.amount <= 0 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              style={{ backgroundColor: isInCart ? "#34b233" : "#00798c" }}
              onClick={addItemToCartHandler}
            >
              <FontAwesomeIcon icon={isInCart ? faCheck : faShoppingCart} />
            </button>
            <Link
              href={`/shop/${product.category.toLowerCase()}/${product.id}`}
              className="px-4 py-2 flex justify-center items-center gap-1 rounded-full bg-[#00798c] text-white text-sm font-medium"
            >
              <span className="hidden sm:block"> محصول</span>
              <span>جزئیات</span>
            </Link>
          </div>
          <div className="text-xl font-bold flex justify-end items-center gap-1 text-[#00798c]">
            <p>{addCommasToString(convertToPersianDigits(product.price))}</p>
            <p className="text-xs">تومان</p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { ProductType } from "@/app/_interface/ProductType";
import ProductCard from "@/app/components/product/ProductCard";
import ReturnLink from "@/app/components/ui/ReturnLink";
import FilterModal from "../Filter/FilterModal";
import { useEffect } from "react";
import { useAppDispatch } from "@/app/_hooks/useAppDispatch";
import { itemsActions } from "@/app/_store/items-slice";
import { useAppSelector } from "@/app/_hooks/useAppSelector";
import SortSection from "./SortSection";
interface ProductItemsGridProps {
  categoryProducts: ProductType[];
}
/**
 * ProductItemsGrid component displays a filtered and sorted grid of products.
 * Applies Redux-based filters (price, discount, stock, brand) and initializes item state from props.
 *
 * @component
 * @param {ProductItemsGridProps} props - Contains category-specific product data
 * @returns {JSX.Element} A responsive product grid with sorting and filtering controls
 */
export default function ProductItemsGrid({
  categoryProducts,
}: ProductItemsGridProps) {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.items);
  let filteredItems = items.items.filter(
    (item) => item.price >= items.price.min && item.price <= items.price.max
  );
  if (items.areInDiscount) {
    filteredItems = filteredItems.filter((item) => item.discount > 0);
  }
  if (items.areInStock) {
    filteredItems = filteredItems.filter((item) => item.amount > 0);
  }
  if (items.brand != "all") {
    filteredItems = filteredItems.filter((item) => item.brand === items.brand);
  }
  useEffect(() => {
    dispatch(
      itemsActions.setItems(
        categoryProducts.map((product: ProductType) => {
          return { ...product, date: new Date(product.date).getTime() };
        })
      )
    );
  }, [categoryProducts, dispatch]);
  return (
    <div className="w-full flex justify-start gap-2 items-start mt-2">
      <FilterModal filteredItemsCount={filteredItems.length} />
      <section className="w-full md:w-2/3 lg:w-3/4">
        <SortSection />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
        </div>
        <ReturnLink href="/shop" title="بازگشت" />
      </section>
    </div>
  );
}

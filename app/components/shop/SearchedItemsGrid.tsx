"use client";
import ProductCard from "@/app/components/product/ProductCard";
import FilterModal from "../Filter/FilterModal";
import { useAppSelector } from "@/app/_hooks/useAppSelector";
import SortSection from "./SortSection";
/**
 * ProductItemsGrid component displays a filtered and sorted grid of products.
 * Applies Redux-based filters (price, discount, stock, brand) and initializes item state from props.
 *
 * @component
 * @param {ProductItemsGridProps} props - Contains category-specific product data
 * @returns {JSX.Element} A responsive product grid with sorting and filtering controls
 */
export default function SearchedItemsGrid() {
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

  return (
    <>
      <div className="w-full flex justify-start gap-2 items-start mt-2 mb-16">
        <FilterModal filteredItemsCount={filteredItems.length} />
        <section className="w-full md:w-2/3 lg:w-3/4">
          <SortSection />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <ProductCard product={item} key={item.id} />
              ))
            ) : (
              <p className="text-center text-[#003d5d] w-full col-span-3 py-16">
                محصولی با این مشخصات یافت نشد. لطفا فیلتر ها را حذف نموده یا با
                عبارت جدید جستجو را تکرار نمایید.
              </p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

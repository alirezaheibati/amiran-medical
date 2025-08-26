"use client";
import { useAppDispatch } from "@/app/_hooks/useAppDispatch";
import { useAppSelector } from "@/app/_hooks/useAppSelector";
import { itemsActions } from "@/app/_store/items-slice";
/**
 * FilterByDiscount component renders a toggle switch to filter products with active discounts.
 * Updates the Redux store to reflect the discount filter status.
 *
 * @component
 * @returns {JSX.Element} A UI switch for filtering discounted products
 */
export default function FilterByDiscount() {
  const dispatch = useAppDispatch();
  const areInDiscount = useAppSelector((state) => state.items.areInDiscount);

  function handleFilterStockItems() {
    dispatch(itemsActions.setDisountStatus());
  }
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-xl my-4">کالاهای تخفیف دار</h2>
      <div
        onClick={handleFilterStockItems}
        className="relative cursor-pointer border rounded-full p-[2px] w-12 h-[22px]"
      >
        <div
          className={`circle w-4 h-4 rounded-full absolute transition-[left] ${
            areInDiscount
              ? "left-[2px] bg-[#3264fe]"
              : " left-[28px] bg-gray-300"
          } top-[2px]`}
        ></div>
      </div>
    </div>
  );
}

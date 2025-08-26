"use client";
import { useAppDispatch } from "@/app/_hooks/useAppDispatch";
import { useAppSelector } from "@/app/_hooks/useAppSelector";
import { itemsActions } from "@/app/_store/items-slice";
/**
 * FilterByStock component renders a toggle switch to filter products based on stock availability.
 * It updates the Redux store to show either all items or only those currently in stock.
 *
 * @component
 * @returns {JSX.Element} A stock filter toggle for product listings
 */
export default function FilterByStock() {
  const dispatch = useAppDispatch();
  const areInStock = useAppSelector((state) => state.items.areInStock);

  function handleFilterStockItems() {
    dispatch(itemsActions.setAvailability());
  }
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-xl my-4">کالاهای موجود</h2>
      <div
        onClick={handleFilterStockItems}
        className="relative cursor-pointer border rounded-full p-[2px] w-12 h-[22px]"
      >
        <div
          className={`circle w-4 h-4 rounded-full absolute transition-[left] ${
            areInStock ? "left-[2px] bg-[#3264fe]" : " left-[28px] bg-gray-300"
          } top-[2px]`}
        ></div>
      </div>
    </div>
  );
}

"use client";
import PriceFilter from "./PriceFilter";
import FilterByStock from "./FilterByStock";
import FilterByBrands from "./FilterByBrands";
import FilterByDiscount from "./FilterByDiscount";
import { useAppSelector } from "@/app/_hooks/useAppSelector";
import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";
import { useAppDispatch } from "@/app/_hooks/useAppDispatch";
import { itemsActions } from "@/app/_store/items-slice";
interface FilterModalProps {
  filteredItemsCount: number;
}
/**
 * FilterModal component displays a responsive modal with multiple filtering options
 * including stock availability, discount, brand, and price range.
 * It integrates with Redux to manage filter state and visibility.
 *
 * @component
 * @param {number} filteredItemsCount - Number of items matching current filters
 * @returns {JSX.Element} A modal UI for applying product filters
 */
export default function FilterModal({ filteredItemsCount }: FilterModalProps) {
  const dispatch = useAppDispatch();
  const filterModalShow = useAppSelector(
    (state) => state.items.filterModalVisibility
  );
  function closeFilterModalHandler() {
    dispatch(itemsActions.toggleFilterModal());
  }
  function removeFiltersHandler() {
    dispatch(itemsActions.resetFilters());
  }
  return (
    <div
      className={`bg-white border border-gray-200 rounded-md flex flex-col justify-between fixed md:relative w-screen z-50 h-screen md:h-auto top-0 left-0 md:block md:w-1/3 lg:w-1/4 p-3 pr-6 md:pr-3 ${
        filterModalShow ? "translate-y-0" : "-translate-y-full md:translate-y-0"
      } transition-transform`}
    >
      <div className="grow overflow-y-auto">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl">فیلترها</h2>
          <button
            className="text-red-500 cursor-pointer"
            onClick={removeFiltersHandler}
          >
            حذف فیلترها
          </button>
        </div>
        <hr className="my-2" />
        <FilterByStock />
        <hr className="my-2" />
        <FilterByDiscount />
        <hr className="my-2" />
        <FilterByBrands />
        <hr className="my-2" />
        <div>
          <PriceFilter />
        </div>
      </div>
      <div className="md:hidden flex justify-center items-center gap-2">
        <button
          className="flex-1/2 rounded-lg py-2 text-[#ef4056] border border-[#ef4056] cursor-pointer"
          onClick={closeFilterModalHandler}
        >
          بستن
        </button>
        <button
          className="flex-1/2 bg-[#ef4056] rounded-lg py-2 text-slate-50 cursor-pointer"
          onClick={closeFilterModalHandler}
        >
          مشاهده {convertToPersianDigits(filteredItemsCount)} محصول
        </button>
      </div>
    </div>
  );
}

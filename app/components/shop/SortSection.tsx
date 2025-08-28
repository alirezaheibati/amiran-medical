"use client";
import {
  faArrowDownWideShort,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SortItemRow from "./SortItemRow";
import { useState } from "react";
import { useAppDispatch } from "@/app/_hooks/useAppDispatch";
import { itemsActions } from "@/app/_store/items-slice";
/**
 * SortSection component renders a sorting UI with multiple options and a filter toggle.
 * Integrates local state for active sort and dispatches Redux actions for sorting and modal control.
 *
 * @component
 * @returns {JSX.Element} A responsive sort/filter control section
 */
export default function SortSection() {
  const dispatch = useAppDispatch();
  const [activeSort, setActiveSort] = useState("date-asc");
  function activeSortHandler(identifier: string) {
    setActiveSort(identifier);
    dispatch(itemsActions.sortItems(identifier));
  }
  function toggleFilterModalHandler() {
    dispatch(itemsActions.toggleFilterModal());
  }
  return (
    <div className="flex justify-between items-center text-[#003d5b]">
      <div className=" mb-2 p-2 flex gap-2 justify-start items-center">
        <div className="flex justify-start items-center gap-2">
          <FontAwesomeIcon icon={faArrowDownWideShort} className="text-lg" />
          <p className="text-sm font-semibold hidden sm:block">مرتب سازی:</p>
        </div>
        <ul className="flex justify-start items-center gap-2">
          <SortItemRow
            title="جدیدترین"
            id="date-asc"
            activeSort={activeSort}
            onSelectSort={activeSortHandler}
          />
          <SortItemRow
            title="قدیمی ترین"
            id="date-desc"
            activeSort={activeSort}
            onSelectSort={activeSortHandler}
          />
          <SortItemRow
            title="ارزانترین"
            id="price-asc"
            activeSort={activeSort}
            onSelectSort={activeSortHandler}
          />
          <SortItemRow
            title="گرانترین"
            id="price-desc"
            activeSort={activeSort}
            onSelectSort={activeSortHandler}
          />
        </ul>
      </div>
      <button
        className="bg-white cursor-pointer w-8 h-8 sm:w-auto sm:px-4 rounded-md border md:hidden flex justify-center items-center sm:gap-2"
        onClick={toggleFilterModalHandler}
      >
        <FontAwesomeIcon icon={faFilter} className="text-sm" />
        <span className="hidden sm:inline">فیلتر</span>
      </button>
    </div>
  );
}

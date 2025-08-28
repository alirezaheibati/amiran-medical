"use client";
import { useAppSelector } from "@/app/_hooks/useAppSelector";
import { convertToPersianDigits } from "@/app/_utils/convertToPersianDigits";
import SearchedItemsGrid from "@/app/components/shop/SearchedItemsGrid";
import { useSearchParams } from "next/navigation";
/**
 * Renders the search results page.
 * Retrieves the search term from URL parameters and displays matching items from Redux state.
 *
 * @returns {JSX.Element} The rendered search results page with item count and grid.
 */
export default function SearchPage() {
  const searchedItems = useAppSelector((state) => state.items.items);
  const searchParams = useSearchParams();
  const term = searchParams.get("term") ?? "";

  return (
    <>
      <div className="mt-2 rounded-xl p-2">
        <h1 className="text-xl px-2 mb-1 text-[#003d5d]">
          {`نتایج جستجو عبارت: "${term}"`}
        </h1>
        <p className="mb-4 px-2 text-xs text-[#003d5d]/80">
          {`تعداد ${convertToPersianDigits(
            searchedItems.length
          )} محصول در سیستم یافت شد.`}
        </p>
        <SearchedItemsGrid />
      </div>
    </>
  );
}

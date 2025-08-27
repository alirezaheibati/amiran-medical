import { ProductType } from "@/app/_interface/ProductType";
import SearchResultRow from "./SearchResultRow";
/** Array of products returned from the search query */
interface SearchResultsOverlayProps {
  products: ProductType[];
}
/**
 * `SearchResultsOverlay` displays a dropdown-style overlay containing search results.
 * Shows up to 3 product entries and a button to view all results.
 * If no products are found, displays a fallback message.
 *
 * @component
 * @param {SearchResultsOverlayProps} props - Props containing the list of products.
 * @returns {JSX.Element} A styled overlay with search result items or a no-results message.
 */
export default function SearchResultsOverlay({
  products,
}: SearchResultsOverlayProps) {
  return (
    <div className="absolute left-0 right-0 top-11 bg-white border border-gray-200 mt-1 rounded-xl overflow-hidden shadow-lg z-40">
      {products.length > 0 && (
        <ul>
          {products.slice(0, 3).map((item) => (
            <SearchResultRow product={item} key={item.id} />
          ))}
        </ul>
      )}
      {products.length > 0 && (
        <div className="w-full flex justify-center items-center border-t border-gray-200">
          <button
            type="submit"
            className="text-center font-semibold text-[#00798c] block p-4 cursor-pointer"
          >
            همه نتایج
          </button>
        </div>
      )}
      {products.length === 0 && (
        <p className="p-4 text-center text-[#00798c]">محصولی یافت نشد.</p>
      )}
    </div>
  );
}

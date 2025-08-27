"use client";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SearchResultsOverlay from "./SearchResultsOverlay";
import { useAppDispatch } from "@/app/_hooks/useAppDispatch";
import { itemsActions } from "@/app/_store/items-slice";
import { ProductType } from "@/app/_interface/ProductType";
/**
 * SearchBar component renders a responsive search input field.
 * It uses FontAwesome for the search icon and Tailwind CSS for styling.
 * Only visible on medium screens and larger.
 *
 * @component
 * @returns {JSX.Element} SearchBar JSX element
 */
export default function SearchBar() {
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    function searchItems() {
      if (searchTerm.trim() !== "") {
        fetch(`/api/products?term=${searchTerm.trim()}`)
          .then((res) => res.json())
          .then((data) => setProducts(data));
      } else {
        console.log("err");
      }
    }
    searchItems();
  }, [searchTerm]);
  const router = useRouter();
  function searchTermChangeHandler(e: ChangeEvent) {
    const target = e.target as HTMLInputElement;
    setSearchTerm(target.value);
  }

  function formSubmitHandler(e: FormEvent) {
    e.preventDefault();
    dispatch(itemsActions.setItems(products));
    if (searchTerm.trim() !== "") {
      router.push(`/shop/search?term=${encodeURIComponent(searchTerm)}`);
    }
    setSearchTerm("");
  }
  return (
    <form
      className="hidden md:block flex-grow max-w-lg max-8 relative "
      onSubmit={formSubmitHandler}
    >
      <div className="group relative ">
        <input
          type="text"
          placeholder="جستجوی محصول"
          value={searchTerm}
          onChange={searchTermChangeHandler}
          className="w-full h-11 bg-[#003d5d]/10 rounded-full py-2 pr-4 pl-10 text-[#003d5d] placeholder:text-[#003d5d] focus:outline-none focus:ring-2 focus:ring-[#003d5d] focus:border-transparent transition-all shadow-md"
        />
        <button
          type="submit"
          className="absolute w-10 h-10 cursor-pointer flex justify-center items-center left-0.5 top-0.5 text-[#003d5d]/70 hover:text-[#003d5d] rounded-full transition-colors"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      {searchTerm !== "" && <SearchResultsOverlay products={products} />}
    </form>
  );
}

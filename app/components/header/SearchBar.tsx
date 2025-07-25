import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * SearchBar component renders a responsive search input field.
 * It uses FontAwesome for the search icon and Tailwind CSS for styling.
 * Only visible on medium screens and larger.
 *
 * @component
 * @returns {JSX.Element} SearchBar JSX element
 */
export default function SearchBar() {
  return (
    <form className="hidden md:block flex-grow max-w-lg max-8 relative ">
      <div className="group relative ">
        <input
          type="text"
          placeholder="جستجوی محصول"
          className="w-full h-11 bg-[#003d5d]/10 rounded-full py-2 pr-4 pl-10 text-[#003d5d] placeholder:text-[#003d5d] focus:outline-none focus:ring-2 focus:ring-[#003d5d] focus:border-transparent transition-all shadow-md"
        />
        <button
          type="submit"
          className="absolute w-10 h-10 cursor-pointer flex justify-center items-center left-0.5 top-0.5 text-[#003d5d]/70 hover:text-[#003d5d] rounded-full transition-colors"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  );
}

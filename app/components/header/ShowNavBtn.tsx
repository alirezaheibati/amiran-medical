import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface ShowNavBtnProps {
  OnPressBtn: () => void;
}
/**
 * A responsive navigation toggle button for mobile views.
 * Displays a hamburger icon and executes a callback when clicked.
 *
 * @component
 * @param {ShowNavBtnProps} props - Props containing the callback function
 * @returns {JSX.Element} A styled mobile navigation button
 */
export default function ShowNavBtn({ OnPressBtn }: ShowNavBtnProps) {
  return (
    <div className="md:hidden relative h-11 w-11 bg-[#003d5d]/10 rounded-xl flex overflow-hidden shadow-md">
      <button
        className="text-[#003d5d] h-full w-full flex justify-center items-center cursor-pointer"
        onClick={OnPressBtn}
      >
        <FontAwesomeIcon icon={faBars} className="text-3xl" />
      </button>
    </div>
  );
}

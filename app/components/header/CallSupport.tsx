import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * CallSupport component displays a support phone number alongside a headset icon.
 * It is styled for medium screens and above, with Tailwind utility classes.
 *
 * @component
 * @returns {JSX.Element} JSX element for support contact in header
 */
export default function CallSupport() {
  return (
    <div className="hidden md:flex justify-center items-center gap-4 border border-gray-200 rounded-xl shadow-md h-11 px-4 text-[#003d5d]">
      <p>۰۹۱۲۳۴۱۸۹۷۶</p>
      <FontAwesomeIcon icon={faHeadset} className="text-2xl" />
    </div>
  );
}

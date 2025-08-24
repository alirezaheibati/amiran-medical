import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PayMethodRowProps {
  id: string;
  icon: IconProp;
  isActive: boolean;
  title: string;
  description: string;
  OnInputChange: (id: string) => void;
}
/**
 * PayMethodRow component renders a selectable payment method option.
 * Displays an icon, title, and description, along with a radio input for selection.
 *
 * @component
 * @param {PayMethodRowProps} props - Props for the payment method row
 * @param {string} props.id - Unique identifier for the payment method
 * @param {IconProp} props.icon - FontAwesome icon representing the method
 * @param {boolean} props.isActive - Indicates if this method is currently selected
 * @param {string} props.title - Title of the payment method
 * @param {string} props.description - Description of the payment method
 * @param {(id: string) => void} props.OnInputChange - Callback triggered when selection changes
 * @returns {JSX.Element} A styled list item representing a payment method
 */
export default function PayMethodRow({
  id,
  icon,
  isActive,
  title,
  description,
  OnInputChange,
}: PayMethodRowProps) {
  function inputChangeHandler() {
    OnInputChange(id);
  }
  return (
    <li
      className={`border ${
        isActive ? "border-[#003d5b]" : "border-gray-200"
      } rounded-lg overflow-hidden shadow-md mb-3 last:mb-0 bg-[#00798c]/5 hover:bg-[#00798c]/20 group`}
    >
      <label
        className="p-4 w-full flex justify-between items-center cursor-pointer"
        htmlFor={id}
      >
        <div className="flex justify-start items-center gap-4">
          <FontAwesomeIcon icon={icon} className="text-2xl text-[#003d5b]" />
          <div>
            <p className="text-[#003d5b] font-semibold text-lg font-messiri mb-1">
              {title}
            </p>
            <p className="text-xs text-[#003d5b]/60">{description}</p>
          </div>
        </div>
        <input
          type="radio"
          name="payment-method"
          id={id}
          className="w-4 h-4 accent-[#00798c]"
          checked={isActive}
          onChange={inputChangeHandler}
        />
      </label>
    </li>
  );
}

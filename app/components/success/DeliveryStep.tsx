import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DeliveryStepProps {
  icon: IconProp;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}
/**
 * DeliveryStep component displays a visual step in the delivery process.
 * Includes an icon, title, and description with customizable colors.
 *
 * @component
 * @param {DeliveryStepProps} props - Props for the delivery step
 * @param {IconProp} props.icon - FontAwesome icon representing the step
 * @param {string} props.title - Title of the delivery step
 * @param {string} props.description - Description of the step
 * @param {string} props.bgColor - Tailwind background color class for the icon container
 * @param {string} props.textColor - Tailwind text color class for the icon
 * @returns {JSX.Element} A styled delivery step block with icon and text
 */
export default function DeliveryStep({
  icon,
  title,
  description,
  textColor,
  bgColor,
}: DeliveryStepProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-1 max-w-40">
      <div
        className={`${bgColor} rounded-full p-3 flex justify-center items-center mb-2`}
      >
        <FontAwesomeIcon icon={icon} className={`text-2xl ${textColor}`} />
      </div>
      <h3 className="text-[#003d5b] text-sm font-semibold">{title}</h3>
      <p className="text-[10px] text-center text-[#00798c]">{description}</p>
    </div>
  );
}

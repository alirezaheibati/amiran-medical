import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface StyledLinkAsBtnProps {
  icon: IconProp;
  title: string;
  href: string;
  bgColor: string;
}
/**
 * StyledLinkAsBtn renders a styled link that looks like a button,
 * including a FontAwesome icon and customizable background color.
 *
 * @param {StyledLinkAsBtnProps} props - Component props.
 * @returns {JSX.Element} A styled link element with icon and label.
 */
export default function StyledLinkAsBtn({
  icon,
  title,
  href,
  bgColor,
}: StyledLinkAsBtnProps) {
  return (
    <Link
      href={href}
      className={`w-full py-3 cursor-pointer flex justify-center items-center gap-2 rounded-full text-white text-sm font-medium ${bgColor} hover:opacity-90`}
    >
      {title}
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
}

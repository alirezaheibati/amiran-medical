import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
interface ReturnLinkProps {
  href: string;
  title: string;
}
/**
 * ReturnLink renders a styled link with a left arrow icon,
 * typically used for navigation back to a previous page or section.
 *
 * @param {ReturnLinkProps} props - Component props.
 * @returns {JSX.Element} A styled link element with a title and left arrow icon.
 */
export default function ReturnLink({ href, title }: ReturnLinkProps) {
  return (
    <div className="mt-12 pt-6 border-t border-gray-200 text-left">
      <Link
        href={href}
        className="inline-flex items-center text-[#00798c] hover:text-[#003d5b] transition-colors"
      >
        {title}
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
      </Link>
    </div>
  );
}

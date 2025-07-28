import Link from "next/link";
interface NavItemProps {
  title: string;
  href: string;
  isActive: boolean;
}
/**
 * Renders a single navigation list item with active state styling.
 * Useful for highlighting the current page in navigation.
 *
 * @param {NavItemProps} props - Component props
 * @returns {JSX.Element} The rendered navigation item
 */
export default function NavItem({ title, href, isActive }: NavItemProps) {
  return (
    <li
      className={`hover:text-[#FE7743] transition-colors duration-300 ${
        isActive ? "text-[#FE7743] font-semibold" : "text-[#003d5d] font-medium"
      }`}
    >
      <Link href={href}>{title}</Link>
    </li>
  );
}

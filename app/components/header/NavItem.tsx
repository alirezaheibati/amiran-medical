"use client";
import { usePathname, useRouter } from "next/navigation";
interface NavItemProps {
  title: string;
  href: string;
  onCloseNav: () => void;
}
/**
 * Renders a single navigation list item with active state styling.
 * Useful for highlighting the current page in navigation.
 *
 * @param {NavItemProps} props - Component props
 * @returns {JSX.Element} The rendered navigation item
 */
export default function NavItem({ title, href, onCloseNav }: NavItemProps) {
  const router = useRouter();
  function navigateHandler() {
    onCloseNav();
    router.push(href);
  }
  const path = usePathname();
  return (
    <li
      className={`hover:text-[#FE7743] transition-colors duration-300 ${
        path.startsWith(href) && href != "/"
          ? "text-[#FE7743] font-semibold"
          : href === "/" && path.endsWith("/")
          ? "text-[#FE7743] font-semibold"
          : "text-[#003d5d] font-medium"
      }`}
    >
      <button onClick={navigateHandler}>{title}</button>
    </li>
  );
}

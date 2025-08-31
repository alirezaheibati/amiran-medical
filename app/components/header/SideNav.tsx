import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavItem from "./NavItem";

interface SideNavProps {
  showNav: boolean;
  onCloseNav: () => void;
}
/**
 * Mobile-friendly side navigation drawer.
 * Includes a semi-transparent overlay and a list of localized navigation links.
 * Visibility toggled with smooth translation animations.
 *
 * @component
 * @param {SideNavProps} props - Props to control navigation visibility and closing
 * @returns {JSX.Element} A responsive side navigation component
 */
export default function SideNav({ showNav, onCloseNav }: SideNavProps) {
  return (
    <div
      className={`fixed h-screen w-screen top-0 bottom-0 right-0 z-20 ${
        showNav ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-full h-full absolute top-0 right-0 bg-black/50"></div>
      <ul
        className={`flex flex-col h-full justify-start items-start gap-4 bg-white w-full max-w-sm px-8 py-16 relative shadow-md transition-transform duration-300 ${
          showNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute left-8 top-8 text-[#003d5d] cursor-pointer"
          onClick={onCloseNav}
        >
          <FontAwesomeIcon icon={faXmark} className="text-3xl" />
        </button>
        <NavItem href="/" title="خانه" onCloseNav={onCloseNav} />
        <NavItem href="/shop" title="فروشگاه" onCloseNav={onCloseNav} />
        <NavItem href="/blog" title="وبلاگ" onCloseNav={onCloseNav} />
        <NavItem
          href="/cooperate"
          title="همکاری در فروش"
          onCloseNav={onCloseNav}
        />
        <NavItem href="/faq" title="پرسش‌های متداول" onCloseNav={onCloseNav} />
        <NavItem href="/rules" title="قوانین" onCloseNav={onCloseNav} />
        <NavItem href="/contact" title="تماس با ما" onCloseNav={onCloseNav} />
      </ul>
    </div>
  );
}

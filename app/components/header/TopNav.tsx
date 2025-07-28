import NavItem from "./NavItem";
/**
 * Top navigation menu for desktop viewports.
 * Hidden on mobile and visible starting from medium screen sizes.
 * Displays localized navigation links with active styling support.
 *
 * @component
 * @returns {JSX.Element} A horizontal navigation bar
 */
export default function TopNav() {
  return (
    <ul className="hidden md:flex justify-start items-center gap-4">
      <NavItem href="/" title="خانه" isActive />
      <NavItem href="#" title="تخفیف دارها" isActive={false} />
      <NavItem href="#" title="نصب اپلیکیشن" isActive={false} />
      <NavItem href="#" title="راهنمای خرید" isActive={false} />
      <NavItem href="#" title="قوانین" isActive={false} />
      <NavItem href="#" title="تماس با ما" isActive={false} />
    </ul>
  );
}

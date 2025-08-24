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
      <NavItem href="/shop" title="فروشگاه" isActive={false} />
      <NavItem href="/cooperate" title="همکاری در فروش" isActive={false} />
      <NavItem href="/faq" title="پرسش‌های متداول" isActive={false} />
      <NavItem href="/rules" title="قوانین" isActive={false} />
      <NavItem href="/contact" title="تماس با ما" isActive={false} />
    </ul>
  );
}

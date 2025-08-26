import Link from "next/link";
import Branding from "./Branding";
import CallSupport from "./CallSupport";
import HeaderCartLink from "./HeaderCartLink";
import SearchBar from "./SearchBar";
import TopNav from "./TopNav";
import { User } from "lucia";
import NavContainer from "./NavContainer";
import LogoutBtn from "./LogoutBtn";
/**
 * Header component for the application layout.
 * Combines brand elements, navigation (responsive and localized), search, support, and authentication entry.
 * Integrates a hero section below the navigation bar.
 *
 * @component
 * @returns {JSX.Element} A complete header layout with navigation and hero
 */
interface HeaderProps {
  loggedInUser: User | null;
}
export default function Header({ loggedInUser }: HeaderProps) {
  return (
    <header>
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-between items-center gap-2">
          <Branding />
          <SearchBar />
          <div className="flex justify-start items-center gap-4">
            <HeaderCartLink />
            <CallSupport />
          </div>
        </div>
      </div>
      {/* top navigation */}
      <nav className="text-[#003d5d] py-4 bg-gray-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
          <NavContainer />
          {/* nav for +768 screens */}
          <TopNav />
          {loggedInUser ? (
            <LogoutBtn />
          ) : (
            <Link href={"/auth"}>ورود / ثبت نام</Link>
          )}
        </div>
      </nav>
    </header>
  );
}

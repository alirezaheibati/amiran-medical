"use client";
import Link from "next/link";
import Branding from "./Branding";
import CallSupport from "./CallSupport";
import HeaderCartLink from "./HeaderCartLink";
import SearchBar from "./SearchBar";
import { useState } from "react";
import ShowNavBtn from "./ShowNavBtn";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
/**
 * Header component for the application layout.
 * Combines brand elements, navigation (responsive and localized), search, support, and authentication entry.
 * Integrates a hero section below the navigation bar.
 *
 * @component
 * @returns {JSX.Element} A complete header layout with navigation and hero
 */
export default function Header() {
  const [showNav, setShowNav] = useState(false);
  // Show mobile side navigation
  function showNavHandler() {
    setShowNav(true);
  }
  // Hide mobile side navigation
  function hideNavHandler() {
    setShowNav(false);
  }
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
          {/* menu bars btn */}
          <ShowNavBtn OnPressBtn={showNavHandler} />
          {/* side nav for small screens */}
          <SideNav onCloseNav={hideNavHandler} showNav={showNav} />
          {/* nav for +768 screens */}
          <TopNav />
          <Link href={"/auth"}>ورود / ثبت نام</Link>
        </div>
      </nav>
    </header>
  );
}

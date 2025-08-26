"use client";
import { useState } from "react";
import ShowNavBtn from "./ShowNavBtn";
import SideNav from "./SideNav";
/**
 * NavContainer component manages the visibility of the mobile side navigation.
 * It renders a button to toggle the navigation and passes control handlers to child components.
 *
 * @component
 * @returns {JSX.Element} Navigation container for mobile view
 */

export default function NavContainer() {
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
    <>
      {/* menu bars btn */}
      <ShowNavBtn OnPressBtn={showNavHandler} />
      {/* side nav for small screens */}
      <SideNav onCloseNav={hideNavHandler} showNav={showNav} />
    </>
  );
}

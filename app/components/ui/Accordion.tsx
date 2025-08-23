"use client";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";
interface AccordionProps {
  children: ReactNode;
  question: string;
}
/**
 * Accordion component renders a collapsible list item with a question label.
 * Clicking the toggle button reveals or hides the associated content.
 *
 * @param {AccordionProps} props - Component props.
 * @returns {JSX.Element} A styled accordion list item with toggleable content.
 */
export default function Accordion({ children, question }: AccordionProps) {
  const [showDetails, setShowDetails] = useState(false);
  function detailsRevealHandler() {
    setShowDetails((prev) => !prev);
  }
  return (
    <li
      className={`pb-4 border-b last:border-b-0 border-gray-200 text-[#003d5d] mb-4 last:mb-0 overflow-hidden ${
        showDetails ? "h-auto" : "h-16 sm:h-12"
      }`}
    >
      <div className="flex w-full justify-between items-center mb-4 gap-4">
        <p className="font-semibold text-lg">{question}</p>
        <button
          className="font-bold text-xl cursor-pointer"
          onClick={detailsRevealHandler}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${
              showDetails ? "rotate-180" : "rotate-0"
            } transition-transform duration-300`}
          />
        </button>
      </div>
      <div className={`${showDetails ? "opacity-70" : "opacity-0"}`}>
        {children}
      </div>
    </li>
  );
}

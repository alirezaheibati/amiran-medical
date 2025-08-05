"use client";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useEffect, useState } from "react";
interface OnDiscountSliderProps {
  children: ReactNode;
}
/**
 * A responsive horizontal slider component designed to showcase discounted items.
 * Supports manual navigation via chevron buttons and adapts slide count based on viewport width.
 * Uses responsive logic to determine slide translation and resets on window resize.
 *
 * @component
 * @param {OnDiscountSliderProps} props - Contains child elements to be rendered as slides
 * @returns {JSX.Element} A styled slider with responsive behavior and slide controls
 */
export default function DiscountItemsSlider({
  children,
}: OnDiscountSliderProps) {
  const [width, setWidth] = useState(globalThis.innerWidth);
  const [activeSlide, setActiveSlide] = useState(0);
  // Decreases the active slide index (if greater than 0)
  function slideCountDecreaseHandler() {
    setActiveSlide((prev) => {
      if (prev > 0) return --prev;
      else return prev;
    });
  }
  // Increases the active slide index based on screen width and max allowed slides
  function slideCountIncreaseHandler() {
    setActiveSlide((prev) => {
      if (width < 768 && prev < 3) return ++prev;
      else if (width >= 768 && prev < 2) return ++prev;
      else return prev;
    });
  }
  // Resets the slide index on screen resize
  useEffect(() => {
    window.addEventListener("resize", () => setActiveSlide(0));

    return () => {
      window.removeEventListener("resize", () => setActiveSlide(0));
    };
  }, []);
  // Updates the current screen width on resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="px-4 relative">
      <button className="lg:hidden text-slate-50 absolute left-0 top-1/2 -translate-y-1/2 text-2xl cursor-pointer hover:scale-125 transition-transform">
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={slideCountDecreaseHandler}
        />
      </button>
      <button className="lg:hidden text-slate-50 absolute right-0 top-1/2 -translate-y-1/2 text-2xl cursor-pointer hover:scale-125 transition-transform">
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={slideCountIncreaseHandler}
        />
      </button>
      <div className="w-full overflow-hidden relative max-w-[333px] mx-auto md:max-w-[625px] lg:max-w-full">
        <div
          className={`flex justify-around items-center w-[400%] md:w-[200%] lg:w-full py-4 transition-transform duration-1000 ${
            activeSlide === 0
              ? "translate-x-0"
              : activeSlide === 1
              ? "translate-x-1/4"
              : activeSlide === 2
              ? "translate-x-1/2"
              : "translate-x-3/4"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
